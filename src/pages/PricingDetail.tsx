import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaPaintBrush, FaCode, FaBullhorn, FaGem } from 'react-icons/fa';

// Copy the pricingData structure from Pricing.tsx (keep only the data, not the functions)
const calcUSD = (pkr: number) => Math.ceil(pkr / 288) * 4;
const pricingData = {
  design: [
    {
      name: 'Starter',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 3000,
      usd: calcUSD(3000),
      description: 'Basic logo and social media kit for startups.',
      inclusions: [
        '2 Logo Concepts + Revisions',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Social Media Kit (Profile & Cover Designs)',
        'PNG/JPG Files',
        'Social Media Account Creation (FB, IG, LinkedIn, Twitter)',
        'Post Approval Before Publishing',
        'Post Scheduling & Publishing',
        'Hashtag Research & Optimization',
        'Social Media Performance Reporting',
        '1 GIF/Month',
        '6 Posts/Month (Graphics + Content)',
        '1 Month Free Support',
      ],
      exclusions: ['Source/Vector Files', 'Brand Guidelines', 'Unlimited Revisions', 'Custom Illustrations'],
      popular: false,
    },
    {
      name: 'Pro',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 18000,
      usd: calcUSD(18000),
      description: 'Full branding suite for growing businesses.',
      inclusions: [
        '4 Logo Concepts + Revisions',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Brand Guidelines',
        'Branded Social Media Post Templates (4 Designs)',
        'Social Media Account Creation',
        'Profile & Cover Photo Design',
        'Social Media Branding',
        '1 Month Social Media Posts',
        '1 Month GIF Creation',
        'Monthly Content Calendar',
        'Hashtag Research & Optimization',
        'Monthly Performance Report',
        'Google My Business Setup',
        'Business Verification & Optimization',
        'Location Pinning & Service Listing',
        'Bing Business & Apple Maps Listing',
        'Google Analytics & Search Console Setup',
        '5-Page Dynamic Website (Home, About, Services, Blog, Contact)',
        'Blog Integration',
        'Contact Form & Google Map',
        'SEO-Friendly & Mobile Responsive',
        '2 Months Free Support',
      ],
      exclusions: ['Unlimited Revisions', 'Custom Illustrations', '3D Logo'],
      popular: true,
    },
    {
      name: 'Elite',
      icon: <FaPaintBrush className="w-8 h-8 text-primary" />, 
      pkr: 30000,
      usd: calcUSD(30000),
      description: 'Unlimited design requests and revisions.',
      inclusions: [
        '5 Logo Concepts + Unlimited Revisions',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Detailed Brand Book',
        'Custom Social Media Templates',
        'Custom Presentation Template',
        'Social Media Account Creation',
        'Profile & Cover Photo Design',
        'Social Media Branding',
        '3 Months Social Media Posts',
        '3 Months GIF Creation',
        'Monthly Content Calendar',
        'Hashtag Research & Optimization',
        'Monthly Performance Report',
        'Google My Business Advanced Optimization',
        'Business Verification & Optimization',
        'Location Pinning & Service Listing',
        'Bing Business & Apple Maps Listing',
        'Google Analytics & Search Console Setup',
        'Custom SPA Website (Fully Custom with CMS)',
        'Blog Integration',
        'Contact Form & Google Map',
        'SEO-Friendly, Speed Optimized, Mobile Responsive',
        'Live Chat & WhatsApp Integration',
        'Custom Admin Panel',
        'Company Name Search & Reservation',
        'SECP Registration',
        'NTN Registration Assistance',
        'Business Bank Account Consultation',
        '3 Months Free Support + Maintenance',
      ],
      exclusions: ['Physical Print', 'On-site Consultation'],
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
      inclusions: [
        '3-5 Page Static Website',
        'HTML, CSS, JavaScript',
        'Home, About, Services, Contact',
        'Mobile Responsive',
        'Basic On-Page SEO',
        'Security Features (SSL, Captcha, Anti-Spam)',
        'Google Analytics Setup',
        'Contact Form / Inquiry Form',
        '10-15 Days Delivery',
      ],
      exclusions: ['CMS', 'E-commerce', 'Custom Integrations', 'Ongoing Maintenance'],
      popular: false,
    },
    {
      name: 'Web Pro',
      icon: <FaCode className="w-8 h-8 text-primary" />, 
      pkr: 100000,
      usd: calcUSD(100000),
      description: 'Dynamic CMS or e-commerce site.',
      inclusions: [
        '5-10 Page Dynamic Website',
        'WordPress, PHP, Laravel, React',
        'Home, About, Services, Blog, Portfolio, Contact',
        'Mobile Responsive',
        'Performance Optimization',
        'Custom UI/UX Design',
        'Admin Panel for Content Management',
        'Basic On-Page SEO',
        'Blog Integration',
        'Security Features (SSL, Captcha, Anti-Spam)',
        'Google Analytics Setup',
        'Contact Form / Inquiry Form',
        'Email Subscription Setup',
        'Speed Optimization',
        'Image & Content Optimization',
        'Google My Business Setup',
        'Domain & Hosting (1st Year Free)',
        'Backup & Maintenance (1st Month Free)',
        '20-60 Days Delivery',
      ],
      exclusions: ['Mobile App', 'Custom API Integrations', '3rd Party Fees'],
      popular: true,
    },
    {
      name: 'App Suite',
      icon: <FaCode className="w-8 h-8 text-primary" />, 
      pkr: 200000,
      usd: calcUSD(200000),
      description: 'Web + Mobile + Desktop apps.',
      inclusions: [
        'Custom Web Application / E-commerce',
        'Custom React, Next.js, MERN, Laravel, Django',
        'Unlimited Pages, Custom Features',
        'Mobile Responsive',
        'Performance Optimization',
        'Custom UI/UX Design',
        'Custom CMS / Headless',
        'Basic On-Page SEO',
        'Blog Integration',
        'E-Commerce Integration',
        'Security Features (SSL, Captcha, Anti-Spam)',
        'Google Analytics Setup',
        'Contact Form / Inquiry Form',
        'Email Subscription Setup',
        'Speed Optimization',
        'Image & Content Optimization',
        'Google My Business Setup',
        'Domain & Hosting (1st Year Free)',
        'Backup & Maintenance (1st Month Free)',
        '3-8 Month Delivery (Depends on Features)',
      ],
      exclusions: ['On-site Deployment', '3rd Party Licenses', 'Ongoing Maintenance'],
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
      inclusions: [
        'Social Media Account Management',
        'Social Media Account Creation (FB, IG, LinkedIn, Twitter)',
        'Social Media Audit & Optimization',
        'Social Media Strategy Development',
        'Monthly Content Calendar',
        '6 Posts/Month (Graphics + Content)',
        '1 GIF/Month',
        'Post Approval Before Publishing',
        'Post Scheduling & Publishing',
        'Hashtag Research & Optimization',
        'Social Media Performance Reporting',
        'Ad Performance & Spending Reports',
        'Free Support Duration: 1 Month',
      ],
      exclusions: ['Paid Ads Budget', 'Video Production', 'Influencer Marketing'],
      popular: false,
    },
    {
      name: 'Growth',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />, 
      pkr: 70000,
      usd: calcUSD(70000),
      description: 'Professional digital presence and ads.',
      inclusions: [
        'Social Media Account Management',
        'Social Media Account Creation (FB, IG, LinkedIn, Twitter)',
        'Social Media Audit & Optimization',
        'Social Media Strategy Development',
        'Monthly Content Calendar',
        '15 Posts/Month (Graphics + Content)',
        '2 GIFs/Month',
        'Post Approval Before Publishing',
        'Post Scheduling & Publishing',
        'Hashtag Research & Optimization',
        'Community Engagement (Replying to Comments & Messages)',
        'Social Media Performance Reporting',
        'Ad Performance & Spending Reports',
        'Google My Business Optimization',
        'YouTube Channel Management',
        'LinkedIn Company Page Management',
        'Social Media Competitor Analysis',
        'Monthly Strategy Consultation',
        'Free Support Duration: 3 Months',
      ],
      exclusions: ['Paid Ads Budget', 'Video Production', 'Offline Marketing'],
      popular: true,
    },
    {
      name: 'Brand Domination',
      icon: <FaBullhorn className="w-8 h-8 text-primary" />, 
      pkr: 150000,
      usd: calcUSD(150000),
      description: 'Full social media and ad control.',
      inclusions: [
        'Social Media Account Management',
        'Social Media Account Creation (FB, IG, LinkedIn, Twitter)',
        'Social Media Audit & Optimization',
        'Social Media Strategy Development',
        'Monthly Content Calendar',
        '30 Posts/Month (Graphics + Content)',
        '3 GIFs/Month',
        'Post Approval Before Publishing',
        'Post Scheduling & Publishing',
        'Hashtag Research & Optimization',
        'Community Engagement (Replying to Comments & Messages)',
        'Social Media Performance Reporting',
        'Ad Performance & Spending Reports',
        'Google My Business Optimization',
        'YouTube Channel Management',
        'LinkedIn Company Page Management',
        'Social Media Crisis Management',
        'Social Media Competitor Analysis',
        'Monthly Strategy Consultation',
        'Free Support Duration: 3 Months + Strategy Review',
      ],
      exclusions: ['Paid Ads Budget', 'Offline Events', 'Influencer Marketing'],
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
      inclusions: [
        'Logo Design (2 Concepts + Revisions)',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Social Media Account Creation',
        'Profile & Cover Photo Design',
        'Social Media Branding',
        'Google My Business Setup',
        'Business Verification & Optimization',
        'Location Pinning & Service Listing',
        'Contact Form & Google Map',
        'SEO-Friendly & Mobile Responsive',
        'Free Support Duration: 1 Month',
      ],
      exclusions: ['Website', 'Social Media Management', 'Company Registration'],
      popular: false,
    },
    {
      name: 'Pro Brand',
      icon: <FaGem className="w-8 h-8 text-primary" />, 
      pkr: 150000,
      usd: calcUSD(150000),
      description: 'Branding + website + social media.',
      inclusions: [
        'Logo Design (4 Concepts + Revisions)',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Brand Guidelines',
        'Branded Social Media Post Templates (4 Designs)',
        'Social Media Account Creation',
        'Profile & Cover Photo Design',
        'Social Media Branding',
        '1 Month Social Media Posts',
        '1 Month GIF Creation',
        'Monthly Content Calendar',
        'Hashtag Research & Optimization',
        'Monthly Performance Report',
        'Google My Business Setup',
        'Business Verification & Optimization',
        'Location Pinning & Service Listing',
        'Bing Business & Apple Maps Listing',
        'Google Analytics & Search Console Setup',
        '5-Page Dynamic Website (Home, About, Services, Blog, Contact)',
        'Blog Integration',
        'Contact Form & Google Map',
        'SEO-Friendly & Mobile Responsive',
        '2 Months Free Support',
      ],
      exclusions: ['Company Registration', 'Ongoing Social Media Management'],
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: <FaGem className="w-8 h-8 text-primary" />, 
      pkr: 300000,
      usd: calcUSD(300000),
      description: 'Complete business setup and registration.',
      inclusions: [
        'Logo Design (5 Concepts + Unlimited Revisions)',
        'Business Card Design',
        'Letterhead & Envelope Design',
        'Stamp Design',
        'Email Signature',
        'Detailed Brand Book',
        'Custom Social Media Templates',
        'Custom Presentation Template',
        'Social Media Account Creation',
        'Profile & Cover Photo Design',
        'Social Media Branding',
        '3 Months Social Media Posts',
        '3 Months GIF Creation',
        'Monthly Content Calendar',
        'Hashtag Research & Optimization',
        'Monthly Performance Report',
        'Google My Business Advanced Optimization',
        'Business Verification & Optimization',
        'Location Pinning & Service Listing',
        'Bing Business & Apple Maps Listing',
        'Google Analytics & Search Console Setup',
        'Custom SPA Website (Fully Custom with CMS)',
        'Blog Integration',
        'Contact Form & Google Map',
        'SEO-Friendly, Speed Optimized, Mobile Responsive',
        'Live Chat & WhatsApp Integration',
        'Custom Admin Panel',
        'Company Name Search & Reservation',
        'SECP Registration',
        'NTN Registration Assistance',
        'Business Bank Account Consultation',
        '3 Months Free Support + Maintenance',
      ],
      exclusions: ['Physical Office Setup', 'Legal Disputes', 'Ongoing Marketing'],
      popular: false,
    },
  ],
};

const categoryDescriptions: Record<string, string> = {
  branding: "Branding plans focus on your company's identity, visuals, and reputation.",
  marketing: "Marketing plans focus on promoting your business and reaching your audience.",
  design: "Design plans focus on creative assets and visual communication.",
  development: "Development plans focus on building and maintaining your digital products.",
};

const categoryColors: Record<string, string> = {
  branding: "bg-fuchsia-600 text-white",
  marketing: "bg-yellow-500 text-gray-900",
  design: "bg-blue-500 text-white",
  development: "bg-green-500 text-white",
};

const PricingDetail: React.FC = () => {
  const { category = '', plan = '' } = useParams<{ category?: string; plan?: string }>();
  const planList = pricingData[category as keyof typeof pricingData] || [];
  const planObj = planList.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === plan
  );

  if (!planObj) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <h1 className="text-3xl text-white font-bold mb-4">Plan Not Found</h1>
          <Link to="/pricing" className="text-primary underline">Back to Pricing</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
        <Link to="/pricing" className="flex items-center text-primary mb-6 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Pricing
        </Link>
        <div className="flex items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold mr-4 ${(categoryColors[category] || 'bg-primary text-white')}`}> 
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'}
          </span>
          <span className="text-gray-300">{categoryDescriptions[category] || ''}</span>
        </div>
        <div className="flex items-center mb-6">
          {planObj.icon}
          <h1 className="ml-4 text-3xl md:text-4xl font-bold text-white">{planObj.name}</h1>
        </div>
        <p className="text-gray-300 mb-6 text-lg">{planObj.description}</p>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-primary">Starting from {planObj.usd.toLocaleString()} <span className="text-base font-medium text-gray-400">USD</span></span>
            <span className="text-xs text-gray-400">(International clients)</span>
          </div>
          <div className="flex-1 bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-gray-300">Starting from {planObj.pkr.toLocaleString()} PKR</span>
            <span className="text-xs text-gray-500">(Pakistani clients)</span>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What's Included</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {planObj.inclusions.map((inc, idx) => (
              <li key={idx} className="flex items-start"><span className="mr-2 text-primary">•</span>{inc}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What's Not Included</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {planObj.exclusions.map((exc, idx) => (
              <li key={idx} className="flex items-start"><span className="mr-2 text-red-500">•</span>{exc}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href={`mailto:info@netbot.io?subject=Interested in ${encodeURIComponent(planObj.name)} Plan`}
            className="px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 bg-primary text-white text-lg shadow hover:bg-primary-dark"
          >
            Contact to Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingDetail; 