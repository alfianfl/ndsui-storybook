<template>
  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      <div v-for="item,i in inputList" :key="i" class="select-box__value">
        <input
          :disabled="disabled"
          class="select-box__input"
          type="radio"
          :id="i"
          :value="i + 1"
          name="Ben"
          checked="checked"
        />
        <p :class="`${classes} select-box__input-text`">{{item}}</p>
      </div>
      <img
        class="select-box__icon"
        src="https://www.svgrepo.com/show/335062/dropdown.svg"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul class="select-box__list">
      <li v-for="item,i in inputList" :key="i">
        <label :class="`${disabled && 'is-disabled'} select-box__option`" :for="i" aria-hidden="aria-hidden"
          >{{item}}</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "DropdownInput",
  props: {
    label: { type: String, required: true, default: "No Rekening" },
    hint: { type: String, default: "" },
    value: { type: String, default: "" },
    name: { type: String, default: "" },
    suffix: { type: String, default: "" },
    prefix: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    inputList: {type: Array, default:  () => [
      "Tunai", "Non Tunai"
    ]}
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => {
        return props.disabled
          ? "bg-disabled"
          : !props.disabled && props.required
          ? "bg-required"
          : "bg-white";
      }),
    };
  },
};
</script>
