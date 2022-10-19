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
        {/* <Card
          tag="Tag"
          title="Title"
          body="Body"
          author="Author"
          time="Time"
          imgURL="/default-img.png"
          avatarURL="/default-img.png"
        /> */}
        <div className="card">
          <div className="card-body">
            <div className="card-header">
              <h5 className="card-title">Card title</h5>
            </div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
