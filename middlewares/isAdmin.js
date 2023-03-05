const jwt = require('jsonwebtoken');
const isAdmin = (req, res, next) => {
    try {

        const authorization = req.headers.authorization;
        if (!authorization) {

            return res.send('Invalid token');
        }
        //Separate the token from the bearer
        const [strategy, token] = authorization.split(" ");
        //Call the token from the environment variable
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;
        req.rolId = decoded.rolId;
        req.email = decoded.email
        //if the user_id is not 1, you are not a admin and you will not be able to login
        if (req.rolId !==1 ){

            return res.status(500).json({
                success: true,
                message: "You don't have permissions.",
              });
        }
        next();
        //Pick up the possible error
    } catch (error) {
        
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error.message,
        });
    }
}
module.exports = isAdmin;