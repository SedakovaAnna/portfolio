//мобильная навигация

	var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navList = $('.navigation__list');
	var navLink = $('.navigation__link');

	var navListOpen = 'navigation__list--open';
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times';

	navToggleButton.on('click', function(e){
		e.preventDefault();
		navList.toggleClass(navListOpen);

		if( navToggleIcon.hasClass(iconNav) ){
			navToggleIcon.removeClass(iconNav);
			navToggleIcon.addClass(iconClose);
		} else {
			navToggleIcon.removeClass(iconClose);
			navToggleIcon.addClass(iconNav);
		}

	});

	navLink.on('click', function(){

		if ( navList.hasClass(navListOpen) ) {
			if( navToggleIcon.hasClass(iconNav) ){
				navToggleIcon.removeClass(iconNav);
				navToggleIcon.addClass(iconClose);
			} else {
				navToggleIcon.removeClass(iconClose);
				navToggleIcon.addClass(iconNav);
			}
		}
		
		navList.removeClass(navListOpen);

	});