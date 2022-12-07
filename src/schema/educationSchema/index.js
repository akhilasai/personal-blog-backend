//Importing npm modules
const mongoose = require('mongoose')

/**
 * creating a scheema of record
 * declaring required fields and specifying data type
 */

const EducationSchema = new mongoose.Schema({
	name: { type: String, required: true },
	rollnumber: { type: String, required: true },
	branchName: { type: String, required: true },
	isBranch: { type: String, required: true },
	passedOutYear: { type: Number },
	gpa: { type: Float },
	image:{type:String }
});
//assigning model to const variable
const Education = mongoose.model("Education", EducationSchema);

//exporting User
module.exports = Education;