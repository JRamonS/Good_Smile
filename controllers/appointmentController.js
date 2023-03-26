const { Appointment, Treatment, Dentist, User} = require("../models");

const appointmentController = {};

//Function for appointment create

appointmentController.createAppointment = async (req, res) => {

    try {
        const {dentist_id,treatment_id,hour,status,observations,date,} = req.body;

        const newAppointment = {
            user_id : req.userId,
            dentist_id: dentist_id,
            treatment_id : treatment_id,
            hour : hour,
            status : status,
            observations : observations,
            date : date
        }
        const appointmentCreate = await Appointment.create(
            newAppointment
        )
            
        
        return res.json(
            {
                success: true,
                message: "User registered",
                data: appointmentCreate
            })

    }catch(error){

        return res.status(500).send(error.message)
    }
};

//Function to display all appointments

appointmentController.getAppointment = async (req, res) => {


const citasActivas = await Appointment.findAll({
    
    attributes: ["id",'dentist_id', "treatment_id", "hour", "status", "date"]
  });
  res.status(200).json({
    message: `These are all the appointment in the calendar`,
    citasActivas,
  });
}

//Function to display the appointment by appointment id

appointmentController.getAppointmentById = async (req, res) => {


    try{


        const appointment = await Appointment.findAll({
            where : {
                user_id : req.userId
            },
                include: [
                    Treatment,
                    {
                        model:Treatment,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                        },
                    {
                        model: Dentist,
                        attributes: {
                            exclude: ["user_id","registration_number", "createdAt", "updatedAt"]
                        },
                        
                    },
                ],
                attributes: {
                    exclude: [ "dentist_id", "treatment_id", "createdAt", "updatedAt"]
                }
        })

        return res.json(appointment);

    }catch(error){
        return res.status(500).send(error.message)
    }
};

//Function for Appointment modify 

appointmentController.putAppointmentById = async (req, res) =>{

        try {
            const change = req.body;
            const appointmentupdated = await Appointment.update(
                {
                hour: change.hour,
                status: change.status,
                observations: change.observations,
                date: change.date,
                },
                {
                where: {
                    user_id: req.userId,
                    id: change.id
                },
                }
            );

            return res.json(

                {
                    success: true,
                    message: "Appointment Updated",
                    data: appointmentupdated
                })

            }catch (error) {
            console.error(error);
            res.status(500).json({
                error: error.message,
            });
        }
    }

appointmentController.deleteAppointmentById = async(req, res) => {
    try {
        const appointmentId = req.params.id
        const deleteAppointment = await Appointment.destroy({


                where: { 
                    user_id: req.userId ,
                    id: appointmentId
                    
                },
            }
        )
        return res.json(
            {
                success: true,
                message: "Appointment Deleted",
                data: deleteAppointment
            })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports =  appointmentController