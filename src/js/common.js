// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$(document).ready(function() {
    function navScroll() {

        let y = window.scrollY;
        if (y > 80) {
            if ($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('mobile_transparent');
                $('.header_wrapper').addClass('white');
                $('.desktop_toggle_menu_icon').addClass('blue');
                $('.header_wrapper .logo').attr('src', '/assets/img/assets/header/logo__dark.svg');
                $('.desktop_toggle_menu__item').removeClass('white');
            }
        } else {
            if ($('body').hasClass('homepage')) {
                $('.header_wrapper').removeClass('white');
                $('.desktop_toggle_menu_icon').removeClass('blue');
                $('.header_wrapper').addClass('mobile_transparent');
                $('.header_wrapper .logo').attr('src', '/assets/img/assets/header/logo__white.svg');
                $('.desktop_toggle_menu__item').addClass('white');
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
        $('.page_fixed_menu_list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 160
            }, 500);
        });
    }

    function suppliersMenu() {
        $('.suppliers_profile_banner_menu_list a[href*=\\#], .product_page_banner_menu_list a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 98
            }, 500);
        });
    }
    suppliersMenu();


    function categoryMenu() {
        $('.left_sidebar_menu a[href*=\\#]').on('click', function(event) {
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
        $('.desktop_toggle_menu_icon').on("click", function() {
            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                toggleSubMenu.removeClass('opened');
            } else {

                if($('.registration_toggle_menu').hasClass('opened')) {               
                    $('.registration_toggle_menu').removeClass('opened');
                    $('.registration_toggle_menu_button').removeClass('active');
                }



                toggleSubMenu.addClass('opened');
            }
        });
    }
    toggleSubMenuBar();


    function registrationToggleMenuBar() {
        $('.registration_toggle_menu_button').on("click", function() {

            let toggleSubMenu = $('.registration_toggle_menu');
            let toggleSubMenuButton = $('.registration_toggle_menu_button');

            if (toggleSubMenu.hasClass('opened')) {
                toggleSubMenuButton.removeClass('active');
                toggleSubMenu.removeClass('opened');
            } else {

                if($('.desktop_toggle_menu_block_wrapper').hasClass('opened')) {
                    $('.desktop_toggle_menu_icon').removeClass('is-active');
                    $('.desktop_toggle_menu_icon').addClass('is-unactive');                    
                    $('.desktop_toggle_menu_block_wrapper').removeClass('opened');
                }


                toggleSubMenuButton.addClass('active');
                toggleSubMenu.addClass('opened');
            }
        });
    } 
    registrationToggleMenuBar();


    function toggleSearchBar() {
        $('.header_navigation_search_toggle').on("click", function(e) {
            e.stopPropagation();

            let searchIcon = $(this).find('.search_icon');
            let closeIcon = $(this).find('.close_icon');


            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if (toggleSubMenu.hasClass('opened')) {
                searchIcon.addClass('visible');
                closeIcon.removeClass('visible');
                toggleSubMenu.removeClass('opened');
            } else {


                if($('.desktop_account_toggle_menu').hasClass('opened')) {               
                    $('.desktop_account_toggle_menu').removeClass('opened');
                    $('.header_account_button').removeClass('dropdown_rotation');
                }


                toggleSubMenu.addClass('opened');
                searchIcon.removeClass('visible');
                closeIcon.addClass('visible');
            }


        });

        $(document).click(function(event) {

            let searchIcon = $(this).find('.search_icon');
            let closeIcon = $(this).find('.close_icon');
            let toggleSubMenu = $('.desktop_toggle_menu_block_wrapper');

            if ($(event.target).closest('.desktop_toggle_menu_block_wrapper').length == 0) {
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
        let headerAccountButtonWidth = $('.header_account_button').width();
        let desktopToggleMenuWidth = $('.desktop_toggle_menu').width();
        let toggleMenuSearchBarWidth = $('.desktop_toggle_menu__search_bar').css('width', desktopToggleMenuWidth + 48 + 20);
        let toggleMenuSearchButton = $('.desktop_toggle_menu__search_button').css('width', headerAccountButtonWidth + 45);


        let supplierfilteringBlockWidth = $('.suppliers_filtering_desktop_block').width();
        let mainCategoriesSortingServicesBlock = $('.main_categories_sorting_services .main_categories_sorting_block ').css('width', supplierfilteringBlockWidth + 42);


        $('.header_account_button').on("click", function(e) {
            e.stopPropagation()

            let headerAccountButton = $(this);
            let desktopAccountToggleMenu = $('.desktop_account_toggle_menu');

            if (desktopAccountToggleMenu.hasClass('opened')) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown_rotation');
            } else {

                if($('.desktop_toggle_menu_block_wrapper').hasClass('opened')) {    

                let searchIcon = $('.header_wrapper').find('.search_icon');
                let closeIcon = $('.header_wrapper').find('.close_icon');

                    searchIcon.addClass('visible');
                    closeIcon.removeClass('visible');           
                    $('.desktop_toggle_menu_block_wrapper').removeClass('opened');
                }

                desktopAccountToggleMenu.addClass('opened');
                headerAccountButton.addClass('dropdown_rotation');
            }
        });


        $(document).on("click", function(event) {

            let desktopAccountToggleMenu = $('.desktop_account_toggle_menu');
            let headerAccountButton = $('.header_account_button');

            if ($(event.target).closest('.desktop_account_toggle_menu').length == 0) {
                desktopAccountToggleMenu.removeClass('opened');
                headerAccountButton.removeClass('dropdown_rotation');
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