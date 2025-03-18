import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Med<span className="text-yellow-300">Equip</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-blue-600 md:static md:flex md:items-center md:gap-8 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="block py-3 px-6 hover:bg-blue-700 md:hover:bg-transparent transition md:inline-block"
          >
            Home
          </Link>
          <Link
            to="/dash"
            className="block py-3 px-6 hover:bg-blue-700 md:hover:bg-transparent transition md:inline-block"
          >
            Dashboard
          </Link>
          <Link
            to="/add"
            className="block py-3 px-6 hover:bg-blue-700 md:hover:bg-transparent transition md:inline-block"
          >
            Add Product
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-6 hover:bg-blue-700 md:hover:bg-transparent transition md:inline-block"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
