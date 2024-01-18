//Importing npm modules
const mongoose = require("mongoose");

/**
 * creating a schema of record
 * declaring required fields and specifying data type
 */

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array },
  image: { type: String },
  link: { type: String },
  code: { type: String },
  userId:{type:String,required:true}
});
//assigning model to const variable
const Project = mongoose.model("project", projectSchema);

//exporting User
module.exports = Project;
