import Image from 'next/image';
import styles from './Card.module.css';

export interface ICard {
  tag?: string;
  title?: string;
  body?: string;
  author?: string;
  time?: string;
  imgURL?: string;
  avatarURL?: string;
}

export default function Card({
  tag,
  title,
  body,
  author,
  time,
  imgURL,
  avatarURL,
}: ICard) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          {imgURL && (
            <Image
              src={imgURL ? imgURL : '/default-img.png'}
              alt="card__image"
              className={styles.card__image}
              width={500}
              height={400}
            />
          )}
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            {avatarURL && (
              <Image
                src={avatarURL ? avatarURL : '/default-img.png'}
                alt="user__image"
                className={styles.user__image}
                width={40}
                height={40}
              />
            )}
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
