const { cardN01 } = require("../classes/filledCards/cardN01")
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
            console.log(cardN01)
            return res.json(cardN01)

        }catch(err){
            console.log(" test Error: ", err)
        }
    }
}



module.exports = new UserController()