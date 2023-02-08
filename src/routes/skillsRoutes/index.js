//Importing express and router
const express = require('express');
const router = new express.Router();
const { getSkillDetails,getSkillDetailsById,postSkillDetails,
deleteSkillDetails,updateSkillDetails}=require('../../services/skillServices');

router.get('/skills',getSkillDetails);
router.get('/skill/:id',getSkillDetailsById);
router.post('/skills',postSkillDetails);
router.delete('/skill/:id',deleteSkillDetails);
router.put('/skill/:id',updateSkillDetails);


module.exports = router;