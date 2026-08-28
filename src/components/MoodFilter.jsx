import { motion } from 'framer-motion'
import './MoodFilter.css'

const moods = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'romantic', label: 'Romantic' },
  { id: 'bold', label: 'Bold' },
  { id: 'chrome', label: 'Chrome' },
  { id: 'french', label: 'French' },
  { id: 'floral', label: 'Floral' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'bridal', label: 'Bridal' }
]

const MoodFilter = ({ selectedMood, onMoodSelect }) => {
  return (
    <section className="mood-filter section">
      <div className="container">
        <motion.div
          className="mood-filter-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Find Your Nail Mood</h2>
          <p className="text-lg">
            Explore styles that speak to you.
          </p>
        </motion.div>

        <motion.div
          className="mood-filter-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {moods.map((mood, index) => (
            <motion.button
              key={mood.id}
              className={`mood-filter-item ${selectedMood === mood.id ? 'active' : ''}`}
              onClick={() => onMoodSelect(selectedMood === mood.id ? null : mood.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {mood.label}
            </motion.button>
          ))}
        </motion.div>

        {selectedMood && (
          <motion.div
            className="mood-filter-active"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <p className="text-sm">
              Showing: <strong>{moods.find(m => m.id === selectedMood)?.label}</strong>
            </p>
            <button
              className="btn-link"
              onClick={() => onMoodSelect(null)}
            >
              Clear filter
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default MoodFilter
