/**
 * Created by Varun on 10/29/13.
 */
(function(){

	// Variable declaration
	var speed = 100,
		moveBy = 0,
			offset = 5;
		colorTime = 0,
  	waveTheta = 0,
  	maxCount = 100,
  	colorIncrement = -12,
  	waveIncrement = 0.1,
  	xPos = [ -2, -1, 0, 1, 2 ],
  	yPos = [ -2, -1, 0, 1, 2 ],
  	props = {};

	var init = function() {
	  setTimeout( animate, 1 );
	};

	//This function moves the text in page
	function moveText(moveBy){
    var text1 = document.getElementById('text');
    text1.style.marginTop = moveBy + 'px';
	};

	var timer = setInterval(function () {
		moveText(moveBy);
		moveBy = moveBy + offset;
		if(moveBy > 30){
			offset = offset * -1;
		}
    if(moveBy < 0){
    	offset = offset * -1;
    }}, speed);

	var getTextShadow = function( x, y, hue ) {
  	return ', ' + x + 'px ' + y + 'px hsl(' + hue + ', 100%, 50%)';
	};

	//This function is used to animate the text with color
	var animate = function() {
  	var shadows = '0 0 transparent',
    	  hue0 = colorTime % 360,
      	i, j, x, y,
      	iLen = xPos.length,
      	jLen = yPos.length;

  	// outline
  	for ( i = 0; i < iLen; i++ ) {
    	x = xPos[i];
    	for ( j = 0; j < jLen; j++ ) {
      	y = yPos[j];
      	shadows += getTextShadow( x, y, hue0 );
    	}
  	}

  	var groovy = document.getElementById('text');
  	groovy.style.textShadow = shadows;
  	colorTime += colorIncrement;
  	waveTheta += waveIncrement;
  	setTimeout( animate, 30 );
	};

	window.addEventListener( 'DOMContentLoaded', init, false);
}());
