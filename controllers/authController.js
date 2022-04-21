const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util') //promesas asincronicas

//process for registering
exports.register = async(req, res) => {
    //capture name, user and password:
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    console.log(name, user, pass);

    let passHash = await bcryptjs.hash(pass, 8);
    console.log(passHash);
    

}