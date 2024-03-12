const input_pass=document.getElementById('form_pswd');
const icon_pass=document.getElementById('pswd_icon');
icon_pass.addEventListener('click', ()=>{
	if (input_pass.getAttribute('type')==="password"){
		input_pass.setAttribute('type', 'text');
	}
	else{
		input_pass.setAttribute('type','password');
	}
});

document.getElementById('popup_open').addEventListener("click", function(){
	document.getElementById('popup_reg').classList.add("open")
})
document.getElementById('popup_close').addEventListener("click", function(){
	document.getElementById('popup_reg').classList.remove("open")
})

function validation(form){
	function removeError(input){
		const parent=input.parentNode;
		if (parent.classList.contains('error')){
			parent.querySelector('.error_label').remove()
			parent.classList.remove('error')
		}
	}
	function createError(input, text){
		const parent=input.parentNode;
		const errorLabel=document.createElement('label')
		errorLabel.classList.add('error_label')
		errorLabel.textContent=text
		parent.classList.add('error')
		parent.append(errorLabel)
	}
	let result=true;
	const allinputs=form.querySelectorAll('input');
	for (const input of allinputs){
		removeError(input)
		if (input.value==""){
			console.log('error')
			createError(input, 'field is not filled')
			result=false
		}
	}
	return result
}
document.getElementById('new_form').addEventListener('submit', function(event){
	event.preventDefault()
	if (validation(this)==true){
		/*alert('form ready')*/
	}
})