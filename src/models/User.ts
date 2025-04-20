import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string; 
  major: string;
  academicYear: string;
  courses: string[];
  meetingPreferences: string[];
  meetingLocations: string[];
  groupSizePreference: string[];
  photo?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  major: { type: String, required: true },
  academicYear: { type: String, required: true },
  courses: { type: [String], default: [] },
  meetingPreferences: { type: [String], default: [] },
  meetingLocations: { type: [String], default: [] },
  groupSizePreference: { type: [String], default: [] },
  photo: { type: String, default: '/profile.png' },
  createdAt: { type: Date, default: Date.now }
});

export default models.User || model<IUser>('User', UserSchema);
