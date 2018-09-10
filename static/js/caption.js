
$(document).ready(function() {
	$('div#guide_post img', this).each(function() {
		if ($(this).attr('title')) {
			//console.log($(this).attr('title'));
			$(this).addClass("wraption");
			$(this).wraption();
		}
	});
	//$('img.wraption').wraption();

	$("#guide_post a").attr("target","_blank");
	$('#guide_post a').html(function (idx, html){
		return html + '<span class="glyphicon glyphicon-new-window" style="padding-left: 2px;"></span>';
		});
});



