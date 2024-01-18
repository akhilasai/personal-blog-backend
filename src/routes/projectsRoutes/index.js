//Importing express and router
const express = require('express');
const router = new express.Router();
const {getProjectDetails,getProjectDetailsById,postProjectDetails,getProjectDetailsByUser,deleteProjectDetails,updateProjectDetails}=require('../../services/projectServices');

router.get('/projects',getProjectDetails);
router.get('/userProject/:userId',getProjectDetailsByUser);
router.get('/project/:id',getProjectDetailsById);
router.post('/projects',postProjectDetails);
router.delete('/project/:id',deleteProjectDetails);
router.put('/project/:id',updateProjectDetails);


module.exports = router;