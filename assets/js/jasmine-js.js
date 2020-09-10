 (function($) {
 	//更改checkbox的值
 	$("[type=checkbox]").click(function() {
 		$(this).attr("value", $(this).attr('checked') ? "" : "checked");
 		$(this).attr("checked", $(this).is(":checked"));
 	});
 	$("[type=submit]").removeClass("button");
 })(jQuery);