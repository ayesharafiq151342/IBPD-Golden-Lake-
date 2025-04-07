import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Provide Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please provide Number"],
  },
  message: { type: String },
});

const User = mongoose.models.demoform || mongoose.model("demoform", UserSchema);


export default User;
