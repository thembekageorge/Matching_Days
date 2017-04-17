
var weekday = document.querySelectorAll('.day');

var date1 = document.getElementById('date1');
var date2 = document.getElementById('date2');

 date1.addEventListener('change',checkDay);
 date2.addEventListener('change',checkDay);

function checkDay(){
'use strict'

    for (var i = 0; i < weekday.length; i++) {
      if(date1.value !==""){
  		var formattedDate1 = new Date(date1.value);
  		var dayOfDate1 = formattedDate1.getDay();
  	    }
     if (date2.value !==""){
    		var formattedDate2 = new Date(date2.value);
    		 var dayOfDate2 = formattedDate2.getDay();
    	    }
		if(dayOfDate1 === dayOfDate2){
			weekday[dayOfDate1].classList.add('green');
		}

		if(dayOfDate1 !== dayOfDate2 && dayOfDate1 !== undefined){
			weekday[dayOfDate1].classList.add('yellow');

}
		if(dayOfDate1 !== dayOfDate2 && dayOfDate2 !== undefined){
			weekday[dayOfDate2].classList.add('brown');
		}

        }
    }
