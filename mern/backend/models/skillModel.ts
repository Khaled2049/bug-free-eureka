import mongoose, { Schema, model, connect } from 'mongoose';

interface ISkill {
    name: string;
    level: string;
    desc: string;
    inProgress: boolean;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const skillSchema = new Schema<ISkill>({
    name: { type: String, required: true },
    level: { type: String, required: true },
    desc: { type: String, required: true },
    inProgress: { type: Boolean, required: true }
  }, {
      timestamps: true
  });

const Skill = model<ISkill>('Skill', skillSchema);
  
export default Skill;
//   // 3. Create a Model.
//   const User = model<ISkill>('User', skillSchema);
  
//   run().catch(err => console.log(err));
  
//   async function run() {
//     // 4. Connect to MongoDB
//     await connect('mongodb://localhost:27017/test');
  
//     const user = new User({
//       name: 'Bill',
//       email: 'bill@initech.com',
//       avatar: 'https://i.imgur.com/dM7Thhn.png'
//     });
//     await user.save();
  
//     console.log(user.email); // 'bill@initech.com'
//   }