import Head from 'next/head'
import About from '../components/About';
import LatestWorks from '../components/LatestWorks';
import Contact from '../components/Contact';
import LatestPosts from '../components/LatestPosts';
import { fetchPosts, fetchWorks } from '../utils/fetch-data';
import { Box } from '@chakra-ui/react';

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
        <title>Oscar Gonzalez - Full-Stack Developer</title>
        <meta name="description" content="Oscar Gonzalez's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Box boxShadow='md' className='bg-container'>
      <LatestWorks data={selectedWorks} />
        <LatestPosts data={selectedPosts} />
        <Contact />
      </Box>
    </div>
  )
}
