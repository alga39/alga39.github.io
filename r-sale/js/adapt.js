const menuBtn=document.querySelector('.menu_btn');
const menuClose=document.querySelector('.menu_close');
const menuList=document.querySelector('.menu_list_mobile');
const menuPopup=document.querySelector('.menu_link_btn_mobile');
menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu_list_open');
});
menuClose.addEventListener('click', ()=>{
	menuList.classList.remove('menu_list_open');
});
menuPopup.addEventListener('click', ()=>{
	menuList.classList.remove('menu_list_open');
})