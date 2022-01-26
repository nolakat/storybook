import MyRadioBtn from './RadioBtn.vue';

export default{
  title: 'Controls/Radio Button - Single',
  component: MyRadioBtn,
  argTypes: {
    color: { control: 'color' },
    checked: { control: 'boolean'}
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyRadioBtn },
  template: '<my-radio-btn v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  id: 'inputId',
  label: 'My Radio Button',
  name: 'myRadioBtn',
  value: 'myRadioBtn'
};
