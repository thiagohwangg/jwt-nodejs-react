import express from "express";
import homeController from "../controllers/homeController"
import apiController from "../controllers/apiController"

const router = express.Router();

/**
 * 
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get('/user', homeController.handleUserPage)
    router.post('/users/create-user', homeController.handleCreateNewUser)
    router.post('/delete-user/:id',homeController.handleDeleteUse)
    router.get('/update-user/:id', homeController.getUpdateUserPage)
    router.post('/users/update-user', homeController.handleUpdateUser)

    router.get("/api/test-api", apiController.testApi)
    return app.use("/", router)
}

export default initWebRoutes;