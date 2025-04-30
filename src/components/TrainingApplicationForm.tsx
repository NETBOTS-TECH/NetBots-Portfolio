import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaMapMarkerAlt, FaInfoCircle, FaGraduationCap, FaCode, FaCheckCircle, FaPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';
import axios from 'axios';

interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

interface Course {
  name: string;
  institution: string;
  year: string;
}

interface Certification {
  name: string;
  issuingOrganization: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface FormData {
  trainingProgram: string;
  personalInfo: {
    name: string;
    fatherName: string;
    address: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    portfolioUrl: string;
  };
  experience: Experience[];
  education: Education;
  courses: Course[];
  certifications: Certification[];
  programmingSkills: string[];
  softSkills: string[];
}

interface SkillCategory {
  label: string;
  skills: string[];
}

interface SkillCategories {
  [key: string]: SkillCategory;
}

const trainingPrograms = [
  'Vibe Coding - Full Stack Development',
  'AI & Machine Learning',
  'Cloud Computing & DevOps',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Blockchain Development',
  'Cybersecurity',
  'Data Science & Analytics',
  'Game Development'
];

const programmingSkillsOptions: SkillCategories = {
  frontend: {
    label: 'Frontend Development',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript',
      'React.js', 'Next.js', 'Vue.js', 'Angular',
      'Tailwind CSS', 'SASS/SCSS', 'Bootstrap',
      'Redux', 'GraphQL Client', 'WebPack', 'Vite'
    ]
  },
  backend: {
    label: 'Backend Development',
    skills: [
      'Node.js', 'Express.js', 'Python', 'Django',
      'Java', 'Spring Boot', 'PHP', 'Laravel',
      'Ruby on Rails', 'ASP.NET Core', 'GraphQL',
      'REST API', 'WebSocket', 'Microservices'
    ]
  },
  database: {
    label: 'Database Technologies',
    skills: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis',
      'Firebase', 'Elasticsearch', 'DynamoDB',
      'Oracle', 'MS SQL Server', 'Cassandra'
    ]
  },
  mobile: {
    label: 'Mobile Development',
    skills: [
      'React Native', 'Flutter', 'iOS (Swift)',
      'Android (Kotlin)', 'Xamarin', 'Ionic',
      'Mobile App Testing', 'App Store Optimization'
    ]
  },
  devops: {
    label: 'DevOps & Cloud',
    skills: [
      'Docker', 'Kubernetes', 'AWS', 'Azure',
      'Google Cloud', 'CI/CD', 'Jenkins', 'Git',
      'Linux', 'Nginx', 'Terraform', 'Ansible'
    ]
  },
  testing: {
    label: 'Testing & QA',
    skills: [
      'Jest', 'React Testing Library', 'Cypress',
      'Selenium', 'JUnit', 'TestNG', 'Postman',
      'Load Testing', 'Security Testing'
    ]
  },
  ai_ml: {
    label: 'AI & Machine Learning',
    skills: [
      'TensorFlow', 'PyTorch', 'Scikit-learn',
      'NLP', 'Computer Vision', 'Deep Learning',
      'Data Analysis', 'Neural Networks'
    ]
  },
  other: {
    label: 'Other Technologies',
    skills: [
      'Blockchain', 'WebGL', 'Unity', 'AR/VR',
      'IoT', 'Embedded Systems', 'Web3',
      'Cybersecurity', 'UI/UX Design'
    ]
  }
};

const softSkillsOptions = [
  'Communication', 'Team Work', 'Problem Solving', 'Time Management',
  'Leadership', 'Adaptability', 'Critical Thinking', 'Creativity',
  'Emotional Intelligence', 'Conflict Resolution', 'Project Management',
  'Public Speaking', 'Decision Making', 'Stress Management'
];

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
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
            <FaCheckCircle className="text-green-500 text-6xl mb-6" />
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Application Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Thank you for submitting your application.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team will review your information and contact you if you meet our criteria.
            </p>
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

const TrainingApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    trainingProgram: '',
    personalInfo: {
      name: '',
      fatherName: '',
      address: '',
      phone: '',
      email: '',
      linkedinUrl: '',
      githubUrl: '',
      portfolioUrl: '',
    },
    experience: [{ title: '', company: '', duration: '', description: '' }],
    education: {
      degree: '',
      institution: '',
      year: '',
      grade: '',
    },
    courses: [{ name: '', institution: '', year: '' }],
    certifications: [{ name: '', issuingOrganization: '', year: '' }],
    programmingSkills: [],
    softSkills: [],
  });

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }));
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        [name]: value
      }
    }));
  };

  const handleSkillChange = (skillType: 'programmingSkills' | 'softSkills', skill: string) => {
    setFormData(prev => {
      const skills = prev[skillType];
      const updatedSkills = skills.includes(skill)
        ? skills.filter(s => s !== skill)
        : [...skills, skill];
      return { ...prev, [skillType]: updatedSkills };
    });
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newExperience = [...prev.experience];
      newExperience[index] = { ...newExperience[index], [name]: value };
      return { ...prev, experience: newExperience };
    });
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    // Only validate required fields
    if (!formData.trainingProgram) errors.push('Please select a training program');
    if (!formData.personalInfo.name) errors.push('Name is required');
    if (!formData.personalInfo.email) errors.push('Email is required');
    if (!formData.personalInfo.phone) errors.push('Phone number is required');
    
    // Only validate format of required fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.personalInfo.email && !emailRegex.test(formData.personalInfo.email)) {
      errors.push('Please enter a valid email address');
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (formData.personalInfo.phone && !phoneRegex.test(formData.personalInfo.phone)) {
      errors.push('Please enter a valid phone number');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error, {
        duration: 4000,
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const flattenedData = {
        submission_date: new Date().toISOString(),
        application_status: 'Pending',
        training_program: formData.trainingProgram,
        full_name: formData.personalInfo.name,
        father_name: formData.personalInfo.fatherName || '',
        address: formData.personalInfo.address,
        phone: formData.personalInfo.phone,
        email: formData.personalInfo.email,
        linkedin_url: formData.personalInfo.linkedinUrl || '',
        github_url: formData.personalInfo.githubUrl || '',
        portfolio_url: formData.personalInfo.portfolioUrl || '',
        degree: formData.education.degree,
        institution: formData.education.institution,
        graduation_year: formData.education.year,
        gpa: formData.education.grade,
        
        // Experience 1
        experience_1_title: formData.experience[0]?.title || '',
        experience_1_company: formData.experience[0]?.company || '',
        experience_1_duration: formData.experience[0]?.duration || '',
        experience_1_description: formData.experience[0]?.description || '',
        
        // Experience 2
        experience_2_title: formData.experience[1]?.title || '',
        experience_2_company: formData.experience[1]?.company || '',
        experience_2_duration: formData.experience[1]?.duration || '',
        experience_2_description: formData.experience[1]?.description || '',
        
        // Experience 3
        experience_3_title: formData.experience[2]?.title || '',
        experience_3_company: formData.experience[2]?.company || '',
        experience_3_duration: formData.experience[2]?.duration || '',
        experience_3_description: formData.experience[2]?.description || '',
        
        // Course 1
        course_1_name: formData.courses[0]?.name || '',
        course_1_institution: formData.courses[0]?.institution || '',
        course_1_year: formData.courses[0]?.year || '',
        
        // Course 2
        course_2_name: formData.courses[1]?.name || '',
        course_2_institution: formData.courses[1]?.institution || '',
        course_2_year: formData.courses[1]?.year || '',
        
        // Course 3
        course_3_name: formData.courses[2]?.name || '',
        course_3_institution: formData.courses[2]?.institution || '',
        course_3_year: formData.courses[2]?.year || '',
        
        // Certification 1
        certification_1_name: formData.certifications[0]?.name || '',
        certification_1_organization: formData.certifications[0]?.issuingOrganization || '',
        certification_1_year: formData.certifications[0]?.year || '',
        
        // Certification 2
        certification_2_name: formData.certifications[1]?.name || '',
        certification_2_organization: formData.certifications[1]?.issuingOrganization || '',
        certification_2_year: formData.certifications[1]?.year || '',
        
        // Certification 3
        certification_3_name: formData.certifications[2]?.name || '',
        certification_3_organization: formData.certifications[2]?.issuingOrganization || '',
        certification_3_year: formData.certifications[2]?.year || '',
        
        // Skills categorized by type
        frontend_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.frontend.skills).includes(skill))
          .join(', '),
        backend_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.backend.skills).includes(skill))
          .join(', '),
        database_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.database.skills).includes(skill))
          .join(', '),
        mobile_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.mobile.skills).includes(skill))
          .join(', '),
        devops_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.devops.skills).includes(skill))
          .join(', '),
        testing_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.testing.skills).includes(skill))
          .join(', '),
        ai_ml_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.ai_ml.skills).includes(skill))
          .join(', '),
        other_tech_skills: formData.programmingSkills
          .filter(skill => Object.values(programmingSkillsOptions.other.skills).includes(skill))
          .join(', '),
        
        // Soft Skills
        soft_skills: formData.softSkills.join(', ')
      };

      // Send data to SheetDB API
      await axios.post('https://sheetdb.io/api/v1/ggr6y7vowtjlz', {
        data: [flattenedData]
      });

      // Show success notification
      toast.success('Application submitted successfully!', {
        duration: 5000,
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      // Show follow-up message after a short delay
      setTimeout(() => {
        toast.success('We will review your information and contact you if you meet our criteria.', {
          duration: 4000,
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        });
      }, 1000);

      // Reset form
      setFormData({
        trainingProgram: '',
        personalInfo: {
          name: '',
          fatherName: '',
          address: '',
          phone: '',
          email: '',
          linkedinUrl: '',
          githubUrl: '',
          portfolioUrl: '',
        },
        experience: [{ title: '', company: '', duration: '', description: '' }],
        education: {
          degree: '',
          institution: '',
          year: '',
          grade: '',
        },
        courses: [{ name: '', institution: '', year: '' }],
        certifications: [{ name: '', issuingOrganization: '', year: '' }],
        programmingSkills: [],
        softSkills: [],
      });

    } catch (error) {
      console.error('Error submitting form:', error);
   
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Form Header */}
        <div className="px-6 py-8 sm:px-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Training Program Application</h2>
          <p className="mt-2 text-gray-400 text-center max-w-2xl mx-auto">
            Join our comprehensive training program and kickstart your career in technology
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 space-y-10" aria-label="Training Program Application Form">
          {/* Training Program Selection */}
          <section className="space-y-6" aria-labelledby="program-section">
            <div className="flex items-center gap-2 mb-6">
              <h3 id="program-section" className="text-xl font-semibold text-white">Select Training Program</h3>
              <span className="text-red-500" aria-label="Required">*</span>
              <FaInfoCircle className="text-gray-400" aria-label="Required field" />
            </div>
            <div className="w-full">
              <select
                name="trainingProgram"
                value={formData.trainingProgram}
                onChange={(e) => setFormData(prev => ({ ...prev, trainingProgram: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                aria-label="Select Training Program"
                aria-required="true"
              >
                <option value="">Select a program</option>
                {trainingPrograms.map((program) => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Personal Information */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              <FaInfoCircle className="text-gray-400" title="Fields marked with * are required" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaUser className="text-gray-400" />
                  <span>Full Name</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.personalInfo.name}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaUser className="text-gray-400" />
                  <span>Father's Name</span>
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.personalInfo.fatherName}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Optional: Enter your father's name"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <span>Address</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.personalInfo.address}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Enter your complete address"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaPhone className="text-gray-400" />
                  <span>Phone Number</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaEnvelope className="text-gray-400" />
                  <span>Email</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaLinkedin className="text-gray-400" />
                  <span>LinkedIn Profile</span>
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.personalInfo.linkedinUrl}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Optional: Your LinkedIn profile URL"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGithub className="text-gray-400" />
                  <span>GitHub Profile</span>
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="githubUrl"
                  value={formData.personalInfo.githubUrl}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Optional: Your GitHub profile URL"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGlobe className="text-gray-400" />
                  <span>Portfolio Website</span>
                  <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="portfolioUrl"
                  value={formData.personalInfo.portfolioUrl}
                  onChange={handlePersonalInfoChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  placeholder="Optional: Your portfolio website URL"
                />
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-white">Work Experience</h3>
                <span className="text-gray-400 text-sm">(Optional)</span>
              </div>
              {formData.experience.length < 3 && (
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    experience: [...prev.experience, { title: '', company: '', duration: '', description: '' }]
                  }))}
                  className="text-primary hover:text-primary-light transition-colors flex items-center gap-2"
                >
                  <span>Add Experience</span>
                  <FaPlus className="text-sm" />
                </button>
              )}
            </div>
            <div className="space-y-6">
              {formData.experience.map((exp, index) => (
                <div key={index} className="p-6 bg-gray-800/50 rounded-xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Job Title</label>
                      <input
                        type="text"
                        name="title"
                        value={exp.title}
                        onChange={(e) => handleExperienceChange(index, e)}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary py-2 px-3"
                        placeholder="Optional: e.g., Software Developer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(index, e)}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary py-2 px-3"
                        placeholder="Optional: Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Duration</label>
                      <input
                        type="text"
                        name="duration"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(index, e)}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary py-2 px-3"
                        placeholder="Optional: e.g., Jan 2020 - Present"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Description</label>
                      <textarea
                        name="description"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, e)}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary py-2 px-3"
                        rows={3}
                        placeholder="Optional: Describe your responsibilities and achievements"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <span className="text-red-500">*</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGraduationCap className="text-gray-400" />
                  <span>Degree/Certificate *</span>
                </label>
                <input
                  type="text"
                  name="degree"
                  required
                  value={formData.education.degree}
                  onChange={handleEducationChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGraduationCap className="text-gray-400" />
                  <span>Institution *</span>
                </label>
                <input
                  type="text"
                  name="institution"
                  required
                  value={formData.education.institution}
                  onChange={handleEducationChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGraduationCap className="text-gray-400" />
                  <span>Year *</span>
                </label>
                <input
                  type="text"
                  name="year"
                  required
                  value={formData.education.year}
                  onChange={handleEducationChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <FaGraduationCap className="text-gray-400" />
                  <span>Grade/CGPA *</span>
                </label>
                <input
                  type="text"
                  name="grade"
                  required
                  value={formData.education.grade}
                  onChange={handleEducationChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Skills Sections */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold text-white">Skills</h3>
            </div>
            <div className="space-y-8">
              {/* Programming Skills */}
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-white">Programming Skills</h4>
                <div className="space-y-6">
                  {Object.entries(programmingSkillsOptions).map(([category, { label, skills }]) => (
                    <div key={category} className="p-6 bg-gray-800/50 rounded-xl space-y-4">
                      <h5 className="text-md font-medium text-white">{label}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {skills.map((skill) => (
                          <label key={skill} className="flex items-center gap-2 p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.programmingSkills.includes(skill)}
                              onChange={() => handleSkillChange('programmingSkills', skill)}
                              className="rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-gray-300">{skill}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white">Soft Skills</h4>
                <div className="p-6 bg-gray-800/50 rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {softSkillsOptions.map((skill) => (
                      <label key={skill} className="flex items-center gap-2 p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.softSkills.includes(skill)}
                          onChange={() => handleSkillChange('softSkills', skill)}
                          className="rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-300">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className={`
                w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent 
                text-white font-semibold rounded-xl transition-all
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 transform hover:-translate-y-1'}
                flex items-center justify-center gap-3
              `}
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <FaCode className="text-lg" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal 
            isOpen={true} 
            onClose={() => setShowSuccessModal(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingApplicationForm; 