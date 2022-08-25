import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import { FadeInWhenVisible } from './LatestWorks';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact () {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    // allow notifications using toastify
    const notify = () => {
        toast.success('Message sent successfully!', {
            position: "bottom-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // set up EmailJS services
    const sendEmail = (e) => {
        e.preventDefault();
        toast.promise(
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
            {
                pending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Something went wrong. Please try again later'
            }
        )
            .then(result => {
                setName("")
                setEmail("")
                setMessage("")
            })
    };

    return (
        <section id="contact" className='full-width'>
            <ToastContainer position="bottom-right" />
            <div className='flex-column'>
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <h1 className='text-center section-title'>Get in touch<hr /></h1>
                    <FadeInWhenVisible >
                        <Box className='box'>
                            <VStack spacing={5}>
                                <div className='flex-row flex-space-between'>
                                    <div>
                                    <FormControl isRequired><FormLabel>Name</FormLabel></FormControl>
                                        <Input required type="text" name="user_name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div>
                                    <FormControl isRequired><FormLabel>Email</FormLabel></FormControl>
                                        <Input required type="email" name="user_email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <FormControl isRequired>
                                    <FormLabel >Message</FormLabel>
                                    <Textarea required name="message" placeholder="Your Message" rows={9} resize="none" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </FormControl>
                                <Button
                                    type="submit"
                                    variant='none'
                                >
                                    Send Message
                                </Button>
                            </VStack>
                        </Box>
                    </FadeInWhenVisible>
                </form>
            </div>
        </section>
    );
}