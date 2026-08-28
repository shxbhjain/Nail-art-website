import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import Services from './components/Services'
import MoodFilter from './components/MoodFilter'
import About from './components/About'
import Testimonials from './components/Testimonials'
import SocialGallery from './components/SocialGallery'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedMood, setSelectedMood] = useState(null)

  useEffect(() => {
    // Smooth reveal on load
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.transition = 'opacity 800ms ease'
      document.body.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <>
      <Navbar onBookingClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookingClick={() => setIsBookingOpen(true)} />
        <FeaturedWork selectedMood={selectedMood} />
        <Services />
        <MoodFilter
          selectedMood={selectedMood}
          onMoodSelect={setSelectedMood}
        />
        <About />
        <Testimonials />
        <SocialGallery />
        <BookingCTA onBookingClick={() => setIsBookingOpen(true)} />
      </main>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  )
}

export default App
