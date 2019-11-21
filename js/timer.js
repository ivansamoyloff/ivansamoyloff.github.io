(function() {
	var _id = "0eade2fe7ba4c07866302c0b6075bcfc";
	while (document.getElementById("timer" + _id)) _id = _id + "0";
	document.write("<div id='timer" + _id + "' style='min-width:337px;height:59px;'></div>");
	var _t = document.createElement("script");
	_t.src = "//megatimer.ru/timer/timer.min.js";
	var _f = function(_k) {
		var l = new MegaTimer(_id, {
			"view": [1, 1, 1, 1],
			"type": {
				"currentType": "1",
				"params": {
					"usertime": true,
					"tz": "3",
					"utc": 1566864000000
				}
			},
			"design": {
				"type": "text",
				"params": {
					"number-font-family": {
						"family": "PFDinTextCondPro-Medium",
						"link": "<link href='../css/style.css' rel='stylesheet' type='text/css'>"
					},
					"number-font-size": "48",
					"number-font-color": "#fff",
					"separator-margin": "20",
					"separator-on": true,
					"separator-text": ":",
					"text-on": true,
					"text-font-family": {
						"family": "PFDinTextCondPro-Thin",
						"link": "<link href='../css/style.css' rel='stylesheet' type='text/css'>"
					},
					"text-font-size": "12",
					"text-font-color": "#fff"
				}
			},
			"designId": 1,
			"theme": "white",
			"width": 337,
			"height": 59
		});
		if (_k != null) l.run();
	};
	_t.onload = _f;
	_t.onreadystatechange = function() {
		if (_t.readyState == "loaded") _f(1);
	};
	var _h = document.head || document.getElementsByTagName("head")[0];
	_h.appendChild(_t);
}).call(this);
