/*!
  * Night Flowers v1.1.1
  * Functions
  */
function svgflowertest2B(){$("#svgflowertest2-B").load("/images/svgflower-1.html").hide().fadeIn("slow").fadeOut("slow")}function svgflowertest3B(){$("#svgflowertest3-B").load("/images/svgflower-5.html").hide().fadeIn(1500).fadeOut(1500)}function svgflowertest3B(){$(".svgflowertest3-B").load("/images/svgflower-5.html").hide().fadeIn(1500).fadeOut(1500)}function originalbyprogrammer(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/1/video/opacity",args:[{type:"f",value:.25}]}))}function function2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clips/1/connect",args:[{type:"f",value:.25}]}))}function playpalette(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clips/1/connect",args:[{type:"f",value:1}]}))}function playpalette1(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clips/1/connect",args:[{type:"f",value:1}]}))}function playpalette2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clips/2/connect",args:[{type:"f",value:1}]}))}function playpalette3(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clips/3/connect",args:[{type:"f",value:1}]}))}function stoppalette1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clear",args:[{type:"f",value:1}]}))}function stoppalette2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/clear",args:[{type:"f",value:0,DelayNode:10}]}))}function freezepalette1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/selectedclip/video/source/gradient/color1/behaviour/playdirection",args:[{type:"f",value:1}]}))}function freezepalette2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/selectedclip/video/source/gradient/color2/behaviour/playdirection",args:[{type:"f",value:1}]}))}function fazethroughpalette1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/selectedclip/video/source/gradient/color1/behaviour/playdirection",args:[{type:"f",value:2}]}))}function fazethroughpalette2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/selectedclip/video/source/gradient/color2/behaviour/playdirection",args:[{type:"f",value:2}]}))}function nextpalette(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/connectnextclip",args:[{type:"f",value:1}]}))}function previouspalette1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/connectprevclip",args:[{type:"f",value:1}]}))}function previouspalette2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/2/connectprevclip",args:[{type:"f",value:1}]}))}function playstripes(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clips/1/connect",args:[{type:"f",value:1}]}))}function stopstripes1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clear",args:[{type:"f",value:1}]}))}function stopstripes2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clear",args:[{type:"f",value:0,DelayNode:10}]}))}function playstripe1(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clips/1/connect",args:[{type:"f",value:1}]}))}function playstripe2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clips/2/connect",args:[{type:"f",value:1}]}))}function playstripe3(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/clips/3/connect",args:[{type:"f",value:1}]}))}function nextstripe(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/connectnextclip",args:[{type:"f",value:1}]}))}function previousstripe1of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/connectprevclip",args:[{type:"f",value:1}]}))}function previousstripe2of2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/connectprevclip",args:[{type:"f",value:1}]}))}function Rainbow1(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/4/clips/1/connect",args:[{type:"f",value:1}]}))}function Rainbow2(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/4/clips/2/connect",args:[{type:"f",value:1}]}))}function Rainbow3(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/4/clips/3/connect",args:[{type:"f",value:1}]}))}function WeatherLightning(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/8/clips/1/connect",args:[{type:"f",value:1}]}))}function XXXXXXXXXXX(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/connectprevclip",args:[{type:"f",value:1}]}))}function XXXXXXXXXXX(){isReady&&(console.log("Sending message!"),oscPort.send({address:"/composition/layers/3/connectprevclip",args:[{type:"f",value:1}]}))}function testbundle1(){isReady&&(console.log("Sending message!"),oscPort.send({packets:[{address:"/composition/layers/2/clips/1/connect",args:[{type:"f",value:1}]},{address:"/composition/layers/3/clear",args:[{type:"f",value:1}]}]}))}function testbundle1(){isReady&&(console.log("Sending message!"),oscPort.send({packets:[{address:"/composition/layers/3/clips/1/connect",args:[{type:"f",value:1}]},{address:"/composition/layers/1/clear",args:[{type:"f",value:1}]}]}))}$(document).ready((function(){$("#svgflower-1").load("/images/svgflower-1.html")})),$((function(){$("#svgflower-2").load("/images/svgflower-2.html")})),$((function(){$("#svgflower-3").load("/images/svgflower-3.html")})),$((function(){$("#svgflowertest1-A").load("/images/svgflower-3.html")})),$(document).ready((function(){$(".svgflowertest1").click((function(){$("#svgflowertest1-B").load("/images/svgflower-1.html").hide().fadeIn("slow").fadeOut("slow")}))})),$((function(){$("#svgflowertest2-A").load("/images/svgflower-3.html")})),$(document).ready((function(){setInterval(svgflowertest2B,2500)})),$((function(){$("#svgflowertest3-A").load("/images/svgflower-4.html")})),$(document).ready((function(){setInterval(svgflowertest3B,3200)})),$((function(){$(".svgflowertest3-A").load("/images/svgflower-4.html")})),$(document).ready((function(){setInterval(svgflowertest3B,3200)})),$((function(){$(".circlemenubutton").load("/snippets/svgflowertest3-Bxxxx.html")}));var isReady=!1,oscPort=new osc.WebSocketPort({url:"ws://localhost:8081",metadata:!0});oscPort.open(),oscPort.on("message",(function(e){console.log("An OSC message just arrived!",e)})),oscPort.on("ready",(function(){isReady=!0})),$((function(){$("#svgflowertest1-A").load("/images/svgflower-3.html")}));