import Head from 'next/head'
import About from '../components/About/About';
import LatestWorks from '../components/Works/LatestWorks';
import Contact from '../components/Contact/Contact';
import LatestPosts from '../components/Posts/LatestPosts.js'
import { fetchPosts, fetchWorks } from '../utils/fetch-data';

// render data from server as static content
export async function getStaticProps() {
  const posts = await fetchPosts()
  const works = await fetchWorks()
  return {
    props: { posts, works }
  }
}

export default function Home({ posts, works }) {

  const selectedPosts = posts.data.map(post => {
    return post.attributes
  })

  const selectedWorks = works.data.map(works => {
    return works.attributes
  })

  return (
    <div>
      <Head>
        <title>Oscar Gonzalez - Web Developer</title>
        <meta name="description" content="Oscar Gonzalez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid-container'>
        <div>
          <About />
        </div>
        <div className='content'>
          {selectedWorks ? <LatestWorks data={selectedWorks} /> : null}
          {selectedPosts ? <LatestPosts data={selectedPosts} /> : null}
          <Contact />
        </div>
      </div>
    </div>
  )
}
