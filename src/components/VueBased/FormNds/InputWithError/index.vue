<template>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-2/3">
      <input
        type="text"
        :id="`input-otp`"
        class="outline outline-1 outline-red-500 w-full py-1 pl-4 text-sm text-gray-900 border rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="TOTP"
      />   
       <p style="color: red" class="text-right">
        Input yang anda masukan salah!
      </p>
    </div>
  </div>
</template>

<script>
import "./style.scss";

export default {
  name: "InputWithError",
};
</script>
