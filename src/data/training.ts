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
    name: "AI Development Fundamentals",
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
  }
];

export const achievements: Achievement[] = [
  {
    icon: "devicon-react-original",
    count: "1000+",
    label: "Students Trained"
  },
  {
    icon: "devicon-star-plain",
    count: "95%",
    label: "Success Rate"
  },
  {
    icon: "devicon-certificate-plain",
    count: "50+",
    label: "Expert Mentors"
  },
  {
    icon: "devicon-handshake-plain",
    count: "200+",
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