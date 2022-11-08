import { Button } from "@chakra-ui/react"
function Newsletter() {

    return (
        <div className="box">
            <h1 className="text-center"><strong>Newsletter</strong></h1>
            <br />
            <h2>Stay updated with my tech newsletter.</h2>
            <form>
                <input type="email" placeholder='myemail@mail.com' />
                <Button color="#000" type='submit' size='sm'>Subscribe</Button>
            </form>
        </div>
    )
}

export default Newsletter