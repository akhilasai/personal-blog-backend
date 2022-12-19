
const users=require('../../schema/userSchema');

const getUserDetails=(req,res)=>{
    const userDetails=users.find({})
    console.log(userDetails);
    res.status(200).send(JSON.stringify(userDetails));
}

const getUserDetailsById=()=>{
}

const postUserDetails=()=>{

}

const deleteUserDetails=()=>{
}

const updateUserDetails=()=>{
}

module.exports={getUserDetails,
    getUserDetailsById,
    postUserDetails,
    deleteUserDetails,
    updateUserDetails
};