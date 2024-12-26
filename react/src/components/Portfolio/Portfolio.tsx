import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.scss'

const Portfolio = () => {
    const [hoverProject, setHoverProject] = useState<string | undefined>(undefined)
    const portfolioList = [
        {
            id: "p01",
            name: 'project1',
            description: 'project description',
            link: 'www.nike.com'
        },
        {
            id: "p02",
            name: 'project2',
            description: 'project description',
            link: 'www.nike.com'
        },
        {
            id: "p03",
            name: 'project3',
            description: 'project description',
            link: 'www.nike.com'
        },
    ]
    return (
        <div className={styles.wrapper}>
            {portfolioList.map(project => (
                <motion.div
                    key={project.id}
                    whileHover={{ 
                        scale: 1.2,
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    onMouseEnter={() => setHoverProject(project.id)}
                    onMouseLeave={() => setHoverProject(undefined)}
                    style={{ backgroundColor: project.id === hoverProject ? 'lightgray' : 'white' }}
                > 
                    {project.id === hoverProject ? "show Me" : project.name}
                </motion.div>
            ))}
        </div>
    )
}

export default Portfolio;