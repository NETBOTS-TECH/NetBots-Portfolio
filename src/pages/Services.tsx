import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
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
            <h1 className="heading mb-6">Our Services</h1>
            <p className="subheading max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver innovative solutions
              that drive your business forward in the digital age.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:bg-dark-light transition-all duration-300"
              >
                <div className="mb-6">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
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
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading mb-6">Technologies We Excel In</h2>
            <p className="subheading max-w-3xl mx-auto">
              We stay at the forefront of technology, mastering the latest tools and
              frameworks to deliver exceptional solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3">
                      <i className={`${tech.logo} text-3xl`}></i>
                      <div>
                        <h4 className="font-medium">{tech.name}</h4>
                        <p className="text-sm text-gray-400">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading mb-6">Our Development Process</h2>
            <p className="subheading max-w-3xl mx-auto">
              A systematic approach to turning your ideas into reality, ensuring
              quality and efficiency at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
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
            <h2 className="heading mb-4">Ready to Transform Your Business?</h2>
            <p className="subheading mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const services = [
  {
    title: "Web Development",
    icon: "devicon-react-original colored text-5xl",
    description: "Building modern, responsive, and scalable web applications using cutting-edge technologies and best practices.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "Headless CMS Integration",
      "Performance Optimization",
      "SEO-friendly Architecture",
      "API Development & Integration"
    ]
  },
  {
    title: "UI/UX Design",
    icon: "devicon-figma-plain colored text-5xl",
    description: "Creating intuitive and engaging user experiences with modern design principles and user-centered approach.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
      "Responsive Design"
    ]
  },
  {
    title: "Digital Marketing",
    icon: "devicon-google-plain colored text-5xl",
    description: "Comprehensive digital marketing solutions to boost your online presence and drive business growth.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Campaigns",
      "Analytics & Reporting"
    ]
  },
  {
    title: "Desktop Applications",
    icon: "devicon-electron-original colored text-5xl",
    description: "Building powerful desktop applications for Windows, macOS, and Linux platforms.",
    features: [
      "Cross-platform Development",
      "Native Applications",
      "Electron Applications",
      "System Integration",
      "Database Integration",
      "Automated Updates"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "devicon-tensorflow-original colored text-5xl",
    description: "Implementing intelligent solutions that leverage the power of AI and ML to automate and optimize business processes.",
    features: [
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Recommendation Systems",
      "Automated Decision Making",
      "AI Model Training & Deployment"
    ]
  },
  {
    title: "Mobile Development",
    icon: "devicon-flutter-plain colored text-5xl",
    description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "React Native Applications",
      "Flutter Development",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Mobile Backend Development"
    ]
  },
  {
    title: "Cloud Services",
    icon: "devicon-amazonwebservices-original colored text-5xl",
    description: "Providing comprehensive cloud solutions for scalable and reliable infrastructure management.",
    features: [
      "Cloud Architecture Design",
      "AWS & Azure Solutions",
      "Serverless Applications",
      "Container Orchestration",
      "Cloud Security",
      "DevOps Implementation"
    ]
  },
  {
    title: "Blockchain Development",
    icon: "devicon-ethereum-plain colored text-5xl",
    description: "Building secure and decentralized applications using blockchain technology.",
    features: [
      "Smart Contract Development",
      "DeFi Applications",
      "NFT Platforms",
      "Blockchain Integration",
      "Cryptocurrency Solutions",
      "Web3 Development"
    ]
  },
  {
    title: "IoT Solutions",
    icon: "devicon-raspberrypi-linee colored text-5xl",
    description: "Connecting devices and systems to create intelligent and automated environments.",
    features: [
      "IoT Architecture Design",
      "Sensor Integration",
      "Real-time Monitoring",
      "Edge Computing",
      "IoT Security",
      "Data Analytics"
    ]
  }
]

const techCategories = [
  {
    name: "Frontend Development",
    technologies: [
      {
        name: "Next.js 14",
        logo: "devicon-nextjs-original colored",
        description: "The React Framework for Production"
      },
      {
        name: "React 18",
        logo: "devicon-react-original colored",
        description: "A JavaScript library for building user interfaces"
      },
      {
        name: "WordPress",
        logo: "devicon-wordpress-plain colored",
        description: "World's most popular CMS platform"
      },
      {
        name: "Shopify",
        logo: "devicon-shopify-plain colored",
        description: "Leading e-commerce platform"
      }
    ]
  },
  {
    name: "Backend Development",
    technologies: [
      {
        name: "Node.js",
        logo: "devicon-nodejs-plain colored",
        description: "JavaScript runtime built on Chrome's V8 engine"
      },
      {
        name: "Python",
        logo: "devicon-python-plain colored",
        description: "Programming language for AI and web development"
      },
      {
        name: "Go",
        logo: "devicon-go-original-wordmark colored",
        description: "Open source programming language by Google"
      },
      {
        name: "Rust",
        logo: "devicon-rust-plain colored",
        description: "Systems programming language for performance"
      }
    ]
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      {
        name: "Docker",
        logo: "devicon-docker-plain colored",
        description: "Container platform for modern applications"
      },
      {
        name: "Kubernetes",
        logo: "devicon-kubernetes-plain colored",
        description: "Container orchestration platform"
      },
      {
        name: "AWS",
        logo: "devicon-amazonwebservices-original colored",
        description: "Leading cloud computing platform"
      },
      {
        name: "Azure",
        logo: "devicon-azure-plain colored",
        description: "Microsoft's cloud computing service"
      }
    ]
  },
  {
    name: "AI & Machine Learning",
    technologies: [
      {
        name: "TensorFlow",
        logo: "devicon-tensorflow-original colored",
        description: "Open source machine learning framework"
      },
      {
        name: "PyTorch",
        logo: "devicon-pytorch-original colored",
        description: "Machine learning library for Python"
      },
      {
        name: "Jupyter",
        logo: "devicon-jupyter-plain colored",
        description: "Interactive computing and data science"
      },
      {
        name: "Pandas",
        logo: "devicon-pandas-original colored",
        description: "Data manipulation and analysis"
      }
    ]
  },
  {
    name: "Database & Storage",
    technologies: [
      {
        name: "MongoDB",
        logo: "devicon-mongodb-plain colored",
        description: "NoSQL database for modern applications"
      },
      {
        name: "PostgreSQL",
        logo: "devicon-postgresql-plain colored",
        description: "Advanced open source database"
      },
      {
        name: "Redis",
        logo: "devicon-redis-plain colored",
        description: "In-memory data structure store"
      },
      {
        name: "MySQL",
        logo: "devicon-mysql-plain colored",
        description: "Popular open-source database"
      }
    ]
  },
  {
    name: "Tools & Testing",
    technologies: [
      {
        name: "Jest",
        logo: "devicon-jest-plain colored",
        description: "JavaScript testing framework"
      },
      {
        name: "Git",
        logo: "devicon-git-plain colored",
        description: "Version control system"
      },
      {
        name: "GitHub",
        logo: "devicon-github-original",
        description: "Development platform and hosting"
      },
      {
        name: "VS Code",
        logo: "devicon-vscode-plain colored",
        description: "Popular code editor"
      }
    ]
  }
]

const process = [
  {
    title: "Discovery",
    description: "Understanding your business needs, goals, and technical requirements through in-depth consultation."
  },
  {
    title: "Planning",
    description: "Creating detailed project roadmap, architecture design, and technology stack selection."
  },
  {
    title: "Development",
    description: "Implementing solutions using agile methodology with regular updates and feedback loops."
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance to ensure reliability, security, and optimal performance."
  }
]

export default Services 