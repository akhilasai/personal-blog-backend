//Importing express and router
const express = require('express');
const router = new express.Router();

router.get('/education',getEducationDetails);
router.get('/education/:id',getEducationDetailsById);
router.post('/education',postEducationDetails);
router.delete('/education/:id',deleteEducationDetails);
router.put('/education/:id',updateEducationDetails);


module.exports = router;