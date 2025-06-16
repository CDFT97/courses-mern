import { request, response } from "express";
import { ROLES } from "../models/users.js";
import { UserRepository } from "../repositories/index.js";

export default class UserController {
  
  static async signUp(req = request, res = response) {
    try {
      const { name, email, password } = req.body;

      // Verificar si el usuario ya existe
      const existingUser = await UserRepository.findOne({email});

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "El correo electrónico ya está registrado" });
      }

      await UserRepository.createUserWithHashedPassword({
        name,
        email,
        password,
        role: ROLES.user
      });

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
