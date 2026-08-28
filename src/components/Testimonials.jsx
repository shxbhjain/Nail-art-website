import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote: "The most beautiful set I've ever had. Every tiny detail felt intentional.",
    author: 'Sarah Chen',
    location: 'New York',
    rating: 5
  },
  {
    id: 2,
    quote: "Not just nails—an experience. The attention to detail is unmatched.",
    author: 'Emily Rodriguez',
    location: 'Los Angeles',
    rating: 5
  },
  {
    id: 3,
    quote: "My bridal nails were absolutely perfect. Elegant, timeless, and so me.",
    author: 'Jessica Park',
    location: 'San Francisco',
    rating: 5
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials section-lg">
      <div className="container container-narrow">
        <div className="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-stars">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <blockquote className="testimonial-quote">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="testimonial-author">
                <p className="testimonial-name">{testimonials[currentIndex].author}</p>
                <p className="testimonial-location text-sm">{testimonials[currentIndex].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials-controls">
            <button
              className="testimonial-arrow"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonial-arrow"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
