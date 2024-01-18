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
const getSkillDetailsByUser=(req,res)=>{
    let params=req.params;
    console.log(params);
    if(params.userId){
        skills.find({userId:params.userId}).then((result,error)=>{
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

const updateSkillDetails=(req,res)=>{
    const idValue=req.params.id;
    console.log(idValue);
    const body=req.body;
    console.log(body);
    let query={id:parseInt(idValue)}
    console.log(query);
    let values={$set:body}
    console.log(values);
    skills.updateOne(query,values,(err,result)=>{
        if(err){
            res.status(403)
                .send(err)
        }
        else{
            console.log(result);
            res.status(201)
                .send(result.modifiedCount+" skill updated");
        }
    });
}

module.exports={
    getSkillDetails,
    getSkillDetailsById,
    postSkillDetails,
    deleteSkillDetails,
    updateSkillDetails,
    getSkillDetailsByUser
}