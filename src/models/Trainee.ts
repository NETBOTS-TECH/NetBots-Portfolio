import mongoose, { Schema } from 'mongoose';
import { ITrainee } from '../types/models';

const TraineeSchema = new Schema({
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
  },
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
  }]
}, {
  timestamps: true
});

// Create indexes
TraineeSchema.index({ email: 1 }, { unique: true });
TraineeSchema.index({ firstName: 1, lastName: 1 });

export const Trainee = mongoose.model<ITrainee>('Trainee', TraineeSchema); 