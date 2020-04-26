// Functions - Load Images

// Begin wrap all functions - waits until document loads, then loads js
$(document).ready(function(){



// Counting Arrays

// Load 10 images  
// Counts from 1 - 10 in an array
const Countto10 = 10;
const Arrayof10 = Array.from({length: Countto10}, (_, index) => index + 1);
console.log(Arrayof10);
//	Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ]

// Load 30 images  
// Counts from 1 - 30 in an array
const Countto30 = 30;
const Arrayof30 = Array.from({length: Countto30}, (_, index) => index + 1);
//	Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ]

// Load 50 images  
// Counts from 1 - 50 in an array
const Countto50 = 50;
const Arrayof50 = Array.from({length: Countto50}, (_, index) => index + 1);
//	Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ]

// Load 75 images  
// Counts from 1 - 75 in an array
const Countto75 = 75;
const Arrayof75 = Array.from({length: Countto75}, (_, index) => index + 1);
//	Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ]

// Load 100 images  
// Counts from 1 - 100 in an array
const Countto100 = 100;
const Arrayof100 = Array.from({length: Countto100}, (_, index) => index + 1);
//	Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... ]



//  Loads Flower Graphics - Original
//	Add array that counts from 1-10 to functions that connect image to css, and passes number with variable
    $.each(Arrayof50, function(index, value){
    
        $(function(){
            $(".svgflower-"+value).load("/images/svgflower-"+value+".html");  
        });
    
      console.log(`${index}: ${value}`);
    });

//  Loads Flower Graphics - B and W
//	Add array that counts from 1-10 to functions that connect image to css, and passes number with variable
    $.each(Arrayof100, function(index, value){

        $(function(){
            $(".svgflower"+value+"-1").load("/images/svgflower"+value+"-1.html");  
        });

      console.log(`${index}: ${value}`);
    });

//  Loads Flower Graphics - B and W Animated
//	Add array that counts from 1-10 to functions that connect image to css, and passes number with variable
$.each(Arrayof10, function(index, value){

  $(function(){
      $(".svgfloweranimate"+value+"-1").load("/images/svgfloweranimate"+value+"-1.html");  
  });

console.log(`${index}: ${value}`);
});    

    





    

// svgflowertest1  
$(function(){
    $("#svgflowertest1-A").load("/images/svgflower-3.html"); 
  });

    $(".svgflowertest1").click(function(){
        $('#svgflowertest1-B').load('/images/svgflower-1.html').hide().fadeIn('slow').fadeOut('slow');
    });

// svgflowertest2
$(function(){
    $("#svgflowertest2-A").load("/images/svgflower-3.html"); 
  });

    setInterval(svgflowertest2B,2500);

 function svgflowertest2B(){
    $('#svgflowertest2-B').load('/images/svgflower-1.html').hide().fadeIn('slow').fadeOut('slow');
 }

 // svgflowertest3
$(function(){
    $("#svgflowertest3-A").load("/images/svgflower-4.html"); 
  });

 $(function(){
    $('.svgflowertest3-A').load('/images/svgflower-4.html'); 
  });

    setInterval(svgflowertest3B,3200);

 function svgflowertest3B(){
    $('.svgflowertest3-B').load('/images/svgflower-5.html').hide().fadeIn( 1500 ).fadeOut( 1500 );
 }

 $(function(){
    $(".circlemenubutton").load("/snippets/svgflowertest3-Bxxxx.html"); 
  });

// svgflowertest4 - on interface 3
 
    $('.svgflowertest4-A').load('/images/svgflower-4.html'); 

    $('.svgflowertest4-B').load('/images/svgflower-5.html'); 

    setInterval(svgflowertest4B,0);
 
 function svgflowertest4B(){
    $(".svgflowertest4-B").delay( 800 ).animate({
        opacity: '0.5',
      }, 800);
      $(".svgflowertest4-B").delay( 800 ).animate({
        opacity: '1',
      }, 800);
 }

    $(".circlemenubutton2").load("/snippets/svgflowertest4-Bxxxx.html"); 


// svgflowertest1  
// $(function(){
//   $("#svgflowertest1-A").load("/images/svgflower-3.html"); 
// });

// $(document).ready(function(){
 //    $(".circlemenubutton").load("/snippets/svgflowertest4-Bxxxx.html"); 
//   });













// End wrap all functions
});