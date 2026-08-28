import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    id: 1,
    name: 'Signature Manicure',
    description: 'A refined manicure tailored to your natural nails.',
    duration: '60 min',
    price: 'From $65'
  },
  {
    id: 2,
    name: 'Custom Nail Art',
    description: 'One-of-a-kind designs created around your personal style.',
    duration: '90 min',
    price: 'From $85'
  },
  {
    id: 3,
    name: 'Gel Extensions',
    description: 'Elegant extensions designed for length, structure, and durability.',
    duration: '120 min',
    price: 'From $95'
  },
  {
    id: 4,
    name: 'Bridal Nails',
    description: 'Timeless nail designs for weddings and special occasions.',
    duration: '90 min',
    price: 'From $110'
  }
]

const Services = () => {
  return (
    <section id="services" className="services section-lg">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Services</h2>
          <p className="text-lg">
            Every appointment is a quiet hour designed around you.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="service-card-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-meta">
                  <span className="service-duration text-sm">{service.duration}</span>
                  <span className="service-divider">·</span>
                  <span className="service-price text-sm">{service.price}</span>
                </div>
              </div>
              <button className="btn-link service-link">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
