import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import FloatingContact from './components/common/FloatingContact'

function App() {
  return (
    <div className="min-h-screen bg-surface font-body relative">
      <Navbar />
      <HomePage />
      <FloatingContact />
      <Footer />
    </div>
  )
}

export default App
