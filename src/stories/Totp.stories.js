

import Totp from '../components//VueBased/Totp/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Section/Totp',
  component: Totp,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};


