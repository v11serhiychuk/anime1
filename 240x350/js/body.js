window.requireModules = [];
admixRequire(['html5api_0.0.1'],function(admixAPI){
	admixAPI.init({
		'initial' : {
			'width' : '240px',
			'height' : '350px'
		}
	});
 
	document.body.onclick = function(){
		admixAPI.click('https://kf.ua/');
	};
});