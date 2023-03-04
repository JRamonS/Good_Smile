const { User } = require ("../models/");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authController = {}



authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({where: {email: email}});

        if(!user) {
            return res.send('Wrong Credentials')
        }

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
            'secreto',
            { expiresIn: '2h'}
        );

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