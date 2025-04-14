import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaRocket, FaStar, FaHandshake, FaBullseye, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  const teamMembers = [
    {
      name: "Saqlain Shah",
      role: "Founder & CEO",
      category: "leadership"
    },
    {
      name: "Karamat Ali",
      role: "COO",
      category: "leadership"
    },
    {
      name: "M Abdullah",
      role: "Team Lead",
      category: "leadership"
    },
    {
      name: "Shehbaz Alam",
      role: "Full Stack Developer",
      category: "development"
    },
    {
      name: "M Rafiq",
      role: "Full Stack Developer",
      category: "development"
    },
    {
      name: "Farukh Hussain",
      role: "Full Stack Developer",
      category: "development"
    },
    {
      name: "Jalal Hussain",
      role: "Full Stack Developer",
      category: "development"
    },
    {
      name: "Syed Sibtain",
      role: "Graphic Designer",
      category: "creative"
    },
    {
      name: "Syed Hasnain",
      role: "Digital Marketer",
      category: "marketing"
    },
    {
      name: "Sania Zahra",
      role: "Digital Marketer",
      category: "marketing"
    },
    {
      name: "Malika Bani",
      role: "Web Developer",
      category: "development"
    },
    {
      name: "Arifa Batool",
      role: "Web Developer",
      category: "development"
    }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions and creative problem-solving.',
      icon: <FaRocket className="w-12 h-12 text-primary mx-auto" />
    },
    {
      title: 'Excellence',
      description: 'Delivering high-quality solutions that exceed expectations.',
      icon: <FaStar className="w-12 h-12 text-primary mx-auto" />
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve remarkable results.',
      icon: <FaHandshake className="w-12 h-12 text-primary mx-auto" />
    },
    {
      title: 'Integrity',
      description: 'Building trust through honesty and transparency.',
      icon: <FaBullseye className="w-12 h-12 text-primary mx-auto" />
    }
  ]

  // WhatsApp contact details
  const whatsappNumber = '+923475484803'
  const whatsappMessage = encodeURIComponent('Hi NetBots, I would like to discuss a project.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <Helmet>
        <title>About NetBots - Leading Software Development Company in Pakistan</title>
        <meta name="description" content="Learn about NetBots, a pioneering software development company in Pakistan. Meet our expert team dedicated to delivering innovative tech solutions." />
        <meta name="keywords" content="about netbots, software company pakistan, tech company skardu, software development team, AI development pakistan, digital transformation experts" />
        <link rel="canonical" href="https://netbots.io/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://netbots.io/about" />
        <meta property="og:title" content="About NetBots - Leading Software Development Company" />
        <meta property="og:description" content="Discover NetBots' journey in revolutionizing software development and digital transformation in Pakistan." />
        <meta property="og:image" content="https://netbots.io/og-about.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://netbots.io/about" />
        <meta property="twitter:title" content="About NetBots - Leading Software Development Company" />
        <meta property="twitter:description" content="Discover NetBots' journey in revolutionizing software development and digital transformation in Pakistan." />
        <meta property="twitter:image" content="https://netbots.io/twitter-about.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About NetBots</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of software development with innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl text-gray-300">
                To empower businesses through innovative software solutions and digital transformation, 
                making technology accessible and impactful for organizations of all sizes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg md:text-xl text-gray-300">
                To be the leading force in digital transformation, creating intelligent solutions 
                that shape the future of business and technology in Pakistan and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Our Team</h2>
          
          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Leadership</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers
                .filter(member => member.category === 'leadership')
                .map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                    <p className="text-primary">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Development Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8">Development Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers
                .filter(member => member.category === 'development')
                .map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                    <p className="text-primary">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Creative & Marketing */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Creative & Marketing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers
                .filter(member => member.category === 'creative' || member.category === 'marketing')
                .map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                    <p className="text-primary">{member.role}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">12+</div>
              <p className="text-gray-300">Team Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-300">Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading mb-4">Join Our Journey</h2>
            <p className="subheading mb-8 max-w-2xl mx-auto">
              Be part of our mission to revolutionize the digital landscape.
              Let's create something extraordinary together.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/careers" className="btn-primary">
                View Careers
              </Link>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat with Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 