process.on('exit',function(){
    console.log('event EXIT is occured');
});

// setTimeout(function(){
//     console.log('2초 후에 시스템 종료');
//     process.exit();
// },2000);

// existing event

process.on('tick',function(count){
    console.log('event tick is occured : %s',count);
});

// setTimeout(function(){
//     console.log('event tick is occured after 1 second');
    
//     process.emit('tick','5');
// },1000);

// custom event 

var Calc = require('./ch4_custom_event');

var calc = new Calc();
calc.emit('stop');
// stop 이라는 이벤트를 전달했고
console.log(calc.add(1,22));
// 여기서 add 라는 method를 실제로 사용해봤다.

console.log(Calc.title + '에 stop 이벤트 전달함');


