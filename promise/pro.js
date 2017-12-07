const Promise = require('promise');

// blog ex

// var asyncfunction = function (param) {
//       // 이 return new Promise 가 반드시 필요하다.
//       return new Promise(function (resolved, rejected) {
//             setTimeout(
//                   function () {
//                         resolved('hello' + param);
//                   }, 2000);
//       });
// }
// var promise = asyncfunction(' james ');
// promise.then(console.log, console.err); // 여기가 비동기 결과에 대한 콜백함

// my ex
var asyncfunction = () => {
      return new Promise((resolved , rejected) => {
            if(false){
                  resolved('hello');
            }else{
                  rejected(Error('world'));
            }
      })
}

var promise = asyncfunction();

var test_function = (ts) => {
      console.log(ts);
}

promise.then((result) => {
      console.log(result);
})
// .catch(console.error);
.catch(test_function);


// 1. console.err 아님
// 2. params를 넘기는 함수를 작성 안해줘도 자동으로 console(function)쪽에 기본으로 넘어간다.
// 2 <- test_function 참고
// 3. then 상에서 2개의 함수를 처리할 것이 아니라면 catch함수를 사용해도 무방하다.


