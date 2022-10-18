import Card from '@components/cards/primary/Card';
import styles from '@styles/Home.module.css';

export default function Cards() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          <code className={styles.code}>
            src/pages/components/cards/index.tsx
          </code>
        </p>
        <Card
          tag="Tag"
          title="Title"
          body="Body"
          author="Author"
          time="Time"
          imgURL="/default-img.png"
          avatarURL="/default-img.png"
        />
      </main>
    </div>
  );
}
