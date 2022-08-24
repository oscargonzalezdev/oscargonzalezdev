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
    <div className="full-width">
      <ParticlesBackground />
        <div className="flex-row">
          <div>
            <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
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
                <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon /></a>
              </span>
              <br />
            </motion.div>
          </div>

          <div className="about-info">
            <motion.div className="about-title" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
              <div className="box">
                <div className="flex-row emoji-hello">
                  <h1>Hello World!&nbsp;&nbsp;</h1>
                  <motion.div initial={{ x: 0, rotateZ: 0 }} animate={{ x: 30, rotateZ: 40 }} transition={{ duration: 0.3, repeat: 5, repeatType: "reverse", delay: 2 }}>
                    <h1>👋</h1>
                  </motion.div>
                </div>
                <br />
                <h1>I&apos;m Oscar, a freelance <strong>Web Developer</strong> based in Switzerland, passionate about coding and web technologies.</h1>
                <br />
                <h2>I enjoy helping people, startups and companies build digital solutions that make our lives a little better.</h2>
                <br />
                <div className="about-buttons">
                  <Link href='#stack'><Button variant='none'><KeyboardDoubleArrowDownIcon />&nbsp; Find out more</Button></Link>
                </div>
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