import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@chakra-ui/react';
import PreviewIcon from '@mui/icons-material/Preview';
import { motion, } from "framer-motion";

export function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

export default function Works() {

    return (
        <section id="works" className="full-width works-bg">
            <h1 className="text-center section-title">Last works</h1>
            <div className="flex-row">
                <FadeInWhenVisible><Box className="box" maxW='sm' borderRadius={15} m={2} w={370} p={5} color='black' >
                    <h3>Budget-Manger</h3>
                    <Image
                        borderRadius={5}
                        width='100%'
                        src='../images/works/budget-manager.png'
                        alt='Budget-Manger' />
                    <p>Budget-Manager helps you to track your finances. This MERN application has a Dashboard whit diefferent secctions like Balance, Statatemnts list and Chart, so you have an better overview of your incomes and expenses.</p>
                    <p>It has CRUD functionality for the Statements Model and use REST API for the comunication between client and server.</p>
                    <aside>Technologies: JavaScript, Express.js, React, MongoDB, Charts.js, Material UI, HTML, CSS</aside>
                    <br />
                    <div className="flex-row">
                        <a href="https://github.com/FreiburgDevTeam/mern-application-client" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><GitHubIcon fontSize="inherit" />&nbsp;Source </Button></a>
                        <a href="https://budget-manager-mern-app.netlify.app/" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><PreviewIcon fontSize="inherit" />&nbsp;Demo </Button></a>
                    </div>
                </Box></FadeInWhenVisible>
                <FadeInWhenVisible><Box className="box" maxW='sm' borderRadius={15} m={2} w={370} p={5} color='black' >
                    <h3>PetSharing</h3>
                    <Image
                        borderRadius={5}
                        width='100%'
                        src='../images/works/petsharing-demo.png'
                        alt='PetScharing' />
                    <p>This web application allows you to find pets in your city or share your pet with locals when you need it. It use Express.js for the Back-end and Handelbars for the view rendering. It implement authentication using session storage and use bcrypt for the password encryption. Also offers CRUD functionality for all data base models.</p>
                    <aside>Technologies: JavaScript, Express.js, Handlebars, MongoDB, HTML, CSS </aside>
                    <br />
                    <div className="flex-row">
                        <a href="https://github.com/FreiburgDevTeam/crud-project" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><GitHubIcon fontSize="inherit" />&nbsp;Source </Button></a>
                        <a href="https://pet-sharing.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><PreviewIcon fontSize="inherit" />&nbsp;Demo </Button></a>
                    </div>
                </Box></FadeInWhenVisible>
                <FadeInWhenVisible><Box className="box" maxW='sm' borderRadius={15} m={2} w={370} p={5} color='black' >
                    <h3>The Good Diver</h3>
                    <Image
                        borderRadius={5}
                        width='100%'
                        src='../images/works/the-good-diver-js-game.png'
                        alt='The Good Diver' />
                    <p>The Good Diver is a game about cleaning the ocean.
                        In order to earn points the you must capture ocean trash without being attacked by the sharks.
                        You can move the diver by using the the arrow keys.</p>
                    <aside>Technologies: Vanilla JavaScript, HTML, CSS </aside>
                    <br />
                    <div className="flex-row">
                        <a href="https://github.com/oscargonzalezdev/project-game" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><GitHubIcon fontSize="inherit" />&nbsp;Source </Button></a>
                        <a href="https://oscargonzalezdev.github.io/project-game" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><PreviewIcon fontSize="inherit" />&nbsp;Demo </Button></a>
                    </div>
                </Box></FadeInWhenVisible>
            </div>
        </section>
    )
}