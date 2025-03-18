import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddProduct from './components/AddProduct'
import EditProduct from './pages/EditProduct'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Always Visible */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Routes>
        </main>

        {/* Footer Always Visible */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
