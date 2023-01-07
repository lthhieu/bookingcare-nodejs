import db from '../db/models/index'
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt)
            resolve(hash)
        } catch (e) { reject(e) }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            let isExist = await checkUserEmail(email)
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email },
                    attributes: ['email', 'roleId', 'password', 'fNameVi', 'lNameVi', 'fNameEn', 'lNameEn']
                })
                if (user) {
                    let checkPassword = bcrypt.compareSync(password, user.password)
                    if (checkPassword) {
                        data.errCode = '0'
                        data.msg = 'Login Successfully'
                        delete user.password
                        data.user = user
                    } else {
                        data.errCode = '1'
                        data.msg = 'Password is not correct'
                    }
                } else {
                    data.errCode = '1'
                    data.msg = 'Email is not exist in database'
                }

            } else {
                data.errCode = '1'
                data.msg = 'Email is not exist in database'
            }
            resolve(data)
        } catch (e) { reject(e) }
    })
}
let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email }
            })
            if (user) resolve(true)
            else resolve(false)
        } catch (e) { reject(e) }
    })
}
let getAllUsersOrSingleUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (id === 'ALL') {
                users = await db.User.findAll({
                    attributes: { exclude: ['password'] }
                })
            } else if (id) {
                users = await db.User.findOne({
                    where: { id }
                })
            }
            resolve(users)
        } catch (e) { reject(e) }
    })
}
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { fNameVi, fNameEn, lNameVi, lNameEn, email, password, addressVi, addressEn, phoneNo, gender, roleId, positionId, image } = data
            let checkEmail = await checkUserEmail(email)
            if (checkEmail) {
                resolve({
                    errCode: '1',
                    msg: 'This email is already existed'
                })
            } else {
                let hashUserPassword = await hashPassword(password)
                await db.User.create({ fNameVi, fNameEn, lNameVi, lNameEn, email, password: hashUserPassword, addressVi, addressEn, phoneNo, gender, roleId, positionId, image })
                resolve({
                    errCode: '0',
                    msg: 'Created successfully'
                })
            }
        } catch (e) { reject(e) }
    })
}
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id }, raw: false })
            if (!user) {
                resolve({
                    errCode: '1',
                    msg: 'Cannot find this user'
                })
            }
            await user.destroy()
            resolve({
                errCode: '0',
                msg: 'Deleted successfully'
            })
        } catch (e) { reject(e) }
    })
}
let search = (emailKey, myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].email === emailKey) {
            return true
        }
    }
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { id, fNameVi, fNameEn, lNameVi, lNameEn, email, addressVi, addressEn, phoneNo, gender, roleId, positionId } = data
            if (!id) {
                resolve({
                    errCode: '1',
                    msg: 'Please provide ID'
                })
            }
            let user = await db.User.findOne({ where: { id } })
            if (!user) {
                resolve({
                    errCode: '1',
                    msg: 'Cannot find this user'
                })
            } else {
                let emails = await db.User.findAll({ attributes: ['email'] })
                if (email === user.email || !search(email, emails)) {
                    await db.User.update(
                        { fNameVi, fNameEn, lNameVi, lNameEn, email, addressVi, addressEn, phoneNo, gender, roleId, positionId }, {
                        where: { id }
                    })
                    resolve({
                        errCode: '0',
                        msg: 'Updated successfully'
                    })
                } else {
                    resolve({
                        errCode: '1',
                        msg: 'This email is used'
                    })
                }
            }
        } catch (e) { reject(e) }
    })
}
let getAllcode = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {}
            if (!type) {
                res.errCode = '1'
                res.msg = 'Missing param'
            } else {
                let data = await db.Allcode.findAll({
                    where: { type }
                })
                res.errCode = '0'
                res.data = data
            }

            resolve(res)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin,
    getAllUsersOrSingleUser,
    createNewUser,
    deleteUser,
    updateUser,
    getAllcode
}