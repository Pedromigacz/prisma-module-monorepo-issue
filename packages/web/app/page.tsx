import styles from "./page.module.css";
import { db } from "db"
import Link from "next/link";


export default async function Home() {

  const posts = await db.post.findMany()

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {posts.map((post, i) => {
          return <div key={`post_${i}`}>
            <div>
              {post.title}
            </div>
            <div>
              {post.content}
            </div>
          </div>
        })}
      </main>
      <Link href="/posts-from-server-action">POSTS FROM SERVER ACTION</Link>

    </div>
  );
}
