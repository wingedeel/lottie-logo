// https://github.com/airbnb/lottie-web
// Based on this pen: https://codepen.io/celli/pen/NjvrGW


var animationWindow = document.querySelector('#animationWindow');
var ele_anim_o = document.querySelector('#anim-o');
var animData_o = {
		wrapper: ele_anim_o,
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: false,
		path: 'json/logo-o.json'
	};

var anim_o = bodymovin.loadAnimation(animData_o);
anim_o.setSpeed(0.5);


var ele_anim_i = document.querySelector('#anim-i');
var animData_i = {
		wrapper: ele_anim_i,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-i.json'
	};

var anim_i = bodymovin.loadAnimation(animData_i);
anim_i.setSpeed(0.5);


var ele_anim_c = document.querySelector('#anim-c');
var animData_c = {
		wrapper: ele_anim_c,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-c.json'
	};

var anim_c = bodymovin.loadAnimation(animData_c);
anim_c.setSpeed(0.5);

var ele_anim_e = document.querySelector('#anim-e');
var animData_e = {
		wrapper: ele_anim_e,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-e.json'
	};

var anim_e = bodymovin.loadAnimation(animData_e);
anim_e.setSpeed(0.5);


var ele_anim_dot = document.querySelector('#anim-dot');
var animData_dot = {
		wrapper: ele_anim_dot,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-dot.json'
	};

var anim_dot = bodymovin.loadAnimation(animData_dot);
anim_dot.setSpeed(0.5);


var ele_anim_l = document.querySelector('#anim-l');
var animData_l = {
		wrapper: ele_anim_l,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-l.json'
	};

var anim_l = bodymovin.loadAnimation(animData_l);
anim_l.setSpeed(0.5);
	
//---------------------------
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnRewind = document.getElementById('rewind');
const btnPlusY = document.getElementById('plusY');
const btnMinusY = document.getElementById('minusY');
const btnColor = document.getElementById('color');
const btnColorOrig = document.getElementById('colorOrig');



//---------------------------




btnPlay.addEventListener('click', function() {
		anim.play();
		anim.setDirection(1);
});
btnPause.addEventListener('click', function() {
	anim.pause();
});
btnRewind.addEventListener('click', function() {
	anim.setDirection(-1);
	anim.play();
});
btnPlusY.addEventListener('click', function() {
	TweenMax.to(animationWindow, 1, {y:"-=100",  ease:Circ.easeOut});
});
btnMinusY.addEventListener('click', function() {
TweenMax.to(animationWindow, 1, {y:"+=100",  ease:Circ.easeOut});
});
btnColor.addEventListener('click', function() {
	console.log('button color clicked');
	TweenMax.to(animationWindow, 0.5, {backgroundColor:"#dddddd"});
});
btnColorOrig.addEventListener('click', function() {
	console.log('button color orig clicked');
	TweenMax.to(animationWindow, 0.5, {backgroundColor:"#ffffff"});
});


//---------------------------
// HOVER AREAs
// ele_anim_l.addEventListener('mouseover', function() {
// 		anim.playSegments([0,75], true);
// 		console.log('mouseover');
// });

// ele_anim_l.addEventListener('mouseout', function() {
// 		anim.playSegments([75,150], true);
// 		console.log('mouseout');
// });

const hover_o = document.getElementById('hover-o');
const hover_l = document.getElementById('hover-l');
const hover_i = document.getElementById('hover-i');

hover_o.addEventListener('mouseover', function() {
		anim_o.playSegments([0,75], true);
		console.log('mouseover anim_o');
});

hover_o.addEventListener('mouseout', function() {
		anim_o.playSegments([0,75], true);
		console.log('mouseout anim_o');
});
//---------------------------
hover_l.addEventListener('mouseover', function() {
		anim_l.playSegments([0,75], true);
		console.log('mouseover anim_l');
});

hover_l.addEventListener('mouseout', function() {
		anim_l.playSegments([0,75], true);
		console.log('mouseout anim_l');
});

//---------------------------
hover_i.addEventListener('mouseover', function() {
		anim_i.playSegments([0,75], true);
		console.log('mouseover anim_i');
});

hover_i.addEventListener('mouseout', function() {
		anim_i.playSegments([0,75], true);
		console.log('mouseout anim_i');
});