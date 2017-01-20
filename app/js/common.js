// по клику слайдер
$('#l-arrow, #r-arrow').on('click', function(){
$('#mymenu').fadeOut(200,function(){
var menu = $('#mymenu');
var first = $(menu).children('li').eq(0);
menu.append(first);
$('#mymenu').fadeIn(200);
});
});

// автопрокрутка
setInterval(function(){
	$('#mymenu').fadeOut(200,function(){
		var menu = $('#mymenu');
		var first = $(menu).children('li').eq(0);
	menu.append(first);
	$('#mymenu').fadeIn(200);
});
}, 7000);

// конец скрипта для слайдера

//аккордеон
$(document).ready(function(){
  $('.acc-article').not(':first').hide('.acc-article');
  
  $('.acc-title').click(function(){
    
    var findArticle = $(this).next('.acc-article');
    var findWrapper = $(this).closest('.wrapper');
    
    if (findArticle.is(':visible')){
      $('.acc-article').slideUp();
    }
    else{
      findWrapper.find('.acc-article').slideUp();
      findArticle.slideDown();
    }
    
  });

// end accordeon

//hover effect for accordeon
$('.wrapper').on('mouseenter', '.acc-sq', function(e){ 
toggleThisShit($(e.target)); 
}).on('mouseleave', '.acc-sq', function(e){ 
toggleThisShit($(e.target)); 
}); 

function toggleThisShit(el){ 
$(el).find('.plus').toggle(); 
$(el).find('.minus').toggle(); 
}	

});