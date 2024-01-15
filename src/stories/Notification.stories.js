import MyNotif from '../components/VueBased/Notification/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Vue Based/Component/Notification',
  component: MyNotif,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    onClick: {},
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const success = {
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'Success Something',
    type: 'success'
  }
};

export const error = {
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'Failed Something',
    type: 'error'
  }
};

export const info = {
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'info Something',
    type: 'info'
  }
};
