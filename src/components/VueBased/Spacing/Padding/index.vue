<template>
  <div class="padding-container">
    <div>
      <h1 class="font-bold text-xl">Padding</h1>
      <div class="p-8 padding-box bg-yellow-400">p-8</div>
      <div class="p-6 padding-box bg-yellow-400">p-6</div>
      <div class="p-4 padding-box bg-yellow-400">p-4</div>
      <div class="p-2 padding-box bg-yellow-400">p-2</div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Padding Single Side</h1>
      <div class="pt-6 padding-box bg-purple-500">pt-6</div>
      <div class="pr-4 padding-box bg-purple-500 text-right">pr-4</div>
      <div class="pb-8 padding-box bg-purple-500">pb-8</div>
      <div class="pl-2 padding-box bg-purple-500">pl-2</div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Padding Horizontal</h1>
      <div class="px-8 padding-box bg-green-500">px-8</div>
      <div class="px-6 padding-box bg-green-500">px-6</div>
      <div class="px-4 padding-box bg-green-500">px-4</div>
      <div class="px-2 padding-box bg-green-500">px-2</div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Padding Vertical</h1>
      <div class="py-8 padding-box bg-blue-500">py-8</div>
      <div class="py-6 padding-box bg-blue-500">py-6</div>
      <div class="py-4 padding-box bg-blue-500">py-4</div>
      <div class="py-2 padding-box bg-blue-500">py-2</div>
      dst ...
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "Padding",
};
</script>
