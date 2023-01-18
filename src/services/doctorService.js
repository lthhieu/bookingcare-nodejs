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

let getNameAllDoctorsService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                order: [['lNameEn', 'ASC']],
                attributes: { exclude: ['password', 'image'] },
            })
            resolve({
                errCode: '0',
                data: doctors
            })
        } catch (e) { reject(e) }
    })
}
let createOrUpdateDoctorInfoService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { doctorId, contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn, action } = data
            if (!(doctorId || contentHtmlVi || contentHtmlEn || contentMarkDownVi || contentMarkDownEn || action)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                if (action === utils.CRUD.CREATE) {
                    await db.Post.create({ contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn, doctorId })
                    resolve({
                        errCode: '0',
                        msg: utils.ALERTS.CREATE
                    })
                } else if (action === utils.CRUD.UPDATE) {
                    let post = await db.Post.findOne({ where: { doctorId } })
                    if (!post) {
                        resolve({
                            errCode: '1',
                            msg: 'Cannot found this post'
                        })
                    } else {
                        await db.Post.update(
                            { contentHtmlVi, contentHtmlEn, descriptionVi, descriptionEn, contentMarkDownVi, contentMarkDownEn }, {
                            where: { doctorId }
                        })
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
                let res = await db.User.findOne({
                    where: { id },
                    attributes: { exclude: ['password'] },
                    include: [
                        { model: db.Post, as: 'userPostData', attributes: ['contentHtmlVi', 'contentHtmlEn', 'descriptionVi', 'descriptionEn', 'contentMarkDownVi', 'contentMarkDownEn'] },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] }
                    ],
                    raw: false,
                    nest: true
                })
                resolve({
                    errCode: '0',
                    data: res
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
module.exports = {
    fetchDoctorHomeService, getNameAllDoctorsService, createOrUpdateDoctorInfoService,
    fetchDoctorDetailInfoByIDService, bulkCreateScheduleService
}