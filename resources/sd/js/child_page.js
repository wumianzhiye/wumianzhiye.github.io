$(function(){       
	
	//内页子栏目滑动效果
    var $el, leftPos, newWidth;
    
    var $navline = $(".navline");
    
    $navline
        .width($(".active a").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $navline.position().left)
        .data("origWidth", $navline.width());
        
    $(".sub_nav li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $navline.stop().animate({left: leftPos,width: newWidth});
    }, function() {
        $navline.stop().animate({left: $navline.data("origLeft"),width: $navline.data("origWidth")});    
    });	 
	  

    
});


	