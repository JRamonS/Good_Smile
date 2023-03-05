const { Treatment } = require("../models");

const treatmentController = {};

treatmentController.createTreatment = async (req, res) => {

    try {
        const {name,duration,price,description,date,session_num,status} = req.body;

        const newTreatment = {
            name : name,
            duration : duration,
            price : price,
            description : description,
            date : date,
            session_num : session_num,
            status: status
    
        }
           // Guardar la informacion
        const treatment = await Treatment.create(newTreatment)

        return res.json(treatment)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

treatmentController.getTreatmentById = async (req, res) => {

    try{

    const treatmentId = req.params.id;

    const treatment = await Treatment.findByPk(treatmentId, {
        attributes: {
            exclude: [ "createdAt", "updatedAt"]
        }
    })

    return res.json(treatment);

    }catch(error){
        return res.status(500).send(error.message)
    }
};

treatmentController.putTreatmentById = async (req, res) =>{

    try{

        const treatmentId = req.params.id

        const {name,duration, price, description,status,date,session_num} = req.body;

        const updateTreatment = await Treatment.update({name : name,
            duration : duration,
            price : price,
            description : description,
            date : date,
            session_num : session_num,
            status: status}, {where:{id:treatmentId}})

        return res.json(updateTreatment)

    }catch(error){

        return res.status(500).send(error.message)
    }
}










module.exports =  treatmentController