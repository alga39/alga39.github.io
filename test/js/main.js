window.onscroll=function showHeaser(){
	var header=document.querySelector('.stick');
	if (window.pageYOffset>500){
		header.classList.add('stick_block') 
	}
	else{
		header.classList.remove('stick_block')
	}
}