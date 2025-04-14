import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses, achievements, mentorshipProgram } from '../data/training';

const Training: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Training Programs - NetBots</title>
        <meta name="description" content="Enhance your skills with NetBots' professional training programs. Learn AI Development, Cloud Architecture, and Full Stack Development from industry experts." />
        <meta name="keywords" content="AI training, cloud computing, full stack development, professional training, tech courses, software development training" />
        <link rel="canonical" href="https://netbots.com/training" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative py-20 px-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 mix-blend-multiply" />
          <div className="container mx-auto relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6 text-center">Professional Training Programs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
              Enhance your skills with our industry-leading training programs. Learn from experts and get hands-on experience with cutting-edge technologies.
            </p>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <section className="py-12 px-4 bg-gray-900/50" aria-labelledby="achievements-title">
          <div className="container mx-auto">
            <h2 id="achievements-title" className="sr-only">Our Achievements</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* <i className={`${achievement.icon} text-4xl text-primary mb-4`} aria-hidden="true"></i> */}
                  <h3 className="text-3xl font-bold text-white mb-2">{achievement.count}</h3>
                  <p className="text-gray-300">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Offerings */}
        <section className="py-16 px-4" aria-labelledby="courses-title">
          <div className="container mx-auto">
            <h2 id="courses-title" className="text-3xl font-bold text-white text-center mb-12">Our Courses</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <i className={`${course.icon} text-4xl mb-4 text-primary`} aria-hidden="true"></i>
                  <h3 className="text-2xl font-bold text-white mb-3">{course.name}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary">{course.duration}</span>
                    <span className="text-secondary">{course.level}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Topics:</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <i className="devicon-checkmark-plain text-accent mr-2" aria-hidden="true"></i>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/contact?course=${encodeURIComponent(course.name)}`}
                    className="w-full px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors inline-block text-center text-white"
                    aria-label={`Enroll in ${course.name}`}
                  >
                    Enroll Now
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Program */}
        <section className="py-16 px-4 bg-gray-900" aria-labelledby="mentorship-title">
          <div className="container mx-auto">
            <h2 id="mentorship-title" className="text-3xl font-bold text-white text-center mb-8">Mentorship Program</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8"
            >
              <p className="text-gray-300 mb-6">{mentorshipProgram.description}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {mentorshipProgram.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <i className="devicon-checkmark-plain text-accent mr-2" aria-hidden="true"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Program Structure</h3>
                  <ul className="space-y-2">
                    {mentorshipProgram.structure.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <i className="devicon-checkmark-plain text-accent mr-2" aria-hidden="true"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-white mb-4">Program Duration: {mentorshipProgram.duration}</p>
                <Link
                  to="/contact?program=mentorship"
                  className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors text-white"
                  aria-label="Apply for the mentorship program"
                >
                  Apply for Mentorship
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4" aria-labelledby="faq-title">
          <div className="container mx-auto max-w-4xl">
            <h2 id="faq-title" className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join our training programs and gain the skills needed to succeed in today's tech industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <a
                href="#courses-title"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View All Courses
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const faqs = [
  {
    question: "What prerequisites do I need for the courses?",
    answer: "Most of our beginner courses don't require prior experience. For intermediate and advanced courses, basic programming knowledge and relevant technology experience are recommended."
  },
  {
    question: "Are the courses available online?",
    answer: "Yes, all our courses are available in both online and hybrid formats, allowing you to learn at your own pace while still getting hands-on experience."
  },
  {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we offer career guidance and job placement assistance through our network of partner companies for students who complete our courses successfully."
  },
  {
    question: "What kind of support is available during the course?",
    answer: "You'll have access to instructor support, peer discussion forums, project guidance, and 24/7 technical assistance throughout your learning journey."
  }
];

export default Training; 