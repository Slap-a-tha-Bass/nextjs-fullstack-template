import Link from 'next/link';
import { useReducer } from 'react';
import styles from './Sidebar.module.css';

export interface ISidebar {
  children?: React.ReactNode;
  title?: string;
  arrayOfLinks?: string[];
  title2?: string;
  arrayOfLinks2?: string[];
}
export default function Sidebar({
  title,
  arrayOfLinks,
  title2,
  arrayOfLinks2,
}: ISidebar) {
  const [hidden, toggle] = useReducer((s) => !s, false);
  const [hidden2, toggle2] = useReducer((s) => !s, false);
  console.log('hidden', hidden);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href={`/`}>
          <a>
            <h1>Library</h1>
          </a>
        </Link>
        <h2 onClick={() => toggle()}>{title}</h2>
        {hidden && (
          <div>
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
        )}
        <h2 onClick={() => toggle2()}>{title2}</h2>
        {hidden2 && (
          <div>
            {arrayOfLinks2?.map((link2, index) => (
              <p key={`${link2} - ${index}`}>
                <Link
                  href={`/${title2?.toLocaleLowerCase()}/${link2.toLocaleLowerCase()}`}
                >
                  <a>{link2}</a>
                </Link>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
