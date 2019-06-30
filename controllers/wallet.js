const ethers = require('ethers');
const fs = require('fs');
const etherutil = require('../util/etherutil');
const wallet = require('../dao/walletdao')
let provider =  ethers.getDefaultProvider('mainnet');
module.exports = {
    createAccount: async ctx => {
        console.log(ctx.body);
        return new Promise((resolve, reject)=>{
            etherutil.createWallet(ctx.body.password).then(response=>{
                console.log(response);
                wallet.addAddress(ctx.body.userId, response.address, response.address + '.json').
                then((response2)=>{
                    resolve(response2);
                });
            });
        });


        // wallet.addAddress()
    },
    getERC20Balance: async ctx => {
        return etherutil.getERC20Balance(ctx);
    },
    getAddress: async userId =>{
        return wallet.getAddress(userId);
    },
    getPrivateKey: async (openId,pwd) => {
        return new Promise((resolve,reject) =>{
            wallet.getAddress(openId).then(res => {
                fs.readFile('/home/ifan/wallet/'+ res[0].file_name ,'utf-8',(err, data) =>{
                        ethers.Wallet.fromEncryptedJson(data, pwd).then(function(wallet) {
                            wallet = wallet.connect(provider);
                            if(err){
                                reject(err);
                            }else{
                                resolve({privateKey : wallet.privateKey});
                            }
                        });

                });
            });
        })
    },
    getKeyStore: async (openId,pwd) =>{
        return new Promise((resolve, reject) =>{
            wallet.getAddress(openId).then(res => {
                fs.readFile('/home/ifan/wallet/'+ res[0].file_name ,'utf-8',(err, data) =>{
                    ethers.Wallet.fromEncryptedJson(data, pwd).then(function(wallet) {
                        if(err){
                            reject(err);
                        }else{
                            resolve({wallet : wallet});
                        }
                    });

                });
            });
        })
    }
};