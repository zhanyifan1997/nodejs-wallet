const ethers = require('ethers');
const fs = require('fs');
const etherutil = require('../util/etherutil');
const qs = require('qs');
const axios = require('axios');
const wallet = require('../dao/walletdao')
let provider =  ethers.getDefaultProvider('mainnet');
module.exports = {
    createAccount: async ctx => {
        return new Promise((resolve, reject)=>{
            etherutil.createWallet(ctx.body.password).then(response=>{
                console.log(response);
                wallet.addAddress(ctx.body.userId, response.address, response.address + '.json').
                then((response2)=>{
                    resolve(response2);
                });
            });
        });
    },
    sendERC20Transaction: async (from, to ,value, password) => {
        return etherutil.sendERC20Transaction(from, to, value, password);
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
    },
    getOpenId: async (code) => {
        // let reqUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?';
        let reqUrl = 'https://api.weixin.qq.com/sns/jscode2session?';
        let params = {
            appid: 'wxe85cb0e39dca6880',
            secret: '5f9a853ca5f8029e85d922d07356b4df',
            js_code: code,
            grant_type: 'authorization_code'
        };
        let options = {
            method: 'get',
            url: reqUrl+qs.stringify(params)
        };
        console.log(options.url);
        return new Promise((resolve, reject) => {
            axios.request(options).then(response=>{
                resolve(response.data);
            },err=>{
                reject(err);
            })
        })
    }
};