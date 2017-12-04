
var count = 0;

const hello =function(){
    count++;
    console.log('hello');
    check_count();
} 

const start_hello = function(){
    setInterval(hello,2000);
}

const stop_hello = function(){
    clearInterval(hello);
}

const check_count = function(){
    if(count > 3){
        stop_hello();
        console.log('hear');
    }else{
        console.log('Not Yet');
    }
}

// hear
const new_test = setInterval(function(){
    count++;
    console.log(count);
    check_count_2();
},2000);

// const stop_test = clearInterval(new_test);
// 여기에 이렇게 써버리면 바로 실행 취소가 되기 때문에 쓰면 안된다.

const check_count_2 = function(){
    if(count > 3){
        clearInterval(new_test);
        console.log('hear2');
    }else{
        console.log('Not Yet 2');
    }
}


// arguments ex
// var interval = setInterval(function(str1, str2) {
//     console.log(str1 + " " + str2);
//   }, 1000, "Hello.", "How are you?");
  
//   clearInterval(interval);


module.exports = {
    start : start_hello , test : new_test
};