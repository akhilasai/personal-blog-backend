const users = require("../../schema/userSchema");

const getUserDetails = (req, res) => {
  users.find({}).then((result,error) => {
    if(!error){
        res.status(200).send(JSON.stringify(result));
    }
    else{
        res.status(404)
    }
});
}

const getUserDetailsById = (req, res) => {
  let params = req.params;
  console.log(params);
  if(params.id){
      users.find({ _id: params.id }).then((result,error) => {
        //   console.log(error)
        if(!error){
            res.status(200).send(JSON.stringify(result));
        }
        else{
            res.status(204);
        }
      })
  }
  else{
    res.status(404)
  }
};

const postUserDetails = (req, res) => {
  let body = req.body;
  console.log(body);
  if (body.userName && body.password) {
    users.create(body).then((result, error) => {
      if (!error) {
        res.status(201).send(JSON.stringify(result));
      } else {
        res.status(404);
      }
    });
  }
  else{
    res.status(204)
  }
};

const deleteUserDetails = () => {};

const updateUserDetails = () => {};

module.exports = {
  getUserDetails,
  getUserDetailsById,
  postUserDetails,
  deleteUserDetails,
  updateUserDetails,
};
