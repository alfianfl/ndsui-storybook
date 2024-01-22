<template>
  <div class="md:flex md:items-center mb-6">
    <div>
      <label class="text-subtitle-2 mr-10">
        <b>{{ label }}</b>
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        :disabled="disable"
        :name="name"
        ref="textInput"
        autocomplete="off"
        :class="`${classes} resize-y rounded-sm appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800`"
        id="inline-full-name"
        type="text"
        value="Jane Doe"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import './style.scss';

export default {
  name: 'TextInput',
  props: {
    label: { type: String, required: true, default: 'No Rekening' },
    hint: { type: String, default: '' },
    value: { type: String, default: '' },
    name: { type: String, default: '' },
    suffix: { type: String, default: '' },
    prefix: { type: String, default: '' },
    type: { type: String, default: 'text' },
    maxlength: { type: Number, default: null },
    disable: { type: Boolean, default: false },
    required:  {type: Boolean, default: false },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => {
        return props.disable ? "bg-gray-200" : !props.disable && props.required ? "bg-yellow-100" : ""
      }),
    };
  },
};
</script>
