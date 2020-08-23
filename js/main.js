$('.slider-top').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
		},
		{
            breakpoint: 767,
            settings: {
				arrows: false,
				dots: false,
            }
        }
    ]
});

$('.slider-brands').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 767,
            settings: {
				arrows: false,
				adaptiveHeight: true,
            }
		},
		{
            breakpoint: 767,
            settings: {
				arrows: false,
				adaptiveHeight: true,
				slidesToShow: 3,
				
            }
        }
    ]
});

$('.leader-positiions-wrap').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
		{
            breakpoint: 991,
            settings: {
				arrows: false,
				slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
				arrows: false,
				slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
				arrows: false,
				slidesToShow: 1,
				centerMode: true,
            }
        }
    ]
});

$('.image-photo-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.image-photo-slider-nav'
});
$('.image-photo-slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.image-photo-slider',
	dots: false,
	centerMode: false,
	focusOnSelect: true
});

//tabs load
var wrapTab = document.getElementById("myTabContent");
var elemTab = wrapTab.getElementsByClassName("tab-pane");

setTimeout( function(){
    for (var i = 0; i < elemTab.length; i++) {
        elemTab[i].style.display = "";
    }
}, 1000);

//sub-menu
var sectionCatalog = document.getElementsByClassName('assort-section');
var subMenu = document.getElementsByClassName('sub-menu');
for (var i = 0; i < sectionCatalog.length; i++) {
    sectionCatalog[i].addEventListener('mouseenter', showSub, false);
    sectionCatalog[i].addEventListener('mouseleave', hideSub, false);
}

function showSub(e) {
    //this.childNodes[3].classList.add('active');
    
    
}

function hideSub(e) {
    if(this.childNodes[3].classList.contains(subMenu) ) {
       
    } else {
       return false;
    }
}

/*
function initMenuEvents() {
	const menus = document.querySelectorAll('.menu');
	menus.forEach(function(menu) {
		menu.addEventListener('mouseenter', function(evt) {
			if (menu.parentElement.classList.contains('menu__wrapper')) {
				menu.parentElement.parentElement.classList.add('menu__item--expanded');
			}
			menu.dispatchEvent(new Event('menuitemexpanded'));
		});
		menu.addEventListener('mouseleave', function(evt) {
			if (menu.parentElement.classList.contains('menu__wrapper')) {
				menu.parentElement.parentElement.classList.remove('menu__item--expanded');
			}
			for (let i = 0; i < menu.children.length; i ++) {
				let child = menu.children.item(i);
				child.classList.remove('menu__item--focused');
				clearTimeout(child.timerId);
			}
			menu.dispatchEvent(new Event('menuitemcollapsed'));
		});
	});

	const items = document.querySelectorAll('.menu__item');
	items.forEach(function(item) {
		let timeoutMs = 70;
		item.addEventListener('mouseenter', function(evt) {

			item.timerId = setTimeout(function() {

				item.dispatchEvent(new Event('mouseentermenu'));

				for (let i = 0; i < item.parentElement.children.length; i++) {

					let child = item.parentElement.children.item(i);

					if (child.classList.contains('menu__item--expanded')) {

						return;
					}
				}

				if (!$('.menu--promo .menu__item--focused').hasClass('menu__item--expanded')) {

					$('.menu--promo .menu__item--focused').removeClass('menu__item--focused');
				}
				item.classList.add('menu__item--focused');
				item.dispatchEvent(new Event('menuitemfocused'));
			}, timeoutMs);
		});

		item.addEventListener('mouseleave', function(evt) {

			this.dispatchEvent(new Event('menuitemlostfocus'));

			if (item.timerId) {

				clearTimeout(item.timerId);
			}

			if (!this.closest('.menu--promo')) {

				this.classList.remove('menu__item--focused');
			}
		});
	});
}

function emulateMenuTouch() {
	const items = document.querySelectorAll('.menu__item--parent');
	items.forEach(function(item) {
		item.addEventListener('touchstart', function(evt) {
			if (!item.classList.contains('menu__item--focused')) {
				evt.preventDefault();
				item.dispatchEvent(new Event('mouseenter'));
			}
		});
	});
}

*/


