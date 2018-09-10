
$(document).ready(function() {


  $("button.plans-monthly-button").click(function() {
    $("div.plans-collection.monthly").scrollintoview({ duration: "slow", direction: "y", boost: 250, complete: function(event) {
      }
    });

    $("div.plans-collection.monthly").removeClass("flashy");
    setTimeout(function() {
      $("div.plans-collection.monthly").addClass("flashy");
    }, 10);
  })

  $("button.plans-multi-month-button").click(function() {
    $("div.plans-collection.multi-month").scrollintoview({ duration: "slow", direction: "y", boost: 250, complete: function(event) {
      }
    });

    $("div.plans-collection.multi-month").removeClass("flashy");
    setTimeout(function() {
      $("div.plans-collection.multi-month").addClass("flashy");
    }, 10);
  })

  $("button.plans-block-button").click(function() {
    $("div.plans-collection.block").scrollintoview({ duration: "slow", direction: "y", boost: 250, complete: function(event) {
      }
    });

    $("div.plans-collection.block").removeClass("flashy");
    setTimeout(function() {
      $("div.plans-collection.block").addClass("flashy");
    }, 10);
  })

});
