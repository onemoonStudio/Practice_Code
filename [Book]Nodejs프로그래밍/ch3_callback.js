// p.100 understand callback

function add(a,b,callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(result){
    console.log('파라미터로 전달된 콜백함수 호출됨.');
    console.log('10 + 10 => %d',result);
    // %d 를 통해서 정수를 받을 수 있다. 
});
 
// # 기본적인 callback 파라미터를 넘긴다.

function add_2(a,b,callback){
    var result = a + b ; 
    callback(result);
    // 여기서 콜백함수를 실행해줘야 한다.
    // 그렇지 않으면 history 만 return 이 되서 hello_2의 콜백 console은 찍히지 않는다.

    var history = function(){
        return a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var hello_2 = add_2(10,20,function(result){
    console.log('파라미터로 전달된 콜백함수 호출됨_2');
    console.log('10 + 20 => %d',result)
});
// hello_2 에 history 함수가 들어간다.
console.log("결과값으로 받은 함수 실행 결과 " + hello_2());

// # 파라미터를 넘기는것 뿐 아니라 , 함수를 리턴한다.

function add_3(a,b,callback){
    var result = a + b ; 
    callback(result);
    // 여기서 콜백함수를 실행해줘야 한다.
    // 그렇지 않으면 history 만 return 이 되서 hello_2의 콜백 console은 찍히지 않는다.

    var count = 0;
    var history = function(){
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var hello_3 = add_3(10,20,function(result){
    console.log('result 값은 %d' , result );
})

console.log('hello 3 를 실행 한다.',hello_3()); // count 1
console.log('hello 3 를 실행 한다.',hello_3()); // count 2
console.log('hello 3 를 실행 한다.',hello_3()); // count 3

// # 콜백함수를 몇번 실행했는지 알수 있도록 관리한다.
