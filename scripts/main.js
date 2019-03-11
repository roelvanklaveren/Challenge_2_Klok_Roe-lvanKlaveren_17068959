var mainHeading = document.getElementById('mainHeading');

var tl1 = new TimelineMax();
tl1.to(mainHeading, 1, {top: 100, ease: Sine.easeInOut})
   .to(mainHeading, 1, {left: 100, ease: Sine.easeInOut})
   .to(mainHeading, 1, {top: 8, ease: Sine.easeInOut})
   .to(mainHeading, 1, {left: 8, ease: Sine.easeInOut});
