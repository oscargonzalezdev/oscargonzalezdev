import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

function Footer() {
    return (
        <section className='footer-bg'>
            <div className="flex-row">
                <div>
                    <span>
                        <a href="https://github.com/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><GitHubIcon fontSize='sm' />&nbsp; GitHub</a> <br />
                        <a href="https://www.linkedin.com/in/oscargonzalezdev" target="_blank" rel="noopener noreferrer" ><LinkedInIcon fontSize='sm' />&nbsp; LinkedIn</a> <br />
                        <a href="https://twitter.com/oscardev_" target="_blank" rel="noopener noreferrer" ><TwitterIcon fontSize='sm' />&nbsp; Twitter</a> <br />
                    </span>
                </div>
                <div>
                    <Link href='/blog'>Blog</Link><br />
                    <Link href='/works'>Works</Link><br />
                    <Link href='/contact'>Contact</Link><br />
                    <br />
                    <br />
                </div>
            </div>
            <div className='flex-row flex-center madeby'>
                <p>Made with 🤍 and <span className='emoji-coffee'>☕</span> by Oscar Gonzalez &nbsp;</p>
                <a href="https://github.com/oscargonzalezdev/portfolio" target="_blank" rel="noopener noreferrer"><Button borderColor='#c1c1c1' color='#c1c1c1' _hover={{ bg: '#fff', color: '#000' }} size='xs' variant='outline' ><GitHubIcon fontSize="inherit" />&nbsp; View Code </Button></a>
            </div>
        </section>
    )
}

export default Footer