import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section-lg">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"
              alt="Nail artist working on intricate nail design"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>
              Small details.
              <br />
              Big obsession.
            </h2>
            <div className="about-description">
              <p className="text-lg">
                LUNE NAILS is a space for thoughtful beauty, expressive details,
                and nails designed to feel uniquely yours.
              </p>
              <p>
                Founded on the belief that nail art is more than decoration—it's
                personal, intentional, and worthy of the same care given to any
                other form of creative expression.
              </p>
              <p>
                Every design begins with a conversation. We listen, collaborate,
                and create something that feels like you—not a trend, not a template.
              </p>
            </div>
            <a href="#" className="btn btn-secondary">
              Meet the Artist
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
