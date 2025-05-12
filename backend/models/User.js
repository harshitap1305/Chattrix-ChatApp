import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: 
     { type: String, 
      required: true, 
      unique: true 
    },
  email:
     { type: String,
      required: true,
      unique: true,
     },

  name: {
    type: String,
    required: true
    },

  mobile: {
    type: String,
    required: true,
    unique: true
  },
  profilePhoto: { type: String, default: null }, // URL
  about: { type: String },
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);


