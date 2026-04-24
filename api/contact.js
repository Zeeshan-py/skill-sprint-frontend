import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export default async function handler(req, res) {
  // Sirf POST requests ko allow karein
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // Frontend se aane wala data receive karein
    const { fullName, email, phone, organization, purpose, message } = req.body;

    // JWT Auth Client setup karein
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    // Google Sheets Document Initialize karein
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];

    // Add row to Google Sheet
    await sheet.addRow({
        Name: fullName || '',
        Email: email || '',
        Phone: phone || '',
        Organization: organization || '',
        Purpose: purpose || '',
        Message: message || '',
        'Submitted At': new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Karachi'
        })
    });

    // Frontend ko wapas success message bhej dein
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted and saved to Google Sheets successfully!' 
    });
  } catch (error) {
    console.error("Backend Error:", error);
    return res.status(500).json({ success: false, message: 'Internal Server Error. Check your Vercel Environment Variables.' });
  }
}
