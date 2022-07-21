import { createClient } from 'contentful'
import PostCard from '../../components/PostCard'
import styles from '../../styles/Blog.module.css'
import { useState } from 'react'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })
    const res = await client.getEntries({ content_type: 'post' })
    return {
        props: {
            post: res.items
        },
        revalidate: 1
    }
}

function Blog({ post }) {
    const [filteredPost, setFilteredPost] = useState("")
    const handleSearch = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setFilteredPost(lowerCase)
    }
    const result = post.filter(item => {
        //if no input the return the original
        if (filteredPost === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.fields.title.toLowerCase().includes(filteredPost)
        }
    })

    return (
        <section id='blog' className="full-width bg-container">
            <div className={styles.headerBlog}>
                <h1>Oscar&apos;s Blog</h1>
            </div>
            <hr />
            <div className={styles.post_list}>
                {result.map(item => (
                    <PostCard key={item.sys.id} data={item.fields} />
                ))}
            </div>
        </section>
    )
}
export default Blog