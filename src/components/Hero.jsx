import { motion } from 'framer-motion'
import './Hero.css'

const Hero = ({ onBookingClick }) => {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nails,
            <br />
            but make them art.
          </motion.h1>

          <motion.p
            className="hero-subtitle text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Thoughtfully designed manicures for people who see beauty in the details.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="btn btn-primary"
              onClick={onBookingClick}
            >
              Book an Appointment
            </button>
            <a href="#work" className="btn btn-secondary">
              Explore Nail Art
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&auto=format&fit=crop&q=80"
              alt="Elegant nail art design featuring minimal and sophisticated manicure"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-xs text-uppercase">Scroll</span>
        <div className="hero-scroll-line"></div>
      </motion.div>
    </section>
  )
}

export default Hero
