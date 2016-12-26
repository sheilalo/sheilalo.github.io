// Based on script from http://live.wdd.io/

var all_portfolio = [];
var featured_portfolio = [];
var Northwestern_portfolio = [];
var Caltech_portfolio = [];
var Edinburgh_portfolio = [];

$(document).ready(function(){

    // Create arrays of each type of portfolio item to make things easier
    $('.portfolio-item').each(function(){
        all_portfolio.push($(this));
    });

    $('.portfolio-item-featured').each(function(){
        featured_portfolio.push($(this));
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

    // Show "featured" by default
    $('#content-filter-featured').addClass('content-filter-active');
    $('.portfolio-item').hide();
    $('.portfolio-item-featured').show();

    // Setup handlers for click events
    $('#content-filter-featured').click(function(){
        $('.content-filter-active').removeClass('content-filter-active');
        $(this).addClass('content-filter-active');
        $('.portfolio-item').hide();
        $('.portfolio-item-featured').show();
    });
    
    $('#content-filter-all').click(function(){
        $('.content-filter-active').removeClass('content-filter-active');
        $(this).addClass('content-filter-active');
        $('.portfolio-item').show();
    });
    
    $('#content-filter-Northwestern').click(function(){
        $('.content-filter-active').removeClass('content-filter-active');
        $(this).addClass('content-filter-active');
        $('.portfolio-item-Caltech').hide();
        $('.portfolio-item-Edinburgh').hide();
        $('.portfolio-item-Northwestern').show();
    });
    
    $('#content-filter-Caltech').click(function(){
        $('.content-filter-active').removeClass('content-filter-active');
        $(this).addClass('content-filter-active');
        $('.portfolio-item-Caltech').show();
        $('.portfolio-item-Edinburgh').hide();
        $('.portfolio-item-Northwestern').hide();
    });

    $('#content-filter-Edinburgh').click(function(){
        $('.content-filter-active').removeClass('content-filter-active');
        $(this).addClass('content-filter-active');
        $('.portfolio-item-Caltech').hide();
        $('.portfolio-item-Edinburgh').show();
        $('.portfolio-item-Northwestern').hide();
    }); 
    
});