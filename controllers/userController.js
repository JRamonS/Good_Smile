const { User } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

userController.createUser = async (req,res) => {

    try{
        //recuperar info de la peticion
        const { username, email, password, rol_id} = req.body;

        // tratar esa informaion
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({
        rol_id : rol_id,
        username : username,
        password : encryptedPassword,
        email : email
        })

        return res.json(
            {
                success: true,
                message: "User registered",
                data: newUser
            })

    }catch (error){

        return res.status(500).send(error.message)
    }
};


userController.getUserById = async (req, res) => {

    try{

        const userId = req.params.id;

        const user = await User.findByPk(userId,{
        
        attibutes: {
            exclude: ["password"]
        },
        include: {all:true}
        })

        if (!user){
            return res.send("User Not Found")
        }

        return res.json(user);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

userController.deleteUserById = async(req, res) => {

    try{

        const userId = req.params.id
    
        const deleteUser = await User.destroy({where: { id: userId}})

        return res.json(deleteUser);

    }catch(error){

        return res.status(500).send(error.message)
    }
};

module.exports =  userController