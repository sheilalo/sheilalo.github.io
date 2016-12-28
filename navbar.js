// Check if we're on mobile
if ($(window).width() < 768) {
  // If mobile, no caret for Projects dropdown
  var caret= '';
} else {
  // Not on mobile, add the caret
  var caret = '<span class="caret"></span>';
}

// Google Analytics script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89427036-1', 'auto');
ga('send', 'pageview');

document.getElementById("navMenu").innerHTML =
  '<nav class="navbar navbar-default navbar-fixed-top">' +
    '<div class="container">' +
      '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
          '<span class="sr-only">Toggle navigation</span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
          '<span class="icon-bar"></span>' +
        '</button>' +
        '<a class="navbar-brand" href="index.html">Sheila Lo</a>' +
      '</div>' +
      '<div id="navbar" class="navbar-collapse collapse">' +
        '<ul class="nav navbar-nav navbar-right">' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="aboutme.html">About Me</a></li>' +
          '<li><a href="portfolio.html">Portfolio</a></li>' +
          '<li><a href="https://www.linkedin.com/in/sheilalo" target="_blank">Resume</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        '</ul>' +
      '</div><!--/.nav-collapse -->' +
   '</div>' +
  '</nav>';