import Button from '@components/buttons/base/Button';
import styles from '@styles/Home.module.css';

export default function Buttons() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Buttons</h1>
        <Button sampleTextProp="Hello World" />
        <p className={styles.description}>
          <code className={styles.code}>
            src/pages/components/buttons/index.tsx
          </code>
        </p>
      </main>
    </div>
  );
}
