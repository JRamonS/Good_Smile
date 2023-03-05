const { History } = require("../models");

const historyController = {};

historyController.createHistory = async (req, res) => {

    try {

        const { pacient_id, date, observation } = req.body;

        const newHistory = {
            pacient_id : pacient_id,
            date : date,
            observation : observation
        }
    

    // Guardar la informacion
        const history = await History.create(newHistory)

        return res.json(history)

    }catch(error){

    return res.status(500).send(error.message)
    }
};

historyController.getHistorytById = async (req, res) => {

    try{

    const historyId = req.params.id;

    const history = await History.findByPk(historyId, {
        include: {all:true}
    })

    return res.json(history);

    }catch(error){
        return res.status(500).send(error.message)
    }
};

historyController.putHistoryById = async (req, res) =>{

    try{

        const historyId = req.params.id

        const {pacient_id,observation,date} = req.body;

        const updateHistory = await History.update({  pacient_id : pacient_id,
            date : date,
            observation : observation}, {where:{id:historyId}})

        return res.json(updateHistory)

    }catch(error){

        return res.status(500).send(error.message)
    }

}



module.exports =  historyController