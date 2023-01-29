import express from 'express'
import homeController from '../controllers/homeController'
import userController from '../controllers/userController'
import doctorController from '../controllers/doctorController'
import patientController from '../controllers/patientController'
import specialtyController from '../controllers/specialtyController'

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

    router.get('/api/fetch-doctor-home', doctorController.fetchDoctorHome)
    router.get('/api/get-name-all-doctors', doctorController.getNameAllDoctors)
    router.post('/api/create-or-update-doctor-info', doctorController.createOrUpdateDoctorInfo)
    router.get('/api/fetch-doctor-detail-info-by-id', doctorController.fetchDoctorDetailInfoByID)
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule)

    router.get('/api/fetch-doctor-schedule', doctorController.fetchDoctorSchedule)
    router.get('/api/fetch-doctor-info', doctorController.fetchDoctorInfo)
    router.get('/api/fetch-doctor-detail', doctorController.fetchDoctorDetail)
    router.get('/api/fetch-doctor-profile', doctorController.fetchDoctorProfile)

    router.post('/api/create-appointment', patientController.createAppointment)
    router.post('/api/verify-booking', patientController.verifyBooking)

    router.post('/api/create-specialty', specialtyController.createSpecialty)
    router.get('/api/fetch-specialty-home', specialtyController.fetchSpecialtyHome)
    router.get('/api/fetch-all-name-specialties', specialtyController.fetchAllNameSpecialties)
    router.get('/api/fetch-specialty-detail', specialtyController.fetchSpecialtyDetail)


    return app.use('/', router)
}
module.exports = initWebRoutes