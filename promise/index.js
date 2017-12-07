const app = require('express')();
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
console.log(test_func())
// 문제점 hello에는 아무것도 찍히지 않는다.


app.get('/',(req,res)=>{
    res.send("<h1>hello promise</h1>");
})

app.listen(3000,()=>{
    console.log(
        '/practice/promise is running at 3000'
    );
})