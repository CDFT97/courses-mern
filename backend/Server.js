import express, { json } from "express";
import cors from "cors";
import { dbConnection } from "./database/config.js";
import userRoutes from "./routes/users.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

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
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port:", this.port);
    });
  }
}

export default Server;