const { User } = require("../models/index");

const userController = {};

userController.createUser = async (req, res) => {

    try {
    const { date } = req.body;

    const newUser = {
        date : date,
    }

    // Guardar la informacion
    const user = await User.create(newUser)

    return res.json(user)

}catch(error){
    retur .res.status(500).send(error.message)
}
};

module.exports =  userController