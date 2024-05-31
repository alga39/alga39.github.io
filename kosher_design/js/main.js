const menuBtn=document.querySelector('.menu_btn');
const menuClose=document.querySelector('.menu_close');
const mainBoxMenu=document.querySelector('.main_box_menu');

menuBtn.addEventListener('click', ()=>{
	mainBoxMenu.classList.toggle('main_box_menu_active')
});
menuClose.addEventListener('click', ()=>{
	mainBoxMenu.classList.remove('main_box_menu_active')
});