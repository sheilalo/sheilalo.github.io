// Based on script from http://live.wdd.io/

var all_portfolio = [];
var Northwestern_portfolio = [];
var Caltech_portfolio = [];
var Edinburgh_portfolio = [];

$(document).ready(function(){
	
	$('#content-gallery').masonry({
		//columnWidth: 250,
		itemSelector: '.portfolio-item',
		//gutter: 15
	});
	
	$('.portfolio-item-Northwestern').each(function(){
		Northwestern_portfolio.push($(this));
	});
	
	$('.portfolio-item-Caltech').each(function(){
		Caltech_portfolio.push($(this));
	});

	$('.portfolio-item-Edinburgh').each(function(){
		Edinburgh_portfolio.push($(this));
	});
	
	$('.portfolio-item').each(function(){
		all_portfolio.push($(this));
	});
	
	
	$('.content-filter-all').click(function(){
		$('.content-filter-active').removeClass('content-filter-active');
		$(this).addClass('content-filter-active');
		$('.portfolio-item').show();
		$('#content-gallery').masonry('layout');
	});
	
	$('.content-filter-Northwestern').click(function(){
		$('.content-filter-active').removeClass('content-filter-active');
		$(this).addClass('content-filter-active');
		$('#content-gallery').masonry('hide', Caltech_portfolio);
		$('#content-gallery').masonry('hide', Edinburgh_portfolio);
		$('.portfolio-item-Northwestern').show();
		$('#content-gallery').masonry('layout');
	});
	
	$('.content-filter-Caltech').click(function(){
		$('.content-filter-active').removeClass('content-filter-active');
		$(this).addClass('content-filter-active');
		$('#content-gallery').masonry('hide', Northwestern_portfolio);
		$('#content-gallery').masonry('hide', Edinburgh_portfolio);
		$('.portfolio-item-Caltech').show();
		$('#content-gallery').masonry('layout');
	});

	$('.content-filter-Edinburgh').click(function(){
		$('.content-filter-active').removeClass('content-filter-active');
		$(this).addClass('content-filter-active');
		$('#content-gallery').masonry('hide', Northwestern_portfolio);
		$('#content-gallery').masonry('hide', Caltech_portfolio);
		$('.portfolio-item-Edinburgh').show();
		$('#content-gallery').masonry('layout');
	});	
	
});