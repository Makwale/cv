

//function to login
function login(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username == "Emma") {
		if (password == "1234") {
			window.location = "cv.html";
		} else {
			alert("Wrong password!");
		}
	} else if(password != "1234")
		 {
		alert("Wrong username and password!");
	}else{
		alert("Wrong username!");
	}
}