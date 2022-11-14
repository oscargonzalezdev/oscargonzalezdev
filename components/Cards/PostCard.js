import { Image } from "@chakra-ui/react"
import Link from "next/link"
import styles from '../Cards/Card.module.css'
import { motion } from 'framer-motion'
import whileHover from '../Aminations/WhileHover'
import WhileHover from "../Aminations/WhileHover"

export default function PostCard({ title, description, slug, imageURL, category, date }) {
    return (
        <WhileHover >
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
        </WhileHover>
    )
}