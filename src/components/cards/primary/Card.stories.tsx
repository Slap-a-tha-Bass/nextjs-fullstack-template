import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card, { ICard } from './Card';
import { MockCard } from './Card.mocks';

export default {
  title: 'components/cards/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card_Primary = Template.bind({});

Card_Primary.args = {
  ...MockCard.CardMock,
} as ICard;
