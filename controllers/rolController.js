const { User } = require("../models");

const rolController = {};

//Function for rol creation

rolController.updateRol = async (req, res) => {

            try {
                const { rol_id } = req.body;
                const updateUser = await User.update(
                {
                    rol_id: rol_id,
                },
                {
                    where: {
                    id: req.params.id
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


//Function to display the user by rol id

rolController.getRolById = async (req, res) => {

    try {
        const rolId = req.params.id;

    // Guardar la informacion
        const rol = await User.findByPk(rolId)

        return res.json(rol)

    }catch(error){

        return res.status(500).send(error.message)
    }
};


module.exports =  rolController