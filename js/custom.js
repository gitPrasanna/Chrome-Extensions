$(document).ready(function() {
	
	$(document).on('submit', '#login-form', function(event) {
		event.preventDefault();
		// $(this).serializeArray();
		load_dash_board();

	});

	$(".live-tile, .flip-list").not(".exclude").liveTile();
	
	//play on hover with initial play
	var $tiles = $("#tile3").liveTile({ 
	    playOnHover:true,
	    repeatCount: 0,
	    delay: 0,
	    initDelay: 0,
	    startNow: false,
	    animationComplete: function(tileData){
	        $(this).liveTile("play");
	        tileData.animationComplete = function(){};
	    }
	}).each(function(idx, ele){
	   var delay = idx * 1000; 
	    $(ele).liveTile("play", delay);
	});














});

	var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	function GetClock(){
		var d=new Date();
		var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
		if(nyear<1000) nyear+=1900;

		var d=new Date();
		var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

		if(nhour==0){ap=" AM";nhour=12;}
		else if(nhour<12){ap=" AM";}
		else if(nhour==12){ap=" PM";}
		else if(nhour>12){ap=" PM";nhour-=12;}

		if(nmin<=9) nmin="0"+nmin;
		if(nsec<=9) nsec="0"+nsec;

		document.getElementById('date_time').innerHTML=""+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
		}
		window.onload=function(){
		GetClock();
		setInterval(GetClock,1000);
	}
