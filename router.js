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

//%%%%%% USERS CREATE %%%%%%
router.get('/create', (req, res)=>{
    
    conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('create', {results:results});
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

const crud = require('./controllers/crud.js');
router.post('/save', crud.save)

module.exports = router;