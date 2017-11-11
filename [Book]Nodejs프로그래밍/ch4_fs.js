var fs = require('fs');

// var data = fs.readFileSync('./package.json','utf8');
var data = fs.readFile('./package.json','utf8',function(err,file_data){
  if(err) throw err;
  console.log(file_data);
})

console.log('ok');
