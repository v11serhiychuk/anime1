;  	var countStep1 = 0;
	var	dataStep1 = 0;
	var	dataStep1Width = 25;
	var	countRunStep1 = 0;

	function $(id){return document.getElementById(id);};

	requestAnimationFrame(step1);

	// Show/grab text "Праздники закончились?"
	function step1() {
  		var slide0 = $('slide1');
	  	
	  	slide0.style.opacity = getOpacityByStep1();

	  	if (dataStep1Width <36) slide0.style.fontSize = dataStep1Width+=0.5;

 		if (++countRunStep1 < 100){
 			requestAnimationFrame(step1);
			requestAnimationFrame(step2);
 		} else {
        	requestAnimationFrame(step3);
 		}
	};

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
	
	var countStep2 = 0,
		dataStep2opacity1 = 0,
		dataStep2opacity2 = 0,
		countRunStep2 = 0;

	//Show slide1 and slide2
    function step2() {
    	if (countRunStep1 > 90) {
			var slide1 = $('slide0');
			var slide2 = $('slide2');

			dataStep2opacity1+=0.01;
			slide1.style.opacity = dataStep2opacity1;

			dataStep2opacity2+=0.01;
			slide2.style.opacity = dataStep2opacity2;

			if (countRunStep2++ < 120)	{
				requestAnimationFrame(step2);
			}
		}
	};

	var countStep3 = 0;
	var	startTop = -150;
	var	countRunStep3 = 0;

	//Drop slide3
	function step3() {
		if (countRunStep2 >50) {
			var slide3 = $('slide3');

				startTop+=13.8;
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
					startBottom+=3;
	 				slide4.style.bottom = startBottom + "px";
			if (countRunStep4++ < 20) {
				requestAnimationFrame(step4);
			}
		}
			
		if (startBottom > 17) {
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

	var	minW = 195;
	var	maxW = 206;
	var	dataW = 197;

	function getWidth() {
		if (infoMove == up) { 
			return (dataW < maxW) ? (dataW+=0.6) : (infoMove = down)? --dataW: 1;				
		} else {
			return (dataW > minW) ? (dataW-=0.6) : (infoMove = up)? ++dataW: 1;				
		}
	}

 	function showText() {
 		var opacity = 0;
		
		for (var i = 0; i < 5; i++) {
			setTimeout(function() {
				opacity+=0.2;
				slide0.style.opacity = opacity;
			}, 1000); 
		}
	};

