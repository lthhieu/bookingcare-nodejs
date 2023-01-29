import db from '../db/models/index'
import * as utils from '../utils'
import dotenv from 'dotenv'
dotenv.config()
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE
let fetchDoctorHomeService = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                limit,
                order: [['updatedAt', 'DESC']],
                attributes: { exclude: ['password'] },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'roleData', attributes: ['valueVi', 'valueEn'] }
                ],
                raw: false,
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

let getNameAllDoctorsService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = data.id
            if (!id) {
                let data = await db.User.findAll({
                    where: { roleId: 'R2' },
                    order: [['lNameEn', 'ASC']],
                    attributes: ['fNameVi', 'lNameVi', 'fNameEn', 'lNameEn', 'id'],
                })
                if (!data) data = []
                resolve({
                    errCode: '0',
                    data
                })
            } else {
                let data = await db.User.findOne({
                    where: { id },
                    attributes: ['fNameVi', 'lNameVi', 'fNameEn', 'lNameEn', 'id']
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
let createOrUpdateDoctorInfoService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { doctorId, contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn, action, nameClinicVi, nameClinicEn, addressClinicVi, addressClinicEn, noteVi, noteEn, priceId, paymentId, provinceId, specialtyId, clinicId } = data
            let arr = [doctorId, contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn, action, nameClinicVi, nameClinicEn, addressClinicVi, addressClinicEn, noteVi, noteEn, priceId, paymentId, provinceId, specialtyId, clinicId]
            if (!utils.Func.isValid(arr)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                //upsert to posts table
                if (action === utils.CRUD.CREATE) {
                    await db.Post.create({ contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn, doctorId })
                    await db.Doctor_Info.create({ doctorId, priceId, provinceId, paymentId, nameClinicVi, nameClinicEn, addressClinicVi, addressClinicEn, noteVi, noteEn })
                    await db.Doctor_Clinic_Specialty.create({ doctorId, specialtyId })
                    resolve({
                        errCode: '0',
                        msg: utils.ALERTS.CREATE
                    })
                } else if (action === utils.CRUD.UPDATE) {
                    let post = await db.Post.findOne({ where: { doctorId } })
                    let doctor_info = await db.Doctor_Info.findOne({ where: { doctorId } })
                    let doctor_clinic_specialty = await db.Doctor_Clinic_Specialty.findOne({ where: { doctorId } })
                    if (!post) {
                        resolve({
                            errCode: '1',
                            msg: 'Cannot found this post and doctor_info'
                        })
                    } else {
                        await db.Post.update(
                            { contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn }, {
                            where: { doctorId }
                        })
                        if (!doctor_info) {
                            await db.Doctor_Info.create({ doctorId, priceId, provinceId, paymentId, nameClinicVi, nameClinicEn, addressClinicVi, addressClinicEn, noteVi, noteEn })
                        } else {
                            await db.Doctor_Info.update(
                                { priceId, provinceId, paymentId, nameClinicVi, nameClinicEn, addressClinicVi, addressClinicEn, noteVi, noteEn }, {
                                where: { doctorId }
                            })
                        }
                        if (!doctor_clinic_specialty) {
                            await db.Doctor_Clinic_Specialty.create({ doctorId, specialtyId })
                        } else {
                            await db.Doctor_Clinic_Specialty.update({ specialtyId }, {
                                where: { doctorId }
                            })
                        }
                        resolve({
                            errCode: '0',
                            msg: utils.ALERTS.UPDATE
                        })
                    }
                }
            }
        } catch (e) { reject(e) }
    })
}
let fetchDoctorDetailService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctorId = data.doctorId
            if (!doctorId) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let data = await db.Post.findOne({
                    where: { doctorId },
                    attributes: ['contentHtmlVi', 'contentHtmlEn']
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
let fetchDoctorProfileService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = data.id
            if (!id) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let data = await db.User.findOne({
                    where: { id },
                    attributes: ['fNameVi', 'fNameEn', 'lNameVi', 'lNameEn', 'image', 'positionId'],
                    include: [{ model: db.Post, as: 'userPostData', attributes: ['descriptionVi', 'descriptionEn'] },
                    { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                    {
                        model: db.Doctor_Info, as: 'doctorInfoData', attributes: ['provinceId'], include: [{
                            model: db.Allcode, as: 'provinceData', attributes: ['valueEn', 'valueVi']
                        }]
                    }],
                    raw: false,
                    nest: true
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
let fetchDoctorInfoService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctorId = data.doctorId
            if (!doctorId) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let data = await db.Doctor_Info.findOne({
                    where: { doctorId },
                    attributes: ['priceId', 'provinceId', 'paymentId', 'nameClinicVi', 'nameClinicEn', 'addressClinicVi', 'addressClinicEn', 'noteVi', 'noteEn'],
                    include: [
                        { model: db.Allcode, as: 'priceDoctorData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'provinceData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'paymentData', attributes: ['valueEn', 'valueVi'] }
                    ],
                    raw: false,
                    nest: true
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
let fetchDoctorDetailInfoByIDService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = data.id
            if (!id) {
                resolve({
                    errCode: '1',
                    msg: 'Cannot found ID'
                })
            } else {
                let data = await db.User.findOne({
                    where: { id },
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: db.Doctor_Clinic_Specialty, as: 'doctorData', attributes: ['specialtyId']
                        },
                        //1 api: get contentHtmlVi, contentHtmlEn
                        { model: db.Post, as: 'userPostData', attributes: ['contentHtmlVi', 'contentHtmlEn', 'descriptionVi', 'descriptionEn', 'contentMarkDownVi', 'contentMarkDownEn'] },
                        //1 api: get contentHtmlVi, contentHtmlEn
                        { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                        {
                            //1 api: get priceVi,priceEn, addressVi,addressEn, nameclinicVi,nameclinicEn,noteVi,noveEn
                            model: db.Doctor_Info, as: 'doctorInfoData', attributes: ['priceId', 'provinceId', 'paymentId', 'nameClinicVi', 'nameClinicEn', 'addressClinicVi', 'addressClinicEn', 'noteVi', 'noteEn']

                            //1 api: get priceVi,priceEn, addressVi,addressEn, nameclinicVi,nameclinicEn,noteVi,noveEn
                        }
                    ],
                    raw: false,
                    nest: true
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
let bulkCreateScheduleService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!(data.schedule && data.doctorId && data.date)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let { schedule, doctorId, date } = data
                if (schedule.length > 0) {
                    schedule.forEach((item) => {
                        item.maxNo = MAX_NUMBER_SCHEDULE
                    })
                }
                let existData = await db.Schedule.findAll({
                    where: { doctorId, date },
                    attributes: ['MaxNo', 'date', 'time', 'doctorId']
                })
                // let result = _.differenceWith(schedule, existData, (a, b) => {
                //     return a.date === b.date && a.time === b.time
                // })
                let result = schedule.filter(o1 => !existData.some(o2 => o1.date === o2.date && o1.time === o2.time))

                await db.Schedule.bulkCreate(result)
                resolve({
                    errCode: '0',
                    msg: utils.ALERTS.CREATE
                })
            }

        } catch (e) { reject(e) }
    })
}
let fetchDoctorScheduleService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctorId = data.doctorId
            let date = data.date
            if (!(doctorId && date)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let data = await db.Schedule.findAll({
                    where: { doctorId, date },
                    attributes: ['curNo', 'maxNo', 'date', 'time'],
                    include: [
                        { model: db.Allcode, as: 'timeScheduleData', attributes: ['valueEn', 'valueVi'] },
                        {
                            model: db.User, as: 'userScheduleDoctorIdData', attributes: ['fNameVi', 'fNameEn', 'lNameVi', 'lNameEn'],
                            include: [{
                                model: db.Doctor_Info, as: 'doctorInfoData', attributes: ['priceId'], include: [
                                    { model: db.Allcode, as: 'priceDoctorData', attributes: ['valueEn', 'valueVi'] }
                                ]
                            }]
                        }
                    ],
                    raw: false,
                    nest: true
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

module.exports = {
    fetchDoctorHomeService, getNameAllDoctorsService, createOrUpdateDoctorInfoService,
    fetchDoctorDetailInfoByIDService, bulkCreateScheduleService, fetchDoctorScheduleService,
    fetchDoctorInfoService, fetchDoctorDetailService, fetchDoctorProfileService
}