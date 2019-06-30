var express = require('express');
var router = express.Router();
const controlers = require('../controllers')
const qs = require('qs');
const http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getTestNetAddress',function (req, res, next) {
  controlers.wallet.getAddress(req.query.userId).then(response=>{
    res.send(JSON.stringify(response[0]));
  })
})

router.get('/getTestNetBalance',function(req,res,next){
  controlers.wallet.getERC20Balance(req.query.address).then(response=>{
    res.send(JSON.stringify(response));
  });
});

router.post('/sendTestNetTransaction', function (req, res, next) {

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
    console.log(err);
  });
});

router.get('/getTestNetKeyStore', function (req, res, next) {
  controlers.wallet.getKeyStore(req.query.openId,req.query.pwd).then(response =>{
    console.log('response========='+response);
    res.send(JSON.stringify(response))
  },err =>{
    console.log(err);
  });
})

// router.post('/testRPC',function (req, res, next) {
//   getToken('123456').then((err,body)=>{
//     console.log(err)
//     console.log(body)
//   });
//   // controlers.wallet.createAccount(req);
//   // res.send(JSON.stringify({name : "zhangsan"}))
// })


// function getToken(code) {
//   let reqUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?';
//   let params = {
//     appid: 'wxe85cb0e39dca6880',
//     secret: '5f9a853ca5f8029e85d922d07356b4df',
//     code: code,
//     grant_type: 'authorization_code'
//   };
//   let options = {
//     method: 'get',
//     url: reqUrl+qs.stringify(params)
//   };
//   console.log(options.url);
//   return new Promise((resolve, reject) => {
//     http.request(options, function (err, res, body) {
//       if (res) {
//         resolve(body);
//       } else {
//         reject(err);
//       }
//     })
//   })
// }

module.exports = router;
