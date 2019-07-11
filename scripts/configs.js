var configs = {
    "overworld" : {
        name : "Overworld",
        area : "Area 1",
        level : {
            song : "overworld.mp3",
            arraysToSave : ["crystal", "coin", "hpCoin", "heart"],
        }
    },
    "ninjaTemple" : {
        name : "Ninja Temple",
        area : "Area 2",
        level : {
            song: "ninja_temple.mp3",
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
            song: "icy_slopes.mp3",
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
            song: "underground.mp3",
            specialOneWays : true,
            regenCoinCost : 4,
            table : {
                '2' : "poisonousSlimeBeaker",
                '_' : "cathodes",
                '5' : "dark",
                '8' : "catDogStatue",
                '7' : "wisp",
                '=' : "darkBlock"
            },
            laddersWhite : true,
            arraysToSave : ["crystal", "coin", "hpCoin", "ice", "voxelizer", "dirtyCat", "slimeBeaker", "bat", "poisonousSlimeBeaker", "stomper"],
        }
    },
    "surface" : {
        name : "Desert",
        area : "Area 5",
        usingHpRegenerators : true,
        level : {
            background : "sand",
            noSong : true,
            regenCoinCost : 3,
            table : {
                '~' : "palmTree"
            },
            arraysToSave : ["coin", "hpCoin", "fireBeaker", "skyViper"]
        }
    },
    "ship" : {
        name : "Ship",
        hidden : true,
        usingHpRegenerators : true,
        level : {
            background : "ship",
            noSong : true,
            regenCoinCost : 6,
            table : {
                'g' : "blockSketchy",
                'b' : "steelBlock",
                'M' : "windowSky"
            }
        }
    },
    "other" : {
        hidden : true,
        level : {
            noSong : true
        }
    }
};