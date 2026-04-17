import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Interests from './pages/Interests'
import Contact from './pages/Contact'
import Waseda from './pages/Waseda'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/waseda' element={<Waseda />} />
      </Routes>
    </>
  )
}