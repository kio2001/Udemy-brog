import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout.js";
import utilsStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostData } from "../../lib/post.js";
import Head from "next/head.js";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostData(); // id, title, ,date, thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのProps
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <selection className={utilsStyles.headingMd}>
          <p>フルスタックエンジニア next.js/python</p>
        </selection>
        <selection
          className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}
        >
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link className={utilsStyles.boldText} href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={utilsStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </selection>
      </Layout>
    </>
  );
}
