import mongoose from 'mongoose'; // load mongoose library
import tuitsSchema from './tuits-schema.js';  // load tuits schema
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);  // create mongoose model from the schema
export default tuitsModel;   // export so it can be used elsewhere





