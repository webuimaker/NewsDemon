
$(document).ready(function() {

	$('div.horns-img:in-viewport').each(function() {
		$(this).attr("spun", "1");
	});

	$(window).bind("scroll", function(event) {

    $('#hr_break_horns_01 > div.horns-img:in-viewport').each(function() {
			//console.log($(this).attr("spun"));
      if ($(this).attr("spun") != 1) {
			  var elm = this;
			  var newone = elm.cloneNode(true);
			  elm.parentNode.replaceChild(newone, elm);
				$(newone).css('visibility', 'visible');
        $(newone).attr("spun", "1");
      }
		});
    $('#hr_break_horns_01 > div.horns-img:above-the-top').each(function() {
			$(this).css('visibility', 'hidden');
      $(this).attr("spun", "0");
    });
    $('#hr_break_horns_01 > div.horns-img:below-the-fold').each(function() {
			$(this).css('visibility', 'hidden');
      $(this).attr("spun", "0");
    });

    $('#hr_break_horns_02 > div.horns-img:in-viewport').each(function() {
			//console.log($(this).attr("spun"));
      if ($(this).attr("spun") != 1) {
			  var elm = this;
			  var newone = elm.cloneNode(true);
			  elm.parentNode.replaceChild(newone, elm);
				$(newone).css('visibility', 'visible');
        $(newone).attr("spun", "1");
      }
		});
    $('#hr_break_horns_02 > div.horns-img:above-the-top').each(function() {
			$(this).css('visibility', 'hidden');
      $(this).attr("spun", "0");
    });
    $('#hr_break_horns_02 > div.horns-img:below-the-fold').each(function() {
			$(this).css('visibility', 'hidden');
      $(this).attr("spun", "0");
    });


  });

});
