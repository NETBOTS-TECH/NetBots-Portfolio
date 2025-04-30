const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets Configuration
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',  // You'll need to add your Google Sheets API credentials
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Add this to your .env file

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/netbots', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Training Application Schema
const trainingApplicationSchema = new mongoose.Schema({
  trainingProgram: {
    type: String,
    required: [true, 'Training program is required'],
    enum: [
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
    ]
  },
  personalInfo: {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true
    }
  },
  experience: [{
    title: String,
    company: String,
    duration: String,
    description: String
  }],
  education: {
    degree: {
      type: String,
      required: [true, 'Degree is required'],
      trim: true
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
      trim: true
    },
    graduationYear: {
      type: Number,
      required: [true, 'Graduation year is required'],
      min: [1950, 'Invalid graduation year'],
      max: [new Date().getFullYear() + 5, 'Invalid graduation year']
    },
    gpa: {
      type: Number,
      required: [true, 'GPA is required'],
      min: [0, 'GPA must be between 0 and 4'],
      max: [4, 'GPA must be between 0 and 4']
    }
  },
  courses: [{
    name: {
      type: String,
      required: [true, 'Course name is required'],
      trim: true
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
      trim: true
    },
    completionYear: {
      type: Number,
      required: [true, 'Completion year is required'],
      min: [1950, 'Invalid completion year'],
      max: [new Date().getFullYear(), 'Invalid completion year']
    }
  }],
  certifications: [{
    name: {
      type: String,
      required: [true, 'Certification name is required'],
      trim: true
    },
    issuingBody: {
      type: String,
      required: [true, 'Issuing body is required'],
      trim: true
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: [1950, 'Invalid year'],
      max: [new Date().getFullYear(), 'Invalid year']
    }
  }],
  programmingSkills: [{
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true
    },
    proficiencyLevel: {
      type: String,
      required: [true, 'Proficiency level is required'],
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    }
  }],
  softSkills: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['Pending', 'Under Review', 'Accepted', 'Rejected'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const TrainingApplication = mongoose.model('TrainingApplication', trainingApplicationSchema);

// Submit Training Application Endpoint
app.post('/api/training/submit', async (req, res) => {
  try {
    const {
      // Training Program
      trainingProgram,
      
      // Personal Information
      fullName,
      fatherName,
      address,
      phone,
      email,
      linkedinUrl,
      githubUrl,
      portfolioUrl,
      
      // Education
      degree,
      institution,
      graduationYear,
      grade,
      
      // Experience (taking first experience entry if exists)
      jobTitle,
      company,
      duration,
      jobDescription,
      
      // Courses (taking first course if exists)
      courseName,
      courseInstitution,
      courseYear,
      
      // Certification (taking first certification if exists)
      certificationName,
      issuingOrganization,
      certificationYear,
      
      // Skills (joining arrays with commas)
      programmingSkills,
      softSkills,
    } = req.body;

    // Prepare row data
    const rowData = [
      [
        new Date().toISOString(), // Timestamp
        trainingProgram,
        fullName,
        fatherName || '',
        address,
        phone,
        email,
        linkedinUrl || '',
        githubUrl || '',
        portfolioUrl || '',
        degree,
        institution,
        graduationYear,
        grade,
        jobTitle || '',
        company || '',
        duration || '',
        jobDescription || '',
        courseName || '',
        courseInstitution || '',
        courseYear || '',
        certificationName || '',
        issuingOrganization || '',
        certificationYear || '',
        programmingSkills ? programmingSkills.join(', ') : '',
        softSkills ? softSkills.join(', ') : '',
        'Pending' // Status
      ]
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:AA', // Adjust range based on your columns
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: rowData
      },
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our team will review your application and contact you soon.'
    });
  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while submitting your application'
    });
  }
});

// Serve static files from the React app
app.use(express.static('build'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 