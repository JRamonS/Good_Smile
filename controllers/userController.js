const { User } = require("../models");

const userController = {};

userController.createUser = async (req, res) => {

    try {

        const { rol_id, username, password, email } = req.body;

        const newUser = {
        rol_id : rol_id,
        username : username,
        password : password,
        email : email
        }

    // Guardar la informacion
        const user = await User.create(newUser)

        return res.json(user)

    }catch(error){

    return res.status(500).send(error.message)
    }
};

userController.getUserById = async (req, res) => {

    try{

        const userId = req.params.id;

        const user = await User.findByPk(userId,{
        include: {all:true}
        })

        return res.json(user);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

module.exports =  userController