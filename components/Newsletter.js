import { Button } from "@chakra-ui/react"
function Newsletter () {

    return (
        <div className='newsletter text-center'>
        <h2>Stay updated with my tech newsletter.</h2>
        <p>I promise not to spam you!</p><br />
        <form>
            <input type="email" placeholder='myemail@mail.com' />
            <Button color="#000" type='submit' size='sm'>Subscribe</Button>
        </form>
    </div>
    )
}

export default Newsletter