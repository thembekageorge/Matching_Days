var day1;
var day2;

function checkDay(){

 var date1 = document.getElementById('date1').value;
 var date2 = document.getElementById('date2').value;

 var formattedDate1 = new Date (date1);
 var formattedDate2 = new Date (date2);

 var dayOfDate1 = formattedDate1.getDay();

 var dayOfDate2 = formattedDate2.getDay();

 if (dayOfDate1 == 0 || dayOfDate2 == 0){
   window.alert("it kinda works");
 }
}
