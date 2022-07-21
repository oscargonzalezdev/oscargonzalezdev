import { createClient } from 'contentful'
import { Image, IconButton } from '@chakra-ui/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styles from '../../styles/Blog.module.css'
import moment from 'moment'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { CopyIcon } from '@chakra-ui/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'post'
    })
    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    const { items } = await client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: { post: items[0] },
        revalidate: 1
    }
}

function PostDetails({ post }) {
    const notify = () => {
        toast.success('Code copied!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

    }
    
    const renderOptions = {

        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, text) => {
                return (
                    <span
                    style={{
                      fontSize: '16px',
                      lineHeight: '30px',
                      marginBottom: '0.75rem',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {text}
                  </span>
                )
            },
            [BLOCKS.HEADING_1]: (node, children) => {

                return (
                    <h1
                        style={{
                        fontWeight: 'bold',
                        whiteSpace: 'pre-wrap'
                      }}>
                    {children}
                    </h1>
                )
            },

            [BLOCKS.QUOTE]: (node, children) => (
             <div className="box">{children}</div>
            ),

              [BLOCKS.UL_LIST]: (node, children) => {
                return (
                  <ul
                    style={{
                      listStyle: 'disc',
                      fontSize: '16px',
                      lineHeight: '30px',
                      marginLeft: '1rem',
                    }}
                  >
                    {children.map((item) => (
                      <li key={item.key}>{item.props.children[0].props.children[0]}</li>
                    ))}
                  </ul>
                );
              },
          
              [INLINES.HYPERLINK]: (node, children) => {
                return (
                  <a
                    href={node.data.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
            
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                // render the EMBEDDED_ASSET as you need
                return (
                    <Image
                        src={`https://${node.data.target.fields.file.url}`}
                        alt={node.data.target.fields.description}
                    />
                );
            },
        },
        renderMark: {
            [MARKS.BOLD]: (text) => (
                <strong>{text}</strong>
               ),

            [MARKS.CODE]: (code) => {
                                
                return (
                    <div>
                        <CopyToClipboard
                        text={code}
                        >
                            <div className={styles.copyButton}>
                                <IconButton onClick={notify} aria-label='Copy code' icon={<CopyIcon />} />
                            </div>
                        </CopyToClipboard>
                        <ToastContainer />
                        <div>
                            <SyntaxHighlighter
                                lineProps={{style: {whiteSpace: 'nowrap'}}}
                                wrapLines={false} 
                                language="javascript" 
                                style={dracula}
                                customStyle={{
                                    padding: '20px',
                                    borderRadius: '10px',
                                }}
                            >
                                {code}
    
                            </SyntaxHighlighter>
                        </div>
                    </div>
                );
            },
        }
    };

    const { title, slug, category, content, thumbnail, body } = post.fields
    const [isCopied, setIsCopied] = useState(false)

    const createdAt = post.sys.createdAt;
    const date = moment(createdAt).format("MMM Do YY");
    const imgURL = 'https:' + thumbnail.fields.file.url;

    if (!post) return (
        <p className='red'>Loading...</p>
    )

    return (
        <div className="full-width bg-container">
            <div className={styles.containerTitle}
                style={{ backgroundImage: `url(${imgURL})` }}
            >
                <div className={styles.titlePost}>
                    <p className='text-uppercase'>{category}</p>
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
            <div>
                {documentToReactComponents(content, renderOptions)}
            </div>
        </div>
    )
}

export default PostDetails