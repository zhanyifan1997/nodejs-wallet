const ethers = require('ethers');
const fs = require('fs');
// let provider = new ethers.providers.JsonRpcProvider("https://mainnet.terrachain.network");
let provider =  ethers.getDefaultProvider('mainnet');;
// let wallet = createWallet();
let wall;
let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
let contract = new ethers.Contract('0x0b6Bc42cb9b89259A3aA986363Fa37a9cbF03b8E',abi,provider);
const file_path = 'e:\\'
function getERC20Balance(address){
    return new Promise((resolve, reject) => {
        contract.balanceOf(address).then(res =>{
            let ten = parseInt(res._hex,16) / (10**18);
            console.log('ten=' + ten);

            resolve({balance:ten});
        },err=>{
            reject(err);
        });
    })
}

function sendERC20Transaction(from, to, value, password){
    from = from.split('0x')[1];
    return new Promise((resolve, reject) => {
        fs.readFile(file_path + from +'.json','utf-8',(err, data) =>{
            if(err){
                reject(err);
            }else{
                ethers.Wallet.fromEncryptedJson(data, password).then(function(wallet) {
                    wallet = wallet.connect(provider);
                    // wallet.(provider);
                    let contractWithSigner = contract.connect(wallet);
                    contractWithSigner.transfer(to , value , {
                        gasLimit: 80000,
                        // 偷懒，直接是用 2gwei
                        gasPrice: ethers.utils.parseUnits("20", "gwei"),
                    }).then(function(tx) {
                        console.log(tx);
                        // 介绍刷新上面的Token余额，重置输入框
                    },err =>{
                        reject(err.reason);
                    });
                },err => {
                    reject(err.reason);
                });
            }
        });
    })
}

function createWallet(password){
    return new Promise((resolve, reject)=>{
        let wallet = ethers.Wallet.createRandom();
        wallet.encrypt(password).then(function(json) {
        let jsonObject = JSON.parse(json);
        console.log(jsonObject);
        fs.writeFile(file_path + jsonObject.address+'.json',json,{flag:'a'},function (err) {
            if(err){
                reject(err);
            }
            resolve({address: jsonObject.address});
        })
    })

})
}

module.exports = {
    getERC20Balance: async address => {
        return getERC20Balance(address);
    },
    createWallet: async (password)=> createWallet(password),
    sendERC20Transaction: async (from, to ,value, password)=> sendERC20Transaction(from, to ,value, password)
}


