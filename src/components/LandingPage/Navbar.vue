
<template>
  <nav class="bg-[#F8FAFC] px-3 md:px-8 ">
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-2">
      
      <!-- Logo -->
      <div class="flex-1 flex justify-center md:justify-start mb-3 md:mb-0">
        <img 
          src="/navlogo.png" 
          alt="Skill Sprint Robot" 
          class="w-[100px] md:w-[130px] h-auto"
        />
      </div>
      
      <!-- Menu and Button Container (15px gap) -->
      <div class="flex flex-col md:flex-row items-center gap-[15px]">
        
        <!-- Menu -->
        <div class="flex flex-nowrap justify-center items-center gap-3 md:gap-6
                    bg-gray-200 px-4 md:px-8 py-2 md:py-4 
                    rounded-full text-xs md:text-sm font-medium text-gray-500">
          <router-link to="/" class="text-blue-600 cursor-pointer transition">Home</router-link>
          <a href="#" class="text-gray-500 hover:text-blue-600 cursor-pointer transition">Community</a>
          <a href="#" class="text-gray-500 hover:text-blue-600 cursor-pointer transition">Sprints</a>
          <a href="#" class="text-gray-500 hover:text-blue-600 cursor-pointer transition">Team</a>
          <router-link to="/AboutUs" class="text-gray-500 hover:text-blue-600 cursor-pointer transition">About Us </router-link>
        </div>

        <!-- Button -->
        <button class="bg-blue-600 text-white px-3 md:px-7 py-2 md:py-4 
                       text-xs md:text-sm rounded-full font-medium 
                       hover:bg-blue-700 transition shadow-sm shadow-blue-100">
          Join the Sprint
        </button>
        
      </div>

      <!-- Right Spacer (Perfect Centering ke liye) -->
      <div class="flex-1 hidden md:block"></div>

    </div>

  </nav>
</template>
