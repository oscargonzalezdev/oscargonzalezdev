import { Image } from "@chakra-ui/react"
import { motion } from 'framer-motion'

function Stack() {
    return (
        <section id="stack" className="full-width">
            <h3 className="text-center section-title">My Stack</h3>
            <br />
            <div className="flex-row">
                <div className="rocket" >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        variants={{
                            visible: { opacity: 1, y: -10, x: 0, scale: 1 },
                            hidden: { opacity: 0, y: 200, x: -100, scale: 1 }
                        }}>
                        <Image height='250px' src="../images/rocket-3d.png" alt="My stack" />
                    </motion.div>
                </div>
                <div className="section-stack">
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt="JavaScript" title="JavaScript" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' alt='HTML' title="HTML" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' alt='CSS' title="CSS" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' alt='React.js' title="React.js" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='Node.js' title="Node.js" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='Express.js' title="Express.js" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' alt='MongoDB' title="MongoDB" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt="TypeScript" title="TypeScript" />
                    <Image boxSize='45px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' alt='Next.js' title="Next.js" />
                </div>
            </div>
        </section>
    )
}
export default Stack