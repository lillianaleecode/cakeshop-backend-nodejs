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

//%%%%%% USERS EDIT %%%%%%
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    
    conexion.query('SELECT * FROM users WHERE id=?', [id], 
    (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
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
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;