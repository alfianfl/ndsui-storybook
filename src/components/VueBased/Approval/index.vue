<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="approval">
    <div class="main-section">
      <h3>Approval System</h3>
      <div class="pl-20">
        <div class="md:flex md:items-center mb-6">
          <label class="text-sm">
            <b>Tipe Approval</b>
          </label>
          <select
            id="approval-input"
            class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="md:flex md:items-center mb-6">
          <label class="text-sm">
            <b>Approval ID</b>
          </label>
          <select
            id="approval-input"
            class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 py-6 sm:flex sm:flex-row-reverse">
      <button class="btn-nds btn-nds--primary btn-nds--medium">Approve</button>
      <button class="btn-nds btn-nds--danger btn-nds--medium mx-2">
        Reject
      </button>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  data() {
    return {
      digits: "",
    };
  },
  props: {
    errorMsg: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isOtpFilled() {
      return (
        this.digits !== undefined && this.digits !== null && this.digits !== ""
      );
    },
  },
  methods: {
    handleInputChange(e) {
      this.digits = e.target.value;
    },

    async onSubmitOtpHandler() {
      // gunakan ini jika ingin menggunakan actios store dari parent, namun jika menggunakan ini seluruh actions harus di declare di parent
      this.$emit("onSubmitHandler", this.digits);
      console.log("Totp digits", this.digits);
    },
  },
};
</script>

<style scoped>
.btn-nds {
  height: 36px !important;
  width: 100px !important;
  text-align: center !important;
  font-weight: 300 !important;
}
</style>
