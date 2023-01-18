import userService from '../services/userService'

let handleLogin = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    if (!email || !password) {
        return res.status(200).json({
            errCode: '1',
            msg: 'Missing email or password'
        })
    }
    let data = await userService.handleUserLogin(email, password)
    return res.status(200).json({
        errCode: data.errCode,
        msg: data.msg,
        data: data.user ? data.user : {}
    })
}
let handleGetAllUsers = async (req, res) => {
    let id = req.query.id // ALL, id
    if (!id) {
        return res.status(500).json({
            errCode: '1',
            msg: 'Please provide id',
            users: []
        })
    }
    let users = await userService.getAllUsersOrSingleUser(id)
    return res.status(200).json({
        errCode: '0',
        msg: 'Successfully',
        users
    })
}
let handleCreateNewUser = async (req, res) => {
    let data = req.body
    let response = await userService.createNewUser(data)
    return res.status(200).json(response)
}
let handleDeleteUser = async (req, res) => {
    let id = req.body.id
    if (!id) {
        return res.status(500).json({
            errCode: '1',
            msg: 'Missing ID'
        })
    }
    let response = await userService.deleteUser(id)
    return res.status(200).json(response)
}
let handleUpdateUser = async (req, res) => {
    let data = req.body
    let response = await userService.updateUser(data)
    return res.status(200).json(response)
}
let hanldeGetAllcode = async (req, res) => {
    try {
        let type = req.query.type
        let data = await userService.getAllcode(type)
        return res.status(200).json(data)
    } catch (e) {
        console.log('Check error GetAllcode:', e)
        return res.status(200).json({
            errCode: '-1',
            msg: 'Error from server'
        })
    }
}
module.exports = {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    handleUpdateUser,
    handleDeleteUser,
    hanldeGetAllcode
}