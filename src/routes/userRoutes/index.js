//Importing express and router
const express = require('express');
const router = new express.Router();
const {getUserDetails,getUserDetailsById,postUserDetails,deleteUserDetails,updateUserDetails}=require('../../services/userServices');

router.get('/users',getUserDetails);
router.get('/users/:id',getUserDetailsById);
router.post('/users',postUserDetails);
router.delete('/user/:id',deleteUserDetails);
router.put('/user/:id',updateUserDetails);


module.exports = router;