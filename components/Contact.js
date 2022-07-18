import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Textarea,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { FadeInWhenVisible } from './Works';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const { hasCopied, onCopy } = useClipboard('example@example.com');
    const form = useRef();

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

    const sendEmail = (e) => {
        e.preventDefault();
        toast.promise(
            emailjs.sendForm('service_276giiq', 'template_mxyrjik', form.current, 'JjEdKdtMyFu95MKtK'),
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
                                        <Input type="text" name="user_name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        
                                    </div>
                                    <div>
                                    <FormControl isRequired><FormLabel>Email</FormLabel></FormControl>
                                        <Input type="email" name="user_email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <FormControl isRequired>
                                    <FormLabel >Message</FormLabel>
                                    <Textarea name="message" placeholder="Your Message" rows={9} resize="none" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </FormControl>
                                <Button
                                    type="submit"
                                    color='black'
                                    variant='outline'
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