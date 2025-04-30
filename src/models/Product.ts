import mongoose, { Schema } from 'mongoose';
import { IProduct } from '../types/models';

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  features: [{
    type: String,
    required: [true, 'Features are required'],
    trim: true
  }],
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  icon: {
    type: String,
    required: [true, 'Icon is required'],
    trim: true
  }
}, {
  timestamps: true
});

// Create indexes
ProductSchema.index({ title: 1 }, { unique: true });
ProductSchema.index({ category: 1 });
ProductSchema.index({ tags: 1 });

export const Product = mongoose.model<IProduct>('Product', ProductSchema); 