import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa'

interface JobOpening {
  id: number
  title: string
  type: string
  experience: string
  location: string
  description: string
  responsibilities: string[]
  requirements: string[]
  skills: string[]
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    type: 'Full-time',
    experience: '3-5 years',
    location: 'Skardu/Remote',
    description: "Join our dynamic team as a Senior Full Stack Developer and help build innovative web applications. You'll work on challenging projects using cutting-edge technologies.",
    responsibilities: [
      "Design and implement scalable web applications",
      "Write clean, maintainable, and efficient code",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Strong proficiency in JavaScript/TypeScript",
      "Experience with React and Node.js",
      "Knowledge of database systems and API design",
      "Excellent problem-solving skills"
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker']
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    type: 'Full-time',
    experience: '2-4 years',
    location: 'Skardu/Remote',
    description: "We're looking for a talented UI/UX Designer to create beautiful and intuitive user interfaces. You'll work closely with our development team to bring designs to life.",
    responsibilities: [
      "Create user-centered designs and wireframes",
      "Conduct user research and usability testing",
      "Design responsive web interfaces",
      "Create and maintain design systems",
      "Collaborate with developers on implementation"
    ],
    requirements: [
      "Bachelor's degree in Design or related field",
      "Strong portfolio demonstrating UI/UX skills",
      "Proficiency in design tools like Figma",
      "Understanding of user-centered design",
      "Excellent communication skills"
    ],
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'UI Animation']
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    experience: '2-3 years',
    location: 'Skardu/Remote',
    description: "Drive our digital marketing initiatives as a Digital Marketing Specialist. You'll be responsible for increasing our online presence and generating quality leads.",
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage social media presence and content",
      "Analyze marketing metrics and create reports",
      "Optimize campaigns for better performance",
      "Create engaging content for various platforms"
    ],
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "Experience with digital marketing tools",
      "Strong analytical and communication skills",
      "Knowledge of SEO and content marketing",
      "Data-driven decision making ability"
    ],
    skills: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Google Analytics', 'Email Marketing', 'PPC']
  },
  {
    id: 4,
    title: 'Lead Generation Expert',
    type: 'Full-time',
    experience: '2-4 years',
    location: 'Skardu/Remote',
    description: "Join us as a Lead Generation Expert to identify and cultivate potential business opportunities. You'll play a crucial role in expanding our client base and driving business growth.",
    responsibilities: [
      "Develop and implement lead generation strategies",
      "Qualify and nurture potential leads",
      "Conduct market research and competitor analysis",
      "Create compelling lead magnets and content",
      "Manage and optimize lead generation campaigns"
    ],
    requirements: [
      "Bachelor's degree in Marketing or Business",
      "Proven track record in lead generation",
      "Experience with CRM systems",
      "Strong analytical and research skills",
      "Excellent communication abilities"
    ],
    skills: ['Lead Generation', 'CRM', 'Market Research', 'Campaign Management', 'Sales Funnels', 'Email Marketing']
  },
  {
    id: 5,
    title: 'Business Development Officer',
    type: 'Full-time',
    experience: '3-5 years',
    location: 'Skardu/Remote',
    description: "We're seeking a dynamic Business Development Officer to drive growth and expand our market presence. You'll be responsible for identifying opportunities and building strategic partnerships.",
    responsibilities: [
      "Identify and pursue business opportunities",
      "Develop and maintain client relationships",
      "Create and present business proposals",
      "Negotiate contracts and partnerships",
      "Analyze market trends and competition"
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "Proven business development experience",
      "Strong networking abilities",
      "Excellence in presentation and negotiation",
      "Strategic thinking and planning skills"
    ],
    skills: ['Business Development', 'Strategic Planning', 'Negotiation', 'Client Relations', 'Market Analysis', 'Partnership Building']
  },
  {
    id: 6,
    title: 'Sales Expert',
    type: 'Full-time',
    experience: '3-5 years',
    location: 'Skardu/Remote',
    description: "Join our sales team as a Sales Expert to drive revenue growth and expand our client portfolio. You'll be responsible for closing deals and maintaining strong client relationships.",
    responsibilities: [
      "Generate and close sales opportunities",
      "Build and maintain client relationships",
      "Achieve monthly and quarterly sales targets",
      "Prepare sales presentations and proposals",
      "Collaborate with marketing and product teams"
    ],
    requirements: [
      "Bachelor's degree in Business or related field",
      "Proven track record in B2B sales",
      "Experience in technology sales",
      "Strong presentation and negotiation skills",
      "Results-driven mindset"
    ],
    skills: ['B2B Sales', 'Sales Strategy', 'Account Management', 'CRM', 'Negotiation', 'Solution Selling']
  }
]

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null)

  const handleApply = (job: JobOpening) => {
    const subject = encodeURIComponent(`Application for ${job.title} Position`)
    const body = encodeURIComponent(`Dear NetBots Team,\n\nI am writing to express my interest in the ${job.title} position.\n\nBest regards`)
    window.location.href = `mailto:career@netbots.io?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Helmet>
        <title>Careers at NetBots - Join Our Team</title>
        <meta
          name="description"
          content="Join NetBots and be part of an innovative team building cutting-edge software solutions. Explore our current job openings and apply today."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-dark to-dark-lighter">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Be part of an innovative team that's shaping the future of technology.
              We offer exciting opportunities for growth and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join NetBots?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'Work on cutting-edge projects using the latest technologies and best practices.'
              },
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and development opportunities to advance your career.'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and a supportive work environment.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-lighter rounded-lg overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <FaBriefcase className="mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-2" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <FaChevronDown
                      className={`transform transition-transform ${
                        selectedJob?.id === job.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {selectedJob?.id === job.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="border-t border-gray-800 p-6"
                  >
                    <p className="text-gray-400 mb-6">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-dark rounded-full text-sm text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleApply(job)}
                      className="btn-primary flex items-center justify-center w-full md:w-auto"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Apply via Email
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Career 