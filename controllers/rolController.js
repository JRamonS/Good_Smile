const { Rol } = require("../models");

const rolController = {};

rolController.createRol = async (req, res) => {

    try {
        const { privilege } = req.body;

        const newRol = {
            privilege: privilege
        }

    // Guardar la informacion
        const rol = await Rol.create(newRol)

        return res.json(rol)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

rolController.getRolById = async (req, res) => {

    try {
        const rolId = req.params.id;

    // Guardar la informacion
        const rol = await Rol.findByPk(rolId)

        return res.json(rol)

    }catch(error){

        return res.status(500).send(error.message)
    }
};


module.exports =  rolController