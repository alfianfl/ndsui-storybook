import MyPopup from '../components/VueBased/Popup/PopupSuccessRejected/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Section/Popup/Popup Success and Rejected',
  component: MyPopup,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
  args: {
    success: true,
    message: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'
  }
};

export const Rejected = {
  args: {
    rejected: true,
    message: 'With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.'
  }
};
