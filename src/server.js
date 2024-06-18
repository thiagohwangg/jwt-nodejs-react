import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors"
require("dotenv").config();
// import connection from "./config/connectDB.js"
import {createJWT, verifyToken} from "./middleware/JWTAction"

const app = express();
const PORT = process.env.PORT || 8080;

// config cors
configCors(app);
// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection db
// connection()

// test jwt
createJWT()
let decodedData = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGhpZW4iLCJhZGRyZXNzIjoiaGNtIiwiaWF0IjoxNzE4NzI1NDE5fQ.3K63w7Y-MRkQB1TABxVX1-olTP31Zx6eIoSZCJGoMhk')
console.log("decodedData: ", decodedData);

// init web routes
initWebRoutes(app);
initApiRoutes(app);
app.listen(PORT, () => {
    console.log('JWT Backend is running on the port = '+PORT);
})