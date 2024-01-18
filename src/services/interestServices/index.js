const interests=require('../../schema/interestSchema')

const getInterestDetails=(req,res)=>{
    interests.find({}).then((result,error)=>{
        if(!error){
            res.status(200).send(JSON.stringify(result))
        }
        else{
            res.status(404)
        }
    })
}

const getInterestDetailsById=(req,res)=>{
    let params=req.params;
    console.log(params);
    if(params.id){
        interests.find({_id:params.id}).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result))
            }
            else{
                res.status(204) //No Content
            }
        }) 
    }
    else{
        res.status(404) // Not Found
    }
}
const getInterestDetailsByUser=(req,res)=>{
    let params=req.params;
    console.log(params);
    if(params.userId){
        interests.find({userId:params.userId}).then((result,error)=>{
            if(!error){
                res.status(200).send(JSON.stringify(result))
            }
            else{
                res.status(204) //No Content
            }
        }) 
    }
    else{
        res.status(404) // Not Found
    }
}

const postInterestDetails=(req,res)=>{
    let body=req.body;
    console.log(body);
    if(body.name){
        interests.create(body).then((result,error)=>{
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

const deleteInterestDetails=()=>{

}

const updateInterestDetails=()=>{
    
}

module.exports={
    getInterestDetails,
    getInterestDetailsById,
    postInterestDetails,
    deleteInterestDetails,
    updateInterestDetails,
    getInterestDetailsByUser
}