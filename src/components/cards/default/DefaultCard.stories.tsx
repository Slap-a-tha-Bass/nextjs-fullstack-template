import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultCard, { IDefaultCard } from './DefaultCard';
import { MockDefaultCard } from './DefaultCard.mocks';

export default {
  title: 'cards/DefaultCard',
  component: DefaultCard,
  argTypes: {},
} as ComponentMeta<typeof DefaultCard>;

const Template: ComponentStory<typeof DefaultCard> = (args) => (
  <DefaultCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  ...MockDefaultCard.DefaultCardMock,
} as IDefaultCard;
