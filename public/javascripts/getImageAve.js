function getAverageRGB(imgEl) {
    console.log("inside me");
    //setting the default to black font and white background
    var easyfillData = {
        rgb:{r:255, g:255, b:255},
        fontColor:{r:0, g:0, b:0}
    }
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    console.log(height);
    console.log(width);
    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    easyfillData.rgb.r = rgb.r;
    easyfillData.rgb.g = rgb.g;
    easyfillData.rgb.b = rgb.b;
    if(getFontColor(rgb)){
        easyfillData.fontColor.r = 255;
        easyfillData.fontColor.g = 255;
        easyfillData.fontColor.b = 255;
    }
    return easyfillData;

}

getFontColor = function(rgb){
    total = rgb.r+rgb.g+rgb.b;
    total = total/3;
    if(total < 100){
        return true;
    }
    else
        return false;
};
