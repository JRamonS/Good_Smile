const { Appointment } = require("../models");

const appointmentController = {};

appointmentController.createAppointment = async (req, res) => {

    try {
        const {pacient_id,dentist_id,treatment_id,hour,status,observations,date} = req.body;

        const newAppointment = {
            pacient_id : pacient_id,
            dentist_id: dentist_id,
            treatment_id : treatment_id,
            hour : hour,
            status : status,
            observations : observations,
            date : date
        }
           // Guardar la informacion
        const appointment = await Appointment.create(newAppointment)

        return res.json(appointment)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

appointmentController.getAppointment = async (req, res) => {
    // process.env.JWT_KEY
let citasActivas = await Appointment.findAll({
    // include: {
    // model: User,
    // attributes: ['fullName','role_id','phone'],
    // },
    attributes: ['pacient_id', 'dentist_id', "treatment_id", "hour", "status"]
  });
  res.status(200).json({
    message: `These are all the appointment in the calendar`,
    citasActivas,
  });
}

// appointmentController.getAppointment = async(req, res)=> {

//     process.env.JWT_KEY
    
//     try{

//         const appointment = await Appointment.findAll();

//         return res.json(appointment);

//     }catch(error){

//     return res.status(500).send(error.message)
//     }
// };

appointmentController.getAppointmentById = async (req, res) => {

    try{

        const appointmentId = req.params.id;

        const appointment = await Appointment.findByPk(appointmentId,{
            include: {all:true}
        })

        return res.json(appointment);

    }catch(error){
        return res.status(500).send(error.message)
    }
};

appointmentController.putAppointmentById = async (req, res) =>{

    try{

        const appointmentId = req.params.id

        const {hour,status,observations,date} = req.body;

        const updateAppointment = await Appointment.update({hour:hour,status:status,observations:observations,date:date}, {where:{id:appointmentId}})

        return res.json(updateAppointment)

    }catch(error){

        return res.status(500).send(error.message)
    }
};

appointmentController.deleteAppointmentById = async(req, res) => {

    try{

        const appointmentId = req.params.id
    
        const deleteAppointment = await Appointment.destroy({where: { id: appointmentId}})

        return res.json(deleteAppointment);

    }catch(error){

        return res.status(500).send(error.message)
    }
};



module.exports =  appointmentController