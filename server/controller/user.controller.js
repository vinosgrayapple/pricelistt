class UserController{
    async get (req,res){
        try{
            res.send("Server work")
        }catch(err){
            console.log(" test Error: ", err)
        }
    }
}

module.exports = new UserController()