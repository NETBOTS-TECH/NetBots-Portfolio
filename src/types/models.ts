import { Document } from 'mongoose';

export interface IEducation {
  degree: string;
  institution: string;
  graduationYear: number;
  gpa: number;
}

export interface ICourse {
  name: string;
  institution: string;
  completionYear: number;
}

export interface ICertification {
  name: string;
  issuingBody: string;
  year: number;
}

export interface IProgrammingSkill {
  name: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface ITrainee extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  education: IEducation;
  courses: ICourse[];
  certifications: ICertification[];
  programmingSkills: IProgrammingSkill[];
  softSkills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct extends Document {
  title: string;
  description: string;
  features: string[];
  category: string;
  tags: string[];
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IService extends Document {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ITechnology extends Document {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
} 