import mongoose from 'mongoose'


const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://harshitapatidar257:nWMJh43pSraExVvb@chattrix.cbwcouf.mongodb.net/?retryWrites=true&w=majority&appName=Chattrix', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };

export default connectDB;