<template>
  <!-- FULL WIDTH BACKGROUND -->
  <section ref="statsSection" class="w-full bg-[#F8FAFC] py-3 md:py-20">

    <!-- CONTAINER -->
    <div class="max-w-7xl mx-auto px-6">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-start gap-12">

        <!-- Heading -->
        <div class="max-w-md text-center md:text-left">
          <h2 class="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-tight">
            Our Damage So Far
          </h2>
          <p class="text-gray-500 text-base sm:text-lg mt-2 font-medium">
            Proof we're not just talking
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 w-full md:w-auto text-center md:text-left">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-600">
              {{ animatedValues[stat.label] }}+
            </div>
            <div class="text-lg sm:text-xl md:text-xl font-extrabold uppercase mt-1">{{ stat.label }}</div>
            <div class="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">
              {{ stat.subtext }}
            </div>
          </div>
        </div>

      </div>

      <!-- Map Image -->
      <div class="mt-5 flex justify-center">
        <img 
          src="/mapremovebg.png" 
          alt="Global Presence Map" 
          class="w-full max-w-5xl h-auto opacity-90"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Stats data
const stats = [
  { value: 1000, label: 'Students', subtext: 'Squad Expanding' },
  { value: 20, label: 'Universities', subtext: 'Campus Approved' },
  { value: 10, label: 'Mentors', subtext: 'Grownups who help' }
];

// Reactive object to store animated values
const animatedValues = reactive({
  'Students': 0,
  'Universities': 0,
  'Mentors': 0
});

// Section reference
const statsSection = ref(null);

// Count-up animation function
const animateCount = (label, target) => {
  let current = 0;
  const increment = target / 100; // 100 steps
  const interval = setInterval(() => {
    current += increment;
    if(current >= target){
      animatedValues[label] = target;
      clearInterval(interval);
    } else {
      animatedValues[label] = Math.floor(current);
    }
  }, 15); // ~1.5s animation
};

// Trigger animation when section is visible
const handleScroll = () => {
  if (!statsSection.value) return;
  const rect = statsSection.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    stats.forEach(stat => animateCount(stat.label, stat.value));
    window.removeEventListener('scroll', handleScroll);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>