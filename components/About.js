import { Button, Image } from "@chakra-ui/react"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {
  return (
    <div className="full-width bg-about">
      <section id="about">
        <div className="flex-row">
          <div className="about-info">
            <motion.div className="about-title" initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
              <h2><span className="emoji-hello">👋</span> Hello World!</h2>
              <br />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
              <h1>
                I&apos;m Oscar, a freelance <strong>Web Developer</strong> based in Switzerland, enthusiastic about coding and web technologies.
              </h1>
              <br />
              <h3>
                My work and passion is to build full-stack web applications focused on functionality, high quality and user experience.
              </h3>
              <br />
              <div className="about-buttons">
                <Button >Recent Projects</Button>
                <Button >Download Resume</Button>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
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
            </motion.div>
          </div>
        </div>
        <br />
      </section>
      <br />
      <section>
        <div className="box-stack">
        <h3 className="text-center">My Stack:</h3>
        <br />
          <div className="flex-row">
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt="JavaScript" title="JavaScript" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' alt='HTML' title="HTML" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' alt='CSS' title="CSS" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' alt='React.js' title="React.js" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='Node.js' title="Node.js" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='Express.js' title="Express.js" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' alt='MongoDB' title="MongoDB" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt="TypeScript" title="TypeScript" />
            <Image boxSize='35px' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' alt='Next.js' title="Next.js" />
          </div>
        </div>
      </section>
    </div>
  )
}
export default About;