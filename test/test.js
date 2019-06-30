// const ethers = require('ethers');
// let abi = [
//     "event ValueChanged(address indexed author, string oldValue, string newValue)",
//     "constructor(string value)",
//     "function getValue() view returns (string value)",
//     "function setValue(string value)"
// ];
//
// // Connect to the network
// let provider = ethers.getDefaultProvider('rinkeby');
//
// // 地址来自上面部署的合约
// let contractAddress = "0x920950f818E92AB7198383De0F325875273F30c6";
//
// // 使用Provider 连接合约，将只有对合约的可读权限
// let contract = new ethers.Contract(contractAddress, abi, provider);
//
// let currentValue = contract.getValue();
// currentValue.then(res=>{
//     console.log(res)
// })
//weixsin get
/**
 * 微信getOpenId start
 */
// const qs = require('qs');
// const axios = require('axios');
//
// getToken('123456').then(response=>{
//     console.log('resposse===========')
//     console.log(response);
// });
// function getToken(code) {
//     let reqUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?';
//     let params = {
//         appid: 'wxe85cb0e39dca6880',
//         secret: '5f9a853ca5f8029e85d922d07356b4df',
//         code: code,
//         grant_type: 'authorization_code'
//     };
//     let options = {
//         method: 'get',
//         url: reqUrl+qs.stringify(params)
//     };
//     console.log(options.url);
//     return new Promise((resolve, reject) => {
//         axios.request(options).then(response=>{
//             resolve(response.data);
//         },err=>{
//             reject(err);
//         })
//     })
// }
//微信getOpenId end

// console.log(currentValue);