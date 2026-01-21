import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Process from './pages/Process'
import FloatingContact from './components/common/FloatingContact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-surface font-body relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      <FloatingContact />
      <Footer />
    </div>
  )
}

export default App
