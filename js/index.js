const globalSpeed = 1;

const projectData = 
[
	{id:'o', file: 'json/logo-o.json', segsIn:null, segsOut:null, anim:null},
	{id:'l', file: 'json/logo-l.json', segsIn:[0,11], segsOut:[78,88], anim:null},
	{id:'i', file: 'json/logo-i.json', segsIn:[13,25], segsOut:[90,100], anim:null},
	{id:'c', file: 'json/logo-c.json', segsIn:[25,39], segsOut:[102,113], anim:null},
	{id:'e', file: 'json/logo-e.json', segsIn:[41,54], segsOut:[115,127], anim:null},
	{id:'dot', file: 'json/logo-dot.json', segsIn:[56,69], segsOut:[129,141], anim:null},

]

for (let i=0; i<projectData.length; i++){
	let item = projectData[i];

	// Get dom element
	let ele = document.querySelector(`#anim-${item.id}`);
	// Load in animation and store anim ref
	let animData = {
		wrapper: ele,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: false,
		path: item.file
	};
	let animRef = bodymovin.loadAnimation(animData);
	item.anim = animRef;

	// Set speed
	item.anim.setSpeed(globalSpeed);

	// Get dom element for hover
	let ele_hover = document.querySelector(`#hover-${item.id}`);
	// Add mouseover and mouseout events
	if (item.segsIn != null){
		ele_hover.addEventListener('mouseover', function() {
			item.anim.playSegments(item.segsIn, true);
		});
	}
	if (item.segsOut != null){
		ele_hover.addEventListener('mouseout', function() {
			item.anim.playSegments(item.segsOut, true);
		});
	}

}
