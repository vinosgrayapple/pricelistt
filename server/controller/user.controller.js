const { cards1 } = require("../data/cards")

 
class UserController{

    async get (req,res){
        try{
            console.log(" GET obtained")
            return res.send("Server work")
            
        }catch(err){
            console.log(" test Error: ", err)
        }
    }


    async getPage (req,res){
        try{
            console.log(req.params)
           return res.json(cards1)
        }catch(err){
            console.log(" test Error: ", err)
        }
    }
}



module.exports = new UserController()