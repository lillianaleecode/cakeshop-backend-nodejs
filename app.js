const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog')
const dbURI = 'mongodb+srv://root:1234@node.zn6hp.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then ((result) => app.listen(4001))
.catch((err)=> console.log(err));

const PORT = process.env.PORT || 3001;
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv'); //for the login
const cookieParser = require('cookie-parser');//for the login


class Server {
    constructor(){
        this.initAndMiddleWares()
        this.addRoutes()
        this.listenServer()
            
        }

    initAndMiddleWares(){
        //configuring Node to process data
        app.use(express.urlencoded({extended:true}));
        app.use(express.json());

        //invocar motor de plantilla  
        app.set('view engine', 'ejs');

        //set static files in PUBLIC FOLDER
        app.use(express.static('public'));

        //setear variables de entorno (environment setings)
        dotenv.config({path: './env/.env'})

        //set cookies
        app.use(cookieParser());

        //Delete cache (preventing user to go back)
        app.use(function(req, res, next) {
        if (!req.user)
            res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        next();
        });


    }

    addRoutes(){
        app.use('/', require('./routes/router'));

        //mongoose and mongo sandbox routes
        app.get('/add-blog', (req, res) => {
        const blog = new Blog({
            title: 'new blog',
            snippet:'about my blog',
            body: 'more!'
        });
        blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
        })
    }
    listenServer(){

        app.listen((process.env.PORT || 5000), () => {
        console.log("running on port http://localhost:5000");

        });

     }
}

new Server();