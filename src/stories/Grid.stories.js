import MyNotif from '../components/VueBased/Notification/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Vue Based/Component/Grid',
  component: MyNotif,
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
export const success = {
//   args: {
//     primary: true,
//     label: 'Footer',
//   },
};

export const error = {
    //   args: {
    //     primary: true,
    //     label: 'Footer',
    //   },
    };

