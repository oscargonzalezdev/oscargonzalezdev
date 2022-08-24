import { Image, IconButton } from '@chakra-ui/react'
import styles from '../../styles/Blog.module.css'
import moment from 'moment'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CopyIcon } from '@chakra-ui/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const blogEndPoint = process.env.NEXT_PUBLIC_STRAPI_API_URL + '/articles'

export async function getStaticProps({ params }) {
    const postsFromServer = await axios.get(blogEndPoint + '?populate=*')
    const selectedPost = await postsFromServer.data.data.filter(post => {
        return post.attributes.slug === params.slug
    })

    return {
        props: {
            post: selectedPost[0]
        }
    }
}

export async function getStaticPaths() {
    const postsFromServer = await axios.get(blogEndPoint)

    const paths = postsFromServer.data.data.map(item => {
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
    const { title, content, image, createdAt } = post.attributes
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