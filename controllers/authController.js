const { User } = require ("../models/");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authController = {}

//Function for users login

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({where: {email: email}});

        //if this user does not exist, it exits
        if(!user) {
            return res.send('Wrong Credentials')
        }
        
        //if the user exists, compare the token of the passwords
        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.send('Wrong Credentials')
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                rolId: user.rol_id,
                username: user.username,
            },

        //the token will have a duration of 2 hours
            'secreto',
            { expiresIn: '2h'}
        );

        //if the users login correctly, the token is displayed.
        return res.json(
            {
                success: true,
                message: "Login successfully",
                token: token
            }
        )

    } catch (error) {
        return res.status(500).send(error.message)
    }
};




module.exports = authController