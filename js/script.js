
$(document).ready(function(){
//ex1
$('#btn').on("click",function(){
       alert("welcome");
   });

//ex2
$('#btnh').on("click",function(){
       $('#sh').hide();
   });
  $('#btns').on("click",function(){
       $('#sh').show();
   });

//ex3

$('#btnt').on("click",function(){
       $('#te').toggle();
   });



//ex4
$('#btnfh').on("click",function(){
       $('#fsh').fadeOut();
   });
  $('#btnfs').on("click",function(){
       $('#fsh').fadeIn();
   });



//ex5

$('#btnft').on("click",function(){
       $('#fte').fadeToggle();
   });


//ex6
$( "#btnsh" ).on( "click", function() {
  $( ".ps" ).show( "slow" );
});



//ex7

$( ".ph" ).hide();
$( ".ah" ).on( "click", function( event ) {
  event.preventDefault();
  $( this ).hide();
});


//ex8
$( "#btntt" ).on( "click", function() {
  $( ".pht" ).hide( "slow" );
});


//ex9

$("#btnst" ).on( "click", function() {
  $( ".pst" ).slideToggle( "slow" );
});


//ex10


$( "#go" ).on( "click", function() {
  $( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});







//ex11

$( "#right" ).on( "click", function() {
  $( ".man" ).animate({ "left": "+=50px" }, "slow" );
});
 
$( "#left" ).on( "click", function(){
  $( ".man" ).animate({ "left": "-=50px" }, "slow" );
});



//ex12

$( '.ansp').on( "click", function() {
  $( ".fid:hidden" ).first().fadeIn( "slow" );
} );






//ex13


$( ".pfo" ).on( "click", function() {
  $( ".pfo" ).fadeOut( "slow" );
});




//ex14
$( ".btnftog1" ).first().on( "click", function() {
  $( ".ptog1" ).first().fadeToggle( "slow", "linear" );
} );
$( ".btnftog2" ).last().on( "click", function() {
  $( ".ptog1" ).last().fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  } );
} );


//ex15


// Start animation
$( "#go" ).on( "click", function() {
  $( ".dstop" ).animate({ right: "+=100px" }, 2000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).on( "click", function() {
  $( ".dstop" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).on( "click", function() {
  $( ".dstop" ).animate({ left: "-=100px" }, 2000 );
});

//ex16


var $bsd = $( ".bsd" );
 
// Toggle a sliding animation animation
$( "#toggle" ).on( "click", function() {
  $bsd.stop().slideToggle( 1000 );
});

//ex17

$( document.body ).on( "click", function() {
  $( ".bq" )
    .show( "slow" )
    .animate( { left: "+=200" }, 2000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate( { left: "-=200" }, 500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    } )
    .slideUp();
} );


//ex18

$( "#start" ).on( "click", function() {
  $( ".bmove" )
    .show( "slow" )
    .animate({ left: "+=200" }, 5000 )
    .queue(function() {
      $( this ).addClass( "newcolor" ).dequeue();
    })
    .animate({ left: '-=200' }, 1500 )
    .queue(function() {
      $( this ).removeClass( "newcolor" ).dequeue();
    })
    .slideUp();
});
$( "#stop" ).on( "click", function() {
  $( ".bmove" )
    .queue( "fx", [] )
    .stop();
});

 //ex19

jQuery.fx.interval = 100;
$( "input" ).on( "click", function() {
  $( ".pid" ).toggle( 3000 );
});

 //ex20

var toggleFx = function() {
  $.fx.off = !$.fx.off;
};
toggleFx();
$( ".btntogof" ).on( "click", toggleFx );
$( ".inof" ).on( "click", function() {
  $( ".togof" ).toggle( "slow" );
} );


 //ex21

$( ".btndq" ).on( "click", function() {
  $( ".ddq" )
    .animate({ left:"+=200px" }, 2000 )
    .animate({ top:"0px" }, 600 )
    .queue(function() {
      $( this ).toggleClass( "red" ).dequeue();
    })
    .animate({ left:"10px", top:"30px" }, 700 );
});



 //ex22
$( ".pft" ).first().on( "click", function() {
  $( this ).fadeTo( "slow", 0.33 );
} );

 //ex23
$( ".pp" ).on( "click", function() {
  $( this ).toggleClass( "highlight" );
});



 //ex24
var count = 0;
$( ".pp2" ).each( function() {
  var $thisParagraph = $( this );
  var count = 0;
  $thisParagraph.on( "click", function() {
    count++;
    $thisParagraph.find( ".stog" ).text( "clicks: " + count );
    $thisParagraph.toggleClass( "highlight1", count % 3 === 0 );
  } );
} );



 //ex25
$( ".pp3" ).even().removeClass( "bluee" );
  
 

 //ex26

$( "#result1" ).append( $( ".p1" ).first().hasClass( "selected" ).toString() );
$( "#result2" ).append( $( ".p1" ).last().hasClass( "selected" ).toString() );
$( "#result3" ).append( $( ".p1" ).hasClass( "selected" ).toString() ) ;








 //ex27


$( ".pp4" ).last().addClass( "selected highlight" );





 //ex28

$( ".pp5" ).last().addClass( "selected" );





 //ex29

$( ".dcss" ).on( "click", function() {
  var color = $( this ).css( "background-color" );
  $( ".spcss" ).html( "That div is <span style='color:" +
    color + ";'>" + color + "</span>." );
});







 //ex30


$( ".dbss" ).on( "click", function() {
  var html = [ "The clicked div has the following styles:" ];
 
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value );
  });
 
  $( ".pcss" ).html( html.join( "<br>" ) );
});





 //ex31

$( ".dihi" ).one( "click", function() {
  $( this ).height( 30 ).css({
    cursor: "auto",
    backgroundColor: "green"
  });
});






 //ex32
var modHeight = 70;
$( ".dinhi" ).one( "click", function() {
  $( this ).innerHeight( modHeight ).addClass( "mod" );
  modHeight -= 8;
});





 //ex33
var modWidth = 60;
$( ".dinwid" ).one( "click", function() {
$( this ).innerWidth( modWidth ).addClass( "mod" );
modWidth -= 8;
});


 //ex34

var p = $( ".p2" ).first();
var position = p.position();
$( ".p3" ).last().text( "left: " + position.left + ", top: " + position.top );



 //ex35


$( ".demo" ).scrollLeft( 300 )



 //ex36

var modHeight = 60;
$( ".dohi" ).one( "click", function() {
  $( this ).outerHeight( modHeight ).addClass( "mod1" );
  modHeight -= 8;
});




 //ex37

var divdbl = $( ".ddbl" ).first();
divdbl.on( "dblclick", function() {
  divdbl.toggleClass( "dbl" );
} );



 //ex38

var i = 0;
$( "div.overout" )
  .on( "mouseover", function() {
    i += 1;
    $( this ).find( "span" ).text( "mouse over x " + i );
  } )
  .on( "mouseout", function() {
    $( this ).find( "span" ).text( "mouse out " );
  } );
 
var n = 0;
$( "div.enterleave" )
  .on( "mouseenter", function() {
    n += 1;
    $( this ).find( "span" ).text( "mouse enter x " + n );
  } )
  .on( "mouseleave", function() {
    $( this ).find( "span" ).text( "mouse leave" );
  } );

 //ex39
$( ".pht" ).on( "click", function() {
  var htmlString = $( this ).html();
  $( this ).text( htmlString );
});

 //ex40

(function() {
  var inputTitle = $( "input" ).attr( "title" );
  $( ".btnra" ).on( "click", function() {
    var input = $( this ).next();
 
    if ( input.attr( "title" ) === inputTitle ) {
      input.removeAttr( "title" )
    } else {
      input.attr( "title", inputTitle );
    }
 
    $( "#logi" ).html( "input title is now " + input.attr( "title" ) );
  });
})();


























});
