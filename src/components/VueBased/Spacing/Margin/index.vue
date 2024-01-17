<template>
  <div class="margin-container">
    <div>
      <h1 class="font-bold text-xl">Margin</h1>
      <div class="bg-yellow-400 py-1 m-2 rounded-md">
        <div class="m-8 margin-box bg-yellow-300">m-8</div>
        <div class="m-6 margin-box bg-yellow-300">m-6</div>
        <div class="m-4 margin-box bg-yellow-300">m-4</div>
        <div class="m-2 margin-box bg-yellow-300">m-2</div>
      </div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Margin Single Side</h1>
      <div class="bg-purple-400 py-2 m-2 rounded-md">
        <div class="mt-6 margin-box bg-purple-500">mt-6</div>
        <div class="mr-4 margin-box bg-purple-500">mr-4</div>
        <div class="mb-8 margin-box bg-purple-500">mb-8</div>
        <div class="ml-2 margin-box bg-purple-500">ml-2</div>
      </div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Margin Horizontal</h1>
      <div class="bg-green-400 py-2 m-2 rounded-md">
        <div class="mx-8 margin-box bg-green-500">mx-8</div>
        <div class="mx-6 margin-box bg-green-500">mx-6</div>
        <div class="mx-4 margin-box bg-green-500">mx-4</div>
        <div class="mx-2 margin-box bg-green-500">mx-2</div>
      </div>
      dst ...
    </div>
    <div>
      <h1 class="font-bold text-xl">Margin Vertical</h1>
      <div class="bg-blue-400 py-2 m-2 rounded-md">
        <div class="my-8 margin-box bg-blue-500">my-8</div>
        <div class="my-6 margin-box bg-blue-500">my-6</div>
        <div class="my-4 margin-box bg-blue-500">my-4</div>
        <div class="my-2 margin-box bg-blue-500">my-2</div>
      </div>
      dst ...
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "Margin",
};
</script>
