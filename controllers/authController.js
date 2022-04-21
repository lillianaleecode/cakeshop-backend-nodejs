const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util') //promesas asincronicas

//process for registering
exports.register = async(req, res) => {

    try {
        //capture name, user and password:
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    console.log(name, user, pass);

    let passHash = await bcryptjs.hash(pass, 8);
    console.log(passHash);

    conexion.query('INSERT INTO users_login SET ?', {user:user, name: name, pass: passHash}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

    } catch (error) {
        console.log(error);
        
    }

    

}