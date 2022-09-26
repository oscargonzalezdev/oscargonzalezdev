import { Button, Image, Box } from "@chakra-ui/react"
import Link from "next/link"
import styles from '../Cards/Card.module.css'
import { motion } from 'framer-motion'

export default function PostCard({ title, description, slug, imageURL, category }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
            }}
        >
            <Box boxShadow='base' className={styles.blogCard}>
                <Image
                    src={imageURL}
                    alt={title}
                    objectFit='cover'
                    borderRadius='10px'
                />
                <div className={styles.blogCardDescription}>
                    <div className={styles.blogCardHeader}>
                        <p >{category}</p>
                        <h2><strong>{title}</strong></h2>
                    </div>
                    <p>{description}</p>
                    <Link href={'/blog/' + slug}><Button variant='none' >Read Article</Button></Link>
                </div>
            </Box>
        </motion.div>
    )
}