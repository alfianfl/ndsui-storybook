<template>
  <button :type="type" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './style.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'ButtonNds',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    disabled:{
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
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "btn-nds": true,
        "btn-nds--primary": props.primary,
        "btn-nds--secondary": props.secondary,
        "btn-nds--disabled": props.disabled,
        [`btn-nds--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
