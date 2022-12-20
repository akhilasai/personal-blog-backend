//Importing npm modules
const mongoose = require('mongoose')

/**
 * creating a schema of record
 * declaring required fields and specifying data type
 */

 const skillSchema = new mongoose.Schema({
	name: { type: String, required: true },
	percentage: { type: Number},
    color: { type: String}
	
});
//assigning model to const variable
const Skill = mongoose.model("skill", skillSchema);

//exporting User
module.exports = Skill;