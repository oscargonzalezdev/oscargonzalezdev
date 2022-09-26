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
    DrawerBody
} from "@chakra-ui/react"
import styles from '../Cards/Card.module.css'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';

function WorkCard({ title, subtitle, description, slug, imageURL, repoURL, demoURL }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <motion.div
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                }}
            >
                <Box boxShadow='base' className={styles.workCard}>
                    <div className={styles.workCardDescription}>
                        <Image h='200px' w='100%' objectFit='cover' borderRadius='10px 10px 0 0' src={imageURL} alt={title} />
                        <div>
                            <h2 className="text-center"><strong>{title}</strong></h2>
                            <h3 className="text-center">{subtitle}</h3>
                        </div>
                        <Button variant='none' onClick={onOpen}>More Details</Button>
                    </div>
                </Box>
            </motion.div>
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size='xl'
            >
                <DrawerOverlay />
                <DrawerContent className={styles.drawerContent}>
                    <DrawerCloseButton backgroundColor='initial' color='#000' zIndex={2} />
                    <DrawerHeader className={styles.drawerHeader} color='#fff'>{title}</DrawerHeader>
                    <DrawerBody className={styles.drawerBody}>
                        <div>
                            <p>{description}</p>
                            <div className="flex-row">
                                <a href={repoURL} target="_blank" rel="noopener noreferrer"><Button variant='none'><GitHubIcon fontSize="inherit" />&nbsp;Code </Button></a>
                                <a href={demoURL} target="_blank" rel="noopener noreferrer"><Button variant='none' ><PreviewIcon fontSize="inherit" />&nbsp;Demo </Button></a>
                            </div>
                        </div>
                        <Image objectFit='contain' borderRadius='10px' src={imageURL} alt={subtitle} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default WorkCard