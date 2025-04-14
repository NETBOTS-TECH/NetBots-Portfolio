import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading mb-6">Our Portfolio</h1>
            <p className="subheading max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses
              transform their digital presence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-dark-lighter text-gray-400 hover:bg-dark-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card group cursor-pointer hover:bg-dark-light transition-colors duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-dark-lighter rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Challenge</h3>
                    <p className="text-gray-400">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Solution</h3>
                    <p className="text-gray-400">{selectedProject.solution}</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-400">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 className="heading mb-4">Ready to Build Something Amazing?</h2>
            <p className="subheading mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'ai', label: 'AI Solutions' },
]

const projects = [
  {
    title: "TechEd Learning Platform",
    category: "web",
    shortDescription: "Modern e-learning platform with AI-powered personalization.",
    description: "A comprehensive e-learning platform that revolutionizes online education through AI-driven personalization and interactive learning experiences.",
    challenge: "Create a scalable platform that can handle thousands of concurrent users while providing personalized learning paths for each student.",
    solution: "Implemented a microservices architecture with AI-powered recommendation system and real-time collaboration features.",
    image: "/portfolio/teched.jpg",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
    features: [
      "AI-powered learning paths",
      "Real-time collaboration",
      "Interactive assessments",
      "Progress tracking",
      "Video conferencing",
    ],
    link: "https://teched-learning.com",
  },
  {
    title: "HealthTrack Mobile App",
    category: "mobile",
    shortDescription: "AI-powered health monitoring and fitness tracking app.",
    description: "A comprehensive health and fitness tracking application that uses AI to provide personalized workout and nutrition recommendations.",
    challenge: "Develop a user-friendly app that can accurately track various health metrics and provide meaningful insights.",
    solution: "Created a cross-platform app using React Native with machine learning models for activity recognition and health predictions.",
    image: "/portfolio/healthtrack.jpg",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Node.js"],
    features: [
      "Activity recognition",
      "Nutrition tracking",
      "Workout planning",
      "Health insights",
      "Social features",
    ],
    link: "https://healthtrack-app.com",
  },
  {
    title: "SmartRetail Analytics",
    category: "ai",
    shortDescription: "Retail analytics platform with AI-powered insights.",
    description: "An intelligent retail analytics platform that helps businesses optimize their operations through data-driven insights and predictions.",
    challenge: "Build a system that can process and analyze large volumes of retail data in real-time to provide actionable insights.",
    solution: "Developed a scalable analytics platform using machine learning for demand forecasting and inventory optimization.",
    image: "/portfolio/smartretail.jpg",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Customer segmentation",
      "Sales analytics",
      "Automated reporting",
    ],
    link: "https://smartretail-analytics.com",
  },
]

export default Portfolio 