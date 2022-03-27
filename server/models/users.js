const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, lowercase: true },
    email: { type: String, unique: true },
    walletAddress: { type: String, required: true, unique: true },
    photo: { data: Buffer, contentType: String },
    lastLogin: { type: Date, default: null },
    role: {
      type: String, enum: ['artist', 'user'], default: 'user',
    },
    uid: { type: String, required: false },
    active: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const UsersModel = mongoose.model('Users', userSchema, 'users');

module.exports = {
  UsersModel,
};
