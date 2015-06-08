$(document).ready(function() {

	if(typeof($.cookie('user_name')) != "undefined" && $.cookie('user_name') !== null) {
    	
		// alert($.cookie('user_id'));
		get_user_data ($.cookie('user_name'))

	}else{
		$('#login-msgs').removeClass('alert-danger').addClass('alert-success').html('<strong>Hello!</strong> Welcome to mini access.')
	
	}

	$(document).on('submit', '#login-form', function(event) {
		event.preventDefault();

		if($('#username').val()=='' || $('#password').val()==''){  // check login form is filled or not 
			// if not send error msg
			$('#login-msgs').removeClass('alert-success').addClass('alert-danger').html('<strong>Oh snap!</strong> You have to enter login data.')
		}
		else{ // if yes send processing msg and call to login function
			$('#login-msgs').removeClass('alert-success').removeClass('alert-danger').addClass('alert-warning').html('<strong>Please wait!</strong> Um processing.')
			function_login($('#username').val(), $('#password').val());
		}

	});

	$(".live-tile, .flip-list").not(".exclude").liveTile();
	
	//play on hover with initial play
	var $tiles = $("#tile1, #tile3").liveTile({ 
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

	$(document).on('click', '#logout', function(event) {
		event.preventDefault();

		$.removeCookie('user_id');
		$.removeCookie('user_name');
		$.removeCookie('user_fname');
		$.removeCookie('user_lname');
		$.removeCookie('division');
		$.removeCookie('division_code');
		$.removeCookie('designation');

		$('#login-msgs').removeClass('alert-danger').removeClass('alert-success').removeClass('alert-warning').addClass('alert-success').html('<strong>Yeah!</strong> You have successfully logout.').delay(3000);
		$('#login-page').css('display', 'block');
		$('#dash-board').css('display', 'none');
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
