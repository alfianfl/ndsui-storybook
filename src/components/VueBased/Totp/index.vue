<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="overlay">
    <section class="card">
      <div class="card-header mb-6">
        <img src="../../../assets/img/nds-logo.svg" alt="logo" class="w-28 m-auto" />
        <h1 class="title">Verification TOTP Code</h1>
        <p>We have sent a verification code to your Bankpass</p>
      </div>

      <div class="card-body">
        <div v-if="isLoading" class="loader m-auto"></div>
        <form v-else @submit.prevent="onSubmitOtpHandler">
          <input
            type="text"
            :value="digits"
            :id="`input-otp`"
            :class="`${
              errorMsg && 'outline outline-1 outline-red-500'
            } w-full p-2 pl-4 text-sm text-gray-900 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`"
            placeholder="TOTP"
            @input="handleInputChange"
          />
          <p v-if="errorMsg" style="color: red" class="flex flex-center">
            {{ errorMsg }}
          </p>
          <button
            type="submit"
            :class="`${
              (!isOtpFilled || isLoading) && 'is-disabled'
            } btn-submit-totp`"
            :disabled="!isOtpFilled || isLoading"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import './style.scss';
export default {
  data() {
    return {
      digits: "",
    };
  },
  props: {
    errorMsg: {
      type: String,
      default:""
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.getElementById("input-otp").focus();
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


