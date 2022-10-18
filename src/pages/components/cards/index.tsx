import Card from '@components/cards/primary/Card';
import styles from '@styles/Home.module.css';

export default function Cards() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
