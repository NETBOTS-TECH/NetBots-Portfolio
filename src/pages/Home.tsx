import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const achievements = [
  {
    number: '500+',
    label: 'Clients Worldwide',
    description: 'Trusted by businesses across industries'
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Based on customer feedback'
  },
  {
    number: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock expert assistance'
  },
  {
    number: '50+',
    label: 'Countries Served',
    description: 'Global presence and impact'
  }
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'CTO',
    company: 'TechGrowth Inc.',
    image: '/testimonials/john.jpg',
    content: 'NetBots has transformed our development process. Their AI solutions have increased our productivity by 300%.'
  },
  {
    name: 'Emma Davis',
    role: 'Operations Director',
    company: 'Global Logistics',
    image: '/testimonials/emma.jpg',
    content: 'The automation capabilities of NetBots have streamlined our operations and reduced costs significantly.'
  },
  {
    name: 'Alex Chen',
    role: 'Lead Developer',
    company: 'InnovateTech',
    image: '/testimonials/alex.jpg',
    content: 'As a developer, I appreciate the robust architecture and clean code that NetBots delivers.'
  }
]

const deliveryProcess = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We analyze your needs and create a tailored solution plan.',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Development',
    description: 'Our experts build your solution using cutting-edge technology.',
    icon: '⚙️'
  },
  {
    step: 3,
    title: 'Testing',
    description: 'Rigorous testing ensures quality and reliability.',
    icon: '✓'
  },
  {
    step: 4,
    title: 'Deployment',
    description: 'Smooth deployment with minimal disruption to your business.',
    icon: '🚀'
  },
  {
    step: 5,
    title: 'Support',
    description: '24/7 support and maintenance to ensure optimal performance.',
    icon: '💬'
  }
]

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NetBots - Innovative Software Solutions</title>
        <meta name="description" content="NetBots delivers cutting-edge software solutions powered by AI and automation to transform your business operations." />
        <meta name="keywords" content="software development, AI solutions, automation, digital transformation" />
        <link rel="canonical" href="https://netbots.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 mix-blend-multiply" />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,163,255,0.1),rgba(112,0,255,0.1),rgba(0,255,178,0.1))]" />
            </motion.div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold text-white mb-6">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  NetBots
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Innovative software solutions powered by AI and automation to streamline your operations
                and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors text-white font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-semibold"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Delivering excellence and innovation to businesses worldwide
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-800 rounded-lg"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold text-white mb-2">{achievement.label}</div>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">How We Deliver</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our proven process ensures successful delivery of your software solutions
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {deliveryProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-semibold text-white mb-2">{step.title}</div>
                  <p className="text-gray-400">{step.description}</p>
                  {index < deliveryProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary transform -translate-y-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from businesses that have transformed with NetBots
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses that have already transformed their operations with NetBots
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
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
    </>
  )
}

// Sample data
const services = [
  {
    title: "Web & App Development",
    description: "Custom web applications and mobile apps built with modern technologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Solutions",
    description: "Intelligent automation and machine learning solutions for your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

const products = [
  {
    title: "Edutally",
    description: "AI-powered school management system that streamlines administrative tasks and enhances learning experiences.",
    link: "/products/edutally",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "StockWare",
    description: "Smart inventory and POS system that helps businesses manage stock and sales efficiently.",
    link: "/products/stockware",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
]

export default Home 