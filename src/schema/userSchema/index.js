//Importing npm modules
const mongoose = require('mongoose')

/**
 * creating a scheema of record
 * declaring required fields and specifying data type
 */

 const userSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	password: { type: String, required: true },
	
});
//assigning model to const variable
const User = mongoose.model("user", userSchema);

//exporting User
module.exports = User;