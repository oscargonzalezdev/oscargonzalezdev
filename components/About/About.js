import styles from './About.module.css'
import { Image, Box } from "@chakra-ui/react"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import ParticlesBackground from "../Particles/ParticlesBackground";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

function About() {
  const { elementInView } = useContext(DataContext)

  return (
    <section id="about">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Box className='flex-row'>
          <Box className={styles.hexagonBackground}>
            <Box className={styles.hexagonBorder}>
              <Image
                className={styles.avatar}
                src='../images/oscargonzalez.jpg'
                alt='Oscar Gonzalez'
              />
            </Box>
          </Box>
          <Box className='flex-column' gap='15px'>
            <Box className={styles.aboutHeader}>
              <h1>Oscar González</h1>
              <h2>Web Developer</h2>
            </Box>
            <span className='social-links'>
              <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: 25 }} /></a>
              <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon sx={{ fontSize: 25 }} /></a>
              <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon sx={{ fontSize: 25 }} /></a>
            </span>
          </Box>
        </Box>
        <p className={styles.description}>
          Passionate about building digital solutions and learning new technologies, my mission is to help teams develop high-quality web applications that can benefit companies, clients and our planet.
        </p>
        <ul className={styles.links}>
          <li style={elementInView.works & !elementInView.posts & !elementInView.contact ? { color: 'var(--color-primary)' } : null}>
            <hr className={elementInView.works & !elementInView.posts & !elementInView.contact ? styles.inView : styles.notInView} />
            <Link
              href='/#works'
            >
              Works
            </Link>
          </li>
          <li style={!elementInView.works & elementInView.posts & !elementInView.contact ? { color: 'var(--color-primary)' } : null}>
            <hr className={!elementInView.works & elementInView.posts & !elementInView.contact ? styles.inView : styles.notInView} />
            <Link href='/#blog'>Blog</Link>
          </li>
          <li style={!elementInView.works & !elementInView.posts & elementInView.contact ? { color: 'var(--color-primary)' } : null}>
            <hr className={!elementInView.works & !elementInView.posts & elementInView.contact ? styles.inView : styles.notInView} />
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </section>
  )
}
export default About;