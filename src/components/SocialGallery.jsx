import { motion } from 'framer-motion'
import './SocialGallery.css'

const socialImages = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&auto=format&fit=crop&q=80',
  'https://plus.unsplash.com/premium_photo-1661432806304-6d6cb7bfa4c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&auto=format&fit=crop&q=80'
]

const SocialGallery = () => {
  return (
    <section id="journal" className="social-gallery section">
      <div className="container">
        <motion.div
          className="social-gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Follow the Studio</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-handle"
          >
            @lunenails
          </a>
        </motion.div>

        <div className="social-gallery-grid">
          {socialImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`Nail art inspiration ${index + 1}`} />
              <div className="social-gallery-overlay">
                <span>View on Instagram</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialGallery
