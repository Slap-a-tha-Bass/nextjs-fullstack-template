import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar, { ISidebar } from './Sidebar';
import { MockSidebar } from './Sidebar.mocks';

export default {
  title: 'components/display/sidebars/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...MockSidebar.SidebarMock,
} as ISidebar;
