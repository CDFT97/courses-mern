// app/requests/userStoreRequest.js
import { body } from "express-validator";
import { User } from "../models/users.js";
import { validateRequest } from "../middlewares/index.js";

const rules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail()
    .custom(async (email) => {
      const userExists = await User.findOne({ email });
      if (userExists) throw new Error("El email ya está registrado");
    }),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/)
    .withMessage("Debe contener al menos una mayúscula")
    .matches(/[0-9]/)
    .withMessage("Debe contener al menos un número"),

  body("password_confirmation")
    .notEmpty()
    .withMessage("La confirmación de contraseña es obligatoria")
    .custom((value, { req }) => {
      if (value !== req.body.password)
        throw new Error("Las contraseñas no coinciden");
      return true;
    }),
];

export const userStoreRequest = validateRequest(rules);
