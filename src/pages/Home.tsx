import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaSearch, FaCode, FaCheckCircle, FaRocket, FaHeadset } from 'react-icons/fa'

const achievements = [
  {
    number: '50+',
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
    number: '10+',
    label: 'Countries Served',
    description: 'Global presence and impact'
  }
]

const deliveryProcess = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We analyze your needs and create a tailored solution plan.',
    icon: <FaSearch className="w-8 h-8 text-primary mx-auto" />
  },
  {
    step: 2,
    title: 'Development',
    description: 'Our experts build your solution using cutting-edge technology.',
    icon: <FaCode className="w-8 h-8 text-primary mx-auto" />
  },
  {
    step: 3,
    title: 'Testing',
    description: 'Rigorous testing ensures quality and reliability.',
    icon: <FaCheckCircle className="w-8 h-8 text-primary mx-auto" />
  },
  {
    step: 4,
    title: 'Deployment',
    description: 'Smooth deployment with minimal disruption to your business.',
    icon: <FaRocket className="w-8 h-8 text-primary mx-auto" />
  },
  {
    step: 5,
    title: 'Support',
    description: '24/7 support and maintenance to ensure optimal performance.',
    icon: <FaHeadset className="w-8 h-8 text-primary mx-auto" />
  }
]

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NetBots - Leading Software Development Company in Pakistan | AI & Automation Solutions</title>
        <meta name="description" content="NetBots delivers innovative software solutions powered by AI and automation. Transform your business with our cutting-edge web, mobile, and cloud services." />
        <meta name="keywords" content="software development, AI solutions, automation, digital transformation, web development, mobile apps, cloud services, Pakistan software company, Skardu tech, artificial intelligence, machine learning, custom software" />
        <link rel="canonical" href="https://netbots.io" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://netbots.io" />
        <meta property="og:title" content="NetBots - Leading Software Development Company" />
        <meta property="og:description" content="Transform your business with our innovative software solutions powered by AI and automation." />
        <meta property="og:image" content="https://netbots.io/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://netbots.io" />
        <meta property="twitter:title" content="NetBots - Leading Software Development Company" />
        <meta property="twitter:description" content="Transform your business with our innovative software solutions powered by AI and automation." />
        <meta property="twitter:image" content="https://netbots.io/twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section - Mobile First */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
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
          <div className="container mx-auto z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  NetBots
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Innovative software solutions powered by AI and automation to streamline your operations
                and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <Link
                  to="/apply-training"
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg transition-colors text-white font-semibold text-center"
                >
                  Apply Training Program
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg transition-colors font-semibold text-center"
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

        {/* Google Reviews Section */}
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
                Real reviews from our valued clients
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
              <div className="elfsight-app-d23688b3-c509-4a52-bcb4-7eb294281a7e" data-elfsight-app-lazy></div>
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

export default Home 