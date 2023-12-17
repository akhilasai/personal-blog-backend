//Importing npm modules
const mongoose = require("mongoose");

/**
 * creating a schema of record
 * declaring required fields and specifying data type
 */

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  displaySkills: { type: Array },
  email: { type: String, required: true },
  description: { type: String, required: true },
  resumeLink: { type: String, required: true },
  imageUrl: { type:String, required: true}
});
//assigning model to const variable
const User = mongoose.model("user", userSchema);

//exporting User
module.exports = User;
