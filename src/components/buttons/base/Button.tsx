import styles from './Button.module.css';

export interface IButton {
  sampleTextProp: string;
}

export default function Button({ sampleTextProp }: IButton) {
  return <button className={styles.button}>{sampleTextProp}</button>;
}
