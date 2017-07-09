var images = document.getElementsByTagName('img');
var overlay = document.getElementById('overlay');


function showOverlay() {
	overlay.className = 'show';
}

function hideOverlay() {
	overlay.className = 'hide';
}

for (var i = 0; i < images.length; i++) {
	images[i].onclick= showOverlay;
}

//user clicks image

//#overlay is displayed

//overlay image gets src of clicked image

//overlay p gets alt of clicked image



