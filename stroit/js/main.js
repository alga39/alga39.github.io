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

'use strict'
const newsItem = document.querySelectorAll('.news_btn_item');
const newsContent = document.querySelectorAll('.news_list');
newsItem.forEach(function(element){
	element.addEventListener('click', newsOpen);
});
function newsOpen(newsEvt){
	const newsTarget = newsEvt.currentTarget;
	const newsButton = newsTarget.dataset.button;
	newsItem.forEach(function(newsItem){
		newsItem.classList.remove('news_btn_item_active');
	});
	newsContent.forEach(function(newsItem){
		newsItem.classList.remove('news_list_active');
	});
	newsTarget.classList.add('news_btn_item_active');
	document.querySelector(`#${newsButton}`).classList.add('news_list_active');
}