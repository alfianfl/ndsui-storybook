<template>
  <div>
    <div class="grid-template-column mt-6">
      <h1 class="font-bold text-xl">Grid Template Column</h1>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="bg-green-400 text-white text-center py-4">01</div>
        <div class="bg-green-400 text-white text-center py-4">02</div>
        <div class="bg-green-400 text-white text-center py-4">03</div>
        <div class="bg-green-400 text-white text-center py-4">04</div>
        <div class="bg-green-400 text-white text-center py-4">05</div>
        <div class="bg-green-400 text-white text-center py-4">06</div>
        <div class="bg-green-400 text-white text-center py-4">07</div>
        <div class="bg-green-400 text-white text-center py-4">08</div>
        <div class="bg-green-400 text-white text-center py-4">09</div>
      </div>
    </div>
    <div class="grid-with-gap mt-6">
      <h1 class="font-bold text-xl">Grid With Gap</h1>
      <div class="grid gap-x-8 gap-y-4 grid-cols-3">
        <div class="bg-red-400 text-white text-center py-4">01</div>
        <div class="bg-red-400 text-white text-center py-4">02</div>
        <div class="bg-red-400 text-white text-center py-4">03</div>
        <div class="bg-red-400 text-white text-center py-4">04</div>
        <div class="bg-red-400 text-white text-center py-4">05</div>
        <div class="bg-red-400 text-white text-center py-4">06</div>
      </div>
    </div>
    <div class="grid-template-row mt-6">
      <h1 class="font-bold text-xl">Grid Template Rows</h1>
      <div class="grid grid-rows-4 grid-flow-col gap-4">
        <div class="bg-blue-400 text-white text-center py-4">01</div>
        <div class="bg-blue-400 text-white text-center py-4">02</div>
        <div class="bg-blue-400 text-white text-center py-4">03</div>
        <div class="bg-blue-400 text-white text-center py-4">04</div>
      </div>
    </div>
    <div class="grid-row-start mt-6">
      <h1 class="font-bold text-xl">Grid Rows Start</h1>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="bg-purple-400 text-white text-center py-4 row-span-3 ...">
          01
        </div>
        <div
          class="bg-purple-400 text-white text-center py-4 row-span-3 ... col-span-2 ..."
        >
          02
        </div>
        <div
          class="bg-purple-400 text-white text-center py-4 row-span-3 ... row-span-2 col-span-2 ..."
        >
          03
        </div>
      </div>
    </div>
    <div class="grid-with-span mt-6">
      <h1 class="font-bold text-xl">Grid With Span</h1>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-400 text-white text-center py-4 ...">01</div>
        <div class="bg-blue-400 text-white text-center py-4 ...">02</div>
        <div class="bg-blue-400 text-white text-center py-4 ...">03</div>
        <div class="bg-blue-400 text-white text-center py-4 col-span-2 ...">
          04
        </div>
        <div class="bg-blue-400 text-white text-center py-4 ...">05</div>
        <div class="bg-blue-400 text-white text-center py-4 ...">06</div>
        <div class="bg-blue-400 text-white text-center py-4 col-span-2 ...">
          07
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
export default {
  name: 'TextStyle'
};
</script>
