const skills=require('../../schema/skillsSchema');

const getSkillDetails=(req,res)=>{
    skills.find({}).then((result,error)=>{
        if(!error){
            res.status(200).send(JSON.stringify(result));
        }
        else{
            res.status(404)
        }
    })
}

const getSkillDetailsById=(req,res)=>{
    let params=req.params;
    console.log(params);
    if(params.id){
        skills.find({id:params.id}).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result));
            }
            else{
                res.status(404)
            }
        })
    }
    else{
        res.status(404)
    }
}

const postSkillDetails=(req,res)=>{
    let body=req.body;
    console.log(body);
    if(body.name && body.percentage){
        skills.create(body).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(body));
            }
            else{
                res.status(404)
            }
        });
    }
    else{
        res.status(204)
    }
}

const deleteSkillDetails=()=>{

}

const updateSkillDetails=()=>{
    
}

module.exports={
    getSkillDetails,
    getSkillDetailsById,
    postSkillDetails,
    deleteSkillDetails,
    updateSkillDetails
}