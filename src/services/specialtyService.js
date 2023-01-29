import db from '../db/models/index'
let createSpecialtyService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!(data.contentMarkDownEn && data.contentMarkDownVi && data.nameVi && data.nameEn)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let { contentHtmlEn, contentHtmlVi, contentMarkDownEn, contentMarkDownVi, image, nameVi, nameEn } = data
                await db.Specialty.create({ contentHtmlEn, contentHtmlVi, contentMarkDownEn, contentMarkDownVi, image, nameVi, nameEn })
                resolve({
                    errCode: '0',
                    msg: 'Save patient info successfully'
                })
            }
        } catch (e) { reject(e) }
    })
}
let fetchSpecialtyHomeService = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll({
                limit,
                order: [['updatedAt', 'DESC']]
            })
            if (!data) data = []
            resolve({
                errCode: '0',
                msg: 'Fetch Specialties Successfully',
                data
            })
        } catch (e) { reject(e) }
    })
}
let fetchAllNameSpecialtiesService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = data.id
            if (!id) {
                let data = await db.Specialty.findAll({
                    attributes: ['nameVi', 'nameEn', 'id']
                })
                if (!data) data = []
                resolve({
                    errCode: '0',
                    data
                })
            } else {
                let data = await db.Specialty.findOne({
                    where: { id },
                    attributes: ['nameVi', 'nameEn', 'id']
                })
                if (!data) data = []
                resolve({
                    errCode: '0',
                    data
                })
            }
        } catch (e) { reject(e) }
    })
}
let fetchSpecialtyDetailService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = data.id
            let location = data.location
            if (!id || !location) {
                resolve({
                    errCode: '1',
                    errMsg: 'Missing params'
                })
            } else {
                let data = await db.Specialty.findOne({
                    where: { id },
                    attributes: ['nameVi', 'nameEn', 'id', 'contentHtmlEn', 'contentHtmlVi', 'image']
                })
                if (!data) { data = [] }
                else {
                    let DoctorsId = await db.Doctor_Clinic_Specialty.findAll({
                        where: { specialtyId: data.id },
                        attributes: ['doctorId']
                    })
                    if (!DoctorsId) { DoctorsId = [] }
                    else {
                        let arrDoctorId = DoctorsId.map(({ doctorId }) => doctorId)
                        if (location === 'ALL') {
                            resolve({
                                errCode: '0',
                                data, arrDoctorId
                            })
                        } else {
                            //find by location
                            let arr = []
                            for (let i = 0; i < arrDoctorId.length; i++) {
                                let arrDoctorIdByLocation = await db.Doctor_Info.findOne({
                                    where: { doctorId: arrDoctorId[i], provinceId: location },
                                    attributes: ['doctorId']
                                })
                                arr.push(arrDoctorIdByLocation)
                            }

                            if (arr && arr.length > 0) {
                                arrDoctorId = arr.filter(val => val).map(val => val.doctorId)
                            }
                            resolve({
                                errCode: '0',
                                data, arrDoctorId
                            })
                        }
                    }
                    resolve({ errCode: '0', data })
                }
                resolve({ errCode: '0', data })
            }
        } catch (e) { reject(e) }
    })
}
module.exports = {
    createSpecialtyService, fetchSpecialtyHomeService, fetchAllNameSpecialtiesService,
    fetchSpecialtyDetailService
}