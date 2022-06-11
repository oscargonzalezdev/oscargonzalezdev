import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@chakra-ui/react';

function Footer() {
    return (
        <section className="main-container">
            <div className="footer-bg">
                <div className='flex-row flex-center'>
                    <p>Made with 🤍 and <span className='emoji-coffee'>☕</span> by Oscar Gonzalez &nbsp;</p>
                    <a href="https://github.com/oscargonzalezdev/portfolio" target="_blank" rel="noopener noreferrer"><Button borderColor='#c1c1c1' color='#c1c1c1' _hover={{ bg: '#fff', color: '#000' }} size='xs' variant='outline' ><GitHubIcon fontSize="inherit" />&nbsp; View Source </Button></a>
                </div>
                <br />
                <span className='social-links'>
                    <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                    <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon /></a>
                </span>
            </div>
        </section>
    )
}

export default Footer