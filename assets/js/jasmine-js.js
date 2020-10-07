 (function($) {
     //更改checkbox的值
     $("[type=checkbox]").click(function() {
         $(this).attr("value", $(this).attr('checked') ? "" : "checked");
         $(this).attr("checked", $(this).is(":checked"));
     });
     $("[type=submit]").removeClass("button");
     var upload_frame;
     var value_id;
     $('.jasmine_bg').live('click', function(event) {
         value_id = $(this).attr('id');
         event.preventDefault();
         if (upload_frame) {
             upload_frame.open();
             return;
         }
         upload_frame = wp.media({
             title: '选择图片',
             button: {
                 text: '确定',
             },
             multiple: false
         });
         upload_frame.on('select', function() {
             attachment = upload_frame.state().get('selection').first().toJSON();
             $('input[name=' + value_id + ']').val(attachment.url);
         });
         upload_frame.open();
     });
 })(jQuery);