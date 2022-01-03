import {FC} from 'react';
import styles from "./Home.module.scss";
import Link from "next/link";
import Date from "./Date";

export interface IHome {
    posts: any[];
}

const Home: FC<IHome> = (props) => {
    const {posts} = props;
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Learn <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.tsx</code>
            </p>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>Learn &rarr;</h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/master/examples"
                    className={styles.card}
                >
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>
                <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
                    <h2>Deploy &rarr;</h2>
                    <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                </a>
                <Link href='/posts/first-post'>
                    <a className={styles.card}>
                        <h2>first post &rarr;</h2>
                        <p>
                            First post.
                        </p>
                    </a>
                </Link>
                <Link href='/posts/second-post'>
                    <a className={styles.card}>
                        <h2>second post &rarr;</h2>
                        <p>
                            Second post.
                        </p>
                    </a>
                </Link>
                {posts.map(({ id, date, title }) => (
                    <Link href={`/posts/${id}`} key={id}>
                        <a className={styles.card}>
                            <h3>{title} &rarr;</h3>
                            <p>
                                {id}
                                <br />
                                <Date dateString={date}/>
                            </p>
                        </a>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default Home;