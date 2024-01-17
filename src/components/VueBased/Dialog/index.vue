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
          class="nds-dialog relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start m-4">
              <div
                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div class="mt-3 sm:ml-4 sm:mt-1 sm:text-left">
                <h3
                  class="text-2xl font-bold leading-6 text-red-500"
                  id="modal-title"
                >
                  Peringatan!
                </h3>
                <div class="mt-3">
                  <p class="text-sm text-red-500">
                    Dengan melakukan Login pada aplikasi NDS, maka anda memahami
                    dan menyetujui bahwa seluruh informasi dalam aplikasi ini
                    merupakan informasi Rahasia yang hanya digunakan untuk
                    kepentingan internal BRI serta dilarang menyalahgunakan atau
                    menyebarluaskan kepada pihak eksternal manapun.
                  </p>
                </div>
                <div class="mt-3">
                  <p class="text-sm text-black">
                    Segala pemanfaatan Informasi Rahasia yang menyangkut nasabah
                    BRI tunduk terhadap peraturan perundang-undangan terkait
                    kerahasiaan informasi termasuk namun tidak terbatas pada
                    Undang-undang Perlindungan Data Pribadi, Undang-undang
                    Perbankan, Undang-undang Informasi dan Transaksi Elektronik,
                    serta peraturan perundang-undangan terkait termasuk
                    peraturan turunannya. Penyalahgunaan atau pembocoran
                    informasi Rahasia tersebut dapat dikenakan sanksi pidana
                    penjara maksimal 10 tahun dan dengan maksimal 8 miliar
                    rupiah mengacu pada perundang-undangan tersebut diatas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6">
            <button class="btn-nds btn-nds--danger btn-nds--medium ml-2">
              Tidak Setuju
            </button>
            <button class="btn-nds btn-nds--primary btn-nds--medium">
              Saya Mengerti dan Setuju
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
export default {
  name: "NdsDialog",
};
</script>
