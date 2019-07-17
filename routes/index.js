var express = require('express');
var router = express.Router();
const controlers = require('../controllers');
const qs = require('qs');
const http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getTestNetAddress',function (req, res, next) {
  controlers.wallet.getAddress(req.query.userId).then(response=>{
    res.send(JSON.stringify(response[0]));
  },err =>{
    console.log(err);
    res.send();
  })
})

router.get('/getTestNetBalance',function(req,res,next){
  controlers.wallet.getERC20Balance(req.query.address).then(response=>{
    res.send(JSON.stringify(response));
  });
});

router.post('/sendTestNetTransaction', function (req, res, next) {
  controlers.wallet.sendERC20Transaction(req.body.from,req.body.to,req.body.value,req.body.password)
      .then(response => {
        res.send(JSON.stringify(response));
      },err =>{
        res.send(JSON.stringify(err));
      });
});

router.post('/newTestNetAccount', function (req, res, next) {
  controlers.wallet.createAccount(req).then((response)=>{
    res.send(response);
  })
});

router.get('/getTestNetPrivateKey', function (req, res, next) {
  // console.log(controlers.wallet.getPrivateKey(req.query.openId,req.query.pwd));
  controlers.wallet.getPrivateKey(req.query.openId,req.query.pwd).then(response =>{
    console.log('response========='+response);
    res.send(JSON.stringify(response))
  },err =>{
    console.log('err==================================>')
    console.log('err===='+err);
    res.send()
  });
});

router.get('/getTestNetKeyStore', function (req, res, next) {
  controlers.wallet.getKeyStore(req.query.openId,req.query.pwd).then(response =>{
    console.log('response========='+response);
    res.send(response)
  },err =>{
    console.log(err);
  });
});

router.get('/getOpenId',function(req, res, next){
  controlers.wallet.getOpenId(req.query.code).then(response=>{
    res.send(response.openid);
  })
});


module.exports = router;
