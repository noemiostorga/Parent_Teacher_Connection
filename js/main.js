

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
var $parents = $("#parents");
$.ajax({
	type: "GET",
	url: "http://parent-teacher-connection.herokuapp.com/api/parents",
	success: function(parents){
		$.each(parents, function(i, parent){
			$parents.append("<li> name: "+ parents.first_name+ "</li>")
		})
	},
	error: function(){
		alert("error on loading page");
	}

});

});





