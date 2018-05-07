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

// фильтр
var filterButton = $('.filter-block__button');
	var filterButtonActive = 'filter-block__button--active';

	filterButton.on('click', function(){
		$(this).addClass(filterButtonActive).parent().siblings().children().removeClass(filterButtonActive);
});


// jQuery валидация
$("#contact-form").validate({
	rules: {
		name: { required: true },
		email: { required: true, email: true },
		// phone: { required: true },
		// skype: { required: true },
		message: { required: true }
	},

	messages: {
		name: "Пожалуйста, введите имя",
		email: {
			required: "Пожалуйста, введите свой email",
			email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
		},
		message: "Пожалуйста, введите текст сообщения"
	},

		submitHandler: function(form) {
		  ajaxFormSubmit();
		}
})

	// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}


});