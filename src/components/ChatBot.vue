<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    <!-- Chat Window -->
    <Transition name="chat-fade">
      <div 
        v-if="isOpen" 
        class="pointer-events-auto mb-4 w-[340px] sm:w-[380px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col transition-all"
        style="height: 550px; max-height: calc(100vh - 120px);"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-4 text-white flex justify-between items-center shrink-0 relative overflow-hidden">
          <!-- Abstract Background Pattern -->
          <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
          
          <div class="flex items-center gap-3 relative z-10">
            <div class="relative">
              <div class="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
                <PhRobot :size="26" weight="fill" class="text-white drop-shadow-md" />
              </div>
              <div class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-indigo-600 rounded-full"></div>
            </div>
            <div>
              <h3 class="font-bold text-lg leading-tight tracking-wide drop-shadow-sm flex items-center gap-2">
                Skill Sprint Assistant
                <span class="bg-white/20 text-[10px] px-1.5 py-0.5 rounded text-white backdrop-blur-sm border border-white/20">Beta</span>
              </h3>
              <p class="text-xs text-blue-100 opacity-90 flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                Skill Sprint Assistant
              </p>
            </div>
          </div>
          <button @click="toggleChat" class="relative z-10 text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
            <PhX :size="20" weight="bold" />
          </button>
        </div>

        <!-- Chat Area -->
        <div class="flex-1 overflow-y-auto p-5 space-y-5 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 scroll-smooth custom-scrollbar" ref="chatContainer">
          
          <!-- Date Separator -->
          <div class="flex justify-center">
            <span class="text-[11px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">Today</span>
          </div>

          <!-- Bot Greeting -->
          <div class="flex items-end gap-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shrink-0 shadow-md transform transition-transform group-hover:scale-105">
              <PhRobot :size="20" weight="fill" class="text-white" />
            </div>
            <div class="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700 max-w-[85%] relative">
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200">
                Hello! 👋 I'm <span class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Gizmo AI</span>, your intelligent assistant for Skill Sprint.
              </p>
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200 mt-2">
                I can help you with community insights, ROI reports, and navigating the platform. How can I assist you today?
              </p>
            </div>
          </div>

          <!-- Action Chips -->
          <div class="flex flex-wrap gap-2 pl-11">
            <button class="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-full transition-colors whitespace-nowrap">
              View ROI Report
            </button>
            <button class="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full transition-colors whitespace-nowrap">
              Community Growth
            </button>
          </div>

          <!-- User Message Example -->
          <div class="flex items-end gap-2.5 justify-end group">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3.5 rounded-2xl rounded-br-sm shadow-md max-w-[85%] transform transition-transform group-hover:scale-[1.02]">
              <p class="text-[14px] leading-relaxed">Can you generate a report on our recent community growth and sentiment?</p>
            </div>
          </div>

          <!-- Bot Answer (In Scope) -->
          <div class="flex items-end gap-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shrink-0 shadow-md transform transition-transform group-hover:scale-105">
              <PhRobot :size="20" weight="fill" class="text-white" />
            </div>
            <div class="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 dark:border-gray-700 max-w-[85%]">
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200">
                Certainly! Here is a high-level summary of your community growth for the last 30 days:
              </p>
              <div class="mt-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs text-gray-500 font-medium">Active Users</span>
                  <span class="text-xs font-bold text-emerald-500">+12.4%</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 font-medium">Sentiment Score</span>
                  <span class="text-xs font-bold text-indigo-500">8.7/10</span>
                </div>
              </div>
            </div>
          </div>

          <!-- User Out of Scope Message -->
          <div class="flex items-end gap-2.5 justify-end group mt-4">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3.5 rounded-2xl rounded-br-sm shadow-md max-w-[85%] transform transition-transform group-hover:scale-[1.02]">
              <p class="text-[14px] leading-relaxed">What is the weather like in Tokyo right now? Also, can you write a python script for scraping?</p>
            </div>
          </div>

          <!-- Bot Refusal (Out of Scope - Graceful Refusal) -->
          <div class="flex items-end gap-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center shrink-0 shadow-md transform transition-transform group-hover:scale-105">
              <PhRobot :size="20" weight="fill" class="text-white" />
            </div>
            <div class="bg-white dark:bg-gray-800 p-3.5 rounded-2xl rounded-bl-sm shadow-sm border border-orange-100 dark:border-orange-900/30 max-w-[85%] relative overflow-hidden">
              <div class="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200">
                I'm sorry, I cannot assist with that request. 
              </p>
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200 mt-2">
                My knowledge is specifically confined to the <strong class="font-semibold">Skill Sprint</strong> platform, our internal features, community insights, and related documentation. 
              </p>
              <p class="text-[14px] leading-relaxed text-gray-700 dark:text-gray-200 mt-2">
                For general inquiries or topics outside this scope, please consult external resources or reach out to our <a href="/contact" class="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">human support team</a>.
              </p>
            </div>
          </div>

        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shrink-0">
          <form @submit.prevent="sendMessage" class="relative flex items-center shadow-sm rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-indigo-500/30 focus-within:border-indigo-500 transition-all duration-200">
            <input 
              type="text" 
              v-model="inputQuery"
              placeholder="Ask Gizmo AI a question..." 
              class="w-full bg-transparent text-gray-800 dark:text-gray-200 text-sm py-3.5 pl-5 pr-14 focus:outline-none placeholder-gray-400"
            />
            <button 
              type="submit" 
              class="absolute right-1.5 w-9 h-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transform active:scale-95"
              :disabled="!inputQuery.trim()"
              :class="{'opacity-50 cursor-not-allowed hover:bg-indigo-600 hover:scale-100': !inputQuery.trim(), 'hover:-translate-y-0.5 hover:shadow-lg': inputQuery.trim()}"
            >
              <PhPaperPlaneRight :size="18" weight="fill" class="-ml-0.5" />
            </button>
          </form>
          <div class="text-center mt-3 flex items-center justify-center gap-1.5">
            <PhRobot :size="12" weight="fill" class="text-gray-400" />
            <span class="text-[11px] font-medium text-gray-400">Powered by Gizmo AI</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Floating Toggle Button -->
    <button 
      @click="toggleChat"
      class="pointer-events-auto relative group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-full shadow-[0_10px_25px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_20px_35px_-5px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
      :class="isOpen ? 'scale-90 opacity-0 pointer-events-none absolute' : 'scale-100 opacity-100'"
    >
      <PhRobot :size="32" weight="fill" class="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-md" />
      
      <!-- Notification Badge -->
      <span class="absolute top-0 right-0 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white shadow-sm flex items-center justify-center">
          <span class="text-[8px] font-bold text-white leading-none">1</span>
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { PhRobot, PhX, PhPaperPlaneRight } from '@phosphor-icons/vue'

const isOpen = ref(false)
const inputQuery = ref('')
const chatContainer = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

const sendMessage = () => {
  if (!inputQuery.value.trim()) return
  // Dummy logic to clear input
  inputQuery.value = ''
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}

watch(isOpen, (newVal) => {
  if (newVal) {
    scrollToBottom()
  }
})
</script>

<style scoped>
.chat-fade-enter-active,
.chat-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom right;
}

.chat-fade-enter-from,
.chat-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

/* Custom Scrollbar for Chat Area */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.4);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.8);
}
</style>
