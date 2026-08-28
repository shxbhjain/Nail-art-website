import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FeaturedWork.css'

const nailDesigns = [
  {
    id: 1,
    name: 'Chrome Aura',
    category: 'Chrome',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80',
    mood: 'bold'
  },
  {
    id: 2,
    name: 'French Noir',
    category: 'French',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80',
    mood: 'minimal'
  },
  {
    id: 3,
    name: 'Pearl Veil',
    category: 'Chrome',
    price: '₹1199',
    image: 'https://images.unsplash.com/photo-1735236007245-9dc6e28bbe56?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mood: 'romantic'
  },
  {
    id: 4,
    name: 'Matcha Marble',
    category: 'Abstract',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=80',
    mood: 'abstract'
  },
  {
    id: 5,
    name: 'Burgundy Gloss',
    category: 'Bold',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop&q=80',
    mood: 'bold'
  },
  {
    id: 6,
    name: 'Micro Florals',
    category: 'Floral',
    price: '₹799',
    image: 'https://images.unsplash.com/photo-1696341995063-b60c66e85838?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mood: 'floral'
  }
]

const FeaturedWork = ({ selectedMood }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredDesigns = selectedMood
    ? nailDesigns.filter(design => design.mood === selectedMood)
    : nailDesigns

  return (
    <section id="work" className="featured-work section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="featured-work-title">Recent Work</h2>
          <p className="featured-work-subtitle text-lg">
            Each design is a collaboration — crafted with care, tailored to you.
          </p>
        </motion.div>

        <div className="featured-work-grid">
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, index) => (
              <motion.div
                key={design.id}
                className={`featured-work-item item-${index + 1}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(design)}
              >
                <div className="featured-work-image">
                  <img src={design.image} alt={design.name} />
                  <div className="featured-work-overlay">
                    <span className="text-uppercase">View</span>
                  </div>
                </div>
                <div className="featured-work-info">
                  <div>
                    <h4 className="featured-work-name">{design.name}</h4>
                    <p className="featured-work-category text-sm">{design.category}</p>
                  </div>
                  <span className="featured-work-price text-sm">{design.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img src={selectedImage.image} alt={selectedImage.name} />
              <div className="lightbox-info">
                <h3>{selectedImage.name}</h3>
                <p className="text-sm">{selectedImage.category} · {selectedImage.price}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedWork
