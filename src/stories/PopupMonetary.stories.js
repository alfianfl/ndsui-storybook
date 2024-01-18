import MyPopup from '../components/VueBased/Popup/PopupMonetary/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Section/Popup/Popup Monetary',
  component: MyPopup,
  tags: ['autodocs']
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Success = {
  args: {
    success: true,
    description: 'Description',
    title: 'Transaksi Sukses!',
    messages: [
      {
        title: 'Jumlah Mutasi',
        message: 'IDR 100,000'
      },
      {
        title: 'Jumlah Mutasi Terikirim',
        message: 'IDR 100,000'
      }
    ]
  }
};

export const Rejected = {
  args: {
    rejected: true,
    description: 'Description',
    title: 'Transaksi Ditolak!',
    messages: [
      {
        title: 'Jumlah Mutasi',
        message: 'IDR 100,000'
      },
      {
        title: 'Jumlah Mutasi Terikirim',
        message: 'IDR 100,000'
      }
    ]
  }
};

export const Info = {
  args: {
    info: true,
    description: 'Description',
    title: 'Transaksi Info!',
    messages: [
      {
        title: 'Jumlah Mutasi',
        message: 'IDR 100,000'
      },
      {
        title: 'Jumlah Mutasi Terikirim',
        message: 'IDR 100,000'
      }
    ]
  }
};

export const Danger = {
  args: {
    danger: true,
    description: 'Description',
    title: 'Transaksi Ditolak',
    messages: [
      {
        title: 'Jumlah Mutasi',
        message: 'IDR 100,000'
      },
      {
        title: 'Jumlah Mutasi Terikirim',
        message: 'IDR 100,000'
      }
    ]
  }
};
