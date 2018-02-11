// https://github.com/airbnb/lottie-web
// Based on this pen: https://codepen.io/celli/pen/NjvrGW


var animationWindow = document.querySelector('#animationWindow');
// var ele_anim_o = document.querySelector('#anim-o');
// var animData_o = {
// 		wrapper: ele_anim_o,
// 		animType: 'svg',
// 		loop: true,
// 		prerender: true,
// 		autoplay: false,
// 		path: 'json/logo-o.json'
// 	}, anim, tl;

// var anim = bodymovin.loadAnimation(animData_o);
// anim.setSpeed(1);
// anim.play();

var ele_anim_l = document.querySelector('#anim-l');
var animData_l = {
		wrapper: ele_anim_l,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: 'json/logo-l.json'
	}, anim_l, tl;

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

var anim = anim_l;

//---------------------------

ele_anim_l.addEventListener('mouseover', function() {
		anim.playSegments([0,75], true);
		console.log('mouseover');
});

ele_anim_l.addEventListener('mouseout', function() {
		anim.playSegments([75,150], true);
		console.log('mouseout');
});


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

