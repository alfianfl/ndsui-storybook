import MyInput from '../components/VueBased/FormNds/DateInput/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Component/Input Field/Input Date',
  component: MyInput,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Disabled = {
  args: {
    disable: true,
  },
};

export const Required = {
  args: {
    required: true,
  },
};

export const Normal = {};