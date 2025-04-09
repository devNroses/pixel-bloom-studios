import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.scss'

const Portfolio = () => {
    const [hoverProject, setHoverProject] = useState<string | undefined>(undefined)
    const portfolioList = [
        {
            id: "p01",
            name: 'Suchocki Enterprises',
            description: 'Web Design and Squarespace build. This project included a logo redesign, new brand colors and website refresh.',
            link: 'https://www.suchockient.com/',
            img: './SuschockiEntWebsite.png',
        },
        {
            id: "p02",
            name: 'Poshy Paws Mobile',
            description: 'Web Design, Squarespace build, created logo, and brand guide. Mobile dog grooming company in Phoenix AZ who pivoted from a store front to a mobile grooming fleet.',
            link: 'https://www.poshypawsmobile.com/',
            img: './PoshyPaws.png'
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
                    style={{ 
                        backgroundColor: project.id === hoverProject ? 'lightgray' : 'white', 
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                > 
                    <div className={styles.description}>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                        <a href={project.link} target='_blank'> View Project</a>
                    </div>
                    {/* {project.id === hoverProject ? "show Me" : project.name} */}
                </motion.div>
            ))}
        </div>
    )
}

export default Portfolio;