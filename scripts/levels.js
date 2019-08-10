var levels = {
    "intro" : {
        theme : "other",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "intro",
                symbol : 'b',
            },
            'b' : {
                level : "intro",
                symbol : 'a',
            },
            'c' : {
                level : "intro",
                symbol : 'd',
                // locked : true,
            },
            'd' : {
                level : "intro",
                symbol : 'c',
            },
            'e' : {
                level : "start",
                symbol : 'a',
            }
        },
        signs : {
            'a' : {
                message : "Arrow keys or wasd\nto move.",
                adjustX : 35,
            },
            'b' : {
                message : "Checkpoints save your game.\nYou can also re-save\nby pressing down or 's'.",
                adjustH : 50,
                adjustW : 150
            },
            'c' : {
                message : "You can also press down or\n's' to go through\n a door, or activate things.",
                adjustH : 50,
                adjustW : 150
            },
            'd' : {
                message : "Doors can take you\n to other levels too.",
            },
            'e' : {
                message : "Collect items like keys.\nTo unlock other doors!",
                adjustW : 120,
            },
            'f' : {
                message : "You've finished\nthe tutorial level!",
            },
            'g' : {
                message : "Oh and watch out\nfor enemies and\n hazards!",
                adjustH : 50,
            },
            'h' : {
                message : "You can press 'p' at\nany time to pause\nyour game.",
                adjustH : 50,
            },
            'i' : {
                message : "'r' lets you quickly\nreset the level.",
            },
            'j' : {
                message : "Press 't' if you\n can't read a sign.",
            },
            'k' : {
                message : "You can also press the\nspacebar to do extra stuff!\n(like shaking off effects)",
                adjustW : 130,
                adjustH : 50
            },
            'x' : {
                message : "You can even press 'e'\nto open your inventory!",
                adjustW : 120
            },
            'y' : {
                message : "If a sign is too hard\nto read press 't'."
            }
        },
        keys : {
            'a' : {
                level : "intro",
                symbol : 'c',
            },
        },
        plan : [ 
            "                                                 ",
            "                                                 ",
            "                                                 ",
            "                                                 ",
            "                                                 ",
            "                    b   y   h   i   x   k   f   e",
            "                    D   S   S   S   S   S   S   D",
            "                   gggggggggggggggggggggggggggggg", 
            "                   dddddddddddddddddddddddddddddd",
            "                   dddddddddddddddddddddddddddddd",
            "p                  dddddddddddddddddddddddddddddd",
            "a   b       c   a  dddddddddddddddddddddddddddddd",
            "S   S   f   S   D  dddddddddddddddddddddddddddddd",
            "gggggggggggggggggggdddddddddddddddddddddddddddddd",
        ],
    },
    "start" : {
        theme : "overworld",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "intro",
                symbol : 'e',
            },
            'b' : {
                level : "villageHouse",
                symbol : 'a',
            },
            'c' : {
                level : "behindTheVillage",
                symbol : 'a',
            },
            'd' : {
                level : "villageHouse2",
                symbol : 'a',
            },
            'e' : {
                level : "villageHouse3",
                symbol : 'a',
            },
        },
        signs : {
            'a' : {
                message : "Welcome to\nAmber",
            },
            'b' : {
                message : "Welcome to the\nGreat bridge.",
            },
            'c' : {
                message : "End of bridge"
            },
            'd' : {
                message : "Alpine Village  \n Guests are welcome.",
                adjustW : 105,
            },
            'e' : {
                message : "behind the village",
            },
        },
        plan : [
            "                                                                                                                                                                     b                                                                                                                                                                                                                         ",
            "                                                                                                                                                                     b   E                                                                                                                                                                                                                     ",
            "                                                                                                                                                                     b                                                                                                                                                                                                                         ",
            "                                                                                                                                                                     b   e                                                                                                                                                                                                                     ",
            "                                                                                                                                                                     b   ^b                                                                                                                                                                                                                    ",
            "                                                                                                                                                                     b    b                                                                                                                                                                                                                    ",
            "                                                                                                                                                                     bE   P                                                                                                                                                                                                                    ",
            "                                                                                                                                                                     b    b                                                                                                                                    r                                                                               ",
            "                                                                                        s                                                                            b^   b                                                                                                     r                             *C                                                    *C                         ",
            "                                                                                s      *C                              s                                             b    b                                                      C           r                        r        *C             C        r                                         C                               C             ",
            "                                                                                C                                     *C                                             b    b                                                                  C                       *C                                C                                C                                                      ",
            "                                                                                                  s         s                                                        b   Eb                                                                                                                                                                                                                    ",
            "                                                                                                  C         C                                                        b   ^b             x      x                                                                    &                                                                                                                          ",
            "                                                                                                                                                                     b    b        dddddPPPPPPPPPPP                                                    hc                         &                        &                                                      iiii   r Fl     A  A         ",
            "                                                                                                                                                                     b    b     ddddd                                                                 c  h                            c                  &                                                   p    u      iiiii   UbbbbU        ",
            "                                                                                      FFF                                                                            be   bdddddddd                                                         &                                        h h                                                                                 PFFFP   UPPPPU        ",
            "                                                                           cc                                                                                        b^   bdddd                            b                                                                                                              &    c                              d    bb    PFdFP   UPePPU    e  c",
            "                                                                          c                  e                                                                            b                         00  f  S    T  T        T    X    T T            T   x          T  T   x  T   r bbbbbl     T  T   T    xcx      T          S                          f   S    DD    PFDFP   UPDPPU    S  D",
            "                                                                                 T         ^^^^^^^               T                  f                                     b                        ggggbbbbbbggggggggggggggggggggggggggggggdddddddgggggggggggggggggggggggggggggggddddddgggggggggbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbb   FFF   FF   FF   bbbbbbbggggggggggggggggggggggggggggggggg",
            "                                                                              PPPPPPP       #bdb#     FFF     ggwgg              ggggggg                                 ^b                      ggdddddddddbbbbbbbbbbbbbbbddddbbbbbbddddddbbbbbbbdddddddddbbbbbbddbbbbbbddddddddddbbbbbbbbddddddddbbbbbbbbbbddddddddddddddddddddd                   dddddddddddddddddddddddddddddddddddddddddd",
            "                                                                       T       dbbbd         #b#              dwwbd     FFF     gdd####dd                                 b                    ggdbb        dddbdddddbdddddddddddddd           R bbL                      R bL                  R bL     R bL             R bL   bb                  dddddddddddddddddddddddddddddddddddddddddd",
            "               r                                                   000gggg      dbd           #                wwd             gdd#    #dd                                b     ggg         gggbbbb          ddddbdbdddbdddddddddddd             bb                         b                     b        b                b                          bbbbbddddddddddddddddddddddddddddddddddd",
            "              *C                                              T ggggggdbb        d                             wd             gdd#      #ddgggggggg   wwwwwwwwwwwwwwwwwgggggggggdL    c  r bbbbbb             dddbdddbdddddddddddddd             bb                         b                     b        b                b                         ddddddddddddddddddddddddddddddddddddddddd",
            "                    r                                     000gggddddddb                                        w              ddd#       dddddddddw WEwwwwwwww E wwwwwwwdddddddL    c  r bbb                   dbdddbdbddbddddddddd              bb                         b                     b        b                b                          bbbbbbbbbbbbbbbbbddddddddddddddddddddddd",
            "                    C                                 cggggggddddb####                         ##             ww              ddd#       ddddddwwww   wwwww    W wwwwwwwwddddL    h  r bbbL                      dddddddddddddddddd              bb                         b                     b        b                b                                                                  ",
            "                                                      dddddddddbb##                         b####             wb               dd#       bddddwwww E wwwwwb W  E wwwwwwwwwdL    h  r bbbL                          dddbddddddddd                 bb                         b                     b        b                b                                                                  ",
            "                                                      dd####bbbb##                    vvvvvbbbb##             w                 d       bcdddwwwww W wwwwbdbE www E wwwwwwd   h  r bbbL                             dddddbddddd                  bb                         b                     b        b                b                                                                  ",
            "              e            chc                     000dd#bbbbbb#                      bchcccccbb              w                          bddwwwwww E wwwwbdbwwwww W wwddddd h  r bbbL                                 dddddbbd                   bb                         b                     b        b                b                                                                  ",
            "            PPPP                                  cgggddbbbbbbb#                      bhchcccc>               w                           ddwwwwwwwwwwwwbbbwwwwww E wdwwwwd    bbbL                                    bdddbbb                   bb                         b                     b        b                b                                                                  ",
            "                                                  ddddbbbbbbbbb#                      bchccccc>               w                          bddwwwwwwwwwwwbdbwwwwwwwwwwdwwwwwwwwwbbbbb                                                              bb                         b                     b        b                b                                                                  ",
            "a  a    f                   e                     dddbbbbbbbbbb#                      bbbbbbbbb               w                         bcddww E wwwwwwbdbbbbbdddddddwwwwwwwwbddddb                                                              bb                         b                     b        b                b                                                                  ",
            "Dp S  r bl  E     E     r bbbbbl    T      T      dddbbbbbbbbbbb#                sss                          w                          bddww WE   ww  b   wwwwwwwwwwwwwddbbbddddb                                                              bb                         b                     b        b                b                                                                  ",
            "ggggggdddddgggbbbbbbggggdddbbbdddgggggggggggggggggdbbbbbbbbbbbbbb#      bbbbb                                 w                           ddbw    W ww W  W wwwwwwwwwwwwdbddddddddb                                                              bb                         b                     b        b                b                                                                  ",
            "ddddddbbbdddddd###ddddddddddbddddddwwwwwwwwbbbbbbbbbbbb##bbbbbbbb#                              ssss          w                           ddbbbww E ww      wwwwwwwwwwwdbbddddddddb                                                              bb                         b                     b        b                b                                                                  ",
            "dddbbbbbbwwwddddddddddddddbbbbbbddddddddwwwbbbbbbbbbb#####bbbbbbb#                                      sss   w                            dbdddddddddddddddddddddddddddddddddddddb                                                              bb                         b                     b        b                b                                                                  ",
        ],
    },
    "villageHouse" : {
        theme : "overworld",
        background : "spaceFromEarth",
        debugMenuWhite : true,
        doors : {
            'a' : {
                level : "start",
                symbol : 'b',
            },
            'b' : {
                level : "???",
                symbol : 'a',
                locked : true,
            },
        },
        npcs : {
            'a' : {
                name : "Abby",
            },
            'b' : {
                name : "Jason",
            },
        },
        plan : [
            "bbbbbbbbbbbbbb",
            "bu   u   u   b",
            "b            b",
            "b            b",
            "b            b",
            "bu   u   u   b",
            "b            b",
            "b            b",
            "b            b",
            "bu   u   u   b",
            "b            b",
            "ba b    a   bb",
            "bD @ p  @   Db",
            "bbbbbbbbbbbbbb",
        ],
    },  
    "???" : {
        theme : "overworld",
        doors : {
            'a' : {
                level : "villageHouse",
                symbol : 'b',
            },
        },
        chests : {
            'a' : {
                save : true,
                drops : [{
                    contains : "coin",
                    props : {
                        coinAmt : 50,
                    },
                    total : true,
                }],
            },
        },
        plan : [
            "bbbbbbbbbbbbbb",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "b            b",
            "ba    a  '   b",
            "bDp   [      b",
            "bbbbbggggbbbbb",
        ],
    },
    "villageHouse2" : {
        theme : "overworld",
        background : "spaceFromEarth",
        save : {
            containsSkyViper : true,
        },
        doors : {
            'a' : {
                level : "start",
                symbol : 'd',
            },
        },
        signs : {
            'a' : {
                message : "Area closed due to\nmonster infringement.",
                adjustW : 120,
            }
        },
        npcs : {
            'a' : {
                name : "Owen",
            },
        },
        plan : [
            "              ",
            "              ",
            "      bb      ",
            "              ",
            "A          & A",
            "b            b",
            "bbbbbbFFbbbbbb",
            "bu   u   u   b",
            "b   A    A   b",
            "b  Ei    iE  b",
            "b W i    i W b",
            "bE  i    i  Eb",
            "biiii    iiiib",
            "b            b",
            "b            b",
            "b            b",
            "ba  a MM     b",
            "bD  S        b",
            "iiiiissssiiiii",
        ],
    },
    "villageHouse3" : {
        theme : "overworld",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "start",
                symbol : 'e'
            }
        },
        npcs : {
            'a' : {
                name : "Oscar",
            }
        },
        plan : [
            "bbbbbbbbbbbbbb",
            "bu   u   u R b",
            "b cc  cc  cc b",
            "b cc  cc  cc b",
            "bmm          b",
            "bPPPPPPU     b",
            "b      U     b",
            "b      U     b",
            "b      U     b",
            "b      U     b",
            "b      U     b",
            "ba     U  a  b",
            "bD   p U  @  b",
            "bbbbbbbbbbbbbb",
        ],
    },
    "behindTheVillage" : {
        theme : "overworld",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "start",
                symbol : 'c', 
            },
            'b' : {
                level : "coreGround",
                symbol : 'a',
            }, 
            'c' : {
                level : "trek",
                symbol : 'a'
            }
        },
        keys : {
            'a' : {
                level : "villageHouse",
                symbol : 'b',
            }
        },
        signs : {
            'a' : {
                message : "Press 'r'!",
                adjustX : 45,
            },
            'b' : {
                message : "Seek Caution\nbeyond!",
            },
            'c' : {
                message : "Door leads east."
            }
        },
        plan : [
            "                                                                      dddddddd               ",
            "                                                                      dddddddd               ",
            "                                                                      dd*dd*dd               ",
            "                                                                      dddddddd               ",
            "                                                                       dddddd                ",
            "                                                                        dVVd                 ",
            "                                      cccc                           cc      cc              ",
            "                                ii    chhc                          cc        cc             ",
            "                                 i    chhc                                                   ",
            "                           b  AA  T   cccc     f        cc          Aggg    gggA             ",
            "                          bb Addddddgggggggg  gggg     cii        gggddddAAddddd   cchhcc c c",
            "                           ddddddibddibddibd  dibd      i     bhh dddddddddddd     hhcchh S D",
            "             b           Adddddddbbddbbddbbd  dbbd       gggAAbb Adddddddddd       gggggggggg",
            "            bib       i Addbbddddddddddddddd  dddd      gdddddggggdddddddddd        dbbbbbbbd",
            "       b     b       iiddddbbddL    biid             Aggdddddddddddddddddd           ddbbbbbd",
            "      bib             dddddddd      biid            Agddddd      ddddddd               ddddbb",
            "       b            Adddddddd       biid            gdddd         dddd                   dddb",
            "                  bAddddddddd       biidhh          ddd            ddd                     dd",
            "a                bbddddbbddd        biid    AA     ddd             dd                        ",
            "D p        AT A   dddddbbddd    hhhhbiid   dddd    dd           AAdd                         ",
            "gggssgAAAgggggggdddddddddddd    h  hbiid   dddd    d          dddd                           ",
            "ddddddddddddddddddddddddddddUUdd^  ^biid AAdddd             Adddd                            ",
            "ddddddddddddddddddddbbddddddUUdd FF biid bbbdd             ddd                               ",
            "ddddddddddddddddddddbbddddddUUdd    biid   ddd            ddd                                ",
            "ddddddddddddddddddddddddddddUUdd    biid   dddA           ddd                                ",
            "ddddddddddddddddddddddddddddUUdd    biid   ddddA        Adddd                                ",
            "u   u   u   u   u   u   u   u bd FF biid   ddddd        dddd                                 ",
            " a        hc        hc        bd    biid   ddddd        ddd                                  ",
            "aK        cc        cc        bd   Abiid   ddddd        dd                                   ",
            "S  A    A    A    A    A   A  bi   bbiid  hddddd       Add                                   ",
            "PPPsssssssssssssssssssssssssbbbi FF biidAAhddddddd     dd                                    ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbi    bbbbbbhddddddd    dd                                     ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbi                dd    dd                                     ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiA               ddAAAAd                                      ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbibs              ddddddddd                                    ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbii                 ddddddddd     A                             ",
            "                             bii                   ddd   ddAAdddd                            ",
            "                             bbi  hh  r iiiil      dd     dddddddddA                         ",
            "                             bbi  ss  dddddddd    dd       dd    dddA                        ",
            "                             bbi      bFFFFFFb    dd       ddd  ddddd                        ",
            "                             bbi      bFFFFFFb    dd        ddddd  ddd                       ",
            "                             bbi      bFFFFFFb   ddd         ddd    ddd                      ",
            "                             bii    AAbFFFFFFb   dd         Add      dd                      ",
            "                             biissssbbbFFFFFFb   dd         dd       ddA                     ",
            "                                      dddddddd   dd         ddd      ddd                     ",
            "                                      dddddddd   dd         ddd      d dd                    ",
        ],
    },
    "trek" : {
        theme : "overworld",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "behindTheVillage",
                symbol : 'c'
            },
            'b' : {
                level : "smooth",
                symbol : 'a'
            },
        },
        plan : [
            "                                                                       ",
            "                                                                       ",
            "                                                             C         ",
            "                                       C        C                      ",
            "                                                                       ",
            "                                                                &      ",
            "                                                                       ",
            "                                                      cc         hh   b",
            "                       C                                            p D",
            "          C                                 cc                 e  r bbb",
            "                                                        e   r gggbbbbbb",
            "                                                  E T  gggbbddddddddddd",
            "                                            Te  gggggggbbbbbbbbbbbbdddd",
            "                      c c                  gggggddddddddddddddddddddddb",
            "                       c                 ddddddddddbbbbbbbbbbbbbbbbbbbb",
            "a                                      ddddbbbbbddbbbbbbbbbbbbbbbbbbbbb",
            "D f    T                e            ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "gggggggggggg m   m   bPPPb  m   m  bbddddbbbbbbbbbbbbbbbbbbbbbbbddddddd",
            "bbbbbbbbbb                         ddddddddddddddddbbbbbbbbbbdddddddddd",
            "bbbbbbb                         Adddddddddddddddddddddddddddddddddddddd",
            "                                ddddddddddddddddddddddddddddddddddddddd",
            "                                ddddddddddddddddddddddddddddddddddddddd",
            "                              Addddddddddddddddddddd                   ",
            "                             dddddddddddddddddddddd                    ",
            "                            A dddddddddddddddddddddd                   ",
            "                            bbbbdddddddddddddddddd                     ",
            "                               bb                                      ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       "
        ]
    },
    "generated": {
        plan : [
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            "                                                                                          ",
            " E   p  E  T E   E                                                                        ",
            "gggggggggggggggggg                                                                       E",
            "ddddddddddddddddddg    T  Tggg       g         E                    T   gggggggggggggggggg",
            "ddddddbdbbdddddddddgg  g  gdddgg   ggdgggggggggggg  TEE  gggg ggggggggggdddddddddddddddddd",
            "ddddbdbbbbdbbdbbddbdd  d  dddbdd   ddbdddddddddddd  gggggddddgdddddddddddbbbdbddddddddbddd",
            "bbbbbbbbbbbbbbbbbbbdb  b  dbbbdd   bbbdbbdddbbbbdb  dddddbbddddddbdbbddbbddbbbbdbbdddbbbdb",
            "bbbbbbbbbbbbbbbbbbbbd  b  bbbbdd   bbbdbdbbbbdbbdb  bddbdbbbbdbbbdbbddddbbbbbbbbbbbbbbbbbb"
        ]
    },
    "smooth" : {
        theme : "overworld", 
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "trek",
                symbol : 'b'
            },
            'b' : {
                level : "trek2",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                                                                                                                                  ",
            "                                                                                                                                                                                                                  ",
            "                                                                                                                                                                                                                  ",
            "                                                                                                                                                                                                                  ",
            "                                                                                                                                                                                                                  ",
            "                                                                                                                                                                                                                  ",
            "                                              r                     r                                                                                                             r                               ",
            "                      r                       C                     C                                                                                     E                       C                               ",
            "                      C                                   C                           ccccc                                                        UPPPPPPPP               r                      &       cc     b",
            "                                      C                                                                                                            Uu   u                  C                      cc      cc     D",
            "        C                                                                            bPbPbPb                                                       U                                              cc           ggg",
            "                                                                                                                                      x            U                                                           ddd",
            "                                                                                                                                     xxE           U                                          &  ggggFFF  FFFddddd",
            "                                     &                                                                                              PPPP            u   u       cc                          cc   dddd         dddd",
            "                                                                           pf                                                hh     u          xE                 c            fTEe         cc   dbbd         dddd",
            "                                                                      &  Ub^^^^bFFF                                                            xx                       c      ggggg             dbbd         dddd",
            "                              cc  hh                           hhhh      Ub    b              cc                           UPPPP             UPPPP             O               ddbbd  FFF  gggg  dbbd          ddd",
            "             cc  cc           cc  hh                                     Ub  PPb      N   N        cc                      Uu                Uu     u   u        O  hh  O      ddbbd       dddd  dbbd           dd",
            "             cc  cc         T           FFF              PPP  b^^^^bFF   Ub    b     bPbPbPb  FF        cc                 U        u        U         PPPP                    ddbbb       Vddd  ddbd           dd",
            "   cc         e  e gg  m   gggggFFFFbb       Uiii  PPP        b    b      b    b     <     >       FF             x        U                 U         u                       ddbbb        dddAAddbdAAA        dd",
            "a  cc    er gggggggd        bbb              UdbiE            b    b      b    b     <     >            FF       xxx   xx  U                                oo      O    m  sssddbbbAE      dddddddbdddd        dd",
            "DT   fpr dddddddddd         Vb               Udbii            b  PPb      bPP  b     <     >                    xxxxx  xx  Uu                 u     u   u                   dddddbbbggg     Vddddddbbbbd        dd",
            "gggggggddddddddddVV          V               Udbbi            b    b      b    b     <     >                PPPPPPPPPPPPPPPP        u                                       oddddbbbddd      ddddddbbbdd        dd",
            "dddddddddddddddV                             Udbbi            b    b      b    b     <     >                u   u   u   u       F F     F F F     F    u                 ooooddddbbdbddA     ddddddbbbdd         d",
            "bbbbbbddddddddV                              Udbbi            b    b      b    b     <     >                                                                                 Vdddbbdbbbg     Vdbbdbbbbbd         d",
            "bbbbbbbbbddddd                            E  ddbbiE           bPP  b      >  PP<     <     >                                u                 u     u   u                     dddbbdbbbd      dbbbbbbbbb         d",
            "bbbbbbbbbbbdbbwwwwwwwwwwwwwwwwwwwwwE  wwwwwddddbbii           b    b      >    <     <     >                                        u                                         dddbbbbbbd      dbbbbbbbbb         d",
            "bbbbbbbbbbbbwwwwwwwE  www E wwwE  w W wwwwwiibbbbiii A             be     >    <     <     >                u   u   u   u                              u                      ddddbbbbbdAAA   Vdbbbbiiii          ",
            "bbbbbbbbbbbbwwwwwww W www W www W w   wwiiiiibbbbbbiii n   n     e b######b    b     <     >                                                                                  ddbbbbbbbdbbb    dbbbiiiii          ",
            "bbbbbbbbbbbbbwwwwww   www   www   wwwwwwwiiibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb     <     >                                u                 u     u   u                     dddddbbbbbbbb      iiiiiii          ",
            "bbbbbbbbbbbbbbwwwwwwwwwwwwwwwwwwwwwwwwwwwiibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb*****<     >****************                    ****u   ******    **        ******************dddddbbbbbbbb   c  iiiiiii          ",
        ],
    },
    "trek2" : {
        theme : "overworld",
        background : "spaceFromEarth",
        doors : {
            'a' : {
                level : "smooth",
                symbol : 'b'
            },
            'b' : {
                level : "coreGround",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                                                                            b^^^^^^^^^b",
            "                                                                                                                                                            bQQQQQQQQQb",
            "                                                                                                                                                            bQQQQQQQQQb",
            "                                                                                                                r                                           bQQQQQQQQQb",
            "                                                                                                   r            C*              r         C*                bQQQQQQQQQb",
            "                                                                                                   C                            C                   C       bvvvvvvvvvb",
            "                                                                         r         r                                                          &                        ",
            "                                                        r                C         C*                           &                                                      ",
            "                                         r              C                                                                      &                              cc  hh  b",
            "                               C         C                                                             &                                                            p D",
            "                                                            &                          &                                                 e                  b^^^^^^^^^b",
            "                    C                                                                                                                 bPPPPb m    bb    m   bcc       b",
            "    C                                                               c                  c                 hh                            bbb                  b         b",
            "                                              c                                 T                                           E           b                   bPP       b",
            "                                                               c         T  T  ggg        c                                bPPPUb                           b##     ccb",
            "                                           c       E                   ggggggggdddgggg                        E            <   U                            b         b",
            "                                                ggggggg   m    m   ggggddddddddddddddbggg   m  bb   m  bPPPPUbbbbb  m    m b   U                            b      Ussb",
            "                                                  bbbd                bbbbbbbbbbbbbbbb                      U                  U          ccccc             b        #b",
            "     hh                   T T  e     e             bdV                V ddbbbbbbbbww                        U                  U          ccccc             b        #b",
            "a                     r gggggggggggggggggss        V                    V  b V    w                         U                                               bhh       b",
            "D pf     e  T  r gggggggdbbbbbbbddbbbbbbbbb                                b      w                                                     b^^^^^^^^b          b         b",
            "gggggggggggggggddddbbbbdddbbbbdddddbbbbb V                                        w                                                     b        b          bPPs      b",
            "sddddddddbddbbbbdddbbbbbbbbddddddddbb                                             w                             cc     hh               bPP      b          b    #    b",
            "ddddddddbbbddddddddddddddddddddbbbbbbbb   A                                       w                                                     b      ccb          b    #  ccb",
            "ddddddddddddddddddddddddddddddddddddddddddddAA                                    w                          Ub^^^^^^^^^^^b             b      ccb          b         b",
            "ddddddddddddddddddddddddddddddddddddddddddddddd                                   w                          Ubb#         b             b      PPb          b         b",
            "bbbbbddsssdddddddddwwwwwwwwEEEwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww EEwwwwwwwwwwwwwwwwwwwwww EEwwwwwwwwwwwww E Ubbb#        b             b        b          b      sPPb",
            "dddddddbbbbbbbwwwwwwwwwwwwwEWcwwwwwwwwwwwwwwwwwwwwwwwEEEwwwwwwwww W wwwwwwwwwwwwwbbbbbbbbbbWbbbbbbbbwwwwww Wbbbbbb#       b e ## e      b   e ###b###e      b         b",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwcccwwwwwwwwwwwcccwwwwwwwwwEWcwwwwwwwwbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbUUbUUbbbbbbbbbbbb     b    e  ##b",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwcWcwwwwwwwwwcccwwwwwwwwwbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbUUbUUbbbbbbbbbbbbbbUUbbbUUbbbbbbb",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwcccwwwwwwwwwcccwwwwwwwwwwwwwwwwwwwwwwwwwdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd          #dddddddddUUbddUUddddddd",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwcWcwwwwwwwwwwwwwwwwwwwwwwwwwww ccwwwwwwwwwwbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb         ##bbbbbbbbb   h UUbbbbbbb",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwcccwwwwwwwwwwwwwwwwwwwwwwwwwww Wcwwwwwwwwbbbbbbbbbbbbdddddddddddddddddddbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd   h UUbdddddd", 
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "coreGround" : {
        theme : "ninjaTemple",
        background : "dark",
        debugMenuWhite : true,
        shade : {
            a : 90,
        },
        signs : {
            'a' : {
                message : "Danger! Welcome to\nCoreGround,\nNinja Temple ahead!",
                adjustH : 50,
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
            },
            'b' : {
                message : "Draw bridge\nswitch ^",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
            },
            'c' : {
                message : "You've made it past\nthe first part",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
            }
        },
        doors : {
            'a' : {
                level : "trek2",
                symbol : 'b',
            },
            'b' : {
                level : "coreGround",
                symbol : 'c',
                locked : true,
            },
            'c' : {
                level : "coreGround",
                symbol : 'b',
            },
            'd' : {
                level : "miniBattle",
                symbol : 'a',
            },
            'e' : {
                level : "night",
                symbol : 'd',
                locked : true,
            },
            '1' : {
                level : "coreGround",
                symbol : '2',
            },
            '2' : {
                level : "coreGround",
                symbol : '1',
            },
            '3' : {
                level : "coreGround",
                symbol : '4',
            },
            '4' : {
                level : "coreGround",
                symbol : '3',
            }
        },
        keys : {
            'a' : {
                level : "coreGround",
                symbol : 'b',
            },
        },
        chests : {
            'a' : {
                regen : true,
                drops : [{
                    contains : "bubbleShield",
                    total : true,
                    xPos : 80,
                    yPos : -50,
                    diameter : 40,
                }],
            },
            'b' : {
                drops : [{
                    contains : "coin",
                    props : {
                        coinAmt : 50,
                    },
                    total : true,
                }],
            },
        },
        plan : [
            "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            "                UU   QQ  %          %       %     QQFFFFF",
            "                UU   QQ                           QQF    ",
            "                UU   QQ           cc              QQF    ",
            "a     a  e      UU  bQQc      A   cc   A       a  QQF    ",
            "D  f  S  Dp    GUU  DQQD      Q        Q       [  QQF    ",
            "QQPPPPPPPPPPPPQuUU QQQQPPPPPPPPPPPPPPPPPPPPPPPPPPPQQF    ",
            "QQQQQQQQQQQQQQQ UU QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQF    ",
            "FFFFFFFFFFFFFQQ UU QQFFFFFFFFFFFFFFFFFFFFFFFFFFFFFQQF    ",
            "F           FQQ UU QQF                           FQQF    ",
            "F           FQQuUU QQF                           FQQF    ",
            "F           FQQ UU QQF                           FQQF    ",
            "F           FQQ UU QQF                           FQQF    ",
            "FFFFFFFFFFFFFQQ UU QQFFFFFFFFFFFFFFFFFFFFFFFFFFFFFQQF    ",
            "QQQQQQQQQQQQQQQ UU QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQF    ",
            "QQQQQQQQQQQQQQQ UU QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQF    ",
            "%     %    %                              %       QQF    ",
            "                                  cc           hh QQF    ",
            "                                  cc           hh QQF    ",
            "     A          AAG                    A     A    QQFFFFF",
            "     QPPPPPPPPPPPPPPPPPQU     UQQPPPPPPPPPPPPPPPPPQQQQQQQ",
            "     QQQQQQQQQQQQQQQQQQQU     UQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            "        %     %       QQU     UQQG  %      %      %    QQ",
            "                      QQ       QQ                      QQ",
            "                      QQ       QQ          mm          QQ",
            "                      QQ       QQ                      QQ",
            "A   A                %QQ       QQ       A      A       QQ",
            "sssssPPPPPPPPPPQUU    QQI     IQQu   u  Q      Qu   u  QQ",
            "QQQQQQQQQQQQQQQQUU    QQQFFFFFQQQ       PPPPPPPP       QQ",
            "FFFFFFFFFFFFFFQQUUFUUFFQQFFFFFQQQ  M    QXXXXXXQ FFF   QQ",
            "             FQQUUFUUFFQQ     QQQ       QXXXXXXQ       QQ",
            "             FQQUUFUUFFQQ hah QQQu   u  QXXXXXXQu   u  QQ",
            "             FQQUUFUUFFQQ hKh QQQQQhhhQQQXXXXXXQ       QQ",
            "             FQQUUFUUFFQQ hhh QQQ4>     QXXXXXXQ    b  QQ",
            "             FQQUUFUUFFQQ     QQQD>  z  QXXXXXXQ    [  QQ",
            "             FQQUUFUUFFQQsQQQsQQQQQQQQQvQiiiiiiQQssQQQQQQ",
            "             FQQFFFFFFFQQQQQQQQQQQQQQQQvQ      QQQQQQQQQQ",
            "             FQQ                        Q      Q         ",
            "             FQQ                        Q      Q         ",
            "             FQQ                        Q      Q         ",
            "             FQQ^^^^^^^Q                QvvvvvvQ         ",
            "             FQQ   3  2Q1      A  b  A           a   c  d",
            "             FQQII D  DQD  f p Q  S  Q           [pf S  D",
            "             FQQQQQQQQQQPPPPPPPPPPPPPPPPQ      QPPPPPPPPP",
            "             FQQQQQQQQQQQQQQQQQQQQQQQQQQQ      QQQQQQQQQQ",
            "             FFFFFFFFFFFFFFFFFFFFFFFFFFQQ      QQFFFFFFFF",
            "                                      FQQ      QQF       ",
            "                                      FQQ      QQF       ",
            "                                      FQQ######QQF       ",
            "                                      FQQQQQQQQQQF       ",
            "                                      FQQQQQQQQQQF       ",
            "                                      FQQQQQQQQQQF       ",
            "                                      FQQQQQQQQQQF       ",
            "                                      FQQQQQQQQQQF       ",
        ],
    },
    "miniBattle" : {
        theme : "ninjaTemple",
        background : "dark",
        debugMenuWhite : true,
        //darkGrid : true,
        backgroundDarkGrid : true,
        doors : {
            'a' : {
                level : "coreGround",
                symbol : 'd',
                locked : true,
            },
            'b' : {
                level : "night",
                symbol : 'a',
                locked : true,
            },
        },
        signs : {
            'a' : {
                message : "You may not exit until\nall the enemies\nare defeated.",
                adjustH : 43,
                adjustX : -5,
            }
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "                        ",
            "                        ",
            "h                      h",
            "h           t          h",
            "                        ",
            "i                      i",
            "                        ",
            "     FFFFFF   FFFFFF    ",
            "                        ",
            "                        ",
            "a                      b",
            "D   p     I   I        D",
            "bbssbbbbbbbbbbbbbbbbssbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb",
            "iiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiii",
        ],
    },
    "night" : {
        theme : "ninjaTemple",
        background : "dark",
        nightMode : true,
        //darkGrid : true,
        // debugMenuWhite : true,
        signs : {
            'a' : {
                message : "Be careful in the dark!"
            },
            'b' : {
                message : "Find the\nkey(s) and escape!"
            },
            'c' : {
                message : "To Entrance"
            },
            'd' : {
                message : "Press 'r' if you\n haven't already!",
            },
            'e' : {
                message : "Ascend Please"
            },
            'f' : {
                message : "Exit"
            }
        },
        keys : {
            'a' : {
                level : "night",
                symbol : 'g',
            },
        },
        doors : {
            'a' : {
                level : "miniBattle",
                symbol : 'b',
            },
            'b' : {
                level : "night",
                symbol : 'c',
            },
            'c' : {
                level : "night",
                symbol : 'b',
            },
            'd' : {
                level : "coreGround",
                symbol : 'e',
            },
            'e' : {
                level : "night",
                symbol : 'f',
            },
            'f' : {
                level : "night",
                symbol : 'e',
            },
            'g' : {
                level : "ninjaTempleEntrance",
                symbol : 'a',
                locked : true,
            },
        },
        plan : [
            "hcPPPPPPPPPPPPPPPPPPPPPPPPPPPPbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "chPPPPPP                                                    ",
            "bbbbbbbbbb                                                  ",
            "bbbbbbbbbbb                                                 ",
            "bbbbbbbbbb           e     e            bbbbbb     bbbbb UU ",
            "bbbbbbbbb      bbbbbbbbbbbbbbbb   E     b UU bhchchb     UU ",
            "bbbbbbbb          b           bbbbbbbbbbb UU b     b     UU ",
            "                  b             cc        UU b   AAb     UU ",
            "a d               b             hh        UU bsssbbb   i UU ",
            "K S              Ib     ch      cc        UU b     b   i UU ",
            "^^^^^^^^^^^^^^^^^^b     hc   bbPPPbbbPPPP UU b     b   i UU ",
            "vvvvvvvvvvvvvvvvvvb          bb           UU   hh  b   i UU ",
            "                             bb           UU       bsssi UU ",
            "                     PPF F F bb       e   UU E     b     UU ",
            "                     bb      bbUUbbbbbbbbbbbbbbbbbbb 0   UU ",
            "         f           bb      bbUU                  b  0  UU ",
            "    I    D    I      bb      bbUU         E        b0    UU ",
            "bbbbbbbbbbbbbbbbbbbbbbb######bbbbbb UU  bbbbb UU   b0  i    ",
            "bbbbbbbbbbbbbbbbbbbbbbb######bb cc  UU  b   b UU  b    i    ",
            "       bbe  U fgbb   bb      bb cc  UU  b   b UU b 0 0 i    ",
            "       bbDf U SDbb   bb      bb cc  UU b   b  UUb     i     ",
            "  ccc  bbPP U PPbb   bb      bbUUbbbbbb    bb UUb    i      ",
            "  chc  bb   U   bb   bb      bbUU   PP      bbbbb   i       ",
            "  ccc  bb   U   bb   bb      bbUU   PP        cc    i#######",
            "a   a bbbcb e cdbb   bb      bbUU   PP        hh    i#######",
            "Dp  S DbbDS S SDbbbbbbb######bbUU   PP   AA   cc    i#######",
            "bbbbbbbbbbbbbbbbbbbbbbb######bbbbbbbbbbbbbbbbbbbbsssbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbb######bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTempleEntrance" : {
        theme : "ninjaTemple",
        background : "dark",
        debugMenuWhite : true,
        useFlypis : true,
        addArraysToSave : ["cloudMine", "ice"],
        shade : {
            a : 70,
        },
        keys : {
            'a' : {
                level : "coreGround",
                symbol : 'e',
            },
        },
        doors : {
            'a' : {
                level : "night",
                symbol : 'g',
            },
            'b' : {
                level : "ninjaTemple",
                symbol : 'a',
            },
            'c' : {
                level : "ninjaTempleEnd",
                symbol : 'b',
                locked : true,
                magic : true,
            }, 
            'd' : {
                level : "interX",
                symbol : 'a',
            },
        },
        signs : {
            'a' : {
                message : "Ninja Temple ->",
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
            'b' : {
                message : "Ninja Temple belongs to the\nninjas of the forgotten land.",
                adjustW : 155,
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
            'd' : {
                message : "Ninjas guard the\nsacred treasure!",
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
            'c' : {
                message : "No Trespassing!\n Unless you're a ninja",
                adjustW : 130,
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
            'e' : {
                message : "Ninja Temple\nahead!",
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
        },
        plan : [
            "                                                                                                                          i",
            "                                                                                                                         'i",
            "                                                                                                                          i",
            "                                                                                                                    .   iii",
            "                                                                                                                       biii",
            "                                                                                                                       biii",
            "                                                                                    AA                                bbiii",
            "                                                                                    bb                           .   bbbiii",
            "                                                                                    PP                             bbbbbiii",
            "                                                                                    PP                             bbbbbiii",
            "                                                                                 A PPPP A                           iiiiiii",
            "                                                                                UbPPPPPPbU                            * iii",
            "                                                                       AU    A  UbbbbbbbbU  A    UA                 iiiiiii",
            "                                                                        U       Uu   u   U       U                 bb   iii",
            "                                                                        U       UP PPPP PU       U                 bb   iii",
            "                                                                        U       UP PbbP PU       U  c              bb   dii",
            "      A           A           A           A           A             p  |U  f |  U| PDDP |U  |    U| D f            bb   Dii",
            "                                                                    bPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPgggddggggdd",
            "   h     c     h     c                                           bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "a  h     c     h     c     a     b     d     c     e          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "D  p  |     |     |     |  S  |  S  |  S  |  S  |  S  |    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTemple" : {
        theme : "ninjaTemple",
        // daylightCycle : true,
        shade : {
            r : 0,
            g : 0,
            b : 40,
            a : 80,
        },
        signs : {
            'a' : {
                message : "This way ->",
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
            },
        },
        doors : {
            'a' : {
                level : "ninjaTempleEntrance",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleHub",
                symbol : 'a',
            },
            'c' : {
                level : "ninjaTemple",
                symbol : 'd',
            },
            'd' : {
                level : "ninjaTemple",
                symbol : 'c',
                locked : true,
            }
        },
        plan : [
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            "PQ                                ee         u   u          e                           e           ee       u   u                        e                                 u   u   ",
            "PQ                                             cc                                                  hh            e           cc                                     cc              ",
            "PQ           a     d                                                     cc                                                                            hh                       c  b",
            "PQQ          S  |  D        |            |            |            |            |            |            |            |            |    eee     |            |            |    D  D",
            "PbQwwwwQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
            "PPQ UU QPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPQWUUWQPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPQ UU QP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPP*PPPPPPPPPPPPPP",
            "PPQ aa QPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPQWDDWQPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
        ],
    },
    "ninjaTempleHub" : {
        theme : "ninjaTemple",
        doors : {
            'a' : {
                level : "ninjaTemple",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleRoom#1",
                symbol : 'a',
            },
            'c' : {
                level : "ninjaTempleRoom#2",
                symbol : 'a',
                locked : true,
            },
            'd' : {
                level : "ninjaTempleRoom#2",
                symbol : 'c',
                locked : true,
            },
            'e' : {
                level : "ninjaTempleRoom#3",
                symbol : 'a',
                locked : true,
            },
            'g' : {
                level : "ninjaTempleTank",
                symbol : 'c',
                locked : true,
            }
        },
        signs : {
            'a' : {
                message : "This is the hub of\nall the rooms!",
            },
            colorPack : {
                red : 30,
                green : 100,
                blue : 100,
            },
        },
        plan : [
            "bQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQb",
            "bQ              Uu   u   u  Uu   u   u   u  Qb",
            "bQ              U  b   e    U   g           Qb",
            "bQ              U  D   D    U   D           Qb",
            "bQ              U^^^^^^^^^^^U  ^^^^^^^^^^^^^Qb",
            "bQ     hhh      Uu   u   u  Uu   u   u   u  Qb",
            "bQ  cc     cc                               Qb",
            "bQa     a          c   d   c  c             Qb",
            "bQD  fp S    G     D   D                 I  Qb",
            "bQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bb                                          bb",
            "bb                                          bb",
            "bb111111111111111111111111111111111111111111bb",
            "bb                                          bb",
            "bb                                          bb",
            "bb                                          bb",
            "bbsssbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bb                                          bb",
            "bb                                          bb",
            "bb                                          bb",
            "bb                                          bb",
        ],
    },
    "ninjaTempleRoom#1" : {
        theme : "ninjaTemple",
        doors : {
            'a' : {
                level : "ninjaTempleHub",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleRoom#1",
                symbol : 'c',
            },
            'c' : {
                level : "ninjaTempleRoom#1",
                symbol : 'b',
                locked : true,
            },
        },
        keys : {
            'a' : {
                level : "ninjaTempleHub",
                symbol : 'c',
            },
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b      c  c  h  c    c   c  c  h c    c    c   c   c   c    c  h     Ub",
            "b    h  c   c h   c   h   c   c    c h  c   c  h c   c   c h  c  h   Ub",
            "b    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbUb",
            "b                                                b                   Ub",
            "b                           bb                   <                   Ub",
            "b                 bbb      b##                   <                   Ub",
            "b               bbb##                                                Ub",
            "b              bb##                                                  Ub",
            "b              ##                         ^bb                        Ub",
            "b                                                                    Ub",
            "b                                                                     b",
            "b                             O                                       b",
            "b                     M  O            ss           PPPPP          PPPPb",
            "b                                                PPPb                 b",
            "b                  O                                b    A      A     b",
            "b          hh                                       b                 b",
            "b a  c                                              b                 b",
            "b D  D  p                                           b    |      |   ssb",
            "bPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPb   PPPPPPPP    PPPPPPPb",
            "bbbbbbbbbbb  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbb c bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbb c  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbb    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb  AAbbbbbbbb",
            "bbbbbbbbbbbbb cc bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb  bbbbbbbbbb",
            "bbbbbbbbbbbbb      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbvvvbbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbb cc bbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbb    bbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbb c  bbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbb  c bbbbbbbbbbbbbbbbbbbbbbbbdd***ddbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbb  c bbbbbbbbbbbbbbbbbbbbbbbdd***ddbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbb    bbbbbbbbbbbbbbbbbbbbbbdd***ddbbbbbbA   bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbb cc  bbbbbbbbbbbbbbbbbbbbdddddddbbbbbbb   bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbb     bbbbbbbbbbbbbbbbbbbbdddddbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbb  c bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb c bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbU     bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbb                                UU     bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbb        b a                   UU     bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbb    e  D K      e     e      UU     bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbU     bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    bbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssssbbbbbbbb",
        ],
    },
    "ninjaTempleRoom#2" : {
        theme : "ninjaTemple",
        removeArraysToSave : ["fireBeaker", "waterBeaker"],
        addArraysToSave : ["cloudMine", "dirt"], 
        doors : {
            'a' : {
                level : "ninjaTempleHub",
                symbol : 'c'
            },
            'b' : {
                level : "ninjaTempleBackyard",
                symbol : 'a'
            },
            'c' : {
                level : "ninjaTempleHub",
                symbol : 'd',
            },
            'd' : {
                level : "ninjaTempleFight",
                symbol : 'a',
            }
        },
        signs : {
            'a' : {
                message : "Let the enemy\npass through."
            }
        },
        chests : {
            'a' : {
                save : true,
                drops : [],
                hidden : true,
            },
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b                              ddd                                2  2222222222 U bbbb",
            "b                              d*d                                2  2222222222 U bbbb",
            "QQQQQQQUUQQQQQQQQQQQQQQQQQQQUUQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQbbbbbbbbbbbb U bbbb",
            "Q               11             d*d                       chch     Q  bbbbbbbbbb U bbbb",
            "Q              X><X            ddd                       hchc     Q  bbbbbbbbbb U bbbb",
            "QbbUUbbbbbbbbbbb11bbbbbbbbbbbbUd*d                       FFFF     Q  bbbbbbbbbb U bbbb",
            "Q  UU  bEbN              x   bUddd                                Q  bbbbbbbbbb U bbbb",
            "Q  UU  bFb               x   bUd*d             hch                Q  bbbbbbbbbb U bbbb",
            "Q  UU  b b               x   bUddd                   FFF          Q  bbbbbbbbbb U bbbb",
            "Q  UU  bFbbbb^^    ^b    x   1U1*d        cc   FFF                Q  bbbbbbbbbb U bbbb",
            "Q  UU  b b      xx  bF F x ^^bUddd                          c c   Q  bbbbbbbbbb U bbbb",
            "Q  UU  bFb      ^^  b    x   bUd*d       FFFFF          ccc     c Q  bbbbbbbbbb U    b",
            "Q  UU  b b          b    x   bUddd                              c Q  bbbbbbbbbb U   bb",
            "Q  UU  b            b    x   bUd*d                     FFFFFF   c Q  bbbbbbbbbb U f Db",
            "Q  UU  b^^^^^ss^^^^^^^^^^x^^^bUddd                             sssQ  bbbbbbbbbb U bbbb",
            "QbbUUbbbvvvvvvvvvvvvvvvvvxvvvbUd*d                                Q  bbbbbbbbbb U bbbb",
            "Q                        x    Uddd                 sss            Q  bbbbbbbbbb U bbbb",
            "Qa a                     x    Ud*d   a       cPd                  Q  bbbbbbbbbb U bbbb",
            "QDpS  bUUbbbbbbbbbUUbbbbbbbbbUUddd   [  f    DPD                  Q  bbbbbbbbbccUccbbb",
            "QQQQQQQUUQQQQQQQQQUUQQQQQQQQQUUQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQbbbbbbbbbbbccUccbbb",
            "b                              ddd                                b  bbbbbbbbchhUhhcbb",
            "b                              ddd                                b  bbbbbbbbchhUhhcbb",
            "bbbbbbb11bbbbbbbbb11bbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTempleFight" : {
        theme : "ninjaTemple",
        // darkGrid : true,
        removeArraysToSave : ["ninja"],
        doors : {
            'a' : {
                level : "ninjaTempleRoom#2",
                symbol : 'd',
            },
        },
        keys : {
            'a' : {
                level : "ninjaTempleHub",
                symbol : 'e',
                hidden : true,
            },
        },
        plan : [
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b  a                                   b",
            "b  K                                   b",
            "b                 t                    b",
            "b                                      b",
            "bh                                    hb",
            "bh     hh                    hh       hb",
            "bh   hh         I              hh     hb",
            "b                                      b",
            "ba                                     b",
            "bD        e      I     p               b",
            "PbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
        ],
    },
    "ninjaTempleRoom#3" : {
        theme : "ninjaTemple",
        nightMode : true,
        doors : {
            'a' : {
                level : "ninjaTempleHub",
                symbol : 'e',
            },
            'b' : {
                level : "ninjaTempleTerminal",
                symbol : 'd',
                locked : true,
            }
        },
        keys : {
            'a' : {
                level : "ninjaTempleRoom#3",
                symbol : 'b',
            }
        },
        signs : {
            'a' : {
                message : "Welcome to the Maze!",
            }
        },
        chests : {
            'a' : {
                save : true,
                drops : [{
                    contains : "coin",
                    props : {
                        coinAmt : 50,
                    },
                    total : true,
                }],
            },
        },
        plan : [
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "Pbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb#bP",
            "Pb                                              b         b                          h      bP",
            "Pb                                          '   b         b                               h bP",
            "PbU   U     c                                   b         b UbbbbbbUUUUUbbbbbbb#bbbbbbbbU   bP",
            "PbU   U          e     bbbbbbbbbbb   bbbbbbbbbbbb   bU    b U     #U   Ub  c   b    U  bUh  bP",
            "PbU   bbbbbbbbbbbbbbbbb#       h b I b          c   bU    b U     bU   Ub chc  b c  U  bU   bP",
            "PbU   U            h   bb        bbbbb              bU    b U bbbbbU   Ub  c U b    U  bU   bP",
            "PbU   U                 b   UbU           bbbbbbbbbbbU    b   b    U   Ubbbb U b c  U  bU h bP",
            "PbU   Ubbbbbbbbbbb      b   UbU           b         bU    b e b    U   U   b U b    U  bU   bP",
            "PbU   U          b      b   UbU   bbbbbbbbb         bU    bbbbbUUUUbbb U   b U b c  U  bU   bP",
            "PbU              b        c  b                ^^^^^^bU          UU   bbbbbbbU bbbb  U  bU   bP",
            "PbU     bbbbbbUUU#   e       b                      b           UU  h   U b U    b  U  bU  bbP",
            "PbbbbU       b   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb#   e       UU      U b U    b  U  bU  DbP",
            "Pb   U   c   b                c b     h             bbbbbbbbbbbUUUUbbbb U b U b  b  U  bbbbbbP",
            "Pb   Ub      b                  b         c              bU  b  UU    b U b U b#bb  U  b UU bP",
            "Pb   Uba  a  bbbbbbbbUUUUbbbbbbbb   UbUUUbbbbbbbbbbUUUUUUbU  b  UU    b  h h     b  U  b UU bP",
            "Pb   UbDp S        b    c           UbUUUb              UbU  b  UU    b          b  U  b UU bP",
            "Pb   Ubbbbb        b                UbUUUb       c      UbU  bbbb#    bbbbbbbbbbbb  U  b UU bP",
            "Pb h Ub         h  bbbbbbbbbbbbbbbbbbbUUUb       bbbbb  UbU      b                     b UU bP",
            "Pb   Ub                 b     b      bbbbb      b       Ub I     b                     b UU bP",
            "Pb I U#bbbbbbbbbb       b     b      b         b        Ubbbbb   bbbbbbbbbbbbbbbbbbbbbbb UU bP",
            "Pb   Ub  c           b     b     b            b  a      U  a                                bP",
            "Pb e Ub              b     b     b   c   e   b   [ E    U  K                                bP",
            "Pbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb#bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
        ],
    },
    "ninjaTempleBackyard" : {
        theme : "ninjaTemple",
        background : "dark",
        removeArraysToSave : ["ninja"],
        addArraysToSave : ["ninjaResistance"],
        doors : {
            'a' : {
                level : "ninjaTempleRoom#2",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleTerminal",
                symbol : 'a',
                locked : true,
            },
        },
        keys : {
            'a' : {
                level : "ninjaTempleBackyard",
                symbol : 'b',
                hidden : true,
            },
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "coin",
                    props : {
                        coinAmt : 50,
                    },
                    total : true,
                }, {
                    contains : "ninjaGuard",
                    total : true,
                    diameter : 35,
                    offX : 120,
                    offY : -100,
                }],
                save : true,
                hidden : true,
            },
        },
        plan : [
            "b                                              ",
            "b                                              ",
            "b                                              ",
            "b                                              ",
            "b                                              ",
            "b                     I                        ",
            "b                                              ",
            "b                                              ",
            "b                I         I                   ",
            "b                                              ",
            "b                  h  a a h                    ",
            "b                     [ K                      ",
            "b              |      b      |                 ",
            "b a           gggggg bbb gggggg             b  ",
            "b D p      ddddddddddddddddddddddddd        D  ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTempleTerminal" : {
        theme : "ninjaTemple",
        removeArraysToSave : ["hpCoin"],
        doors : {
            'a' : {
                level : "ninjaTempleBackyard",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleTank",
                symbol : 'a',
            },
            'c' : {
                level : "ninjaTempleTank",
                symbol : 'b',
                locked : true,
            },
            'd' : {
                level : "ninjaTempleRoom#3",
                symbol : 'b',
            },
        },
        plan : [
            ">vvvvvvvvvvvvvvvvvvvvvvvvvvvvv<",
            ">                         d  c<",
            ">                         D  D<",
            ">          bbbbbbbbbbbbbbbbbbb<",
            ">a     hhhh>           %% %   <",
            ">D  f phhhh>                 %<",
            ">bbbbbbbbbbbbbbbbb           %<",
            ">%%                           <",
            ">                             <",
            ">                             <",
            ">      bbbbbbbbbbbbbbbbbbbbbbb<",
            ">                 %           <",
            ">                             <",
            ">                             <",
            ">                             <",
            ">bbbbbbbbbbbbbbbbbbbbbbb      <",
            ">          %                  <",
            ">                             <",
            ">                             <",
            ">FFFFFbbbbbbbbbbbbbbbbbbbbbbbb<",
            ">               %             <",
            ">                             <",
            ">                             <",
            ">                             <",
            ">bbbbbbbbbbbbbbbbbbbbbbbbFFFFF<",
            ">%                            <",
            ">                             <",
            ">                             <",
            ">     bbbbbbbbbbbbbbbbbbbbbbbb<",
            ">                      hhhh  b<",
            ">                      hhhh  D<",
            ">^^^^^^^^^^^^^^^^^^^^^^^^^^^^^<",
        ],
    },
    "ninjaTempleTank" : {
        theme : "ninjaTemple",
        inWater : true,
        addArraysToSave : ["cloudMine"],
        doors : {
            'a' : {
                level : "ninjaTempleTerminal",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleTerminal",
                symbol : 'c',
            },
            'c' : {
                level : "ninjaTempleHub",
                symbol : 'g',
            },
            'd' : {
                level : "ninjaTempleWalkWay", 
                symbol : 'a',
            },
        },
        chests : {
            'a' : {
                regen : true,
                drops : [{
                    contains : "bubbleShield",
                    total : true,
                    xPos : 80,
                    yPos : -50,
                    diameter : 40,
                }],
            },
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "PPPPPPPBPPPPPPPPPPPPPPPPPPPPPPbPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PE E E booo*oo oooo oo*oo*oo*ob    i         i      i      iii  o      iiii    io     i PPP     i i        i i    i i i     b       i i  i  b     i     i      b   t  ",
            "P E E Ebo               ccccc b    i     o   i     ii *    Ei          oi   o  i     ii PPP      i          i      i i c     b       i  i  b       i   i       b      ",
            "PE E E bo               ccccc b   ii           E   i        i      O    i         o   i PPP       i        i        i c c     b     i     b         i i     cc ibbbi  ",
            "bbbbbbbbo               ccccc b       o     o     cc           E         cc            iPPP                      c   i i                 b                 c  c    bi ",
            "Pooooooo*                     b      e                    o                      O      PPP           c         c*c   i                      cc             cc      vb",
            "P*        hh           bbbbbbbb                          i          *                   PPP          c c         c              c           c  c      cc             d",
            "Po               cc                       cc     O   E  iii cc            cc            PPP    h      c                        h*h           cc      c  c            D",
            "Po                          e      EE                    i          E                *  PPP   hoh                     c         c                     cc            ^b",
            "Po                                      e      E       O       o                E  e    PPP    h              i      h h                                           bi ",
            "Po                     EE                                               *i    O         PPP            b     c i      c    b       i       i     i  h h  i     ibbbi  ",
            "Poa     b   c  a                                  cc              cc   ii               PPP           b       c i         b       i       c i     i  h  i      b      ",
            "PoD f p D   D  [   |     | |          |     |             *            i  |       |     PPP          b       c c i       b       i i     c c i     i   i       b   t  ",
            "bbbbbbbbbbbbbPPPPPPPPPPPPPPPPPPPPPPPPPP     PPPPPPPPPPPPPPPPPP    PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbP     PbbbbbbbbbbbbbbbbP    Pbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTempleWalkWay" : {
        theme : "ninjaTemple",
        removeArraysToSave : ["hpCoin"],
        doors : {
            'a' : {
                level : "ninjaTempleTank",
                symbol : 'd',
            },
            'b' : {
                level : "behindTheNinjaTemple",
                symbol : 'a',
            }
        },
        signs : {
            'a' : {
                message : "Run!",
            }
        },
        plan : [
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b        VV   %    VV   %%   VV        VV        VV   %%   VV        VV        VV    %%  VV        VV %%     VV        VV   %    VV   %%   VV     b",
            "b                                                                                                                                                 b",
            "b   h h h                                                                                                                                         b",
            "b    h h            c                          c                 c                  c                   c                               c         b",
            "b   h h h         chhhc           t          c h c             chhhc       t      c h c        A      chhhc       t                   c h c       b",
            "b    h h            c                          c      Abbbbb     c                  c      bbbbbA       c                    Abbb       c         b",
            "ba  h h h  a                                          bhhh                                   hhhb                            bhhh                bb",
            "bDpf       S    E        AA             E            Abhh      AA   E        E      AA        hhb   E     E             E    bhhh  A E   A       Db",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  bbbbbbbbbbbbbbbbbbbbbbbbbbbbb  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
            "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
        ],
    }, 
    "ninjaTempleKeyRoom" : {
        theme : "ninjaTemple",
        doors : {
            'a' : {
                level : "behindTheNinjaTemple",
                symbol : 'c'
            }
        },
        keys : {
            'a' : {
                level : "ninjaTempleHallway",
                symbol : 'b',
                boss : true
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "fairy"
                }]
            }
        },
        rumble : 1,
        plan : [
            "                                                  ",
            "      a                                           ",
            "     p]                                           ",
            " '   FFF                                          ",
            "                                               a  ",
            "                                               K  ",
            " A   A   A       A           A   A   A   A   A  Ub",
            " b b b b b b b b b b b b b b b b b b b b b b b bUb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbUb",
            "bFFFF  FFFFF  FFFFFFF  FFF FFFFFFF   FFFF  FFFF Ub",
            "bu    u    u    u    u    u    u    u    u    u Ub",
            "b                                                b",
            "ba   /    |                   /    |         |  Ub",
            "bD   /    /                   /    /         /  Ub",
            "bPPPPPPPFFFFFF     PFFF   FFFFPPP FFFF   FFF FFFPb",
            "bbbbb b b  bb  b                bb b bb    b bbbbb",
            "bbb                                            bbb",
            "bb                                               b",
            "b                                                b",
            "b                                               bb",
            "bb                                              bb",
            "bb                                              b ",
            "bb                                              b ",
            "/b                                           bbbbb",
            "/bbb                                         /  bb",
            "bb /                                         /  b ",
            "b  /                                         /  / ",
        ]
    },
    "behindTheNinjaTemple" : {
        theme : "ninjaTemple",
        useFlypis : true,
        doors : {
            'a' : {
                level : "ninjaTempleWalkWay",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleHallway",
                symbol : 'a',
            },
            'c' : {
                level : "ninjaTempleKeyRoom",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                                                                                                                                 ",
            "                                                                                                                                                                                                                 ",
            "                                                                                                                                                                                                                 ",
            "                                                                                                                           A     A     A     A     A     A     A     A     A     A     A     A                   ",
            "                                                                                                                           b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b                   ",
            "                                                                                                                         rbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbl  A  A  A  A  A  A",
            "                                                                                                                        bbiiibFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFbiiibbbbbbbbbbbbbbbbbbb",
            "                                                                                                                        biiiibu   u   u   u   u   u   u   u   u   u   u   u   u   u   u   biiiiFFFFFFFFFFFFFFFFFF",
            "                                                                                                                        bbiiibc                                                          bbiiibbbbbbbbbbbbbbbbbbb",
            "                                                                                                                        R bbbbD         |     |     |     |  |     |     |     |         DbbbbL  V  V  V  V  V  V",
            "                                                                                                                          R bbb   p  f  /     /     /     /  /     /     /     /         bbbL                    ",
            "                                                                                                                            R bbbbbbbbbbPPPPPPPPPPPPPPPPPP/UU/PPPPPPPPPPPPPPPPPPbbbbbbbbbbL                      ",
            "                                                                                                                                V  V  R bbbbbbbbbbbbbbbiPP/UU/PPibbbbbbbbbbbbbbbL  V  V                          ",
            "                                                                                                                                        R bbbbbbbbbbbbbiPP/UU/PPibbbbbbbbbbbbbL                                  ",
            "                                                                                                                                          R bbbbbbbbbbbiPP/UU/PPibbbbbbbbbbbL                                    ",
            "                                                                                                                                            b  V bV  bFi  /UU/  iFb  Vb V  b                                     ",
            "                                                                                                                                            b   b    bFi  /UU/  iFb    b   b                                     ",
            "                                                                                                                                            b    b   bFi  /UU/  iFb   b    b                                     ",
            "                                                                                                                                           Ab   b    bFicc/UU/cciFb    b   bA                                    ",
            "                                                                                                                                           bb    b   bFicc/UU/cciFb   b    bb                                    ",
            "                                                                                                                                           bb   b    bFi  /UU/  iFb    b   bb                                    ",
            "                                                                                                                                           bb    b   bFi  /UU/  iFb   b    bb                                    ",
            "                                                                                                                                           bb    ii  bFiP /UU/ PiFb  ii    bb                                    ",
            "                                                                                                                                           bb     i  bFiP^^UU^^PiFb  i     bb                                    ",
            "                                                                                                                                           bb    i   bFiP  UU  PiFb   i    bb                                    ",
            "                                                                                                                                           bb    ii  bFiP  UU  PiFb  ii    bb                                    ",
            "                                                                                                                                           bb   i    bFiP| UU |PiFb    i   bb                                    ",
            "                                                                                                                                           bbbb   A  bFFb/ UU /bFFb  A   bbbb                                    ",
            "                                                                                                                                            bib  bbbbbbbb/ UU /bbbbbbbb  bib                                     ",
            "                                                                                                                                            bib  bib    U  UU  U    bib  bib                                     ",
            "                                                                                                                                            bib  bib    U  UU  U    bib  bib                                     ",
            "                                                                                                                                            bbb  bib    U  UU  U    bib  bbb                                     ",
            "                                                                                                                                            bibbbb   |  U| UU |U  |   bbbbib                                     ",
            "                                                                                                                                            biiii       U  UU  U       iiiib                                     ",
            "                                                                                                                                            bbbFi       U  UU  U       iFbbb                                     ",
            "                                                                                                                                            VbbFi |     U  UU  U     | iFbbV                                     ",
            "                                                                                                                                             VbFi    |  U| UU |U  |    iFbV                                      ",
            "                                                                                                                                              bFi       U  UU  U       iFb                                       ",
            "                                                                                                                                              bFi       U  UU  U       iFb                                       ",
            "                                                                                                                                              bbFi|     U  UU  U     |iFbb                                       ",
            "                                                                                                                                              VbFi/  |  U| UU |U  |  /iFbV                                       ",
            "                                                                                                                                               bbFbbi/  U/ UU /U  /ibbFbb                                        ",
            "                                                                                                                                               VbFFFbi  U/ UU /U  ibFFFbV                                        ",
            "                                                                                                                                                bbbFFbi U/ UU /U ibFFbbb                                         ",
            "                                                                                                                                                  VbFbbbbi UU ibbbbFbV                                           ",
            "                                                                                                                                                   bFFFFFb UU bFFFFFb                                            ",
            "                                                                                                                                                   bbbbbFFbUUbFFbbbbb                                            ",
            "                                                                                                                                                    V  VbFbUUbFbV  V                                             ",
            "                                                                                                                                                         buUU b                                                  ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                   |    bbuUU bb    |                                            ",
            "                                                                                                                                                         b UU b                                                  ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                        bbuUU bb                                                 ",
            "                                                                                                                                                   |    Vb UU bV    |                                            ",
            "                                                                                                                                                         b UU b                                                  ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                        bbuUU bb                                                 ",
            "                                                                                                                                                   |     b UU b     |                                            ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                        bbuUU bb                                                 ",
            "                                                                                                                                                         b UU b                                                  ",
            "                                                                                                                                                   |    Ab UU bA    |                                            ",
            "                                                                                                                                                        bbuUU bb                                                 ",
            "                                                                                                                                                         b UU b                                                  ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                   |    bbuUU bb    |                                            ",
            "                                                                                                                                                         b UU b                                                  ",
            "                                                                                                                                                        Ab UU bA                                                 ",
            "                                                                                                                                                       AbbU  UbbA                                                ",
            "   A                                         A        A                                         A                                   A              |  AbF U  U FbA  |                                            ",                                                   
            "  APA                                       APA      APA                                       APA                                 APA               AbFF U  U FFbA                                              ",                                               
            " APPPA                                     APPPA    APPPA                                     APPPA                               APPPA             AbFFF|U  U|FFFbA                                             ",                                                  
            "APPPPPA     A     A     A     A     A     APPPPPA  APPPPPA     A     A     A     A     A     APPPPPA     A     A     A     A     APPPPPA     A      bFFFF/U  U/FFFFb      A     A     A                          ",                                                   
            "PPPPPPP b b b b b b b b b b b b b b b b b PPPPPPPPPPPPPPPP b b b b b b b b b b b b b b b b b PPPPPPP b b b b b b b b b b b b b b PPPPPPP b b b b b |^^^^^/U  U/^^^^^| b b b b b b b b b b                        ",                                                   
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbFUUFbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                      ",                                                     
            "bbFaFbb                                   bb h bP  Pb c bb                                   bb h bb                             bb h bb                  FUUF              bbFFFbbVFFFFFFb                      ",
            "bbFDFbb                                   bbhhhbv  vbcccbb                                   bbhhhbb                             bbhhhbb                  FUUF              bVbFbVFFFFFFFFb                      ",
            "b FFF P                                   PV h VP  PV c VP                                   PV h VP                             PV h VP                  FUUF              bFFbbFFFFAbbbFb                      ",
            "b     P     |     |     |     |     |     P     P  P     P     |     |     |     |     |     P     P     |     |     |     |     P     P     |     |     |FUUF|     |     | bFFFbbbbbbbFFFb                      ",
            "b     P     /     /     /     /     /     P     P  P     P     /     /     /     /     /     P     P     /     /     /     /     P     P     /     /     /FUUF/     /     / bbbbbbFFbbFFFFb                      ",
            "b| f |P  p  /     /     /     /   I /     P|   |P  P|   |P     /     /  I  /     /     /     P|   |P     /     /     /   I /     P     P     /     /     /FUUF/     /     / bFFFFbbbFFbFbbb                      ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbFFFbbFFbFFbFFb                      ",   
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbAAAbFFFFbbFbbb                      ",   
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                      ",            
        ],
    },
    "ninjaTempleHallway" : {
        theme : "ninjaTemple",
        nightMode : true,
        addArraysToSave : ["coin", "hpCoin"],
        doors : {
            'a' : {
                level : "behindTheNinjaTemple",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleBossRoom",
                symbol : 'a',
                style : "boss",
                locked : true
            },
            'c' : {
                level : "ninjaTempleHub",
                symbol : 'f',
            },
        },
        signs : {
            'a' : {
                message : "Hero of legends, \n only with time\nyou shall win.\nProceed?",
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100,
                },
                textColor : {
                    red : 255,
                    green : 255,
                    blue : 255,
                    alpha : 100,
                },
                adjustH : 55
            }
        },
        plan : [
            "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
            "FFFPFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFFFFFFFFFFPFFFF",
            "FFF*FFFFFFP*PFFFFFFF*FFFFFFFP*PFFFFFFF*FFFFFFFP*PFFFFFFF*FFFFFFFP*PFFFFFFP*PFFFFFFF*FFFF",
            "FFFPFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFFFFFFFFFFPFFFF",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "                                                                                     bbb",
            "            ccc           hhh           ccc           hhh           ccc               bb",
            "a                                                                                  a UDD",
            "D   |   |         |   |         |   |         |   |         |   |          | f | p S Ubb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "FFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFFFFFFFFFFPFFFFFFFFFFFF",
            "FFP*PFFFFFFF*FFFFFFFP*PFFFFFFF*FFFFFFFP*PFFFFFFF*FFFFFFFP*PFFFFFFP*PFFFFFFF*FFFFFFFP*PFF",
            "FFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFPFFFFFFFFFFFFFFFFFFFFFFFFFFPFFFFFFFFFFFF",
            "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
        ]
    },
    "ninjaTempleBossRoom" : {
        theme : "ninjaTemple",
        doors : {
            'a' : {
                level : "ninjaTempleHallway",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleEnd",
                symbol : 'a',
            },
        },
        bosses : {
            'a' : {
                name : "ninjaBoss",
            }
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbvvvvvvvvvvvvvvvvvvvbbb",
            "b  VVVVVVVV   VVVVVVVV  b",
            "b                       b",
            "b                       b",
            "b                       b",
            "b                       b",
            "b          a            b",
            "b          B            b",
            "b                       b",
            "b                       b",
            "b                       b",
            "ba                     bb",
            "bD p        z          Db",
            "bbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTempleEnd" : {
        theme : "ninjaTemple",
        addArraysToSave : ["coin", "hpCoin"],
        darkGrid : true,
        doors : {
            'a' : {
                level : "ninjaTempleBossRoom",
                symbol : 'b',
            },
            'b' : {
                level : "ninjaTempleEntrance",
                symbol : 'c',
                magic : true,
            }
        },
        signs : {
            'a' : {
                message : "To Ninja Temple\nEntrance. (Press Down)",
                adjustW : 130,
            },
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "ninjaStarShooter",
                    total : true,
                    diameter : 24,
                    offX : 80,
                    offY : -200,
                }],
                save : true,
            }
        },
        special : {
            'a' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "ninja"
                    },
                }
            },
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b                         b b    b    bb",
            "b                         b    b    b  b",
            "b                         b  b    b    b",
            "b                         bb    b     bb",
            "b                         b   b     b  b",
            "b                         b b     b    b",
            "b                         b     b     bb",
            "b                         bbbbbbbbbbbbbb",
            "b                         PPPPPPPPPPPPPb",
            "b            a b a        u    u    u  b",
            "b      a  |  S D [  |                  b",
            "ba     $ ibbbbbbbbbbbi                 b",
            "bD pf ibbbbbbbbbbbbbbbbbi              b",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "interX" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "ninjaTempleEntrance",
                symbol : 'd',
            },
            'b' : {
                level : "icyPlains",
                symbol : 'a',
            }
        },
        signs : {
            'a' : {
                message : "Hp regenerators ->",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
                textColorPack : {
                    red : 190, 
                    green : 215,
                    blue : 255,
                    alpha : 200,
                },
            },
            'b' : {
                message : "Watch out for\nfreezing ice!",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
                textColorPack : {
                    red : 190, 
                    green : 215,
                    blue : 255,
                    alpha : 200,
                },
            },
            'c' : {
                message : "icycles &\nIce Spikes! ->",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
                textColorPack : {
                    red : 190, 
                    green : 215,
                    blue : 255,
                    alpha : 200,
                },
            },
            'd' : {
                message : "Shoot!",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
                textColorPack : {
                    red : 190, 
                    green : 215,
                    blue : 255,
                    alpha : 200,
                },
            },
            'e' : {
                message : "If you get frozen just\nkeep on pressing space.",
                colorPack : {
                    red : 5, 
                    green : 90, 
                    blue : 200, 
                    alpha : 220,
                },
                textColorPack : {
                    red : 190, 
                    green : 215,
                    blue : 255,
                    alpha : 200,
                },
                adjustW : 130,
            },
        },
        plan : [
            "                                                                                                                                                                                                                                                                                                     ",
            "                                                                                                                                                                                                                                                                                                     ",
            "                                                                                                                                                                                                                                                                                        s            ",
            "                                                                                                                                                                                                                                                                               s        C            ",
            "                                                                                                                                                                                                                                                                               C                     ",
            "                                                                                                                                                                                                                                                            s                                        ",
            "                                                                                                                                                                                                                                                   s        C                                        ",
            "                                                                                                                                                                                                                                              s    C                                                 ",
            "                                                                                                                                                                                                                                 s            C                               cc             cc      ",
            "                                                                                                                                                                                                                            s    C                                c              5         e        b",
            "                                                                                                                                                                                                           s                C                                   c   c                QQ    S    p f D",
            "                                                                                                                                                                                                           C                                                                 444444444444444444444444",
            "                                                                                                                                                                                                                                         ccc                    AA AA        4ii4iiiiiiiiiii4ii4iiiii",
            "                                                                                                                                                                                                                                                   2 433       AiiAiiA  E    4  4           4  4     ",
            "iii                                                                                                                                                                                            s                                                   4334343ddddgiiiiiiig4444444  4           4  4     ",
            "iii                                                                                                                                                                                       s    C                 ccc                  2     bbbbbb33344344bbbbbddddddddggggggg44444444444444444444444",
            "iii                                                                                                                                                                                 s     C                                  2       4444bbbb1111bbb44444b11111bbbbbbdddddddddggggggggggggggggggggggg",
            "iii                                                                                                                                                                                 C                                     3334443333434bbb111    111bbbb11wwwww111111bbbbbbbbbddddddddddddddddddddddd",
            "iii                                                                                                                                                                                                                 __3334444444444444bb11          111111wwww111    111111111bbbbbbddddddddddddddddd",
            "iii                                                                                                                                                                                                2 2      ______r ggggggggg44444434bb1                11wwww11     V        111111bbbbbbbbbbbbbbbbb",
            "iii                                                                                     s                                                                                                                 r gggggggbddbbbbbbbbggggg4bb1                  11ww11               V     11111111bbbbbbbbb",
            "iii                                                                 s                   C        s                                                                                   ccc           ___r gggbbbbbbbbbbbbbbbbbbbbbbbbbb1                    1111                      V       111111111",
            "iii                                                                 C    s                       C      s                                        s                   ______                    __r ggggbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1                       1                               V     iii",
            "iii                                                                      C                              C                s                       C                   gggggg 33   __      ___r gggggbbbbbbbbbb11111111111111111111111                   A   11                                     iii",
            "iii                                                                                    cc                                C       s                                 ggbbbbdd443444ggbb    gggggdddbbbbbbbbiii11111111111111111111111                 AA 11111                                      iii",
            "iii                                                                                                                              C                         cc    ggbbbi111bg4434gbbi     bbbbbbbbbiibbiiiii11111iiii111111111iiiiii                 111111                                        iii",
            "iii                s                 s s                                                                    s   s                                                bbbbbbb11iibbbbbbi       bbbbbiii  iiiibbbiiiii    ii1111iii bbii                 A1i1                                        '  iii",
            "iii                C    s            C C    s  s                        33ggg        4bbbb44                C   C                      ccc                             b11ibbbbiii         bbi   V   i   bbdd        ibbi   V  bi                  1ii1                                           iii",
            "iii                     C                   C  C                       gggddb      FFib11bb4                              c       cc          cc      gg11bbbFFF      iiiiiibb             ii        V  bbdbdi        bbi     bbV                  1ii1                                        U  iii",
            "iiia                                                                  gdddddb  cc    ib11bbgT                             S                       ggggdd1bb           i  iiibb  A           i           bddddi      bbbi     bb                   A1ii1 ccccc               cccc        cccc   U  iii",
            "iiiD                                                                 bdddibbb        ib111bdgg                          iiii      m   bFFFb    m  bdddd11b            V   iibbiii           V           bddddii    bbi       b                   A1ii1V                                        U  iii",
            "iii1111                                                             4bbbi  bb         ib11bbdd       ccc              iibbbb11m          m        iiii11b       FF        iibbbbbiiA                   bddddddi  bbiiV      bb                  A1ii1V   PPPPP              bbbb               U  iii",
            "iii                                                                44bbi    bggFF      ib11bbd                      iibbbbbbb11                   V ii111b                Viibbbbbbi                  bdddddddibbbi         bb      T  T  2    A1ii1V                                   PPPPP  U  iii",
            "iii                      r 1l                                      44bbi    bbb    cc   ib11bbdl 2               r ibbbbbbbbbb11                     bb11b          T      iibbbbbbi                 bdddddddddbbbbi   T   gbbbgT  gggggggggg A1ii1V                                              iii",
            "iii    E  ___       2  r 11111l          A   a         A  b        44bbi    bbb         ib11bbbdiiil     2 r iiiiiibbbbbbbbbb1 1                    bi11ib   T    ggg      iibbbbbbbi        T  gggggbbdddddddddddiggggggggbbbbdgggdddddddddddddi1              2      2                          iii",
            "iii_____r iiil       r 1111111111l   E   b   S  QQ  f  b  S        44bbbbT  bbb         ibb111bbdddiiidddiidddddddddddddddddd1 V                   bbi11ibggggsssgdddggggUUiiiiiiiii1UU1ggggggggdddddddddddddddddddddddddddddddddddddddddddddddiddddddddbb1UU1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "ddddggggiiiiiii1111111111ddddd11111111111bbbbbbbbbbbbbbbiiiiwwwwwww111111gggb1111WWWW11111111111111111111111111111111111111111                     111111111111iiiiiiiii1UU1iiiiiiii1UU1iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiddddddddbb1UU1bbbbbbbbbbddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiwwWWWWWWWWWWWWWWWWWWWWWWWddddddddddddddddddddddddddddddddddddddddd                   AAddddddddddddddddddddd1UU1dddddddd1UU1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1UU1bbbbbbbbbbddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddiiiiiiiiiiiiiiiiiiiiiWWWWWwwwwwWWWWWWWWWWWWWWWWWWWWWWdddddddddddddddddddddddddddddddddddddddddd                 AAddddddddddddddddddddddd1UU1111111111UU11111111111111111111111111111111111111111111111111111111111111111111UU11bbbbbbbbbddddddddddddddddddddddddddddd",
            "dddddddddddddddddddddddddddddddiiiiiiiiiiiiiiiiiiiiWWWWWWwwwwwWW    +    WWWWWWWWWWWdddddddddddddddddddddddddddddddddddddddddd1              AAddddddddddddddddddddddbbb1UU          UU                            d       434                       UU    UU 1bbbbbbbbbddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbWWWWWWWwwwWWWW 0  0  0 WWWWWWWWdddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddd1            Addiiibbbbbbbbbbbbbbbbbbbbbb1UU          UU                            S       343                       UU    UU 1bbbbbbbbbddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddwwWWWW   +    +WWdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddd1A           iiiiidd  ddddddddddddddddddd1111111111111111111111111111111111111111111111111        11111111111111111111UU11111111bbbbbbbbbbdddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd11111A          iiddd    dddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb1111111111bbbbbbbbbbbbbbbbbb1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd1  111          Vddd     ddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd1  V V           ddd          dbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd111                 dd          ddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd1              AA   Vdd        ddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbddddddddddddddddd1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd1   A        A 11 A   V      dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd1UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbb                                                                          bbbbbbbbbbbbbbbbbbbbbbbbddddddddd1111111      AA1A11A1     A  A dddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbb                                                                           bbbbbbbbbbbbbbbbbbbbbbdddddddddddddddd1AAAAA111111111A  111A1Adddddbbbbbbbbbbbbdbbbb '                 ccc                          ccc                      UU1bbbbbbbbbbbbbbbbb                            ",
            "bbbbbbbbbbbbbbb                                                                          bbbbbbbbbbbbbbbbbbbbbdddddddddddddddddiiiiiiiiii111111iiiiiiii111dbbbbbbbbbbbbdbbbb                  ccccc                        ccccc                     UU1bbbbbbbbbbbbbbb                              ",
            "bbbbbbbbbbbbbb                                                                        bbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddiiiiiiiiiiiiiiiiiiiiiii1111111111bbbbbbbbdbbbbbbbbbbbbbbbb       ccc      bbbbbbbbbbbbbb      ccc         1111111111111111bbbbbbbbbbbbbbbb                             ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddiiiiiiiiiiiiiiiiiiiiddddddbbbbbbbbbbbbdbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbb                           ",
        ]
    },
    "icyPlains" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "interX",
                symbol : 'b',
            },
            'b' : {
                level : "IcyStretch",
                symbol : 'a',
            }
        },
        plan : [
            "                                                                                                                                                                                           ",
            "                                                                                                                                                                                           ",
            "                                                                                                                                                                                           ",
            "                                                                                                                                                                                           ",
            "       s                         s                                            1111111111111111111111111111111111111111111111111111111111111111                                             ",
            "       C            s            C                                            1           3           3         3         3         3        1                                             ",
            "                    C                                                         1           3           3         3         3         3        1                                             ",
            "                                                                              1           3           3         3         3         3        1                                             ",
            "                                            s                                 1           3           3         3         3         3        1                                             ",
            "                               5            C                                 1           3           3         3         3         3        1                                             ",
            "                                                                              1           3           3         3         3         3        1                                             ",
            "     hh3                                                                      1           3           3         3         3         3        1                                             ",
            "b    hh3                                                                      1           3           3         3         3         3        1                                             ",
            "D pf hh3  2        E                             s                            1           3           3         3         3         3        1                                             ",
            "444444444444444444444444444444444444             C                            1           3           3         3         3         3        1                                             ",
            "iiiiiiiiiiiii3iiiiiiiiiiiiii3iiiiiii4 E                                       1           3           3         3         3         3        1                                             ",
            "             3              3      ii4                    s         s         1           3           3         3         3         3        1      s                                      ",
            "             3              3       ii4                   C         C         1           3           3         3         3         3        1      C     s                                ",
            "             3              3        ii4                                5     1           3           3         3         3         3        1            C                                ",
            "             3              3         ii4                                     1iiiiiiiiiiiiiiiiiiiiiii3iiiiiiiii3iiiiiiiii3iiiiiiiii3iiiiiiii1                    s                        ",
            "             3              3          ii4                                    1111111111111111111111111111111111111111111111111111111111111111                    C                        ",
            "             3              3           ii42                                                                                                                                               ",
            "             3              3            ii4                                        hh        cc           cc       hh        cc          cc             cc                                ",
            "             3              3             ii4      2      2                   ______________________________________________________________________                                       ",
            "             3              3              ii44444444444444444444444444444444411111111111111111111111111111111111111111111111111111111111111114444444               s       s              ",
            "             3              3               i3iiiiiiii3iiiiiiii3iiiiiii3iiiiii1iiiiiiiiiiiiiiiiiiiiiii3iiiiiiiii3iiiiiiiii3iiiiiiiii3iiiiiiii1iiii3ii4              C       C              ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3 ii4                                    ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3  ii4                                   ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3   ii4         ccc                      ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3    ii444                    s          ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3     i3ii4                   C          ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3      3 ii4                             ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3      3  ii444                    s     ",
            "             3              3                3        3        3       3      1           3           3         3         3         3        1    3      3   i3ii4                   C     ",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiii3                3        3        3       3      1           3           3         3         3         3        1    3      3    3 ii4        cc              ",
            "                           i3                3        3        3       3      1           3           3         3         3         3        1    3      3    3  ii4                       ",
            "                           i3                3        3        3       3      1           3           3         3         3         3        1    3      3    3   ii4            5         ",
            "                           i3                3        3        3       3      1           3           3         3         3         3        1    3      3    3    ii4                  5  ",
            "                           i3                3        3        3       3      1           3           3         3         3         3        1    3      3    3     ii444                  ",
            "                           i3                3        3        3       3      1           3           3         3         3         3        1    3      3    3      i3ii4                 ",
            "                           iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii    3      3    3       3 ii4                ",
            "                                                                                                                                             i    3      3    3       3  ii4      ccc      ",
            "                                                                                                                                             i    3      3    3       3   ii4              ",
            "                                                                                                                                             i    3      3    3       3    ii4             ",
            "                                                                                                                                             i    3      3    3       3     ii4            ",
            "                                                                                                                                             i    3      3    3       3      ii444444UU4444",
            "                                                                                                                                             iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiUUiiii",
            "                                                                                                                                                                                     UU    ",
            "                                                                                                                                    cc           hh      cc         cc     hh        UU    ",
            "                                                                                                                                                _______________________________      UU    ",
            "                                                                                                     s                                       4444444444444444444444444444444444444444444444",
            "                                                                                                     C      s                               4iiiiiiii3iiiiiii3iiiiiii3iiiiiii3iiiiiii3iiiii",
            "                                                                                                            C                         444444ii       3       3       3       3       3     ",
            "                                                                                              5                                      4iiii3ii        3       3       3       3       3     ",
            "                                                                        s       s                                     cc            4ii   3          3       3       3       3       3     ",
            "                                                             s          C       C                                              44444ii    3          3       3       3       3       3     ",
            "                                                             C                                                                4iiii3i     3          3       3       3       3       3     ",
            "                                                                                                                           E 4ii   3      3          3       3       3       3       3     ",
            "                                                                                                  333        333        44444ii    3      3          3       3       3       3       3     ",
            "                                                                                       cc         3i3        313       4iiii3i     3      3          3       3       3       3       3     ",
            "                                                       s                                          333   2    333      4ii   3      3      3          3       3       3       3       3     ",
            "                                               s       C                                      444444444444444444444444ii    3      3      3          3       3       3       3       3     ",
            "                                               C                       333         333       4iiiiii3iiiiiiii3iiiiiii3i     3      3      3          3       3       3       3       3     ",
            "                                                                       313         3i3      4ii     3        3       3      3      3      3                                                ",
            "                                                                       333    E    333     4ii      3        3       3      3      3      3                                                ",
            "                    s        s                                   44444444444444444444444444ii       3        3       3      3      3      3                                                ",
            "                    C        C                  cc              4iiiiii3iiiiiiiii3iiiiiiii3i        3        3       3      3      3      3                                                ",
            "           s                                                   4ii     3         3        3         3        3       3      3      3      3                                                ",
            "           C                      cc                          4ii      3         3        3         3        3       3      3      3      3                                                ",
            "                                                        E    4ii       3         3        3         3        3       3      3      3      3                                                ",
            "                      5                  333       4444444444ii        3         3        3         3        3       3      3      3      3                                                ",
            "                                         3i3      4iiiiiiiii3i         3         3        3         3        3       3      3      3      3                                                ",
            "                                  2      333     4ii        3          3         3        3         3        3       3      3      3      3                                                ",
            "               cc              444444444444444444ii         3          3         3        3         3        3       3      3      3      3                                                ",
            "                              4iiiiiii3iiiiiiiii3i          3          3         3        3         3                                                                                      ",
            "a                            4ii      3         3           3          3         3        3         3                                                                                      ",
            "D                           4ii       3         3           3          3         3        3         3                                                                                      ",
            "4444444444444444444444444444ii        3         3           3          3         3        3         3                                                                                      ",
            "33iiiiii3iiiiiii3iiiiiii3iiii         3         3           3          3         3        3         3                                                                                      ",
            "33      3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "33      3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "33      3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "33      3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "3i      3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "3       3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "3       3       3       3             3         3           3          3         3        3         3                                                                                      ",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        ],
    },
    "IcyStretch" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "icyPlains",
                symbol : 'b',
            },
            'b' : {
                level : "icyTracks",
                symbol : 'a',
            }
        },
        plan : [
            "                                                 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c                                                                                                                                                                                                                                                                                                                                                                                             s             s               ",
            "                                                  c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c                                                                                                                                                                                                                                                                                                                                                                                              C             C               ",
            "            s                                  UFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF                                                                                                                                                                                                                                                                                                                                           s             s      s                  s                                      ",
            "            C                                  U                                                                                                                                                                                                                                                                                                                                                                                                                                            C       s     C      C         s        C                                      ",
            "                    s                          U                                                                                                                                                                                                                                                                                                                                                                                                                                                    C                      C                                              b",
            "                    C                                                                                                                                                                                                                                                                                                                                                                                           >                                                                                                                                                      f  D",
            "                                                                                                 s                                                                                                                                                                                                                                                                                                              >                                                                                                                                        T        pr gggggg",
            "a                                                                                                C                                                                                                                                                                                                                                                                oo                                            >                                                                                                                              T  T r gggggggggggggdddddddd",
            "D____                   ccc          s                                                                       s                                                                                                                                                                                                                                                                                                  >                                                        <     f                                                          r ggggggggddbbbbbbbbbbbbbbbbbbbbb",
            "bbbbb_____                           C                  s               s                                    C                                              s              s                                                f                      O                                                                                          b                                                        b        b      bU   iii                                          <  bbbbbb                                                   Tr ggddbbbbbbbbbb111111111111111111111",
            "iiiibbbbbb____                                          C               C              E   2          c                       2                             C       s      C        s    s                               3333333333333                                                                           A                            b            ooo                                         b    b   b   b  bU             iiii   FF   FFF                        iiiibbbbb __  ____                                 __r ggddbbbbb111111111111111111111111111111",
            "iiiiiiiiibbbbb_____                          1111                                     bbbbbbbb           c                  PPPPPPPP                                C               C    C                              3bbbbbbbbbbbb333    O                                                                   AbA                           b     oo                 i              i i i i i i      b    b   b   b  bU                                  ^^^^^^^^^^^        iiiiiiiibbbbbbgggggg_____T____________T_____T___r ggddbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiibbbbbb____                 E                      2                                   c                                                    5                    5                                        33bbiiiiiii  Vb3bb              iii                                              A        bbb                           b                         i                              b    b   b   b  bU                                                     Viiiiiiiiiiiibbbbbbbggggggggggggggggggggggggggggbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiibbbbb___            PPPP                   PPPPPPP         ccc                                                              ccc                   5                                              333bbiiiiiiiii   bb V                iii     O                                     AbA        b   iiii     b     iiii      b                          iiiiiiiiU                     b    b   b   b  bU                                                       iiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiibbbb_____                                                                     T  T                                                                                                    33333333bbiiiiiiiiiii   V                                                                 bbb        V            b               b                                 iU                     b    b   b   b  bbbU                                                       iiiiiiiiiiiiiiiiiiiii1111111111111111111111111iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiibbbbbb___                                                                  gsssg   T                                                                                      333333333333bbbbbbiiiiiiiiiiiii                                                             f       b    ii                b             sssss                               iU                     b    b   b   b  b bU                                ss                     V  iiiiiiiiiiiiiii11111111111111111111111111111iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbb___                                                     T    gggggdddddgggggg   T                                                                             333bbbbbbbbbbbbbbiiiiiiiiiiiiiiiii                                   sssiiiiiiiiiiiiiiiiiiiiiiiiiii    V                      b               b                                 iU                     b    b   b   b  b bU                                                           iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbb            2                           T           ggggggddddddddddddddddgggggggg       T T                               2           E       2  bbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiV                                   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                           b                                                 iU                     b    b   b   b  b bU                                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbggggggggggggggggggggggggggggggggggddddddddddddddddddddddddddddddggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                     bb       bb       bb       bb                           b                                                 iU                                       bU                                                            Viiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                     bb       bb       bb       bb                           V                                                 iU                                       bU                              ss                              iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                     bb       bb       bb       bb                                                                             iU                                       bU                                                               iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                     bb       bb       bb       bb                                                                             iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiss                                 iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                     bb       bb       bb       bb                                                                                                                                                                                       iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiA                                    bb       bb       bb       bb                                                                                                                                                                                       iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                    bb       bb       bb       bb                                                                                                                                                                                       iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                  bb       bb       bb       bb                                                                                                                                                                                       iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                                             iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                  bb       bb       bb       bb                                                                                                                                                                                                                                                                        ",
        ]
    },
    "icyTracks" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "IcyStretch",
                symbol : 'b',
            },
            'b' : {
                level : "icyTracks_2",
                symbol : 'a',
            }
        },
        plan : [
            "                                                                                                                                                                           ",
            "                                                                                            s                                                 s                            ",
            "                                               s              s                             C                   s               s             C                            ",
            "                                s              C              C             s                                   C               C                                          ",
            "    s                 s         C                                           C                                                                              s               ",
            "    C         s       C                                                                                                                5          s        C               ",
            "              C                                                                                             5           5                         C                        ",
            "                                                                                                                                                                   hh     b",
            "                                                                                                                                                                   hh  f  D",
            "                                                                                                   p                                                         iWWiiiiiiiiiii",
            "                                                                                           __________                                                        iWWibbbbbbbbbb",
            "a                  2   2                hhh                       _______     _________ r ggggggggggg                                                     E     iibbbbbbbbb",
            "D               ______________                           ____  r ggggggggg   gggggggggggddddddddddddd      E                 E           2                       ibbbbbbbbb",
            "ddl __________r ggggggggggggggl    E          22      r gggggggdddddddddddd^^dddddddddddddddddddddddd               E                             iii            ibbbbbbbbb",
            "ddddggggggggggddddddddddddddddddggggggggggggggggggggggdddddddddddddbbbbbbbb  ddddddddddddbbbbbbbbbbbb                                             i i            ibbbbbbbbb",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbb  bEEbbbbbbbbbbbbbbbbbbbWW              2    iii                       iii            iiiiiiiiii",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  EEbbbbbbbbbbbbbbbbbbbWWW    iii            i i             E                                  ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssbbbbbbbbbbbbbbbbbbbbWWWW    i i            iii                  iii                           ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbWWWWWWWWWWWWWWW    iii                                 i i                           ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     bbbbbbbbbWWWWWWWWWWWWWWWWWWWW       E           2             E      iii          2                ",
            "                                                                          bbbbbbbbWWWWWWWWWWWWWWWWWWW                                                                      ",
            "                                                                           bbbbbbbWWWWWWWWWWWWWWWWWWW                                                                      ",
        ],
    },
    "icyTracks_2" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "icyTracks",
                symbol : 'b',
            },
            'b' : {
                level : "icyPuzzles",
                symbol : 'a',
            },
        },
        signs : {
            'a' : {
                message : "Shoot at the level\nof this sign.",
            }
        },
        keys : {
            'a' : {
                level : "ice_way",
                symbol : 'b',
            }
        },
        plan : [
            "                                                                                                                                                                                                                                                                                                                                                   b                                                                               ",
            "                                                                                                                                                                                                                                                                                                                                                   b                                                                               ",
            "                                                                                                                                                                                                                                                                                                                                                   b     a                                                                         ",
            "                                                                                    s               s                         s        s                                                                                                                                                                                                           b     K                                                                        b",
            "                                                                                    C               C                         C        C              s                                                                                                                                                                                            b                                                                              D",
            "                                                                     C                                                                                C                    s                                                                                                                                                                       b                          biiiiiiiiiiiiiiFFFFFFFFFFFiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                                               s             C                                                                                                     C       C        s                                                                                                                                                              bbbbbbbbbbbbbbvvvbbbbbbbbbbb1111111111ii              11111111111111111111111111",
            "              s                                C                                                                                                                                    C             s                                                                                                                                                               U  4  4  4  <11111111ii                  iiiiiiiiiiiiiiiiiiiiiiii",
            "              C       s         s                                                                                                                                                                 C                                                                                                                                                               U  b  b  b  <111111ii       sss                                  ",
            "                      C         C                                                                                                                                                                                                                                                                                                                                 U           <1111ii                                              ",
            "                                                                               k                                                       PPPPP                                                                                                                                                                                                                      U           <11ii                                                ",
            "                                                          E                                           T           T         PPPPP                 PPPPP                                                                           5                                                                                                                               U           <ii                                                  ",
            "                                                      34433333444      k            k            r 444443443334444444444                                                                                                                                                                                                                 3                                                                                         ",
            "                                                 r 3333444343433466666666666666666666666666666633333343433344333433334433                                    T    T                                                          5                                                                                                           3                                                        sss                              ",
            "                          PPPPP           E  r 1111iii11iii1iiiiiiwwiiiwwiiiiiiiiwww66666wii1wwwwwwiiiiiiiiiiiiiiiiiiii114    k            k    k        gggggggdddd                  FFF                                                                                                                                               3a3                                                                                        ",
            "                                   r i1ii11111111iiiiiiii11111iiiwww66666wwwwii666666wwwwwwwwwWWWWWWWWwwwWWwwwwwwwwssssssss666666666sss6666sssss666wwwwwdddddddddddiii       FFFF                                                                                                                                                       3S3           z                                                                            ",
            "a                                 iiii1iiiiiiiii11111111111iiiiWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWW666wwwWWWWWWWwwwWWWWwwwwssss666666666ssss6666ssss666wwwwwwwiiii111dddddii                                                                                                     k   k                                                  f    333           iUU___   __                                                                  ",
            "D_______QQ    k     k             iiiiiiiiiiiiiiiiiiiiiiiiiWWWWWiii6666WWWWWWWWWWWWWWWWWWWwwWW66666wWWwwwwWWWWwwwwwiissssssssssssssss6666sssss6666wwwwwwwiii111111ddddii                                     f                                                            d6666666d                                           r iiiiiiiiiiiii         i iiiiiiiiiiii                                                               ",
            "iiiiibbbbiiiiiiii666666666iiiiiiiiiiiiiiiiddd11111111iiiWWiiiWiiWWW666ww66666WWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWwiiissssssssssssssssss666sssss6wwwwwwwwwwwwii1111111dddiiiii      2          2   QQ     r iiiiiiil       2             2      r iiiiiil      k   k   k  ddd6666666ddd   QQ      8   p   8         8  8      r iiiiiiiiiiiiiii         i iiiiiiiiiiiiivvvvvvvvvvvii    ________sss                                  ",
            "bbbbbbbbbbbbbbbdd666666666dddddddddddddddddddWWWWWWWWWWWWWWWWWWWWW666wWWWWWWWWW666666WWWWWWWWWWWWWWWWWWWWWWWWWiiiiidssssssssssssbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiwwwwwwwiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiWWWWWWiiiiiiiiiiiiiiiiiiiiii1116611111111111111111111i1111111i1i1i111iiiiiiiiiiiiiiiiiiiiiiii         i iiiiiiiiiiiii           iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "bbbbbbbbbbbbbbbdd66666666dddddddddddddddddddddwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWbbiiiiiiwwwbbbbssssddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWwwwwwwwwwwwwwwi           ibbbbbbbbiiWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
            "bbbbbbbbbbbbbbbdd6666666dddddddddddddddddddddddddddbddddddbddddddddddddbddbbbbddddddddddddddddddddddddddddddddddddbbbbbbbbbbbddddddddddddddddddddddddddddddbdbbbbbbbbbbbbWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwi           ibbbbbbbbiiWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
            "bbbbbbbbbbbdddddddd6ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333dddbddbdbbdddbdbdbddddddddddddddddbbbbbbbbdbddddddddbdbbdbWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwi           ibbbbbbbbiiWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
            "bbbbbbbbbbbbbbbdddd66dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd333dddddddddddddddddddddddddddddddddddddbbdbbdbdddddbbbbbbbbbWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWi           ibbbbbbbbiiWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        ],
    },
    "icyPuzzles" : {
        theme : "winter",
        allDogsOnDemand : true,
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "icyTracks_2",
                symbol : 'b',
            },
            'b' : {
                level : "locked_In",
                symbol : 'a',
            },
            'c' : {
                level : "ice_way",
                symbol : 'a',
            },
            'd' : {
                level : "icyTracks_3",
                symbol : 'a',
            },
            'f' : {
                level : "ice_way",
                symbol : 'd',
                locked : true
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    
                }, {
                    
                }, {
                    contains : "meal",
                }, {
                    contains : "meal",
                }, {
                    contains : "Jar"
                }, {

                }, {

                }, {

                }, {
                    contains : "ball",
                }, {
                    
                }],
            },
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "            3      3   UU                                                                              V     VV    ",
            "            3      3   UU        hhh        ccc      hh          ccc          hhh                                  ",
            "d           3      3   UU                                                                     hh                   ",
            "D           3      3   UU         E     2       E         E E          EE          222                             ",
            "bbbbbbbbbbbbbbbbbbbbbb^II^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^11                      ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                          iii                     1s1    hh               ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                           VV                     1ss1                    ",
            "iiiiiiiiiiiiiiiiiiiiib UU                       iiii                                       1sss1                   ",
            "iiiiiiiiiiiiiiiiiiiiib UU         iiii            VV                                       1ssss1    hh            ",
            "bbbbbbbbbbbbbbbbbbbbbb UU          V V                                                     1sssss1                c",
            "                       UU                                        8                         1ssssss1               D",
            "                       UU                                  bbbbbbbbbbbbl                   1sssssbbbbbbbbbbbbbbUUbb",
            "                       UU                               bbbiiiiiiiiiiiiiil                 1ssssssssiiiiiiiiiiiUUii",
            "a         a            UU                            bbb1111iii      V   iil               1ssssssssssssssssssiUUis",
            "D p f     ]            UU    8          8    A    bbb11111111 V            iil           r iisssssssssssssssssiUUis",
            "bbbbbiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111iii              V iil       r iisssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb11111111111111111111111111111111111111i                 iil   r iisssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb1111111111111111111111ii111111111iiii V                  iiivviiissssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb1111111iiii11111111111iii1111111111 V                    i      issssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb11111111iiii1111111111iii111111111                  bbbbbb      bbbbbbbssssssssssssssssiUUis",
            "1111biiiiiiiiiiiiiiiiib111111111111iii11111111111111111 V                  b    V      V    bbvvvvvvvvvvvvvvvvv  vv",
            "111111111111111111111111111111111111111111111111111111                     b                 I                     ",
            "1111111111111111111111111111111111111111111111111111 V                     b                 I                    f",
            "1111111111111111111111111111111111111111111111111111                       b       bb        I                    D",
            "1111111111111111111111111111111111111111111111111111                       b f QQ  DD  QQ   bb^^^^^^^^^^^^^^^^^^^^^",
            "1111111111111111111111b111111111111111111111111111111                      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "                                                                            bbbbbbbbbbbbbbbbb                      ",
            "                                                                             bb           bb                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
            "                                                                             b             b                       ",
        ],
    },
    "icyTracks_3" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "icyPuzzles",
                symbol : 'd',
            },
            'b' : {
                level : "icyPuzzles2",
                symbol : 'a',
            }
        },
        keys : {
            'a' : {
                level : "icyPuzzles",
                symbol : 'f',
            }
        },
        signs : {
            'a' : {
                message : "Be careful!"
            }
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                                                                               ",
            "                                                                               ",
            "b          ccc    ccc   ccc       ccc     ccc      ccc     ccc     a          a",
            "D  f  QQ                                                           S          D",
            "bbbbbbbbbbbbbbbbb   m  bb   bb   m   bb    m  bb   m  bb   m   bbbbbbbbbbbbbbbb",
            "IIIIIIIIIII                                                      iiiiiiiiiiiiii",
            "IIIIIIIII                                                           iiiiiiiiiii",
            "IIIIIIII                                                              iiiiiiiii",
            "                                                                         iiiiii",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                          a                                                    ",
            "                          K                                                    ",
            "                        FFFFF                                                  ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
        ],
    },
    "icyPuzzles2" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "icyTracks_3",
                symbol : 'b',
            },
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "energy",
                }, {
                    contains : "energy",
                }, {
                    contains : "energy",
                }, {
                    contains : "energy",
                }, {
                    contains : "energy",
                }, {
                    contains : "energy",
                }, {

                }, {

                }, {

                }, {
                    
                }],
            }
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiii VV iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiii ii         iV     V  i       ii    iiiiiiii",
            "iiV   VV  ii        V         i       V     Vi    Vi",
            "ii        VV                  V              V     i",
            "ii                                                 i",
            "ii                7          hh                     ",
            "ii                                   7              ",
            "ii             FFFF                        FFF      ",
            "ii                         FFF                      ",
            "ii          7                                       ",
            "ii     FFF            7               FFFF          ",
            "ii                   FFF                            ",
            "ii hh        a                                hh   a",
            "ii           ]                                     D",
            "iii   iiiiiiiiiiiiiii   i  iiiiiiiii     iiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiii iiii11111iiiiiiiii11111iiiiii",
            "iiii1111111111iiiiiiiiii1111iiii11111111iiiii111iiii",
            "iiiiiiiii11111111iii11ii1iii1111iii11111111111111111"
        ],
    },
    "ice_way" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "icyPuzzles",
                symbol : 'c',
            },
            'b' : {
                level : "entry",
                symbol : 'a',
                locked : true,
            }, 
            'c' : {
                level : "entry",
                symbol : 'c'
            },
            'd' : {
                level : "icyPuzzles",
                symbol : 'f',
            }
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                                                     ",
            "                                                     ",
            "                           5                         ",
            "                                        5            ",
            "            5                                        ",
            "                                                    b",
            "                                                    D",
            "                  r bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "           r 1111111WWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwww",
            "         r 111wwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwww",
            "a      r 111wwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwWWWWw",
            "D    r 111wwwwwWWWWWWWWWWWWWWWwWWWWWWWWWWWWwwwwWWWWww",
            "bbbb111111111WW11111111111111111111111111111111111wW1",
            "bbbbbbbbbbbb1WWdd111111111111111111111111111bbbbwwWWw",
            "bbbbbbbbbbbbbWWdbbb11111111111bbbbbbbbbbbbbbbbbbwwWWW",
            "bbbbbbbbbbbb1WW+   cc  i111111bbbbbbbbbbbbbbbbbbwwWWw",
            "bbbbbbbbbbbb1WW+   cc  ib11111bbbbbbbbbbbbbbbbbbwWWWc",
            "bbbbbbbbbbbb111111111dUbb11111bbbbbbbbbbbbbbbbbbwWWWD",
            "bbbbbbbbbbbb111111111dUbb11111bbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbb111bbb111dUbb111dddbbbbbbbbbbbbbbbbbbbbbb",
            "vvvvvvvvvvvvvvvvvvvvvdUbb11111bbbbbbbbbbbbbbbbbbbbbbb",
            "d    hh    cc         Ubb1111ddbbbbbbbbbbbbbbbbbbbbbb",
            "D    hh    cc         Ubb11111bbbbbbbbbbbbbbbbbbbbbbb",
            "^^^^^^^^^^^^^^^^^^^^^ddbb11111bbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbb111111111ddbb11111bbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "entry" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "ice_way",
                symbol : 'b'
            },
            'b' : {
                level : "fold",
                symbol : 'a',
            }, 
            'c' : {
                level : "ice_way",
                symbol : 'c'
            }
        },
        itemChests : {
            'c' : {
                items : [{

                }, {

                }, {

                }, {

                }, {

                }, {

                }, {

                }, {

                }, {

                }, {

                }]
            },
            'z' : {
                items : [{
                    contains : "goldbar",
                    amount : 3,
                }, {
                    contains : "bubbleShield",
                }, {
                    
                }, {
                    contains : "meal"
                }, {

                }, {

                }, {
                    contains : "fairy"
                }, {

                }, {

                }, {

                }]
            },
        },
        plan : [
            "                                                                                         ",
            "                                                                                         ",
            "                                                                                         ",
            "                                                                                         ",
            "                                                                                         ",
            "                                                                                         ",
            "                                                   8                                     ", 
            "                                              bPPPPPPPPPb                                ",
            "                                            PPI         IPP                              ",
            "                                             PI         IP                 i             ",
            "                                             PI    c    IP                 i_            ",
            "               cccc                          PI p  ]    IP                 ii_           ",
            "                 2                          bbbbbbbbbbbbbbb                iii___        ",
            "              PPPPPP                           PWWWWWWWP                    iiiii_       ",
            "      hhh                                      PWWWWWWWP                     iiiii_      ",
            "a     hhh                                      PWWWWWWWP                    iiiiiii_    b",
            "D  f  hhh                r iiiiiiiiiiiiissiiiiiPWWWWWWWP                  iiiiiiiiii  f D",
            "iiiiiiiiiiiiiiiiiiiiiiiiiii11111111111111111111iPPPPPPPiiiissiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "wwwwwwwwwwwwwWWWWWWww1111www1111111111111111111111111111111111111111111111111111111111111",        
            "wwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWiiii1111111111111111111111111111111111111111111111",
            "wwwwwwwwwWWWwwwwwWWWWWWWWWWWWWWWWWWWWWWiiiii1111Wwww1111111111111111111111111111111111111",
            "wwwwwwwwWWWWww111111111111111111111WWWWWWWWWWwwwW1111111111111111111111111111111111111111",
            "1111111WWWw111111111111111111111111WWW1111111111WWW11111111111111111111111111111111111111",
            "1111wwwwwWW1111111111111111111111111     111111111111111111111111111111111111111111111111",
            "111c wwwwWW1111111111111111111111111         z       111111111111111111111111111111111111",
            "111D wwwwWW11111111111111111111111111111     ]     ' 111111111111111111111111111111111111",
            "1111bbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111"

        ]
    },
    "locked_In" : {
        theme : "winter",
        doors : {
            'a' : {
                level : "icyPuzzles",
                symbol : 'b',
            },
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "coin",
                    props : {
                        coinAmt : 50,
                    },
                    total : true,
                }, {
                    contains : "iceSplicer",
                    total : true,
                    diameter : 35,
                    offX : 180,
                    offY : -120,
                }],
                save : true,
                hidden : true,
            },
        },
        plan : [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiii          iiiiiiiiiiiiiiiiiii",
            "iiiiiiii    V                   iiiiiiiiiii",
            "iiii                            V iiiiiiiii",
            "iii                a               iiiiiiii",
            "iii                [                 iiiiii",
            "iii              PPPPP                 iiii",
            "iii                                    iiii",
            "iii       PPP            PPP           aiii",
            "iii2                                   Diii",
            "iiii22           22           22  2iiiiiiii",
            "iiiiii       2  iii      22  iii  iiiiiiiii",
            "iiiiiii 222  iiiiiiii2 2iiiiiiiiiiiiiiiiiii",
            "iii111iiiiiii1111111iiiiii11111111111111111",
            "1111111111111111111111111111111111111111111",
            "1111111111111111111111111111111111111111111",
            "11111111bbbb1111111111111111111111111bbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "fold" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        specialOneWays : true,
        doors : {
            'a' : {
                level : "entry",
                symbol : 'b'
            },
            'b' : {
                level : "fold2",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                           ",
            "                                                                              s            ",
            "      s                                      s                                C            ",
            "      C                          s           C             s         s                     ",
            "                        s        C                         C         C                     ",
            "                        C                                                                  ",
            "                                                                                           ",
            "                                                   7                                       ",
            "                               7                                           E               ",
            "           E                                               E           PPPPP               ",
            "           PPPPP                                        PPPP                               ",
            "                                                                                           ",
            "a                                                                                         b",
            "D  p  QQ ____ _8______T   8 ____  TT____ ___8______  _QQ__________          ____   T   f  D",
            "^^9^^^^^^^^^^^^9^^^^^^^^^^^^9^^^^^^^^^^^^9^^^^^^^^^^^9^^^^^^^^^^^^9^^^^^^^^^^^9^^^^^^^^^^^9",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwIIIIwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwIIIwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWwwwwwwww",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
        ]
    },
    "fold2" : {
        theme : "winter",
        addArraysToSave : ["cloudMine"],
        specialOneWays : true,
        doors : {
            'a' : {
                level : "fold",
                symbol : 'b'
            },
            'b' : {
                level : "fold2",
                symbol : 'c'
            },
            'c' : {
                level : "fold2",
                symbol : 'b'
            },
            'd' : {
                level : "fold2",
                symbol : 'e'
            },
            'e' : {
                level : "fold2",
                symbol : 'd'
            },
            '*' : {
                level : "fold2",
                symbol : '$'
            },
            '$' : {
                level : "fold2",
                symbol : '*'
            },
            'x' : {
                level : "fold2",
                symbol : 'y'
            },
            'y' : {
                level : "fold2",
                symbol : 'x'
            },
            'z' : {
                level : "fold2",
                symbol : 'u'
            },
            'u' : {
                level : "fold2",
                symbol : 'z'
            },
            '1' : {
                level : "fold2",
                symbol : '2'
            },
            '2' : {
                level : "fold2",
                symbol : '1'
            },
            '3' : {
                level : "fold2",
                symbol : '4'
            },
            '4' : {
                level : "fold2",
                symbol : '3',
                locked : true
            },
            '?' : {
                level : "excape",
                symbol : 'a',
            }
        },
        signs : {
            'a' : {
                message : "Drop down!"
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "meal"
                }, {
                    contains : "fairy"
                }, {

                }, {

                }]
            },
            'b' : {
                items : [{
                    contains : "goldbar"
                }, {

                }, {

                }, {
                    
                }]
            },
        },
        plan : [
            "9~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~9",
            "~               4      z                                                                    I    7                          I                          ~",
            "~               D      D                                                                    I               7               I                          ~",
            "~           U9^^^^^^^^^^^^9U                                                                I                               I                          ~",
            "~           U              U                                                               9~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~9UU                       ~",
            "~           U              U                             hh         cc         hh      cc  ~                   i*            ~UU                       ~",
            "~      8    U              U   8                            kk k          k      k         ~                   i*            ~UU                       ~",
            "9~~~~~~~~~~~~9~~~~~vv~~~~~9~~~~~~~~~~~~9~~~~~~~~~~~~9wwwiiiwwwwwwwwiiiiwwwwwwwwiiiwwwwwiiiw~   $          b   xi*           1~UU                       ~",
            "~                                                   ~wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww~   D          D   Di*           D~UU                       ~",
            "~                                                   ~wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww~iiiiiiiiFFFFi^^^^^~**~~~~~~~~~~~~9~~~~~~~~~~~~9~~~~~~~~~~UU9",
            "~a   hhh                            d               ~wwwwwww66666wwwwwwwwwwwwwwwwwwwwwwwwww        i    i     ~*~            ~                       UU~",
            "~D   hhh                            D               ~wwwwwwwwwwww66666wwwwwwwwwwwwwwwwwwwww  ccccc i    i     ~*~            ~                       UU~",
            "9~~~~~~~~~~~~9^^^^^^^^^^^^9~~~~~~~~~~~~9FFFFFFFFFFFF9~~~~~~9~~~9~~~~~~~~~~~~~~~~~~~~~~~~~~~9 ccccc i    i     ~*~            ~                       UU~",
            "~                         ~      7     ~                   ~   ~                           ~ ccccc iFFFFi     ~*~            9^^^^UU9~~~~~9~~~~~~~~~~~~9",
            "~                         ~            ~                   ~ae ~                           ~ ccccc i    i      *             ~    UU~   U 4            ~",
            "~c                        ~           b~                   ~SD ~                           ~ ccccc i    i     ~*~            ~    UU~   U b            ~",
            "~D                     sss~           ]~                   9~~~9                           ~ ccccc iFFFFi     ~*~            ~    UU~   U  ?           ~",
            "9~~~~~~~UU~~~9~~~~~~~~~~~~9~~~~~UU~~~~~9                                                   ~ ccccc i    i     ~~~           u~    UU~   U  D           ~",
            "~      7UU   ~                  UU     ~                                                   ~ ccccc i    i                   D~    UU~   U     3     U  ~",
            "~  7    UU   ~                  UU     ~                                                   ~ ccccc iFFFFiiiiiiiiiiiiiiiiiiiiii    UU~   U    33     U  ~",
            "~a      UU   ~                  UU    y~                                                  *~ ccccc >                         I    UU~2  U   334     U 3~",
            "~] p    UU   ~                  UU    D~        8                        8                D~       >                         I    UU~D     4434     U D~",
            "9~~~~~~~~~~~~9~~~~~~~~~~~~9~~~~~~~~~~~~9^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^9^^^^^^^iFFFFiiiiiiiiiiiiiiiiiiiiiiiii^^^9~~~~~~~~~~~~~~~~~~9",
        ]
    },
     "excape" : {
        theme : "winter",
        specialOneWays : true,
        debugMenuWhite : false,
        removeArraysToSave : ["ice"],
        background : "high",
        doors : {
            'a' : {
                level : "fold2",
                symbol : '?'
            },
            'b' : {
                level : "mountain",
                symbol : 'a'
            }
        },
        plan : [
            "bbbiibbbIIIIIIIIbibibbibIIIIIIIiibbibbbibibibibbbbbbbbbIIIbbbbIIIIIIIIIIIIIIIIIIIIIIIII",
            "    V         bbb         V                                  s                  VV     ",
            "                                                             C                         ",
            "                      7                        s                                       ",
            "                                    s          C                                      b",
            "                                    C                                                 D",
            "                                                   7                           11111111",
            "                                                                           344333444444",
            "                                                     cccc                34444433333444",
            "                                                                     r iiiiiiiiiiiiiiii",                                       
            "        cccc                     cccc                          T   iiiiiiiiiiiiiiiiiiii",                                       
            "                cccc                                         r iiiiiiiiiiiiiiiiiiiiiiii",                                        
            " a                                                      T r iiiiiiiiiiiiiiiiiiiiiiiiiii",                                       
            " D f p      T  T        QQ                           r iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",                                        
            "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^11111111111111111111111111111111111111",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        ]
    },
    "mountain" : {
        theme : "winter",
        background : "high",
        specialOneWays : true,
        debugMenuWhite : false,
        removeArraysToSave : ["ice"],
        doors : {
            'a' : {
                level : "excape",
                symbol : 'b'
            },
            'b' : {
                level : "mountain2",
                symbol : 'a'
            }
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiIIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                         iIIi          V IIiiI   V           III              iV                                   ",
            "                           V               II                 Vi              I                                    ",
            "                                                               V              I                                    ",
            "                                                                              V                                    ",
            "                                                       s             s                                             ",
            "                                                       C             C                                             ",
            "b     FFF                                                                                                s         ",
            "D             T                                                                                   s      C         ",
            "iiiU        Uiil                                                                                  C       `        ",
            "WWWWWWWWWWWWiiiiiil p                   2              c      2                                                    ",
            "WWWWWWWWWiiiiiiiiiiiil  T             PPPPPPP                PPPP                                                  ",
            "WWWWWWWWWIIIIIIIIIIIIbbbbbbl                       c                cc                                             ",
            "WWWWWWWW343444434443344IIIIbbbl                                                                                    ",
            "WWWWWWWWWWW4443343443434IIIIIIbbl       E            2                                                             ",
            "11111113434444433434IIIIIIIIIIIIbbbbbbIIIIIIIIIIIIIIIIIIIIIIIIIIIbbIA                                              ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb   bbbbbbbbbbbbbbbbbbA      cc                                    ",
            "bbbbbbbbbbbiiiibiiiiiiibbbbbbbbbbbbbbbb                  VV          bbIIA                                         ",
            "         V                V                                            V IIIIIIIIIIU                               ",
            "                                                                                   U                     k    k    ",
            "                                                                                   U                               ",
            "a                                                                                  U     ssss   ssss    sssssssssss",
            "D                                                             QQ                   U     iiiisssIIIIssssiiiiIIIIIII",
            "1111111i11111111111111111111111111111111111 FFFF FF  F1111111111111111111111111111111111111111111111111111111111111",
            "iiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiii                iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiii         iiiiii                               iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiii                  iiii                                     iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "ii                     ii                                         iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "ii                     ii                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        ]
    },
    "mountain2" : {
        theme : "winter",
        background : "high",
        specialOneWays : true,
        debugMenuWhite : false,
        doors : {
            'a' : {
                level : "mountain",
                symbol : 'b'
            },
            'b' : {
                level: "IceDragon",
                symbol : 'a',
                style : "boss",
                locked : true
            }
        },
        signs : {
            'a' : {
                message : "Time for a swim"
            }
        },
        keys : {
            'a' : { 
                level : "mountain2",
                symbol : 'b',
                style : "boss"
            }
        },
        plan : [
            "bbbbbiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiii",
            "iiiiii IIIIiiiiIIIIIIIIiiiiiiiiiiiiiiiiiiiIIIIIiiiiiiiiiiiiiiiiiiiibbiiiiiiiiL  V        V ",
            "           III           V           V       V   IIIIIIIIIIIIIIiiiiiiiiiiL                 ",
            "                                                            IIIiiiiiiiii                   ",
            "                                                        a    IiiiiiiiL                     ",
            "                                                  b  b  K b                                ",
            "                                                 bbbbbbbbbb                                ",
            "  bb                 hh           hh             bbbbbbbbbb       a        h               ",
            "T DDT  QQ f                                      bbbbbbbbbb       S  T  f  h               ",
            "bgggggbbbbb   FFbbb  FF F   bbbF  FF   FFFFbbbWWWbbbbbbbbbbWWWWbbbbbbbbbbb h  T___ _      a",
            " bbbbbbb                                 bbbbWWWWWWWWWWWWWWWWWWWWWWIIIIIIIIIIIiiiiiil__p__D",
            "                                         bbWWWWWWWWWWWWWWWWWWWWWWWWIIIIIIIIIIIiiiiiiiiiiiii",
            "                                       bbbWWWWWWWWWWWWWWWWWWWWWWWIIIIIIIIIIIIIiiiiiiiiiiiii",
            "                                     bbbWWWWWWWWWWWWWWWWWWWWWWWIIIIIIIIIIIIIbbiiiiiiiiiiiii",
            "                                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbUUbbbbiiiiiiiiiiiiii",
            "                                    bbWWWWWWWWWWWWWWWWWWWWWWWWWbbWWWWbbUU' bbiiiiiiiiiiiiii",
            "                                   WWWWIIbbbbbbbbbbbbbbbbbbbbbWWWWWWWWbUU  bbiiiiiiiiiiiiii",
            "                                   WbbbIIIIIIIIIIIbbbbbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiii",
            "                                   Wibbbbbbbbbbbbbbbbbbbbbbbiiiiibbbbbbbbbbbbssssssssssssss",
            "                                   Wibbbbbbbbbbbbbiiiiiiiiiibbbbbbbbbbbbbbbbsssssssssssssss",
            "                                   WIIbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssssssssssssssss",
        ]
    },
    "IceDragon" : {
        theme : "winter",
        background : "high",
        debugMenuWhite : false,
        bosses : {
            'a' : {
                name : "iceDragon"
            }
        },
        doors: {
            'a' : {
                level: "mountain2",
                symbol: 'b',
            },
            'b' : {
                level : "outerMountain",
                symbol : 'a',
                hidden : true,
                locked : true,
                magic : true
            },
            'd' : {
                level : "IceDragon",
                symbol : 'd',
                locked : true,
                hidden : true
            }
        },
        plan : [
            "               VVV                   VV           IVVVVVVI            VVV                                        IVVVVVVVVVVI              ",
            "h                                                 I      I                                                       IIIIIIIIIIII              ",
            "h                                                 IIIIIIII                                                                                 ",
            "                                                                                                                                           ",
            " P                                                                                                                                         ",
            "P                                 p                                                                                                       7",
            "                                                                        5                                                                  ",
            "                                                                                                                                           ",
            "                                            7      4                  PPP                                                                  ",
            "                   334                           4433                                              5                 44                    ",
            "                   344       33                 33433                          33                          33       333                    ",
            "                    IIIIIIIIIIIIWWIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIWWWWWiIIIIIIIIIIIIIIIIIIIIII                 ",
            "                   bWWWWWWWWWWWWWWWWWWWw    iiiiiiiiiiiiiibbbbbbbbbbbbWWWWWWWWWWWWWWWWWwwwwwwiWWWWWiwwwwwwiiiiwwwwwwwwbII                  ",
            "                   bWWWWWWWWWWWWWWWWWWWw                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbiWWWWwiwwwwwwwwwiiiiiibbbbI                   ",
            "                   bWWWWWWWWWWWWWwwW^^^w                        a                         hhhibWWWWiiiiiiiiiiiiiiiiiibbb                   ",
            "                  bbbbbbbbbbbbbbbbbbh  w                        B                              bWW iiiiiiiiiiiiiiiiiiib                    ",
            "  7              b                  hh w                            bbbbbWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwbbbbbbbbbbbbb                    ",
            "                 bWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbWWWWWWWWWWWWWWWWWWWWWWWWWWWb            <                    ",
            "                  bbbiiibbbiibbbbbbbbbWbbbbbbbbWiiiVVViiiiVVViibbbbbbbbbbbbbbiiiiibbbbbbbbbbWWWWWWWWbbbbbbbbbbbbbbbbbbb                    ",
            "                     VVVVbbiiiiiiiiiiFWFiiiiiiiiiIIIIIIIIIIIIIiiiiiiiiiiiiVV     iiiiiiiiiiiiiWWWbbbbbbbWiiiiiiiibbb                       ",
            "                              IVVVI   W      VVVV               IVVI             IVVVI        FwFFFFF VVV    VVV                           ",
            "                       5      IIIII   W                         IIII             IIIII         w                                           ",
            "                                      W                                                        w                     5                     ",
            "                                      W                                                        w                                           ",
            "                                      W                                                        w                                           ",
            "                                      W                                                        w                                           ",
            "                                      W                                                        w                                           ",
            "                     PPPP             W      PPPP                                              w      PP                                   ",
            "                                      W                            aa        PPP         b     w                PPP              PPP       ",
            "                                      W                            DD                    D     w                                           ",
            "      1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111      ",
            "      iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii      ",
            "      iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii      ",
            "      iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii      " 
        ],
    },
    "outerMountain" : {
        theme : "winter",
        background : "high",
        debugMenuWhite : false,
        specialOneWays : true,
        doors : {
            'a' : {
                level : "IceDragon",
                symbol : 'b',
                magic : true
            },
            'b' : {
                level : "cave",
                symbol : 'a'
            }
        },
        special : {
            'a' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "winter"
                    },
                }
            },
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "hookShot",
                    total : true,
                    diameter : 24,
                    offX : 80,
                    offY : -200,
                }],
                save : true,
            },
        },
        plan : [
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                                  C                                                                            ",
            "                                                                                                                               ",
            "                                                                                                                               ",
            "                                   C                                                                                           ",
            " C                                                                                                                             ",
            "             C                                           C              C`                                                     ",
            "                      C                              4                                                                         ",
            "                                                    33                                                                         ",
            "                                                   3444                                                                        ",
            "                                                  333bb                                                                        ",
            "                   a                  II          4bbb33                                                                       ",
            "                   $                  iI          3bbbII4                                  .                                   ",
            "             a   344   a             IiiII       44bb3443  2                                    .    .                         ",
            "             D  34443p [      f   QQ IIIIII     334bb33IIIIIII                     T                                           ",
            "         4b433II43IIII4343  3434I344III3444i    iI334II44II44444         T   34    ii                                          ",
            "      44bbbbIIII43444IIII3  34IIII4444bbbbbb    4343434343333333434   111334333411434                       .     .            ",
            "     bbbbbb11111III3411111AA34443433bbWWWWWWWW1344444444344343333333wwwwwwwwww3333344b34  f                                    ",
            "    4bbbbbb111111111111111111344444WWWWWWWWWWW111111111111111111111111ww11111111111111111111                                   ",
            "    34bbbbb411111111111111111111wwwWWWWWWbbb11111111111111111111111www1111111111111111111                                      ",
            "    34bbbbb1111111111111111111wwwwwwwwbbb1111111111111111111111111111111111111111111111                                        ",
            "       bbbbbbbbb111111bb111ddwwwwwwwddd1b1b11bdb1bbbbbbbbbddddddbbbbbbbbbbbb111111111bb                iiiiiii  .              ",
            "       ddbbbbbbbdddddbbbbbbwwwwwwbbbbddddddddddddbd   dddddddddbbdddddddbbbbbbbbbbbbbbbb `              iii                    ",
            "       ddddddd bbbbbbbddwwwwwwddd b dddddbbbbbddbd   'dddddbbbddddddddddddddddddddddd bbbb                                   . ",
            "         bdbdbdbdbddbdwwwwwwbdbdbddddddbbbbbbbbbbwwwbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbb                                     ",
            "           bbbdddddddbbwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww   bb                       .      .    b",
            "         bbbbbbbbbbbbbbbbbwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww  bb                          .        ",
            "        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwww   b`                                 b",
            "         bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwww  bbb                                 D",
            "          bbbbbbbb  bbbb  bbbbbbbb b bbbbbbbb b bbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbwww bbbb                                bb",
            "                bbbbb   bb  bbbb bb bb bb  bb   bbb  bbbbbbb   b   bbbbb bbb   bbbbbbwwwbbbbb                                 b",
            "              bbb    bbbbb     bb bb       bb  bbbb bbb     b         bbb     bbbbbbbwwwbbbbb  bbbbbb                         b",
            "              bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbwwwwwwwwwwwbbbbbbbU                       b",
            "                       bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwbbbwwwwwwwwdbbbbbbU                       b",
            "                       bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwbbbbbbdddbbbbbb   U                       b",
            "                               bbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbb    bbbwbbbbbbdddbbbbbbbbbU                       b",
            "                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwbbbbbddddbbbbbbbbbU                       b",
            "                              vvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb            wwwwwwwwbbbbbbdddbbbbbbbbbbb                      b",
            "                               bbbb                    bbbbbbbb             wwwbbbbbbddbbbbbbbbbbbbbb b                       b",
            "                                 bbbbb                    bbb               wbbb bbbbbbbbbbbbbbbb   bbbbbbbbbb  bbbbbbbbbbb bbb",
            "                               bbbb                       bbbbbb            w   bbbbbbbbbbbbb  bbbbbbbbbb   bbbbbbbbbbbbb    bb",
            "                               bb                         bbbbbb            w  bbbbbbbbbbbbbbbb bbbbbbbbbb bbbbbbbbbbbbbbbbbbbb",
            "                             bbb                         bbbbb             ww  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    bbbb",
            "                            bbbb                          bbb              w  bbbbbbbbbb    bbb    bbbbbbbbbbbbbbb   bbbb   bbb",
            "                             bbb                         bbbbb            wwbbbbbbbbb bbbbbbbb          bbbbb   b       bbbbbb ",
            "                            bbb                          bbbbbb           ww   bbbbbbbbbbbb            bbb     bb   bbbbb      ",
            "                           bbb                         bbbbbb             ww   bbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbb         ",
            "                          bbb                         bbbbbb              ww   bbbbbbbbb                                       ",
        ]
    },
    "cave" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "outerMountain",
                symbol : 'b'
            },
            'b' : {
                level : "cave2",
                symbol : 'a'
            }
        },
        signs : {
            'a' : {
                message : "The only way to\ngo is down."
            },
            'b' : {
                message : "Its a really\nlong way up!"
            }
        },
        plan : [            
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "                                                                                                                                   ",
            "a      ccc         ccc     hh      a                                                                                               ",
            "D f                             p  S                                                                                               ",
            "bbbbbbbbbbbbbbbwwwwbbbbbbbbbbbbbbbbbbbbbb                                                                                          ",
            "~~~~__~~~~~~~_~~__~~~~~~__~___~___~___~bb                                                                                          ",
            "~~~~~~__~~~__~~~___~~_~~~~~~~~~~~___~bb                                                                                            ",
            "__~~~__~~__~__~~~__~~~~_~~~~_~~~~_~bb                                                                                              ",
            "_____________~~~____~~~~_____~~~~bb                                                                                                ",
            "__~~__~~~____~~____~~___~~_bbbbbb                                                                                                  ",
            "~~~~___~~~~~ ____~~~~__~bbb                                                                                                        ",
            "~__~~~___~~_~~~_~~~~~~bb                                                                                                           ",
            "_~__~~~__~~__~~~~__bb                                                                                                              ",
            "__~~~_~__~~~__~~~bb                                                                                                                ",
            "~~~~~~~___~~~_bb                                                                                                                   ",
            "~~~____~~~___~~bb                                                                                                                  ",
            "~~~__~~~~__~~___bb                                                                                                                 ",
            "__________~~____ _bb                                                                                                               ",
            "_____~~~_______~__~~b                                                                                                              ",
            "__~~~____~~~_ ~~~~~~~_b                                                                                                            ",
            "~~~~~~~~~~~~~~~~~~____b                                                                                                            ",
            "__________~~~~________b                                                                                                            ",
            "~~~~___~~~~~ ____~~~~~~bb                                                                                                          ",
            "~~~~~~~~~~~~~~~~~~~~~~~b                                                                                                           ",
            " _____~~~~~~~~~~____~~bb                                                                                                           ",
            "_____~__~~_~~~~~~~~bbb                                                                                                             ",
            " ~_~_~_~____~~~___b                                                                                                                ",
            "~_~~~___~~~___~~~__~~_bb                                                                                                           ",
            "___~~~~_______~~~~~~~~~~b  '                                                                                                       ",
            "~_~_____~~~~~~~~~~~~~~~~~b                                                                                                         ",
            "__~~~~__________~~~~~_~~_~~_b                                                                                                      ",
            "~~~___~~_~~__~~__~~__~~__~~~~b                                                                                                     ",
            "~_~~_~~_~~~_~~~_~~~_~~~~_~~~~~~b                                                                                                   ",
            "~~____~~~_~__~~_~~__~~~_~~_~~~~~b                                                                                                  ",
            "~_~_____~~~_~~~__~~____~__~~_~~~~_~b                                                                                               ",
            "~~~__~~_~~___~~__~~____~~___~~__~~~~b                                                                                              ",
            "_~~~~_~_~~_~~~~_~~~~_~~___~~_~~_~_~~~~b                                                                                            ",
            "~_______~_~~~~_~~_~_~~_~_~_~___~~_~__b                                                                                             ",
            "~_~_~~~~~~~~~_~~_~~~__~_~~~__~____~~b                                                                                              ",
            "~_~~~~__~__~~_~~~~~~_~~~_~~~~_~~___b                                                                                               ",
            "~_~~~__~~_~__~____~~__~___~~__~~~~~_b                                                                                              ",
            "~~_~~~_~~_~~_~~~~~~~~__~~~~~~~_~~_~_                                                                                               ",
            "~_~~~~_~~~~_~_~~_~_~~~__~~_~~~_~__b                                                                                                ",
            "~~~~~_~~_~~~___~~~~__~~~_~___~~~~~_b                                                                                               ",
            "__~___~~_~_~_~~~~__~~~~_~~~~~_~__~__b                                                                                              ",
            "_~~~_~~~~~___~__~~~~~~~~~___~~~~~~_b                                                                                               ",
            "_~~__~~~~~~~~_~~_~~~~~_~_~__~~~~~~~_b                                                                                              ",
            "~~__~___~~_~_~~~~_~___~_~~~~~~~~~~_~~b                                                                                             ",
            "~_~_~___~_~__~____~__~~~~~~__~~___~__                                                                                              ",
            "~~~~_~~_~~~~~~_~_~__~~___~~__~_____b                                                                                               ",
            "~~~_~~~~~~_~~~~~~~_~~~~_____~~~~~_b                                                                                                ",
            "_~____~_~~~_~__~~~~~~~_~~__~~_~_~b                                                                                                 ",
            "_~~~__~~~~~~_~_~_~~_~~~~__~__~_~b                                                                                                  ",
            "_~~_~~~~~~~~~~~~~~___~~___~~~~_b                                                                                                   ",
            "~~_~_~_~~_~~~___~_~_~_~_~~~__~b                                                                                                    ",
            "~~__~~~__~~~_~~~_~_~~___~~___b                                                                                                     ",
            "~__~_~__~~~~~~~___~~~~_~____~_b                                                                                                    ",
            "__~_~~~___~~_____~____~_____~_~b                                                                                                   ",
            "~~~_~__~~~___~_~~__~_~_~~_~~~_~~b                                                                                                  ",
            "~~~_~~_~~_~~_~____~~_~_~~~~___~b                                                                                                   ",
            "~~~~~~~~~~~_~_~~__~_~~__~~~~~~b                                                                                                    ",
            "~_~_~_~~~__~~~~~_~~__~~~~__~~b                                                                                                     ",
            "___~_~~~~___~~~~_~~_~~~__~~~~_b                                                                                                    ",
            "~_~~__~~~~~~___~_~~__~_~~__~~b                                                                                                     ",
            "~~__~~~~~_~~_~~_~___~_~~_~_~__b                                                                                                    ",
            "~~__~_~~____~~__~_~~~~__~~~~___b                                                                                                   ",
            "~_~_~_~~__~~~~_~_~_~_~~__~__~~~~b                                                                                                  ",
            "_~_~_~_~_~~~~_~~~~~___~__~_~~~_b                                                                                                   ",
            "~_~_~~~~~_~_~~_~~~~___~~~~~__~~_b                                                                                                  ",
            "~~_~~_~~~~__~~___~~~~____~~~_~~b                                                                                                   ",
            "~__~_~~_~~__~_~~_~~~_~_______~b                                                                                                    ",
            "~~~~~_~~~_~~_~~~_~_~~_____~_~~_b                                                                                                   ",
            "~~_~__~_______~~~~__~~~_~_~~~__~b                                                                                                  ",
            "~___~~_~~_~~~~_~~~_~~_~~~___~~_b                                                                                                   ",
            "~~__~~~~~_~_~_~~___~~~_~~_~~~_b                                                                                                    ",
            "~~__~__~~~~~_~~~~~~~~~~~_~~_~b                                                                                                     ",
            "~~~~__~~~~~_~~~__~___~~_~_____~                                                                                                    ",
            "~~_~~~_~_~~_~__~~~~~~~~~~~~__b                                                                                                     ",
            "~~~~~___~~_~_~~~_~_~~__~~~~_~b                                                                                                     ",
            "~~~~~~_~~_~_~~_~~~~__~~_~_~~~~~                                                                                                    ",
            "~_~_~_~~_~___~~~_~~_~~~_~_~_~b                                                                                                     ",
            "_~~~~__~~_~~_~_~~_~~___~~~~~~~b                                                                                                    ",
            "~~___~_~~~___~~~~~~_~__~~_~~_~_b                                                                                                   ",
            "_~~_~_~~__~_~___~~~~_~~~_~_~_~b                                                                                                    ",
            "~~_~~_~~~_~_~~~~~~~~~~~~____~~_b                                                                                                   ",
            "_~_~~~___~~__~~_~_~~~~~~~~~_~~~                                                                                                    ",
            "_~__~__~~_~~~~_~_~~~~~__~_~~_~~b                                                                                                   ",
            "__~~~~~__~~~_~~_~_____~_~~~~~_b                                                                                                    ",
            "_~~_~__~~__~~~_~_~~_~~~~~_~__~~_                                                                                                   ",
            "~~~~~~__~~__~_~~_~~_~~_~~~~_~_b                                                                                                    ",
            "_~_~~~~__~_~~~~____~_~_~__~_~~~~                                                                                                   ",
            "~~_~_~_~~~_____~~~_~~_~__~~~_~b                                                                                                    ",
            "_~~~____~~__~~_~__~~~_~~_~~~__~b                                                                                                   ",
            "____~~~~_~___~~~_~~_~__~_~_~~_b                                                                                                    ",
            "~~~~~_~~__~~~_~___~_~__~_~_~_b                                                                                                     ",
            "_~~~~_~~~__~_~~__~_~~_~_~~~~_b                                                                                                     ",
            "~_~~~_~__~___~___~_~___~~__~~b                                                                                                     ",
            "~~~~~~_~__~~____~_~~_~_~___~~b                                                                                                     ",
            "_~~~_~~~~~~~~~~~_~~_~_~~~~~__~b                                                                                                    ",
            "___~~_~~~~_~_~~~~~~~~~~__~_~~b                                                                                                     ",
            "~_~~_~~~_~_~~_~_~___~~~_~~_~__b                                                                                                    ",
            "___~___~_~~~~~~~_~~_~~___~_~_~~b                                                                                                   ",
            "_~~__~~~~~~__~~~~_~~_~~~~_~_~_b                                                                                                    ",
            "~_~~~_~~_~~~~_~~~~~~___~~~___b                                                                                                     ",
            "~~~_~__~___~~~__~_~~__~_~~_~~_b                                                                                                    ",
            "~~~_~~~~__~~_~~~~~~~~~~_~~~__~~_                                                                                                   ",
            "~______~_~__~~__~~~_~~~____~~~b                                                                                                    ",
            "_~~~~~~~_~~_~~~~_~~~~_~~~_~~_b                                                                                                     ",
            "~_~__~_~________~__~~~~__~_~~~b                                                                                                    ",
            "~~_~__~_~_~~~_~~_~~~~~_~_~__~b                                                                                                     ",
            "_~~_~_~~~~_~~~_~~_~~~__~~__~~b                                                                                                     ",
            "~_~~_~~~~~__~~~~__~___~_____~_b                                                                                                    ",
            "~_~~__~~___~~__~_~_~_~__~_~_~b                                                                                                     ",
            "____~__~~~_____~~~__~~_~__~_~b                                                                                                     ",
            "~~~~~~~~~~__~_~~~~~~_~_~_~~~_b                                                                                                     ",
            "~~___~~~~__~~~~~~~~~~_~_~~__~~b                                                                                                    ",
            "~~~~~~___~~~_~~~~_~_~_~~_~~~~b                                                                                                     ",
            "~~~~~__~~~__~_~_~_~~~_~~~___~b                                                                                                     ",
            "~__~_~~~~~_~~~_~~_~_~_~~~~~~_b                                                                                                     ",
            "~~~~_~_~~~_____~_~~~_~__~~~__b                                                                                                     ",
            "~_~~~_~~__~~___~_~_~~~~~~~~_~b                                                                                                     ",
            "~~_~~~_~~~~__~_~___~~__~~~~_~b                                                                                                     ",
            "_~~_~_~_~_~___~_~~~~~~___~~~~b                                                                                                     ",
            "~___~~~_~___~_~___~____~~__~___                                                                                                    ",
            "~~__~~__~~_~_~~_~~~~~~~__~~~~~_b                                                                                                   ",
            "~~~~____~~_~~~_~~~~~~~~_~~_~~~b                                                                                                    ",
            "~____~~___~___~__~___~~_~~~_~b                                                                                                     ",
            "__~~~__~~_~_~~~~~_____~~_~_~_~b                                                                                                    ",
            "_~~_~______~~__~_~__~~_~~_~~~~__                                                                                                   ",
            "_~_~_____~~~~~~~__~_~~~~~_~__~b                                                                                                    ",
            "~~___~~~_~_~_~_~~__~____~_~_~_~b                                                                                                   ",
            "~__~__~~_~~__~~~~~___~_~~~_~~_b                                                                                                    ",
            "~~~~___~~_____~~__~~~_~~~_~~_b                                                                                                     ",
            "~_~~~_~~___~~~_~~~~~~___~~~~~~b                                                                                                    ",
            "_~~_~_~~~~_~__~~~___~~___~_~_~~~_~b                                                                                                ",
            "___~_~~_~_~_~~__~~__~~~~_~~~~~~__~                                                                                                 ",
            "~~~__~~__~~_~_~_~_~~_~_~___~~_~~b                                                                                                  ",
            "~~~__~~~~~___~~_~~_~~_~___~~~~~_                                                                                                   ",
            "~~~~__~~~~~~~~~~~~_____~__~~~_~_b                                                                                                  ",
            "~_~~~_~___~__~~~~~~~_~~~~_~__~_b                                                                                                   ",
            "~~~~~___~~_~~~~_~_~__~~~~_~~~_b                                                                                                    ",
            "~~___~_~~~_~__~_~~~~~~~__~_~_b                                                                                                     ",
            "~____~~_~~~~~~~~~_~~~~~~~__~_b                                                                                                     ",
            "~~___~_~__~~~~_~_~~~_~_~__~__b                                                                                                     ",
            "~____~~~~_~~__~_~~_~~~~~~_~~_b                                                                                                     ",
            "~~~_~~___~~~~~__~~__~~~___~_~~                                                                                                     ",
            "~_~~~~_~_~__~~_~~___~~~_~_~_~_                                                                                                     ",
            "~~__~_~~__~~~~~~~_~~_~~~~~___~b                                                                                                    ",
            "____~__~_~_~~~~~~__~~~__~~~_~~_b                                                                                                   ",
            "~_~~~_~~~_~~_~~_~~~~~~~~~_____~_b                                                                                                  ",
            "__~~~_~~~_~~~~~~~_~~~~~~~~~~~~~_~b                                                                                                 ",
            "~_~~~__~~__~~~__~~_~~~_~__~~_~~~b                                                                                                  ",
            "_~__~~~~_~~~~_~~__~__~~_~___~_~b                                                                                                   ",
            "~_~__~__~~~~~~~~~___~~_~~~~~__b                                                                                                    ",
            "~_~~_~~___~______~_~~__~_~_~_b                                                                                                     ",
            "_~____~~_~~~~_~~~~__~___~~~~_b                                                                                                     ",
            "_~__~_~~_~~~_~_~~____~~__~~~~_~                                                                                                    ",
            "_~__~_~_~~~__~~__~~~_~_~__~_~b                                                                                                     ",
            "~___~_~_~~_~~~_~__~__~~~_~__~~b                                                                                                    ",
            "_~_~_~~_~~~~_~___~~___~_~~~~~~~b                                                                                                   ",
            "~__~_~~_~~_~~~~__~~~~__~__~~__b                                                                                                    ",
            "~_____~~__~~~___~_~~~_~~~_~__~_b                                                                                                   ",
            "____~_~__~~~~_~~__~_~__~~~~~~~b                                                                                                    ",
            "~__~~___~~~~~_________~~_~~__~~b                                                                                                   ",
            "~~~~~__~~__~~~~_~__~~~~_~~____~~b                                                                                                  ",
            "_~~___~_~_~__~_~~_~~~~_~_~~~~~~__b                                                                                                 ",
            "~~__~~__~~_~__~~__~~__~_~__~__~__                                                                                                  ",
            "~~_~_~~~~__~~__~~~~~~__~~~~_~_~~_b                                                                                                 ",
            "~_~~__~~~_~___~~~~~~~___~~~_~~~~b                                                                                                  ",
            "__~__~~_~~~__~~~_~~__~~___~~___b                                                                                                   ",
            "~__~~__~~~~~_~~____~~_____~~~~b                                                                                                    ",
            "~~_~~~~~~_~__~~~~~~_~_~~~~~__~                                                                                                     ",
            "~_~___~_~__~~_________~~_~_~~b                                                                                                     ",
            "~_~~~_~~~~~~~~_~~~__~~~~~~__~_                                                                                                     ",
            "_~~__~__~~~~~~_~~__~~_~~~__~~b                                                                                                     ",
            "~~__~__~_~_~_~__~~~__~_~__~__b                                                                                                     ",
            "~_~_~____~~__~~~_~~_~__~~~__~b                                                                                                     ",
            "_~~~~_~~~~_~~_~~_~~~~_~~_~_~~~b                                                                                                    ",
            "~~~_~~~____~~~~__~_~~~~_~~_~_b                                                                                                     ",
            "~~~~~~___~______~_~__~~~~_~_~b                                                                                                     ",
            "____~_~~~_~~_~~_~~~~~~_~_~~_~~b                                                                                                    ",
            "~____~~_____~~~__~~~~_~~_~_~_b                                                                                                     ",
            "__~~~~~__~~~~_~___~_~__~_~~~_~b                                                                                                    ",
            "~__~~_~~~~~__~~__~~~_~_______b                                                                                                     ",
            "_~~~_____~~~_~~~~__~~_~~~_~~~b                                                                                                     ",
            "_____~~~___~_~__~_~~~_~~~~~~_b                                                                                                     ",
            "_~~_~~_~~~~_~_~~_~~~~_~~___~~~b                                                                                                    ",
            "~__~_~___~~~___~~_~~~~~__~~~~~_b                                                                                                   ",
            "~_~_~_~~~__~~~__~~~~_~~_~~_~~~b                                                                                                    ",
            "~_~~~_~~_~~~~~~~~~_~__~~~_~_~~~~                                                                                                   ",
            "_~~~_~_~~~~_~~_~__~___~__~~~__~                                                                                                    ",
            "~_~~__~~~~~~___~~~_~~~~~~_~~_b                                                                                                     ",
            "~_~___~___~~~__~~~~_~~__~~_~~b                                                                                                     ",
            "~~~_~~~~~_~_~~__~_~__~~~~~_~~_                                                                                                     ",
            "~__~~~~~~~~~~~~_~_____~~~_~~~b                                                                                                     ",
            "~~_~_~__~~~~~~~~~__~_~~~_~__~_b                                                                                                    ",
            "~___~_~_~_~~_~~___~~__~_~~__~__b                                                                                                   ",
            "___~~~~_~~______~~~~~___~___~~_~b                                                                                                  ",
            "~~~~~_~~_~~_~_~_~__~~_~_~~~~~~_b                                                                                                   ",
            "~_~~~~~~_~_~~~__~~~~~_~_~_~~_~b                                                                                                    ",
            "~~~__~~~~~~~~~~~~__~_~~~~~_~~b                                                                                                     ",
            "_~~~_~~~_~_~~~_~~~_~~~_~~~_~~b                                                                                                     ",
            "____~~~_~~~_~~~~_~_____~~~~_~~b                                                                                                    ",
            "~~~~~~~~~_~_~_~~__~_~___~__~~~~b                                                                                                   ",
            "_~~~__~~~~~~__~__~~~_~~~~~__~~~~b                                                                                                  ",
            "_~~~_~____~_~_~~~~__~~~__~~~_~~___                                                                                                 ",
            "~~~~~____~~_~____~_~~_~~~~_~~~~~~_b                                                                                                ",
            "_~_~~~__~~~~~~~~~~~~~_~~~~~~~~_~__                                                                                                 ",
            "_~__~_~___~_~_~~~__~__~~~~~~~_~~_~b                                                                                                ",
            "_~~~~_~~~~_~~~~_~~_~~~_~~~~~~_~_~~_b                                                                                               ",
            "~_~__~~~_~~~~~~~~_~__~~~__~~~~_~_~b                                                                                                ",
            "_~~~~~~~__~__~~~~~_~___~~~~_~__~_~_~                                                                                               ",
            "~___~__~~_~~~~~~_~~~~~_~~~~__~_~_~b                                                                                                ",
            "~_~~~~_____~~~~~~~_~_~_~~__~~~__~b                                                                                                 ",
            "~~~_~~~_~~~~~_~~~~~~~~__~__~_~~~~_b                                                                                                ",
            "~_~~_~__~~~~_~~~_~_~~~~__~~~~_~~_b                                                                                                 ",
            "_~~~~~_~_~~_~__~_~~__~_~~~~~~_~~b                                                                                                  ",
            "_~_~~__~~~~__~~_~~~~_~~__~_~__~b                                                                                                   ",
            "~~_~__~_~_~~~~~~_~__~~~__~~___~_b                                                                                                  ",
            "___~_~_~~~__~~_~_~_~~__~~~~_~_~b                                                                                                   ",
            "~_~~_~~~____~__~___~___~__~_~~_~b                                                                                                  ",
            "__~_~_~~~_~~~~_~~_~____~~_~~__~~_b                                                                                                 ",
            "___~___~~_~~_~____~~~~~~~_~~___~~~_                                                                                                ",
            "~~_~~~~~~~~~_~~~~___~~~~~~~~_~~~~__b                                                                                               ",
            "~_~_~_~~~_~~~~_~_~~~~~~~~~~___~___b                                                                                                ",
            "~~~~_~~~~~~~~~~~~~~~_~~_~_~~__~__~_b                                                                                               ",
            "_~~~~~__~~___~~_~___~_~~~_~~_~~~_~b                                                                                                ",
            "_~~~~~~~~_~~~~~~__~_~~~_________~__b                                                                                               ",
            "_~~~__~~_____~___~_~~~_~~~__~~~~~~b                                                                                                ",
            "~~_~_~~_~__~__~~~__~~_~~~~~~~___~b                                                                                                 ",
            "~~~____~~~~_~_~_~~~~~~_~~~_~~~~~~_b                                                                                                ",
            "~~_~~__~____~_~~_~_~__~_~~_~~_~_~~_b                                                                                               ",
            "_~~_~~~_~~___~_~~~~~~~~~~~~~_~~_~_b                                                                                                ",
            "~~~~~~~~__~~_~~___~~~~~_~~__~_~~_b                                                                                                 ",
            "___~~~_~~__~~_~~_~~___~~_~~~~~~~b                                                                                                  ",
            "_~_~~~~~_~_~~~~~_~_~~_~__~___~~b                                                                                                   ",
            "~~_~~~_~~_~~_~~______~__~~_~_~b                                                                                                    ",
            "_~_~~~~~_~_~_~~~~_~~_~_~~~~~~b                                                                                                     ",
            "_~__~~~_~~~__~~__~__~~~_~___~~                                                                                                     ",
            "__~~__~_~~__~~~~_~~__~~__~~~_~b                                                                                                    ",
            "~_~__~_~~~__~~___~~_~~~~_~~_~b                                                                                                     ",
            "_~~~~~~~~~~~_~~~~~_~~~__~_~~~~~                                                                                                    ",
            "~__~_~~~~__~_~_~~__~~~~~~~~_~b                                                                                                     ",
            "~~~~__~__~~~~~~_~__~_~~~~~~_~_b                                                                                                    ",
            "~_~~~_~_~_~~~__~_~~~~_~~__~~~b                                                                                                     ",
            "____~_~~_~~___~~~~____~___~~_b                                                                                                     ",
            "~_~~_~~~~~~~~~_~~~~~___~_~~___b                                                                                                    ",
            "~__~~~~~_~~~~__~~~_~~~_~_~_~~b                                                                                                     ",
            "__~__~~~~_~~__~__~~_~~____~~_b                                                                                                     ",
            "_~~~_~_~~___~_~~~_~_~__~~_~__b                                                                                                     ",
            "~____~~~~~~~_~~_~__~~~~_~_~~_b                                                                                                     ",
            "~~__~~~~_~~__~~_~_~_~__~_~~~__b                                                                                                    ",
            "~~_~~_~~~~~_~~~_~__~_~_~~~__~_~b                                                                                                   ",
            "_~_~___~____~~~_~~~___~~~__~~~b                                                                                                    ",
            "~~_~_~~~~_~~__~~~~_~~~~_~~~~_~_b                                                                                                   ",
            "~__~~__~~~~_~~~_~_~~_~_~~_~~~~b                                                                                                    ",
            "_~__~_~~~~~_~_~~~~~_~_~_~_~~_~_b                                                                                                   ",
            "~__~_~_~~~~~__~______~~~_____~_~b                                                                                                  ",
            "~_~____~~~~_~_~~_~~~_~_~______~_                                                                                                   ",
            "~~_~~_~~_~~~__~~~_~~~~~__~~___~~b                                                                                                  ",
            "~~__~~~~_~_~~_~_~__~~~__~__~_~~b                                                                                                   ",
            "~~~~_~_~_~__~~~~_~_~_~_~_~~__~_~b                                                                                                  ",
            "_~~~_~__~_~~__~~____~~~~~~~~_~_b                                                                                                   ",
            "_~___~~___~~_~~~~__~~~__~_~_~~~                                                                                                    ",
            "~__~~~~~~~~~~~___~__~~~~____~b                                                                                                     ",
            "__~~~~_~~~~~~~~~~_~_~~~_~~~~~_b                                                                                                    ",
            "_~__~~~~__~_~~_~_~~_~~~~~~~~~~_b                                                                                                   ",
            "~~~~__~__~~__~~____~_~~~~~_~~~b                                                                                                    ",
            "~~~___~_~~_~___~_~~~_~_~_~~~_~_b                                                                                                   ",
            "~~~~~___~~__~~~~_~__~~_~_~__~~~                                                                                                    ",
            "_~~~_~_~~_~__~_~~__~~~~~~~~_~b                                                                                                     ",
            "~~_~_~~~_~~~~__~~~~~~~~~~~_~~_b                                                                                                    ",
            "~__~_~~~___~~___~~____~~~~~_~_                                                                                                     ",
            "~~~~_~~~_~__~~~~~~____~~~___~b                                                                                                     ",
            "_____~~__~~__~__~_~~~~_~~__~~b                                                                                                     ",
            "~~~__~~~_~~~~~~_~___~~_~___~~b                                                                                                     ",
            "~~_~~~~_~_~_~_~~~~_~~~_~__~~_b                                                                                                     ",
            "~~___~~_~~~~~___~_~~~~~~~~_~__b                                                                                                    ",
            "___~~~~__~~___~~__~~~~_~__~~_~~b                                                                                                   ",
            "~_~~~~~~_~__~~__~~__~~____~___b                                                                                                    ",
            "____~~~~~~_~~~~__~_~~_____~__b                                                                                                     ",
            "_~~~_~____~~~_~_~_~_~~~~_~~~~b                                                                                                     ",
            "~___~_~~~___~~~~___~_~~__~~~_~b                                                                                                    ",
            "~~___~__~~___~~_~_~~~__~~_~~_b                                                                                                     ",
            "~~~__~_______~~~_~~~__~~~~~___b                                                                                                    ",
            "~~~__~~~_~~~~_~~__~_~__~_~_~__                                                                                                     ",
            "~~~~~_~~__~_~_~~~~~_~____~~~~_b                                                                                                    ",
            "~_~___~_~_~_~~~~_~~__~~~__~~__~b                                                                                                   ",
            "~~_~~~~_~~__~~______~_~~~~_~~~b                                                                                                    ",
            "~~__~_~_~~__~~~~~~_~~_~_~~~~__~_                                                                                                   ",
            "~_~~_~_~~~~____~~~~__~_~~___~~~__                                                                                                  ",
            "_~~~_~~_~_~_~~~_~_~~~_~~_~___~~b                                                                                                   ",
            "__~~_~~~__~~_~~~__~_~_~_~~~_~_b                                                                                                    ",
            "___~~~~~__~~_~~_~~~~~_____~~_b                                                                                                     ",
            "_~~~~___~~~~~~~~_~_~___~~_~__b                                                                                                     ",
            "~~__~~~_~~___~_~~____~~~~_~~~b                                                                                                     ",
            "_~~_____~~~_~__~_~~_~~_~__~~_b                                                                                                     ",
            "_~_~~~~__~_~~~~~~~_~___~~~__~~b                                                                                                    ",
            "___~~_~~_~~~~_~~~__~~~__~_~__~_b                                                                                                   ",
            "_~~~~___~~~~~~_~_~~~~_~~~_~~__b                                                                                                    ",
            "_~~~__~_~___~~______~~~~_~~~~~_b                                                                                                   ",
            "~~~_~~~~__~______~_____~~_~~_~__b                                                                                                  ",
            "_______~_~_~~_~____~~__~_~~_~~_~~b                                                                                                 ",
            "~~__~~~~~~_~~__~__~_~_~~~~~_~~~~~~b                                                                                                ",
            "_~_~__~__~_____~~__~___~_~_~~__~_~_b                                                                                               ",
            "~_~~_~~~~~_~_~_~__~~~~~_~__~~_~_~~b                                                                                                ",
            "~_~~~_~~~_~~~_~~_~___~~__~____~_~_~b                                                                                               ",
            "~~____~~~_~_~~~~~~__~~~~_~~__~~_~~~~b                                                                                              ",
            "__~~~~~__~~~_~__~_~~~~~__~~__~__~~~_~b                                                                                             ",
            "~___~_~~~_~_____~~__~~~~~~~_~~___~~_~_b                                                                                            ",
            "~_~_~_~~_~~~~~~~~____~__~~~_~___~_~__b                                                                                             ",
            "~~_~__~~~_~~~_~~__~__~~_______~~__~~_~b                                                                                            ",
            "~~_~~_~__~~~_~~~~~_~~~~~~_~~_~____~~_b                                                                                             ",
            "_____~~~~_~__~_~_~~_~~___~_~_~_~~~_~b                                                                                              ",
            "~__~_~_~_~__~__~~~_~~~___~~__~~~~~_~~b                                                                                             ",
            "~~~_~_~~___~~~_~~~___~~~__~_~~~~~_~~b                                                                                              ",
            "~~~_~_~_~_~_~~~~_~__~~~~~~~~~_~_~~~b                                                                                               ",
            "~_~~__~~~_~___~~_~~_~~_~~~~_~~~___b                                                                                                ",
            "~_~_~___~_~__~__~_~~~__~~~~~~~_~~b                                                                                                 ",
            "~~~~~_~~_~_~_~_~~~~~_~~_~_~~~_~~~_b                                                                                                ",
            "~_~__~_~~~___~_~_~_~~~~~~~__~~___b                                                                                                 ",
            "~~~~_~_____~~~~_~~~~~~___~~__~___~b                                                                                                ",
            "~__~~~~~~_~_~_~~~_____~_~~_~_~~~~b                                                                                                 ",
            "_~~~_~~~__~~~~~~_~_~~~~~~~_~~~~~b                                                                                                  ",
            "~~___~~~~__~_~~______~_~_~_~~_~~                                                                                                   ",
            "_~__~~_~_~~~_~~~~_~__~~~____~___b                                                                                                  ",
            "~~_~~___~_~__~~_~~___~_~__~___~b                                                                                                   ",
            "~~_~~~~___~~~__~~_~~_~_~_~~_~_b                                                                                                    ",
            "_~~__~__~___~~__~~~~~~_~~~_~~b                                                                                                     ",
            "~_~~__~_~_~_~~~_~~~_____~_~_~~b                                                                                                    ",
            "______~~~~~~~~__~~~_~_~~~_~__~_b                                                                                                   ",
            "~~~~~~~~__~~~__~~~___~__~_~_~~b                                                                                                    ",
            "~_~~~~~~~~~~____~_~__~~~~~_~__~b                                                                                                   ",
            "~~_~~__~~~~~___~~~~~__~~~__~__b                                                                                                    ",
            "_~_~__~__~~~~___~~~~~~~~~~___b                                                                                                     ",
            "~__~_~~~~~_~_~~____~~~~_~_~~~~b                                                                                                    ",
            "~~_~~~~_~__~__~~_~___~~~__~__b                                                                                                     ",
            "~~~~~~~~~_~~__~~~~~~_~~~~~__~~b                                                                                                    ",
            "_~~~~_~~_~~~___~___~___~_~_~~b                                                                                                     ",
            "~~_~~~~__~~~__~~~~~~_~~~_~~~__b                                                                                                    ",
            "~~~___~~_~__~__~_~~_~~~~~~~~_b                                                                                                     ",
            "_~~__~~~~~~~~~~~~~~__~~~~_~_~~b                                                                                                    ",
            "_~~_~_~_~_~~_____~_~_~~~_~~_~b                                                                                                     ",
            "__~~~~~_~~~~_~~~_~~_~______~~~b                                                                                                    ",
            "~~~_~~~~~~~~~~_~~~_~_~_~_~_~~b                                                                                                     ",
            "~___~~~_~~_~_~_~~~_~~___~~__~~b                                                                                                    ",
            "~~~~__~~_~~~___~~~~~___~__~~~_                                                                                                     ",
            "~__~_~~_~~__~~_~__~~~~~~_~~_~_~                                                                                                    ",
            "~~~_~~~__~~~_~~~_~~~___~~_~__b                                                                                                     ",
            "__~_~~~_~~~~~~~~_~~~__~_~~~~~b                                                                                                     ",
            "~~_~~~~~~~~~~~~~~~~_~~~~_~~~_b                                                                                                     ",
            "~~~~~_~___~__~~~~_~~~_~_~_~~~_b                                                                                                    ",
            "~~~_~~~_~~__~~~~~~_~__~~_~_~~b                                                                                                     ",
            "____~_~_~_~~~~~~~~__~_~~~__~~~b                                                                                                    ",
            "_~~~_~_~~~__~_~~~__~__~~~~___b                                                                                                     ",
            "_~~~_~~__~~_~~~_~_~_~~~~_~_~~~b                                                                                                    ",
            "_~__~~~~~~__~~~_~~~_~~_~~___~b                                                                                                     ",
            "~~_~~~__~~~_~~_~_~~~__~~~~~~~b                                                                                                     ",
            "~~_~~~_~_~_~~~______~_~_______b                                                                                                    ",
            "~__~~~~__~~__~________~~~___~b                                                                                                     ",
            "~~~~~~~~_~_~~_~_~__~~~_~___~~b                                                                                                     ",
            "~~_~_~~~_~~_~_~_______~~~~_~__b                                                                                                    ",
            "~~___~~~_~~__~~_~~__~_~_~_~~~~_b                                                                                                   ",
            "~~_~_~~~~_~~~~_~~___~~_~~~_~~~b                                                                                                    ",
            "~~~_~~___~~__~~~~~~~_~~~~~~~~~~b                                                                                                   ",
            "~~~_~__~__~~~__~~~~_~___~~_~~_b                                                                                                    ",
            "_~~~~_~~__~~__~_~_~__~_~~~~__b                                                                                                     ",
            "_~~~_~~~_~~~~_~~~_~_~~_~~~_~_~b                                                                                                    ",
            "~~~~_~_~~~___~~___~~_~~~_~~~_b                                                                                                     ",
            "____~_~~__~______~~~~~_~___~~b                                                                                                     ",
            "~_~~__~~_~~~~~_~___~__~~_~~~~~b                                                                                                    ",
            "~~_~____~~~_~_~__~__~~__~_~_~b                                                                                                     ",
            "_~~_~__~~~~__~~___~~~~~_~~_~~~~                                                                                                    ",
            "~~~~_~~~_~~~~~~~~_~__~~~~_~~~b                                                                                                     ",
            "~~~~~~~_~~~~~_~__~~~~_~_____~b                                                                                                     ",
            "_~~~~~_~~~__~~~~~~_~_~~~~__~~~b                                                                                                    ",
            "~~___~~_~~~~___~_~~_~_~____~~~~b                                                                                                   ",
            "_~_~~_~_~~__~_~~~___~~~~_~_~_~__b                                                                                                  ",
            "_~_~~_~~__~__~~~~_~~_~~~~~_~_~~_~b                                                                                                 ",
            "_~_~_~~__~~~~~~__~~~~~~__~_~_~~_~~b                                                                                                ",
            "~~_~~_~_~~~~~~~~_~~~_~~___~~~~_~_b                                                                                                 ",
            "__~~_~~~__~~~__~~~__~_~~_____~~~~                                                                                                  ",
            "_~__~~_~_~___~~____~__~__~_~_~_~~b                                                                                                 ",
            "_~~~~~~~_~_~~~~~_~___~~_~~~_~_~_~                                                                                                  ",
            "~~~~~__~~_~~~_~~_~_~_~_~~_~_~_~b                                                                                                   ",
            "__~~~_~~_~___~~~_~~___~~__~~~~b                                                                                                    ",
            "_~~___~~_~~____~~~~~_~~~~~~_~_~b                                                                                                   ",
            "_~~~~~_~~~_~~_~~~~___~~~_~~~__~~b                                                                                                  ",
            "_~~~~_~~~~~___~~~~~_~_~_~_~_~__~_b                                                                                                 ",
            "_~_~~~~_~_~~~_~~_~__~~__~~_~_~~_~~b                                                                                                ",
            "~~_~~_~_~~___~~~~_~__~___~~~_~~~~b                                                                                                 ",
            "~~~~~_~~___~~~___~~~~~~_~___~~~_b                                                                                                  ",
            "~~~~~___~__~__~~__~_~~__~__~~_~~_b                                                                                                 ",
            "~~~~~_~~~_~_~~_~_~~_~~_~__~_~~_~~~b                                                                                                ",
            "~~_~__~~~____~_~~_~~~~~~~_~___~~~b                                                                                                 ",
            "~~~_~~_~_~~___~___~_~_~_~_~~~~__b                                                                                                  ",
            "_~~_~~_~_~__~~_~~~_~_~_____~_~~b                                                                                                   ",
            "~~~~~_~_~~~_~~~~_~~~_~_~~_~~~~~_b                                                                                                  ",
            "~_~___~~______~~____~~~~~~~____b                                                                                                   ",
            "~~~_~~__~__~_~~_~~~_~~~~~_~~~_b                                                                                                    ",
            "~~~~~~~~~__~~_~~~___~~~~~_~__~~b                                                                                                   ",
            "~~~~_____~~~__~~~~~~~~_~~~~___b                                                                                                    ",
            "_~~_~_~___~__~~_~~~~_~~~~~_~_~_b                                                                                                   ",
            "_~~~_~~~~~~~_~~~~__~__~~~~~__~_                                                                                                    ",
            "~___~~~~_~~_~~~~~~~~_~__~~~~~b                                                                                                     ",
            "~~_~__~~~~_~~~~_~_~~~~_~_~~~~b                                                                                                     ",
            "_~~_~_____~~_~~~~__~~~__~~~_~b                                                                                                     ",
            "_~~~~~~_~~_~_~~_~~__~~__~~~~_b                                                                                                     ",
            "~~_~_~____~~_~_~_~~~~___~~__~b                                                                                                     ",
            "__~~~____~~_~~__~_~~~~__~_~_~b                                                                                                     ",
            "___~~___~_~__~_~~~~~____~~~_~b                                                                                                     ",
            "~~~~~~~~_~__~~~___~_~_~~~___~b                                                                                                     ",
            "~__~__~~_~~~~~_~__~_~~__~__~~_b                                                                                                    ",
            "~~~~~~_~~~~~~~_~~~~_~__~_~~__~_b                                                                                                   ",
            "~~~____~~~_~~_~~~~~~__~~~~~~_~~~b                                                                                                  ",
            "_~__~~~~__~~~~~_~____~__~_~~~~~~~b                                                                                                 ",
            "~~__~_~__~___~__~__~_~~~~~~__~_~__b                                                                                                ",
            "~_~~~~~~___~_~_~~~~_~_~~~_~~~__~_~~b                                                                                               ",
            "__~~~~_~~~~~~_~_~~_~_~~~_~_~~~~~~_b                                                                                                ",
            "___~_~~_~__~~~~_~~_~~~~~___~~_~~~b                                                                                                 ",
            "__~_~~_~_~~_~___~~~__~~~~~~~~_~_~~b                                                                                                ",
            "~~~~_~~~~__~_~_~~~~~___~~__~_~~_~__b                                                                                               ",
            "~~__~~~__~~___~~~~~_~__~~~_~_~_~__b                                                                                                ",
            "~~~_~~~~_~~_~____~~~~_~_____~_~~_~_b                                                                                               ",
            "~~_~~~____~~~~~____~~~~~__~~~~~_~_~~b                                                                                              ",
            "_~_~_~_~~~_~_~__~~_~~_~~__~~~~~~~__b                                                                                               ",
            "~~~_~~___~~_~_~~__~~~~~_~~~~~~~~_~b                                                                                                ",
            "~__~~_~~~~_~~~___~~~~_~~~_~_~_~~~~~~                                                                                               ",
            "_~_~~~~___~~_~~~_~~~~~~~_~~_~_~_~_~~b                                                                                              ",
            "~~~~_~~~~___~~~~_~~~~~__~_____~___~b                                                                                               ",
            "__~~_~~_~_~~~~~~__~~~__~_~~~_~_____                                                                                                ",
            "~~_~_~~_~~~_~__~~___~~~~~_~_~~~~_b                                                                                                 ",
            "~~_~___~__~~~____~~~_~_~__~~__~~b                                                                                                  ",
            "~_~~~__~~~~~_~~_~~~_~~____~~~~_b                                                                                                   ",
            "_~~__~~__~~~~~~_~~~_~_~_~_~~~_b                                                                                                    ",
            "_~__~~_~~~__~~~~~~~_~~__~~~__b                                                                                                     ",
            "~__~~~~~~~~~~~~~~~_~~~_~~_~_~_                                                                                                     ",
            "~___~~~~~~~~~~~_~~~_~___~__~~b                                                                                                     ",
            "~~___~_~_~~_~~~_~~~~__~~__~~~~b                                                                                                    ",
            "_~_~~~~~_~~~___~~~~__~_~~_~_~b                                                                                                     ",
            "~~~~_~~~~~_~___~~~~~~~_~~~~~__b                                                                                                    ",
            "~~_~~~~~__~_~_~_~~~~__~~_~_~___b                                                                                                   ",
            "__~_~~_~~~_~_~_~____~~___~~_~~b                                                                                                    ",
            "__~_____~~~~_~___~_~~~__~~~~__~b                                                                                                   ",
            "_~~_~~~~_~__~~~_~_~~__~_~~~__~b                                                                                                    ",
            "__~__~_~__~__~~~~~~~~~~__~___~~b                                                                                                   ",
            "~_~~_~~~~~_~~_~~~~~_~__~~_~~~~b                                                                                                    ",
            "___~_~_~~~~~~~_~_~~__~_~______~b                                                                                                   ",
            "~_~_~~_~~~~~___~__~___~~~~_~~_b                                                                                                    ",
            "~_~~~_~__~_~~~~~~~~~~_~_~~~~_~~b                                                                                                   ",
            "~_~_~__~_~~___~~___~_~_~~~~~_~b                                                                                                    ",
            "~~_~~~~~~__~~~~~~__~~_~~~~~__b                                                                                                     ",
            "~__~_~~~~_~~~~~_~_~~~~_~~____b                                                                                                     ",
            "_~~~_~_____~__~~~_~~~~_~~~~_~b                                                                                                     ",
            "~_~_~_~~~~~~~~__~~~~_~_~~~__~b                                                                                                     ",
            "~_~~___~_~~~_~~~_~_~~~_~_~___b                                                                                                     ",
            "~~~~~_~~__~~~~~_~_~_~___~_~~~~                                                                                                     ",
            "~~~~~~___~_~~____~~__~_~~~~~_b                                                                                                     ",
            "_~__~~_~_~~~~~~~_~~_~~~~~~_~~~b                                                                                                    ",
            "~__~~___~~_~~~_~~_~~~_~_~~__~~~b                                                                                                   ",
            "~_~~~_~~~____~_~~_~~_~~~~_~~_~_~b                                                                                                  ",
            "~~~~~~_~~_~_~~_~~_~_~_~_~~~_~~~_~b                                                                                                 ",
            "_~~_~~~~_~~_~~~~_~~~~_~_~~~__~~_b                                                                                                  ",
            "~~_~~~_~__~_~~_~~~_____~~_~~~~_b                                                                                                   ",
            "~~~~_~_~_~~__~_~_~~_~~~~_~_~~~~~b                                                                                                  ",
            "~_~_~~_~~~~~~~_~__~~~_~_~_~_~__b                                                                                                   ",
            "~~____~~_~_~~_~~_~~_~_~__~_~~~b                                                                                                    ",
            "_~_~___~~~__~~~~~~~~~___~__~~~_b                                                                                                   ",
            "~~__~~_~~~_~~~~~~~~_~~~_~~~_~~_~b                                                                                                  ",
            "_~_~~~___~___~_~~~__~_~~~~~_~~~b                                                                                                   ",
            "~_~~~~~_~___~~_~~_~_~~~_~__~____b                                                                                                  ",
            "____~_~_~~~~~____~~~_~_~_~~~~~___b                                                                                                 ",
            "~~~~__~~_~~_~~____~~~_~~_~__~~~~b                                                                                                  ",
            "_~__~_~~____~~~_~~_~~~_~~~~~___~~b                                                                                                 ",
            "~~_~~_~~_~~~~~_~~_~~~_~~___~_~~~_~b                                                                                                ",
            "~_~~__~_~~~~__~~~_~___~_~_~~~_~~_b                                                                                                 ",
            "_____~_~_~_~~__~~~___~~~~~_~~~~~~_b                                                                                                ",
            "~~~~_~__~~__~______~~~~~_~___~_~~___                                                                                               ",
            "~~~__~~~~~~____~~~_~~~~~~~_~~_______b                                                                                              ",
            "____~~~_~_~_~_~_~____~__~~_~~_~~__~_~b                                                                                             ",
            "~_~____~___~~~~~~~_~~_~___~__~~~_~~~b                                                                                              ",
            "_~___~~~~~~_~~~~_~~~_~~__~~~_~_~~~~_~b                                                                                             ",
            "_~__~~_~~~~~___~__~~~~_~_~~~~~~___~__~b                                                                                            ",
            "_~~~~__~~_~~~~_~_~_~~___~~_~~~~~~_~_~b                                                                                             ",
            "_~__~~~_~_~~~~_~~~~__~_~~~__~_~_~~~_b                                                                                              ",
            "_~~_~~~__~_~~~~_~___~_~_~__~_~~~~__b                                                                                               ",
            "__~~~_______~_~~~~_~~~_~_~~__~~~~~b                                                                                                ",
            "~_____~_~~~~__~___~~__~~~_~_~~~~~b                                                                                                 ",
            "~~~~~__~~_~__~_~_~~~~~~_______~~~~b                                                                                                ",
            "_~_~~~_~~_~~~____~~~~~~____~~_~__b                                                                                                 ",
            "~__~_~_~~~~~__~~~_~~~__~~_~~~~__~_b                                                                                                ",
            "____~_~~~____~__~~~__~_~__~~~_~~~b                                                                                                 ",
            "_~~_~~~~~~_~~__~~~_~__~~__~____~~~b                                                                                                ",
            "~~__~~~~~~__~~_~~___~~__~~~_~~__~_~b                                                                                               ",
            "~~~~~_~_~~~_~_~_~~_~~~~_~_~_~~_~~~b                                                                                                ",
            "~~~~_~_~~~~~~_~~~~~______~~__~~~_~                                                                                                 ",
            "~~_~_~_~~__~~~______~~_~__~__~~~b                                                                                                  ",
            "~~_~__~_~__~_~~_~~~~___~~___~~~~~b                                                                                                 ",
            "~~~____~___~~~~_~_~~~~~_~_~~__~~b                                                                                                  ",
            "_~_~~_~~___~~~~~__~~_~__~_~~~~~b                                                                                                   ",
            "~~_~~~~___~~_~__~~~~~~_~__~~___~b                                                                                                  ",
            "~__~~~_~~~~__~~_~_~~~_~~~~__~__~~b                                                                                                 ",
            "__~~_~~~_~~~_~___~~__~~~~~~~~~_~~~b                                                                                                ",
            "_~~_~__~~~__~~_~~_~~~_~~~__~~__~~b                                                                                                 ",
            "~_~~~_~~~~~~~~_~~~~_~~__~_~~~~_~~~b                                                                                                ",
            "_~~_~~~__~~_~_~~~~_~~~_~~________b                                                                                                 ",
            "~~~~_~~_~~__~___~_~~~~~~~_~__~__b                                                                                                  ",
            "~_~~__~~__~~~_~~~~~_~_~_~_~~_~~_~~                                                                                                 ",
            "~___~_~~~_~~_________~~~___~~~_~~~b                                                                                                ",
            "~~~~~__~~_~~~_~_~__~~_~~~~__~~_~~~~b                                                                                               ",
            "~~~____~~_~~~____~_~_~~_~~__~~~_~~b                                                                                                ",
            "_~~_~~_~_~~~~~~_~___~~_____~~____b                                                                                                 ",
            "~__~~_~~_~~_~__~~~~~~__~~~~~_~~_b                                                                                                  ",
            "____~~~~~~~~_~~_~~~~__~~_~~~~~_b                                                                                                   ",
            "__~~_~~~_~~_~~__~__~~~~_~~___~b                                                                                                    ",
            "~~__~~_~~__~___~~~_~~__~_~__~~_b                                                                                                   ",
            "~~~~~__~~~_~___~~~~~_~_~~~__~_~~b                                                                                                  ",
            "~~_~~__~_~~~_~~~__~~~~~__~_~_~~b                                                                                                   ",
            "~_~_~~~~~___~~~~_~~__~~~_~_~_~b                                                                                                    ",
            "__~__~~~__~~~~~_~__~__~~~~~~~~_b                                                                                                   ",
            "~~~~~_~_~_______~__~___~~~~~__b                                                                                                    ",
            "~_~_~~~_~~_~_~~~~~~___~~~~~_~b                                                                                                     ",
            "~~_~~~___~~_~~_~__~~~~~~_~~__~b                                                                                                    ",
            "_~~_~_~____~____~_~_~__~_~__~_                                                                                                     ",
            "~~~~_~~~~~~~_~~_~~~~_~~____~_b                                                                                                     ",
            "_~~_~__~~~~~_~~_~~~~~_~~~_~~_b                                                                                                     ",
            "~__~~_~__~~_____~~~~~_~~~___~~b                                                                                                    ",
            "_____~~~~~~_~___~~~_~~~_~_~~_b                                                                                                     ",
            "~~___~__~~~~_~~_~__~~~~__~_~~b                                                                                                     ",
            "~_~~~___~~~_~~~_~~~__~_~___~_b                                                                                                     ",
            "_~__~~__~__~~_~_~__~~~~_~_~__b                                                                                                     ",
            "~~_~_~~~~_~_~___~~~~~~~~__~__~b                                                                                                    ",
            "~___~~_~_~~__~~~~~~~~~~~~~_~~b                                                                                                     ",
            "~~~_~__~_~~~~_~~__~__~_~_~~_~_b                                                                                                    ",
            "~~~~_~_~~_~~~_~~_~~_~_~~~~__~b                                                                                                     ",
            "_~~~_~_~~__~_~_~~~_____~~~~~~b                                                                                                     ",
            "_~__~_~~~____~_~__~_~~~~~~~~_b                                                                                                     ",
            "~__~___~_____~___~~~~~__~~~~_~b                                                                                                    ",
            "_~~~~_~__~~~__~~~~~_~_____~~~~_b                                                                                                   ",
            "~~_~___~___~__~_~~~__~~~_~~~_~b                                                                                                    ",
            "_____~~__~____~__~_~~_~__~__~~~b                                                                                                   ",
            "~~_~_~_~_~~_~~_~~_~~~~_~__~__~b                                                                                                    ",
            "~__~~_~~~_~_~~__~~__~~__~~~~~b                                                                                                     ",
            "~_~~~_~~_~~~__~~__~_~~~~__~_~b                                                                                                     ",
            "~_~~_~~~~~_~~~~~_~_~~__~_~__~~b                                                                                                    ",
            "~__~~~~~~~~~~~~~_~~_~_~~~__~~b                                                                                                     ",
            "_~___~__~__~~_~_~~_____~_~~~_~                                                                                                     ",
            "~~~~_~__~_~__~~__~~~~_~_~__~~_b                                                                                                    ",
            "~__~~~~~~__~~_~~~~~__~~~_~_~~b                                                                                                     ",
            "~~~~___~~_~~~~_~~~~~_~~~~~~~~_~                                                                                                    ",
            "~~_~~~_~_~____~~~__~__~__~_~~~                                                                                                     ",
            "_~~_~~__~_____~~_~__~~~~~_~_~b                                                                                                     ",
            "_~____~_~_____~~~~~__~~_~___~b                                                                                                     ",
            "~~_~_~__~~~_~~_~~~_~_~_~___~__b                                                                                                    ",
            "___~~___~~_~~~~__~~~_~~~~_~_~b                                                                                                     ",
            "_~__~~~~____~~~_~~___~____~_~~b                                                                                                    ",
            "__~~__~~~__~_~~~~_~~~__~~~_~~b                                                                                                     ",
            "~_~~~__~~~~~__~___~~_~~_~~__~_b                                                                                                    ",
            "~~~~~~_~___~~_~_~~~___~~~__~~b                                                                                                     ",
            "__~_~~_~~_~__~~_~~~~~~_~~~~__b                                                                                                     ",
            "__~~~__~~~___~~~~~_~~~~~~_~~~~b                                                                                                    ",
            "~~~~~~~__~_~~~~__~_~~___~~__~b                                                                                                     ",
            "~____~~~~~~__~~_~~~_~~~~~~___b                                                                                                     ",
            "~~__~__~___~~___~__~~_~~_~~~~_b                                                                                                    ",
            "_~_~_______~~__~~_~~~~~__~~~~b                                                                                                     ",
            "~~__~~~~~___~_~~_~__~~~~~~_~~b                                                                                                     ",
            "~_~__~~_~_~_~~~__~~~_~~~___~_b                                                                                                     ",
            "~_~~_~~~__~___~~~_~~~_~_~_~~~b                                                                                                     ",
            "~~_~~_~_~__~_~_~~~~~~~~_~~__~_b                                                                                                    ",
            "~_~~__~~~~~~~~~~~~~~~~~_~__~_b                                                                                                     ",
            "~_~~_~~_~~~~~~__~_~_~_~___~~__                                                                                                     ",
            "___~___~_~_~~~~_~~_~~_~~~~~~~b                                                                                                     ",
            "~~~~~~~_~~~_~~~~~~_~_~~~~~~~~~b                                                                                                    ",
            "~_~_~__~~~~~~__~~~~__~~~~~~_~_~b                                                                                                   ",
            "_~_~~~~_~~~_~_~~~~~~___~~__~_~~~b                                                                                                  ",
            "~~______~~~~~~~~~__~___~~~~__~~b                                                                                                   ",
            "~~_~~~_~___~__~~~_~_~~__~__~~_b                                                                                                    ",
            "~~~_~~~_~~~~_~~_~~___~_~~~~~~~~_                                                                                                   ",
            "_~~~_~~~~~~__~~_~_~~~~~~~~~_~__~b                                                                                                  ",
            "~___~~~~~___~_~_~~_~__~~__~_~_~b                                                                                                   ",
            "~_~~_~__~_~___~~__~~_~__~__~~~b                                                                                                    ",
            "~~~~_~~~_~~~__~~~~_~____~~~_~~~b                                                                                                   ",
            "_~~~__~~~_~~~~~~_~~_~__~~~~~~_~~b                                                                                                  ",
            "_~__~~~_~_~_~~_~__~_~_~_~_~__~~b                                                                                                   ",
            "~~_~_~_~_~__~_~~~___~__~~~~~_~b                                                                                                    ",
            "~~~~~___~___~__~_~_~~~~_~~~__~~b                                                                                                   ",
            "~~~_~~~~_~~~~_~~~~~~_~~~~__~~_b                                                                                                    ",
            "_~~~~~_~~~__~_~_~~~~~~~_~_~~_b                                                                                                     ",
            "_~~~~~_~_~~_~~~~~~_~~___~~~_~~b                                                                                                    ",
            "_~_~____~_~____~~~_~~~_~_~_~_b                                                                                                     ",
            "__~___~__~~_~~~~_~~__~~~~_~~~_b                                                                                                    ",
            "_~~___~~~_~~__~~_~______~_~_~_~b                                                                                                   ",
            "~_~_~~_~__~__~__~_~~~~_~_~~_~~b                                                                                                    ",
            "~~__~~~_~__~___~_~~____~~~_~~~~b                                                                                                   ",
            "~_~__~__~__~_~~~_~_~~~~~__~__~b                                                                                                    ",
            "~~~~~___~~~_~_~__~__~~_~~~__~b                                                                                                     ",
            "__~_~_~~_~~_~_~~_~~___~~_~~_~_b                                                                                                    ",
            "_~~~________~~~~~_~~~~~~~_~_~b                                                                                                     ",
            "~~~~~_~~___~__~~~_~~~__~~_~_~b                                                                                                     ",
            "~~__~_~~_~~~_~__~____~__~~~~~b                                                                                                     ",
            "~~~~__~~~__~~_~~__~_~~~~__~~~_                                                                                                     ",
            "~_~_~~~_~_~_~~___~~_~_~_~~~__~b                                                                                                    ",
            "~_~~~_~~~~_~~~~_~~__~__~~~__~b                                                                                                     ",
            "~___~_~~~~_~_____~__~_~_~~__~b                                                                                                     ",
            "~~~~_~~~_~_~~_~_~~__~~~__~~~~b                                                                                                     ",
            "~~~_~__~~~_~~_~_~_~~~~__~~~_~~~                                                                                                    ",
            "_~~~_~~_~~~_~__~~__~_~_~~~_~_~~b                                                                                                   ",
            "~~~~_~~~~~~~~_~~~_~____~~~______b                                                                                                  ",
            "~~~_____~~~~~~~_~~~~_~___~~~~~~b                                                                                                   ",
            "__~~~_~~_~__~_~~_~~~~~~~~~~~~~b                                                                                                    ",
            "~~~~~_~~_~~_~~~__~~__~~___~~___b                                                                                                   ",
            "__~~~~~~~__~~~~~~~__~__~~__~__b                                                                                                    ",
            "~~~~~~__~~_~~_~~~~~~_~~~~__~_~_b                                                                                                   ",
            "~~__~_~_~__~~__~~~~_~_~~~~~~_~__b                                                                                                  ",
            "~~~_~~~___~___~~~~~~~~~_~~~_~~__~b                                                                                                 ",
            "_~_~~~_~~_~~~~~___~~___~~~~~~__~~                                                                                                  ",
            "~~_~~~~_~~__~_~~~~~~~~_~_~~____b                                                                                                   ",
            "__~_~______~~__~~~___~~_~~_~~~~~b                                                                                                  ",
            "_~~~_~~_~____~_~~~__~~~~~~____~~_b                                                                                                 ",
            "~~~_~~~~~_~~_~___~~_~___~~___~_~b                                                                                                  ",
            "~~~__~_~~~_~~~____~~__~~___~~~~~~b                                                                                                 ",
            "_~~_~~__~~_~~~_~__~_~_~~__~___~__                                                                                                  ",
            "~_~~~_~_~_~~_~___~~__~~_~~~__~~~_b                                                                                                 ",
            "~__~_~~_~_~~~_~____~__~___~~_~_~~_b                                                                                                ",
            "~_~____~~__~~____~__~_~__~~_~_~~~~_b                                                                                               ",
            "~~_~~~_~~~____~~~_~~~_~~__~_~_~~_~b                                                                                                ",
            "__~~____~~~~_~_~~~_~_~~~~___~__~_~~b                                                                                               ",
            "_~_~_~~_~_~__~~_~_~~_~_~~~~~_~_~~~b                                                                                                ",
            "~~~~__~_~__~__~~_~__~~_~_~__~~~__b                                                                                                 ",
            "~_~~_~__~_~~~~~~_~~~_~~~~~~_~~~_b                                                                                                  ",
            "_~__________~____~~___~____~~__b                                                                                                   ",
            "~~~__~~___~__~____~~_~~__~~~~~~                                                                                                    ",
            "_~~_~~~~__~__~~___~~~~_~~__~~b                                                                                                     ",
            "_~~_~~__~~~_~__~_~~_~_~~~~~_~b                                                                                                     ",
            "~~~~_~~~~_~~_~__~~~~_~____~~_~                                                                                                     ",
            "~~~~_~~_~~~_~~~___~~_~~~~~___~                                                                                                     ",
            "__~~~~__~__~_~~~~~_~_____~~~_~~                                                                                                    ",
            "__~~~~~_~~_~~~~_~~~~~_~~~_~~~~_b                                                                                                   ",
            "~_~_~~~~~~~_~_~__~~__~~_~~~~~~b                                                                                                    ",
            "~__~____~~_~~~~~_~_~_~____~_~_                                                                                                     ",
            "~~_~~_~__~~___~~~~~~___~~_~~~b                                                                                                     ",
            "~~_~~_~~~___~~_~~~~~_~_~~~~~~~b                                                                                                    ",
            "~~~~_~_~_~~~_~~~~~~__~_~_~_~~b                                                                                                     ",
            "__~~_~~~~_~~_~~_~___~_~_____~_b                                                                                                    ",
            "_~~~~_~~~__~___~~~~~~~~_~__~~b                                                                                                     ",
            "____~_~~~~~_~~~___~~~~~_~__~_~b                                                                                                    ",
            "~~~~~~~~~~~~__~_~__~_~__~_~~~b                                                                                                     ",
            "~~~~~_~__~~~_~_~~~___~~~~~~_~b                                                                                                     ",
            "~~_~~~~~__~~___~~~___~~_~~~_~b                                                                                                     ",
            "__~_~~~__~~_~__~~_~_~~_~_~~~~~b                                                                                                    ",
            "~~~~~___~____~__~__~__~~~~~~~b                                                                                                     ",
            "_~~~~~~_~~~_~~_~~~~__~~~__~~~b                                                                                                     ",
            "__~~~~_~~__~_~_~~~____~~~~___b                                                                                                     ",
            "__~_~_~~_~___~~~__~__~___~__~b                                                                                                     ",
            "_~~~~~__~_____~~~~__~~~_~~____b                                                                                                    ",
            "~~__~__~__~___~~__~_~____~~~_~                                                                                                     ",
            "_~_~~~~_~~_~_~~~__~_~~_~~~~~_b                                                                                                     ",
            "___~~__~~____~~_~~_~~_~_~~___b                                                                                                     ",
            "_~~___~~~~__~____~~_~~~~~~~_~b                                                                                                     ",
            "~___~_~~_~_~~~____~_~_~~_~~_~~                                                                                                     ",
            "~_~~___~__~__~__~~~~_~_~~~~__b                                                                                                     ",
            "~~~~~__~~_~~~___~~~~~_~__~~~~_~                                                                                                    ",
            "~~~~~~_~~~~~~~~_~_~~~_~~~_~~~b                                                                                                     ",
            "~~_~___~~~___~~~~__~__~~~_~_~b                                                                                                     ",
            "~~_~_~___~_~_~_~_~~~_~~~~~_~_b                                                                                                     ",
            "__~~~~~~_~~__~_~_~~~__~_~_~_~__                                                                                                    ",
            "~_~__~~~~~~_~_~~~~_~~~~_~~~~_~                                                                                                     ",
            "~_~~_~__~~~~~~_~~~~~~~~~_~~__b                                                                                                     ",
            "~~_~_~~_~~~~~~__~_~~~~____~~~~b                                                                                                    ",
            "~~~~~~~~~~~~~~___~___~~~~__~~~~b                                                                                                   ",
            "~______~~~_~__~_~___~_~~~_~_~~b                                                                                                    ",
            "~~_~_~~__~__~_~~~~__~~~~__~__~~b                                                                                                   ",
            "_~~~__~_~__~~~_~_~_~_~_~~_~~~_~_b                                                                                                  ",
            "_~~_~~_~~~_~_~~~____~~~~_~_~~~~b                                                                                                   ",
            "__~~~_~__~~~~__~_~_~_~~~~~~__~~                                                                                                    ",
            "__~~~_~~~~~~_~~_~_~_~___~~_~~b                                                                                                     ",
            "~_~~~_~~~~____~~__~~___~___~~~                                                                                                     ",
            "~~~_~_~~~~_~__~_~_~_~_~~~__~_~b                                                                                                    ",
            "_~_~_____~~~~~_~___~__~~__~_~_~~                                                                                                   ",
            "~~~~_~~~_~~~~~__~~~~_~___~~_~_b                                                                                                    ",
            "_~~~_~_~_~_~_~~___~_~~~__~__~b                                                                                                     ",
            "~~__~~~__~~~~~__~_~~_~~~~_~~~b                                                                                                     ",
            "~~~_~_~~_~_~~~___~_~_~~~___~~b                                                                                                     ",
            "~~~__~~~~________~~_~__~_~_~~~                                                                                                     ",
            "~~~_~~~~~_~_~____~___________b                                                                                                     ",
            "~~__~~_~~~~_~~_~~~~~~~~~~~_~_b                                                                                                     ",
            "_~~~~~_~~~_~~_~~~_~~~~~~~~~~~b                                                                                                     ",
            "~_~~~~~__~~__~~__~_~~~~~~~~__~b                                                                                                    ",
            "_~~_~~_~~~~~_____~_~~_~~__~~~~_b                                                                                                   ",
            "~~~~_~~~~_~__~~~~~~~~~_~~~~~_~_~~                                                                                                  ",
            "_~_~~~_~__~__~~_~~~_~~___~~_~_~b                                                                                                   ",
            "_~~~_~~_~~~_~~~~~~__~~_~~~_~~___b                                                                                                  ",
            "~_~_~_____~~~~_~_~~_~~~_~~~__~~_~b                                                                                                 ",
            "~__~______~~~~___~___~~~~~~~~___b                                                                                                  ",
            "~~~~~_~__~~~_~~~~~___~_~~~_~~~~~~b                                                                                                 ",
            "~_~__~_~~~_~~~_~~~~~~__~~~~~_~__~_b                                                                                                ",
            "~~~__~~~~_~~~__~~~_~_~_~_~_~~_~_~~~b                                                                                               ",
            "~~_~__~~___~_~_~~_~_~_~~~_~___~_~~~                                                                                                ",
            "~_~_____~~~~_~~~__~_~~_~~_~~~_~~~~_b                                                                                               ",
            "~~___~~~~~~~_~~~_~~__~~_~_~~_~~~~~_~b                                                                                              ",
            "_~_~~~__~~_~~__~~_~~~__~~~_~~~~~___~~b                                                                                             ",
            "_~~~~~___~_~~____~~~~_~~~__~~_____~_b                                                                                              ",
            "_~~~__~~~~_~____~____~~~~__~~~~___~~_b                                                                                             ",
            "_~_~~_~______~__~_~_~~~__~~~~~_~~~__~_b                                                                                            ",
            "~~_~~__~_~~~_~_~__~~~___~_~_~~_~~_~_~_                                                                                             ",
            "~~_~~~~~~~_~~~~_~__~~~~_~~______~~_~b                                                                                              ",
            "~~~~~~~_~~____~~_~~~__~~~~~__~~~_~~_~~                                                                                             ",
            "~~~~~~~~_~~~~~_____~~____~_~~~~__~_~b                                                                                              ",
            "~~~~__~~~__~_~_~~~~~__~_~~___~~~___~~b                                                                                             ",
            "~~_~~__~~_~_~~~~~~~_~__~~~~__~~~~_~~__b                                                                                            ",
            "~~_~~~_~~_~~_~~~_~__~_~_~~_~_~~_~~~~~b                                                                                             ",
            "~__~~~~~~~_~~_~_~____~~~_~__~~~~~~__b                                                                                              ",
            "~~~_~~~~~_~_~~~~~_~~___~~~~~~~~~_~_b                                                                                               ",
            "~_~~~~~___~___~~~~~_~__~~______~~_b                                                                                                ",
            "~_~~~~~~__~~___~~~~~~___~~_~_~_~~~~b                                                                                               ",
            "_~~~~~_~~_~_~__~___~~_~_~~~~_~~_~~b                                                                                                ",
            "_~_~~~~_~~~~_~~_~~_~~_~___~_~~_~~b                                                                                                 ",
            "__~~~~~~~~~~___~~~~__~_~~~~~~~~~b                                                                                                  ",
            "__~~_~_____~~~~~___~~~~~__~_~__~~b                                                                                                 ",
            "_~___~~~_~_~~____~~~~_~~_~~_~~_~b                                                                                                  ",
            "____~~~~~~_~~_~___~__~~~_~_~___b                                                                                                   ",
            "~~~__~_~~~~~~~~~~~___~~____~_~~_b                                                                                                  ",
            "__~~~_~_~___~~__~__~~__~~~~~~_~b                                                                                                   ",
            "~~~~~~~~~_~__~______~~~____~~~b                                                                                                    ",
            "_~~_~~~_____~~~__~~~~_~_~__~~~_b                                                                                                   ",
            "~_~___~~~~~~~~~_~__~~~_~__~__~b                                                                                                    ",
            "~~________~_~~__~___~__~_~~~~b                                                                                                     ",
            "~_~~~~~_~~_~_~~_~~~~~_~_~~__~b                                                                                                     ",
            "__~__~~_~~_~~_~~__~_~__~_~~~_~b                                                                                                    ",
            "_~_~_~~_~~~~~~_~_~__~~__~__~_b                                                                                                     ",
            "~~~_~_~~~~_~__~~_~~~~~_~_~~~~~b                                                                                                    ",
            "~~_~_~_~__~~~_~~_~~_____~~~_~~~b                                                                                                   ",
            "_~~_~~~___~____~_~~~_~__~_~~__~~b                                                                                                  ",
            "_~~~~~_~~~~_~~~~______~~_~~~~_~__b                                                                                                 ",
            "~~~_~_____~~_~~~_____~___~~~~_~~b                                                                                                  ",
            "_~~~~_____~~~~__~~_~~~___~~___~b                                                                                                   ",
            "~~_~~~__~~_~__~~~~_~~~__~~__~~~~b                                                                                                  ",
            "___~~_~~___~~~~~~~___~~~__~_~~~b                                                                                                   ",
            "~~_~_~~__~___~~~__~~~_~~__~~~_b                                                                                                    ",
            "~~~~_~~~_____~~_~__~_~_~_~~~_b                                                                                                     ",
            "~~~__~~~_~~_~~~~~_~~~~~__~_~~_b                                                                                                    ",
            "_~_~~~~_~~~_~~~~~~_~~_~_~~~~~b                                                                                                     ",
            "~~_~~~~_~~_~_~~~__~~~___~__~~~b                                                                                                    ",
            "~~~__~~~~~_~__~_~~~~~~~~_~_~~_                                                                                                     ",
            "~_~~___~~~~~_~_~~____~~__~~~~_                                                                                                     ",
            "~_~~~~____~_~~~~~~~~~~~~__~~_b                                                                                                     ",
            "~__~~__~~_~~_~~~_~_~__~~_~_~~~                                                                                                     ",
            "~~~~~_~~~_~~_~~~~~~~~~~_~_~_~~b                                                                                                    ",
            "~~_~_~___~~___~_~_~~~~____~_~b                                                                                                     ",
            "___~_~_~~~_~_~______~~__~~__~b                                                                                                     ",
            "~_~~__~~~~_____~_~_~__~_~_~_~b                                                                                                     ",
            "~__~_~__~~~~~_~~~_~_~~~__~~_~b                                                                                                     ",
            "~~~~~_~___~_~~~____~___~__~~~~b                                                                                                    ",
            "~~~_~~~~~__~~~_~__~_~_~____~_~~b                                                                                                   ",
            "_~_~~~_~__~_~~~_~__~~__~~__~~~~~b                                                                                                  ",
            "~~~~~~_~~~~_~~_____~~__~_~_~~_~b                                                                                                   ",
            "_~_~_~~_~~~~__~_~_~~~_~~_~__~~~_b                                                                                                  ",
            "~~_~_~~~~~~_~_~____~~_~~~~__~~_b                                                                                                   ",
            "~~~_~_~____~~~_~_~~_~_~~~_~~_~b                                                                                                    ",
            "~_~~___~_~~~~~~~_~~_~~__~_~~_b                                                                                                     ",
            "_~~_~___~~~__~~~~~_____~~__~_b                                                                                                     ",
            "~~~~_~~~~~~~~~~~~__~~__~~~~_~b                                                                                                     ",
            "__~~_~_~_~~~_~_~~__~~~_~~~_~~b                                                                                                     ",
            "_~__~~_~_~~_~_~_~~_~_~~__~_~~b                                                                                                     ",
            "_~_~~~~__~~~~~~_~~~_~~~~~____b                                                                                                     ",
            "_~_~_~~____~~~~~~_~~~~_~~~~_~b                                                                                                     ",
            "_~___~~~~~~_~~~___~~~~_~_~__~~b                                                                                                    ",
            "~____~_~~~~_~~___~~~~~_~~~~~_b                                                                                                     ",
            "~~~_~__~~~~__~__~~__~~~~~~_~~b                                                                                                     ",
            "~~~~_~__~~~~__~_~_~___~___~~_~                                                                                                     ",
            "______~~___~_~_~~~~___~__~~_~~~                                                                                                    ",
            "~~_~~_~~~_~___~~_~~~~~~~___~~b                                                                                                     ",
            "__~___~__~~~_~~~~~_~__~~_~~~~b                                                                                                     ",
            "~_~~_~~_~_~~~~_~~__~~~__~~~_~~~                                                                                                    ",
            "~__~~~_~~~_~~~_~_~~~_____~_~~b                                                                                                     ",
            "_~____~___~~~_~__~__~~__~~__~~b                                                                                                    ",
            "_~~~~~~~_~__~__~~~__~~_~~~~_~~_b                                                                                                   ",
            "~~__~~~__~~_~__~_~_~_~~__~~~__b                                                                                                    ",
            "~~_~~~~_~~~~_~~~~~~___~_~___~b                                                                                                     ",
            "_~_~~_~~~~~~_~~~~~__~~_~_~_~~b                                                                                                     ",
            "~~~___~_~~~~~~~~_~_~~~__~_~~~b                                                                                                     ",
            "~___~_~~~~~~~~~~_~~_~~~__~~~~b                                                                                                     ",
            "_~__~~_~~_~__~~~~~_~~_~_~_~_~b                                                                                                     ",
            "~~_~~__~_~_~~~~~__~~~~~~_~~~~b                                                                                                     ",
            "_~_~____~__~~~~~~~~~~~~___~~~_b                                                                                                    ",
            "~~_~~~~~__~~~~~_~~~~______~~~~~b                                                                                                   ",
            "~__~~~~_~_~_~__~__~~_~~~~~_~~_b                                                                                                    ",
            "__~~_~~~~~_~_~__~~___~___~~~~b                                                                                                     ",
            "~~__~~_~~~~_~~_~~___~~~__~~~~_b                                                                                                    ",
            "~~~_~~~~~_~~~~~~__~_~~___~~~~~~b                                                                                                   ",
            "____~~~~~~~~~~~__~~~~~____~_~~b                                                                                                    ",
            "____~~~~~~~~~___~~~___~~~~~~~~~b                                                                                                   ",
            "_~~~_~~_~~~~~~~~~___~~_~~_~~~~~                                                                                                    ",
            "~_~~~~_~~~~_~__~~~_~~~_~~~_~_b                                                                                                     ",
            "~~~~____~__~~~~_~~~__~~_~___~b                                                                                                     ",
            "~~~~_~~_~~~~~_~~~_~__~_~_~~~_~                                                                                                     ",
            "_~~__~~~__~~~___~__~_~_~~~~_~~~                                                                                                    ",
            "__~~~~~~~~~~~~~~~~~~~~~_~~~__b                                                                                                     ",
            "__~_~~~_~~_~~~_~_~~_~_~~_~~~~b                                                                                                     ",
            "~~__~___~~~~~~~_~~~_~~~~__~~_b                                                                                                     ",
            "__~~~~_~~~~~~_~~_~_~_~~~_~___~                                                                                                     ",
            "~___~_~~~__~_~~~~~~~~~~~__~__b                                                                                                     ",
            "~_~~_~~~~_~__~_~_~~~~_~___~~~~b                                                                                                    ",
            "_~~_~~~~__~~~_~~___~~~~~~_~__~_b                                                                                                   ",
            "~~___~~~~___~__~_~____~~~~__~~b                                                                                                    ",
            "~_____~_~~_~~_~_~_~~___~_~~_~_                                                                                                     ",
            "~~~~_~~~~~~__~~~__~_~~~~~~~~~b                                                                                                     ",
            "~__~~~__~~___~~_~~__~_~____~~b                                                                                                     ",
            "~__~_~_~~___~~~_~~_~~~__~__~~b                                                                                                     ",
            "~_~~~_~~~_~__~__~~~~~___~_~_~~b                                                                                                    ",
            "_~~__~~_~_~_~~~~~___~~~_~~~~_~_b                                                                                                   ",
            "~~~~_~~_~~~~~____~~~_~____~_~__~b                                                                                                  ",
            "_~_~__~~__~~~~~~_~~~~_~~~~__~~~~_b                                                                                                 ",
            "~~_~_~____~__~~__~____~_~___~~~_b                                                                                                  ",
            "~~~_~~~~~__~_~~~___~~___~~~~~__b                                                                                                   ",
            "~_~_~__~_~_~~~~~_~~_~~~~~~~_~___~                                                                                                  ",
            "~____~~~~~__~~_~~_~~~~_~~__~___b                                                                                                   ",
            "____~~~~~~~__~_~~~~_~_~~_~~~~_b                                                                                                    ",
            "_~~~~~_~_~_~____~~~~~~~_~~~~~_                                                                                                     ",
            "___~_~~_~_~___~~~~~~~~_~_~~~~_b                                                                                                    ",
            "~~~__~_~_~~____~~~___~~_~~~~~_~b                                                                                                   ",
            "~~___~~~~_~__~~_~~~~_~~_~_~~___                                                                                                    ",
            "_~~~_~__~_~~~~_~_~~~~~~~_~~___~b                                                                                                   ",
            "_~~~~_~~~_~__~~___~~~~~~~~_~~_b                                                                                                    ",
            "_~~___~_~~_~_~~~_~~__~_~__~~_b                                                                                                     ",
            "_~___~~___~~___~~~~~~~~__~_~__b                                                                                                    ",
            "~~_~~~~_~~~~~__~~~__~__~_~~~_b                                                                                                     ",
            "~~~~~__~_~~~__~~_~~~~_~_~_~~~_                                                                                                     ",
            "_~~__~~_~~_~_~___~~~_~_~~____b                                                                                                     ",
            "_~~~_~~_~~~_____~__~~~~~~~~_~~                                                                                                     ",
            "_~~~~__~~_~~~__~~_~~_~~~_~~__~                                                                                                     ",
            "_~_~___~_~~_~~_~~~~~~~~~~_~_~b                                                                                                     ",
            "~~_~___~~_~~___~~~~~_~__~~~~~b                                                                                                     ",
            "~___~~~_~__~~~~~~~~~~~___~~~~~b                                                                                                    ",
            "~~~~_~~~_~___~~~_~___~~_~~~~~b                                                                                                     ",
            "_~__~~~~~_~~~~__~_~~~_~~_~~~~b                                                                                                     ",
            "__~__~~~~_~~~~_~~~~~~_~_~~~~~~                                                                                                     ",
            "~~~~__~_~_~~_~~_~~__~_~~_~~~~b                                                                                                     ",
            "~_~~~~~~~~_~~~_~~~__~_~__~~__~b                                                                                                    ",
            "_~__~~~~~_~_~~___~~~_~~~~~~~~b                                                                                                     ",
            "~~~~~_~___~~~__~~~~~_~~__~~~_~                                                                                                     ",
            "__~_~~_~_~~~~_~_~~~______~~~_b                                                                                                     ",
            "~__~~~~~_~~~~~~~_~~___~~~~~__b                                                                                                     ",
            "_____~~~~~~~~~_~_~~~___~~~~~_~~b                                                                                                   ",
            "____~~_~~__~~~~~___~~__~__~~___~b                                                                                                  ",
            "~~~_~~~__~__~~___~~~~__~__~~~~___b                                                                                                 ",
            "~~~~___~_~~~~~_~~~~~~~___~_~~~~___b                                                                                                ",
            "~~_~___~_~~~~~~~~~_~_~_~_~~~~~__~b                                                                                                 ",
            "~_~~_~~_~___~~~~~~~_~_~~~~~~~~~_b                                                                                                  ",
            "~~~___~~~_~~_~~~~_~~~~~__~~~~~~~_b                                                                                                 ",
            "_~~~~~_~~~~~~~~__~_~_~_~__~~__~_~~b                                                                                                ",
            "__~__~_~_~~_~~~__~~~~~~~~~~_~~~__~_~                                                                                               ",
            "__~_~~_~_~~~_~~_~~~_~~~_~~~~~__~~~~~b                                                                                              ",
            "~~~~_~_______~~~~_~~~~_~_~___~_~_~~~~b                                                                                             ",
            "~~~__~~_~_~__~~~_~_~~~__~_~~~_~~~~_~~                                                                                              ",
            "__~~___~~~_~~~__~~_~~~~~____~_~~~~~_~b                                                                                             ",
            "_~_~_~~_~~~~_~~__~_~~~_~~~~~_~~~___~~~b                                                                                            ",
            "_~_~~~~~~~~~_____~__~___~~_~_~~~___~~~~b                                                                                           ",
            "~_~____~_~~~___~_~_~~~~~_~~~~~~______~~~b                                                                                          ",
            "__~~~__~~_~_~__~_~___~_~__~_~_~~_~_~__~~~b                                                                                         ",
            "_~_~_~~~~__~~__~~_~_____~~~~~~~~~_~~_~~_~~_                                                                                        ",
            "_~~~~_~~___~~~___~_~~~~_~___~~~_~_~__~_~~~~b                                                                                       ",
            "~_~~_~~_~~____~_~_~___~__~~~_~~__~~~~~~~___                                                                                        ",
            "~__~~_~~~~~~_~_~~~~_~_~~~~~~___~~~_~~~~~~b                                                                                         ",
            "__~___~_~__~~~~_~~_~~~~~~_~__~_~~~___~~__~b                                                                                        ",
            "~~~~~~_~_~_~_~~~~~_~~~_~~~____~_~__~~~~~~b                                                                                         ",
            "~~~_~_~~~~~~_~~____~___~__~_~~~____~__~~__b                                                                                        ",
            "___~_~___~_~_~_~_~~__~~~~~__~_~~~~~~~~~~~~                                                                                         ",
            "~~____~~~~_~~_____~____~~_~~~___~~~~~~~~b                                                                                          ",
            "__~_~~~~_~~~_~_~_~~_~___~___~_~_~~~_~~~b                                                                                           ",
            "~~~~_~_~~~~_~~~~~~~__~_~~_~~__~___~~__b                                                                                            ",
            "_~~~~~~~~__~__~~~~_~~__~~~~_~~~___~~~b                                                                                             ",
            "~_~__~~__~~~_~~~_~~~__~__~~~~_~~~~~~~_b                                                                                            ",
            "____~~~_~~~_~___~~~~~___~_~~_~~~_~~~~_~b                                                                                           ",
            "~~~_~~_~~~_~~__~_~~_~_~~_~_~_~~__~__~~~_b                                                                                          ",
            "~_~_~~~_~~~__~_~_~~~_~~~___~~~~_~~_~_~~_~b                                                                                         ",
            "~_~_~~_~_~~~~~~__~~___~~~_~_~~_~_~~~_~__b                                                                                          ",
            "~~~~~~~~_~_~~~~_~~~~~~_~~~~~~~_~~~~_~~~~~b                                                                                         ",
            "~~______~~~_~___~_~~~~~__~~_~~~_~_~_~~~~~~b                                                                                        ",
            "_~~~~~~~~~~___~_~~_~~_~~~_~~__~~__~~_~~__~~b                                                                                       ",
            "~~_~~~~_~~__~~~_~_~~~_~~~~~__~~~~___~_~~~~~~b                                                                                      ",
            "~~~~_~~~~_~~_~~~_~~_~~~~~~~~~_~_~_~_~_~~~_~__b                                                                                     ",
            "~~_~~~_~~~___~~~_~~~__~_~__~~~~_~_~_~~__~~~~b                                                                                      ",
            "_~~~~~~~~~~_~_~~~_~~~__~~~~___~_~~_~~__~~~~_                                                                                       ",
            "~~~~~~~_~~__~~~_~_~~_~~_~~~__~~____~~_~_~~b                                                                                        ",
            "~~~~~____~~~~___~~_~~~~_~_~_~~_~_~~__~_~___b                                                                                       ",
            "_~~__~~_~~~~~~~~~~~~~~_~~~_~_~_~___~~_~___b                                                                                        ",
            "_~~~~_~~~__~__~__~__~~__~~~~~~_~_~_~_~___b                                                                                         ",
            "__~~~~_~~____~~~~_~~~_~~~~~_~_~__~______~~b                                                                                        ",
            "~~~_~____~~_~~~_~__~~_~~_~_~_~_~~_~_~~___~~b                                                                                       ",
            "_~~_~_~~~~_~_~~~~_~_~__~~__~_~~~~~_~~___~~~_b                                                                                      ",
            "~~~~_~~~~~_~~~~~__~~~_~~_~~~~~~~__~~_~__~~_b                                                                                       ",
            "_~~_~_~_~~_~__~~_~~______~~_~~___~_~___~~~b                                                                                        ",
            "__~~~~~~~_~~~__~~_~~~_~~_~~_~~~~~__~__~_~b                                                                                         ",
            "_~~__~_~~~~_~~~_~~___~_~___~_~_~~~_~~~____b                                                                                        ",
            "___~_~_~___~~~~_~~__~~____~~~~~~~~~_~~~__b                                                                                         ",
            "~~~_~__~~~~~~~____~~_~_~__~_~__~~~~~_~~___b                                                                                        ",
            "_~_~~~_~_~_____~~_~~~~_~_~~_~~~~_~_~__~_~b                                                                                         ",
            "~~~_~~_~~~~____~~~~_~__~~~~~~~~~____~~_~b                                                                                          ",
            "~_~____~~~~~~~_~__~~~__~~__~~~~~~~_~_~~_~_                                                                                         ",
            "~_~~_~_~___~_~____~__~_~~__~__~~~~_~__~_b                                                                                          ",
            "~~~~~~~~~___~__~_~~~~~_~_~_~~~~~~~___~~b                                                                                           ",
            "_~~_~___~_~~~~~~_~__~__~~~~_~~_~~_~___~~b                                                                                          ",
            "_~~_~~~~_~__~__~~~_~~~~_~~__~~~~_~~_~~~~~b                                                                                         ",
            "~_~~~~_~~__~_~~~_~___~___________~_~~_~__~~                                                                                        ",
            "~~~~~~_~_~_~~~_~__~~~~~~~~_~~_~~~_~~~~~~_b                                                                                         ",
            "~~~_~~~~_~~~__~~~__~____~~~_~~~~_~~~~~~___b                                                                                        ",
            "~_~__~~~~~_~~~_~~_~~_~~~_~_~~~~~~_~~~___~~~b                                                                                       ",
            "__~~~~_~~_~~~_~__~____~_~_~_~__~___~~___~_~_b                                                                                      ",
            "~_~~~_~~_~~_~~~~~~__~~~_~~~~~__~_~~_~_~~~~_b                                                                                       ",
            "_~_~~~~_~~~~~_~~_~~~__~_~~~~__~~~_______~_b                                                                                        ",
            "~~~_~_~~__~_~_~~_~~~~_~_~~__~~_~~~~_~~_~~b                                                                                         ",
            "_~_~_~__~~~~_~~___~_~_~~_~~_~__~_~~~~~~~b                                                                                          ",
            "~_~~_____~__~___~~~~_~~~~~~~~__~~_~__~~b                                                                                           ",
            "~_~~_~~___~~~_~~~_~___~~~~~~~___~~~~~_b                                                                                            ",
            "_~~_~_~~~_~_~_~__~_~__~_~__~~_~_~_~~~b                                                                                             ",
            "_~~~~~~________~______~~~___~_~~~_~~b                                                                                              ",
            "~___~~__~_~~~~~__~~~__~~~_~~~~_~_~__                                                                                               ",
            "~~____~~_~~_~_~~_~~~~~~___~_~_~~~__~~                                                                                              ",
            "~~~~~~~~_~~_~~~~_~___~~~_~~_~~_~_~_b                                                                                               ",
            "~__~__~_~~~_~_~~~~___~_~__~_~~__~_~~_                                                                                              ",
            "__~_~~___~~~~~~_~~~~_~__~~~__~_~~~_b                                                                                               ",
            "~~~~__~_~_~__~~_~~_~__~_~~~~~~_~~~b                                                                                                ",
            "~~~~~_~~___~_~__~~~~~~~~~__~_~_~~~_b                                                                                               ",
            "~~~~_~~~~_~_~~_~_~_~_~__~~_~~~~_~_b                                                                                                ",
            "~~_~__~~~~_~_~~~_~___~_~~__~~_~~_b                                                                                                 ",
            "~~_~_~~~__~~~_~_~~~_~~__~____~~~b                                                                                                  ",
            "__~___~_~~~~_~___~~_~~__~_~~____~b                                                                                                 ",
            "__~~~~~~~__~~~_~___~_~~_~~__~_~~~_b                                                                                                ",
            "~~~~__~~~__~_~_~~~~___~~~~__~_~____b                                                                                               ",
            "~~___~~_~______~~~~~_~~~~_~~_~~~_~~_b                                                                                              ",
            "_~_~_~_~_~~~~~~~_~~__~~__~_~~~~_~__~~b                                                                                             ",
            "_~_~~_~__~~~~_~_~~_~__~~~__~~_~~~_~_b                                                                                              ",
            "_~~~~~~~___~~__~~~___~_~~_~~~~___~~b                                                                                               ",
            "_~~__~~~~_~__~_~~~~~~_~~~_~__~_~~~__b                                                                                              ",
            "_~__~~_~~~~__~_~~~_~~~~~_~_~~~___~~~~b                                                                                             ",
            "~~~~~_~~_~____~~___~_~~__~~_~_~~_~__b                                                                                              ",
            "~~~__~~__~_~~__~___~___~~~~__~~~_~~b                                                                                               ",
            "_~_~~~~~~~_~~~__~_~~~__~____~~~~~_b                                                                                                ",
            "___~_~~_~~~_~~~~~_~__~_~_~__~~_~~b                                                                                                 ",
            "____~_~~~~~____~__~~~_~_~~~~___~~_b                                                                                                ",
            "~__~~~___~_~~~~_~~~_~_~~~__~~_~~_b                                                                                                 ",
            "__~~~~~~~~~~~~_~~~~~~~_~_~~~~~_~~_b                                                                                                ",
            "_~____~~~___~~~__~~~~_~__~~~_~_~~~~b                                                                                               ",
            "~~~~~~__~_~_~~~_~_~_______~_~_~_~~b                                                                                                ",
            "___~~~~~~~_____~~~_~__~~~~~~~__~_~_b                                                                                               ",
            "_~__~~_~~~__~__~~~_~~_~__~_~~~~_~~~_b                                                                                              ",
            "~~_~~_~~~___~~_~~_~__~~~___~~_~~~~__~b                                                                                             ",
            "~~~~_~__~_~_~~~_~_~~~~~_~~_~~~~_~~_~~~b                                                                                            ",
            "___~~_~~~~____~~_~_~_~__~~_~__~~~~~~~~_b                                                                                           ",
            "~~__~_~___~~_~_~~~~~__~_~_~~_~___~~__~b                                                                                            ",
            "~~~~~~~~_~~~_~~~~_~_~~~~_~~___~~_____b                                                                                             ",
            "~~~~~__~~___~_~~~_~~_~~~~_~~_~~__~~~_                                                                                              ",
            "__~__~~~~_~~_~_~__~~___~_~~__~~~~~_~_b                                                                                             ",
            "~~~~~~~_~__~~_~__~~~~_~~~_~_~_~_~~~~~_b                                                                                            ",
            "_~~_~__~~~_~~~~~_~~__~~_~_~~_~_~_~~~_~_b                                                                                           ",
            "_~~_~~_~~~_~__~~~_~_~__~_~~~~__~_______~b                                                                                          ",
            "~___~_~_~~~_~~___~~_~_~~~__~~~____~~~_~~_b                                                                                         ",
            "~_~~_~_~_~~_~~~_~_~~__~~__~~~____~~~_~~_b                                                                                          ",
            "__~~~______~_~~~_~_____~~~~__~_~~~____~b                                                                                           ",
            "~~_~~~_~_~_~_~~____~_~___~~_~~~__~_~_~b                                                                                            ",
            "__~~__~_~~~__~~~~~~~__~~~~~___~~~~_~_b                                                                                             ",
            "_~_~~~~_~____~~~_~_~_~___~_~~~~~~~~_~~b                                                                                            ",
            "_~_~~_~__~~_~_~~__~~~~~_~~~~__~~~~~~_b                                                                                             ",
            "~_~__~~__~~_~~_~~_~~_~_~_~__~~__~_~_~~b                                                                                            ",
            "___~__~~~~~~_~~~___~__~~~~_~~_~~~_~_~b                                                                                             ",
            "~__~~~~_____~_~~~~~~~~~____~_~~_~___b                                                                                              ",
            "~~_~__~~_~~~~~~~____~~~~~~~~~~_~~__b                                                                                               ",
            "~~~~___~_~~~~~_~~_~~_~~~~__~__~~~~b                                                                                                ",
            "~~_~~_~~~_~~~~~~_~~__~~_~~~~___~~b                                                                                                 ",
            "____~~~_~_~~_~~~____~~~_~~~~_____~b                                                                                                ",
            "___~_~~~_~__~~_~~__~__~_~_~~__~_~b                                                                                                 ",
            "~~~__~~~~~~_~~_~~~~~~__~_~_~~__~b                                                                                                  ",
            "_~__~~___~_~_~~~~_~_~~~~~_~__~_b                                                                                                   ",
            "_~_~~~~_~_~~~~~~~_~~_~~___~___b                                                                                                    ",
            "_~__~~~~~~~_~_~~__~_~_~___~__~_b                                                                                                   ",
            "_~~~__~~__~_~~_~~_~~~~_~_____~~                                                                                                    ",
            "~_~~~~~~__~~~~~~~~~______~__~~~b                                                                                                   ",
            "___~_~__~_~_~_~~~~~_~~_~~~~~~~b                                                                                                    ",
            "~_~~~~__~~__~_~_~~_~~~__~_~~_b                                                                                                     ",
            "~~~~_~~~~~~~~~~__~~~~~~~~__~~b                                                                                                     ",
            "~~~_~~~~_~~~____~__~~~_~_~~~~b                                                                                                     ",
            "_~~~__~__~__~~_~_~~~~__~__~~~~~                                                                                                    ",
            "~~~__~~_~~~~~~~___~_~~~__~~~~b                                                                                                     ",
            "~~~~___~_~~~~~~~~~~__~~~_~~~~b                                                                                                     ",
            "~___~_~~___~_~~~~~~_~~_~__~~~b                                                                                                     ",
            "~_~~~__~~_~~__~~___~~_~~~~~~~_b                                                                                                    ",
            "~___~~___~~____~_~~~_~~~~~~~~~_b                                                                                                   ",
            "_~_~~~_~~~_~_~~~_~~~~~~~~_~~~~~_b                                                                                                  ",
            "~~_~_~_~__~_~_~~_~_~_~~~_~_~_~~b                                                                                                   ",
            "_~_~~____~~~~~~~~~~~_~_~~~~~~~~~b                                                                                                  ",
            "___~_~_~___~~_~~~_~~~~~~~_~~~~~b                                                                                                   ",
            "~_~__~_~~___~~~~~__~~_~~~___~_~_b                                                                                                  ",
            "_~_~~~____~_~~_~~_~~_~~~~~~_~~~b                                                                                                   ",
            "~~~~_~~~~~_~_~~__~~~__~___~___b                                                                                                    ",
            "~~___~~~~~~~_~____~_____~~_~~b                                                                                                     ",
            "~_~__~_~~~~~_~~__~~_~~~~~~~_~b                                                                                                     ",
            "~~~_~~~_~~~___~~~~~~~_~~~~~~~b                                                                                                     ",
            "~_~~~~~~~~~___~__~__~~~_~_~_~~b                                                                                                    ",
            "~~~__~~~~__~~_~~__~~__~~~~_~_b                                                                                                     ",
            "~~__~_~_~__~____~~__~__~~__~_b                                                                                                     ",
            "~~~__~~~_~_~~~~__~~~~_____~~~~~                                                                                                    ",
            "_~~~_~~~_~~_~~~~~_~~~_~_~_~~~b                                                                                                     ",
            "~~_~_~~_~~~~~~_~~___~_~~~_~___                                                                                                     ",
            "______~~~__~~_~~__~_~~~~~~~~_~~                                                                                                    ",
            "~~_~~_~~~_~~_~~~~~~~~~_~~~~_~b                                                                                                     ",
            "_~~__~_~~~_~~_~~~~__~_~~_~~~_~~                                                                                                    ",
            "~_~_~~~~_~~~~____~~~__~___~~~__b                                                                                                   ",
            "~~_~__~_~~~____~~_~~_~~_~_~~__b                                                                                                    ",
            "~_~~___~_~~~~~~~__~_~____~~~~b                                                                                                     ",
            "_~___~~_~~~~~_~~___~_~~~~~~~~b                                                                                                     ",
            "~~~___~~__~___~~~_~~~~~~~~_~_~b                                                                                                    ",
            "_~_~_~~~__~____~~_~_~~~_~~~_~b                                                                                                     ",
            "~~~_~~~~_~_~_~~~~~~~_~_______b                                                                                                     ",
            "~~~_~__~~~~~~___~__~~__~~~~~~b                                                                                                     ",
            "_~~~_~_____~_~_~__~~~______~~b                                                                                                     ",
            "_~~~~~__~__~~_~__~~_~~~__~~~~~b                                                                                                    ",
            "~~___~~~~___~_~~~___~_~~~~~__~~b                                                                                                   ",
            "__~_~~__~~~_~~~~~_~~~~__~~_~_~b                                                                                                    ",
            "~~___~~_~~~~____~~_~_~_~~_~~~b                                                                                                     ",
            "~_~~~_~~~__~~~~~~~_~~~~~__~_~~                                                                                                     ",
            "__~~_~_~~~__~_~~_~__~~__~__~~b                                                                                                     ",
            "~__~~~~~~~_~~__~~_~~_~~__~~__b                                                                                                     ",
            "_____~~~_~~~~___~_~~~~~__~~~~_b                                                                                                    ",
            "~_~_~__~_~~_~_~_~~~~~~~~~__~~b                                                                                                     ",
            "~~~_~_~~~~~_~~~~~~~~~~_~~~_~~b                                                                                                     ",
            "__~_~~_~~_~~~~~_~~__~~~__~~~_b                                                                                                     ",
            "___~_~~~~~~~__~__~~_~_~___~~_b                                                                                                     ",
            "~~_~~~_~____~~~____~~~~_~~__~b                                                                                                     ",
            "~~____~_~~___~_~~__~~~~~_~_~_b                                                                                                     ",
            "~__~~~~~_~~~~~~~_~~~_~_~~~__~b                                                                                                     ",
            "__~_~~~~__~~____~~~_~_~~___~~_b                                                                                                    ",
            "__~~~~~_~_~~~~~~~~__~~~____~_~~~                                                                                                   ",
            "~~~~~~_~__~___~~~_~___~___~__~b                                                                                                    ",
            "~__~~_~~__~_~~_~~~~~_~_~~___~b                                                                                                     ",
            "~~~~~_~_~~~_~~~~__~__~_~_~~~_b                                                                                                     ",
            "_~~__~__~_~_~_~~__~_____~~_~_b                                                                                                     ",
            "~~~~_~_~~~~_~~~__~~~~~~_~~~~~b                                                                                                     ",
            "_~____~~~~~~__~_~~~_~~__~_~~_b                                                                                                     ",
            "~_~~_~_~_~__~__~~~~~__~_~~~_~b                                                                                                     ",
            "___~~_~~~~~_~~~__~~~~~~_~~~_~b                                                                                                     ",
            "~~~~~~~~_____~~~~~~~~_~~~~~~~b                                                                                                     ",
            "_~~~~~~~~~___~__~~~_~~__~~~_~~                                                                                                     ",
            "~~_~~~_~~___~~~_~_~~____~___~b                                                                                                     ",
            "~~~_~__~_~_~~~~~~_~~___~~~__~~b                                                                                                    ",
            "_~~~~~~__~~~_~~_~~________~~__                                                                                                     ",
            "___~_~~__~__~____~~~~~~_~~~~_b                                                                                                     ",
            "_~~~~_~~~~_~~~~_~~_~_____~__~b                                                                                                     ",
            "__~_~~~~~_~~_~_~_~_~_~~~~~~~_b                                                                                                     ",
            "_~~~~_~_~__~__~~~_~__~_~_~~_~b                                                                                                     ",
            "_~~~_~~_~~~~~~__~_~~__~~~_~~_~b                                                                                                    ",
            "___~~____~~~~~~_~__~~_~~~__~~~~b                                                                                                   ",
            "~~~~~___~~_~~~~~~~_~~____~~_~~__b                                                                                                  ",
            "___~_~~~_~__~_~~~~~~~_~__~~_~~~b                                                                                                   ",
            "~~~_~~_~~~~~~~~~_~~_~_~~__~~~_~_~                                                                                                  ",
            "_~_~~~~~_~_~~~~~~~__~_~~~~~_~~~b                                                                                                   ",
            "__~~_~~__~~_~_~_~~__~~__~_____~~b                                                                                                  ",
            "_~~~~~~_~~~~~~__~__~~~~__~~__~~~_b                                                                                                 ",
            "~~~~~~~_~~~~___~~__~~~_~~~_~~~_~b                                                                                                  ",
            "~~~_~__~~~_~~_____~~~~___~_~__~b                                                                                                   ",
            "~~_~~~_~~_~~___~_~_~__~~~_~_~_~_b                                                                                                  ",
            "~~~~~_~_~~~~~__~~~~~__~__~___~_~~~                                                                                                 ",
            "_~_~_~~____~~___~~_~~~~__~_~_~~~b                                                                                                  ",
            "~_~~~_~~_~_~____~~~~~~_~~~~~~__b                                                                                                   ",
            "_~_~~~~_~~~~~__~__~~_~~~~_~~~~b                                                                                                    ",
            "~_~~_~___~__~_~_~_~_~~~~~~_~~b                                                                                                     ",
            "_~__~~~~~_~~_~~__~____~~~~_~~_b                                                                                                    ",
            "~~_~~~_~~~__~___~_~~~__~____~b                                                                                                     ",
            "_~_~~~~~~~~~~~~~~_~___~_~__~~b                                                                                                     ",
            "_~~~~~_~~_~_~~~~_~__~~~~__~__b                                                                                                     ",
            "_~~_~~_~_~~___~~__~~~__~~~_~_b                                                                                                     ",
            "___~~~~___~_~~~_~__~_~~_~~~~__b                                                                                                    ",
            "_~_~~~__~~~~__~~__~~___~~____b                                                                                                     ",
            "~~~___~~~~_~_~~~~~_~_~~~~_~~~b                                                                                                     ",
            "___~~__~_~_~~~~_~~~~_~~~____~~b                                                                                                    ",
            "~~~__~~~~__~~~~~__~~_~_~~~~~~~~b                                                                                                   ",
            "__~_~~_~~~~~~~__~~~___~__~~~_~b                                                                                                    ",
            "~~~~_~~_~____~~~~___~~__~_~~_~                                                                                                     ",
            "_~~__~~_~_~__~__~__~___~__~_~~                                                                                                     ",
            "~~~____~___~_~___~~_~~_~~~_~_b                                                                                                     ",
            "~~~~~~~_~~~~__~~~_____~~_~~__b                                                                                                     ",
            "~~~__~_~~_____~~~___~~~~~~~~~~b                                                                                                    ",
            "_~~~~_~~~~~~~~_~_~_~_~~______b                                                                                                     ",
            "~~__~_~~~~_~~~~~~~_~_~~~__~~~b                                                                                                     ",
            "~__~_~~~__~__~_~_~~_~___~__~~~b                                                                                                    ",
            "_~_~~__~__~__~___~~___~~_~~~_b                                                                                                     ",
            "~~__~_~~~_~_~_~_~~_~~~_~~~~_~_b                                                                                                    ",
            "_~____~~_~~~~__~_~~~___~~~~~~b                                                                                                     ",
            "~__~~_~~~__~~_~~~~~~_~~__~_~~b                                                                                                     ",
            "~~~~~~_~_~~_~_~~~_~~~~~~_~~~_b                                                                                                     ",
            "_~__~~_~___~__~~_~_~_~~~_~_~_~b                                                                                                    ",
            "_~~__~~~~~~~~__~~~~~~~__~___~b                                                                                                     ",
            "~~~~~~~__~~~~~~_~_~__~~~~~_~_b                                                                                                     ",
            "~~~~~_~~~~~~~~~~~~____~~~~___b                                                                                                     ",
            "___~_~~____~_~~__~~___~____~_~b                                                                                                    ",
            "_~_~~~~~_~~_~~~~_~~___~_~~~~_b                                                                                                     ",
            "_~~~_~_~~_~_~__~~~~~~~~~__~~~~                                                                                                     ",
            "~~~~~_~_~__~_~__~~~_~~___~~~~b                                                                                                     ",
            "~~_~~~~~~_~~~~~__~~~__~_~~_~~b                                                                                                     ",
            "_~_~___~~_~_~~~~~~~__~_~__~__~                                                                                                     ",
            "~~__~~__~__~~_~~~_~__~_~~_~___b                                                                                                    ",
            "_~___~~_~~~~~~__~~~_~~~~~~___b                                                                                                     ",
            "~_~~_~__~_~~~~___~_~~~__~~~~~b                                                                                                     ",
            "~~~~~~___~~~~~~_~_~__~____~~~b                                                                                                     ",
            "~_~~___~__~___~__~__~~~___~~~b                                                                                                     ",
            "~~_~~~_~__~~~~~_~_~~___~~~_~~~b                                                                                                    ",
            "~~~_~~~~~~_~_~~~_~~_~~~~~____~~b                                                                                                   ",
            "_~~_~__~_~~~_~__~__~______~_~__                                                                                                    ",
            "~~~~~~~~~~_~~~~_~~~~~~~_~~_~_b                                                                                                     ",
            "~__~~_~~_~__~_~_~___~~__~~~~~b                                                                                                     ",
            "~_~__~_~~~___~~__~~~__~____~~~b                                                                                                    ",
            "~_~_~~_~~______~~~~_~_~~~~___~_b                                                                                                   ",
            "~_~~~___~~~~_~~~~_~___~~___~_~b                                                                                                    ",
            "__~~_~~__~_~~~~~~_~___~_~_~__~~~                                                                                                   ",
            "~~_~~~_~~___~~~~_~~~~~~__~~~__b                                                                                                    ",
            "___~_~~__~_~_~~~~~~~_~~~__~~_~_b                                                                                                   ",
            "~_~~__~~~~_~_~__~_~~_~~_____~_~_b                                                                                                  ",
            "~~~__~__~~~_~__~_~~__~~~__~____~_~                                                                                                 ",
            "_~~__~_~~___~~~~~__~_~~_~~_~~~~~b                                                                                                  ",
            "~~~~_~~_~_~~~~~~_~_~_~~~~_~~~~_b                                                                                                   ",
            "~~~~__~~_~~~~_~~_~_~~~~_~~~_~_b                                                                                                    ",
            "_~~~~~~~~___~~~~~~~__~___~___b                                                                                                     ",
            "~~~______~~_~_~~~___~_~~~~~~__b                                                                                                    ",
            "_____~~~~~~~~_~___~~___~~~__~~_b                                                                                                   ",
            "__~~~_~~~~_~__~____~~__~~_~~_~b                                                                                                    ",
            "~~~__~~~__~~~_~~~~~__~__~~__~b                                                                                                     ",
            "__~~_~~_~~__~~~~_~~__~_~_~~_~b                                                                                                     ",
            "_~~~__~~_~~~~~_~~_~~~_~_____~_                                                                                                     ",
            "~__~__~~~~__~_~~_~~~~___~____b                                                                                                     ",
            "_~__~~~~~~__~~~~~~~_~_~__~_~~b                                                                                                     ",
            "~~__~~__~_~__~____~~~~~~__~~~b                                                                                                     ",
            "~~_~~_~__~_~_~~_~~~~~~_~_~~__b                                                                                                     ",
            "~_~~~_~~_~~_~_~~_____~~~~~_~_~b                                                                                                    ",
            "~~~~~~__~_~_~~~~~~~~__~~_~~~~b                                                                                                     ",
            "___~~~___~~~~_~___~___~_~~~~~b                                                                                                     ",
            "_~~_~~_~~~~___~_~_~~~___~~~~~b                                                                                                     ",
            "___~~_~~~___~~____~~_~~~~__~_b                                                                                                     ",
            "~_~__~~~_~~__~_~~~_~~_~~~~~~~~b                                                                                                    ",
            "~~_~~~_~~~~_~_~_~~~~~~~~~__~_b                                                                                                     ",
            "__~____~~~~~~~_~~~~__~~~~_~_~b                                                                                                     ",
            "~~~__~__~_~___~~~_~~~~~~~_~~_b                                                                                                     ",
            "~_~_~_~_~~~~~_~~~__~~~_~___~~_b                                                                                                    ",
            "~____~~~__~_~~~_~~__~~_~~~___b                                                                                                     ",
            "~~~_~_~~~~~~~~~__~~~_~~__~~__~b                                                                                                    ",
            "~~~_~~~____~~~~__~~_~__~~~_~___~                                                                                                   ",
            "__~~_~__~~~~__~~_~~_~_~~~__~_~_                                                                                                    ",
            "~~___~~__~_~~~__~_~_~~~~_~_~_b                                                                                                     ",
            "~__~__~~~__~~___~_~~~_____~~_b                                                                                                     ",
            "~~___~~~___~~~~~__~_~~~~~~~~_b                                                                                                     ",
            "~~__~~~~~_____~~~___~~__~~~~~b                                                                                                     ",
            "~~~~_~__~_____~~____~~_~__~_~~b                                                                                                    ",
            "~~~~~~_~_~~~~_~~~__~__~__~~~~b                                                                                                     ",
            "~~~__~~~~~~_~~~_~_~~~~~_~_~~~~b                                                                                                    ",
            "~~_~~_~_~~~~~___~~_~~~~___~__~~_                                                                                                   ",
            "~~~~_~~~_~__~~__~_~~~~~_~~~_~~~~b                                                                                                  ",
            "~_~_~~~_~~_~~__~_~~~~~_~~~~_~__b                                                                                                   ",
            "_~~~~~~~~~~__~~_~~__~~~_~~_~~_b                                                                                                    ",
            "~~____~_~~___~~~~_~__~_~_~_~_b                                                                                                     ",
            "_~~~_~_~~_~~_~~~_____~_~_~~_~b                                                                                                     ",
            "~______~__~~__~_~~~_~___~~__~b                                                                                                     ",
            "_~~~~___~~~_~~~_~~~~~~~~~~~~~_b                                                                                                    ",
            "~__~~~__~~~__~_~~~_~_~~~~~~~_b                                                                                                     ",
            "__~~~~~___~_~_~~_~_~_~~~~~~__b                                                                                                     ",
            "~~_____~____~~~~__~~___~_____~b                                                                                                    ",
            "~_~~~~~~___~~~~__~_~~~~_~~___b                                                                                                     ",
            "_~_~_~_~~~_~__~~~~___~~_~_~~_~b                                                                                                    ",
            "_~~_~___~~~_~_~___~~_~~~~_~___~b                                                                                                   ",
            "~~~~~~_~~_~~~~~~_~~_~__~__~_~~~_b                                                                                                  ",
            "_~_~~____~~~_~_~_~~~___~__~_~_~_~b                                                                                                 ",
            "_~~~~~~_~___~__~~_~_~_~_~~_~~___b                                                                                                  ",
            "___~_~__~___~~__~_~~~~~_~_~~___~~b                                                                                                 ",
            "_~____~_______~~_~_______~~~~_~~~~b                                                                                                ",
            "~~~~_~~__~~_~~__~~~__~__~~~_~~__~b                                                                                                 ",
            "_~~_~__~_~~_~~_~__~~~~~__~~_~~_~~~b                                                                                                ",
            "~_~~___~~~__~~~_~_~~_~~~~~_~_~___b                                                                                                 ",
            "_~~~~~~_~~_~~~~~~~_~_~~~~~~~_~~~_~b                                                                                                ",
            "_~_~~__~~_~_~____~~~~~~~_~_~____~b                                                                                                 ",
            "_~_~_~__~_~~~~_~~~___~_~~~_~_~~~b                                                                                                  ",
            "~~~_~__~~~~~~_~~~__~~~_~~__~~~~_                                                                                                   ",
            "~~~___~~_~~_~_~~____~~__~_~~~~b                                                                                                    ",
            "~~~~~~~~~~_~~~~_~__~~~~_~~~~__                                                                                                     ",
            "___~~_~~~_~__~~~~~_~~_~~~_~~~b                                                                                                     ",
            "~~~~~~_~~~~~~~_~~_~~_~_~~____b                                                                                                     ",
            "_~~~_~_~~_~~_~__~__~~_~__~~~~b                                                                                                     ",
            "___~__~~_~___~~_~~~~~_~~~__~~~b                                                                                                    ",
            "__~~~_~_~_~_~~_~__~_~~_~__~_~_~b                                                                                                   ",
            "~_____~~~~~_~__~~~~~~~~~~~~~~~b                                                                                                    ",
            "~_~~__~~_~_~~~~__~~~_~~_~_~~~~~b                                                                                                   ",
            "~~~_~~~~_~~_~_~~~__~~__~~_~~_~b                                                                                                    ",
            "~_~___~~__~~~~~_~__~~_~_~~_~~b                                                                                                     ",
            "___~~_~~_~~~~~__~~~~_~~___~~~b                                                                                                     ",
            "_~~~~_~~~~~_~_~~~_~~__~~~__~~~b                                                                                                    ",
            "~~_~~~~_~~~_~~__~~~____~~_~__b                                                                                                     ",
            "_~~__~~~_~~~__~~___~~~~~___~~b                                                                                                     ",
            "~~~~___~_~_~~~~_~_~~_~~~__~_~_b                                                                                                    ",
            "_~~~_~~~~_~_~_~_~_~~~_~_~___~__b                                                                                                   ",
            "~~__~~_~~___~__~_~~~~_~~~__~__b                                                                                                    ",
            "~__~~_~_~__~~~_~_~_~___~~_~~~~_b                                                                                                   ",
            "____~~_~__~___~~_~~_~~~_~~_~~~~                                                                                                    ",
            "_~~_~_~~~__~_~___~_~_~_~~~~_~b                                                                                                     ",
            "_~~~~_~__~__~_~__~~_~~__~_~_~b                                                                                                     ",
            "_~__~~_~_~~~_~~~~__~__~__~_~_b                                                                                                     ",
            "~~__~~_~~~_~~_~_~_~__~___~_~__~                                                                                                    ",
            "~~_~~~______~~~_~~~~~__~~____b                                                                                                     ",
            "~~~~_~_~__~~__~_~_~~~_~~~~~_~b                                                                                                     ",
            "_~~_~~~~~_~~~~___~~__~_~~~~~~b                                                                                                     ",
            "_~~~_~____~__~~~~~~__~_~~~~~~b                                                                                                     ",
            "~_~~____~_~~___~~__~~_~~~_~_~b                                                                                                     ",
            "~__~~~~_~~_~_~__~_~__~__~~~__b                                                                                                     ",
            "__~____~_~_____~~~__~__~~~~__b                                                                                                     ",
            "_~~_~~~~__~~~_~__~~__~~__~_~_b                                                                                                     ",
            "__~~~_____~___~___~~~~~~_~~__~b                                                                                                    ",
            "~~_____~_~~_~~~~_~~_~~~~~_~~~~_b                                                                                                   ",
            "~__~~__~~~~_~___~~~_~~~_~~_~~~b                                                                                                    ",
            "__~~~_~_~_~_~~__~~~__~~~~____b                                                                                                     ",
            "~__~__~~~~~~~_____~_~~__~_~__b                                                                                                     ",
            "_~~~~~~~~__~~~~_~_~___~~~~____b                                                                                                    ",
            "~__~~__~____~_~_~~_~~~___~___~~b                                                                                                   ",
            "~~_~~~_~~~~_~_~_~__~~~___~~~_~b                                                                                                    ",
            "__~__~~_~~~~~~_~~~~_~~__~_~_~b                                                                                                     ",
            "~__~~~~~__~~~__~_~___~_~~~~_~b                                                                                                     ",
            "~~__~__~___~_~_~~~~_~~__~~__~b                                                                                                     ",
            "~~_~_~_~__~~_____~_~~_~_~~~_~~b                                                                                                    ",
            "~~_~~_~_~~~__~~_~~_~_~~~__~~~b                                                                                                     ",
            "____~_~_~~__~_~_~~~~~~~___~~~b                                                                                                     ",
            "___~_~~~__~__~_~~~~___~___~~_b                                                                                                     ",
            "~~~__~~~_~_~~__~_~~~_~_~~_~_~~                                                                                                     ",
            "~_~~_~_~~~~_~~_~~~~__~~~____~_b                                                                                                    ",
            "~~~~~~__~~~__~~_~__~_~~~~~~_~~_b                                                                                                   ",
            "_~_~~_~_~~~~_~__~_~~_~_~_~~~__~~b                                                                                                  ",
            "~~~~_~~_~~__~_~__~~~_~__~_~~___b                                                                                                   ",
            "_~~~__~_~__~~~____~_~~__~~____~~_                                                                                                  ",
            "_~~~~~~___~___~_~__~~~~_~_~~~_~b                                                                                                   ",
            "~~~~~_~_~__~~~~~_~~~__~__~~_~~b                                                                                                    ",
            "__~~~~~_~~~~____~__~_~_~___~~b                                                                                                     ",
            "~_~~___~~___~_~~_~_______~_~~b                                                                                                     ",
            "___~_~_~_~~~_~~~_~__~~__~~~~~b                                                                                                     ",
            "_~~_~~___~__~~~__~_~~~__~__~~~                                                                                                     ",
            "_~~_~~~__~~_~~~_~~_~___~___~~~b                                                                                                    ",
            "~~~_~~_~~_~_~~~_~~~~~~__~~~~~~~b                                                                                                   ",
            "~~~~_~_~~_~~~_~_~~~_~__~~~~~~~_~b                                                                                                  ",
            "~__~~____~~~~~__~~~_~__~~__~_~~__b                                                                                                 ",
            "_~__~~~_____~~__~~_~__~~__~_~~_~b                                                                                                  ",
            "~_~~~___~~~__~~~~_~___~_~~__~~~~~b                                                                                                 ",
            "~~~__~__~~_~_____~__~~_~__~~_~~~b                                                                                                  ",
            "_~~_~~~_~~~~~_~_~____~____~~~_~b                                                                                                   ",
            "__~~_~~_~~~~__~~~~~__~___~~_~___~                                                                                                  ",
            "~_~~~~_~_~_~~~~~_~~~~~_~_~_~__~b                                                                                                   ",
            "_~~___~___~_~~~~_~~~~__~_~~~__b                                                                                                    ",
            "~_~_~~_~~~_~~~_~~~~~____~~_~~_~b                                                                                                   ",
            "_~~___~~~~~_~_~_~~_____~_~~~~~~~b                                                                                                  ",
            "~~__~~_~_~__~~__~~~~~~_~_~__~_~~_b                                                                                                 ",
            "~~~~~_~_~~_~__~__~~~~~__~~~_~~~_b                                                                                                  ",
            "~__~~~~~~~~~____~~_~__~__~__~~_~                                                                                                   ",
            "~~~~~_~_~~~_~~~~__~~~_~_~_~__~_~b                                                                                                  ",
            "_~_~~_~~~~~_~__~~__~~~~~_~_~_~~b                                                                                                   ",
            "~~_~__~~~~~_~~~~___~~_~~_~~~_~b                                                                                                    ",
            "~_~~_~~___~~_~~___~~~__~~~~~~~                                                                                                     ",
            "~~~_~~~_~_~_~~~~_~~_~__~__~_~_b                                                                                                    ",
            "~____~_~_~~~~~_~_~~_~~~~~~_~~~~b                                                                                                   ",
            "~~_~~~~_~~__~___~_~~_~_~~~_~~_b                                                                                                    ",
            "_~__~~~___~~_~~~~~~__~~~~~~~_b                                                                                                     ",
            "~_~~__~_~~~~~~_~~~~~~_~~~__~~~b                                                                                                    ",
            "___~~~~_~_~~~_~__~~___~_~___~b                                                                                                     ",
            "~~~~~_~~__~~___~__~_~~~~~~___b                                                                                                     ",
            "~~~~~_~~_~__~~~~____~___~~~~_b                                                                                                     ",
            "~~~___~~~~_~_~~~~___~~_~__~~__~                                                                                                    ",
            "~~~_~~__~~~__~~_~_~___~~~~~~_b                                                                                                     ",
            "_~~~~~_~~~~__~__~_~_~_~~_~___b                                                                                                     ",
            "____~~~~_~~_~___~~~__~_~_~~~_b                                                                                                     ",
            "~~_~_~_~~~~_~~__~~~_~~__~~~_~~b                                                                                                    ",
            "~_~____~~~_~~_~~~~~___~_~~___b                                                                                                     ",
            "~~~~~~_~~~_~~~~~_~~~_~~__~~~~b                                                                                                     ",
            "~~_~_~~__~~___~~~~__~__~~~~_~~                                                                                                     ",
            "~_~_~~~~~~~__~~_~__~~~____~___b                                                                                                    ",
            "_~~____~~~~_~_~~_~~~_~~_~~~____b                                                                                                   ",
            "~~_~~~~~__~~_~_~__~~~___~_~____~b                                                                                                  ",
            "~_~~~~~~~~~_~~~~__~___~~__~______b                                                                                                 ",
            "~~~~~_~~~__~_~~_~~~~~~~___~~~~~~b                                                                                                  ",
            "_~~~_~_~~~~~~~~~_~~______~~_~~~b                                                                                                   ",
            "_~___~~~~~~_~_~~~__~_~~~~~~_~___b                                                                                                  ",
            "~~~~~~~~~__~_______~~~~~~~__~~~~~b                                                                                                 ",
            "___~~~~~~_~___~~__~_~~_~~__~_~~~b                                                                                                  ",
            "~______~~__~~__~~~~_~___~__~~_~~__                                                                                                 ",
            "~~~~__~~~_~~~~~~~~_~~~~_~~_~~__~b                                                                                                  ",
            "~~~_~~~~~~~____~~~~~~__~~~~__~~b                                                                                                   ",
            "~~_~~~______~~~~~_~_~~~~___~~~b                                                                                                    ",
            "_~__~~_~__~~~~~__~_~_~___~~~_b                                                                                                     ",
            "~_~~~~~~~_~~__~~~~_~__~_~~~__~                                                                                                     ",
            "~~_~_~~~~~~__~~~~__~_~~_~___~b                                                                                                     ",
            "~~_~~~~_~_~__~__~~___~~____~~b                                                                                                     ",
            "_~_~~~__~~~~_~__~~__~___~~___~b                                                                                                    ",
            "~__~_~__~~_~~_~~____~~~~~~_~~b                                                                                                     ",
            "_~_~_~~~_~__~_~~~~~_~~~~_~___~b                                                                                                    ",
            "_~_~_~~~~~_~~_~~~_~~_~_~_~_~~~~b                                                                                                   ",
            "~_~~_~~_~~__~_~~___~~~~~~_~__~b                                                                                                    ",
            "~~~_~~~~~~~~~~_~~~__~~__~~~~~b                                                                                                     ",
            "_~~__~~~~~~___~~___~~_~__~~_~b                                                                                                     ",
            "~_~~____~~~~___~~_~_~~~_~~_~~b                                                                                                     ",
            "_~~~~~~__~~__~~~__~~_~_~~~~~~b                                                                                                     ",
            "~__~~~~___~~_~__~_~_~~__~~~~__b                                                                                                    ",
            "_~__~~~~~~~~__~~~~~_~_~_~__~~b                                                                                                     ",
            "_~__~~~_~~~~__~__~_~~__~___~~~b                                                                                                    ",
            "~~_~___~~__~_~__~~~~~_~~~___~b                                                                                                     ",
            "~~_~~~___~_~___~~~_~_~~_~~__~_~                                                                                                    ",
            "___~_~_~~~___~~_~~_~~_~~_~~~_b                                                                                                     ",
            "~~____~~_~~__~~~~~~_~~__~_~~_~b                                                                                                    ",
            "~~~~_~~_~__~~~~~~__~__~~~__~__                                                                                                     ",
            "_~~~~__~~~~~~~_~~_~_~~~___~_~~~                                                                                                    ",
            "~~~__~____~__~_~__~~_~__~_~~_b                                                                                                     ",
            "~_~_~~~~__~~~~____~_~_~~__~~_~b                                                                                                    ",
            "~____~~__~~___~~~_~_~~____~~~~_b                                                                                                   ",
            "~~~~_~_~___~~_~~__~_~~~~~~____b                                                                                                    ",
            "_~~~~~~_~~_~~~~~~~~~~___~~~_~_~b                                                                                                   ",
            "__~~_~_~~___~_~~~__~~~_~_~___~~~b                                                                                                  ",
            "~~_~~~~~~~~~~~~____~~~_~~~~_~_~b                                                                                                   ",
            "_~_~~~_~~__~__~~~_~~~__~____~~~_b                                                                                                  ",
            "~~~~~~~~~__~___~~~_~_~~_~___~_~b                                                                                                   ",
            "~~~__~~~~~~~__~__~~~~~~~__~_~_~~b                                                                                                  ",
            "~~~_~___~_~~__~__~_~_~~_~~_~~_~b                                                                                                   ",
            "~__~~_~~~~~~~_~~~~_~_~~_~_~__~b                                                                                                    ",
            "~_~~~~~_~_~~~_~~~__~~~~~~~~~~b                                                                                                     ",
            "~~_~~~~_~_~~__~__~~~_~~~~~~_~~~                                                                                                    ",
            "~~_~~__~__~~~_~~~~~~~_~~~~~~___b                                                                                                   ",
            "~_~~~_~~~~__~~__~_~~__~_~___~~b                                                                                                    ",
            "_~_~_~_~~~~__~~_~~___~~_~__~_~_b                                                                                                   ",
            "_~~__~__~~~~__~__~~_~_~____~~_~~b                                                                                                  ",
            "_~~~_~_~~_~_~____~_____~__~~~____b                                                                                                 ",
            "_~~~__~~~__~__~_~___~__~~~~_~_~_~~b                                                                                                ",
            "~~___~~__~~_~~__~__~_~~_~~_~~____~                                                                                                 ",
            "__~_~_~__~_~~~__~_~~_~~~~_~~~~~~b                                                                                                  ",
            "~~_~_~_~___~~~~~~_~~~~~_~~~~_~~~_b                                                                                                 ",
            "~~~~~~_~~~_~~_~_~_~_~___~~~~~~~_b                                                                                                  ",
            "~~~___~_~~~~~~~~__~~__~~_~~~~_~b                                                                                                   ",
            "_~_~____~__~~~___~~~_~_~~__~__b                                                                                                    ",
            "__~~_~~~~_~~~_~_~~~~~~~~__~_~~_b                                                                                                   ",
            "_~_~_~_~~__~~_~__~~~___~~~__~~b                                                                                                    ",
            "~_~~_~~~___~~~~~~~~__~_~_~~~~~~b                                                                                                   ",
            "~__~~~~~___~_~_~____~~~_~~~~__~~b                                                                                                  ",
            "~~~__~_~_~_____~_~~~~__~_~_~_~~b                                                                                                   ",
            "~~~~___~_~~_~_~~~~~_~___~_~~~__~b                                                                                                  ",
            "~_~~___~_~~~____~_~_~~~_~~~~___b                                                                                                   ",
            "_~~~~~~__~~__~_~~~_~~_~_____~~~~_                                                                                                  ",
            "___~____~__~_~~~~~_~~_~~~~_~~_~_~b                                                                                                 ",
            "__~~~~~_~_~_~~~___~~_~~_~~_~~~~~~~b                                                                                                ",
            "_~~_~~~___~_~~~__~~~~__~__~_~~__~b                                                                                                 ",
            "~~_~__~_~~_~~_~~~~_~_~~_~~__~___b                                                                                                  ",
            "_~__~_~_~_~_~__~~~~~~~~~~~_~_~__~b                                                                                                 ",
            "~~~____~~_~~~_~~~~~~_~_~~~_~_~~~__b                                                                                                ",
            "~~~__~_~____~~~~~~~~_____~~~~__~~b                                                                                                 ",
            "~_~~_~~_~~~~__~~~_~_~__~~__~~~_~b                                                                                                  ",
            "~~~~~~~~~~~~_~~~~~~~_~__~_~~~_~_~b                                                                                                 ",
            "_~~~~~~~~__~~~__~~~~_~~_~_~_~_~__~b                                                                                                ",
            "~~____~~___~_~~_~__~~~~~~~__~_~_~b                                                                                                 ",
            "~~_~__~~~_~_~~__~_~~~~_~~~__~_~~b                                                                                                  ",
            "~~~~_~~~~~~_~~___~~~~~_~~_~~~__~~b                                                                                                 ",
            "~~_____~~~~_~_~__~_~__~~~~_~___~b                                                                                                  ",
            "_~~~~~_~~~_~~_~_~~_~~_~~_~__~~~__b                                                                                                 ",
            "~~_~~~~~_~~~~~_~_~~~_~~~~__~~~__b                                                                                                  ",
            "__~__~___~~_~~_~~_~_~~~~~~~~__~b                                                                                                   ",
            "__~__~__~_~~_~~~~~~~~~__~_~~~_b                                                                                                    ",
            "~~___~_~__~~~~~___~~~~~~~~____~b                                                                                                   ",
            "~_~______~~_~__~_~~~~~_~~~~___b                                                                                                    ",
            "_~~~~~__~~~_____~_____~_~~~_~~b                                                                                                    ",
            "~~__~___~_~__~_~_~_~_~_~_~__~_b                                                                                                    ",
            "~~~___~~__~~__~~__~~__~~~__~~_b                                                                                                    ",
            "~~~__~_~_~_~_~_~_~~~~~~_____ b                                                                                                     ",
            "~_~_~__~_~___~~~_~~~__~~_~_~~~b                                                                                                    ",
            "~_~_~_~__~_~___~~__~~_~__~~__b                                                                                                     ",
            "~~~~~_~~_~~~~~~__~_~_~~~_~~__~b                                                                                                    ",
            "_~___~_~~~~~_~_~_~~~~_~~_~~~~~_bwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwbbb      ccc        ccc        ccc        ccc        ccc    ",
            "__~~~_~~~~~__~_~_~~~~~_~___~~_~bwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwb                                                          b",
            "___~~~__~~~~~__~~~__~~~~~~~~~~~bwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwb   f                               2           E          D",
            "~______~~~_~_~~_~~~~______~___~bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb^^^^^^^^^^^^^^^^^^^^^^^^^^^^bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "_~~~_~~_______~~__~______~~_~~~~~~~~~~~~~~_~_________~~_~_~_~_~_~~_~________~~__~~_~_________~~_~_~~_~~~~_____~~______~~~_~~_______",
            "______~~~~_~~~~~~~~~~~~__________~~~_~~_~~_~~_~_~~_~_~~_~~_________~~_~_~~_~_~~_~_~_____________~~_~~~_~~_~_~~~~~~~~~~~~_~~_~_~~~~~",
            "__~~~~_~_~_~~__~~_~_~__~~_~_~~_~__~_~_~_~~~~~_~_~_~___~_~_~~________~~~~~~~~~~_~~~~_____~~~~_~~_~_~~_~~~~~~~~~_~~~_~~_~~__~_~~____~",
            "~~~~~_____~~_~_~~_~_~____~~_~~___~~~~________~~~_~__________~~~~~~~_________~~~~~_~~_~~~_~~~_~~~~~~~~~~~~~______~~~_____~~~~~~~_~~~"
        ]
    },
    "cave2" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "cave",
                symbol : 'b'
            },
            'b' : {
                level : "cave3",
                symbol : 'a'
            }
        },
        plan : [        
            "                                                                                                                                  bbbbbbbbb",     
            "                                                                                                                                   ' b~__~~",
            "                                                                                                                                  bbbb~___~",
            "                                                                                                                                 b__~~~__~~",
            "                                                                                                          .                    bb___~~~~__ ",
            "                                                                                                                             bb__~~~__~~~~~",
            "                                                                                                                            b~~~~__________",
            "                                                                                                                           b~~~~~~~~~______",
            "                                                                                                          5    =============5bbbbbbbbbbbbbb",
            "                                                                                                          =                      :      ;  ",
            "                                                                                                          =                                ",
            "                                                                                                          =                                ",
            "                                                  ccc                  ccc                        ccc     =                         ccc    ",
            "                                                            ccc                                           =                   ccc         b",
            "                            FF  FF                                                                        =     QQ  f    p                D",
            "a                                                                         8                8              5=================5==============",
            "D   f       k   k    k                           ==============================================================0000000000000000000000000000",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbwww   wwwbbbb~~___~~_~~==========00000000000000000000000000000000000000000000000000000000000000000wwwwww000000000",
            "~~~_~~~~~~~____~~~~_____~bwww Wkwwbb~~~___~~__~~==========0000000000000000000000wwwwwwww00000000000000000000wwwwwwww000000000000wwwwwww0000",
            "~~_~~~_~___~~~__~~~___~~~_bbb   bbbb___~~~_========0000000000000000000wwwwwwwwwwww0000000000000000000000000000wwwwwwwwww0000000000000000000",
            "~_____~~~_~~___~~___~___~__~bbbbb~~~___~~====0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        ],
    },
    "cave3" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "cave2",
                symbol : 'b'
            },
            'b' : {
                level : "cave4",
                symbol : 'a',
            }
        },
        plan : [
            "__~~~___~~___~~__~~~~~~~___~___~~____~~~~~____~~~~____~~~bbbbbbbbbbbbbbbbbbbbbbbbbb__~~~_~___~~___~~___~~__~~~__~~__~~___~~___~___~~___~~~~__~~__~~",
            "___~~__~~__~~__~~~~____~~___~~__~~~___~~~~~bbbbbbbbbbbbbbb       :  ;      &   &   bbbbbbbbbbb~~~______~~~~__~~~__~~__~~~__~~~__~__~~~__~~~__~~___~",
            "__~~~___~~_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb        :                                 :   ;   bbbbbbbbbbbbbbbbbbbb___~~~__~~__~~___~~___~~___~~~__~",
            "bbbbbbb%%bbb     ;    ;           :    &                                                           :       &      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "       :                                                                                                              ;      &       :    :   &    ",
            "                                                                                                                                                   ",
            "             &                                                   cc                                                                                ",
            "                                                    cccc                        c   c                          c  c                                ",
            "                                cccc                            PPPP               E                                                        E      ",
            "                                                                                PPPPP                          PPPP                        PPPP    ",
            "                                                                                                                                                   ",
            "a                     ,2                   E        ,                                                                                              ",
            "D p    ,      E bbbbbbbbbbbbbbbbbbbbbb%%%%%%bbbbbbbbbbbbbbbbbb      ,+              + ,         g  ,                     +           ,            b",
            "bbbbbbbbbbbbbbbbb~__~~__~~__~__~~~~~~~~~~________~__~~~__~~~__bbbbbbbbbbb%%%%bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb%%%%bbbbbbbbbbbbbbbbbbbbbb    g      D",
            "~~~~___~~~__~~___~~_~_~___~~~~~__~~___~__~____~~__~__~~__~_~~_~__~~~~~~__~~___~~____~~____~~~~~~~_______~~____~~_______~~~~~____~~~__~bbbbbbbbbbbbb",
        ],
    },
    "cave4" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "cave3",
                symbol : 'b'
            },
            'b' : {
                level : "path1",
                symbol : 'a'
            },
            'c' : {
                level : "path2",
                symbol : 'a'
            }
        },
        keys : {
            'a' : {
                level : "path1",
                symbol : 'b'
            }
        },
        plan : [
            "~~~~____~~~____~~___~~__~~__~~__~~___~~__________~~~_~_~_~_~______~~_~~_~_~_~~~_~~~~___~~___~~__~~~___~~__~~~_~_~___~~_~__~~~__",
            "~__~~~~~~~~~~~~~~~~___~~~~~~~~~_____~~~~____~~~___~~__~~___~~__~~___~~~__~~~~~__~~~__~~~___~~~~__~~__~~__~__~__~_~__~_~_~__~~_~",
            "~__~bbb___bbbbbbbbbbbbbb___~~___~~~~___~~~_~_~_~~~~~~___~~~bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb~~_~~_~_~__~_~__~__~_~_~_~__",
            "~_bb   bbb  &  ;     :  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    :      :      ;     &          ;    bbbbb_~~__~~~__~~__~___~__~~",
            "bb      :                  :      :  ;    &    :   ;                                                 :  bb__~~__~__~~__~~___~~~",
            "~                                                                                                         bbb~~~__~__~~___~~__~",
            "~                                                                                                            bb__~~__~__~_~__~~",
            "~                                                                                                              bbbbbbbbbbb__~~~",
            "~~                                                                                                                 &      bbbbb",
            "~                                                                                                                            : ",
            "~~__                                                                                                                           ",
            "~~~~                                           ,  E,                                                                           ",
            "~~~                PP      E                  bbbbbbbbbbbbb          2,                                                        ",
            "a                        PPP                  bb_~_~_~~__~bbbwwwwwwwbbbbbb  k,                                                 ",
            "D  f       PPPP                                 bbbbbbbbbbb~bwwwwwwwbwwwwbbbbbbb  k                               .            ",
            "~~~_ PP                                2      bb_~_wwwwwwwwwwwwbbbbbbwwwwwwwwwwwbbbbbbbbbb         PPP     PPP                b",
            "~~~     ,               ~~bbbb    ,bbbbbbbbbbb_~~___~~~~wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwbbb  ,                              ,D",
            "~~~___~~__                 ~__~__~__~___~~~~__~__~__~__~~~_wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwbbbbbb              .   bbbbbbbbbbbb",
            "~__~~~~___~                ~__~____________~~~~______~~~___~~wwwwwwwk  wwwwwwww  kwwwwwwwwwwwwwwb                 b___~~~__~~~~",
            "~~~__~~__~~              _~~__~~__~~__~~___~~____~~~___~~____~wwwwww Wawwwwwwww W wwwwwwwwww0000bb                b__~__~~__~~~",
            "___~~~~~___~               :     _____~~~___~~~__~~~______~~__wwwwww  Kwwwwwwww k wwwwwwww00bbbbb                b~~~___~__~___",
            "____~~~~~~~_                 +  ~~~___~~~~~__~~~__~~~__~~~__~~wwwwwwwwwwwwwwwwwwwwwwwwwww0bb                   .  b~___~~~_~_~~",
            "~~~~~____######bb####bb#######~~___~~~___~___~~__~~___~_~~~~~_wwwwwwwww0wwwwwwwwwwwwwwww0b                         b~~__~~__~~_",
            "~~~__~~___~~__~___~__~___~___~~___~~~~___~~__~~__~~__~~__~_~_~_wwwwwwww000000wwwwwwwwww0b                           b~~__~~_~_~",
            "~______~~~_~~___~~~__~_~_~___~~__~~__~~__~~__~___~___~____~~~~__wwwwwwww00000wwwwwwwwww0b                        .  b~~__~~__~~",
            "~~~_~~____~~___~___~~____~___~___~___~___~__~_~~~__~~~_~~~_~~~_~~wwwwwww0000000000wwwww0bwwwwb                       b__~~__~~~",
            "~__~_~_~_~_~________~~__~_~~__~_~_~~~~_~_~__~_~_~_~_~_~____~~__~wwwwwwwwwwwwwww0000wwwwwwwwwb                        b~~~~___~~",
            "~~~~~~~~~~~_________~~~~~_~__~_~_~_~_~~_~_~_~~__~~~_~_~_~~~~~~_~wwwwwwwwwwwwwwwwwwwwwwwwwwwb                              :    ",
            "~~~___~~_~~~__~~__~~___~___~~~__~~~_~~~__~~__~~~__~~~__~~~~~~~~wwwwwwwwwwwwwwwwwwwwwwwwwwwb                                   c",
            "~~~~___~~__~~~__~~__~__~~~__~~~__~~~~___~~~__~~~__~~~_~~~_~~~~~~____~~__~~~~__~~~___~~~_bbb     g      +        5             D",
            "~~~~~~~~_________~~~~~~__~_~_~~_~_____~~__~~~__~~__~~~__~~~_~~~~___~~__~~~___~~___~~~~~========================================",
            "~~~~~~~~~~~~~~________~~~_____________~~~~~~~~~~____________~~~~~~~~________~~~~~~____~0000~~~~___~000~~___~00~~__00~~~00~~~~~="
        ]
    },
    "path1" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "cave4",
                symbol : 'b'
            },
            'b' : {
                level : "path1FollowUp",
                symbol : 'a',
                locked : true
            }
        },
        plan : [
            "~~~__~__~__~~__~~__~~_~~__~~_~~_~~__~~__~~_~_~~___~~__~~~__~~__~~_~~~__~~~~~~___~~__~___~~~~__~_~~~",
            "~~~___~~__~~~__~~___~~___~~___~__~__~_~~~___~~__~_~_~~_~__~~_~_~_~_~~_~~~~~___~_~~_~_~_~_~_~~_~~~~~",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb~~~____~~_______~~~~~__________~~________~~~__~~~__~~__~~_~_",
            "       :   &   ;      :  &            bbbbbbbbbbbbbbbbbb~~~~~~~~~~_______~~~~~~~________~~~~____~~~",
            "                                       ;  &            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "                                                             .         .            .      .       ",
            "                                                                  .          .                  .  ",
            "                                                                                                   ",
            "a                                                                                                  ",
            "D        g                                                                                         ",
            "bbbbbbbbbbbbbb , E                                                                                 ",
            "~~~~~___~~~~~bbbbbbbbbbbb   2                                                                     b",
            "_~~~__~~~__~~~__~~__~~~~bbbbbbbbb      ,    k                                                     D",
            "~~~___~~~__~~__~~~__~_~___~_~_~~bbbbbbbbbbbbbbb                                                bbbb",
            "~~~~~___~__~___~___~___~__~__~~~~___~~~~__~~~~bbb      E                                         bb",
            "~~~~__~__~__~___~__~___~~~~__~~~__~~__~__~~~~__~bbbbbbbbbbbbb                                      ",
            "~~~___~___~~~__~~~__~~~~__~~__~_~_~~__~_~__~_~~_~~~~___~~__~b                                      ",
            "~~~~___~~__~__~_~_~_~_~~___~_~_~__~_~~__~_~___~_~_~_~_~_~__~#######################################"
        ]
    },
    "path1FollowUp" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "path1",
                symbol : 'b'
            },
            'b' : {
                level : "intersection",
                symbol : 'b'
            }
        },
        plan : [
            "b000000000bb0000000bb0000000bbb0000000bb000000000bbb00000000000000000bbbb00000000000000b0000000000000000000000000bb",
            "'bbbb00bbb  bb000bb  bb000bb   bb00bbb  bbbb00bbb   bbb0bb0bbb0b00bbb    b0000000000bbb bb0000000000000000000000bb ",
            "     bb     & bbb    & bbb     : bb       ; bb       : b  b  :b bbb       bbbbbbbbbb      bbbbb000000bbbbb000bbb   ",
            "     :        ;         :         ;         :          ;         ;         : &   ;         ;   bbbbbb     bbb ;    ",
            "                                                                                               ;   &       :       ",
            "                                                                                                                   ",
            "  hh                                                                                                               ",
            "a hh                              ,                                                                                ",
            "D hh f                           PPPPPP                                           cc                    ccc        ",
            "bbbbbbb       ,         ,E                  ,     2                                             cc                 ",
            "bbbb       bbbbb      PPPPP                %%  %%%%%  m       %%%%      2                                         b",
            "                                                                      PPPPP     bbbbbbb  k ,                      D",
            "                +                          +                                    000000bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "################################################################################00000000000000000000000000000000000",
        ]
    },
    "path2" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "cave4",
                symbol : 'c'
            },
            'b' : {
                level : "intersection",
                symbol : 'a'
            }
        },
        plan : [
            "~__~~__~__~~_~__~~_~__~__~_~_~_~~_~__~_~_~__~~~~_~~~_~~___~~_~~___~~~___~~~_~__~~_~~~~bb~~~~__~~_bb",
            "~~____~~_~_~_~_~_~~_~_____~~__~~~_~~~~__~~_____~~~_~__~~~_~bbb~_~__~~_~__~bb~~__~_~bbb  b__bbb__b  ",
            "~~bbb__bb~~~bb~~~~~~~bbb__~~bbbbb~~~bbbbbb__~~bbbb~~__~~~bb   bbb~~~~__bb   bb__bbb     bbb   bb   ",
            "bb   bb  bbb  bbb__bb   bb~~b  & b_b      b~bb    bbb~~bb      & bb__bb       bb        &&&   :    ",
            ":    :    ;      bb       bb      b        b         bb            bb          &                   ",
            "                 &                ;                  &                                             ",
            "                                                                                                   ",
            "                         c  c          cc                                                          ",
            "                                                                                                   ",
            "              PPP        PPPP         PPPP            2                  %%%      bbbb             ",
            "                                                    PPPP                                           ",
            "a                                                                                                 b",
            "D f       , E        2        +  ,                            +                               ,   D",
            "===================================================================================================",
            "000000www0w00w00ww000000www0000ww000wwww000wwww00www00000ww000ww0000ww000wwwwww0000wwwww00wwwww000w"
        ]
    },
    "secretPath" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "intersection",
                symbol : 'd'
            },
            'b' : {
                level : "intersection",
                symbol : 'c'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000www000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000wwwwwwwww0000000000wwwwwwww000000000000000000000www0000000000000000000000",
            "=======================================================================================",
            "                                                                                       ",
            "b          cccc      cccc         cccc       cccc       cccc      cccc                a",
            "D                                                                                     D",
            "=======================================================================================",
            "00000000wwwwwww0000000000000000000wwwww00000000000000000000000000000wwww000000000000000",
            "0000000000000000000000000000000000000000000000000000000wwwww000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "intersection" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "path2",
                symbol : 'b'
            },
            'b' : {
                level : "path1FollowUp",
                symbol : 'b'
            },
            'c' : {
                level : "secretPath",
                symbol : 'b'
            },
            'd' : {
                level : "secretPath",
                symbol : 'a'
            },
            'e' : {
                level : "CatRoom!",
                symbol : 'a'
            },
            'f' : {
                level : "pathways",
                symbol : 'b'
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "fairy"
                }, {

                }, {

                }, {

                }, {
                    contains : "bubbleShield"
                }, {
                    contains : "meal"
                }]
            }
        },
        plan : [
            "~~~___~__~~__~~_~__~_~_~_~____~~~~__~~~~~_~0000000000000000000                                    0",
            "~_~bb_~bb_~~bbb_~~bbb~__bbbbb~___bbbb~__bbbb000000000000000000                                   c0",
            "bbb  bb  bbb   bbb   bbb    bbbbb    bbb    bbbbbbbbbb00000000              a                    D0",
            "         ::    :     : ;       :      ;     & b~~___~~bbbbbbb00000000U  '   ]    U00000000000000000",
            "                         .               '     bbbbbb~~~~~~__bbbbbb000000000000000bbbbbbbbbbbbbbbbb",
            "b cccc                                               bbb~~~_______bbbbbbbbbb000bbb~~____~~__~___~~~",
            "D                                                       bbb~~__~~__~__~~_~_~bbb__~~~__~~~_~___~~~_~",
            "bbbbbbbbl                bb#############################   bbbbbbbbb___~~~~~__bbbbb~~__bbbbbb~__ bb",
            "    &   bbl                b#########bbbbbbbbbbbbbbbbbb###     ;    bbbbbbbbbb     bbbb      bbbb  ",
            "          bbl              bbbbbbbbbbb                bbb#                  :         ;      :     ",
            "            bbl             b                            #                                         ",
            "              bbbl           b                           #                                         ",
            "                 bbbl        b                           #                                         ",
            "                   bbbbbbUUbbb                           #                                         ",
            "                         UU                              #                                         ",
            "                         UU                              %#                                        ",
            "a                        UU                               #                                        ",
            "D       E   2   E        UU                               #                                       f",
            "=====================    UU  QQ  f     E                  #             g             ,    z   f  D",
            "0%%%%%00000000000000===========================5UFFF      # 5======================================",
            "000000%%%%%000000000000000000%%%%%0000000000000=U         # =00000000000000000000000000000000000000",
            "00000000000000000%%%%%0000000000000000000000000=U         # =0000000000000000%%%%%00000000000000000",
            "00%%%%%0000000000000000000000000000000000000000=U         # =00000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=U         # =000%%%%00000000000000000000%%%%%000000",
            "00000000000000000000000000000000000000000000000=U        b#b=00000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=U        bbb=00000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000=wwwwwwwwww=0000000000000000000000000000000000000000",
            "0===============================================wwwwwwwwww========================================0",
            "0=      %                                                                                        =0",
            "0=d     %                                                                                       e=0",
            "0=D     %  z z z z z                                                                            D=0",
            "0=================================================================================================0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "CatRoom!" : {
        theme : "underground",
        removeArraysToSave : ["dirtyCat", "poisonousSlimeBeaker"],
        doors : {
            'a' : {
                level : "intersection",
                symbol : 'e'
            },
            'b' : {
                level : "pathways",
                symbol : 'a'
            }
        },
        plan : [
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "===================================================================================",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "a               k    k    k           k   k   k       k     k   k                 b",
            "D                              2                 2                                D",
            "===================================================================================",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        ]
    },
    "pathways" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "CatRoom!",
                symbol : 'b'
            },
            'b' : {
                level : "intersection",
                symbol : 'f'
            },
            'c' : {
                level : "moreCaves",
                symbol : 'a'
            },
            'd' : {
                level : "moreCaves",
                symbol : 'c'
            }
        },
        itemChests : {
            'z' : {
                items : [{
                    contains : "fairy"
                }, {

                }, {

                }, {
                    contains : "goldbar"
                }, {
                    contains : "goldbar"
                }, {
                    contains : "goldbar"
                }]
            }
        },
        plan : [
            "~~__~_~~__~~~__~~_~_~_~_~_~__~_~___~~~__~~__~~__~~_~__~~_~__~__~~__~~__~~~~",
            "~~~_~_bb_~__~~__~~_~~~~_~~__~~__~~__~~bb_~bb_~~__bbbb_~_~__bbbb~_~_~__~_bbb",
            "~~_bbb  bb__~bbb_~~bbb~_~bbb__~~~  bbb  bb  b  bb    bb  bb    bbb  bbbb   ",
            "bbb       bbb   bbb   bbb   bbbbbbb      :   bb        bb      :  bb       ",
            "            :     ;    &    ;                          ;           ;       ",
            "                                                                           ",
            "                                                                           ",
            "                                                                           ",
            "                                                                           ",
            "                                                                           ",
            "                                                                           ",
            "b                                                                         c",
            "D          k        k       ,          2                       g   ,      D",
            "======================================================UU===================",
            "000000000000000000000000000000000000000000000000000000UU0000000000000000000",
            "000000000000000000000000000000000000000000000000000000UU0000000000000000000",
            "000000000000000000000000000000000000000000000000000000UU0000000000000000000",
            "~~__~_~__~_~_~~~__~_~_~_~~_~_~_~_~_~_~_~__~_~_~~_~    UU             b~~~~~",
            "~__~__~~__~~~_~_~_~_~_~~__~__~~__~~_~_~               UU             b____ ",
            "&   &&&     &  &&&     &&&    &&&  &                  UU             b~    ",
            "                                         bb   m   bbbbbbbbbb         bb    ",
            "                                ccc    bb          ~__~__~         bb~_    ", 
            "      cccc          cccc             bb                          bb~_      ",
            "                                   bb                          bb~_        ",
            "                                 bb                          bb~_         d",
            "Ubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                      E   b~_~         WD",
            "U                                                    bbbbbbbb          w bb",
            "U                                            cccc  bb_~__~_~           ww  ",
            "U                                              E bb~__~                ww  ",
            "U                               cccc   2       bb~~_~                  ww  ",
            "U                                   bbbbbbbbbbb~__~                    ww  ",
            "U                                 bb~_~_~_~_~~_                        ww  ",
            "                                bb_~                                   ww  ",
            "               cccc   E    E  bb~_                                     ww  ",
            "                  bbbbbbbbbbbb~_                                       ww  ",
            "a              Ebb~~__~~~_~~                                           ww  ",
            "D     f       bb~_cccccc    z                                          ww  ",
            "bbbbbbbbbbbbbbb~_ cccccc '  ]                                          ww  ",
            "~~_~_~_~_~~_~~~__~~~___~~~~~~___wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "~~__~__~~~~_~~~~___~~__~__~__~_~_~~__~~_~_wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "_~__~~___~~__~_____~_~_~_______~~__~_~_~__~wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "~_~~_~_~_~_~~_~_~_~_~~_~~_~_~_~_~_~_~_~_~~_wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
        ]
    },
    "moreCaves" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "pathways",
                symbol : 'c'
            },
            'b' : {
                level : "moreCaves2",
                symbol : 'a'
            },
            'c' : {
                level : "pathways",
                symbol : 'd'
            },
            'd' : {
                level : "moreCaves2",
                symbol : 'c'
            }
        },
        plan : [
            "~~_~__~~_~_~~_~~___~__~~~___~_~_~_~~~__~__~_~__~_~_~~__~_~_~~__~_~~__~~__~_~_~_~_~_~__~_____~~_~~~~~_~__~~_~_~~~~_~",
            "~___~~~~__bbb_~__~__~__bbbbb~~__~bbbbbbbbb~~_bbbbbbbb__bbbbbb%%%%%%%~~~bbbb%%%%%__b%%%%~~bbbbbb__bbbb~~bbbbb__bbbbb",
            "%%%%%%%bbb   bbbbbbbbbbb    %%%%%    ; : %%%%  :   ; %%   ;   :     %%%   :   : %%     %%  && bbbb   bb   ; bb   & ",
            "                    .           :                     :              ;          &&                    &      :     ",
            "                                                                                                                   ",
            "       g                                                                                                           ",
            "=================5UU5                                                                                              ",
            "                  UU=                                                                                              ",
            "                  UU=                                                                                              ",
            "a hh              UU=                                                                                              ",
            "D hh f            UU=           ,   E     2      g    ,                                                            ",
            "====================5bbbbb.     bbbbbbbbbbbbbbbbbbbbbbbbbb       +   ,        , +        =                         ",
            "000000000000000000000000bb        b%%%%%b   ~_~__~_~__~~~bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb        +     =         b",
            "000000000000000000000bbbbbb        b%%%b               ~~__~_~_~__~_~_~_~_~_~~~__~~__~~~~bbbbbbbbbbbbbbbb ,   2   D",
            "0000000000000000000000000bb         bbb                                                ~~__~_~_~__~_~_~~~bbbbbbbbbb",
            "000000000000000000000bbbbbb                                                                            ~~~_~_~~~__~",
            "bbbbbbbbbbbbbbbbbbbbbbb                                                                                            ",
            "bbbbbbbbbbbbbbbbbbbb          g                                                                                    ",
            "~~_~_~_~_~__~_~_~__~__~~~__~_~_~_~~_~          .                                                                   ",
            "~~_~_~_~_~____~__~~~~__~~_~_~~_~_~_~~                                                                              ",
            "wwwww~_~_~____~___~__~__~___~__~_~__~__~~__~~__~                                                                   ",
            "c  wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww   ",
            "DW wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww Wd",
            "b  _~__~~_~_~__~~~~__~~~__~~__~~__~_~~__~_~_~_~__~wwww~_~__~_~_~~_~__~__~_~_~_~_~_~_~_~_~~~_wwwwwwwwwwwwwwwwwwww  D",
            "~~__~_~__~_~_~_~~_~_~_~_~__~~~__~__~~__~__~__~_~_~wwww~_~_~__~___~~___~~__~~_~~__~__~__~_~__~__~__~_~_~_~_~_~_~~_~~"
        ]
    },
    "moreCaves2" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "moreCaves",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPEntrance",
                symbol : 'a'
            },
            'c' : {
                level : "moreCaves",
                symbol : 'd'
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "fairy",
                }, {
                    contains : "goldbar"
                }, {

                }, {

                }, {
                    contains : "meal"
                }]
            }
        },
        plan : [
            "~~~___~~~~__~~~___~_~_~~~_~~~~~___~~www~__~__~~_~_~_~_~__~_~_~__~~~~~___~~_~~~~~__~~~~_~~~~_~~__~~~~__~~~~~_~~_~~__~~_~_~~~~~~~",
            "~~__~~bbbbbb~~__~__~~_~_~bbbbbb~_~_~~w~~_bbb%%%%b__~_~_~~___~~_~___~_~_~__~~~~~_~_____~~~~~~~~___~~~~~~___~~~~___~__~~_~~~_~_~~",
            "bbbbbb    ; bbbbb%%%%%bbb  &   bbbbb%w%%b  ;    %%b~~__~__~~~__~~_~~___~~~~____~_~__~~~~~___~~~__~~~~_~~~~_~~~~___~~~~__~~__~_~",
            "  ::            :    ;          ;    w  &       :  bbbb ~~~__~_~_~~~___~_~_~_~_~____~__~_~_~~~~~~~___~~~__~_~_~~___~~___~__~~~~",
            "                                     w              :  bbbbbb~~~__~~_~__~~__~~~ %%b%%~~~__~_~_~_~__~__~~~~_~~~____~~~~_~~~___~~",
            "                                     w                    ;  bbbb%%%%%%bbb%%%%bb :   bbb~~~__~~~__~~__~~__~~~~_~~~___~~~_~~~~~~",
            "a                                    w                         :      ;     &         &b~~~__~~__~~~__~_~~____~~~~~__~~_~_~~~~~",
            "D ,,                    E            w                                                  bbbb~~~__~__~_~_~~_~~_~~__~~~~__~~~~~__",
            "bbbbbbbbb  +    ,     bbbbbbb   ,   2w   5                                               :  bbbbbbbbbbbbbbbb___~~~__~~bbbb~~~~~",
            "~_~_~_~__bbbbbbbbbbbbb~_~_~_~bbbbbbbbwbbbb                                                     : ;::  ;     bbbbbbbbbb    bbb__",
            "~__~~~~~~_~_~~~~~~~~~~~~~~_~_~_~~~~~~w~~~~bbbbbb,  g                                                                :      ; bb",
            "____~~~~_~~___~__~~_~_~_~_~~~~_~_~_~~w_~_~~~~___bbbbbbb                      hh                                              : ",
            "~~~__~__~_~_~~~___~~~_~__~~~_~~~~~__~w~___~~~~___~~~~~~%%%%%%b ,   g        h  h                    ccc                        ",
            "~~~~~~_____~~~~~~~__~~~~~____~__~_~~~w~__~~__~~__~_~_~_~~~~~~~%%%%%bb ,                            c   c                cc     ",
            "~~~___~~__~_~_~_~~~~~~~~~____~~__~~~_w__~~___~~____~___~~__~~__~_~_~~%%%%b                                             c  c    ",
            "~~___~__~_~~~~~~~~____~~__~~_~_~~_~_~w~~__~_~_~_~~~~~_________~~~~~___~~~%%      PPPPP                   PPPP                  ",
            "~~__~~_~_~_~~~~____~~~___~~___~~~__~~w___~~~__~~~~____~~~~~___~~~______~~~%b    .           ^^^^^^^               ^^^^^   QQ   ",
            "0000000000000000000000000000000000000w0~~_~___~~__~~~___~~___~_~_~_~~~~~~~_~b f                                          ===UU=",
            "                                '   ww0~~__~_~_~__~_~_~__~__~_~__~_~__~_~__~b%%%%                                        =  UU=",
            "cW  W  W  W  W  W  W  W  W  W  W  W ww0~~__~~__~_~_~__~_~~_~_~_~____~__~_~_~_~~0                                         =  UU=",
            "D                 E          E      ww000000000000000000000000000000000000000000        =################################= fUU=",
            "~~~___~~~~_~~~___~~_~~~~wwwwwwwwwwwwwwwww   wwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww====================================UU5",
            "~_~_~~~_~~~~_~___~~~~~~~___~__~~wwwwwwwww W wwwwww W wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww0000000000000000000000000000000000000UU=",
            "~~~~~~__~_~__~_~_~_~_~~__~_~~~__~~_wwwwww   wwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww00000000000000000000000000000000000000UU=",
            "0000000000000000000000000000000000000000w00000000000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "0000000000000000000000000000000000000000w00000000000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "0000000000000000000000000000000000000000w00000000000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "00000000000000000000000                 w00000000000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "0000000000000000000                     w    0000000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "00000000000000                          w       0000000000000000000000000000000000000000000000000000000000000000000000000000UU=",
            "                                        w          5========================================================================UU=",
            "    cccccc         ccccccc              w                                                                                   UU=",
            "    cccccc         ccccccc              w                   ccc  ccc         cccc            ccc  ccc        cccc           UU=",
            "b                                       w                   ccc  ccc         cccc            ccc  ccc        cccc           UU=",
            "D                                       bw                g          g    g        g         g      g                       UU=",
            "000000000000000000000000000000000000000  w         5==========================================================================5",
            "0000000000000000000000000000000000000    w         0000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000      w    000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000       w   0000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPEntrance" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "moreCaves2",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPEntrance2",
                symbol : 'a'
            }
        },
        plan : [
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                                                          ",
            "0                                                                                                                                          ",
            "0                                                                                                                                          ",
            "0                                                                                                                                         a",
            "0                                                                                                                                      f  D",
            "0                                                                                                                                  00000000",
            "0                                                                                                                          0000000000000000",
            "0                                                                                                                  000000000000000000000000",
            "0                                                                                                          00000000000000000000000000000000",
            "0                                                                                                  0000000000000000000000000000000000000000",
            "0                                                                                          000000000000000000000000000000000000000000000000",
            "0                                                                                  00000000000000000000000000000000000000000000000000000000",
            "0                                                                          0000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                  000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                          00000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                  0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                          000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                  00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0b                         0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0D                 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPEntrance2" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "DEEPEntrance",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPEntrance3",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0a                                                                                                                                            b0",
            "0D                                                                                                                                            D0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPEntrance3" : {
        theme : "underground",
        shade : {
            a : 30,
        },
        doors : {
            'a' : {
                level : "DEEPEntrance2",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPEntrance4",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0a                                                                                                                                             0",
            "0D                                                                                                                                             0",
            "000000000                                                                                                                                      0",
            "00000000000000000                                                                                                                              0",
            "00000000000000000000000000                                                                                                                     0",
            "00000000000000000000000000000000000                                                                                                            0",
            "00000000000000000000000000000000000000000000                                                                                                   0",
            "00000000000000000000000000000000000000000000000000000                                                                                          0",
            "00000000000000000000000000000000000000000000000000000000000000                                                                                 0",
            "00000000000000000000000000000000000000000000000000000000000000000000000                                                                        0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000                                                               0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                                                      0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                                             0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                                    0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                          b0",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                 D0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPEntrance4" : {
        theme : "underground",
        shade : {
            a : 60,
        },
        doors : {
            'a' : {
                level : "DEEPEntrance3",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPEntrance5",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0a                                                                                                                                            b0",
            "0D                                                                                                                                        f   D0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPEntrance5" : {
        theme : "underground",
        shade : {
            a : 90,
        },
        doors : {
            'a' : {
                level : "DEEPEntrance4",
                symbol : 'b'
            },
            'b' : {
                level : "DEEP",
                symbol : 'a'
            }
        },
        signs : {
            'a' : {
                message : "DEEP: Depth of Exotic Electrical Pathways",
                adjustW : 220,
                adjustH : 26,
                colorPack : {
                    red : 200,
                    green : 56,
                    blue : 40
                }
            },
            'b' : {
                message : "Warning: Danger! Make sure you\nare well equipped before entering!",
                adjustW : 180,
                adjustH : 36,
                colorPack : {
                    red : 200,
                    green : 56,
                    blue : 40
                }
            },
            'c' : {
                message : "Unlock this chest of supplies for 160 coins.\n--Granted by Agent X!",
                adjustW : 210,
                adjustH : 36,
                colorPack : {
                    red : 100,
                    green : 100,
                    blue : 100
                }
            }
        },
        itemChests : {
            'e' : {
                locked : true,
                costToUnlock : 160,
                items : [{
                    contains : "fairy"
                }, {
                    contains : "fairy"
                }, {

                }, {

                }, {

                }, {
                    contains : "meal"
                }, {
                    contains : "bubbleShield"
                }]
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                                                                                              0",
            "0                                                                5============5                                                                0",
            "0                                                                u   u   u                                                                     0",
            "0                                                                                                                                              0",
            "0                                                                  a b bb b a                                                                  0",
            "0a                                                                |S S DD S S|       c  e                                                   '  0",
            "0D    /         /          /          /           /  QQ   f  |   5============5   |  S  ]   /         /         /         /         /          0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEP" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPEntrance5",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPRoom1",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0 &&                          =  UU  =                                                                            =                                         =             0",
            "0                             =  UU  =                                                                            =                                         =             0",
            "0                             =  UU  =                                      aa                                    =b                                        =             0",
            "0           /       /         =  UU  5=       /       /        /          p DD        /       /       /           =D    /     /     /     /         5       =       5 UU 50",
            "0  m       000000bbbbbbbbFFFFF=  UU   5================5 UU 5===================================5=========5       5==================5======5       =       5       = UU =0",
            "0             000b            =  UU                 UU = UU =cccc                          UU   =         =00        &    &&    &    =      =       =               = UU =0",
            "0                b            =  UU                 UU = UU =cccc                          UU   =         = 000                      =      =       =               = UU =0",
            "0 k /            bFF ^^^5=====5  UU  5============5 UU = UU ========================5====5 UU   5FFFF= UU =   000                    =      =ss   ss=ss           ss= UU =0",
            "000000 m         b      =        UU   cc  cc  cc  = UU = UU =       UU              = UU = UU        = UU =   & 000                  =bbbUUU5=======5=======5=======5 UU =0",
            "000              b      =        UU     cc  cc  cc=    = UU =       UU   ccc        = UU = UU        = UU =       000                =      =                       = UU =0",
            "0                b      5=====5===================5    = UU =     b UU   ccc        = UU = UU        = UU =       & 000              =      =                       = UU =0",
            "0                b    FF=                              = UU =     b UU              = UU 5======5====5 UU =           000            =      =      ^^^^bb^^^^       = UU =0",
            "0           /  k b      =                              = UU =     bbbbbbbbbbbbbb    = UU   cccc   UU = UU =             000          =    ss=          bb           = UU =0",
            "0    m     000000b      =     5========================5 UU =     b                 = UU   cccc   UU = UU =         hhccc 000        =      =  g       bb         E = UU =0",
            "0             000bFF    =                                   =     b      h h        = UU          UU = UU 5         hhccc   000      =      =^^^^      bb       ^^^^= UU =0",
            "0                b      =                                   =     b               ss= UU 5======5 UU = UU      5==============000 UU =      =          bb           = UU =0",
            "0   /            b      =       /       /       /           =     b    bbbbbbbbbbbbb5 UU        = UU = UU                         UU =ss    =          bb  g        = UU =0",
            "000000   m       b    FF5===================================5     b                   UU        = UU = UU                         UU =      =         Ebb^^^^       = UU =0",
            "000              b                 hh                             b      h h                    = UU 5 UU 5=========5 UU 5===========5      =      ^^^^bb           = UU =0",
            "0            /   b      cc                            cc          bss                           =         =           UU                    =          bb           = UU =0",
            "0         m 00000b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^=         =           UU                    = g        bb         E = UU =0",
            "0             000bvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv5=========5           UU                  ss=^^^^      bb       ^^^^5 UU =0",
            "0                                                                                                         ===========================5======5          bb             UU =0",
            "0                                                                             hh      cc                   hh               cc          hh             bb             UU =0",
            "0      M              k      /       /      k         /         k         /       /       /                                                            bbk      k     UU =0",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPRoom1" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEP",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPBoxRoom1",
                symbol : 'a'
            },
            'd' : {
                level : "DEEPBoxRoom1",
                symbol : 'b'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000",
            "005================================================500",
            "00=                                               d=00",
            "00=                                               D=00",
            "00=                                                =00",
            "00=                                                =00",
            "00=                                                =00",
            "00=                                                =00",
            "00=a                                              b=00",
            "00=D /  QQ f  /        /        /        /        D=00",
            "005================================================500",
            "000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPBoxRoom1" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPRoom1",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPRoom1",
                symbol : 'd'
            },
            'c' : {
                level : "DEEPRoom1",
                symbol : 'b'
            },
            'd' : {
                level : "DEEPBoxRoom2",
                symbol : 'b'
            }
        } ,
        plan : [
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
            "005===================================================500",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=b                                                 d=00",
            "00=D   /           /                  /          I   D=00",
            "00=====================5          5====================00",
            "00=                     00                            =00",
            "00=                       00                          =00",
            "00=                         00                        =00",
            "00=                           00                      =00",
            "00=a                            ^^                   c=00",
            "00=D   /           /              ^^  /          /   D=00",
            "005===================================================500",
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPBoxRoom2" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPBoxRoom1",
                symbol : 'c'
            },
            'b' : {
                level : "DEEPBoxRoom1",
                symbol : 'd'
            },
            'c' : {
                level : "DEEPBoxRoom3",
                symbol : 'a'
            },
            'd' : {
                level : "DEEPRoom1",
                symbol : 'd'
            }
        } ,
        plan : [
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
            "005===================================================500",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=b                                                 d=00",
            "00=D   /           /                  /          /   D=00",
            "00=====================5          5====================00",
            "00=                     00                            =00",
            "00=                       00                          =00",
            "00=                         00                        =00",
            "00=                           00                      =00",
            "00=a                            ^^                   c=00",
            "00=D   /           /              ^^  /          I   D=00",
            "005===================================================500",
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPBoxRoom3" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPBoxRoom2",
                symbol : 'c'
            },
            'b' : {
                level : "DEEPBoxRoom2",
                symbol : 'd'
            },
            'c' : {
                level : "DEEPBoxRoom4",
                symbol : 'a'
            },
            'd' : {
                level : "DEEPRoom1",
                symbol : 'd'
            }
        } ,
        plan : [
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
            "005===================================================500",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=b                                                 d=00",
            "00=D   /           /                  /          /   D=00",
            "00=====================5          5====================00",
            "00=                     00                            =00",
            "00=                       00                          =00",
            "00=                         00                        =00",
            "00=                           00                      =00",
            "00=a                            ^^                   c=00",
            "00=D   /           /              ^^  /          I   D=00",
            "005===================================================500",
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPBoxRoom4" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPBoxRoom3",
                symbol : 'c'
            },
            'b' : {
                level : "DEEPBoxRoom3",
                symbol : 'd'
            },
            'c' : {
                level : "DEEPRoom1",
                symbol : 'b'
            },
            'd' : {
                level : "DEEPBoxRoom5",
                symbol : 'b'
            }
        } ,
        plan : [
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
            "005===================================================500",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=b                                                 d=00",
            "00=D   /           /                  /          I   D=00",
            "00=====================5          5====================00",
            "00=                     00                            =00",
            "00=                       00                          =00",
            "00=                         00                        =00",
            "00=                           00                      =00",
            "00=a                            ^^                   c=00",
            "00=D   /           /              ^^  /          /   D=00",
            "005===================================================500",
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPBoxRoom5" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPBoxRoom4",
                symbol : 'c'
            },
            'b' : {
                level : "DEEPBoxRoom4",
                symbol : 'd'
            },
            'c' : {
                level : "DEEPRoom1",
                symbol : 'b'
            },
            'd' : {
                level : "DEEPRoom2",
                symbol : 'a'
            }
        } ,
        plan : [
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
            "005===================================================500",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=                                                   =00",
            "00=b                                                 d=00",
            "00=D   /           /                  /          I   D=00",
            "00=====================5          5====================00",
            "00=                     00                            =00",
            "00=                       00                          =00",
            "00=                         00                        =00",
            "00=                           00                      =00",
            "00=a                            ^^                   c=00",
            "00=D   /           /              ^^  /          /   D=00",
            "005===================================================500",
            "000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPRoom2" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPBoxRoom5",
                symbol : 'd'
            },
            'b' : {
                level : "DEEPLeverRoom",
                symbol : 'a'
            },
            'c' : {
                level : "DEEPLeverRoom",
                symbol : 'c'
            }
        },
        plan : [
            "00000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000",
            "005=======================================================================500",
            "00=                     &    && &                        =                =00",
            "00=                                                      = ccc ccc ccc ccc=00",
            "00=a                                                     = ccc ccc ccc ccc=00",
            "00=D  f  /           /                                   =                =00",
            "00====================5                                  5==========5UU5==500",
            "00=                    bb                                            UU   =00",
            "00=                      bb                                          UU   =00",
            "00=                        bb                                        UU   =00",
            "00=                          bb                                      UU   =00",
            "00=                            ii                                    UU   =00",
            "00=c                             ii                                      b=00",
            "00=D                               ii   /    g      / g         /  g     D=00",
            "005=======================================================================500",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPLeverRoom" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPRoom2",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPRoom3",
                symbol : 'a',
                locked : true
            },
            'c' : {
                level : "DEEPRoom2",
                symbol : 'c'
            }
        },
        signs : {
            'a' : {
                message : "The code for the levers\ncan be found this way\n-->",
                adjustW : 120,
                adjustH : 50
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000",
            "005===================5000000005===================500",
            "00=                   =00000000=                   =00",
            "00=                   =00000000= ccc               =00",
            "00=                  a=00000000= ccc               =00",
            "00= z z z z z     /  S=00000000= ccc               =00",
            "005===========UU=======00000000= ccc               =00",
            "00=           UU      =00000000= ccc               =00",
            "00=     hh    UU      =00000000= ccc               =00",
            "00=a    hh    UU     b=00000000= ccc              c=00",
            "00=D /      / UU  /  D=00000000=    p     I       D=00",
            "005===================5000000005===================500",
            "000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPRoom3" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPLeverRoom",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPOutside",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000",
            "005======================================================500",
            "00=               &    &       &&        &      &   &    =00",
            "00=                                                      =00",
            "00=                                                      =00",
            "00=                                                      =00",
            "00=                                                      =00",
            "00=          cc     cc     cc     cc     cc     cc       =00",
            "00=a                                                   bb=00",
            "00=D   f  /      /      /      /      /      /      /  DD=00",
            "005======================================================500",
            "000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPOutside" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "DEEPRoom3",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPRoom4",
                symbol : 'a',
                locked : true
            },
            'c' : {
                level : "LightTower",
                symbol : 'a'
            }
        },
        itemChests : {
            'x' : {
                items : [],
            }
        },  
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                A    A                                                 0",
            "0                                                 u                                                     0",
            "0                                                                                                       0",  
            "0                                                                                                       0",
            "0                                                |    |                                                 0",
            "0                                                 u                                                     0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0                                                |    |                                                 0",
            "0                                                 u                                                     0",
            "0                                                                                                       0",
            "0                                                                                                       0",
            "0aa    cccc                                      |    |                                       cccc    bb0",
            "0DD  /            cccc                            u                                cccc            /  DD0",
            "0^^^^^^^^^^^^^^^5        cccc                                               cccc    g   5^^^^^^^^^^^^^^^0",
            "00000000000000005^^^^^^5    g    ccc    x          cc                ccc         5^^^^^^50000000000000000",
            "000000000000000000000005^^^^^^5       f ]/    /  | DD |  /    /  QQ       5^^^^^^500000000000000000000000",
            "0000000000000000000000000000005^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^5000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "LightTower" : {
        theme : "underground",
        doors : {
            'a' : {
                level : "DEEPOutside",
                symbol : 'c'
            },
            'b' : {
                level : "LightTowerP1",
                symbol : 'a'
            },
            'c' : {
                level : "LightTowerP2",
                symbol : 'a'
            },
            'd' : {
                level : "LightTowerP4",
                symbol : 'a'
            },
            'e' : {
                level : "LightTowerP3",
                symbol : 'a'
            }, 
            'f' : {
                level : "LightTowerP5",
                symbol : 'a'
            },
            'g' : {
                level : "LightTowerP6",
                symbol : 'a'
            },
            'h' : {
                level : "LightTowerP7",
                symbol : 'a'
            },
            'I' : {
                level : "LightTowerP8",
                symbol : 'a'
            },
            'x' : {
                level : "LightTowerTopFloor",
                symbol : 'a'
            },
            'y' : {
                level : "LightTowerTopFloor",
                symbol : 'b'
            },
        },
        signs : {
            'a' : {
                message : "Please enter door\n'b' first! <--"
            },
            'b' : {
                message : "Welcome to Laser\nLight Tower",
                adjustW : 100
            }
        },
        plan : [
            "500000000000000005",
            ">x              y<",
            ">D f          f D<",
            "50000000UU00000005",
            ">       UU       <",
            ">       UU       <",
            ">       UU       <",
            ">       UU       <",
            ">I      UU      h<",
            ">D      UU      D<",
            ">0000000UU0000000<",
            ">                <",
            ">                <",
            ">                <",
            ">g              f<",
            ">D              D<",
            "50000000UU00000005",
            ">       UU       <",
            ">       UU       <",
            ">       UU       <",
            ">       UU       <",
            ">e      UU      d<",
            ">D      UU      D<",
            ">0000000UU0000000<",
            ">                <",
            ">                <",
            ">                <",
            ">b    b aa a    c<",
            ">D    S DD S    D<",
            "5^^^^^^^^^^^^^^^^5",
        ]
    },
    "LightTowerTopFloor" : {
        theme : "underground",
        darkGrid : true,
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'x'
            },
            'b' : {
                level : "LightTower",
                symbol : 'y'
            }
        },
        itemChests : {
            'a' : {
                items : []
            }
        },
        signs : {
            'a' : {
                // message : "0 out of 8"
                message : "Drop something In!\n 0 out of 8 required!"
            }
        },
        plan : [
            "5vvvvvvvvvvvvvvvv5",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">                <",
            ">a      aa      b<",
            ">D  p   S]      D<",
            ">0000000000000000<",
        ]
    },
    "LightTowerP1" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'b'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        },  
        signs : {
            'a' : {
                message : "This is the first puzzle,\nclick things to rotate them.",
                adjustW : 140
            },
            'b' : {
                message : "The goal is to get the\nlaser to touch the '!' block.",
                adjustW : 144
            },
            'c' : {
                message : "Other puzzles expect you to do\nthis in an unknown certain order.",
                adjustW : 160
            }
        },
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">   *   *b              <",
            ">                       <",
            ">                       <",
            ">                       <",
            ">                       <",
            ">   *        !          <",
            ">                       <",
            ">                       <",
            ">r      *b              <",
            ">       b               <",
            ">          b  c  b  a  a<",
            ">          ]  S  S  S pD<",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP2" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'c'
            }
        },
        itemChests : {
            'c' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        },  
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">*             *        <",
            ">                       <",
            ">       *              l<",
            ">                       <",
            ">       %               <",
            ">                  !b!* <",
            ">       *          *b   <",
            ">                      b<",
            ">                  b    <",
            ">*             u      * <",
            ">a         c            <",
            ">D  p   z  ]            <",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP3" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'e'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        },  
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">                       <",
            ">                       <",
            ">                       <",
            ">r    *          !      <",
            ">                       <",
            ">r            *  !      <",
            ">                       <",
            ">r    *          !      <",
            ">                       <",
            ">     *       *         <",
            ">             b        a<",
            ">             ]    p   D<",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP4" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'd'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        }, 
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">*                   *  <",
            ">        *        *     <",
            ">                       <",
            ">                      0<",
            ">*       %     !! *  * l<",
            ">                 !    0<",
            ">                 !     <",
            ">*                !  *  <",
            ">                       <",
            ">        *        *     <",
            ">a         b            <",
            ">D  p      ]   z        <",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP5" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'f'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        }, 
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">*     *bb*            *<",
            ">                       <",
            ">*                     *<",
            ">b                      <",
            ">                 b     <",
            ">     b!b *       **   *<",
            ">      br          *b   <",
            ">                  b    <",
            ">                       <",
            ">                       <",
            ">a         b            <",
            ">D  p     *]      *    *<",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP6" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'g'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        }, 
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">                       <",
            ">                       <",
            ">     *     *     *    l<",
            ">                       <",
            ">                       <",
            ">    b!b   b!b   b!b    <",
            ">                       <",
            ">                       <",
            ">           *     *     <",
            ">                       <",
            ">     *     * b        a<",
            ">             ]    p   D<",
            "5000000000000000000000005",
        ]
    },
    "LightTowerP7" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'h'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        }, 
        signs : {
            'a' : {
                message : "tunnel below!"
            }
        },
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">   b*       *        **<",
            ">                       <",
            ">                       <",
            ">b                      <",
            ">r   ** !!!            *<",
            ">b         !            <",
            ">          !            <",
            ">          !            <",
            ">*   **                 <",
            ">     *          *      <",
            ">a  a     b* *        * <",
            ">Dp S     ]             <",
            "50000UU00000000000UU00005",
            ">                       <",
            ">                       <",
            "5000000000000000000000000",
        ]
    },
    "LightTowerP8" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "LightTower",
                symbol : 'I'
            }
        },
        itemChests : {
            'b' : {
                items : [{
                    contains : "energy",
                }],
                hidden : true
            }
        }, 
        signs : {
            'a' : {
                message : "What is a backwards 's' flipped on it's\nside to the left? Then do the rest\n(left to right)!",
                adjustW : 186,
                adjustH : 50
            }
        },
        plan : [
            "5vvvvvvvvvvvvvvvvvvvvvvv5",
            ">                       <",
            ">                       <",
            ">* !! * !! *   d        <",
            ">                       <",
            ">!    !    !            <",
            ">!    !    !            <",
            ">                       <",
            ">* !! * !! *            <",
            ">                       <",
            ">                       <",
            ">             b  a     a<",
            ">r            ]  S p   D<",
            "5000000000000000000000005",
        ]
    },
    "DEEPRoom4" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPOutside",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPRoom5",
                symbol : 'a'
            }
        },
        signs : {
            'a' : {
                message : "There's nothing over here\nor is there?",
                adjustW : 140
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=====00",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=   =00",
            "005============================================================================================== ' 500",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                                                                                 =00",
            "00=                                              .    ccc    ccc    ccc    ccc    ccc               =00",
            "00=aa                                                 ccc    ccc    ccc    ccc    ccc            a  =00",
            "00=DD f  /     /                                          /      /      /      /      /      p   S  =00",
            "005==================5                      .    5==================================================500",
            "000000000000000000000000                         000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000                       000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000                     000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000              .       000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000                        00000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000                         &        &      &      &  &            00000",
            "000000000000000000000000000000000000                                                              00000",
            "00000000000000000000000000000000000000                                          &                 00000",
            "0000000000000000000000000000000000000000                                                          00000",
            "000000000000000000000000000000000000000000                                                        00000",
            "00000000000000000000000000000000000000000000                                                      00000",
            "0000000000000000000000000000000000000000000000                                                    00000",
            "000000000000000000000000000000000000000000000000                                                 b00000",
            "00000000000000000000000000000000000000000000000000     /     / k                     k/     /    D00000",
            "000000000000000000000000000000000000000000000000005^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^500000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPRoom5" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPRoom4",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPCorridor",
                symbol : 'a'
            },
            'c' : {
                level : "DEEPCorridor",
                symbol : 'd'
            }
        },
        signs : {
            'a' : {
                message : '3',
            },
            'b' : {
                message : '4',
            },
            'c' : {
                message : '2'
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "bubbleShield"
                }]
            }
        },
        plan : [
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "005vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv500",
            "00                                   %%     ii     . .                            &&             &      &       <00",
            "00                                   %%     ii                                                                  <00",
            "00                                   %%     ii                                                                  <00",
            "00                                   %%     ii     000                                                          <00",
            "00                                   %%     ii     000                                                          <00",
            "00                                   %%     ii     000                                                          <00",
            "00                                   %%     ii     000                                                          <00",
            "00                                   %%     ii     000                                                         b<00",
            "00                                   %%     ii     000                     /   E  /    E /    E /    E /       D<00",
            "00                                   %%     ii     000                    5===============================5^^^5=<00",
            "00                                  U zU    ii     000               5=====ccccccccccccccccccccccccccccc        <00",
            "00a                               c U00U  a ii   b <            5=====ccccc  a ccccccccccccccccccccccccccc     c<00",
            "00D /      /   E  /    E /   f  / S U00U  S ii   S <       5=====     ccccc  ] ccccccccccccccccccccccccccccc   D<00",
            "005^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^00^^^^^00^^^^50005^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^500",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },
    "DEEPCorridor" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPRoom5",
                symbol : 'b'
            },
            'b' : {
                level : "FlashLightRoom",
                symbol : 'a'
            },
            'c' : {
                level : "DEEPHallway",
                symbol : 'a'
            },
            'd' : {
                level : "DEEPRoom5",
                symbol : 'c'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "005=============================================================================================500",
            "00=                             &           &       &     &                                     =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=                                                                                             =00",
            "00=     ccc              ccc                                              ccc         ccc       =00",
            "00=a          b                     c   cc   c     c          c                               cc=00",
            "00=D / f   /  D  /  E  /     /      c   cc   c     c    E     c   / E   /     /  E  /     /   DD=00",
            "005==============================5  b   bb   b     b  bbbb    b   5=============================500",
            "0000000000000000000000000000000000  b   bb   b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bb   b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bb   b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bb   b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bb   b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bbd  b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bbD  b     b  bbbb    b   000000000000000000000000000000000",
            "0000000000000000000000000000000000  b   bbb  b     b  bbbb    b   000000000000000000000000000000000",
        ]
    },
    "DEEPHallway" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPCorridor",
                symbol : 'c'
            },
            'b' : {
                level : "DEEPRoom6",
                symbol : 'a'
            }
        },
        plan : [
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "005=============================================================5===============================500",
            "00=                                                             =0000000000000000000000000000000=00",
            "00=                                                             =0000000000000000000000000000000=00",
            "00=                                                             =0000000000000000000000000000000=00",
            "00=                                                             =0000000000000000000000000000000=00",
            "00=         ccc           ccc           ccc                     =0000000000000000000000000000000=00",
            "00=                                                             =0000000000000000000000000000000=00",
            "00=aa                                                           =0000000000000000000000000000000=00",
            "00=DD    /      /      /      /      /      /      /            50000000000000000000000000000000=00",
            "005==================================================5            000000000000000000000000000000=00",
            "0000000000000000000000000000000000000000000000000000000             0000000000000000000000000000=00",
            "000000000000000000000000000000000000000000000000000000000             00000000000000000000000000=00",
            "00000000000000000000000000000000000000000000000000000000000             000000000000000000000000=00",
            "0000000000000000000000000000000000000000000000000000000000000             0000000000000000000000=00",
            "000000000000000000000000000000000000000000000000000000000000000             00000000000000000000=00",
            "00000000000000000000000000000000000000000000000000000000000000000             000000000000000000=00",
            "0000000000000000000000000000000000000000000000000000000000000000000             0000000000000000=00",
            "000000000000000000000000000000000000000000000000000000000000000000000             00000000000000=00",
            "00000000000000000000000000000000000000000000000000000000000000000000000             000000000000=00",
            "0000000000000000000000000000000000000000000000000000000000000000000000000             0000000000=00",
            "000000000000000000000000000000000000000000000000000000000000000000000000000                     =00",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000                 bb=00",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000  /    /    /  DD=00",
            "0000000000000000000000000000000000000000000000000000000000000000000000000000000005==============500",
        ]
    },
    "DEEPRoom6" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        doors : {
            'a' : {
                level : "DEEPHallway",
                symbol : 'b'
            },
            'b' : {
                level : "DEEPBossRoom",
                symbol : 'a'
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "goldbar",
                }, 
                {
                    contains : "goldbar"
                }]
            },
            'b' : {
                items : [{
                    contains : "fairy"
                }]
            }
        },
        plan : [
            "00000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000",
            "005=================================================================500",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=                                                                 =00",
            "00=aa                   b             a                           bb=00",
            "00=DD  /  QQ  /      /  ]   /      /  ]   /      /  QQ  /   f  /  DD=00",
            "005=================================================================500",
            "00000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000",

        ]
    },
    "DEEPBossRoom" : {
        theme : "underground",
        background : "deep",
        doors : {
            'a' : {
                level : "DEEPRoom6",
                symbol : 'b'
            },
            'b' : {
                level : "backToOverworld",
                symbol : 'a',
                hidden : true,
                locked : true,
                magic : true
            }
        },
        signs : {
            'a' : {
                message : "Boss Not created Yet...",
                adjustW : 140
            },
        },
        bosses : {
            'a' : {
                name : "captainFleep"
            }
        },
        plan : [
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "005=============================================================================500",
            "00=                                                                             =00",
            "00=                                                                             =00",
            "00=                                                                             =00",
            "00=                                                                             =00",
            "00=                                                                             =00",
            "00=        a                                                                    =00",
            "00=        B                                                                    =00",
            "00=aa                                       b                                   =00",
            "00=DD    p                                  D                                   =00",
            "005=============================================================================500",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "00000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
    },  
    "FlashLightRoom" : {
        theme : "underground",
        background : "deep",
        nightMode : true,
        removeArraysToSave : ["stomper"],
        doors : {
            'a' : {
                level : "DEEPCorridor",
                symbol : 'b'
            }
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "flashLight",
                    total : true,
                    offX : 40,
                    offY : -40,
                    width : 24,
                    height : 54
                }],
                save : true,
                hidden : true
            }
        },
        plan : [
            "5=====================================5",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=                                     =",
            "=a         a                          =",
            "=D p       [         g  g  g          =",
            "5=====================================5",
        ]
    },
    "backToOverworld" : {
        theme : "surface",
        addArraysToSave : ["crystal"],
        doors : {
            'a' : {
                level : "DEEPBossRoom",
                symbol : 'b',
                magic : true
            },
            'b' : {
                level : "desert",
                symbol : 'a'
            }
        },
        special : {
            'a' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "underground"
                    },
                }
            },
        },
        chests : {
            'a' : {
                drops : [],
                save : true
            },
            'b' : {
                drops : [{
                    contains : "flashLightUpgrade",
                    total : true,
                    offX : 40,
                    offY : -40,
                    width : 24,
                    height : 54 
                }],
                save : true
            }
        },
        plan : [
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                       &           ",
            "                                                                                                   ",
            "                            ccc             cccc               &              &                    ",
            "   a  a  b                                                                                        b",
            " T D  $  [ QQ  f T     e      T    e                                                              D",
            "ggggggggggggggggggg E       ggggggggggge  e    e    T                  ccccc           A gggggggggg",
            "dddddddddddddddddddgggggggggdddddddddddgggggggggggggggg   e                         gggggdddddddddd",
            "bbbddddddddddddbbddddddddddddddddddddddddddddddddddddddgggggggggggggg E        A  ggddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddgggggggggggggdddbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     ",
            "bbbbabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     ",
            "bbbb[bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb                     ",
        ]
    },
    "desert" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "backToOverworld",
                symbol : 'b'
            },
            'b' : {
                level : "desert 2",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                                   ",
            "                                                                                  ccccc            ",
            "                                             &                                                    b",
            "                              cccc                                                       e        D",
            "a              cccc                                               e       A      gggggggggggggggggg",
            "D        A                                     A    E   A    ggggggggggggggggggggdddddddddddddddddd",
            "ggggggggggggg                    A   gggAggggggggggggggggggggdddddddddddddddddddddddddddddddddddddd",
            "dddddddddddddgggggggqqqqqqqqgggggggggdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddqqqqddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        ]
    },
    "desert 2" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert",
                symbol : 'b'
            },
            'b' : {
                level : "desert path 1",
                symbol : 'a'
            },
            'c' : {
                level : "desert path 2",
                symbol : 'a',
                locked : true
            }
        },
        plan : [
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                               &                                                           ",
            "                     &                                                                                     ",
            "                                                                                                           ",
            "                                                                &                                          ",
            "    cccc              ccccc                                                               cccccc           ",
            "                                                ccccc                                                      ",
            "a                         A                                                                             b c",
            "D      T       e   T ggggggggggg    A                                               T       A      A    D D",
            "gggggggggggggggggggggdddddddddddggggggggg           A           e             A  ggggggddddddgggggggggggggg",
            "dddddddddddddddddddddddddddddddddddddddddgg  E gggggggqqqqqqqqqqqqqqqqqqqdddddddddddddddddddddddbbbbbbbbbbb",
            "dddddddbbbbddddbbbdddddddddbbddddddddddddddggggdddddddqqqqqqqqqqqqqqqqddddddddddddddddbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert path 1" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert 2",
                symbol : 'b'
            }
        },
        keys : {
            'a' : {
                level : "desert 2",
                symbol : 'c'
            }
        },
        plan : [
            "                                                                                                                   ",
            "                                                                                                                   ",
            "                                                                                                           &       ",
            "                                                                        &                                          ",
            "                                                                                                                   ",
            "                                                                                                                   ",
            "                                                                                      ccccc                        ",
            "                                                                                                                   ",
            "   cccccc                                   ccccc                                                                  ",
            "                                                                   T             A   ggggggg  A                  A ",
            "a                A               T  E   A T                 E      ggggg  a  ggggggggdddddddggg       E   ggggggggg",
            "D     e   A  ggggg             ggggggggggggggggggqqqqqqqgggggggggggddddd  K  ddddddddddddddddddgggggggggggddddddddd",
            "gggggggggggggdddddde           ddddddddddddddddddqqqqqqqddddddddddddddddd   ddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddqqqqqqqqqddddddddddddddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert path 2" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert 2",
                symbol : 'c'
            },
            'b' : {
                level : "desert plain",
                symbol : 'a'
            }  
        },
        plan : [
            "                                                                                      ",
            "                                                                                      ",
            "                                                                                      ",
            "                                                                                      ",
            "                                                                         &            ",
            "                                                                   &                  ",
            "                                                                            &         ",
            "                                                                                      ",
            "                                                                 cccccc               ",
            "                                                                                     b",
            "                                                                  E ee   E           D",
            "                           cccccc                       A   e   ggggggggggqqqqqqgggggg",
            "a    cccccc                                             ggggggggddddddddddggggggdddddd",
            "D           e     A                       A      E gggggdddddddddddddddddddddddddddddd",
            "ggggggggggggggggggggg A  E       A e  e gggggddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddqqqqgggggggqqqqqddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert plain" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert path 2",
                symbol : 'b'
            },
            'b' : {
                level : "desert plains 2",
                symbol : 'a'
            },
            'c' : {
                level : "desert plains 3",
                symbol : 'a'
            },
        },
        plan : [
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                                   ",
            "                                                                            &      ",
            "                                                                                   ",
            "                                                                            b  c   ",
            "                                                                        e T D  D T ",
            "a                A     E                                      T    e  ggggggggggggg",
            "D   e    A    gggggqqqgggg e            A             e   A   ggggggggddddddddddddd",
            "ggggggggggggggddddddddddddgggge   n   ggggggggg  n gggggggggggddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddd######dddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert plains 2" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert plain",
                symbol : 'b'
            },
            'b' : {
                level : "desert x",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                               ",
            "                                                                                               ",
            "                                                                                               ",
            "                                                                   ccccc                       ",
            "                      cccc                                                                     ",
            "      ccc                                                                                      ",
            "                                               A     A                                         ",
            "a                          A    A   A         ggggggggg      AAA                              b",
            "D   A     AA      A      gggggggggggggggggggggdddddddddggggggggggg        E   gggg            D",
            "gggggggggggggggggggggggggdddddddddddddddddddddddddddddddddddddddddggggggggggggddddggggggggggggg",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },  
    "desert plains 3" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert plain",
                symbol : 'c'
            },
            'b' : {
                level : "desert z",
                symbol : 'b'
            }
        },
        plan : [
            "                                                                                               ",
            "                                                                                               ",
            "                                                                                               ",
            "                                        &                                                      ",
            "                                                                                               ",
            "a                                                      ccccc                  &                ",
            "D         cccc                   ccccc                                                         ",
            "gggggg                   A                                                                  '  ",
            "ddddddggg          A    ggggg           A          A  gggggg       A                          b",
            "dddddddddggggggggggggggddddddgggggggggggggggggggggggggddddddgggggggggggg   A       A          D",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggggggggggg",
            "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },  
    "desert x" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert plains 2",
                symbol : 'b'
            },
            'b' : {
                level : "desert y",
                symbol : 'a'
            },
            'c' : {
                level : "desert z",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                       ",
            "                                                                                                       ",
            "                                                                                                       ",
            "                                                                                                       ",
            "                                                                                                       ",
            "                                                                                                       ",
            "                                           A                                                           ",
            "a          A      T             T   A   ggggggg    A      c         bb   bb   bb                      b",
            "D   T  A  ggggggggggg E     A  gggggggggdddddddggggg  T   D                             A     A       D",
            "ggggggggggdddddddddddggggggggggdddddddddddddddddddddggggggggg  e     E    E       e    gggggggggggggggg",
            "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggg################gggggdddddddddddddddd",
            "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb",
            "bbbdddddddddddddddddddbbbbbddddddddddbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert z" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert x",
                symbol : 'c'
            },
            'b' : {
                level : "desert plains 3",
                symbol : 'b'
            }
        },
        plan : [
            "                                                                                   ",
            "                               '                                                   ",
            "                                         &                                         ",
            "                              bbbb UU                                              ",
            "                                    U                                              ",
            "                                    U                                              ",
            "                                    U                                              ",
            "                                    U                                              ",
            "                                    U                                              ",
            "                                                                         cccc  cc  ",
            "                                                                       cc    cc  cc",
            "                                            ccc                        cccccccccccc",
            "                                           c       E                   cc   ccccccc",
            "a                                      e        ssPPP c                cc   ccccc b",
            "D      T                            PPPPPss               c          T       cccc D",
            "ggggggggggggg   e  T                                  PPP  c       gggg   T ggssggg",
            "dddddddddddddgggggggg  T   E           E                  E   gggggddddgssggddddddd",
            "dddddddddddddddddddddgggggggggggqqqqqqqqqqqqqqqqqqqqqqqqqgggggddddddddddddddddddddd",
            "ddddddddddddddddddddddddddddddddgg###################dddddddddddddddddddddddddddddd",
            "bbbbbddddddbbbddddddddbbbbdddddddd##############ddddddddddbbbddddbbbbddddddddddbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert y" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert x",
                symbol : 'b'
            },
            'b' : {
                level : "desert oasis",
                symbol : 'a'
            }
        },
        plan : [
            "                                                                                                         ",
            "                                                                                                         ",
            "                                                                                                         ",
            "                                                                                                         ",
            "                                                                                                         ",
            "                                                                                                         ",
            "                                                                                                         ",
            "                          ccccc           &                                                              ",
            "                                                   cccccc   &                                            ",
            "            ccccc                  A   E                                                                 ",
            "a                          A      gggggggg    T                  cccccc                  FFF            b",
            "D      T             T   gggggggggddddddddgggggg    e                        E    E                     D",
            "ggggggggg    A   e ggggggdddddddddddddddddddddddggggggggg                  gggggggggggcccccccc   ~  ggggg",
            "dddddddddggggggggggddddddddddddddddddddddddddddddddddddddgggg AAA gggggggggdddddddddddqqqqqqqqggggggddddd",
            "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgggggddddddddddddddddddddqqqqqdddddddddddddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "desert oasis" : {
        theme : "surface",
        doors : {
            'a' : {
                level : "desert y",
                symbol : 'b'
            }
        },
        plan : [
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "                                                                       ",
            "a               ~                                                      ",
            "D     QQ     gggggg  / f      /                   ~    ~ /             ",
            "gggggggggggggddddddddddddwwwwwddwwddwwwwwwwwwwddwdddddddggggggggggggggg",
            "ddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwddddddddddddddddddddddd",
            "ddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwdddddddbbbddddddddbbbddd",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ]
    },
    "helixShip" : {
        theme : "ship",
        doors : {
            'a' : {
                level : "desert oasis",
                symbol : 'a'
            },
            'b' : {
                level : "helixShip2",
                symbol : 'a'
            }
        },
        plan : [
            "                   ",
            "                   ",
            "bbbbbbbbbb         ",
            "b      + b         ",
            "b        b         ",
            "b        b         ",
            "b        b         ",
            "bb    a  b         ",
            "bD f  D gb         ",
            "bbbbbbbbbb         ",
            "                   ",
        ]
    },
    "helixShip2" : {
        theme : "ship",
        doors : {
            'a' : {
                level : "helixShip",
                symbol : 'b'
            }
        },
        itemChests : {
            'x' : {
                items : [{

                }, {
                    contains : "meal"
                }]
            },
            'y' : {
                items : [{
                    contains : "stick"
                }]
            }
        },
        plan : [
            "               ",
            "               ",
            "    bbbbbbbbbbb",
            "    b         b",
            "    b         b",
            "    b         b",
            "    b         b",
            "    b         b",
            "    bx  y    ab",
            "    b]  ]    Db",
            "    bbbbbbbbbbb",
            "               ",
        ]
    },
    "space" : {
        theme : "space",
        createStars : true,
        plan : [                                                            
            "p                                                                       ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
            "                                                                        ",
        ]
    },  
    "test" : {
        theme : "winter",
        background : "deep",
        doors : {
            'a' : {
                level : "test2",
                symbol : 'a',
            },
            'b' : {
                level : "test2",
                symbol : 'b',
                locked : true,
            },
        },
        keys : {
            'a' : {
                level : "test",
                symbol : 'b',
            }
        },
        chests : {
            'a' : {
                drops : [{
                    contains : "ninjaGuard",
                    total : true,
                }],
            },
            'b' : {
                regen : true,
                drops : [{
                    contains : "bubbleShield",
                    total : true,
                    xPos : 80,
                    yPos : -50,
                    diameter : 40,
                }],
            },
        },
        npcs : {
            'a' : {
                name : "Jason",
            }
        },
        signs : {
            'a' : {
                message : "/username",
            }
        },
        special : {
            'a' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "ninja"
                    },
                }
            },
            'b' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "overworld"
                    },
                }
            },
            'c' : {
                arrayName : "crystal",
                shape : "circle",
                diameter : 20,
                arguments : {
                    '4' : {
                        kind : "winter"
                    },
                }
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    contains : "fairy"
                }]
            }
        },
        plan : [
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                              %                ",
            "                                               ",
            "                                               ",
            "                       =              bbbbbb   ",
            "    a                       a     b            ",
            " f  D         T     bbbbb p [     [            ",
            "gggggggggggggggg   gdddddgggggggggggggggggggggg",
            "bbbbbbbbbbbbbbbb   bbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "test2" : {
        theme : "underground",
        plan : [
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "                                               ",
            "           p d      g                          ",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "test3" : {
        hearts : {  
            'a' : {
                amt : 5,
            }
        },
        plan : [
            "                                           ",
            "                                           ",
            "                                           ",
            "                                           ",
            "                                           ",
            "                            AA             ",
            "     R   L     r   l               VV      ",
            "                       R  L                ",
            "               p                           ",
            "  bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  ",
            "                                           ",
            "         bb                                ",
            "       bbL                                 ",
            "      bL    r b       bb                   ", 
            "          r bb       bL     b00000b    A   ",
            "    E   r bb   r bl         bAAAAAb   bbwww",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    }
};
/* Levels Key
         'g' : ground*
         'd' : dirt*
         'b' : block*
      'W''w' : water*
         'T' : tree*
         'i' : ice*
         'C' : cloud*
         '#' : lava*
         'e' : fireBeaker*
         'E' : waterBeaker*
         '%' : shooter*
         '*' : cloudMine*
         '&' : skyViper*
         'I' : ninja*
         'A' : spike*
         'U' : ladder*
      'N''n' : movingLava*
         's' : spring*
         'P' : fixedPlatform*
      'X''x' : crate*
      'M''m' : movingPlatform*
         'c' : coin*
         'h' : hpCoin*
         'o' : circle*
         'O' : ring*
         '0' : dynamicCircle*
         'F' : FallingBlock*
         'u' : backblock*
'<''>''^''v' : one-way*
'l''r''L''R' : slope*
         'S' : Sign*
         'p' : player*
         'D' : door*
         'f' : checkpoint*
         'K' : key*
         '[' : chest 
         't' : spaceBreaker
         '|' : pillar
         '@' : npc

    Settings :
        inWater : true,
        hideScreen : true,
        nightMode : true,
        daylightCycle : true,
        darkGrid : true,
        debugMenuWhite : true,
*/