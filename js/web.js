var i=0;
$(document).ready(function(){
	init();
});
$(document).on("pageinit",".ui-page", function () {
    $(this).css('background', "#CEECF5");
});
$('#slide-content-1').slideUp(0);
$('.clickme').click(function() {
	//$(this.hash).slideToggle(500);
	//$('#slide-'+this.id).slideToggle(200);
	//return false;  
	var arrData = new Array();
	arrData = data;
	alert(arrData.test[0].question.length);
});

$(".menu1").click(function(){
	
//	var arrData = new Array();
//	arrData = data;
//	var testNumber = arrData.test.length;
//	//alert(arrData.test.length);
//	$(".testList").empty();
//	for (var i =0;i < testNumber; i++) {
//		$(".testList").append("<h3>" + arrData.test[i].name + "</h3>");
//	}
	
	$.mobile.changePage("#page2", {
        transition: "slide",
        reverse: false
    });	
});

$(".menu2").click(function(){
	Database.openDbSqlite();
	Database.selectStatus();
});

$(".menu3").click(function(){	
	$(".question").html(arrQuestion[i].question);
	i++;
	if(i > arrQuestion.length - 1){
		i=0;
	}
});

$(".menu4").click(function(){
	Database.openDbSqlite();
	Database.createStatus();
});

$(".submenu").click(function(){
	alert(this.id);
});