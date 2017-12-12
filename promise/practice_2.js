const Promise = require('promise');

// my ex
var asyncfunction = () => {
      return new Promise((resolved , rejected) => {
            if(false){ // reject test
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


