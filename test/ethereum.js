// const web3 = require('web3');
//
// let web3js = new web3(new web3.providers.HttpProvider('https://mainnet.terrachain.network'))
//
//
// let address = '0x0b6Bc42cb9b89259A3aA986363Fa37a9cbF03b8E';
// let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
// // let contract = web3js.eth.contract(abi).at(address);
// // let contract = web3js.eth.Contract(abi).at(address);
// let contract = web3js.eth.Contract(abi,address)
// console.log(contract.balanceOf());

const ethers = require('ethers');
const fs = require('fs');
// let provider = new ethers.providers.JsonRpcProvider("https://mainnet.terrachain.network");
let provider =  ethers.getDefaultProvider('mainnet');;
// let wallet = createWallet();
let wall;


let wallet = '0x38735a48609bd476f36e6bb97efebbe4a6d245e2';

console.log(wallet.split('0x')[1]);

// let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
// let contract = new ethers.Contract('0x0b6Bc42cb9b89259A3aA986363Fa37a9cbF03b8E',abi,provider);

// fs.readFile('/home/ifan/wallet/UTC--2019-06-27T05-06-09.742000000Z--fad9e3ec3e797a691cd4fcd60f99c72a4ef43e1b.json','utf-8',(err, data) =>{
//     if(err){
//         throw err
//     }else{
//         ethers.Wallet.fromEncryptedJson(data, '123456789').then(function(wallet) {
//             wallet = wallet.connect(provider)
//             // wallet.(provider);
//             let contractWithSigner = contract.connect(wallet);
//             contractWithSigner.transfer('0xB5688d47D6D0ED6FF769BFB824DAB57Fb72376E8', 1, {
//                 gasLimit: 80000,
//                 // 偷懒，直接是用 2gwei
//                 gasPrice: ethers.utils.parseUnits("20", "gwei"),
//             }).then(function(tx) {
//                 console.log(tx);
//                 // 介绍刷新上面的Token余额，重置输入框
//             },err =>{
//                 console.log('onerr');
//                 console.log(err.reason);
//             });
//         },err=>{
//             console.log('invaild password')
//         });
//     }
// });


// console.log(contract.balanceOf('0xfad9e3ec3e797a691cd4fcd60f99c72a4ef43e1b').then(res =>{
//     console.log("res = "+res)
//     let ten = parseInt(res._hex,16) / (10**18);
//     console.log("10进制res = "+ten)
//     // console.log(res._hex.toString(16));
// }));

// console.log(newValue)

//读取keystore恢复钱包
//

console.log();
// 使用钱包对象 导出keystore Json
// wallet.encrypt('123456').then(function(json) {
//     let jsonObject = JSON.parse(json);
//     // console.log(jsonObject.address)
//     fs.writeFile('/home/ifan/wallet/'+jsonObject.address+'.json',json,{flag:'a'},function (err) {
//         if(err){
//             throw err;
//         }
//         console.log('success')
//     })
// })

/**
 * fs.readFile('./try4.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
 * @returns {Wallet}
 */
// let privateKey = ethers.utils.randomBytes(32);
// console.log(privateKey);

// ethers.Contract()

function createWallet(){
    return ethers.Wallet.createRandom();
}


function a(){
    return {name:"zhangsan",age:15};
}