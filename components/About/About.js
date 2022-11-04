import styles from './About.module.css'
import { Image, Box, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import ParticlesBackground from "../ParticlesBackground";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WorkIcon from '@mui/icons-material/Work';

function About() {
  return (
    <section id="about">
      <div className="full-height">
        <ParticlesBackground />
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, x: "10%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
            <Box display='flex' alignItems='center' gap='40px'>
              <Image
                className={styles.avatar}
                boxSize='130px'
                src='../images/oscargonzalez.jpg'
                alt='Oscar Gonzalez'
                title="Oscar Gonzalez - Web Developer"
              />
              <Box display='flex' flexDirection='column' gap='10px'>
                <Heading fontWeight='extrabold' fontSize='2.7rem'>Oscar González</Heading>
                <Heading fontWeight='bold' fontSize='1.7rem'>Web Developer</Heading>
                <span className='social-links'>
                  <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: 25 }} /></a>
                  <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon sx={{ fontSize: 25 }} /></a>
                  <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon sx={{ fontSize: 25 }} /></a>
                </span>
              </Box>
            </Box>
            <p>
              My mission is to help teams develop great web applications that positively impact the world.
            </p>
            <ul className={styles.links}>
              <li><WorkIcon /><Link href='/#works'> Works</Link></li>
              <li><TipsAndUpdatesIcon /><Link href='/#blog'> Blog</Link></li>
              <li><AlternateEmailIcon /><Link href='/#contact'> Contact</Link></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default About;