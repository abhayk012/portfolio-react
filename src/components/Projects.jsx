import { motion } from 'framer-motion'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mediaplayer from '../Assets/mediaplayer.png'
import qr from '../Assets/qr code generator.png'
import count from '../Assets/counter.png'
import netflix from '../Assets/Screenshot (12).png'
import food from '../Assets/Screenshot (14).png'
import weather from '../Assets/Screenshot (15).png'
import './Projects.css'

function Projects() {
    const projects = [
        {
            title: "Media Player",
            img: mediaplayer,
            tech: "React, HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/Mediaplayer_Front-end-react-project-",
            link: "https://mediaplayer-front-end-react-project.vercel.app/"
        },
        {
            title: "QR Code Generator",
            img: qr,
            tech: "React, HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/QR-code-generator",
            link: "https://qr-code-generator-rho-nine.vercel.app/"
        },
        {
            title: "Netflix Clone",
            img: netflix,
            tech: "React, HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/Netflix-Clone-1",
            link: "https://silver-bunny-412bb1.netlify.app/"
        },
        {
            title: "Counter",
            img: count,
            tech: "React, HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/Counter-Redux",
            link: "https://counter-redux-jade.vercel.app/"
        },
        {
            title: "Weather App",
            img: weather,
            tech: "HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/Weather-by-abhay",
            link: "https://abhayk012.github.io/Weather-by-abhay/"
        },
        {
            title: "Palaharam",
            img: food,
            tech: "React, HTML, CSS, Bootstrap",
            github: "https://github.com/abhayk012/Chayakkada",
            link: "https://chayakkada.vercel.app/"
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="projects" className="projects-section">
            <h1 className='text-center section-title'><span style={{color:"green"}}>My </span>Projects</h1>
            
            <motion.div 
                className='projects-grid'
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="project-card h-100">
                            <div className="card-img-container">
                                <Card.Img variant="top" src={project.img} />
                            </div>
                            <Card.Body className='cbody'>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    Created using {project.tech}
                                </Card.Text>
                                <div className='d-flex gap-2 mt-auto'>
                                    <Button variant="success">
                                        <a style={{textDecoration:"none",color:"white"}} href={project.github} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                    </Button>
                                    <Button variant="primary">
                                        <a style={{textDecoration:"none",color:"white"}} href={project.link} target="_blank" rel="noopener noreferrer">
                                            <i className="fa-solid fa-link"></i>
                                        </a>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}


export default Projects