import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    number: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model("bugcureUser", UserSchema);
