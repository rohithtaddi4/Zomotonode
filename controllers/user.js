//const { findOne } = require('../model/user');
const User = require('../model/user');

// user signup
exports.createUserAccount =(req,res)=>{
    const {email, password, Name}=req.body;

    newUser ={
        Name: Name,
        email: email,
        password: password
    };

    User.findOne(newUser)
        .then(response => {
            response!=null?
                    res.status(200).json({ message: `Error!!! user with an email of ${response.email} already exist: `}):       
                    User.insertMany(newUser)
                    .then(response => {
                        res.status(200).json({ message: 'Successfully created an account & Login',  response});
                    })
                .catch(err => console.log(err))       
            })
            .catch(err => console.log(err))
    }
// login
exports.getUserByLogin =(req,res)=>{
    const {email, password}=req.body;
    UserLog ={
        email: email,
        password: password
    }
   
    User.findOne(UserLog)
        .then(response => {      
            res.status(200).json({ message: response!=null? "Welcome!!!": "Wrong Credentials, Please Try Again!",  user: response});
         })
    .catch(err => console.log(err))
}