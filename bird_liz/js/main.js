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

const tabItem = document.querySelectorAll('.tabs_btn_items');
const tabContent = document.querySelectorAll('.tabs_content_items');
tabItem.forEach(function(element){
  element.addEventListener('click', open);
})
function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_items_active');
  });
  tabTarget.classList.add('tabs_btn_items_active');
  tabContent.forEach(function(item) {
    item.classList.remove('tabs_content_items_active');
  });
  document.querySelector(`#${button}`).classList.add('tabs_content_items_active');
}