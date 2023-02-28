const { Pacient } = require("../models");

const pacientController = {};

pacientController.createPacient = async (req, res) => {

    try {
        const { user_id, history_id, name, surname, email, address,phone,date_of_birth,gender,postcode } = req.body;

        const newPacient = {
            user_id : user_id,
            history_id : history_id,
            name : name,
            surname : surname,
            email : email,
            address : address,
            phone : phone,
            date_of_birth : date_of_birth,
            gender : gender,
            postcode : postcode
        }
           // Guardar la informacion
        const pacient = await Pacient.create(newPacient)

        return res.json(pacient)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

pacientController.getPacienttById = async (req, res) => {

    try{

    const pacientId = req.params.id;

    const pacient = await Pacient.findByPk(pacientId)

    return res.json(pacient);

    }catch(error){
        return res.status(500).send(error.message)
    }
};

pacientController.putPacientById = async (req, res) =>{

    try{

        const pacientId = req.params.id

        const { user_id, speciality_id,name, surname, email, address,phone,date_of_birth,gender,postcode } = req.body;

        const updatePacient = await Pacient.update({user_id, speciality_id,name:name,surname:surname,email:email,address:address,phone:phone,date_of_birth:date_of_birth,gender:gender,postcode:postcode}, {where:{id:pacientId}})

        return res.json(updatePacient)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

pacientController.deletePacientsById = async(req, res) => {

    try{

        const pacientId = req.params.id
    
        const deletePacient = await Pacient.destroy({where: { id: pacientId}})

        return res.json(deletePacient);

    }catch(error){

        return res.status(500).send(error.message)
    }
};





module.exports =  pacientController