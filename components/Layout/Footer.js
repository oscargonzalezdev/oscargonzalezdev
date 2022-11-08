import { Image } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WorkIcon from '@mui/icons-material/Work';
import Link from 'next/link';
import { motion } from 'framer-motion'

function Footer() {
    return (
        <section className='footer-section'>
            <div className="flex-row footer-links">
                <div>
                <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><span><GitHubIcon />GitHub</span></a><br />
                    <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><span><LinkedInIcon />LinkedIn</span></a><br />
                    <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><span><TwitterIcon />Twitter</span></a><br />
                </div>
                <div>
                    <Link href='/blog'><span><TipsAndUpdatesIcon />Blog</span></Link><br />
                    <Link href='/#works'><span><WorkIcon />Works</span></Link><br />
                    <Link href='/#contact'><span><AlternateEmailIcon />Contact</span></Link><br />
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
                        visible: { opacity: 1, y: '-110%' },
                        hidden: { opacity: 0, y: 50 }
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