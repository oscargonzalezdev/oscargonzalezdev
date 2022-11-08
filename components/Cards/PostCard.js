import { Image } from "@chakra-ui/react"
import Link from "next/link"
import styles from '../Cards/Card.module.css'
import { motion } from 'framer-motion'

export default function PostCard({ title, description, slug, imageURL, category, date }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
            }}
        >
            <Link href={'/blog/' + slug}>
                <div className={styles.blogCard}>
                    <Image
                        src={imageURL}
                        alt={title}
                    />
                    <div className={styles.blogCardDescription}>
                        <div className="flex-row flex-space-between">
                            <p>{category}</p>
                            <p>{date}</p>
                        </div>
                        <h2><strong>{title}</strong></h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}