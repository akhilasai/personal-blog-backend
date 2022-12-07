//Importing Mongoose
const mongoose = require('mongoose')
//Connecting to mongodb using url.
mongoose.connect("mongodb+srv://athumma:Akhila%40123@cluster0.iiybw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		// useFindAndModify: false,
		useUnifiedTopology: true
	}
);
const con = mongoose.connection
con.once("open", function () {
	console.log("Database connection successfully")
})