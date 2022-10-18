import Sidebar from '@components/sidebar/primary/Sidebar';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar
        title="Components"
        arrayOfLinks={['Cards', 'Nav', 'Sidebar']}
        title2="Layouts"
        arrayOfLinks2={['Header', 'Footer']}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
