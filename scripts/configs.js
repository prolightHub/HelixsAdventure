var configs = {
    "overworld" : {
        name : "Overworld",
        level : {
            arraysToSave : ["crystal", "coin", "hpCoin", "heart"],
        }
    },
    "ninjaTemple" : {
        name : "Ninja Temple",
        area : "Area 1",
        level : {
            song: "StepUpv2.wav",
            background : "dark",
            shade : {
                r : 0,
                g : 0,
                b : 40,
                a : 80,
            },
            laddersWhite : true,
            arraysToSave : ["crystal", "coin", "hpCoin", "fireBeaker", "waterBeaker", "ninja", "shooter", "heart"],
        },
    },
    "winter" : {
        name : "Icy Slopes",
        area : "Area 2",
        level : {
            cold : true,
            background : "winter",
            noSong: true,
            shade : {
                r : 0,
                g : 0,
                b : 40,
                a : 80
            },
            table : {
                '1' : "superIce",
                '2' : "iceBeaker",
                '3' : "snowBlock",
                '4' : "snowBlockOther",
                '5' : "wisp",
                'W' : "unWater",
                '0' : "snowBall",
                'k' : "sludgeCat",
                '8' : "catDogStatue",
                'I' : "ice",
            },
            arraysToSave : ["crystal", "coin", "hpCoin", "ice"],
        },
    },
    "other" : {
        hidden : true,
        level : {}
    }
};