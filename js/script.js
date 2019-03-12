var coordinates = {};
coordinates.string = "";
coordinates.x = 0;
coordinates.y = 0;

document.onmousemove = function(e)
{
    coordinates.x = e.pageX;
    coordinates.y = e.pageY;
    coordinates.string = "(x coordinates: "+coordinates.x+", y coordinates: "+coordinates.y+")";
    $("#coordinates").html(coordinates.string);
};
