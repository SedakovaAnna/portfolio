$(document).ready(function() {
	

//slide to id - плавная прокрутка

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id,a.mouse_scroll ").mPageScroll2id({
	    highlightSelector:"nav a"
	});

//MixItUp - фильтр работ в портфолио
$('#portfolio-projects').mixItUp();


// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
// End of FancyBox - galery


var filterButton = $('.filter-block__button');
	var filterButtonActive = 'filter-block__button--active';

	filterButton.on('click', function(){
		$(this).addClass(filterButtonActive).parent().siblings().children().removeClass(filterButtonActive);
});

});