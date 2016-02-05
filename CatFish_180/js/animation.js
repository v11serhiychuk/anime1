	var countStep1 = 0,
		dataStep1 = 0,
		countRunStep1 = 0;
	
	
	requestAnimationFrame(step1);

	// Show/grab text "Праздники закончились?"
	function step1() {
  		var slide0 = document.getElementById('slide1');
	  		slide0.style.opacity = getOpacityByStep1();
	        console.log("countRunStep1  " + countRunStep1);
 		if (++countRunStep1 < 110){
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
		dataStep2opacity0_1 = 0,
		dataStep2opacity0_2 = 0,
		dataStep2opacity2 = 0,
		countRunStep2 = 0;

	//Show slide1 and slide2
    function step2() {

    	if (countRunStep1 > 90) {
			var slide0_1 = document.getElementById('slide0_1'),
			    slide0_2 = document.getElementById('slide0_2'),
			    slide2 = document.getElementById('slide2');

				dataStep2opacity0_1+=0.01;
				slide0_1.style.opacity = dataStep2opacity0_1;
				
				dataStep2opacity0_2+=0.01;
				slide0_2.style.opacity = dataStep2opacity0_2;

				// dataStep2opacity2+=0.01;
				// slide2.style.opacity = dataStep2opacity2;

			if (countRunStep2++ < 120)	{
				requestAnimationFrame(step2);
			}
				
		}
	};

	
		var countStep3 = 0,
		startTop = -182,
		countRunStep3 = 0;

	//Drop slide3
	function step3() {
		if (countRunStep2 >50) {
			var slide2 = document.getElementById('slide2'),
				slide3 = document.getElementById('slide3');
	 			
				startTop+=16.51;
 				slide2.style.top =  -startTop + "px";
 				slide3.style.top =  startTop + "px";

	 		if (countRunStep3++ < 10) {
	 			requestAnimationFrame(step3);
	 		} else {
	 		    requestAnimationFrame(moveBottomButton);
	 		}
 		}
	};
 
	function moveBottomButton() {
		var slide5 = document.getElementById('slide4');

			slide5.style.width = getWidth();

 		var i = 0;
		if (i++ < 140) requestAnimationFrame(moveBottomButton);
	};

		var up = "up",
			down = "down",
			infoMove = up,

			minW = 190,
			maxW = 200,
			dataW = 190;

	function getWidth() {
		if (infoMove == up) { 
			return (dataW < maxW) ? (dataW+=0.3) : (infoMove = down)? --dataW: 1;				
		} else {
			return (dataW > minW) ? (dataW-=0.3) : (infoMove = up)? ++dataW: 1;				
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

