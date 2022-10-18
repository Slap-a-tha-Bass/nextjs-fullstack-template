import Link from 'next/link';
import styles from './Header.module.css';
// import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader {
  className?: string;
}

export default function Header({ className, ...headerProps }: IHeader) {
  return (
    <header {...headerProps} className={`${styles.container} ${className}`}>
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>

      <Link href="/">
        <a className="hover:underline">Store</a>
      </Link>

      <Link href="/">
        <a className="hover:underline hidden sm:inline">Gmail</a>
      </Link>
      <Link href="/">
        <a className="hover:underline hidden sm:inline">Images</a>
      </Link>
      {/* <AuthButton /> */}
    </header>
  );
}
