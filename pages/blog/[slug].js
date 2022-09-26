import { Image } from '@chakra-ui/react'
import styles from '../../styles/Blog.module.css'
import moment from 'moment'
import { fetchPosts } from '../../utils/fetch-data'
import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'

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

// render data from server as static content
export async function getStaticProps({ params }) {
    const posts = await fetchPosts()
    const selectedPost = await posts.data.filter(post => {
        return post.attributes.slug === params.slug
    })
    return {
        props: { post: selectedPost[0] }
    }
}

function PostDetails({ post }) {

    function copyCode(item, index) {
        const selectedButton = document.getElementById('btn'+index)
        selectedButton.innerText = 'Copied!'
        const editedCode = item.innerText.slice(0, -4)
        navigator.clipboard.writeText(editedCode)
        setTimeout(() => {
            selectedButton.innerText = 'Copy'
        }, 3000)
    }

    const renderCopyButton = () => {
        const preTags = document.querySelectorAll('pre')
        preTags.forEach((item, index) => {
            const copyButton = document.createElement('button')
            copyButton.innerHTML = 'Copy'
            copyButton.className = styles.copyButton
            copyButton.id = 'btn' + index
            copyButton.addEventListener("click", () => {
                copyCode(item, index)
            })
            item.prepend(copyButton)
        })
    }

    useEffect(() => {
        renderCopyButton()
    }, [])

    const { title, content, image, createdAt } = post.attributes
    const date = moment(createdAt).format('ll');
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
                            marginRight='3'
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
                <ReactMarkdown className={styles.postContent}>{content}</ReactMarkdown>
            </article>
        </div>
    )
}

export default PostDetails