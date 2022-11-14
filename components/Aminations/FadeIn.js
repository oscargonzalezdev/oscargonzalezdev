import { motion } from "framer-motion"

function FadeIn({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: "10%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn