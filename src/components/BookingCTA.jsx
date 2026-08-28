import { motion } from 'framer-motion'
import './BookingCTA.css'

const BookingCTA = ({ onBookingClick }) => {
  return (
    <section className="booking-cta section-lg">
      <div className="container">
        <motion.div
          className="booking-cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="booking-cta-title">
            Your next set
            <br />
            starts here.
          </h2>
          <p className="booking-cta-subtitle text-lg">
            Ready for nails that feel a little more like you?
          </p>
          <button
            className="btn btn-primary btn-large"
            onClick={onBookingClick}
          >
            Book Your Appointment
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingCTA
