import express from 'express';
import User from '../models/User.js';
import { requireAuth } from '@clerk/clerk-sdk-node';

const router = express.Router();

// Create or update user in MongoDB
router.post('/sync', requireAuth(), async (req, res) => {
  const { userId } = req.auth; // Clerk ID
  const { name, email, mobile, profilePhoto, about } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { clerkId: userId },
      { name, email, mobile, profilePhoto, about },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error syncing user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
