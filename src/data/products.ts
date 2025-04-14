interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  industries: string[];
  icon: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'e-pharma',
    name: 'E-Pharma',
    description: 'A comprehensive Point of Sale and Management System designed specifically for healthcare clinics and pharmacies. Streamline your operations, manage inventory, and enhance patient care with our integrated solution.',
    features: [
      'Electronic Health Records (EHR) Management',
      'Pharmacy Inventory Management',
      'Prescription Management System',
      'Patient Appointment Scheduling',
      'Automated Billing and Invoicing',
      'Drug Interaction Checker',
      'Insurance Claims Processing',
      'Real-time Analytics and Reports',
      'Multi-branch Support',
      'Mobile App for Doctors and Patients'
    ],
    benefits: [
      'Reduce Administrative Workload',
      'Minimize Medication Errors',
      'Improve Patient Care Quality',
      'Enhance Inventory Control',
      'Increase Operational Efficiency',
      'Better Financial Management'
    ],
    technologies: [
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker'
    ],
    industries: [
      'Healthcare',
      'Pharmacies',
      'Medical Clinics',
      'Hospitals'
    ],
    icon: 'devicon-react-original',
    image: '/products/e-pharma.jpg'
  },
  {
    id: 'hotel-sync',
    name: 'Hotel Sync',
    description: 'An all-in-one hotel management system that helps you manage bookings, staff, inventory, and guest services efficiently. Perfect for hotels of all sizes looking to digitize their operations.',
    features: [
      'Reservation Management',
      'Front Desk Operations',
      'Housekeeping Management',
      'Room Service Integration',
      'Inventory Control',
      'Staff Management',
      'Guest Portal',
      'Payment Processing',
      'Revenue Management',
      'Analytics Dashboard'
    ],
    benefits: [
      'Streamline Hotel Operations',
      'Improve Guest Experience',
      'Maximize Revenue',
      'Reduce Operational Costs',
      'Better Resource Management',
      'Enhanced Decision Making'
    ],
    technologies: [
      'Next.js',
      'Express',
      'MongoDB',
      'WebSocket',
      'AWS'
    ],
    industries: [
      'Hospitality',
      'Hotels',
      'Resorts',
      'Guest Houses'
    ],
    icon: 'devicon-nodejs-plain',
    image: '/products/hotel-sync.jpg'
  },
  {
    id: 'accounta',
    name: 'Accounta',
    description: 'A modern accounting and financial management solution that simplifies bookkeeping, payroll, and financial reporting. Built for businesses that need robust financial control and insights.',
    features: [
      'Double-Entry Bookkeeping',
      'Automated Bank Reconciliation',
      'Payroll Management',
      'Expense Tracking',
      'Financial Reporting',
      'Tax Calculation',
      'Multi-currency Support',
      'Budget Planning',
      'Invoice Generation',
      'Asset Management'
    ],
    benefits: [
      'Accurate Financial Records',
      'Time-saving Automation',
      'Better Cash Flow Management',
      'Simplified Tax Compliance',
      'Real-time Financial Insights',
      'Reduced Accounting Errors'
    ],
    technologies: [
      'Vue.js',
      'Laravel',
      'MySQL',
      'Redis',
      'Docker'
    ],
    industries: [
      'Finance',
      'Small Businesses',
      'Enterprises',
      'Accounting Firms'
    ],
    icon: 'devicon-vuejs-plain',
    image: '/products/accounta.jpg'
  }
]; 