'use strict'
const tabItem = document.querySelectorAll('.category_btn_item');
const tabContent = document.querySelectorAll('.category_box_item');
tabItem.forEach(function(element){
	element.addEventListener('click', open);
});
function open(evt){
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;
	tabItem.forEach(function(item){
		item.classList.remove('category_btn_item_active');
	});
	tabContent.forEach(function(item){
		item.classList.remove('category_box_item_active');
	});
	tabTarget.classList.add('category_btn_item_active');
	document.querySelector(`#${button}`).classList.add('category_box_item_active');

}