
function function_login (username, password) {

	$.ajax({
		url: base_api_url+'/auth',
		type: 'POST',
		cache: false,
	    async: true,
	    crossdomain: true,
		dataType: 'json',
		data: {username: username, password: password},
		success:function(response){
			if (response.query_status=='success') { // check user login process is success and if yes, set all user data into view.

				// $.session.set('user_id', 	$.trim(response.user.member_id));
				// $.session.set('user_name', 	$.trim(response.user.username));
				// $.session.set('user_fname', $.trim(response.user.first_name));
				// $.session.set('user_lname', $.trim(response.user.last_name));
				// $.session.set('division', 	$.trim(response.division.division));
				// $.session.set('division_code', 	$.trim(response.division.division_code));
				// $.session.set('designation',$.trim(response.user.designation.designation));

				$.cookie('user_id', 		$.trim(response.user.member_id), 	{ expires: 1 });
				$.cookie('user_name', 		$.trim(response.user.username), 	{ expires: 1 });
				$.cookie('user_fname', 		$.trim(response.user.first_name), 	{ expires: 1 });
				$.cookie('user_lname', 		$.trim(response.user.last_name), 	{ expires: 1 });
				$.cookie('division', 		$.trim(response.division.division), { expires: 1 });
				$.cookie('division_code', 	$.trim(response.division.division_code), { expires: 1 });
				$.cookie('designation', 	$.trim(response.user.designation.designation), { expires: 1 });

				$('.dash-date-time p#userdata small').text($.cookie('user_fname')+ ' ' + $.cookie('user_lname') +' ['+ $.cookie('designation') +']');	// set designation

				$('.d-sui-tile h1 span').text(response.sui.sui);	// set sui value
				$('.c-sui-tile h1 span').text(response.sui.c_sui);	// set cumulative sui value

				$('.working-project h5 span').text('The '+ $.cookie('division') +' ['+ $.cookie('division_code') +'] division');	// division name & set division code
				
				//for (var i = 0; i < response.projects.length; i++) {			// set project list
				$('.working-project-list ul').text('');
				for (var i = 0; i < 5; i++) {			// set project list
					if (response.projects[i].project_name!='') {
						$('.working-project-list ul').append('<li>'+ $.trim(response.projects[i].project_name) +'</li>');
					};
				};

				$('div.priority-1 p.task').text($.trim('[High Prioruty]') + ' ' + $.trim('Insert OSBT web site content and do SEO').substring(0,30)+'...');	// set cumulative sui value
				$('div.priority-2 p.task').text($.trim('[Moderate Prioruty]') + ' ' + $.trim('OSBT web site content update (IDSD Progression Path)').substring(0,30)+'...');	// set cumulative sui value

				$('#login-msgs').removeClass('alert-danger').removeClass('alert-success').removeClass('alert-warning').addClass('alert-success').html('<strong>Yeah!</strong> We are good.').delay(3000);

				$('#dash-board').css('display', 'block');
				$('#login-page').css('display', 'none');

			}else if(response.error=='error'){
				$('#login-msgs').removeClass('alert-success').removeClass('alert-warning').addClass('alert-danger').html('<strong>Opps!</strong> Something wrong.');
			};
	    },
	    error:function(jqXHR,textStatus,errorThrown){
	    	console.log(jqXHR);
	    }
	});
}

function get_user_data (username) {

	$.ajax({
		url: base_api_url+'/getuserdata',
		type: 'POST',
		cache: false,
	    async: true,
	    crossdomain: true,
		dataType: 'json',
		data: {username: username},
		success:function(response){
			
			if (response.query_status=='success') { // check user login process is success and if yes, set all user data into view.

				$.cookie('user_id', 		$.trim(response.user.member_id), 	{ expires: 1 });
				$.cookie('user_name', 		$.trim(response.user.username), 	{ expires: 1 });
				$.cookie('user_fname', 		$.trim(response.user.first_name), 	{ expires: 1 });
				$.cookie('user_lname', 		$.trim(response.user.last_name), 	{ expires: 1 });
				$.cookie('division', 		$.trim(response.division.division), { expires: 1 });
				$.cookie('division_code', 	$.trim(response.division.division_code), { expires: 1 });
				$.cookie('designation', 	$.trim(response.user.designation.designation), { expires: 1 });

				$('.dash-date-time p#userdata small').text($.cookie('user_fname')+ ' ' + $.cookie('user_lname') +' ['+ $.cookie('designation') +']');	// set designation

				$('.d-sui-tile h1 span').text(response.sui.sui);	// set sui value
				$('.c-sui-tile h1 span').text(response.sui.c_sui);	// set cumulative sui value

				$('.working-project h5 span').text('The '+ $.cookie('division') +' ['+ $.cookie('division_code') +'] division');	// division name & set division code
				
				//for (var i = 0; i < response.projects.length; i++) {			// set project list
				$('.working-project-list ul').text('');
				for (var i = 0; i < 5; i++) {			// set project list
					if (response.projects[i].project_name!='') {
						$('.working-project-list ul').append('<li>'+ $.trim(response.projects[i].project_name) +'</li>');
					};
				};

				$('div.priority-1 p.task').text($.trim('[High Prioruty]') + ' ' + $.trim('Insert OSBT web site content and do SEO').substring(0,30)+'...');	// set cumulative sui value
				$('div.priority-2 p.task').text($.trim('[Moderate Prioruty]') + ' ' + $.trim('OSBT web site content update (IDSD Progression Path)').substring(0,30)+'...');	// set cumulative sui value

				$('#login-msgs').removeClass('alert-danger').removeClass('alert-success').removeClass('alert-warning').addClass('alert-success').html('<strong>Yeah!</strong> We are good.').delay(3000);

				$('#dash-board').css('display', 'block');
				$('#login-page').css('display', 'none');
			}else if(response.error=='error'){
				$('#login-msgs').removeClass('alert-success').removeClass('alert-warning').addClass('alert-danger').html('<strong>Opps!</strong> Something wrong.');
			};
	    },
	    error:function(jqXHR,textStatus,errorThrown){
	    	console.log(jqXHR);
	    }
	});
}

function getusertasks (userid, username) {

	$.ajax({
		url: base_api_url+'/getusertasks',
		type: 'POST',
		cache: false,
	    async: true,
	    crossdomain: true,
		dataType: 'json',
		data: {userid: userid, username: username},
		success:function(response){
			// console.log(response.task_data.all_tasks);
			$('#task-page>.tiles>.all-tasks>.task-tile>h1>.count').text(response.task_data.all_tasks);
			$('#task-page>.tiles>.not-started-tasks>.task-tile>h1>.count').text(response.task_data.not_started_tasks);
			$('#task-page>.tiles>.in-progress-tasks>.task-tile>h1>.count').text(response.task_data.inprogress_tasks);
			$('#task-page>.tiles>.finished-tasks>.task-tile>h1>.count').text(response.task_data.finished_tasks);
		},
		error:function(jqXHR,textStatus,errorThrown){
	    	console.log(jqXHR);
	    }
	});
}
