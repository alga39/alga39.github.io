const menuBtn = document.querySelector('.menu_btn');
const menu=document.querySelector('.menu_list');
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu_list_active');
});