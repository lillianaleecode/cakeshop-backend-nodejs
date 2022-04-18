//Invocamos a la conexion de la DB
const conexion = require('../database/db');

exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    // console.log(user + " - " + rol); //checking it works
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}