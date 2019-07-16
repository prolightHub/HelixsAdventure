var npcData = {
    "Abby" : {
        img : "Abby",
        input : "hey",
        pattern : {
            up : true,
            "hey" : {
                message : "So, you're new here?",
                choices : {
                    "hero" : "...", 
                },
            },
            "hero" : {
                message : "Oh, we lost the key to our back door,\ndo you think you can find it for us? ",
                choices : {
                    "last" : "...",
                }
            },
            "thank" : {
                message : "You actually found the key?\nNow we can go back there again.\nThank you!",
                choices : {
                    "last" : "...",
                }
            }
        },
    },
    "Jason" : {
        img : "Jason",
        input : "Hi",
        pattern : {
            up : true,
            "Hi" : {
                message : "Hmm, I haven't seen this guy before.",
                choices : {
                    "next" : "..."
                },
            },
            "next" : {
                message : "Well whatever, at least try to make yourself\nat home.",
            },
            "enjoy" : {
                message : "I hope you're enjoying it :)",
                choices : {
                    "exit" : "..."
                }
            }
        },
    },
    "Oscar" : {
        img : "Oscar",
        input : "Hello",
        pattern : {
            up : true,
            "Hello" : {
                message : "Hello!",
                choices : {
                    "Next" : "Hi",
                },
            },
            "Next" : {
                message : "Life is interesting these days...",
                choices : {
                    "Yes" : "...",
                }
            },
            "Yes" : {
                message : "Did you ever notice that even in the day\nyou can always see the moon?",
                choices : {
                    "next" : "..."
                }
            },
            "next" : {
                message : "Cool isn't it?",
                choices : {
                    "Bye" : "bye"
                }
            },
            "Bye" : {
                message : "Bye, come again!",
            }
        },
    },
};