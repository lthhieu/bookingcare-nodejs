
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
import * as utils from '../utils'
let sendSimpleEmail = async (data) => {
    let { email } = data
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.MAIL_APP_PASSWORD, // generated ethereal password
        }
    })

    // send mail with defined transport object
    await transporter.sendMail({
        from: `"BookingCare 👻" <${process.env.EMAIL_APP}>`, // sender address
        to: email, // list of receivers
        subject: subjectMail(data), // Subject line
        html: bodyHtml(data), // html body
    });

}
let subjectMail = (data) => {
    let { language } = data
    let subject = ''
    if (language === utils.LANGUAGES.VI) {
        subject = "XÁC NHẬN ĐẶT LỊCH KHÁM BỆNH ✔"
    } else if (language === utils.LANGUAGES.EN) {
        subject = "CONFIRMED BOOKING MEDICAL APPOINTMENT ✔"
    }
    return subject
}

let bodyHtml = (data) => {

    let { link, fullName, reason, dateTimeBooking, language, address, phoneNo, birthday, nameBooking, priceBooking } = data
    let body = ''
    if (language === utils.LANGUAGES.VI) {
        body = `<div style="background-color:#f6f6f6;padding:10px 20px">
        <div><p>Xin chào <strong>${fullName}</strong>,</p>
        <p>Địa chỉ: <span style="font-weight:600;">${address}</span></p>
        <p>Số điện thoại: <span style="font-weight:600;">${phoneNo}</span></p>
        <p>Ngày sinh: <span style="font-weight:600;">${birthday}</span></p>
        <p>Email này được gửi để xác nhận rằng bạn vừa đặt một <span style="color:#15c;text-transform:uppercase;font-weight:600;">lịch hẹn khám bệnh</span> với nội dung cụ thể như sau:</p>
        <p>Thời gian: <span style="font-weight:600;">${dateTimeBooking}</span></p>
        <p>Bác sĩ: <span style="font-weight:600;">${nameBooking}</span></p>
        <p>Phí: <span style="font-weight:600;">${priceBooking}</span></p>
        <p>Lý do: <span style="font-weight:600;">${reason}</span></p>
        <p>Nếu thông tin trên là đúng sự thật. Vui lòng nhấn vào đường link bên dưới để hoàn toàn thủ tục đặt lịch khám bệnh</p>
        <a href="${link}" target="_blank" style="text-decoration:none;">Nhấn vào đây</a>
        <p style="color:red;font-weight:600;">Email này được gửi tự động, vui lòng không phản hồi email này.</p>
        <p>Trân trọng</p></div>
        </div>
        `
    } else if (language === utils.LANGUAGES.EN) {
        body = `<div style="background-color:#f6f6f6;padding:10px 20px">
        <div><p>Dear <strong>${fullName}</strong>,</p>
        <p>Address: <span style="font-weight:600;">${address}</span></p>
        <p>Phone number: <span style="font-weight:600;">${phoneNo}</span></p>
        <p>Birthday: <span style="font-weight:600;">${birthday}</span></p>
        <p>This email was sent to confirm that you have just booked a <span style="color:#15c;text-transform:uppercase;font-weight:600;">medical appointment</span> with the following specific content:</p>
        <p>Time: <span style="font-weight:600;">${dateTimeBooking}</span></p>
        <p>Doctor: <span style="font-weight:600;">${nameBooking}</span></p>
        <p>Fee: <span style="font-weight:600;">${priceBooking}</span></p>
        <p>Reason: <span style="font-weight:600;">${reason}</span></p>
        <p>If the above information is correct. Please click on the link below to complete the procedure to book an appointment</p>
        <a href="${link}" target="_blank" style="text-decoration:none;">Click here</a>
        <p style="color:red;font-weight:600;">This email is sent automatically, please do not reply to this email.</p>
        <p>Best regards</p></div>
        </div>
        `
    }
    return body
}
module.exports = {
    sendSimpleEmail
}