const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //help format everything to json

const PORT = process.env.PORT || 3001;

const cors = require('cors');

const mysql = require('mysql2');


//invocar motor de plantilla  
app.set('view engine', 'ejs');

app.use('/', require('./router'));

/* //en vez de tener esto aqui, se pasa al router.js
app.get('/', (req, res)=>{
    res.send('hello lilly');
}) */



/* 
//CREATING DATABASE MYSQL CONNECTION

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'ORACLE545901',
    database: 'cake_shop',
});
//CONNECTION BACKEND AND FRONT END USING CORS AND BODYPARSER
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());

//INSERT REQUEST

app.post('/api/insert', (req, res)=> {
    
    const cakeName = req.body.cakeName;
    const cakeReview = req.body.cakeReview;


    const sqlInsert = 
    "INSERT INTO cake_review (name, review) VALUES (?,?)";
    db.query(sqlInsert, [cakeName, cakeReview], 
        (err, result)=>{
        //called con the front end by submitReview
        if (err) {
            console.log("oh no" + err);
        } else {
            res.send("values Inserted");
            console.log(result);
        };
        

    });
});

//GET REQUEST

app.get("/", (req, res) => {
    const sqlSelect = 
    "SELECT * FROM cake_review";
    db.query(sqlSelect,
        (err, result)=>{
        //called con the front end by submitReview
        if (err) {
            console.log("oh no" + err);
        } else {
            res.send(result);
            console.log(result);
        };
        

    });
  });

  //DELETE REQUEST
  app.delete('/api/delete/:id', (req, res)=> {
      const name = req.params.cakeName
      const sqlDelete = "DELETE FROM cake_review WHERE  id = ?" 

      db.query(sqlDelete, name, (err, result) => {
         if (err) console.log(err)
      })
  })

 */
app.listen(5000, () => {
    console.log("running on port http://localhost:5000");

});

//run the file: nodemon app updatea cambios automaticamente or npm start
//