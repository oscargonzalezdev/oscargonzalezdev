import Head from 'next/head'
import About from '../components/About';
import LatestWorks from '../components/LatestWorks';
import Contact from '../components/Contact';
import Stack from '../components/Stack'
import LatestPosts from '../components/LatestPosts';
import axios from 'axios';

const blogEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/articles?populate=*'
const workEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/works?populate=*'

export async function getStaticProps() {
  // fetch blog posts and set as static
  const postsFromServer = await axios.get(blogEndPoint)
  const selectedPosts = await postsFromServer.data.data.map(post => {
    return post.attributes
  })

  // fetch works and set as static
  const worksFromServer = await axios.get(workEndPoint)
  const selectedWorks = await worksFromServer.data.data.map(post => {
    return post.attributes
  })

  return {
    props: {
      posts: [...selectedPosts].slice(0, 4),
      works: [...selectedWorks].slice(0, 4)
    }
  }
}

export default function Home({ posts, works }) {
  return (
    <div>
      <Head>
        <title>Oscar Gonzalez - Full-Stack Developer</title>
        <meta name="description" content="Oscar Gonzalez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <div className='bg-container'>
        <Stack />
        <LatestWorks data={works} />
        <LatestPosts data={posts} />
        <Contact />
      </div>
    </div>
  )
}
