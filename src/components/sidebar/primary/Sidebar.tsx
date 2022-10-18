import Link from 'next/link';
import { useReducer } from 'react';
import styles from './Sidebar.module.css';

export interface ISidebar {
  children?: React.ReactNode;
  title?: string;
  arrayOfLinks?: string[];
}
export default function Sidebar({ title, arrayOfLinks }: ISidebar) {
  const [open, toggle] = useReducer((s) => !s, false);
  console.log('open', open);
  return (
    <div className={styles.container}>
      <button onClick={() => toggle()} className={styles.X}>
        X
      </button>
      <div className={styles.main}>
        <h1>{title}</h1>
        {arrayOfLinks?.map((link, index) => (
          <p key={`${link} - ${index}`}>
            <Link
              href={`/${title?.toLocaleLowerCase()}/${link.toLocaleLowerCase()}`}
            >
              <a>{link}</a>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
