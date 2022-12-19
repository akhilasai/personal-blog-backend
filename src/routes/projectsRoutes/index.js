//Importing express and router
const express = require('express');
const router = new express.Router();

router.get('/projects',getProjectDetails);
router.get('/project/:id',getProjectDetailsById);
router.post('/projects',postProjectDetails);
router.delete('/project/:id',deleteProjectDetails);
router.put('/project/:id',updateProjectDetails);


module.exports = router;