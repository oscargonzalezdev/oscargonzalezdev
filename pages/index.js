import Head from 'next/head'
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Works from '../components/Works';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oscar Gonzalez - Full-Stack Developer</title>
        <meta name="description" content="Oscar Gonzalez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <About />
       <br />
       <Works />
      </main>

    </div>
  )
}
