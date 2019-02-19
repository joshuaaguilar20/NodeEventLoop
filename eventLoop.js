const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
//some events passed to OS others to Request  
const start = Date.now();
//process.env.UV_THREADPOOL_SIZE = 5;

function doRequest(){
https.request('https://www.google.com', res => {
  res.on('data', () => {});
  res.on('end', () => {
    console.log(Date.now() - start);
  });
 }).end();
};



function doHash(){ 
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash : ${Date.now() - start}`)
  })
};
  doRequest();


fs.readFile('multi.js', 'utf8', () => { 
  console.log('FS', Date.now() - start)
});

doHash();
doHash();
doHash();
doHash();

