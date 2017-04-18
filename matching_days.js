
var weekday = document.querySelectorAll('.day');

var date1 = document.getElementById('date1');
var date2 = document.getElementById('date2');

 date1.addEventListener('change',checkDay);
 date2.addEventListener('change',checkDay);

var formattedDate1, formattedDate2;
var dayOfDate1, dayOfDate2;

function checkDay(){
'use strict'
// date1.classList.remove('gre');
// date1.classList.remove("yellow");
// date1.classList.remove("brown");
// date2.classList.remove("green");
// date2.classList.remove("yellow");
// date2.classList.remove("brown");
    for (var i = 0; i < weekday.length; i++) {

      if(date1.value !==""){
  		 formattedDate1 = new Date(date1.value);
  		 dayOfDate1 = formattedDate1.getDay();
  	    }
     if (date2.value !==""){
    	 formattedDate2 = new Date(date2.value);
    		 dayOfDate2 = formattedDate2.getDay();
    	    }
		if(dayOfDate1 === dayOfDate2){
			weekday[dayOfDate1].classList.add('green');
      weekday[dayOfDate2].classList.add('green');
		}

		if(dayOfDate1 !== dayOfDate2 && dayOfDate1 !== undefined){
			weekday[dayOfDate1].classList.add('yellow');

}
		if(dayOfDate1 !== dayOfDate2 && dayOfDate2 !== undefined){
			weekday[dayOfDate2].classList.add('brown');
		}
    weekday[i].classList.remove('green');
      weekday[i].classList.remove('yellow');
        weekday[i].classList.remove('brown');
        }
    }
