import specialtyService from '../services/specialtyService'

let createSpecialty = async (req, res) => {
    try {
        let data = await specialtyService.createSpecialtyService(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchSpecialtyHome = async (req, res) => {
    let limit = req.query.limit
    if (!limit) limit = 30
    try {
        let data = await specialtyService.fetchSpecialtyHomeService(+limit)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchAllNameSpecialties = async (req, res) => {
    try {
        let data = await specialtyService.fetchAllNameSpecialtiesService(req.query)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server..'
        })
    }
}
let fetchSpecialtyDetail = async (req, res) => {
    try {
        let data = await specialtyService.fetchSpecialtyDetailService(req.query)
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
    createSpecialty, fetchSpecialtyHome, fetchAllNameSpecialties, fetchSpecialtyDetail
}