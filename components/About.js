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
    <div className="bg-about full-width">
      <ParticlesBackground />
      <section id="about">
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
            </motion.div>
            <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
              <span className='social-links'>
                <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon /></a>
              </span>
            </motion.div>
          </div>
          <div className="about-info">
            <motion.div className="about-title" initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
              <div className="box">
                <h2><span className="emoji-hello">👋</span> Hello World!</h2>
                <br />
                <h1>I&apos;m Oscar, a freelance <strong>Web Developer</strong> based in Switzerland, passionate about coding and web technologies.</h1>
                <br />
                <h2>I enjoy helping people, startups and companies build digital solutions that make our lives a little better.</h2>
                <br />
                <div className="about-buttons">
                  <Link href='#stack'><Button><KeyboardDoubleArrowDownIcon />&nbsp; Find out more</Button></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <br />
      </section>
    </div>
  )
}
export default About;