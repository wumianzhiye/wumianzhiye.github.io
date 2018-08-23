$(function(){       
	// 二级导航效果
	(function(){
		var li = $(".nav li"),
        	div = $(".suNav>.nav_more"),
        	innavline = $("span.innavline");
			ab=0;

        $(li).hover(function () {
	        index = $(this).index();

	        itLeft = $(div).eq(index).css("left");
	        // if(index == 2 || index == 3){
            if(index == 3){ 
	        	itWidth = 52;
	        }else{
	        	itWidth = 84;
	        }
            innavline.css({"left": itLeft,"width": itWidth+"px"});
	        Show(index);
	    });

        $(".header-wrapper").hover(function(){
        }, function () {
            $(".suNav").stop(true, false).fadeOut();
        }).trigger("mouseleave");

        function Show(index){
            if (index > 0 && index < 9) {
                $(".suNav").stop(true, true).fadeIn();
                $(div).eq(index).find("dd").hover(function(){
                	parentLeft = parseInt($(this).parents("div").css("left"));
                	itLeft = $(this).position().left+parentLeft;
                	itWidth = $(this).width()+32;
                	innavline.css({"left": itLeft,"width": itWidth+"px"});
                });
                $(div).eq(index).show().siblings("div").hide();               
            } else {
                $(".suNav").stop(true, true).fadeOut();
            };
        };



	})();

    //导航滑动效果
    $(".nav li").hover(function(){
		ab=$(".nav li").find("a").index($(".nav .active"));
    	$(".nav li").find("a").removeClass("active");
    	$(this).find("a").addClass("active");		
	},function(event){ 
		$(this).find("a").removeClass("active");
		$(".nav li").eq(ab).find("a").addClass("active");
	});
	
	$(".nav_more").mouseenter(function(){ 
		var childIndex=$(".nav_more").index($(this));		
		$(".nav li").find("a").removeClass("active");
		$(".nav li").eq(childIndex).find("a").addClass("active");
	})

	$(".nav_more").mouseleave(function(){
		$(".nav li").find("a").removeClass("active");
		$(".nav li").eq(ab).find("a").addClass("active");
	
	})
	

    
});


	