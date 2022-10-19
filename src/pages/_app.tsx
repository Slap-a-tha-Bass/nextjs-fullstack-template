import Sidebar from '@components/sidebar/primary/Sidebar';
import '@styles/css/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar
        title={'Library'}
        section="Components"
        arrayOfLinks={['Cards', 'Navs', 'Sidebars', 'Buttons'].sort()}
        section2="Layouts"
        arrayOfLinks2={['Headers', 'Footers'].sort()}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
