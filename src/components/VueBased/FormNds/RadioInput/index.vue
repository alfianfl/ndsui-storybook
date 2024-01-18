<template>
  <div class="flex items-center mb-4">
    <input
      :disabled="disable"
      id="default-radio-1"
      type="radio"
      value=""
      name="default-radio"
      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-radio-1"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Nasabah</label
    >
  </div>
  <div class="flex items-center">
    <input
      checked
      :disabled="disable"
      id="default-radio-2"
      type="radio"
      value=""
      name="default-radio"
      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-radio-2"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Non Nasabah</label
    >
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import './style.scss';

export default {
  name: "RadioInput",
  props: {
    label: { type: String, required: true, default: "No Rekening" },
    hint: { type: String, default: "" },
    value: { type: String, default: "" },
    name: { type: String, default: "" },
    suffix: { type: String, default: "" },
    prefix: { type: String, default: "" },
    disable: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => {
        return props.disable
          ? "bg-gray-200"
          : "bg-primary"
      }),
    };
  },
};
</script>
