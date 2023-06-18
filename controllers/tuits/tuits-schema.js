import mongoose from 'mongoose'; // load the mongoose library
const schema = mongoose.Schema({ // create the schema
  tuit: String, // tuit property of type String
  likes: Number, // likes property of type Number
  liked: Boolean, // liked property of type Boolean
}, {collection: 'tuits'}); // collection name where tuits are stored in tuiter database
export default schema; // export schema so it can be used elsewhere








