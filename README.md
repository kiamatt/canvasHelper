# Welcome to canvasHelper.js!

This is a very small, simple object that makes it easier to interact with parts of an HTML5 Canvas state as if they were individual elements using two simple steps:

1: canvasHelper appends a transparent svg element over a canvas element, matching it for location, width and height.

2: canvas Helper appends transparent rectangles or circles, with sizes and locations you choose, to the transparent svg element, and assigns them id's as well. Simply place the transparent elements over parts of the canvas state you wish to 'interact' with, and assign event listeners and click functions to your heart's content!

#Instructions are simple. 

Just call ch.getCanvas(canvas, id), passing in the jquery selector for the canvas element you wish to interact with, and the id of the svg element you're going to create and append.

Then, ch.circle(svg, id, x, y, r) passes in a jquery selector for your freshly created svg element, the id of the circle you wish to create, a cx and cy, and r.

Alternatively, use ch.rect(svg, id, x, y, w, h) to do the same for a rectangular shape with width and height values. And that's it! Have fun interacting with your canvas element!

#PS
jQuery is a dependency.

