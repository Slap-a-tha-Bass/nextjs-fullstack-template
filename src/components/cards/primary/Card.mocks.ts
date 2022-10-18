import { ICard } from './Card';

const CardMock: ICard = {
  tag: 'Card',
  title: 'OrderItemCard',
  body: 'Body',
  author: 'Author',
  time: 'Time',
};
const AltCardMock: ICard = {
  tag: 'Alt Tag',
  title: 'Alt Title',
  body: 'Alt Body',
  author: 'Alt Author',
  time: 'Alt Time',
};

export const MockCard = { CardMock, AltCardMock };
