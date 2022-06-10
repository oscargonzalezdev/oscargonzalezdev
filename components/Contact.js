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
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_276giiq', 'template_mxyrjik', form.current, 'JjEdKdtMyFu95MKtK')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                // console.log(error.text);
            });
    };

    return (
        <section id="contact" className='full-width contact-bg'>
            <form ref={form} onSubmit={sendEmail}>
                <h1 className='text-center section-title'>Get in touch</h1>
                <br />
                <FadeInWhenVisible ><Box className='container box'
                    bg={useColorModeValue('white', 'gray.100')}
                    borderRadius="lg"
                    p={8}
                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                    shadow="base">
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>

                            <InputGroup>
                                <Input type="text" name="user_name" placeholder="Your Name" />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>

                            <InputGroup>
                                <Input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Message</FormLabel>

                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                rows={9}
                                resize="none"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            color='black'
                            variant='outline'
                        >
                            Send Message
                        </Button>
                    </VStack>
                </Box></FadeInWhenVisible>
            </form>
        </section>
    );
}