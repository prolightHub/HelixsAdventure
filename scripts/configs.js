var configs = {
    "overworld" : {
        name : "Overworld",
        area : "Area 1",
        level : {
            arraysToSave : ["crystal", "coin", "hpCoin", "heart"],
        }
    },
    "ninjaTemple" : {
        name : "Ninja Temple",
        area : "Area 2",
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
        area : "Area 3",
        usingHpRegenerators : true,
        level : {
            cold : true,
            background : "winter",
            song: "icy_slopes_ps2-short.mp3",
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
    "underground" : {
        name : "Underground",
        usingHpRegenerators : true,
        area : "Area 4",
        level : {
            background : "underground",
            noSong : true,
            specialOneWays : true,
            table : {
                '_' : "cathodes",
                '5' : "dark",
                '8' : "catDogStatue",
                '7' : "wisp",
                '=' : "darkBlock"
            },
            arraysToSave : ["crystal", "coin", "hpCoin", "ice", "voxelizer", "dirtyCat"],
        }
    },
    "other" : {
        hidden : true,
        level : {}
    }
};