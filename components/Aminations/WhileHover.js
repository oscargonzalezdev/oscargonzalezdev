import { motion } from "framer-motion"

function WhileHover({ children }) {
    return (
        <motion.div
            className='box'
            whileHover={{
                cursor: 'pointer',
                scale: 1.05,
                backgroundColor: 'var(--color-dark)',
                transition: { duration: 0.3 },
            }}
        >
            {children}
        </motion.div>
    )
}

export default WhileHover