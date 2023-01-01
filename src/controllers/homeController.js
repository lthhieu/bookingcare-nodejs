
import db from '../db/models/index'
import CRUDService from '../services/CRUDService'
let index = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('Home.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) { console.log(e) }
}
let about = (req, res) => {
    return res.render('test/about.ejs')
}
let crud = (req, res) => {
    return res.render('crud.ejs')
}
let postCrud = async (req, res) => {
    let mess = await CRUDService.createNewUser(req.body)
    console.log(mess)
    return res.send(mess)
}
let getCrud = async (req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('getCrud.ejs', {
        data: data
    })
}
let editCrud = async (req, res) => {
    let id = req.query.id
    if (id) {
        let data = await CRUDService.getUserById(id)
        if (data === 'id is not exist in database')
            return res.send(data)
        else {
            console.log(data)
            return res.render('updateCrud.ejs', { data: data })
        }
    } else {
        return res.send('Please provide user id')
    }
}
let putCrud = async (req, res) => {
    let data = req.body
    console.log('-------------')
    console.log(data)
    let update = await CRUDService.updateUser(data)
    return res.render('getCrud.ejs', {
        data: update
    })
}
let deleteCrud = async (req, res) => {
    // console.log("test")
    let id = req.query.id
    if (id) {
        let user = await CRUDService.deleteUser(id)
        return res.render('getCrud.ejs', {
            data: user
        })
    } else {
        return res.send('Please provide user id')
    }
}
module.exports = {
    index: index,
    about: about,
    crud: crud,
    postCrud: postCrud,
    getCrud: getCrud,
    editCrud: editCrud,
    putCrud: putCrud,
    deleteCrud: deleteCrud
}