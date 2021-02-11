import { Router } from 'express';
var router = Router();

// TODO skráningar virkni

router.get('/', function(req,res) {
  res.render('pages/home');
});



export default router;
