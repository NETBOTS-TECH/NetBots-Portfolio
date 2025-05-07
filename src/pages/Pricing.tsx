import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaCode, FaBullhorn, FaGem, FaStar, FaUserFriends, FaShieldAlt, FaRocket } from 'react-icons/fa';

const categories = [
  {
    key: 'design',
    label: 'Design',
    icon: <FaPaintBrush className="w-5 h-5 mr-2 text-primary" />,
  },
  {
    key: 'development',
    label: 'Development',
    icon: <FaCode className="w-5 h-5 mr-2 text-primary" />,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    icon: <FaBullhorn className="w-5 h-5 mr-2 text-primary" />,
  },
  {
    key: 'branding',
    label: 'Branding',
    icon: <FaGem className="w-5 h-5 mr-2 text-primary" />,
  },
];

// Helper for USD calculation (4x the base USD rate, where 288 PKR = $1)
const calcUSD = (pkr: number) => Math.ceil(pkr / 288) * 4;

// Pricing data structure for new design, now with inclusions and exclusions
const pricingData = {
  design: [
    {
      name: 'Starter',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 3000,
      usd: calcUSD(3000),
      description: 'Basic logo and social media kit for startups.',
      popular: false,
    },
    {
      name: 'Pro',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 18000,
      usd: calcUSD(18000),
      description: 'Full branding suite for growing businesses.',
      popular: true,
    },
    {
      name: 'Elite',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 30000,
      usd: calcUSD(30000),
      description: 'Unlimited design requests and revisions.',
      popular: false,
    },
  ],
  development: [
    {
      name: 'Website Basic',
      icon: <FaCode className="w-8 h-8 text-primary" />, 
      pkr: 50000,
      usd: calcUSD(50000),
      description: 'Static website for small businesses.',
      popular: false,
    },
    {
      name: 'Web Pro',
      icon: <FaCode className="w-8 h-8 text-primary" />, 
      pkr: 100000,
      usd: calcUSD(100000),
      description: 'Dynamic CMS or e-commerce site.',
      popular: true,
    },
    {
      name: 'App Suite',
      icon: <FaCode className="w-8 h-8 text-primary" />, 
      pkr: 200000,
      usd: calcUSD(200000),
      description: 'Web + Mobile + Desktop apps.',
      popular: false,
    },
  ],
  marketing: [
    {
      name: 'Social Starter',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />, 
      pkr: 30000,
      usd: calcUSD(30000),
      description: 'Social media management for new brands.',
      popular: false,
    },
    {
      name: 'Growth',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />, 
      pkr: 70000,
      usd: calcUSD(70000),
      description: 'Professional digital presence and ads.',
      popular: true,
    },
    {
      name: 'Brand Domination',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />, 
      pkr: 150000,
      usd: calcUSD(150000),
      description: 'Full social media and ad control.',
      popular: false,
    },
  ],
  branding: [
    {
      name: 'Basic Brand',
      icon: <FaGem className="w-8 h-8 text-primary" />, 
      pkr: 80000,
      usd: calcUSD(80000),
      description: 'Essential branding for new companies.',
      popular: false,
    },
    {
      name: 'Pro Brand',
      icon: <FaGem className="w-8 h-8 text-primary" />, 
      pkr: 150000,
      usd: calcUSD(150000),
      description: 'Branding + website + social media.',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: <FaGem className="w-8 h-8 text-primary" />, 
      pkr: 300000,
      usd: calcUSD(300000),
      description: 'Complete business setup and registration.',
      popular: false,
    },
  ],
};

const whyUs = [
  { icon: <FaRocket className="w-8 h-8 text-primary" />, title: 'Fast Delivery', desc: 'Quick turnaround for all projects.' },
  { icon: <FaUserFriends className="w-8 h-8 text-primary" />, title: 'Expert Team', desc: 'Skilled professionals in every field.' },
  { icon: <FaShieldAlt className="w-8 h-8 text-primary" />, title: 'Reliable Support', desc: 'Ongoing help and consultation.' },
  { icon: <FaStar className="w-8 h-8 text-primary" />, title: 'Proven Results', desc: 'Hundreds of happy clients.' },
];

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('design');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/30 to-gray-900/80">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Transparent, Flexible Pricing for Every Business
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-2xl text-gray-300 mb-8">
            Choose the plan that fits your needs. Local and international options available.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <nav className="flex flex-wrap justify-center gap-4 mt-8 mb-12 sticky top-16 z-10 bg-gradient-to-b from-gray-900/90 to-gray-800/90 py-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`flex items-center px-6 py-2 rounded-full font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm border border-gray-700
              ${selectedCategory === cat.key ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Pricing Cards */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(pricingData as Record<string, typeof pricingData["design"]>)[selectedCategory as keyof typeof pricingData].map((plan: typeof pricingData["design"][0], idx: number) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className={`relative bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col shadow-lg border border-gray-700 w-full ${plan.popular ? 'ring-2 ring-primary scale-105 z-10' : ''}`}
                >
                  {plan.popular && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">Most Popular</span>
                  )}
                  <div className="flex items-center mb-4 break-words">{plan.icon}<span className="ml-3 text-2xl font-bold text-white break-words">{plan.name}</span></div>
                  <p className="text-gray-300 mb-4 min-h-[48px] break-words">{plan.description}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary break-words">{plan.usd.toLocaleString()} <span className="text-base font-medium text-gray-400">USD</span></span>
                      <span className="text-xs text-gray-400">(International clients)</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-gray-400 break-words">{plan.pkr.toLocaleString()} PKR</span>
                      <span className="text-xs text-gray-500">(Pakistani clients)</span>
                    </div>
                  </div>
                  <div className="flex mt-auto">
                    <a
                      href={`mailto:info@netbot.io?subject=Interested in ${encodeURIComponent(plan.name)} Plan`}
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 w-full text-center block ${plan.popular ? 'bg-primary text-white' : 'bg-gray-700 text-primary hover:bg-primary hover:text-white'}`}
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Why Partner with NET BOTS?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyUs.map((item) => (
            <div key={item.title} className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow border border-gray-700">
              {item.icon}
              <h3 className="text-lg font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing; 