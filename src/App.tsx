import React, { useState } from 'react'
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
import Pricing from './pages/Pricing'
import PricingDetail from './pages/PricingDetail'
import './styles/index.css'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/ScrollToTop'
import { motion } from 'framer-motion'
import { FaInfoCircle } from 'react-icons/fa'

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4 shadow-xl relative"
        >
          <div className="flex flex-col items-center text-center">
            <FaInfoCircle className="text-primary text-5xl mb-4" />
            <p className="text-gray-700 dark:text-gray-200 mb-6">{message}</p>
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);

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
        <ScrollToTop />
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
              <Route path="pricing" element={<Pricing />} />
              <Route path="pricing/:category/:plan" element={<PricingDetail />} />
            </Route>
          </Routes>
        </AnimatePresence>
        <AnimatePresence>
          {showInfoModal && (
            <InfoModal
              isOpen={true}
              onClose={() => setShowInfoModal(false)}
              message=""
            />
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  )
}

export default App 