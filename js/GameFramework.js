$(document).ready(function(){
	gf = {};

    $("#mygame").append("<div id='sprite1'>");
    $("#mygame").css("border-width","2px");
    $("#mygame").css("border-style","solid");
    
    $("#player1").css("backgroundImage","url('p1_spritesheet.png')");


    gf.animation = function(options) {
       var defaultValues = {
           url : false,
           height : 64,
           width : 64,
           numberOfFrames : 1,
           currentFrame : 0,
           rate : 30
		};
    	$.extend(this, defaultValues, options);
        if(this.url){
        	gf.addImage(this.url);
    	}
    }

    gf.setFrame = function(divId,frameNumber, frameDimension) {
    	$("#"+divId).css("bakgroundPosition", "" + frameNumber * frameDimension + "px 0px"); 
	}

	gf.animationHandles = {};



});