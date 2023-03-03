const { Speciality } = require("../models");

const specialityController = {};

specialityController.createSpeciality = async (req, res) => {

    try {
        const { name, description} = req.body;

        const newSpeciality = {
            name : name,
            description : description
        }

    // Guardar la informacion
    const speciality = await Speciality.create(newSpeciality)

    return res.json(speciality)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

specialityController.getSpecialityById = async (req, res) => {

    try {
        const specialityId = req.params.id;

    // Guardar la informacion
        const speciality = await Speciality.findByPk(specialityId)

        return res.json(speciality)

    }catch(error){

        return res.status(500).send(error.message)
    }
};


module.exports =  specialityController