import patientService from '../services/patientService'

let createAppointment = async (req, res) => {
    try {
        let data = await patientService.createAppointmentService(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}//verifyBooking
let verifyBooking = async (req, res) => {
    try {
        let data = await patientService.verifyBookingService(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
module.exports = {
    createAppointment, verifyBooking
}