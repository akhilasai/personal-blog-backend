//Importing express and router
const express = require('express');
const router = new express.Router();
const {getUserDetails,getUserDetailsById,getUserDetailsByUserName,postUserDetails,deleteUserDetails,updateUserDetails}=require('../../services/userServices');

router.get('/users',getUserDetails);
router.get('/user/:id',getUserDetailsById);
router.get('/userByName/:userName',getUserDetailsByUserName);
router.post('/users',postUserDetails);
router.delete('/user/:id',deleteUserDetails);
router.put('/user/:id',updateUserDetails);


module.exports = router;