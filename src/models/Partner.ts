// models/Partner.ts
import mongoose, { Schema, model, models } from "mongoose";

const PartnerSchema = new Schema({
  name: String,
  gender: String,
  major: String,
  course: String,
  meetingPreferences: String,
  meetingLocations: String,
  groupSizePreference: String,
  photo: String,
});

const Partner = models.Partner || model("Partner", PartnerSchema);
export default Partner;
