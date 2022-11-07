import styles from './Works.module.css'
import { Grid, GridItem } from "@chakra-ui/react";
import { motion, useInView, } from "framer-motion";
import WorkCard from "../Cards/WorkCard";
import { useContext, useRef, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';

export function FadeInWhenVisible({ children }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 100, opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

export default function LatestWorks({ data }) {
    const sortedData = data.sort(function(a,b){
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      })

    const worksRef = useRef()
    const isInView = useInView(worksRef)
    const { elementInView, setElementInView } = useContext(DataContext)

    useEffect(() => {
            setElementInView({...elementInView, works: isInView})  
    }, [isInView])

    return (
        <section id="works">
            <h3 className="section-title">Latest Works<hr /></h3>
            <FadeInWhenVisible>
                <Grid ref={worksRef} className={styles.mainGrid}>
                    {
                        sortedData.slice(0, 4).map((item, index) => (
                        <GridItem className={styles.gridItem} key={index}>
                            <WorkCard
                                title={item.title}
                                description={item.description}
                                slug={item.slug}
                                imageURL={item.image.data.attributes.url}
                                repoURL={item.repoURL}
                                demoURL={item.demoURL}
                                subtitle={item.subtitle}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </FadeInWhenVisible>
        </section>
    )
}