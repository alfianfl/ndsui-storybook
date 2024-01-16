<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="nds-dialog-apporval relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start m-4">
              <div
                class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-12 sm:w-12"
              >
                <svg
                  v-if="success"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_33_1194)">
                    <path
                      d="M31.9987 5.33398C17.2787 5.33398 5.33203 17.2807 5.33203 32.0007C5.33203 46.7207 17.2787 58.6673 31.9987 58.6673C46.7187 58.6673 58.6654 46.7207 58.6654 32.0007C58.6654 17.2807 46.7187 5.33398 31.9987 5.33398ZM24.772 43.4407L15.1987 33.8673C14.1587 32.8273 14.1587 31.1473 15.1987 30.1073C16.2387 29.0673 17.9187 29.0673 18.9587 30.1073L26.6654 37.7873L45.012 19.4407C46.052 18.4007 47.732 18.4007 48.772 19.4407C49.812 20.4807 49.812 22.1607 48.772 23.2007L28.532 43.4407C27.5187 44.4807 25.812 44.4807 24.772 43.4407Z"
                      fill="#1EC759"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_1194">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  v-else
                  width="84"
                  height="84"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9997 5.33398C17.2797 5.33398 5.33301 17.2807 5.33301 32.0007C5.33301 46.7207 17.2797 58.6673 31.9997 58.6673C46.7197 58.6673 58.6663 46.7207 58.6663 32.0007C58.6663 17.2807 46.7197 5.33398 31.9997 5.33398ZM31.9997 34.6673C30.533 34.6673 29.333 33.4673 29.333 32.0007V21.334C29.333 19.8673 30.533 18.6673 31.9997 18.6673C33.4663 18.6673 34.6663 19.8673 34.6663 21.334V32.0007C34.6663 33.4673 33.4663 34.6673 31.9997 34.6673ZM34.6663 45.334H29.333V40.0007H34.6663V45.334Z"
                    fill="#F7A738"
                  />
                </svg>
              </div>
              <div class="mt-3 sm:ml-4 sm:mt-1 sm:text-left">
                <h3 :class="`${success ? 'text-green-500' : 'text-yellow-500'} text-2xl font-bold leading-6`" id="modal-title">
                  {{ success ? "Success!" : "Rejected" }}
                </h3>
                <div class="mt-3">
                  <p class="text-sm text-black">Description</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
            <button class="btn-nds btn-nds--primary btn-nds--medium w-[90px]">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "PopupSuccessRejected",
  props: {
    success: {
      type: Boolean,
      default: false,
    },
    rejected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
