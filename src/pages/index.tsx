import styles from '@styles/Home.module.css';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CCG Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <button>Test Button</button>
          <h2>CCG Component Library</h2>
          <p>Documentation is in the works...</p>
          <p>Please be patient</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
