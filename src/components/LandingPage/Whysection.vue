<template>
  <section class="bg-[#0B101B] py-16 md:py-32 px-4 sm:px-6 overflow-hidden">
    <div class="max-w-4xl mx-auto text-center mb-12 md:mb-24">
      <h2 class="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">
        Why Skill Sprint Exists
      </h2>
      <p class="text-gray-400 text-base sm:text-lg font-medium">
        Students said this. We didn't make it up.
      </p>
    </div>

    <!-- Cards Wrapper -->
    <div class="relative flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-0 md:h-[380px]">

      <!-- LEFT CARD -->
      <div
        class="transform md:absolute md:top-5 md:left-1/2
               md:-translate-x-[380px] md:rotate-[5deg]
               sm:-translate-x-[180px] sm:rotate-[3deg]
               hover:md:rotate-0 hover:scale-105 transition-all duration-500"
      >
        <div class="w-[260px] sm:w-[240px] md:w-[260px] bg-white rounded-xl p-5 shadow-xl flex flex-col min-h-[300px]">
          <div class="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                      <span class="inline-block brightness-[6] grayscale contrast-[0.9] sepia-[2.5]">👥</span>

          </div>
   
         <p class="text-[12px] font-['Archivo'] font-black text-gray-500 lowercase mb-3">
         Community-driven learning
         </p>

          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-auto">
            You learn with people who are also confused but motivated.
          </h3>

          <span class="mt-4 inline-block bg-blue-50 text-blue-500 text-[14px] sm:text-[15px] font-extrabold px-3 py-1 rounded-full border border-blue-100">
            No solo grind
          </span>
        </div>
      </div>

      <!-- CENTER CARD -->
      <div
        class="transform md:absolute md:top-0 md:left-1/2
               md:-translate-x-1/2 md:rotate-[-4deg]
               sm:rotate-0
               hover:md:scale-105 transition-all duration-500"
      >
        <div class="w-[280px] sm:w-[260px] md:w-[280px] bg-white rounded-xl p-5 shadow-2xl border-4 border-blue-500/10 flex flex-col min-h-[280px]">
          <div class="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
        <span class="inline-block brightness-[6] grayscale contrast-[0.9] sepia-[2]">🧩</span>
          </div>

          <p class="text-[12px] font-black text-gray-500 lowercase tracking- mb-3">
            Multi-disciplinary sprints
          </p>

          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-auto">
            Tech. Marketing. Business. Design.
          </h3>

          <span class="mt-4 inline-block bg-blue-50 text-blue-500 text-[14px] sm:text-[15px] font-extrabold px-3 py-1 rounded-full border border-blue-200">
            Mix skills, make magic
          </span>
        </div>
      </div>

      <!-- RIGHT CARD -->
      <div
        class="transform md:absolute md:top-10 md:left-1/2
               md:translate-x-[80px] md:rotate-[5deg]
               sm:translate-x-0 sm:rotate-[2deg]
               hover:md:rotate-0 hover:scale-105 transition-all duration-500"
      >
        <div class="w-[260px] sm:w-[240px] md:w-[260px] bg-white rounded-xl p-5 shadow-xl flex flex-col min-h-[270px]">
          <div class="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
               <span class="inline-block brightness-[6] grayscale contrast-[0.9] sepia-[2]">🤝</span>
          </div>

          <p class="text-[12px] font-black text-gray-500 uppercase mb-3">
            Free & Open
          </p>

          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-auto">
            No paywalls. No secret handshakes.
          </h3>

          <span class="mt-4 inline-block bg-blue-100 text-blue-500 text-[14px] sm:text-[15px] font-extrabold px-3 py-1 rounded-full border border-blue-200">
            yes, actually free
          </span>
        </div>
      </div>

    </div>
  </section>
</template>


