import bcrypt from 'bcryptjs'
import db from '../db/models/index'
const salt = bcrypt.genSaltSync(10)

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashUserPassword = await hashPassword(data.password)
            db.User.create({
                fNameVi: data.fName,
                fNameEn: data.fName,
                lNameVi: data.lName,
                lNameEn: data.lName,
                email: data.email,
                password: hashUserPassword,
                addressVi: data.address,
                addressEn: data.address,
                phoneNo: data.phoneNo,
                gender: data.gender === 1 ? true : false,
                roleId: data.roleId
            })
            resolve('successfully created!')
        } catch (e) { reject(e) }
    })

}
let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt)
            resolve(hash)
        } catch (e) { reject(e) }
    })
}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({ raw: true })
            resolve(users)
        } catch (e) { reject(e) }
    })
}
let getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id }, raw: true })
            if (user) { resolve(user) }
            else { resolve('id is not exist in database') }
        } catch (e) { reject(e) }
    })
}
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({ fNameVi: data.fName, lNameVi: data.lName, addressVi: data.address }, {
                where: {
                    id: data.id
                }
            })
            let allUsers = await getAllUser()
            resolve(allUsers)
        } catch (e) { reject(e) }
    })
}
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({ where: { id: id } })
            let allUsers = await getAllUser()
            resolve(allUsers)
        } catch (e) { reject(e) }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser
}