const joi = require("joi");

const authSchema = () => {
  return joi.object({
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }),

    password: joi
      .string()
      .min(6)
      .max(50)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),
  });
};

const checkSignupData = (req, res, next) => {
  const { error } = authSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.error(error.details[0]);

    if (error.details[0].type === "string.min") {
      res.status(400).json({
        msg: "Le mot de passe doit contenir entre 6 et 50 caractères, uniquement en minuscule, majuscule ou nombres.",
      });
    } else if (error.details[0].type === "string.email") {
      res.status(400).json({ msg: "L'email est invalide" });
    } else {
      res.status(400).json({ msg: "Email ou mot de passe invalide" });
    }
  } else {
    next();
  }
};

module.exports = {
  checkSignupData,
};
