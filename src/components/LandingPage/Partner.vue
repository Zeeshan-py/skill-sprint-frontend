<template>
  <section class="relative w-full py-20 bg-gradient-to-b from-[#F8FAFC] via-[#e6f0fa] to-[#bcd4ea] overflow-hidden">
    <!-- Content Wrapper -->
    <div class="relative max-w-7xl mx-auto px-6 flex justify-center">

      <!-- Card -->
      <div class="relative w-full bg-white rounded-3xl shadow-lg px-6 sm:px-10 py-12 sm:py-16 text-center z-10">
        
        <!-- Text -->
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Partner with 
          <span class="text-blue-600 relative inline-block" >
            Skill Sprint
            <span class="absolute left-0 -bottom-1 w-full h-[2px] sm:h-[3px] bg-blue-500 rotate-[-3deg]"></span>
            <span class="absolute left-0 -bottom-2 w-full h-[2px] sm:h-[3px] bg-blue-500 rotate-[-3deg]"></span>

          </span>
        </h2>

        <p class="text-gray-600 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
          Collaborate with us to empower students globally.
        </p>

        <button class="mt-6 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow hover:bg-blue-700 transition">
          Let’s build together  <span class="inline-block brightness-[6] grayscale contrast-[0.9] sepia-[2]">🤝</span>

        </button>
      </div>

      <!-- LOGO (OVERLAPPING & ANGLED) -->
      <div class="absolute right-[-120px] z-10 sm:right-[-200px] md:right-[-300px] top-1/2 -translate-y-1/2 pointer-events-none">
        <img 
          src="/sidelogo.png" 
          alt="logo"
          class="w-[200px] sm:w-[350px] md:w-[600px] h-auto object-contain rotate-[-50deg]"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
// no script needed
</script>