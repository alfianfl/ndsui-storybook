import MyFooter from '../components/VueBased/Footer/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Vue Based/Section/Header',
  component: MyFooter,
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
// export const Main = {
//   args: {
//     primary: true,
//     label: 'Footer',
//   },
// };

