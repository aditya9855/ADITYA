
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function formValidation() { 
	const name = document.getElementById("name");
    
    const password = document.getElementById("password");

	if (name.value.length < 2 || name.value.length > 20) {
		alert("enter valid name")
		name.focus();
		return false;
	}

	if (!password.value.match(/^.{5,15}$/)) {
		alert("Password length must be between 5-15 characters!");
		password.focus();
		return false;
	}
	return true;

}
function formValidation1() { 
    
    let password1 = document.getElementById("password1");

	if (!password1.value.match(/^.{5,15}$/)) {
		alert("Password length must be between 5-15 characters!");
		password1.focus();
		return false;
	}
	return true;

}
