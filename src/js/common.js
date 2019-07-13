// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$('button.hamburger').addClass('is-unactive');
$('button.hamburger').on('click', function() {
  const toggleHamburgerClass = $(this);

  if (toggleHamburgerClass.hasClass('is-unactive')) {
    toggleHamburgerClass.removeClass('is-unactive');
    toggleHamburgerClass.addClass('is-active');
  } else {
    toggleHamburgerClass.removeClass('is-active');
    toggleHamburgerClass.addClass('is-unactive');
  }
});

$(document).ready(function() {
  function navScroll() {
    const y = window.scrollY;
    if (y > 80) {
      if ($('body').hasClass('homepage')) {
        $('.header').removeClass('mobile--transparent');
        $('.header').addClass('white');
        $('.header__menu-toggle-button, .toggle-menu__item').addClass('blue');
        $('.header .logo').attr(
          'src',
          '/assets/img/assets/header/logo__dark.svg'
        );
        $('.header__menu-toggle-button, .toggle-menu__item').removeClass(
          'white'
        );
      }
    } else if ($('body').hasClass('homepage')) {
      $('.header').removeClass('white');
      $('.header__menu-toggle-button, .toggle-menu__item').removeClass('blue');
      $('.header').addClass('mobile--transparent');
      $('.header .logo').attr(
        'src',
        '/assets/img/assets/header/logo__white.svg'
      );
      $('.header__menu-toggle-button, .toggle-menu__item').addClass('white');
    }
  }

  $(window).scroll(function() {
    navScroll();
  });

  $(document).ready(function() {
    navScroll();
  });

  function toggleSubMenuBar() {
    $('.header__menu-toggle-button').on('click', function() {
      const toggleSubMenu = $('.header__toggle-menu');

      if (toggleSubMenu.hasClass('opened')) {
        toggleSubMenu.removeClass('opened');
      } else {
        if ($('.registration-toggle-menu').hasClass('opened')) {
          $('.registration-toggle-menu').removeClass('opened');
          $('.registration-toggle-menu-button').removeClass('active');
        }

        toggleSubMenu.addClass('opened');
      }
    });
  }
  toggleSubMenuBar();

  function registrationToggleMenuBar() {
    $('.registration-toggle-menu-button').on('click', function() {
      const toggleSubMenu = $('.registration-toggle-menu');
      const toggleSubMenuButton = $(this);

      if (toggleSubMenu.hasClass('opened')) {
        toggleSubMenuButton.removeClass('active');
        toggleSubMenu.removeClass('opened');
      } else {
        if ($('.desktop-toggle-menu-wrapper').hasClass('opened')) {
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

  $('img.svg').each(function() {
    const $img = $(this);
    const imgID = $img.attr('id');
    const imgClass = $img.attr('class');
    const imgURL = $img.attr('src');

    $.get(
      imgURL,
      function(data) {
        // Get the SVG tag, ignore the rest
        let $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', `${imgClass} replaced-svg`);
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (
          !$svg.attr('viewBox') &&
          $svg.attr('height') &&
          $svg.attr('width')
        ) {
          $svg.attr(
            'viewBox',
            `0 0 ${$svg.attr('height')} ${$svg.attr('width')}`
          );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      'xml'
    );
  });
});
