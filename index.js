const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //help format everything to json

const cors = require('cors');

const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'ORACLE545901',
    database: 'cake_shop',
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());

app.post('/api/insert', (req, res)=> {
    const cakeName = req.body.cakeName;
    const cakeReview = req.body.cakeReview;


    const sqlInsert = "INSERT INTO cake_shop.cake_review (id, name, review) VALUES (?,?,?))"
    db.query(sqlInsert, [cakeName, cakeReview], (err, result)=>{
        //called con the front end by submitReview
        console.log(err);

    });
});

/* app.get("/", (req, res) => {
    const sqlInsert = 
    "INSERT INTO cake_shop.cake_review (id, name, review) VALUES ('1', '2', '1')"


    db.query(sqlInsert, (err, result)=>{
        res.send("Insert succesful to MySQL");

    })
   
}); */

app.listen(3001, () => {
    console.log("running on port 3001");

});

//run the file: node index.js
//