import { Image } from "@chakra-ui/react"
import Link from "next/link"
import styles from '../styles/Blog.module.css'
import { motion } from 'framer-motion'

export default function PostCard({ data }) {

    const {title, slug, category, content, thumbnail, body} = data

    return (
        <Link href={'/blog/' + slug}>
        <motion.button
        whileHover={{
            scale: 1.03,
            transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 1 }}
    >
        <div className={styles.card}>
            <Image
                src={'https:' + thumbnail.fields.file.url}
                alt={title}
                borderTopRadius='9px'
            />
            <div className={styles.cardDescription}>
            <p className="text-center">{category}</p>
            <h1 className="text-center">{title}</h1>
            </div>
        </div>
        </motion.button>
        </Link>
    )
}