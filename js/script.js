
$(document).ready(function(){
	 $('.owl-carousel').owlCarousel({
items: 1,
loop: true,
margin: 10,
lazyLoad: true,
merge: true, 
video: true,
responsive:{  
320:{
items:2
},

575:{
items:3
},

767:{
items:3
}}
});
});

