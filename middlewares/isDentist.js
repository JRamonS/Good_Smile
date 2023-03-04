const { Dentist } = require("../models");

const isDentist = async (req, res, next) => {
  try {
    const dentist = await Dentist.findOne({
      where: { user_id: req.userId },
    });

    if (Dentist) {
      return res.status(500).json({
        success: true,
        message: "You don't have permissions.",
      });
    }

    req.dentistId = dentist.id;

    next();

} catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = isDentist;