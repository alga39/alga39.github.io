$(document).ready(function(){
    // Функция для добавления/удаления класса "sticky" в зависимости от позиции прокрутки
    function toggleStickyHeader() {
        var header = $('.header');
        var scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    }
    
    // Вызов функции при загрузке страницы
    toggleStickyHeader();
    
    // Бургер
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu, .header__buttons').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function () {
        $('.header__burger, .header__menu, .header__buttons').removeClass('active');
        $('body').removeClass('lock');
    });
    
    // Обработчик события прокрутки страницы
    window.addEventListener('scroll', function() {
        toggleStickyHeader();
    });
});
