<template>
  <section class="py-24 md:py-32 px-6 bg-[#F8FAFC] overflow-hidden relative">
    
    <!-- Heading -->
    <div class="max-w-4xl mx-auto text-center mb-20 relative">
      <h2 class="text-gray-900 text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
        Student Receipts
      </h2>
      <p class="text-gray-500 text-xl font-medium">
        Students said this. We didn't make it up.
      </p>
    </div>

    <!-- Arrow -->
    <img 
      src="/rightarrow.png"  
      class="hidden md:block absolute left-[30%] top-[220px] w-[110px] rotate-[-20deg] opacity-100"
    />


    <!-- Cards Container -->
    <div class="max-w-4xl mx-auto relative h-[800px] md:h-[550px]">

      <!-- Card 1 -->
      <div
        class="absolute z-20 top-10 left-4 w-full md:w-80 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 rounded-[2rem] transform md:-rotate-6 transition-all duration-300 scale-90 sm:scale-100
               hover:md:scale-110 hover:md:z-50 hover:md:rotate-0"
      >
        <p class="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
          "This course made consistency feel realistic. Instead of guessing every time, I now follow a process that actually fits my routine."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">JP</div>
          <span class="text-sm font-bold text-gray-900">Jordan P.</span>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="absolute z-20 top-[-20px] left-[32%] w-full md:w-[350px] bg-white border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-8 rounded-[2rem] transform md:rotate-2 transition-all duration-300 scale-90 sm:scale-100
               hover:md:scale-110 hover:md:z-50 hover:md:rotate-0"
      >
        <p class="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
          "I finally understand what to post and why it works. Takko gave me structure without making content feel forced or overwhelming."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">AR</div>
          <span class="text-sm font-bold text-gray-900">Alex R.</span>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="absolute z-20 top-20 right-6 w-full md:w-80 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 rounded-[2rem] transform md:rotate-6 transition-all duration-300 scale-90 sm:scale-100
               hover:md:scale-110 hover:md:z-50 hover:md:rotate-0"
      >
        <p class="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
          "They helped me stop overthinking content and start posting with confidence. Everything feels simpler and easier to stick with."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">ET</div>
          <span class="text-sm font-bold text-gray-900">Emily T.</span>
        </div>
      </div>

      <!-- Card 4 -->
      <div
        class="absolute z-20 bottom-15 right-[25%] w-full md:w-80 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 rounded-[2rem] transform md:-rotate-2 transition-all duration-300 scale-90 sm:scale-100
               hover:md:scale-110 hover:md:z-50 hover:md:rotate-0"
      >
        <p class="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
          "Takko gave me clarity. I don't waste time guessing what to post anymore, and that alone made a huge difference for me."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">LM</div>
          <span class="text-sm font-bold text-gray-900">Lena M.</span>
        </div>
      </div>

      <!-- Card 5 -->
      <div
        class="absolute z-20 bottom-18 left-[7%] w-full md:w-80 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 rounded-[2rem] transform md:-rotate-2 transition-all duration-300 scale-90 sm:scale-100
               hover:md:scale-110 hover:md:z-50 hover:md:rotate-0"
      >
        <p class="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
          "Takko gave me clarity. I don't waste time guessing what to post anymore, and that alone made a huge difference for me."
        </p>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">LM</div>
          <span class="text-sm font-bold text-gray-900">Lena M.</span>
        </div>
      </div>

    </div>
  </section>
</template>