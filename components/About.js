import { Button, Image } from "@chakra-ui/react"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";

function About() {
  return (
    <section id="about">
      <div className="full-height">
        <div className="flex-row">
          <ParticlesBackground />
          <div>
            <motion.div initial={{ opacity: 0, x: "-10%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
              <Image
                className='avatar'
                borderRadius='full'
                boxSize='250px'
                src='../images/oscargonzalez.jpg'
                alt='Oscar Gonzalez'
                title="Oscar Gonzalez - Web Developer"
              />
              <br />
              <span className='social-links'>
                <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon sx={{ fontSize: 25 }} /></a>
                <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon sx={{ fontSize: 25 }} /></a>
                <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon sx={{ fontSize: 25 }} /></a>
              </span>
              <br />
            </motion.div>
          </div>
          <div className="about-info">
            <motion.div className="about-title" initial={{ opacity: 0, x: "10%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
              <article>
                <p>
                  <span className="flex-row emoji-hello">
                    Hi there!
                    <motion.span initial={{ x: 0, rotateZ: 0 }} animate={{ x: 30, rotateZ: 40 }} transition={{ duration: 0.3, repeat: 5, repeatType: "reverse", delay: 1.5 }}>
                      <Image position='relative' top='-5px' boxSize='40px' src='/images/waving_hand_3d_medium-light.png' alt='waving hand' />
                    </motion.span>
                  </span>
                </p>
                <p>
                  I&apos;m Oscar, Web Developer and tech enthusiast passionate about the World Wide Web.
                </p>
                <p>
                  My mission is to help teams develop great web applications that positively impact the world.
                </p>
              </article>
              <div className="about-buttons">
                <Link href='#works'><Button variant='none'><KeyboardDoubleArrowDownIcon />Find out more</Button></Link>
              </div>
            </motion.div>
          </div>
        </div>
        <br />
      </div>
    </section>
  )
}
export default About;