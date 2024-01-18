const projects=require('../../schema/projectsSchema');

const getProjectDetails=(req,res)=>{
    projects.find({}).then((result,error)=>{
        if(!error){
            res.status(200).send(JSON.stringify(result))
        }
        else{
            res.status(404)
        }
    })
}

const getProjectDetailsById=(req,res)=>{
    let params = req.params;
    console.log(params)
    if(params.id){
        projects.find({_id:params.id}).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result))
            }
            else{
                res.status(204)
            }
        })
    }
    else{
        res.status(404)
    }
}
const getProjectDetailsByUser=(req,res)=>{
    let params = req.params;
    console.log(params)
    if(params.userId){
        projects.find({userId:params.userId}).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result))
            }
            else{
                res.status(204)
            }
        })
    }
    else{
        res.status(404)
    }
}

const postProjectDetails=(req,res)=>{
    let body=req.body;
    console.log(body)
    if(body.name){
        projects.create(body).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result))
            }
            else{
                res.status(404)
            }
        })
    }
    else{
        res.status(204)
    }
}

const deleteProjectDetails=()=>{

}

const updateProjectDetails=()=>{
    
}

module.exports={
    getProjectDetails,
    getProjectDetailsById,
    postProjectDetails,
    deleteProjectDetails,
    updateProjectDetails,
    getProjectDetailsByUser
}