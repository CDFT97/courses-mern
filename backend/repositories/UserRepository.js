import BaseRepository from "./BaseRepository.js";
import { User } from "../models/users.js";
import bcrypt from "bcryptjs"; 

class UserRepository extends BaseRepository {
  
  static {
    // Configurar el modelo para la clase base
    super.setModel(User);
  }

  static async getActiveUsers() {
    return this.findMany({ isActive: true });
  }

  static async createUserWithHashedPassword(userData) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userData.password, salt);

    return this.create({
      ...userData,
      password: hashedPassword,
    });
  }
}


export { UserRepository };