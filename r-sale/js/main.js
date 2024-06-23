const dropdown=document.querySelectorAll('.dropdown');
dropdown.forEach(dropdown=>{
	const select=dropdown.querySelector('.select');
	const caret=dropdown.querySelector('.caret');
	const menu=dropdown.querySelector('.select_menu');
	const options=dropdown.querySelectorAll('.menu_list');
	const selected=dropdown.querySelector('.selected');
	select.addEventListener('click', () =>{
		select.classList.toggle('select-clicked');
		caret.classList.toggle('caret-rotate');
		menu.classList.toggle('menu_list_open');
	});
	options.forEach(option=>{
		option.addEventListener('click', ()=>{
			selected.innerText=option.innerText;
			select.classList.remove('select-clicked');
			caret.classList.remove('caret-rotate');
			menu.classList.remove('menu_list_open');
			options.forEach(option=>{
				option.classList.remove('menu_list_active');
			});
			option.classList.add('menu_list_active')
		});
	});
});

'use strict'
const tabItem = document.querySelectorAll('.chat_inner_user_info_box_list_btn');
const tabContent = document.querySelectorAll('.tab_inner_content_list');
tabItem.forEach(function(element){
	element.addEventListener('click', open);
});
function open(evt){
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;
	tabItem.forEach(function(item){
		item.classList.remove('chat_inner_user_info_box_list_btn_active');
	});
	tabContent.forEach(function(item){
		item.classList.remove('tab_inner_content_list_active');
	});
	tabTarget.classList.add('chat_inner_user_info_box_list_btn_active');
	document.querySelector(`#${button}`).classList.add('tab_inner_content_list_active');
}


'use strict'
const popupItem = document.querySelectorAll('.popup_category_btn');
const popupContent = document.querySelectorAll('.popup_category_list');
popupItem.forEach(function(element){
	element.addEventListener('mousemove', open1);
});
function open1(evt){
	const popupTarget = evt.currentTarget;
	const button = popupTarget.dataset.button;
	popupItem.forEach(function(item){
		item.classList.remove('popup_category_btn_active');
	});
	popupContent.forEach(function(item){
		item.classList.remove('popup_category_list_active');
	});
	popupTarget.classList.add('popup_category_btn_active');
	document.querySelector(`#${button}`).classList.add('popup_category_list_active');
}



'use strict'
const popupCategoryList = document.querySelectorAll('.popup_category_list_btn');
const popupCategoryContent = document.querySelectorAll('.popup_category_list_item_content');
popupCategoryList.forEach(function(element){
	element.addEventListener('mousemove', open2);
});
function open2(evt){
	const popupTarget = evt.currentTarget;
	const button = popupTarget.dataset.button;
	popupCategoryList.forEach(function(item){
		item.classList.remove('popup_category_list_btn_active');
	});
	popupCategoryContent.forEach(function(item){
		item.classList.remove('popup_category_list_item_content_active');
	});
	popupTarget.classList.add('popup_category_list_btn_active');
	document.querySelector(`#${button}`).classList.add('popup_category_list_item_content_active');
}


document.getElementById('category_btn').addEventListener("click", function(){
	document.getElementById('category_box').classList.toggle("open")
})



window.addEventListener('keydown', (e) => {
	if (e.key === "Escape"){
		document.getElementById("category_box").classList.remove("open")	
	}
})


/*document.querySelector("#category_box .container_mod").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("category_box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});*/

document.getElementById('popup_close').addEventListener("click", function(){
	document.getElementById('category_box').classList.remove("open")
})


document.querySelector("#category_box .container_mod").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("category_box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

