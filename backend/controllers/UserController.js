import { User } from '../models/users.js';
import { request, response } from 'express';

export default class UserController {

  static async signUp(req = request, res = response) {

    return res.json({ message: 'Hello World!' });
  }
    
}




