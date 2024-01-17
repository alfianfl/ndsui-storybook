<template>
  <div class="space-container">
    <div>
      <h1 class="font-bold text-xl">Space Between Horizontal</h1>
      <div class="flex space-x-4 text-white mt-4">
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">01</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">03</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">04</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">05</div>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-xl">space Between Vertical</h1>
      <div class="flex flex-col space-y-4 text-white mt-4">
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">01</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">03</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">04</div>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-xl">Space Reversing Children</h1>
      <div class="flex flex-row-reverse space-x-4 space-x-reverse text-white mt-4">
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">01</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">03</div>
                <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">04</div>
        <div class="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">05</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "Space",
};
</script>
