const { User, Rol } = require("../models");
const bcrypt = require("bcrypt");

const userController = {};

//Function for user creation

userController.createUser = async (req,res) => {

    try{
        
        const { username, email, password, name, surname, address, phone, date_of_birth, gender, postcode} = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({
        rol_id : 3,
        username : username,
        password : encryptedPassword,
        email : email,
        name : name,
        surname : surname,
        address : address,
        phone : phone,
        date_of_birth : date_of_birth,
        gender : gender,
        postcode : postcode
        })

        return res.json(
            {
                success: true,
                message: "User registered",
                data: newUser
            })

    }catch (error){

        return res.status(500).send(error)
    }
};

userController.getUser = async (req, res) => {

    try{

        // const userId = req.userId;


        const user = await User.findAll(
            {
                include: [
                    Rol,
                    {
                        model: Rol,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["rol_id", "password", "createdAt", "updatedAt"]
                }
            })

        if (!user){
            return res.send("User Not Found")
        }

        return res.json(user);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};


  
    

//Function to display the user by user id

userController.getUserById = async (req, res) => {

    try{

       
        const userId = req.userId;


        const user = await User.findByPk(userId,
            {
                include: [
                    Rol,
                    {
                        model: Rol,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["rol_id", "password", "createdAt", "updatedAt"]
                }
            })

        if (!user){
            return res.send("User Not Found")
        }

        return res.json(user);
    
    }catch(error){
        return res.status(500).send(error.message)
    }   
};

userController.updateUser = async (req, res) => {
    try {
        const { username, email, password, name, address, phone, date_of_birth, gender, postcode} = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const updateUser = await User.update(
        {
            username: username,
            email: email,
            password: encryptedPassword,
            name: name,
            address:address,
            phone:phone,
            date_of_birth:date_of_birth,
            gender:gender,
            postcode:postcode
        },
        {
            where: {
            id: req.userId
            }
        }
        );
        if (!updateUser) {
        return res.send('User not updated')
        }
        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



//Function for user delete

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