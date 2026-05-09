<template>
  <section class="w-full bg-[#F8FAFC] py-14 md:py-20">
    
    <div class="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-12 items-stretch gap-6">

      <!-- Image -->
      <div class="col-span-12 md:col-span-5 flex justify-center md:justify-end">
        <img 
          src="/logo.png" 
          alt="Skill Sprint Robot" 
          class="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] 
                 h-auto md:h-full object-cover 
                 border-4 border-white rounded-[12px] shadow-md"
        />
      </div>

      <!-- Text Card -->
      <div class="col-span-12 md:col-span-7 flex">
        <div class="bg-white rounded-[16px] md:rounded-[20px] shadow-lg 
                    p-5 sm:p-6 md:p-10 
                    w-full h-auto md:h-full 
                    flex flex-col justify-between">

          <!-- Top -->
          <div class="flex flex-col md:flex-row justify-between items-start gap-6">

            <div class="space-y-4 w-full md:max-w-[70%]">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                So... What's Skill Sprint?
              </h2>

              <p class="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Skill Sprint is a 
                <span class="text-blue-500  font-extrabold border-b-2 border-blue-500"   style="font-family: 'Handlee', cursive;"
>
                  STUDENT-POWERED
                </span> 
                community that brings learners together to explore new skills, collaborate on sprints, and build meaningful projects.Here,learning meets  actions in community-driven environment.
              </p>
            </div>

            <!-- Arrow -->
            <div class="hidden md:flex flex-1 justify-center pt-20">
             
               <img 
          src="/arrow.png" 
          alt="Skill Sprint Robot" 
          class="w-full max-w-[100px]"
        />
            </div>

          </div>

          <!-- Bottom -->
          <div class="border-t border-gray-200 pt-5 mt-6">
            <p class="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 text-center md:text-left">
              Brand collaborations
            </p>

            <div class="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 
                        opacity-60 hover:grayscale-0 transition duration-500">
              <img 
                v-for="(logo, index) in logos" 
                :key="index" 
                :src="logo" 
                alt="Brand Logo"
                class="h-6 sm:h-7 md:h-8 object-contain"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const logos = [
  "/FoF Lhr.png",
  "/IxDF.png",
  "/GDG Cloud Lhr.jpg.jpeg",
  "/AWS Cloud Clubs.png",
  "/Superior University Logo.svg",

];
</script>