import mongoose, { Schema, model, connect } from 'mongoose';

export const connectDB = async () => {
  try {
    const uri: string = String(process.env.NODE_MONGOURI);
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err: any) {
    console.log(err);
    process.exit(1);
  }
};
