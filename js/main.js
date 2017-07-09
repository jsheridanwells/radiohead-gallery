//STATUS: CANNOT GET SRC AND ALT ATTRITBUES ONCLICK
//CANNOT GET SRC AND ALT ATTR OF SPECIFIC IMAGE CLICKED
//REASON: 'THIS' IS WINDOW, NOT IMAGE. 
//HOW CAN WE MAKE THIS REFER TO IMAGE??

//select clickable elements
var $images = $('section img');//thumbnail images
var $overlay = $('#overlay');//overlay
var $left = $('#left');//left arrow
var $right = $('#right')//right arrow
var $source = '';
var $alt = '';

//show overlay
function showOverlay() {
	$($overlay).removeClass('hide');
	$($overlay).addClass('show');
}

//hide overlay
function hideOverlay() {
	$($overlay).removeClass('show');
	$($overlay).addClass('hide');
}

//get img src of thumbnail
function getSrc() {
	var image = $(this);
	console.log(image);
}

//get alt text of thumbnail
function getAlt() {
	$alt = $(this).attr('alt');
	console.log($alt);
}
//when thumbnail is clicked
$($images).click(function() {
	getSrc();
	getAlt();
	showOverlay();
});


//when outside space on overlay is clicked
$($overlay).click(hideOverlay);

//or when esc key is pressed
$(document).keyup(function(e){
	if(e.keyCode === 27) {
		hideOverlay();
	}
});



//overlay img src is thumbnail src
//overlay p text is thumbnail alt

//get img filename from array

//left arrow shows previous image in array
//right arrow shows next image in array


