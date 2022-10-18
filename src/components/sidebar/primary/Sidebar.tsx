import Link from 'next/link';
import { useReducer } from 'react';
import styles from './Sidebar.module.css';

export interface ISidebar {
  children?: React.ReactNode;
  title?: string;
  section?: string;
  arrayOfLinks?: string[];
  section2?: string;
  arrayOfLinks2?: string[];
  disabled?: boolean;
}

export default function Sidebar({
  title,
  section,
  arrayOfLinks,
  section2,
  arrayOfLinks2,
  disabled,
}: ISidebar) {
  const [hidden, toggle] = useReducer((s) => !s, false);
  const [hidden2, toggle2] = useReducer((s) => !s, false);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {!disabled ? (
          <Link href={`/`}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        ) : (
          <h1>{title}</h1>
        )}
        {arrayOfLinks && (
          <h2 className={`${styles.toggle_btn}`} onClick={() => toggle()}>
            {section}
            <span
              className={`${styles.arrow} ${
                hidden ? styles.active : styles.inactive
              }`}
            ></span>
          </h2>
        )}
        {hidden && arrayOfLinks && (
          <div>
            {arrayOfLinks.map((link, index) => (
              <p key={`${link} - ${index}`}>
                {!disabled ? (
                  <Link
                    href={`/${section?.toLocaleLowerCase()}/${link.toLocaleLowerCase()}`}
                  >
                    <a>{link}</a>
                  </Link>
                ) : (
                  <span>{link}</span>
                )}
              </p>
            ))}
          </div>
        )}
        {arrayOfLinks2 && (
          <h2 className={`${styles.toggle_btn}`} onClick={() => toggle2()}>
            {section2}{' '}
            <span
              className={`${styles.arrow} ${
                hidden2 ? styles.active : styles.inactive
              }`}
            ></span>
          </h2>
        )}
        {hidden2 && arrayOfLinks2 && (
          <div>
            {arrayOfLinks2.map((link2, index) => (
              <p key={`${link2} - ${index}`}>
                <Link
                  href={`/${section2?.toLocaleLowerCase()}/${link2.toLocaleLowerCase()}`}
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
