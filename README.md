easyfill
========

A tool I made to choose the best background (provided you have an image) and font color for your websites, for all those peeps like me who hate choosing colors.

As of now the logic is fairly easy and mostly client-side (which I plan to change as I go). 

###Primary use case:
You add a background image to your body, but now you dont know which background color to do the color fill with! Of course, we can go with the ever-safe #FFFFFF (or 'white'), but meh! its not the same as choosing the 'right' color fill.
###Solution:
Research has shown, (btw, this research was conducted in my living room, ooh, the thoughts that run around in that place!), that the best color fill for an image's background is the average color of the entire image. This is precisely what I do. Also from assuming the RGB as 3 end points, calculating the centroid gives us a fair idea of the 'darkness' of the fill, this parameter is what I use to decide the font color (white or black)

Features currently being worked upon:
-Currently working on moving the core logic to the backend and maintaining a database. 
-Adding more responsive font colors, althought I just like white and black.
-Adding a front-end upload feature.
-Probably making a module out of this for a wider use. 

You are welcome to fork and pull. :)
