import db from '../db/models/index'
import mailService from './mailService'
import dotenv from 'dotenv'
dotenv.config()
import { v4 as uuidv4 } from 'uuid'
let buildVerifyLink = (doctorId, token) => {
    return token = `${process.env.REACT_URL}/verify-booking?token=${token}&doctorId=${doctorId}`
}
let createAppointmentService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!(data.email && data.doctorId && data.fullName && data.reason && data.time && data.date && data.phoneNo && data.language)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let token = uuidv4()
                let { email, doctorId, time, date, fullName, reason, dateTimeBooking, language, address, phoneNo, genderId, birthday, nameBooking, priceBooking } = data
                let link = buildVerifyLink(doctorId, token)

                //upsert user role patient
                let [user, createdUser] = await db.User.findOrCreate({
                    where: { email },
                    attributes: ['id'],
                    defaults: {
                        email, roleId: 'R3', genderId
                    }
                })
                //create a booking record
                if (user) {
                    let [booking, createdBooking] = await db.Booking.findOrCreate({
                        where: { patientId: user.id, date, time },
                        defaults: {
                            date, time, statusId: "S1", doctorId, patientId: user.id, token
                        }
                    })
                    if (createdBooking) {
                        await mailService.sendSimpleEmail({
                            link, email, doctorId, time, date, fullName, reason, dateTimeBooking, language, address, phoneNo, birthday, nameBooking, priceBooking
                        })
                        resolve({
                            errCode: '0',
                            msg: 'Save patient info successfully'
                        })
                    } else {
                        resolve({
                            errCode: '1',
                            msg: 'This appointment is existed'
                        })
                    }
                }

            }

        } catch (e) { reject(e) }
    })
}
let verifyBookingService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!(data.token && data.doctorId)) {
                resolve({
                    errCode: '1',
                    msg: 'Missing params'
                })
            } else {
                let { token, doctorId } = data
                let booking = await db.Booking.findOne({
                    where: { token, doctorId, statusId: 'S1' },
                    attributes: ['statusId', 'token', 'doctorId']
                })
                setTimeout(async () => {
                    if (booking) {
                        await db.Booking.update(
                            { statusId: 'S2' }, {
                            where: { token, doctorId }
                        })
                        resolve({
                            errCode: '0',
                            msg: 'Update appointment successfully'
                        })
                    } else {
                        resolve({
                            errCode: '1',
                            msg: 'This appointment is confirmed or is not existed'
                        })
                    }
                }, 3000);
            }

        } catch (e) { reject(e) }
    })
}
module.exports = {
    createAppointmentService, verifyBookingService
}