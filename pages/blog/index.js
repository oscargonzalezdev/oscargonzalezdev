import PostCard from '../../components/Cards/PostCard'
import styles from './Blog.module.css'
import { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { fetchPosts } from '../../utils/fetch-data';

// render data from server as static content
export async function getStaticProps() {
  const posts = await fetchPosts()
    return {
      props: { posts }
    }
}

function Blog({ posts }) {
    const selectedPosts = posts.data.map(post => {
        return post.attributes
      })

    const [filteredPost, setFilteredPost] = useState("")

    const handleSearch = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setFilteredPost(lowerCase)
    }
    const postsList = selectedPosts.filter(item => {
        //if no input the return the original
        if (filteredPost === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.title.toLowerCase().includes(filteredPost)
        }
    })

    return (
        <section id='blog'>
            <div className={styles.headerBlog}>
                <h1>Blog</h1>
                <div className={styles.searchBar}>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.400' />
                        </InputLeftElement>
                        <Input
                            type="text"
                            value={filteredPost}
                            placeholder='Search blog posts...'
                            onChange={handleSearch}
                            size='md'
                        />
                    </InputGroup>
                </div>
            </div>
            <div className='flex-column full-height'>
                {postsList.map((item, index) => (
                    <PostCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        slug={item.slug}
                        imageURL={item.image.data.attributes.url}
                        category={item.category.data.attributes.name}
                    />
                ))}
            </div>
        </section>
    )
}
export default Blog