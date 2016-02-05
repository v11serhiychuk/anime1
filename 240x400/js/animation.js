;	var countStep1 = 0;
	var	dataStep1 = 0;
	var	countRunStep1 = 0;
	
	function $(id){
		return document.getElementById(id);
	};

	requestAnimationFrame(step1);

	// Show/grab text "Праздники закончились?"
	function step1() {
  		var slide0 = $('slide1');
	  		slide0.style.opacity = getOpacityByStep1();
	        console.log("countRunStep1  " + countRunStep1);
 		if (++countRunStep1 < 110){
 			requestAnimationFrame(step1);
			requestAnimationFrame(step2);
 		} else {
        	requestAnimationFrame(step3);
 		}
	};

	// Change first text
	function getOpacityByStep1() {
		if (countStep1 < 10) {
			setTimeout(function(){countStep1++;}, 600);
			return dataStep1+=0.05;
		}

		if (countStep1 >= 10 ) {
			setTimeout(function(){countStep1++;}, 600);
			return dataStep1-=0.05;
		}
	};

	var countStep2 = 0;
	var	opacityStep2 = 0;
	var	countRunStep2 = 0;

	//Show slide1(color christmas tree) and slide2(gift)
    function step2() {
    	if (countRunStep1 > 90) {
			var slide1 = $('slide0');
			var slide2 = $('slide2');

			opacityStep2+=0.01;

			slide1.style.opacity = opacityStep2;
			slide2.style.opacity = opacityStep2;

			if (countRunStep2++ < 120) requestAnimationFrame(step2);
		}
	};

	
	var countStep3 = 0;
	var	startTop = -119;
	var	countRunStep3 = 0;

	//Drop slide3(logo and text:"Праздники продолжаются!" )
	function step3() {
		if (countRunStep2 >50) {
			var slide3 = $('slide3');
					console.log("startTop " + startTop);
					startTop+=16.2;
	 				slide3.style.top =  startTop + "px";

	 		if (countRunStep3++ < 12) {
	 			requestAnimationFrame(step3);
	 		} else {
	 		    requestAnimationFrame(step4);	
	 		}
 		}
	};

	var countStep4 = 0;
	var	startBottom = -45;
	var	countRunStep4 = 0;

	// Raise button
	function step4() {
		if (startBottom < 37) {
			var slide4 = $('slide4');

	 		slide4.style.bottom = (startBottom+=5) + "px";

			if (countRunStep4++ < 20) requestAnimationFrame(step4);		 
		}
			
		if (startBottom > 36) {

			var i = 0;
			if (i++ < 140) requestAnimationFrame(moveBottomButton);
		}  
	};

	function moveBottomButton() {
		var slide5 = $('slide5');
		slide5.style.width = getWidth();

 		var i = 0;
		if (i++ < 140) requestAnimationFrame(moveBottomButton);
	};

	var up = "up";
	var	down = "down";
	var	infoMove = up;

	var	minW = 180;
	var	maxW = 191;
	var	dataW = 190;	

	function getWidth() {
		if (infoMove == up) { 
			return (dataW < maxW) ? (dataW+=0.3) : (infoMove = down)? --dataW: 1;				
		} else {
			return (dataW > minW) ? (dataW-=0.3) : (infoMove = up)? ++dataW: 1;				
		}
	};

 	function showText() {
 		var opacity = 0;

		for (var i = 0; i < 5; i++) {
			setTimeout(function() {
				opacity+=0.2;
				slide0.style.opacity = opacity;
			}, 1000); 
		}
	};

