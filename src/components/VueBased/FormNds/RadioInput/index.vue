<template>
  <div class="flex items-center mb-4">
    <input
      :disabled="disabled"
      id="default-radio-1"
      type="radio"
      value=""
      name="default-radio"
      :class="classes"
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
      :disabled="disabled"
      id="default-radio-2"
      type="radio"
      value=""
      name="default-radio"
      :class="classes"
    />
    <label
      for="default-radio-2"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Non Nasabah</label
    >
  </div>
</template>

<script>
import './style.scss';
import { reactive, computed } from "vue";

export default {
  name: "RadioInput",
  props: {
    label: { type: String, required: true, default: "No Rekening" },
    hint: { type: String, default: "" },
    value: { type: String, default: "" },
    name: { type: String, default: "" },
    suffix: { type: String, default: "" },
    prefix: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
    setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "radio-nds cursor-pointer": true,
        "radio-nds--disabled": props.disabled,
      })),
    };
  },
};
</script>
