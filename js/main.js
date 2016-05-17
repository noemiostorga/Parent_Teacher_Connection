

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange= function(){
// 	if(xhr.readyState === 4){
// 	var data =JSON.parse(xhr.responseText);
// 	// console.log(data) 
// 	 var data = JSON.parse(xhr.responsetext);
// 	 console.log(data);
// 	}
// }
// xhr.open("GET", "http://parent-teacher-connection.herokuapp.com/api/parents");
// xhr.send();

// console.log(xhr)

// function myFunction(){
// 	var email = document.querySelector(".email").value;
// 	var password = document.querySelector(".password").value;

// 	return console.log(email + " " +password);

// }

$(function(){

$.ajax({
	type: "GET",
	url: "http://parent-teacher-connection.herokuapp.com/api/parents",
	success: function(data){
		console.log('success', data);
	}

});

});



