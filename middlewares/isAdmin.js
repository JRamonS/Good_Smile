const jwt = require('jsonwebtoken');
const isAdmin = (req, res, next) => {
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
        
        if (req.rolId !==1 ){

            return res.status(500).json({
                success: true,
                message: "You don't have permissions.",
              });
            // return res.send('You dont have enough power')
        }

        next();

    } catch (error) {
        
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error.message,
        });
    }
}
module.exports = isAdmin;