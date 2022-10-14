import { IPrimaryLayout } from './PrimaryLayout';

const PrimaryLayoutMock: IPrimaryLayout = {
  tag: 'Tag',
  title: 'Title',
  body: 'Body',
  author: 'Author',
  time: 'Time',
};
const AltCardMock: IPrimaryLayout = {
  tag: 'Alt Tag',
  title: 'Alt Title',
  body: 'Alt Body',
  author: 'Alt Author',
  time: 'Alt Time',
};

export const MockPrimaryLayout = { PrimaryLayoutMock, AltCardMock };
