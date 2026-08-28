import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './BookingModal.css'

const BookingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="modal-header">
              <h3>Book Your Appointment</h3>
              <p className="text-sm">
                Let's create something beautiful together.
              </p>
            </div>

            <form className="booking-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Service</label>
                <select id="service" className="form-input" required>
                  <option value="">Select a service</option>
                  <option value="signature">Signature Manicure</option>
                  <option value="custom">Custom Nail Art</option>
                  <option value="extensions">Gel Extensions</option>
                  <option value="bridal">Bridal Nails</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Tell us about your vision
                </label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  placeholder="Describe the nail design you're dreaming of..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Request Appointment
              </button>

              <p className="form-note text-xs">
                We'll confirm your appointment within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BookingModal
