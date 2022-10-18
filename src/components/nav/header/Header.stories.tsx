import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header, { IHeader } from './Header';
import { MockHeader } from './Header.mocks';

export default {
  title: 'components/nav/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...MockHeader.HeaderMock,
} as IHeader;
