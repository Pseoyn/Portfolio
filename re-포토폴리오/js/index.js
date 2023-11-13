//메뉴 클릭 시 이동

$(".menu_list li").click(function(){
	var gnbindex = $(this).index()+1;
	var length=0;
	for(var i=1; i<(gnbindex); i++)
	{
		length+=$(".page"+i).height();
	}
	if($("body").find("#wrap:animated").length >= 1) return false;
	$(this).addClass("on").siblings("li").removeClass("on");
	
	$("#wrap").animate({"top": -length + "px"},800, "swing");
	return false;
});