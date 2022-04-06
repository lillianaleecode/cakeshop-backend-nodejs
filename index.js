const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'ORACLE545901',
    database: 'online_store',
});

app.get('/', (req, res) => {
    const sqlInsert = 
     "INSERT INTO `online_store`.`products` (`product_id`, `name`, `unit_measure_id`, `price_per_unit`) VALUES ('11', 'sel', '1', '13');"


    db.query(sqlInsert, (err, result)=>{
        res.send("hello lilly and all!!");

    })
   
});

app.listen(3001, () => {
    console.log("running on port 3001");

});

//run the file: node index.js
//