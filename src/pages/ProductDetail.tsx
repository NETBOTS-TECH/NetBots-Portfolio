import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

// Import products array and types from Products.tsx
import { products, Product } from './Products'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product: Product | undefined = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-300">Product not found</h1>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`${product.title} - NetBots Products`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {product.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{product.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{product.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-700 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to get started?</h2>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductDetail 