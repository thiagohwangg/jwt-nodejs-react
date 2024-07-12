import express from "express";
import apiController from "../controllers/apiController"
import userController from "../controllers/userController"
import groupController from "../controllers/groupController"
import roleController from "../controllers/roleController"
import {checkUserJWT, checkUserPermission} from "../middleware/JWTAction"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */

const initApiRoutes = (app) => {

    router.all('*', checkUserJWT, checkUserPermission,)

    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)
    router.post("/logout", apiController.handleLogout)

    router.get("/account", userController.getUserAccount)

    // user routes
    router.get('/users/read', userController.readFunc)
    router.post('/users/create', userController.createFunc)
    router.put('/users/update', userController.updateFunc)
    router.delete('/users/delete', userController.deleteFunc)

    // roles routes
    router.get('/role/read', roleController.readFunc)
    router.post('/role/create', roleController.createFunc)
    router.put('/role/update', roleController.updateFunc)
    router.delete('/role/delete', roleController.deleteFunc)
    router.get('/role/by-group/:groupId', roleController.getRoleByGroup)


    // group routes
    router.get('/group/read', groupController.readFunc)


    return app.use("/api/v1", router)
}

export default initApiRoutes;