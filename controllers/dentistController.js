const { Dentist } = require("../models");

const dentistController = {};

dentistController.createDentist = async (req, res) => {

    try {
        const { user_id, speciality_id, name, surname, email, address,registration_number,phone } = req.body;

        const newDentist = {
            user_id : user_id,
            speciality_id : speciality_id,
            name : name,
            surname : surname,
            email : email,
            address : address,
            registration_number : registration_number,
            phone : phone
        }

   // Guardar la informacion
   const dentist = await Dentist.create(newDentist)

   return res.json(dentist)

}catch(error){

    return res.status(500).send(error.message)
}
};

dentistController.getDentistById = async (req, res) => {
    const dentistId = req.params.id;

    const dentist = await Dentist.findByPk(dentistId)

    return res.json(dentist);
}

dentistController.putDentistById = async (req, res) =>{
    const dentistId = req.params.id

    const { user_id,speciality_id,name, surname, email, address,registration_number,phone } = req.body;

    const updateDentist = await Dentist.update({user_id:user_id,speciality_id,name:name,surname:surname,email:email,address:address,registration_number:registration_number,phone:phone}, {where:{id:dentistId}})

    return res.json(updateDentist)
}

dentistController.deleteDentistsById = async (req, res) => {
    const dentistId = req.params.id
    
    const deleteDentist = await Dentist.destroy({where: { id: dentistId}})

    return res.json(deleteDentist);
}


module.exports =  dentistController