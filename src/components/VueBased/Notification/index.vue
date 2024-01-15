<template>
  <div
    :class="`nds-alert nds-alert__${type}`"
    role="alert"
  >
    <div class="flex items-center py-1">
      <svg
        class="fill-current h-6 w-6 text-teal-500 mr-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
        />
      </svg>
    </div>
    <div>
      <p class="font-bold text-white">{{title}}</p>
      <p class="text-sm text-white">
        {{message}}
      </p>
    </div>
    <button class="bg-transparent text-white ms-auto -mx-1.5 -my-1.5" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "NdsNotification",
  props: {
    title: { type: String, required: true, default: "Session Expired" },
    message: { type: String, required: true, default: "Make sure you know how these changes affect you." },
    type: { type: String, default: "success" },
  },
};
</script>
