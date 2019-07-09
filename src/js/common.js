// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$(document).ready(function() {
    function navScroll() {

        let y = window.scrollY;
        if (y > 80) {
            if ($('body').hasClass('homepage')) {
                $('.header').removeClass('mobile-transparent');
                $('.header').addClass('white');
                $('.header-desktop-menu-toggle').addClass('blue');
                $('.header .logo').attr('src', '/assets/img/assets/header/logo__dark.svg');
                $('.header-desktop-menu-toggle').removeClass('white');
            }
        } else {
            if ($('body').hasClass('homepage')) {
                $('.header').removeClass('white');
                $('.header-desktop-menu-toggle').removeClass('blue');
                $('.header').addClass('mobile-transparent');
                $('.header .logo').attr('src', '/assets/img/assets/header/logo__white.svg');
                $('.header-desktop-menu-toggle').addClass('white');
            }
        }
    }

    $(window).scroll(function() {
        navScroll();
    });

    $(document).ready(function() {
        navScroll();
    });


    function suppliersFixedMenu() {
        $('.page-fixed-menu-list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 160
            }, 500);
        });
    }

    function suppliersMenu() {
        $('.suppliers-profile-banner-menu-list a[href*=\\#], .product-page-banner-menu-list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 98
            }, 500);
        });
    }
    suppliersMenu();


    function categoryMenu() {
        $('.left-sidebar-menu a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 120
            }, 500);
        });
    }
    categoryMenu();


    $('button.hamburger').addClass('is-unactive');
    $('button.hamburger').on("click", function() {
        let toggleHamburgerClass = $(this);

        if (toggleHamburgerClass.hasClass('is-unactive')) {
            toggleHamburgerClass.removeClass('is-unactive');
            toggleHamburgerClass.addClass('is-active');
        } else {
            toggleHamburgerClass.removeClass('is-active');
            toggleHamburgerClass.addClass('is-unactive');
        }
    });


    function toggleSubMenuBar() {
        $('.header-desktop-menu-toggle').on("click", function() {
            let toggleSubMenu = $('.desktop-toggle-menu-wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                toggleSubMenu.removeClass('opened');
            } else {

                if($('.registration-toggle-menu').hasClass('opened')) {               
                    $('.registration-toggle-menu').removeClass('opened');
                    $('.registration-toggle-menu--button').removeClass('active');
                }



                toggleSubMenu.addClass('opened');
            }
        });
    }
    toggleSubMenuBar();


    function registrationToggleMenuBar() {
        $('.registration-toggle-menu--button').on("click", function() {

            let toggleSubMenu = $('.registration-toggle-menu');
            let toggleSubMenuButton = $('.registration-toggle-menu--button');

            if (toggleSubMenu.hasClass('opened')) {
                toggleSubMenuButton.removeClass('active');
                toggleSubMenu.removeClass('opened');
            } else {

                if($('.desktop-toggle-menu-wrapper').hasClass('opened')) {
                    $('.header-desktop-menu-toggle').removeClass('is-active');
                    $('.header-desktop-menu-toggle').addClass('is-unactive');                    
                    $('.desktop-toggle-menu-wrapper').removeClass('opened');
                }


                toggleSubMenuButton.addClass('active');
                toggleSubMenu.addClass('opened');
            }
        });
    } 
    registrationToggleMenuBar();


    function toggleSearchBar() {
        $('.header-navigation-search-toggle').on("click", function(e) {
            e.stopPropagation();

            let searchIcon = $(this).find('.search-icon');
            let closeIcon = $(this).find('.close-icon');


            let toggleSubMenu = $('.desktop-toggle-menu-block-wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                searchIcon.addClass('visible');
                closeIcon.removeClass('visible');
                toggleSubMenu.removeClass('opened');
            } else {


                if($('.desktop-account-toggle-menu').hasClass('opened')) {               
                    $('.desktop-account-toggle-menu').removeClass('opened');
                    $('.header-account-button').removeClass('dropdown-rotation');
                }


                toggleSubMenu.addClass('opened');
                searchIcon.removeClass('visible');
                closeIcon.addClass('visible');
            }


        });

        $(document).click(function(event) {

            let searchIcon = $(this).find('.search-icon');
            let closeIcon = $(this).find('.close-icon');
            let toggleSubMenu = $('.desktop-toggle-menu-block-wrapper');

            if ($(event.target).closest('.desktop-toggle-menu-block-wrapper').length == 0) {
                toggleSubMenu.removeClass('opened');
                closeIcon.removeClass('visible');
                searchIcon.addClass('visible');
            }
        });
    }
    if ($('body').hasClass('authorized')) {
        toggleSearchBar();
    }

    
    function headerAccountButton() {
        let headerAccountButtonWidth = $('.header-account-button').width();
        let desktopToggleMenuWidth = $('.desktop-toggle-menu').width();
        let toggleMenuSearchBarWidth = $('.desktop-toggle-menu--search-bar').css('width', desktopToggleMenuWidth + 48 + 20);
        let toggleMenuSearchButton = $('.desktop-toggle-menu--search-button').css('width', headerAccountButtonWidth + 45);


        let supplierfilteringBlockWidth = $('.suppliers-filtering-desktop-block').width();
        let mainCategoriesSortingServicesBlock = $('.main-categories-sorting-services .main-categories-sorting-block ').css('width', supplierfilteringBlockWidth + 42);


        $('.header-account-button').on("click", function(e) {
            e.stopPropagation()

            let headerAccountButton = $(this);
            let desktopAccountToggleMenu = $('.desktop-account-toggle-menu');

            if (desktopAccountToggleMenu.hasClass('opened')) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown-rotation');
            } else {

                if($('.desktop-toggle-menu-block-wrapper').hasClass('opened')) {    

                let searchIcon = $('.header').find('.search-icon');
                let closeIcon = $('.header').find('.close-icon');

                    searchIcon.addClass('visible');
                    closeIcon.removeClass('visible');           
                    $('.desktop-toggle-menu-block-wrapper').removeClass('opened');
                }

                desktopAccountToggleMenu.addClass('opened');
                headerAccountButton.addClass('dropdown-rotation');
            }
        });


        $(document).on("click", function(event) {

            let desktopAccountToggleMenu = $('.desktop-account-toggle-menu');
            let headerAccountButton = $('.header-account-button');

            if ($(event.target).closest('.desktop-account-toggle-menu').length == 0) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown-rotation');
            }
        });
    }
    headerAccountButton();




    $('img.svg').each(function() {
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            let $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
});