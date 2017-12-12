const fs = require('fs');

const test_func = function(){
    var hello ="";
    fs.readFile('./fs_test/test1.txt',(err,data)=>{
        hello = hello+data;
        console.log(hello,"t1");
    })
    fs.readFile('./fs_test/test2.txt',(err,data)=>{
        hello = hello+data;
        console.log(hello,'t2');
    })
    fs.readFile('./fs_test/test3.txt',(err,data)=>{
        hello = hello+data;
        console.log(hello,'t3');
    })
    return hello;
}

// console.log(test_func())
// 문제점 hello에는 아무것도 찍히지 않는다!
// 비동기 형식이기 때문에 hello 가 리턴 되는것과 read되는 시점이 다르다 . 
// 원하는 대로 하고 싶다면 readfilesync를 사용하면 된다.
// 그게 아니라면 Promise를 사용하자


// 상단 코드의 프로미스화
const Promise = require('promise');

var readfs1 = function( params ){
    return new Promise(function(resolve,reject){
        fs.readFile('./fs_test/test1.txt',(err,data)=>{
            if(err) reject(err);
            resolve(params +'result 1 : ' + data + ' / ');
        })
    })
}
var readfs2 = function( params ){
    return new Promise(function(resolve,reject){
        fs.readFile('./fs_test/test2.txt',(err,data)=>{
            if(err) reject(err);
            resolve( params+ 'result 2 : ' + data + ' / ');
        })
    })
}
var readfs3 = function( params ){
    return new Promise(function(resolve,reject){
        fs.readFile('./fs_test/test3.txt',(err,data)=>{
            if(err) reject(err);
            resolve(params + 'result 3 : ' + data + ' / ');
        })
    })
}

readfs1('hello ')
.then(readfs2)
.then(readfs3)
.then( (result)=>{
    console.log(result);
})

// 주의할점 ! 중간에 readfs2() 등 함수를 실행해서는 안된다.
// 자동으로 콜백형식으로 넘어가서 실행되기 때문에 readfs1의 결과값이 readfs2 로 넘어가게 되는것
// 결과값은 hello result 1 : 1 / result 2 : 2 / result 3 : 3 /

// 다른방식으로 All method를 사용해 원하는 promise 함수들을 병렬로 실행시킬 수 있다.
var readfs = function( where ){
    return new Promise((resolve,reject) => {
        fs.readFile(where,(error,data) => {
            if(error) reject(error);
            // data로 하면 안된다 buffer가 넘어감
            // 넘기기 전에 정제화 시켜주자.
            resolve(data.toString());
        })
    } )
}

Promise.all([
    readfs('./fs_test/test1.txt'),readfs('./fs_test/test2.txt'),readfs('./fs_test/test3.txt')
])
.catch((err) => {
    console.log('ERR !! : '+ err);
})
.then(console.log)
// all method 에서는 result가 배열 형태로 들어간다.
// 결과 => [ '1', '2', '3' ]
