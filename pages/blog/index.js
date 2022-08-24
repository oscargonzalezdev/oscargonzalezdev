import PostCard from '../../components/Cards/PostCard'
import styles from '../../styles/Blog.module.css'
import { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import axios from 'axios';

const blogEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/articles?populate=*'

export async function getStaticProps() {
    const postsFromServer = await axios.get(blogEndPoint)
    const selectedPosts = await postsFromServer.data.data.map(post => {
        return post.attributes
    })
    return {
        props: {
            posts: selectedPosts
        }
    }
}

function Blog({ posts }) {
    const [filteredPost, setFilteredPost] = useState("")

    const handleSearch = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setFilteredPost(lowerCase)
    }
    const postsList = posts.filter(item => {
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
        <section id='blog' className="full-width bg-container">
            <div className={styles.headerBlog}>
                <h1>Oscar&apos;s Blog</h1>
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
            <hr />
            <div className='flex-column'>
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