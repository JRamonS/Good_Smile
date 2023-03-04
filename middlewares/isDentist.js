const jwt = require('jsonwebtoken');
const isDentist = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.send('Invalid token');
        }
        const [strategy, token] = authorization.split(" ");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.rolId = decoded.rolId;
        req.email = decoded.email
        if (req.rolId !==2 ){
            return res.send('You dont have enough power')
        }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = isDentist;





// const { Dentist } = require("../models");

// const isDentist = async (req, res, next) => {
//   try {
//     const dentist = await Dentist.findOne({
//       where: { userId: req.userId },
//     });

//     if (!Dentist) {
//       return res.status(500).json({
//         success: true,
//         message: "You don't have permissions.",
//       });
//     }

//     req.dentistId = dentist.id;

//     next();

// } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

// module.exports = isDentist;