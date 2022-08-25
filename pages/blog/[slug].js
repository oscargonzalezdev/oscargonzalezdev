import { Image } from '@chakra-ui/react'
import styles from '../../styles/Blog.module.css'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { fetchPosts } from '../../utils/fetch-data';

// render data from server as static content
export async function getStaticProps({ params }) {
    const posts = await fetchPosts()
    const selectedPost = await posts.data.filter(post => {
        return post.attributes.slug === params.slug
    })
    return {
        props: { post: selectedPost }
    }
}

// conver slugs in static paths
export async function getStaticPaths() {
    const postsFromServer = await fetchPosts()
    const paths = await postsFromServer.data.map(item => {
        return {
            params: { slug: item.attributes.slug }
        }
    })
    return {
        paths,
        fallback: false
    }
}

function PostDetails({ post }) {
    const { title, content, image, createdAt } = post[0].attributes
    const date = moment(createdAt).format("MMM Do YY");
    const imgURL = image.data.attributes.url;

    if (!post) return (
        <p className='red'>Loading...</p>
    )

    return (
        <div className="full-width bg-container">
            <div className={styles.containerTitle}
                style={{ backgroundImage: `url(${imgURL})` }}
            >
                <div className={styles.titlePost}>
                    <p className='text-uppercase'>{post.category}</p>
                    <h1>{title}</h1>
                    <div className='flex-row align-center author'>
                        <Image
                            borderRadius='full'
                            boxSize='50px'
                            border="2px"
                            src='../images/oscargonzalez.jpg'
                            alt='Oscar Gonzalez'
                            title="Oscar Gonzalez - Web Developer"
                            marginRight='4'
                        />
                        <div className='align-left'>
                            <p><strong>Oscar Gonzalez</strong></p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <article>
                <ReactMarkdown>{content}</ReactMarkdown>
            </article>
        </div>
    )
}

export default PostDetails