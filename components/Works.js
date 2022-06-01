import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@chakra-ui/react'


export default function Works() {

    return (
        <>
            <h1>Works</h1>
            <hr />
            <br />
            <div className="flex-row">
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' m={2} w='300px' p={4} color='black' >
                    <h3>PetSharing</h3>
                    <Image
                        borderRadius={5}
                        width='100%'
                        src='../images/works/petsharing-demo.png'
                        alt='PetScharing' />
                    <p>This web application allows you to find pets in your city or share your pet with locals when you need it. It use Express.js for the Back-end and Handelbars for the view rendering. It implement authentication using req.sessions and use bcrypt for the password encryption. Also offers CRUD functionality for all the Models.</p>
                    <br /><aside>Technologies: JavaScript, Express.js, Handlebars, MongoDB, HTML, CSS </aside>
                    <br /><a className="view-source" href="https://github.com/FreiburgDevTeam/crud-project" target="_blank" rel="noopener noreferrer"><Button color='black' variant='outline'><GitHubIcon fontSize="inherit" />&nbsp;View source </Button></a>
                </Box>
            </div>
        </>
    )
}