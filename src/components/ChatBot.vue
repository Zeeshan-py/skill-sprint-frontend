<template>
  <!-- Floating Chat Button -->
  <button
    v-if="!isOpen"
    @click="openChat"
    id="chatbot-trigger"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 text-white
           shadow-lg shadow-blue-600/30 flex items-center justify-center
           hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-110
           active:scale-95 transition-all duration-300 cursor-pointer group"
    aria-label="Open chat"
  >
    <!-- Chat icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>

    <!-- Pulse ring -->
    <span class="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></span>
  </button>

  <!-- Chat Window -->
  <Transition name="chat-pop">
    <div
      v-if="isOpen"
      id="chatbot-window"
      class="fixed bottom-6 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)]
             bg-white rounded-2xl shadow-2xl shadow-black/15
             flex flex-col overflow-hidden"
      style="height: 520px; max-height: calc(100vh - 3rem);"
    >
      <!-- Header -->
      <div class="bg-blue-600 px-5 py-4 flex items-center justify-between shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-bold text-sm leading-tight">Gizmo</h3>
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span class="text-blue-100 text-xs">Online</span>
            </div>
          </div>
        </div>
        <button
          @click="closeChat"
          id="chatbot-close"
          class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center
                 transition-colors cursor-pointer"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages Area -->
      <div
        ref="messagesContainer"
        id="chatbot-messages"
        class="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8FAFC]"
        style="scroll-behavior: smooth;"
      >
        <!-- Welcome message -->
        <div v-if="messages.length === 0" class="flex flex-col items-center justify-center h-full text-center px-4 gap-3">
          <div class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <h4 class="text-gray-800 font-bold text-base">Hey there! 👋</h4>
          <p class="text-gray-500 text-sm leading-relaxed">
            I'm the Skill Sprint Bot. Ask me anything about our community, sprints, events, or how to get started!
          </p>
          <!-- Quick action buttons -->
          <div class="flex flex-wrap justify-center gap-2 mt-2">
            <button
              v-for="(q, i) in quickQuestions"
              :key="i"
              @click="sendQuickQuestion(q)"
              class="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-gray-200
                     text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200
                     transition-all duration-200 cursor-pointer"
            >
              {{ q }}
            </button>
          </div>
        </div>

        <!-- Message bubbles -->
        <template v-for="(msg, i) in messages" :key="i">
          <!-- User message -->
          <div v-if="msg.role === 'user'" class="flex justify-end">
            <div class="max-w-[80%] bg-blue-600 text-white px-4 py-2.5 rounded-2xl rounded-br-md
                        text-sm leading-relaxed shadow-sm">
              {{ msg.content }}
            </div>
          </div>

          <!-- Bot message -->
          <div v-else class="flex justify-start gap-2">
            <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div class="max-w-[80%] bg-white text-gray-800 px-4 py-2.5 rounded-2xl rounded-bl-md
                        text-sm leading-relaxed shadow-sm border border-gray-100"
                 v-html="formatMessage(msg.content)">
            </div>
          </div>
        </template>

        <!-- Typing indicator -->
        <div v-if="isLoading" class="flex justify-start gap-2">
          <div class="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div class="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 flex items-center gap-1.5">
            <span class="typing-dot w-2 h-2 bg-gray-400 rounded-full"></span>
            <span class="typing-dot w-2 h-2 bg-gray-400 rounded-full" style="animation-delay: 0.15s"></span>
            <span class="typing-dot w-2 h-2 bg-gray-400 rounded-full" style="animation-delay: 0.3s"></span>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="px-4 py-3 bg-white border-t border-gray-100 shrink-0">
        <div class="flex items-center gap-2">
          <input
            ref="chatInput"
            v-model="inputText"
            @keydown.enter.prevent="sendMessage"
            id="chatbot-input"
            type="text"
            placeholder="Type a message..."
            :disabled="isLoading"
            class="flex-1 px-4 py-2.5 bg-[#F8FAFC] border border-gray-200 rounded-full text-sm
                   text-gray-800 placeholder-gray-400
                   focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                   disabled:opacity-50 transition-all duration-200"
          />
          <button
            @click="sendMessage"
            id="chatbot-send"
            :disabled="!inputText.trim() || isLoading"
            class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center
                   hover:bg-blue-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed
                   transition-all duration-200 shrink-0 cursor-pointer"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
        <p class="text-center text-[10px] text-gray-400 mt-2">
          Gizmo · Skill Sprint AI
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

const isOpen = ref(false)
const isLoading = ref(false)
const inputText = ref('')
const messages = ref([])
const messagesContainer = ref(null)
const chatInput = ref(null)

const quickQuestions = [
  'What is Skill Sprint?',
  'How do I join?',
  'Upcoming events?',
  'Contact support',
]

// Determine API base URL
const API_BASE = import.meta.env.VITE_API_BASE || ''

const openChat = () => {
  isOpen.value = true
  nextTick(() => {
    chatInput.value?.focus()
  })
}

const closeChat = () => {
  isOpen.value = false
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const formatMessage = (text) => {
  if (!text) return ''
  // Convert **bold** to <strong>
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  // Convert line breaks
  formatted = formatted.replace(/\n/g, '<br>')
  return formatted
}

const sendQuickQuestion = (question) => {
  inputText.value = question
  sendMessage()
}

const sendMessage = async () => {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return

  // Add user message
  messages.value.push({ role: 'user', content: text })
  inputText.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value.map(m => ({ role: m.role, content: m.content }))
      }),
    })

    const data = await response.json()

    if (data.success && data.reply) {
      messages.value.push({ role: 'assistant', content: data.reply })
    } else {
      messages.value.push({
        role: 'assistant',
        content: data.message || 'Sorry, something went wrong. Please try again!'
      })
    }
  } catch (error) {
    console.error('Chat error:', error)
    messages.value.push({
      role: 'assistant',
      content: 'Oops! I couldn\'t connect right now. Please check your connection and try again.'
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
    nextTick(() => {
      chatInput.value?.focus()
    })
  }
}

// Watch messages for auto-scroll
watch(messages, () => scrollToBottom(), { deep: true })
</script>

<style scoped>
/* Chat pop-in animation */
.chat-pop-enter-active {
  animation: chatPopIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.chat-pop-leave-active {
  animation: chatPopOut 0.25s cubic-bezier(0.55, 0, 1, 0.45);
}

@keyframes chatPopIn {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes chatPopOut {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translateY(30px);
  }
}

/* Typing dots animation */
.typing-dot {
  animation: typingBounce 1.2s infinite ease-in-out;
}

@keyframes typingBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

/* Custom scrollbar for messages */
#chatbot-messages::-webkit-scrollbar {
  width: 4px;
}
#chatbot-messages::-webkit-scrollbar-track {
  background: transparent;
}
#chatbot-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
#chatbot-messages::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
