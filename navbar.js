// Check if we're on mobile
if ($(window).width() < 768) {
  // If mobile, no caret for Projects dropdown
  var caret= '';
} else {
  // Not on mobile, add the caret!
  var caret = '<span class="caret"></span>';
}

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
        '<ul class="nav navbar-nav">' +
          '<li><a href="index.html">Home</a></li>' +
          '<li><a href="aboutme.html">About Me</a></li>' +
          '<li class="dropdown">' +
            '<a href="portfolio.html" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Portfolio ' + caret + '</a>' +
            '<ul class="dropdown-menu">' +
              '<li class="dropdown-header">Northwestern</li>' +
              '<li><a href="evanstonc2c.html">Evanston Cradle to Career</a></li>' +
              '<li role="separator" class="divider"></li>' +
              '<li class="dropdown-header">Caltech</li>' +
              '<li><a href="allez.html">One Arm Wheelchair Drive</a></li>' +
              '<li><a href="fsae.html">FSAE Electric 2016</a></li>' +
              '<li><a href="me72.html">ME 72: Millikan Aquamania</a></li>' +
              '<li><a href="wishingwell.html">Wishing Well</a></li>' +
              '<li><a href="transmission.html">Transmission</a></li>' +
              '<li><a href="solardecathlon.html">Solar Decathlon 2013</a></li>' +
              '<li role="separator" class="divider"></li>' +
              '<li class="dropdown-header">Edinburgh</li>' +   
              '<li><a href="drawbench.html">Draw Bench</a></li>' +
              '<li><a href="quickrelease.html">Quick Release Mechanism</a></li>' +
              '<li><a href="ewb.html">EWB UK: Solar Water Pump</a></li>' +
            '</ul>' +
          '</li>' +
          '<li><a href="https://www.linkedin.com/in/sheilalo">Resume</a></li>' +
          '<li><a href="contact.html">Contact</a></li>' +
        '</ul>' +
      '</div><!--/.nav-collapse -->' +
   '</div>' +
  '</nav>';