const education=require('../../schema/educationSchema');

const getEducationDetails=(req,res)=>{
    education.find({}).then((result,error)=>{
        if(!error){
            res.status(200).send(JSON.stringify(result))
        }
        else{
            res.status(404)
        }
    })
}

const getEducationDetailsById=(req,res)=>{
    let params=req.params;
    console.log(params)
    if(params.id){
        education.find({_id:params.id}).then((result,error)=>{
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
const getEducationDetailsByUser=(req,res)=>{
    let params=req.params;
    console.log(params)
    if(params.userId){
        education.find({userId:params.userId}).then((result,error)=>{
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

const postEducationDetails=(req,res)=>{
    let body=req.body
    console.log(body)
    if(body.name){
        education.create(body).then((result,error)=>{
            if(!error){
                res.status(201).send(JSON.stringify(result))
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

const deleteEducationDetails=()=>{

}

const updateEducationDetails=()=>{
    
}

module.exports={
    getEducationDetails,
    getEducationDetailsById,
    postEducationDetails,
    deleteEducationDetails,
    updateEducationDetails,
    getEducationDetailsByUser
}