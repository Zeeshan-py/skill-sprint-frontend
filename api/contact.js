export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Sirf POST requests ko allow karein
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL; // Vercel mein sirf ye ek variable chahiye
    
    if (!scriptUrl) {
      return res.status(500).json({ success: false, message: 'Google Script URL is missing in Vercel Environment Variables.' });
    }

    // Google App Script Web App ko data bhejain
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const responseText = await response.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      throw new Error(`Google Script returned invalid JSON (Maybe a permissions error): ${responseText.substring(0, 150)}`);
    }

    if (result.status === 'error') {
      throw new Error(`App Script Error: ${result.message}`);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted and saved to Google Sheets successfully!' 
    });

  } catch (error) {
    console.error("Backend Error:", error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Internal Server Error while connecting to App Script.',
      errorDetails: error.toString()
    });
  }
}
