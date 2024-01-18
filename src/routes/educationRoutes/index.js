//Importing express and router
const express = require('express');
const router = new express.Router();
const {getEducationDetails,getEducationDetailsById,getEducationDetailsByUser,postEducationDetails,deleteEducationDetails,updateEducationDetails}=require('../../services/educationServices')
router.get('/education',getEducationDetails);
router.get('/userEducation/:userId',getEducationDetailsByUser);
router.get('/education/:id',getEducationDetailsById);
router.post('/education',postEducationDetails);
router.delete('/education/:id',deleteEducationDetails);
router.put('/education/:id',updateEducationDetails);


module.exports = router;