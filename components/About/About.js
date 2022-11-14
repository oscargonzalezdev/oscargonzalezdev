import styles from './About.module.css'
import { Image, Box } from "@chakra-ui/react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import ParticlesBackground from "../Particles/ParticlesBackground";
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import FadeIn from '../Aminations/FadeIn';

function About() {
  const { elementInView } = useContext(DataContext)

  return (
    <section id="about">
      <ParticlesBackground />
      <FadeIn>
        <Box className='flex-row'>
          <Image
            className={styles.avatar}
            src='../images/oscargonzalez.jpg'
            alt='Oscar Gonzalez'
          />
          <Box className='flex-column' gap='15px'>
            <Box className={styles.aboutHeader}>
              <h1>Oscar González</h1>
              <h2>Web Developer</h2>
            </Box>
            <span className='social-links'>
              <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon/></a>
              <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon/></a>
            </span>
          </Box>
        </Box>
        <p className={styles.description}>
          Passionate about building digital solutions and learning new technologies, my mission is to help teams develop high-quality web applications that can benefit companies, clients and our planet.
        </p>
        <ul className={styles.links}>
          <li className= {elementInView.works & !elementInView.posts & !elementInView.contact ? styles.selectedLink : null}>
            <hr className={elementInView.works & !elementInView.posts & !elementInView.contact ? styles.inView : styles.notInView} />
            <Link
              href='/#works'
            >
              Works
            </Link>
          </li>
          <li className= {!elementInView.works & elementInView.posts & !elementInView.contact ? styles.selectedLink : null}>
            <hr className={!elementInView.works & elementInView.posts & !elementInView.contact ? styles.inView : styles.notInView} />
            <Link href='/#blog'>Blog</Link>
          </li>
          <li className= {!elementInView.works & !elementInView.posts & elementInView.contact ? styles.selectedLink : null}>
            <hr className={!elementInView.works & !elementInView.posts & elementInView.contact ? styles.inView : styles.notInView} />
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </FadeIn>
    </section>
  )
}
export default About;