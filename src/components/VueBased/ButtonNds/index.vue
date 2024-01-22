<template>
  <button :type="type" :class="classes" @click="onClick" :style="style">
    <span v-if="icon" class="icon">
      <svg class="icon"       
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" :innerHTML="icon" />
    </span>
    <span class="btn-label">
      {{ label }}
    </span>
  </button>
</template>

<script>
import { reactive, computed } from "vue";
import "./style.scss";

export default {
  name: "ButtonNds",
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "btn-nds": true,
        "btn-with-icon": props.icon,
        "btn-with-outline": props.outline,
        "btn-nds--primary": props.primary,
        "btn-nds--secondary": props.secondary,
        "btn-nds--disabled": props.disabled,
        [`btn-nds--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
