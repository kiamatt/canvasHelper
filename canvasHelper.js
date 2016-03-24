var ch = {
	getCanvas: function(canvas, id) {
		var top = canvas.css('top');
		var left = canvas.css('left');
		var svgwidth = canvas.width();
		var svgheight = canvas.height();
		var svg = $('<svg>Hey</svg>').attr({
			'xmlns': 'http://www.w3.org/2000/svg',
			'id': id});
		svg.css({'width': svgwidth,
			'height': svgheight,
			'top': top,
			'left': left,
			'position': 'absolute',
			'opacity': 0
		});
		svg.css({backgroundColor: 'black', 'z-index': 10});
		svg.insertAfter(canvas);
	},
	circle: function(svg, id, x, y, r) {
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute('cx', x);
		circle.setAttribute('cy', y);
		circle.setAttribute('r', r);
		circle.setAttribute('id', id);
		var svg = svg;
		svg.append(circle);
	},
	rect: function(svg, id, x, y, w, h) {
		var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rectangle.setAttribute('x', x);
		rectangle.setAttribute('y', y);
		rectangle.setAttribute('width', w);
		rectangle.setAttribute('height', h);
		rectangle.setAttribute('id', id);
		var svg = svg;
		svg.append(rectangle);
	}
};