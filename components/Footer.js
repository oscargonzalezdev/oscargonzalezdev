import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
                    <Link href='/#works'>Works</Link><br />
                    <Link href='/#contact'>Contact</Link><br />
                </div>
            </div>
            <div className='flex-row flex-center madeby'>
                <p>Made with 🤍 and <span className='emoji-coffee'>☕</span> by Oscar Gonzalez</p>
            </div>
        </section>
    )
}

export default Footer