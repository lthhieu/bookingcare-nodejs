import doctorService from '../services/doctorService'

let fetchDoctorHome = async (req, res) => {
    let limit = req.query.limit
    if (!limit) limit = 30
    try {
        let data = await doctorService.fetchDoctorHomeService(+limit)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}

let getNameAllDoctors = async (req, res) => {
    try {
        let data = await doctorService.getNameAllDoctorsService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let createOrUpdateDoctorInfo = async (req, res) => {
    try {
        let data = await doctorService.createOrUpdateDoctorInfoService(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchDoctorDetail = async (req, res) => {
    try {
        let data = await doctorService.fetchDoctorDetailService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchDoctorProfile = async (req, res) => {
    try {
        let data = await doctorService.fetchDoctorProfileService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchDoctorDetailInfoByID = async (req, res) => {
    try {
        let data = await doctorService.fetchDoctorDetailInfoByIDService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let bulkCreateSchedule = async (req, res) => {
    try {
        let data = await doctorService.bulkCreateScheduleService(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchDoctorSchedule = async (req, res) => {
    try {
        let data = await doctorService.fetchDoctorScheduleService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchDoctorInfo = async (req, res) => {
    try {
        let data = await doctorService.fetchDoctorInfoService(req.query)
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
    fetchDoctorHome, getNameAllDoctors, createOrUpdateDoctorInfo, fetchDoctorDetailInfoByID,
    bulkCreateSchedule, fetchDoctorSchedule, fetchDoctorInfo, fetchDoctorDetail, fetchDoctorProfile
}