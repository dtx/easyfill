applyFill = function(path){
    document.body.style.backgroundImage = "url("+path+")"
    document.body.style.backgroundRepeat = "no-repeat"
    window.onload = function(){
        myImage = new Image()
        myImage.src=path
        console.log(myImage);
        console.log(document.images);
        data = getAverageRGB(myImage);
        console.log(data);
        rgb = data.rgb;
        fontrgb = data.fontColor;
        document.body.style.color = 'rgb('+fontrgb.r+','+fontrgb.g+','+fontrgb.b+')'; 
        console.log(rgb);
        document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
    }
}

