const { History } = require("../models");

const historyController = {};

historyController.createHistory = async (req, res) => {

    try {

        const { date, observation } = req.body;

        const newHistory = {
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





module.exports =  historyController