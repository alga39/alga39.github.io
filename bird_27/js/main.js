const menuBtn=document.querySelector('.menu_btn')
const menuCloce=document.querySelector('.menu_close_btn')
const menulist=document.querySelector('.menu')
const menuShadow=document.querySelector('.menu-close')


menuBtn.addEventListener('click', ()=>{
	menulist.classList.toggle('menu_list_open')
	menuShadow.classList.toggle('menu-open')
});
menuCloce.addEventListener('click', ()=>{
	menulist.classList.remove('menu_list_open')
	menuShadow.classList.remove('menu-open')
})

