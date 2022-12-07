//Importing Express 
const express = require('express')

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


app.listen(port, () => {
	console.log(`app listening http://localhost:${port}`)
})