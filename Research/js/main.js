const menuBtn=document.querySelector('.menu_btn');
const menuClose=document.querySelector('.menu_close');
const menuList=document.querySelector('.menu_list');
menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu_list_open')
});
menuClose.addEventListener('click', ()=>{
	menuList.classList.remove('menu_list_open')
});