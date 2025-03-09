import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Blog Demo";
export const siteTitle = "Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
              src="/images/profile.png"
            />
            <h1 className={`${utilsStyles.heading2Xl}`}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={utilsStyles.borderCircle}
              src="/images/profile.png"
            />
            <h1 className={`${utilsStyles.heading2Xl}`}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">ホームに戻る</Link>}
    </div>
  );
}
