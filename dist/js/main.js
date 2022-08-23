$('document').ready(function(){
    var showMenu = false;
    var menuBtn = $('.menu-btn');
    var hamburgerMenu = $('.menu-btn__burger');

    var nav = $('.nav');
    var menuNav = $('.menu-nav');
    var menuNavItems = $('.menu-nav__item');

    function toggleMenu(){
        if(!showMenu){
            hamburgerMenu.addClass('open');
            nav.addClass('open');
            menuNav.addClass('open');
            menuNavItems.each(function(){
                $(this).addClass('open');
            });
            showMenu = true;
        }
        else{
            hamburgerMenu.removeClass('open');
            nav.removeClass('open');
            menuNav.removeClass('open');
            menuNavItems.each(function(){
                $(this).removeClass('open');
            });
            showMenu = false;
        }
    }

    menuBtn.on('click', toggleMenu);

})
