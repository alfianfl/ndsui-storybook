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
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.9987 0.333984C12.2787 0.333984 0.332031 12.2807 0.332031 27.0007C0.332031 41.7207 12.2787 53.6673 26.9987 53.6673C41.7187 53.6673 53.6654 41.7207 53.6654 27.0007C53.6654 12.2807 41.7187 0.333984 26.9987 0.333984ZM29.6654 45.6673H24.332V40.334H29.6654V45.6673ZM35.1854 25.0007L32.7854 27.454C31.452 28.814 30.492 30.0407 30.012 31.9607C29.7987 32.814 29.6654 33.774 29.6654 35.0007H24.332V33.6673C24.332 32.4407 24.5454 31.2673 24.9187 30.174C25.452 28.6273 26.332 27.2407 27.452 26.1207L30.7587 22.7607C31.9854 21.5873 32.572 19.8273 32.2254 17.9607C31.8787 16.0407 30.3854 14.414 28.5187 13.8807C25.5587 13.054 22.812 14.734 21.932 17.2673C21.612 18.254 20.7854 19.0007 19.7454 19.0007H18.9454C17.3987 19.0007 16.332 17.5073 16.7587 16.014C17.9054 12.094 21.2387 9.10732 25.372 8.46732C29.4254 7.82732 33.292 9.93398 35.692 13.2673C38.8387 17.614 37.9054 22.2807 35.1854 25.0007Z"
                    fill="#1E448C"
                  />
                </svg>
              </div>
              <div class="mt-3 sm:ml-4 sm:mt-1 sm:text-left">
                <h3
                  class="text-2xl font-bold leading-6 text-blue-900"
                  id="modal-title"
                >
                  Konfirmasi
                </h3>
                <div class="mt-3">
                  <p class="text-sm text-black">Desc</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
            <button class="btn-nds btn-nds--danger btn-nds--medium ml-2">
              Cancel
            </button>
            <button class="btn-nds btn-nds--primary btn-nds--medium">
              Submit
            </button>
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
  name: "PopupConfirmation",
};
</script>
