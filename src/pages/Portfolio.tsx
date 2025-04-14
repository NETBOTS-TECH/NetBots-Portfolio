import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const PlaceholderSVG = () => (
  <div className="w-full h-full bg-dark-lighter flex items-center justify-center">
    <svg
      className="w-24 h-24 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
)

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    // Add scroll animation styles
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes scroll {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(calc(-100% + 300px));
        }
      }
    `;
    document.head.appendChild(styleTag);

    // Cleanup
    return () => {
      styleTag.remove();
    };
  }, []);

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
                  <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                    {project.image ? (
                      <div className="w-full h-full overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full transition-transform duration-[10s] ease-linear ${
                            project.category === 'website' 
                              ? 'h-auto min-h-full group-hover:translate-y-[calc(-100%+300px)]' 
                              : 'h-full object-cover'
                          }`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.parentElement?.querySelector('.placeholder')?.classList.remove('hidden');
                          }}
                        />
                      </div>
                    ) : (
                      <PlaceholderSVG />
                    )}
                    <div className="placeholder hidden">
                      <PlaceholderSVG />
                    </div>
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
              <div className="aspect-video relative overflow-hidden">
                {selectedProject.image ? (
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={`w-full animate-scroll ${
                        selectedProject.category === 'website' 
                          ? 'h-auto min-h-full' 
                          : 'h-full object-cover'
                      }`}
                      style={{
                        animation: selectedProject.category === 'website' 
                          ? 'scroll 15s linear infinite' 
                          : 'none'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.parentElement?.querySelector('.placeholder')?.classList.remove('hidden');
                      }}
                    />
                  </div>
                ) : (
                  <PlaceholderSVG />
                )}
                <div className="placeholder hidden">
                  <PlaceholderSVG />
                </div>
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
  { value: 'website', label: 'Websites & Web Apps' },
  { value: 'design', label: 'Design Projects' },
  { value: 'marketing', label: 'Marketing Solutions' },
]

const projects = [
  {
    title: "Avicena Medical Center",
    category: "website",
    shortDescription: "Modern healthcare website with appointment scheduling system.",
    description: "A comprehensive medical center website built with Next.js, featuring an online appointment system, doctor profiles, and service information portal.",
    image: "/images/portfolio/website/avicena.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Online appointment scheduling",
      "Doctor profiles and specialties",
      "Service information portal",
      "Patient resources section",
      "Mobile-responsive design",
    ],
    link: "#",
  },
  {
    title: "Mountain Travels",
    category: "website",
    shortDescription: "Adventure tourism and travel booking platform.",
    description: "A dynamic travel website for mountain adventures and tour bookings, featuring stunning visuals and an easy-to-use booking system.",
    image: "/images/portfolio/website/mountaintravels.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: [
      "Tour package listings",
      "Online booking system",
      "Interactive travel guides",
      "Customer reviews",
      "Secure payment processing",
    ],
    link: "#",
  },
  {
    title: "RMC Construction",
    category: "website",
    shortDescription: "Professional construction company website.",
    description: "A modern website for a construction company showcasing their projects, services, and expertise in the construction industry.",
    image: "/images/portfolio/website/rmc.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    features: [
      "Project portfolio gallery",
      "Service showcase",
      "Team profiles",
      "Project request form",
      "Interactive animations",
    ],
    link: "#",
  },
  {
    title: "Rinor Technology",
    category: "website",
    shortDescription: "IT solutions and technology services platform.",
    description: "A corporate website for an IT solutions provider, highlighting their technology services and expertise in digital transformation.",
    image: "/images/portfolio/website/rinor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Service portfolio",
      "Case studies section",
      "Technology stack showcase",
      "Client testimonials",
      "Contact automation",
    ],
    link: "#",
  },
  {
    title: "YHAM",
    category: "website",
    shortDescription: "Yousuf Hussain Abadi Museum Web App.",
    description: "A professional website for Yousuf Hussain Abadi Museum, showcasing their expertise, projects, and comprehensive museum artifacts.",
    image: "/images/portfolio/website/yham.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Virtual museum tour",
      "Artifact catalog",
      "Historical timeline",
      "Exhibition calendar",
      "Educational resources",
    ],
    link: "#",
  },
  {
    title: "Brand Identity Design",
    category: "design",
    shortDescription: "Complete brand identity design for a tech startup.",
    description: "A comprehensive brand identity project including logo design, color palette, typography, and brand guidelines.",
    image: "src/assets/portfolio/designs/brand-design.jpg",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    features: [
      "Logo design and variations",
      "Brand guidelines documentation",
      "Custom icon set",
      "Typography system",
      "Color palette development",
    ],
    link: "#",
  },
  {
    title: "UI/UX Design System",
    category: "design",
    shortDescription: "Modern design system for a financial technology platform.",
    description: "A comprehensive design system that ensures consistency across web and mobile applications while maintaining accessibility standards.",
    image: "src/assets/portfolio/designs/design-system.jpg",
    technologies: ["Figma", "Storybook", "Zeplin"],
    features: [
      "Component library",
      "Design tokens",
      "Accessibility guidelines",
      "Interactive prototypes",
      "Design documentation",
    ],
    link: "#",
  },
  {
    title: "Digital Marketing Campaign",
    category: "marketing",
    shortDescription: "Comprehensive digital marketing campaign for product launch.",
    description: "A multi-channel digital marketing campaign that increased brand awareness and generated qualified leads.",
    image: "src/assets/portfolio/marketing/marketing-campaign.jpg",
    technologies: ["Google Ads", "Meta Ads", "Mailchimp", "HubSpot", "Google Analytics"],
    features: [
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing",
      "SEO optimization",
      "Performance analytics",
    ],
    link: "#",
  },
  {
    title: "SEO Optimization Project",
    category: "marketing",
    shortDescription: "Complete SEO optimization for an e-commerce website.",
    description: "A comprehensive SEO project that improved search rankings and organic traffic for an e-commerce platform.",
    image: "src/assets/portfolio/marketing/seo-project.jpg",
    technologies: ["SEMrush", "Ahrefs", "Google Search Console", "Google Analytics", "WordPress"],
    features: [
      "Technical SEO audit",
      "Content optimization",
      "Link building strategy",
      "Local SEO optimization",
      "Performance monitoring",
    ],
    link: "#",
  }
]

export default Portfolio 