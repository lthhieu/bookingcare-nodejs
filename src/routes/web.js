import express from 'express'
import homeController from '../controllers/homeController'
import userController from '../controllers/userController'

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.index)
    router.get('/about', homeController.about)
    router.get('/crud', homeController.crud)

    router.post('/post-crud', homeController.postCrud)
    router.get('/get-crud', homeController.getCrud)
    router.get('/edit-crud', homeController.editCrud)
    router.post('/put-crud', homeController.putCrud)
    router.get('/delete-crud', homeController.deleteCrud)

    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUsers)
    router.post('/api/create-new-users', userController.handleCreateNewUser)
    router.put('/api/update-users', userController.handleUpdateUser)
    router.delete('/api/delete-users', userController.handleDeleteUser)

    router.get('/api/get-all-code', userController.hanldeGetAllcode)

    return app.use('/', router)
}
module.exports = initWebRoutes