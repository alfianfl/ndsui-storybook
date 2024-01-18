import MyInput from '../components/VueBased/FormNds/RadioInput/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Component/Input Field/Radio Input',
  component: MyInput,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Disabled = {
  args: {
    disable: true,
  },
};

export const Normal = {};