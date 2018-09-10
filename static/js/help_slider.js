$(document).ready(function() {
  /* support init slide out */
  $('#right').tabSlideOut({
    action: 'hover',
    tabLocation: 'right',
    offset: '10%',
    handleOffset: '-83px',
    offsetReverse: true,
    handleOffsetReverse: true,
    onLoadSlideOut: false,
  });

  $('#right').removeClass('hidden-md hidden-lg');

  $(document).on('slideouttabopen slideouttabclose slideouttabbounce',function(event){
    var text = $(event.target).attr('id')+': '+event.type;
    $('#events').append(text+"\n");
  });
});
