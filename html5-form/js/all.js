console.log('all.js');


$(function() {
	$("#first").focus();
});

$('#js--submit-form').submit(function(event) {
	event.preventDefault();
	var pwd1 = $(this).find('#password1').val();
	var pwd2 = $(this).find('#password2').val();
	console.log('pwd1 ', pwd1, ' pwd2 ', pwd2)
	if (pwd1 !== pwd2) {
			$('.js--error-msg').text(`Error: Please confirm your password`);
			return;
	}
	// $.ajax({
	// 		url: '/user/register',
	// 		method: 'POST',
	// 		data: {
	// 				email: $(this).find('#email').val(),
	// 				password: $(this).find('#password1').val()
	// 		}
	// }).done(function() {
	// 		window.location.href = '/register/request-confirmation';
	// }).catch(function(error) {
	// 		var errmsg = 'Error';
	// 		if (error.status === 401) {
	// 				errmsg = 'Error Unauthorized';
	// 		}
	// 		else {
	// 				errmsg = error.responseJSON.message;
	// 		}
	// 		$('.js--error-msg').text(`Error: ${errmsg}`);
	// });
});
