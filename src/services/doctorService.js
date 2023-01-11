import db from '../db/models/index'

let fetchDoctorService = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                limit: limit,
                order: [['updatedAt', 'DESC']],
                attributes: { exclude: ['password'] },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'roleData', attributes: ['valueVi', 'valueEn'] }
                ],
                raw: true,
                nest: true
            })
            resolve({
                errCode: '0',
                msg: 'Fetch Doctors Successfully',
                data: doctors
            })
        } catch (e) { reject(e) }
    })
}

module.exports = {
    fetchDoctorService
}