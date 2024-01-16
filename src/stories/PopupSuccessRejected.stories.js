import MyPopup from '../components/VueBased/Popup/PopupSuccessRejected/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Vue Based/Section/Popup/Popup Success and Rejected',
  component: MyPopup,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
    args: {
      success: true,
      message: 'Description',
    },
  };
  
  
  export const Rejected = {
    args: {
      rejected: true,
      message: 'Description',
    },
  };
  
  

