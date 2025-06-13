import express, { json } from "express"; // <-- Solo importa express y json
import cors from "cors";
import { dbConnection } from "./database/config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Routes here:
    // this.usersRoutes = "/api/users";

    // Conectar a base de datos
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(json());

    // Directorio Público
    this.app.use(express.static("public")); // <-- Usa express.static directamente
  }

  routes() {
    // Cambia esto para usar import en lugar de require
    // import usuariosRouter from "../routes/usuarios.js";
    // this.app.use(this.usuariosPath, usuariosRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port:", this.port);
    });
  }
}

export default Server;