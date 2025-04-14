interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
  topics: string[];
}

interface Achievement {
  icon: string;
  count: string;
  label: string;
}

interface MentorshipProgram {
  description: string;
  benefits: string[];
  structure: string[];
  duration: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Artificial Intelligence",
    description: "Learn the basics of AI development with practical examples and hands-on projects.",
    duration: "8 weeks",
    level: "Beginner",
    icon: "devicon-python-plain",
    topics: [
      "Introduction to AI & ML",
      "Python Programming",
      "Data Processing",
      "Neural Networks",
      "Model Training",
      "Project Implementation"
    ]
  },
  {
    id: 2,
    name: "Advanced Cloud Architecture",
    description: "Master cloud architecture design and implementation using modern technologies.",
    duration: "10 weeks",
    level: "Advanced",
    icon: "devicon-amazonwebservices-plain",
    topics: [
      "Cloud Infrastructure",
      "Microservices",
      "Containerization",
      "Serverless Computing",
      "Security Best Practices",
      "Performance Optimization"
    ]
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    description: "Comprehensive training in modern web development technologies and practices.",
    duration: "12 weeks",
    level: "Intermediate",
    icon: "devicon-react-original",
    topics: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Testing & Deployment",
      "Project Management"
    ]
  },
  {
    id: 4,
    name: "Digital Marketing",
    description: "Master the art of digital marketing with hands-on experience in modern marketing tools and strategies.",
    duration: "8 weeks",
    level: "Beginner",
    icon: "devicon-google-plain",
    topics: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Digital Marketing Strategy"
    ]
  },
  {
    id: 5,
    name: "UI/UX Design",
    description: "Learn professional design skills using industry-standard tools and modern design principles.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: "devicon-figma-plain",
    topics: [
      "Design Principles",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design Systems",
      "Portfolio Development"
    ]
  },
  {
    id: 6,
    name: "IT Fundamentals",
    description: "Build a strong foundation in Information Technology with practical knowledge and hands-on experience.",
    duration: "6 weeks",
    level: "Beginner",
    icon: "devicon-windows8-original",
    topics: [
      "Computer Basics",
      "Networking Fundamentals",
      "Operating Systems",
      "Cybersecurity Basics",
      "Hardware & Software",
      "IT Support Skills"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    icon: "devicon-react-original",
    count: "100+",
    label: "Students Trained"
  },
  {
    icon: "devicon-star-plain",
    count: "70%",
    label: "Success Rate"
  },
  {
    icon: "devicon-certificate-plain",
    count: "10+",
    label: "Expert Mentors"
  },
  {
    icon: "devicon-handshake-plain",
    count: "5+",
    label: "Partner Companies"
  }
];

export const mentorshipProgram: MentorshipProgram = {
  description: "Join our exclusive mentorship program and get personalized guidance from industry experts. Our mentors will help you accelerate your learning journey and achieve your career goals.",
  benefits: [
    "One-on-one sessions with expert mentors",
    "Personalized learning path",
    "Real-world project experience",
    "Career guidance and networking",
    "Industry certification preparation"
  ],
  structure: [
    "Weekly mentoring sessions",
    "Project-based learning",
    "Technical skill assessment",
    "Career development workshops",
    "Industry networking events"
  ],
  duration: "3 months"
}; 