// OSC Messages

// Websocket Stuff
var isReady = false
var oscPort = new osc.WebSocketPort({
    url: "ws://localhost:8081", // URL to your Web Socket server.
    metadata: true
});
oscPort.open();
oscPort.on("message", function (oscMsg) {
    console.log("An OSC message just arrived!", oscMsg);
});

// For most Ports, send() should only be called after the "ready" event fires.
oscPort.on("ready", function () {
    isReady = true
});


// The original function by the hired programmer
function originalbyprogrammer() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/1/video/opacity",
        args: [
            {
                type: "f",
                value: 0.25
            }
        ]
    });
    }
}
 
 function function2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/1/connect",
        args: [
            {
                type: "f",
                value: 0.25
            }
        ]
    });
    }
}

// Palette Functions

function playpalette() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playpalette1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playpalette2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playpalette3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stoppalette1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clear",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stoppalette2of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clear",
        args: [
            {
                type: "f",
                value: 0,
                DelayNode: 10
            }
        ]
    });
    }
}

function freezepalette1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/selectedclip/video/source/gradient/color1/behaviour/playdirection",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function freezepalette2of2() {
   if(isReady) {
       console.log("Sending message!")
       oscPort.send({
       address: "/composition/selectedclip/video/source/gradient/color2/behaviour/playdirection",
       args: [
           {
               type: "f",
               value: 1
           }
       ]
   });
   }
}


function fazethroughpalette1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/selectedclip/video/source/gradient/color1/behaviour/playdirection",
        args: [
            {
                type: "f",
                value: 2
            }
        ]
    });
    }
}

function fazethroughpalette2of2() {
   if(isReady) {
       console.log("Sending message!")
       oscPort.send({
       address: "/composition/selectedclip/video/source/gradient/color2/behaviour/playdirection",
       args: [
           {
               type: "f",
               value: 2
           }
       ]
   });
   }
}

function nextpalette() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/connectnextclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previouspalette1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previouspalette2of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette4() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette5() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette6() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/6/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette7() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/7/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette8() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/8/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette9() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/9/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfPalette10() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/2/clips/10/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

// Stripes Functions

function playstripes() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stopstripes1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clear",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function stopstripes2of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clear",
        args: [
            {
                type: "f",
                value: 0,
                DelayNode: 10
            }
        ]
    });
    }
}

function playstripe1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playstripe2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function playstripe3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function nextstripe() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/connectnextclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previousstripe1of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function previousstripe2of2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes4() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes5() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes6() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/6/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes7() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/7/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes8() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/8/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes9() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/9/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfStripes10() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/clips/10/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}



// Rainbow Functions

function Rainbow1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function Rainbow2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function Rainbow3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow2() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/2/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow3() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/3/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow4() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/4/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow5() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/5/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow6() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/6/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow7() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/7/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow8() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/8/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow9() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/9/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function LiEfRainbow10() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/4/clips/10/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

// Weather Functions

function WeatherLightning() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/8/clips/1/connect",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

// Other Functions

function XXXXXXXXXXX() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}

function XXXXXXXXXXX() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
        address: "/composition/layers/3/connectprevclip",
        args: [
            {
                type: "f",
                value: 1
            }
        ]
    });
    }
}


function testbundle1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
            packets: [
                        {
                            address: "/composition/layers/2/clips/1/connect",
                            args: [
                                {
                                    type: "f",
                                    value: 1
                                }
                            ]
                        },
                        {
                            address: "/composition/layers/3/clear",
                            args: [
                                {
                                    type: "f",
                                    value: 1
                                }
                            ]
                        }
                    ]
    });
    }
}

function testbundle1() {
    if(isReady) {
        console.log("Sending message!")
        oscPort.send({
            packets: [
                        {
                            address: "/composition/layers/3/clips/1/connect",
                            args: [
                                {
                                    type: "f",
                                    value: 1
                                }
                            ]
                        },
                        {
                            address: "/composition/layers/1/clear",
                            args: [
                                {
                                    type: "f",
                                    value: 1
                                }
                            ]
                        }
                    ]
    });
    }
}