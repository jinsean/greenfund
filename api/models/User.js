import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country:{
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    investedProject: {
      type:[String],
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);