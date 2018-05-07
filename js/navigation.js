//мобильная навигация иконка

	// var navToggleButton = $('.navigation__toggle');
	// var navToggleIcon = $('.navigation__toggle .fa');
	// var navList = $('.navigation__list');
	// var navLink = $('.navigation__link');

	// var navListOpen = 'navigation__list--open';
	// var iconNav = 'fa-bars';
	// var iconClose = 'fa-times';

	// navToggleButton.on('click', function(e){
	// 	e.preventDefault();
	// 	navList.toggleClass(navListOpen);

	// 	if( navToggleIcon.hasClass(iconNav) ){
	// 		navToggleIcon.removeClass(iconNav);
	// 		navToggleIcon.addClass(iconClose);
	// 	} else {
	// 		navToggleIcon.removeClass(iconClose);
	// 		navToggleIcon.addClass(iconNav);
	// 	}

	// });

	// navLink.on('click', function(){

	// 	if ( navList.hasClass(navListOpen) ) {
	// 		if( navToggleIcon.hasClass(iconNav) ){
	// 			navToggleIcon.removeClass(iconNav);
	// 			navToggleIcon.addClass(iconClose);
	// 		} else {
	// 			navToggleIcon.removeClass(iconClose);
	// 			navToggleIcon.addClass(iconNav);
	// 		}
	// 	}

	// 	navList.removeClass(navListOpen);

	// });

//мобильная навигация кнопка

var navToggleButton = $('#navigation__button');
var navToggleIcon = $('.navigation__toggle .fa');
var navList = $('.navigation__list');
var navLink = $('.navigation__link');
var navListOpen = 'navigation__list--open';
//клик по иконке
navToggleButton.on('click', function(e){
	e.preventDefault();
	navList.toggleClass(navListOpen);

	if ( navToggleButton.hasClass("active")) {
		navToggleButton.removeClass("active");
	} else {
		navToggleButton.addClass("active");
	}

});
//клик на ссылку
navLink.on('click', function(){

	if ( navList.hasClass(navListOpen) ) {

		if ( navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active");
		} else {
			navToggleButton.addClass("active");
		}
	}

	navList.removeClass(navListOpen);

});