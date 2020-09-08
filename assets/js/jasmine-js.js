 (function($) {
 	//更改checkbox的值
 	$("[type=checkbox]").click(function() {
 		console.log($(this).attr('checked') ? "checked" : "");
 		$(this).attr("value", $(this).attr('checked') ? "checked" : "");
 		$(this).attr("checked", $(this).is(":checked"));
 	});
 	$("[type=submit]").removeClass("button");
 })(jQuery);