import { motion } from "framer-motion"

export default function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    )
}