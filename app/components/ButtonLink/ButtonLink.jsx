import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink({ url }) {
    return (
        <Link href={url} className={`${styles.buttonHome} ${styles.slideInFwdBottom}`}>
            mira mi trabajo
        </Link>
    )
}