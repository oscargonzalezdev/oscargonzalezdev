import Head from 'next/head'
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oscar Gonzalez - Full-Stack Developer</title>
        <meta name="description" content="Oscar Gonzalez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main-container'>
        <About />
        <Works />
        <Contact />
      </div>
    </div>
  )
}
