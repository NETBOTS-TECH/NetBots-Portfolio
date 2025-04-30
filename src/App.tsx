import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Training from './pages/Training'
import Career from './pages/Career'
import ApplyTraining from './pages/ApplyTraining'
import './styles/index.css'
import { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="training" element={<Training />} />
              <Route path="careers" element={<Career />} />
              <Route path="apply-training" element={<ApplyTraining />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  )
}

export default App 