//Importing npm modules
const mongoose = require('mongoose')

/**
 * creating a schema of record
 * declaring required fields and specifying data type
 */

 const interestSchema = new mongoose.Schema({
	name: { type: String, required: true },
	category: { type: String},
    image:{type:String},
	userId:{type:String,required:true}
	
});
//assigning model to const variable
const Interest = mongoose.model("interest", interestSchema);

//exporting User
module.exports = Interest;