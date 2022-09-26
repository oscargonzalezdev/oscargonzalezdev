import { motion, } from "framer-motion";
import WorkCard from "./Cards/WorkCard";

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
    return (
        <section id="works" className="full-width">
            <h1 className="text-center section-title">Latest works<hr /></h1>
            <FadeInWhenVisible>
                <div className="flex-row gap40">
                    {data.map((item, index) => (
                        <WorkCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            slug={item.slug}
                            imageURL={item.image.data.attributes.url}
                            repoURL={item.repoURL}
                            demoURL={item.demoURL}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </FadeInWhenVisible>
        </section>
    )
}