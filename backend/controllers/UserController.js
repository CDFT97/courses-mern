// import { User } from '../models/users';
import { request, response } from 'express';

export default class UserController {

  static async signUp(req = request, res = response) {

    return res.json({ message: 'Hello World!' });
  }
    
}




