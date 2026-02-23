import { motion } from 'framer-motion'
import './contact.css'

function Contact() {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/abhay-krishnan-k-b7139926b", className: "icon1" },
    { icon: "fa-brands fa-github", link: "https://github.com/abhayk012", className: "icon2" },
    { icon: "fa-brands fa-instagram", link: "https://www.instagram.com/abhay_0_1_2/", className: "icon3" },
    { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com/abhaykrishnan.karippathhouse/", className: "icon4" },
    { icon: "fa-brands fa-youtube", link: "https://www.youtube.com/", className: "icon5" }
  ];

  return (
    <motion.div 
      className='mt-5 contact-wrapper'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <section id="contact" className="contact-section">
        <div className="heading">
          <h2 className="section-title">Contact</h2>
          <h3 style={{color:"green"}}>My Contacts</h3>
        </div>

        <div className="media-icons">
          <div className="icon-set">
            {socialLinks.map((social, i) => (
              <motion.div 
                key={i}
                className={social.className}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <a href="#top" className="ua">
        <motion.div 
          className="up-arrow"
          whileHover={{ y: -5 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </motion.div>
      </a>
      
      <footer>
        <div className="rights">
          <p>&copy; My Portfolio Design 2024, All Rights Reserved &reg; ABHAY KRISHNAN</p>
        </div>
      </footer>
    </motion.div>
  )
}

export default Contact