const Promise = require('bluebird');

var asyncfunction1 = function (param) {
    return new Promise(function (fullfilled, rejected) {
        setTimeout(
            function () {
                fullfilled('result 1:' + param);
            }, 1000);
    });
}

var asyncfunction2 = function (param) {
    return new Promise(function (fullfilled, rejected) {
        setTimeout(
            function () {
                fullfilled('result 2:' + param);
            }, 1000);
    });
}

var asyncfunction3 = function (param) {
    return new Promise(function (fullfilled, rejected) {
        setTimeout(
            function () {
                fullfilled('result 3:' + param);
            }, 1000);
    });
}

var promise = asyncfunction1({
    hello : 'world'
});

// promise
//     .then(asyncfunction2)
//     .then(asyncfunction3)
//     .then(console.log);

// 다른 방법
// Promise.all 은 여러 비동기 함수들을 병렬로 처리를 한다.
// all 을 사용시에는 함수를 안에 변수 또한 넣어줘야 한다.

// Promise
// .all([asyncfunction1({hello:'new_world'}),asyncfunction2(),asyncfunction3()])
// .then((result) => {
//     console.log(result);
// })


var new_async = function(){
    this.world = "lala";
    return new Promise(function(resolve,rejcet){
        resolve('hello');
    })
}
var new_async2 = function(){
    console.log('2');
    return new Promise(function(resolve,rejcet){
        resolve('hello2');
    })
}
var new_async3 = function(){
    console.log(this.world + '@@@');
    console.log(this.tmp + '@@');
    return new Promise(function(resolve,rejcet){
        resolve('hello3');
    })
}


// spread 는 all 에서 then 메서드와 동일한 처리를 하지만 , result를 받는 방식이 다르다.
// then의 경우에는 result 를 어레이 형식으로 받지만 spread에서는 각각 지정해 줄 수 있다.

// Promise.all([
//     new_async(),
//     new_async2(),
//     new_async3()
// ]).spread(function(r1,r2,r3){
//     console.log('result 1 :' + r1);
//     console.log('result 2 :' + r2);
//     console.log('result 3 :' + r3);
// });


new_async().bind({}).spread(function(test){
    this.tmp = test;
    return new_async2();
})
.then(new_async3);
