import SideDrawer from './SideDrawer.vue'

export default{
  title: 'Drawers/SideDrawer',
  argTypes: {
    side: {
      control: { type: 'select' },
      options: ['right', 'left'],
    },
    background:{
      control: { type: 'select'},
      options: ['light', 'dark']
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SideDrawer },
  template: '<side-drawer v-bind="$props" />',
});


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  side: 'right'
};

Primary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/ymEfGlH4YA1LdiYuePi4I9/EB-Components',
  },
}
