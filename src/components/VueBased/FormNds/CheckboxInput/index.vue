<template>
  <div class="flex items-center mb-4">
    <input
      type="checkbox"
      :class="classes"
      checked
      :disabled="disabled"
    />
    <label
      for="default-radio-1"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Nasabah</label
    >
  </div>
  <div class="flex items-center">
    <label>
      <input
        type="checkbox"
        :class="classes"
        checked
        :disabled="disabled"
      />
    </label>
    <label
      for="default-radio-2"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Non Nasabah</label
    >
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import "./style.scss";

export default {
  name: "CheckboxInput",
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
        "checkbox-nds cursor-pointer": true,
        "checkbox-nds--disabled": props.disabled,
      })),
    };
  },
};
</script>
