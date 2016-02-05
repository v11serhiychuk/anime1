window.requireModules = [];
admixRequire(['html5api_0.0.1'],function(admixAPI){
	function prevent(_event) {
		if (_event) {
			_event.returnValue = false;
			_event.cancelBubble = true;
			if (_event.preventDefault) {
				_event.preventDefault();
			}
			if (_event.stopPropagation) {
				_event.stopPropagation();
			}
		}
	}
	admixAPI.init({
		'initial' : {
			'fixed' : {
			 'vAlign' : 'bottom',
			 'hAlign' : 'center'
			 },
			'width' : '100%',
			'height' : '180px'
		}
	});

	function $(id){
		return document.getElementById(id);
	}
	var timeline = new TimelineLite();
	var sLogo = $('small_logo');
	var close = $('close');

	close.onclick = function(_event){
		prevent(_event);
		admixAPI.close();
	};
	document.body.onclick = function(_event){
		prevent(_event);
		admixAPI.click('https://kf.ua/');
	};
	document.body.onselectstart = function() {
		return false;
	}
});