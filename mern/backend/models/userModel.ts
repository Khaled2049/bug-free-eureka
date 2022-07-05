import mongoose, { Schema, model, connect, ObjectId } from 'mongoose';

interface IUser {
  _id?: String;
  name: string;
  email: string;
  password: string;
}

// export interface IUser extends mongoose.Document {
//   // _id?: ObjectId;
//   name: string;
//   email: string;
//   password: string;
// }

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('User', userSchema);

export default User;
