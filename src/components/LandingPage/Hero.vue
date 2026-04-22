<template>
  <section class="relative bg-[#F8FAFC] pt-16 md:pt-20 pb-10 text-center px-4 overflow-hidden">
    
    <!-- Floating Cards (only large screens) -->
    <div class="hidden xl:block">
      
      <!-- Left Top -->
      <div class="absolute left-[28%] top-[20%] -translate-x-32 -translate-y-16 rotate-[-12deg]
                  bg-white shadow-md px-3 py-1 rounded-full border border-gray-100
                  text-xs font-medium font-handlee tracking-wide italic">
        💪 flex but deserved
      </div>

      <!-- Right Top -->
      <div class="absolute right-[28%] top-[20%] translate-x-32 -translate-y-16 rotate-[12deg]
                  bg-white shadow-md px-3 py-1 rounded-full border border-gray-100
                  text-xs font-medium font-handlee tracking-wide italic">
        🧠 real projects, real panic
      </div>

      <!-- Left Bottom -->
      <div class="absolute left-[25%] top-[32%] -translate-x-36 rotate-[18deg]
                  bg-white shadow-md px-3 py-1 rounded-full border border-gray-100
                  text-xs font-medium font-handlee tracking-wide italic">
           ⏳ portfolio Loading
      </div>

      <!-- Right Bottom -->
      <div class="absolute right-[23%] top-[32%] translate-x-36 rotate-[-15deg]
                  bg-white shadow-md px-3 py-1 rounded-full border border-gray-100
                  text-xs font-medium font-handlee tracking-wide italic">
       🔖 better than doomscalling
      </div>

    </div>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-4">
      Learn by doing <br />
      <span class="text-dark">Build by collaborating</span>
    </h2>
    
    <!-- Paragraph -->
    <p class="max-w-xl md:max-w-2xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
      A student-driven community where learners connect, collaborate on projects, and grow together.
    </p>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16">
      <button class="w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition">
        I'm in
      </button>
      <button class="w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
        See What We're Building 👀
      </button>
    </div>

    <!-- Image Cards -->
    <div class="flex justify-center gap-3 sm:gap-4 md:-space-x-10 opacity-90 overflow-x-auto md:overflow-visible px-2">
      <div 
        v-for="(img, i) in images" 
        :key="i"
        class="min-w-[120px] sm:min-w-[140px] md:w-52 h-30 sm:h-40 md:h-60 
               border-3 border-white bg-gray-200 rounded-2xl md:rounded-3xl 
               shadow-lg md:shadow-xl overflow-hidden 
               transform transition duration-300 hover:scale-105"
        :class="i % 2 === 0 ? 'md:rotate-3 md:translate-y-4' : 'md:-rotate-3'"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>

  </section>
</template>

<script setup>
const images = [
  "/Speaker.jpg.jpeg",
  "Short Group.jpg.jpeg",
  "/Long Group.jpg.jpeg",
  "/Crowd.JPG.jpeg"
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
</style>