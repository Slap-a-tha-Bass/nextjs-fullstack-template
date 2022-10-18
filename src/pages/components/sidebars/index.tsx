import Sidebar from '@components/sidebar/primary/Sidebar';
import styles from '@styles/Home.module.css';

export default function Sidebars() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <Sidebar
            title={'Sidebar'}
            section="Links"
            arrayOfLinks={['Link 1', 'Link 2', 'Link 3']}
            disabled
          />
        </section>
        <p className={styles.description}>
          <code className={styles.code}>
            src/pages/components/sidebars/index.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
