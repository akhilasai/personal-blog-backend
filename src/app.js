//Importing Express 
const express = require('express')
const userRoutes=require('./routes/userRoutes');
const educationRoutes = require('./routes/educationRoutes');
const interestsRoutes = require('./routes/interestsRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const skillsRoutes = require('./routes/skillsRoutes');

//Assiging Express to varaible app
const app = express();
// Created use function to get body i.e data
app.use(express.json())

//Assigning port number to port varaible
const port = 8080;
//Database connection
require('../src/database') 

const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/",userRoutes)
app.use("/",educationRoutes)
app.use("/",interestsRoutes)
app.use("/",projectsRoutes)
app.use("/",skillsRoutes)

app.listen(port, () => {
	console.log(`app listening http://localhost:${port}`)
})