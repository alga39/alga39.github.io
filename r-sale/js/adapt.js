const menuBtn=document.querySelector('.menu_btn');
const menuClose=document.querySelector('.menu_close');
const menuList=document.querySelector('.menu_list_mobile');
const menuPopup=document.querySelector('.menu_link_btn_mobile');
const menuTest=document.querySelector('.test_btn');
const menuTestList=document.querySelector('.test_btn_list')
const menuTestListItem1=document.querySelector('.mobile_menu_list1')
const menuTestListItem2=document.querySelector('.mobile_menu_list2')
const menuTestListItem3=document.querySelector('.mobile_menu_list3')
const menuTestListItem4=document.querySelector('.mobile_menu_list4')
const menuTestListItem5=document.querySelector('.mobile_menu_list5')
const menuTestListItem6=document.querySelector('.mobile_menu_list6')
const menuTestListItem7=document.querySelector('.mobile_menu_list7')
menuBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu_list_open');
});
menuClose.addEventListener('click', ()=>{
	menuList.classList.remove('menu_list_open');
});
menuPopup.addEventListener('click', ()=>{
	menuList.classList.remove('menu_list_open');
})
menuTest.addEventListener('click', ()=>{
	menuTestList.classList.toggle('test_btn_list_open');
})
menuTestListItem1.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem2.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem3.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem4.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem5.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem6.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})
menuTestListItem7.addEventListener('click', ()=>{
	menuTestList.classList.remove('test_btn_list_open');
})