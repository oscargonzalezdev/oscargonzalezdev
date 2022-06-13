import { Image } from "@chakra-ui/react"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";

function About() {
  return (
    <>
      <section id="about" className="full-width">
        <div className="container">
          <div className='flex-column'>
            <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
              <Image
                className='avatar'
                borderRadius='full'
                boxSize='180px'
                src='../images/oscargonzalez.jpg'
                alt='Oscar Gonzalez'
              />
            </motion.div>
            <div className="box">
              <motion.div className="text-center about-title" initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
                <br />
                <h1>Oscar Gonzalez</h1>
                <h3>Creative Full-Stack Developer</h3>
                <span className='social-links'>
                  <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                  <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                  <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon /></a>
                </span>
              </motion.div>
              <br />
              <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
                <p className="description">I&apos;m a Junior Full-Stack Developer from Spain, originally from Ecuador, based in Switzerland with a passion for Web Development.
                  I love languages and learning about coding and new technologies. <br />
                  When I&apos;m not online, I&apos;m biking with friends or exploring my creativity with my camera. <br /><br />
                  Currently I&apos;m open to new job opportunities as a Front-End or Back-End Developer. <br/>
                  Feel free to contact me via <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" >LinkedIn</a>, <Link href='#contact'>contact form</Link> or <Link href='mailto:oscargonzalezpena@gmail.com'>email</Link>.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;