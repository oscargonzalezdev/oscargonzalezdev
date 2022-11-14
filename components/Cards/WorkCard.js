import {
    Box,
    Image,
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter
} from "@chakra-ui/react"
import styles from '../Cards/Card.module.css'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import WhileHover from '../Aminations/WhileHover'

function WorkCard({ title, subtitle, description, imageURL, repoURL, demoURL }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <WhileHover >
                <Box onClick={onOpen}>
                    <Image h='100px' w='100%' objectFit='cover' src={imageURL} alt={title} />
                    <Box marginTop='20px'>
                        <h3><strong>{title}</strong></h3>
                        <p>{subtitle}</p>
                    </Box>
                </Box>
            </WhileHover>
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size='xl'
            >
                <DrawerOverlay />
                <DrawerContent className={styles.drawerContent}>
                    <DrawerCloseButton backgroundColor='initial' color='#ccc' zIndex={2} />
                    <DrawerHeader className="text-center"><h1>{title}</h1></DrawerHeader>
                    <DrawerBody className={styles.drawerBody}>
                        <p>{description}</p>
                        <Image src={imageURL} alt={subtitle} />
                    </DrawerBody>
                    <DrawerFooter className={styles.drawerFooter}>
                        <a href={repoURL} target="_blank" rel="noopener noreferrer"><Button variant='none'><GitHubIcon fontSize="inherit" />Code </Button></a>
                        <a href={demoURL} target="_blank" rel="noopener noreferrer"><Button variant='none' ><PreviewIcon fontSize="inherit" />Demo </Button></a>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default WorkCard