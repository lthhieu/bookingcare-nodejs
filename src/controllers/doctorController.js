import doctorService from '../services/doctorService'

let fetchDoctor = async (req, res) => {
    let limit = req.query.limit
    if (!limit) limit = 10
    try {
        let data = await doctorService.fetchDoctorService(+limit)
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
    fetchDoctor
}