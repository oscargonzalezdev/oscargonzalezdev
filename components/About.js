import { Image } from "@chakra-ui/react"
import classes from "./About.module.css"
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function About() {

  return (
    <>
      <section>
        <div className={classes.flewRow}>
          <motion.div initial={{ opacity: 0, x: "-100%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
            <div>
              <h1>Oscar Gonzalez</h1>
              <p>Creative Full-Stack Developer</p>
              <span className={classes.socialLinks}>
                <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon /></a>
              </span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
            <Image
              className={classes.avatar}
              borderRadius='full'
              boxSize='150px'
              src='../images/oscargonzalez.jpg'
              alt='Oscar Gonzalez'
            />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
          <p>I am a freelance and full-stack developer from Ecuador based in Switzerland with a passion for building digital solutions. <br />
            I love to keep learning and being able to express myself through code. When I&apos;m not online, I like hanging out with the mountain bike or take some pictures with my camera.
          </p>
        </motion.div>
      </section>
    </>
  )
}
export default About;