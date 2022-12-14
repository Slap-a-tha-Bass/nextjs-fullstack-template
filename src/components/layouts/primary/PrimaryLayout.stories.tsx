import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { MockPrimaryLayout } from './PrimaryLayout.mocks';

export default {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...MockPrimaryLayout.PrimaryLayoutMock,
} as IPrimaryLayout;
