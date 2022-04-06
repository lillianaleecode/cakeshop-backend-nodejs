const express = require('express')
const app = express()

const mysql = require('mysql2')

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'ORACLE545901',
    database: 'cake_shop',
});

app.get("/", (req, res) => {
    const sqlInsert = 
    "INSERT INTO cake_shop.cake_review (id, name, review) VALUES ('1', '2', '1')"


    db.query(sqlInsert, (err, result)=>{
        res.send("Insert succesful to MySQL");

    })
   
});

app.listen(3001, () => {
    console.log("running on port 3001");

});

//run the file: node index.js
//