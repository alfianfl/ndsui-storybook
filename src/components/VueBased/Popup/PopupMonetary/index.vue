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
          class="nds-dialog-monetary relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
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
                  v-if="rejected"
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
                <svg
                  v-if="info"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_33_1455)">
                    <path
                      d="M31.9987 5.33398C17.2787 5.33398 5.33203 17.2807 5.33203 32.0007C5.33203 46.7207 17.2787 58.6673 31.9987 58.6673C46.7187 58.6673 58.6654 46.7207 58.6654 32.0007C58.6654 17.2807 46.7187 5.33398 31.9987 5.33398ZM34.6654 50.6673H29.332V45.334H34.6654V50.6673ZM40.1854 30.0007L37.7854 32.454C36.452 33.814 35.492 35.0407 35.012 36.9607C34.7987 37.814 34.6654 38.774 34.6654 40.0007H29.332V38.6673C29.332 37.4407 29.5454 36.2673 29.9187 35.174C30.452 33.6273 31.332 32.2407 32.452 31.1207L35.7587 27.7607C36.9854 26.5873 37.572 24.8273 37.2254 22.9607C36.8787 21.0407 35.3854 19.414 33.5187 18.8807C30.5587 18.054 27.812 19.734 26.932 22.2673C26.612 23.254 25.7854 24.0007 24.7454 24.0007H23.9454C22.3987 24.0007 21.332 22.5073 21.7587 21.014C22.9054 17.094 26.2387 14.1073 30.372 13.4673C34.4254 12.8273 38.292 14.934 40.692 18.2673C43.8387 22.614 42.9054 27.2807 40.1854 30.0007Z"
                      fill="#1E448C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_1455">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  v-if="danger"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.33333V42.6667C0 45.6 2.4 48 5.33333 48H42.6667C45.6 48 48 45.6 48 42.6667V5.33333C48 2.4 45.6 0 42.6667 0H5.33333C2.4 0 0 2.4 0 5.33333ZM35.4667 35.44C34.4267 36.48 32.7467 36.48 31.7067 35.44L24 27.76L16.2933 35.4667C15.2533 36.5067 13.5733 36.5067 12.5333 35.4667C11.4933 34.4267 11.4933 32.7467 12.5333 31.7067L20.24 24L12.5333 16.2933C11.4933 15.2533 11.4933 13.5733 12.5333 12.5333C13.5733 11.4933 15.2533 11.4933 16.2933 12.5333L24 20.24L31.7067 12.56C32.7467 11.52 34.4267 11.52 35.4667 12.56C36.5067 13.6 36.5067 15.28 35.4667 16.32L27.76 24L35.4667 31.68C36.48 32.72 36.48 34.4267 35.4667 35.44Z"
                    fill="#ED5554"
                  />
                </svg>
              </div>
              <div class="mt-3 sm:ml-4 sm:mt-1 sm:text-left">
                <h3
                  :class="classes"
                  id="modal-title"
                >
                  {{title}}
                </h3>
                <div class="mt-3">
                  <p class="text-normal text-black">{{description}}</p>
                  <p class="text-sm text-black">{{date}}</p>
                </div>
                <div v-for="item,i in messages" :key="i" class="mt-3">
                  <p class="text-sm text-black">{{item.title}}</p>
                  <h1 class="text-xl font-bold">{{item.message}}</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 pb-6 sm:flex sm:flex-row-reverse sm:px-6">
            <button class="btn-nds btn-nds--primary btn-nds--medium w-[90px]">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { computed, reactive } from 'vue';

export default {
  name: "PopupMonetary",
  props: {
    success: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    rejected: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      dafault: "Description"
    },
    date: {
      type: String,
      default: "09 Agustus 2021, 10:28:32"
    },
    messages: {
      type: Array,
      default: () => [
        {
          title: 'Jumlah Mutasi',
          message: 'IDR 100,000'
        },
        {
          title: 'Jumlah Mutasi Terikirim',
          message: 'IDR 100,000'
        },
      ]
    }
  },
    setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "text-yellow-500 text-2xl font-bold leading-6": props.rejected,
        "text-blue-900 text-2xl font-bold leading-6": props.info,
        "text-green-500 text-2xl font-bold leading-6": props.success,
        "text-red-500 text-2xl font-bold leading-6": props.danger,
      })),
    };
  },
};
</script>
