import MyCard from '../components/VueBased/Card/CardHomeItem/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Vue Based/Component/Card/Card Home Item',
  component: MyCard,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main = {
    args: {
      icon: true,
      label: 'Setor Tunai Micro UI',
    },
  };


