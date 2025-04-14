import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const products = [
  {
    id: 'accounta',
    title: 'Accounta',
    description: 'Smart accounting and finance management solution for businesses of all sizes',
    features: [
      'Automated bookkeeping and reconciliation',
      'Real-time financial reporting',
      'Invoice and expense management',
      'Tax compliance and filing',
      'Payroll management',
      'Multi-currency support',
      'Financial analytics and forecasting'
    ],
    category: 'Finance',
    tags: ['Accounting', 'Finance', 'Business Management'],
    icon: '💼',
  },
  {
    id: 'epharma',
    title: 'E-Pharma',
    description: 'Complete clinical POS and pharmacy management system',
    features: [
      'Inventory management and tracking',
      'Prescription management',
      'Sales and billing',
      'Customer records management',
      'Supplier management',
      'Expiry date tracking',
      'Reports and analytics'
    ],
    category: 'Healthcare',
    tags: ['Pharmacy', 'Healthcare', 'POS'],
    icon: '💊',
  },
  {
    id: 'hotelsync',
    title: 'Hotel Sync',
    description: 'All-in-one hotel management and booking system',
    features: [
      'Room booking and management',
      'Front desk operations',
      'Housekeeping management',
      'Restaurant POS integration',
      'Online booking engine',
      'Guest relationship management',
      'Revenue management'
    ],
    category: 'Hospitality',
    tags: ['Hotels', 'Hospitality', 'Booking'],
    icon: '🏨',
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    description: 'Exciting new products in pilot phase',
    features: [
      'AI-powered business analytics',
      'Smart retail management system',
      'Educational institution management',
      'Advanced CRM solutions'
    ],
    category: 'Upcoming',
    tags: ['Innovation', 'AI', 'Future'],
    icon: '🚀',
  }
];

const testimonials = [
  {
    content: "Accounta has completely transformed how we handle our finances. It's so easy to use, and we've saved countless hours on bookkeeping. The real-time reports help us make better business decisions.",
    author: "Sarah M.",
    role: "Business Owner",
    company: "Tech Solutions Ltd"
  },
  {
    content: "E-Pharma is exactly what our pharmacy needed. Stock management is a breeze now, and we never miss expiry dates. The prescription management system is particularly impressive.",
    author: "Dr. Ahmed K.",
    role: "Pharmacy Manager",
    company: "LifeCare Pharmacy"
  },
  {
    content: "Hotel Sync has streamlined our entire operation. From bookings to housekeeping, everything is now perfectly coordinated. Our staff loves how user-friendly it is.",
    author: "Michael R.",
    role: "Hotel Manager",
    company: "Grand Plaza Hotel"
  },
  {
    content: "The support from NetBots has been exceptional. They really understood our needs and delivered a solution that works perfectly for our business.",
    author: "Lisa T.",
    role: "Operations Director",
    company: "Global Ventures"
  },
  {
    content: "We've tried several accounting software before, but Accounta is in a league of its own. The automation features have reduced our accounting work by 70%.",
    author: "James W.",
    role: "Finance Manager",
    company: "Innovation Corp"
  },
  {
    content: "E-Pharma's inventory management is fantastic. We've eliminated stockouts and improved our cash flow significantly since implementing it.",
    author: "Maria H.",
    role: "Pharmacy Owner",
    company: "MediCare Plus"
  },
  {
    content: "The NetBots team went above and beyond to customize Hotel Sync for our specific needs. Our booking efficiency has improved by 85% since implementation.",
    author: "Robert L.",
    role: "General Manager",
    company: "Skyline Hotels"
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = ['All', 'Finance', 'Healthcare', 'Hospitality', 'Upcoming'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Our Products - NetBots</title>
        <meta name="description" content="Discover NetBots' innovative software solutions for accounting, healthcare, and hospitality industries." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From accounting to hospitality, our products are designed to streamline your operations
              and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg p-8 text-center"
            >
              <p className="text-xl text-gray-300 mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="text-white">
                <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-400">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Get started with our innovative solutions and take your business to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products 