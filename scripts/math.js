(function()
{
	window.getParallelLines = function(points, offset, angle)
	{
		return joinSegments(closeSegments(interjectSegments(expandSegments(splitPoints(points, (angle || 90) * (Math.PI / 180), offset), offset))));
	};
	window.o_intersect = intersect;

	// line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
	// Determine the intersection point of two line segments
	// Return FALSE if the lines don't intersect
	function intersect(x1, y1, x2, y2, x3, y3, x4, y4) 
	{
	    // Check if none of the lines are of length 0
		if((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) 
		{
			return false;
		}

		denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

	    // Lines are parallel
		if(denominator === 0) 
		{
			return false
		}

		let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
		let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

	    // is the intersection along the segments
		if(ua < 0 || ua > 1 || ub < 0 || ub > 1) 
		{
			return false;
		}

	    // Return a object with the x and y coordinates of the intersection
		let x = x1 + ua * (x2 - x1)
		let y = y1 + ua * (y2 - y1)

		return {
			x: x, 
			y: y
		};
	}

	function splitPoints(points, angle, offset)
	{
		var segments = [];

		for(var i = 1; i < points.length; i++)
		{
			var point = points[i];
			var lastPoint = points[i - 1];

			var a = Math.atan2(point.y - lastPoint.y, point.x - lastPoint.x) + angle;

			var vx = Math.cos(a) * offset;
			var vy = Math.sin(a) * offset;

			segments.push({
				x: point.x + vx,
				y: point.y + vy, 
				x2: lastPoint.x + vx,
				y2: lastPoint.y + vy
			});
		}

		return segments;
	}

	function interjectSegments(segments)
	{	
		var newSegments = [segments[0]];

		for(var i = 1; i < segments.length; i++)
		{
			var lastSegment = segments[i - 1];
			var segment = segments[i];

			if(!intersect(segment.x - 0.1, segment.y + 0.1, segment.x2 + 0.1, segment.y2 - 0.1, 
							lastSegment.x, lastSegment.y, lastSegment.x2, lastSegment.y2))
			{
				newSegments.push({
					x: segment.x2,
					y: segment.y2,
					x2: lastSegment.x,
					y2: lastSegment.y
				});
			}

			newSegments.push(segment);
		}

		return newSegments;
	}

	function expandSegments(segments, amt)
	{	
		for(var i = 0; i < segments.length; i++)
		{
			var segment = segments[i];

			var angle = Math.atan2(segment.y - segment.y2, segment.x - segment.x2);

			var vx = Math.cos(angle) * amt;
			var vy = Math.sin(angle) * amt;

			if(i < segments.length - 1)
			{
				segment.x += vx;
				segment.y += vy;
			}
			if(i > 0)
			{
				segment.x2 -= vx;
				segment.y2 -= vy;
			}
		}

		return segments;
	}

	function closeSegments(segments)
	{
		for(var i = 1; i < segments.length; i++)
		{
			var segment = segments[i];
			var lastSegment = segments[i - 1];

			var int = intersect(
				segment.x, segment.y, segment.x2, segment.y2, 
				lastSegment.x, lastSegment.y, lastSegment.x2, lastSegment.y2);

			if(int)
			{
				lastSegment.x = int.x;
				lastSegment.y = int.y;
				segment.x2 = int.x;
				segment.y2 = int.y;

				continue;
			}
		}

		return segments;
	}


	function joinSegments(segments, points)
	{
		var points = [];

		var segment = segments[0];
		points.push({
			x: segment.x2,
			y: segment.y2
		});

		for(var i = 0; i < segments.length; i++)
		{
			points.push({
				x: segments[i].x,
				y: segments[i].y
			});
		}

		return points;
	}
}());