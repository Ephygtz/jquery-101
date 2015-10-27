// Check if document has loaded..
	$(document).ready(function() {
		
		$('p').hide(); //Hides element

		$('h2').mouseenter(function () {
			$("p").show();	// body...
			$("body").css("background-color", "green");
		})

		$("#btn1").click(function () {
			// body...
			$("#content").append("This is my DIV with more content </br>");
		})
		$("#btn2").click(function () {
			// body...
			$(".fade").fadeOut("slow" 0.5);
		})

		//Add a css class to elements Div
		$("#btn1").addClass("leftcontent");
		$("#remove").addClass("rightcontent");
		$("#font").addClass("increasefont");
})