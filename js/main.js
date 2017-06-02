document.addEventListener("DOMContentLoaded", binder);

function binder(){
document.getElementById("home").addEventListener("click", changeHome);
document.getElementById("start").addEventListener("click",changeStart);
document.getElementById("info").addEventListener("click",changeInfo);
document.getElementById("using").addEventListener("click",changeCode);
document.getElementById("end").addEventListener("click",changeEnd);
};

function changeHome(){
	window.location="index.html";
}

function changeStart(){
	window.location="introduction.html";
}

function changeInfo(){
	window.location = "contents.html";
}

function changeCode(){
	window.location = "reference.html";
}

function changeEnd(){
	window.location ="end.html";
}
