/* validacion*/ 
const form = document.getElementById('form');
const nombre= document.getElementById('nombre');
const edad = document.getElementById('edad');
const domicilio= document.getElementById('domicilio');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = usuario.value.trim();
	const edadValue = edad.value.trim();
   const domicilioValue = domicilio.value.trim();
    const emailValue = email.value.trim();
	
	
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}
	if(edadValue === '') {
		setErrorFor(edad, 'No puede dejar la edad en blanco');
	} else {
		setSuccessFor(edad);
	}
	
	if(domicilioValue === '') {
		setErrorFor(domicilio, 'No puede dejar el domicilio en blanco');
	} else{
        setSuccessFor(domicilio);
    }
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);}
