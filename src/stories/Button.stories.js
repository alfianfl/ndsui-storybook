import MyButton from '../components/VueBased/ButtonNds/index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Documentations/Component/Button',
  component: MyButton,
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
  parameters: {
    order: 2,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    label: 'Button',
  },
};


export const Disabled = {
  args: {
    disabled:true,
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const WithIcon = {
  args: {
    label: 'Button',
    icon: '<path d="M5.25 0.25L3.8775 1.75H1.5C0.675 1.75 0 2.425 0 3.25V12.25C0 13.075 0.675 13.75 1.5 13.75H13.5C14.325 13.75 15 13.075 15 12.25V3.25C15 2.425 14.325 1.75 13.5 1.75H11.1225L9.75 0.25H5.25ZM7.5 11.5C5.43 11.5 3.75 9.82 3.75 7.75C3.75 5.68 5.43 4 7.5 4C9.57 4 11.25 5.68 11.25 7.75C11.25 9.82 9.57 11.5 7.5 11.5Z" fill="white" />'
  },
};

export const WithOutline = {
  args: {
    label: 'Button',
    outline: true
  },
};
