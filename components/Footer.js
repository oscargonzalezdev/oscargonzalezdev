import { Image } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import { motion } from 'framer-motion'

function Footer() {
    return (
        <section className='footer-section'>
            <div className="flex-row footer-links">
                <div>
                    <span>
                        <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon fontSize='sm' />&nbsp; GitHub</a> <br />
                        <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon fontSize='sm' />&nbsp; LinkedIn</a> <br />
                        <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon fontSize='sm' />&nbsp; Twitter</a> <br />
                    </span>
                </div>
                <div>
                    <Link href='/blog'>Blog</Link><br />
                    <Link href='/#works'>Works</Link><br />
                    <Link href='/#contact'>Contact</Link><br />
                </div>
            </div>
            <div className='footer-img'>
                <Image className='globe-img' height='140px' src='/images/globe_showing_europe-africa_3d.png' alt='globe' />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    variants={{
                        visible: { opacity: 1, y: '-108%' },
                        hidden: { opacity: 0, y: 100 }
                    }}>
                    <Image className='rocket-img' height='100px' src="../images/rocket-3d.png" alt="rocket" />
                    <div className='madeby'>
                        <p>Made with 🤍 and <span className='emoji-coffee'>☕</span> by Oscar Gonzalez</p>
                    </div>
                </motion.div>

            </div>

        </section>
    )
}

export default Footer