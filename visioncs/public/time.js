var d = new Date();
var ksttime = document.getElementById("ksttime");
var time = d.getMonth()+1 +"월"+d.getDate()+"일 - "+d.getHours()+"시";
ksttime.value = time;
