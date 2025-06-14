import { request, response } from "express";
import { User, ROLES } from "../models/users.js";
import bcrypt from "bcryptjs";

export default class UserController {
  static async signUp(req = request, res = response) {
    try {
      const { name, email, password } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "El correo electrónico ya está registrado" });
      }

      // Hash de la contraseña
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Crear nuevo usuario
      const user = new User({
        name,
        email,
        password: hashedPassword,
        role: ROLES.user,
      });

      await user.save();

      return res.status(201).json({
        message: "Usuario registrado exitosamente"
      });

    } catch (error) {
      console.error("Error en signUp:", error);

      // Error genérico de servidor
      return res.status(500).json({
        message: "Error interno del servidor",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }
}
