import MyInput from '../components/VueBased/FormNds/DropdownInput/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Component/Input Field/Dropdown Input',
  component: MyInput,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Required = {
  args: {
    required: true,
  },
};

export const Normal = {};