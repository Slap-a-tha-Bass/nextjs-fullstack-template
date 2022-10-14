import { IDefaultCard } from './DefaultCard';

const DefaultCardMock: IDefaultCard = {
  tag: 'Tag',
  title: 'Title',
  body: 'Body',
  author: 'Author',
  time: 'Time',
};
const AltCardMock: IDefaultCard = {
  tag: 'Alt Tag',
  title: 'Alt Title',
  body: 'Alt Body',
  author: 'Alt Author',
  time: 'Alt Time',
};

export const MockDefaultCard = { DefaultCardMock, AltCardMock };
