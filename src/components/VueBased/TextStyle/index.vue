<template>
  <div class="font-container">
    <div>
      <h1 class="font-bold text-xl">Text Size</h1>
      <div class="my-3">
        <h1>Text Small</h1>
        <p class="text-sm ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Text Base</h1>
        <p class="text-base ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Text Large</h1>
        <p class="text-lg ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Text xl</h1>
        <p class="text-xl ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Text 2xl</h1>
        <p class="text-2xl ...">The quick brown fox ...</p>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-xl">Text Style</h1>
      <div class="mt-6 mb-3">
        <h1>Text Italic</h1>
        <p class="italic ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Font Light</h1>
        <p class="font-light ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Font Normal</h1>
        <p class="font-normal ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Font medium</h1>
        <p class="font-medium ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Font semibold</h1>
        <p class="font-semibold ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Font Bold</h1>
        <p class="font-bold ...">The quick brown fox ...</p>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-xl">Text Decoration</h1>
      <div class="mt-6 mb-3">
        <h1>Underline</h1>
        <p class="underline ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Overline</h1>
        <p class="overline ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>Line Through</h1>
        <p class="line-through ...">The quick brown fox ...</p>
      </div>

      <div class="my-3">
        <h1>No underline</h1>
        <p class="no-underline ...">The quick brown fox ...</p>
      </div>
    </div>
    <div>
      <h1 class="font-bold text-xl">Text Decoration Style</h1>
      <div class="mt-6 mb-3">
        <h1>Solid</h1>
        <p class="underline decoration-solid ...">The quick brown fox...</p>
      </div>

      <div class="my-3">
        <h1>Double</h1>
        <p class="underline decoration-double ...">The quick brown fox...</p>
      </div>

      <div class="my-3">
        <h1>Dotted</h1>
        <p class="underline decoration-dotted ...">The quick brown fox...</p>
      </div>

      <div class="my-3">
        <h1>Dashed</h1>
        <p class="underline decoration-dashed ...">The quick brown fox...</p>
      </div>

      <div class="my-3">
        <h1>Wavy</h1>
        <p class="underline decoration-wavy ...">The quick brown fox...</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from 'vue';
import "./style.scss";

export default {
  name: "TextStyle",
};
</script>
