import { Router } from 'express';
var router = Router();
import client from './db.js';
import dotenv from 'dotenv';
dotenv.config();

// TODO skráningar virkni

router.get('/', function(req,res) {
  const sql = "SELECT * FROM signatures order by name"
  client.query(sql, [],(err,result) => {
    if(err) {
      return console.error(err.message);
    }
    console.log(result.rows);
    res.render('pages/home', {model:result.rows});
  })

});

router.post('/insert', function(req, res) {
  const sql  = "INSERT INTO signatures (name, nationalId, comment, anonymous) VALUES ($1,$2,$3,$4)"
  const signatures = [req.body.name,req.body.nationalId, req.body.comment, req.body.anonymous];
  client.query(sql,signatures,(err,result) => {
    if(err) {
      return console.log(err)
    }
    res.redirect('/')
  })
});



export default router;
