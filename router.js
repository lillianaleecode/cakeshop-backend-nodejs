const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

//%%%%%% USERS %%%%%%
router.get('/', (req, res)=>{
    
    conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    });
    

})

//%%%%%% CAKE REVIEW %%%%%%
router.get('/cake_review', (req, res)=>{
    conexion.query('SELECT * FROM cake_review', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
    

})

module.exports = router;