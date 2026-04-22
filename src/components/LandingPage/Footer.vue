<template>
  <footer class="w-full bg-white pt-10 px-6 md:px-8 border-t border-gray-100 pb-10">
    <div class="max-w-7xl mx-auto">
      <!-- Links Section: only 3 columns -->
       <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 mb-8">
        <div 
          v-for="(section, i) in footerLinks" 
          :key="i" 
          class="flex flex-col gap-2"
        >
          <h3 class="text-gray-800 font-extrabold text-sm">
            {{ section.title }}
          </h3>
          <router-link 
            v-for="(link, index) in section.links" 
            :key="index"
            :to="link.url"
            :target="link.target || '_self'"
            class="text-gray-500 text-sm font-sm hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 my-6"></div>

      <!-- Bottom Section -->
<div class="flex flex-col sm:flex-row sm:justify-between items-center gap-6">

  <!-- Left: Logo -->
  <div class="flex flex-col items-center sm:items-start">
    <img 
      src="/logo.png" 
      alt="Skill Sprint Logo" 
      class="w-[150px] h-auto mb-1"
    />
    <p class="text-gray-500 text-sm leading-tight">
      © 2026, All Rights Reserved
    </p>
  </div>

  <!-- Right: Icons + Links -->
  <div class="flex flex-col items-center sm:items-end gap-3">

    <!-- Social Icons -->
    <div class="flex gap-5 text-lg text-gray-600">
      <a href="#" class="hover:text-blue-600 transition"><i class="fab fa-instagram"></i></a>
      <a href="#" class="hover:text-blue-600 transition"><i class="fab fa-facebook"></i></a>
      <a href="#" class="hover:text-blue-600 transition"><i class="fab fa-linkedin"></i></a>
    </div>

    <!-- Links Below Icons -->
    <div class="flex gap-4 text-sm text-gray-500">
      <a href="/privacy" class="hover:text-blue-600 transition">Privacy  Policy</a>
      <a href="/licenses" class="hover:text-blue-600 transition">License</a>
    </div>

  </div>

</div>


    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  {
    title: "Menu",
    links: [
      { label: "Community", url: "/approach" },
      { label: "Our Team", url: "/instructor" },
      { label: "Sprints", url: "/curriculum" },
      { label: "About Us", url: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", url: "/contact-us" },
      { label: "Live Chat", url: "/chat" },
      { label: "Help Center", url: "/help" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Templates", url: "/templates" },
      { label: "NutsDev", url: "/nutsdev" },
      { label: "Temply", url: "/temply" },
    ],
  }
]
</script>