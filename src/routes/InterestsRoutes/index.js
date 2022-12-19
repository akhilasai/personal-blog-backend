//Importing express and router
const express = require('express');
const router = new express.Router();

router.get('/interests',getInterestDetails);
router.get('/interest/:id',getInterestDetailsById);
router.post('/interests',postInterestDetails);
router.delete('/interest/:id',deleteInterestDetails);
router.put('/interest/:id',updateInterestDetails);


module.exports = router;