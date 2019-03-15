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
                locked : true,
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
                message : "Or to go through\n a door.",
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
                message : "Press 'x' to dash /\n zoom in and out.",
                adjustW : 120
            },
            'x' : {
                message : "You can even press 'e'\nto open your inventory!",
                adjustW : 120
            },
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
            "                    b   d   e   a   h   i   x   c",
            "                    D   S   S   K   S   S   S   D",
            "                   gggggggggggggggggggggggggggggg", 
            "                   dddddddddddddddddddddddddddddd",
            "                   dddddddddddd                  ",
            "p                  dddddddddddd   k   f   g     e",
            "a   b       c   a  dddddddddddD   S   S   S     D",
            "S   S   f   S   D  ddddddddddddddddddddddddd##ddd",
            "gggggggggggggggggggddddddddddd##ddddddddddddd##dd",
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
                message : "behindTheVillage",
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
            "ba    a      b",
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
            "bD     U  @  b",
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
            "                           b  AA  T   cccc     f        cc          Aggg    gggA         p   ",
            "                          bb Addddddgggggggg  gggg     cii        gggddddAAddddd   hh  b b b ",
            "                           ddddddibddibddibd  dibd      i     bhh dddddddddddd     hh  S D S ",
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
    "coreGround" : {
        theme : "overworld",
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
                level : "behindTheVillage",
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
        theme : "overworld",
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
        theme : "overworld",
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
            "K S           II  b     ch      cc        UU b     b   i UU ",
            "^^^^^^^^^^^^^^^^^^b     hc   PPPPPbbbPPPP UU b     b   i UU ",
            "vvvvvvvvvvvvvvvvvvb          bb           UU   hh  b   i UU ",
            "                             bb           UU       bsssi UU ",
            "                     PP      bb       e   UU E     b     UU ",
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
            "                                                                                                                        iii",
            "                                                                                                                        iii",
            "                                                                                                                        iii",
            "                                                                                                                        iii",
            "                                                                                                                       biii",
            "                                                                                                                       biii",
            "                                                                                    AA                                bbiii",
            "                                                                                    bb                               bbbiii",
            "                                                                                    PP                             bbbbbiii",
            "                                                                                    PP                             bbbbbiii",
            "                                                                                 A PPPP A                           iiiiiii",
            "                                                                                UbPPPPPPbU                            * iii",
            "                                                                       AU    A  UbbbbbbbbU  A    UA                 iiiiiii",
            "                                                                        U       Uu   u   U       U                 bb   iii",
            "                                                                        U       UP PPPP PU       U                 bb   iii",
            "                                                                        U       UP PbbP PU       U  c              bb   dii",
            "      A           A           A           A           A             p  |U  f |  U| PDDP |U  |    U| D              bb   Dii",
            "                                                                    bPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPgggddggggdd",
            "                                                                 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "a                          a     b     d     c     e          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "D  p  |     |     |     |  S  |  S  |  S  |  S  |  S  |    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "ninjaTemple" : {
        theme : "ninjaTemple",
        daylightCycle : true,
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
            "b                              d*d    p                           2  2222222222 U bbbb",
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
            "QD S  bUUbbbbbbbbbUUbbbbbbbbbUUddd   [  f    DPD                  Q  bbbbbbbbbccUccbbb",
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
            "Pb                                          c   b         b                               h bP",
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
        darkGrid : true,
        doors : {
            'a' : {
                level : "ninjaTempleBackyard",
                symbol : 'b',
                // locked : true,
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
            ">                 %     %     <",
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
            "Poa     b   c                                     cc              cc   ii               PPP           b       c i         b       i       c i     i  h  i      b      ",
            "PoD f   D   D      |     | |          |     |             *            i  |       |     PPP          b       c c i       b       i i     c c i     i   i       b   t  ",
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
            "                                                                                                                        bbiiib                                                           bbiiibbbbbbbbbbbbbbbbbbb",
            "                                                                                                                        R bbbb          |     |     |     |  |     |     |     |         DbbbbL  V  V  V  V  V  V",
            "                                                                                                                          R bbb         /     /     /     /  /     /     /     /         bbbL                    ",
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
            "bbFaFbb                                   bb h bP  Pb c bb                                   bb h bb                             bb   bb                  FUUF              bbFFFbbVFFFFFFb                      ",
            "bbFDFbb                                   bbhhhbv  vbcccbb                                   bbhhhbb                             bbhhhbb                  FUUF              bVbFbVFFFFFFFFb                      ",
            "b FFF P                                   PV h VP  PV c VP                                   PV h VP                             PV   VP                  FUUF              bFFbbFFFFAbbbFb                      ",
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
            "D   |   |    p    |   |         |   |         |   |         |   |          | f |   S Ubb",
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
            "b                       b",
            "b                       b",
            "b                       b",
            "b          a            b",
            "b          B            b",
            "ba                     bb",
            "bD       p  z          Db",
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
            "b           a b a         u    u    u  b",
            "b         | S D [  |                   b",
            "ba      ibbbbbbbbbbbi                  b",
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
            "iii                s                 s s                                                                    s   s                                                bbbbbbb11iibbbbbbi       bbbbbiii  iiiibbbiiiii    ii1111iii bbii                 A1i1                                           iii",
            "iii                C    s            C C    s  s                        33ggg        4bbbb44                C   C                      ccc                             b11ibbbbiii         bbi   V   i   bbdd        ibbi   V  bi                  1ii1                                           iii",
            "iii                     C                   C  C                       gggddb      FFib11bb4                              c       cc          cc      gg11bbbFFF      iiiiiibb             ii        V  bbdbdi        bbi     bbV                  1ii1                                           iii",
            "iiia                                                                  gdddddb  cc    ib11bbgT                             S                       ggggdd1bb           i  iiibb  A           i           bddddi      bbbi     bb                   A1ii1                                           iii",
            "iiiD                                                                 bdddibbb        ib111bdgg                          iiii      m   bFFFb    m  bdddd11b       M    V   iibbiii           V           bddddii    bbi       b                   A1ii1V                                           iii",
            "iii1111                                                             4bbbi  bb         ib11bbdd       ccc              iibbbb11m          m        iiii11b                 iibbbbbiiA                   bddddddi  bbiiV      bb                  A1ii1V                                            iii",
            "iii                                                                44bbi    bggFF      ib11bbd                      iibbbbbbb11                   V ii111b                Viibbbbbbi                  bdddddddibbbi         bb      T  T  2    A1ii1V                                             iii",
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
            "bbbbbbbbbbbbb                                                                           bbbbbbbbbbbbbbbbbbbbbbdddddddddddddddd1AAAAA111111111A  111A1Adddddbbbbbbbbbbbbdbbbb                   ccc                          ccc                      UU1bbbbbbbbbbbbbbbbb                            ",
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
            "a                                                                                                C                                                                                                                                                                                                                                                                oo                                            >                                                        <                                                                     T  T r gggggggggggggdddddddd",
            "D____                   ccc          s                                                                       s                                                                                                                                                                                                                                                                                                  >                                                        <     f                                                          r ggggggggddbbbbbbbbbbbbbbbbbbbbb",
            "bbbbb_____                           C                  s               s                                    C                                              s              s                                                f                      O                                                                                          b                                                        b        b      bU   iii                                             bbbbbb                                                   Tr ggddbbbbbbbbbb111111111111111111111",
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
            "                                                                                                   p                                                          WWiiiiiiiiiii",
            "                                                                                           __________                                                         WWibbbbbbbbbb",
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
            "                                          E  r 1111iii11iii1iiiiiiwwiiiwwiiiiiiiiwww66666wii1wwwwwwiiiiiiiiiiiiiiiiiiii114    k            k    k        gggggggdddd                  FFF                                                                                                                                               3a3                                                                                        ",
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
            }
        },
        itemChests : {
            'a' : {
                items : [{
                    
                }, {
                    
                }, {
                    
                }, {
                    contains : "meal",
                }, {
                    
                }, {

                }, {

                }, {

                }, {

                }, {
                    
                }],
            },
            'b' : {
                items : [{
                    contains : "Jar",
                }, {
                    
                }, {
                    
                }, {
                    
                }, {
                    
                }, {
                    contains : "ball",
                }, {
                    contains : "goldbar",
                    amount : 3,
                }, {
                    contains : "bubbleShield",
                }, {

                }, {

                }],
            },
        },
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                       UU                                                                                          ",
            "                       UU                                                                                          ",
            "d                      UU                                                                                          ",
            "D                      UU         E     2       E                      EE                                          ",
            "bbbbbbbbbbbbbbbbbbbbbb^UU^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^11                      ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                                                  1s1                     ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                                                  1ss1                    ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                                                  1sss1                   ",
            "iiiiiiiiiiiiiiiiiiiiib UU                                                                  1ssss1                  ",
            "bbbbbbbbbbbbbbbbbbbbbb UU                                                                  1sssss1                c",
            "                       UU                                        8                         1ssssss1               D",
            "                       UU                                  bbbbbbbbbbbbl                   1sssssbbbbbbbbbbbbbbUUbb",
            "                       UU                               bbbiiiiiiiiiiiiiil                 1ssssssssiiiiiiiiiiiUUii",
            "a              a    b  UU                            bbb1111iii      V   iil               1ssssssssssssssssssiUUis",
            "D pf           ]    ]  UU    8          A    A    bbb11111111 V            iil           r iisssssssssssssssssiUUis",
            "bbbbbiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111iii              V iil       r iisssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb11111111111111111111111111111111111111i                 iil   r iisssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb1111111111111111111111ii111111111iiii V                  iiivviiissssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb1111111iiii11111111111iii1111111111 V                    i      issssssssssssssssssssssiUUis",
            "1111bwwwwwwwwwwwwwwwwwb11111111iiii1111111111iii111111111                  bbbbbb      bbbbbbbssssssssssssssssiUUis",
            "1111biiiiiiiiiiiiiiiiib111111111111iii11111111111111111 V                  b    V      V    bbvvvvvvvvvvvvvvvvi  iv",
            "111111111111111111111111111111111111111111111111111111                     b                 I                     ",
            "1111111111111111111111111111111111111111111111111111 V                     b                 I                     ",
            "1111111111111111111111111111111111111111111111111111                       b       bb        I                     ",
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
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "                                                                               ",
            "                                                                               ",
            "b                 ccc             ccc              ccc                        a",
            "D  f  QQ                                                                      D",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
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
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
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
        plan : [
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiii VV iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiii ii         iV     V  i       ii    iiiiiiii",
            "iiV   VV  ii        V         i       V     Vi    Vi",
            "ii        VV                  V              V     i",
            "ii                                                 i",
            "ii               7                                  ",
            "ii                                   7              ",
            "ii             FFFF                        FFF      ",
            "ii                         FFF                      ",
            "ii                                                  ",
            "ii     FFF                 7          FFFF          ",
            "ii                   FFF                            ",
            "ii                                                 a",
            "ii                                                 D",
            "iii   iiiiiiiiiiiiiii   b  iiiiiiiii     iiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiii bbbiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
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
            "           r 1111111wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "         r 111wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "a      r 111wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "D    r 111wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "bbbb1111111111111111111111111111111111111111111111111",
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
            }
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
            "               cccc                          PI    ]    IP                 ii_           ",
            "                 2                          bbbbbbbbbbbbbbb                iii___        ",
            "              PPPPPP                           PWWWWWWWP                    iiiii_       ",
            "      hhh                                      PWWWWWWWP                     iiiii_      ",
            "a  p  hhh                                      PWWWWWWWP                    iiiiiii_    b",
            "D  f  hhh                r iiiiiiiiiiiiissiiiiiPWWWWWWWP                  iiiiiiiiii  f D",
            "iiiiiiiiiiiiiiiiiiiiiiiiiii11111111111111111111iPPPPPPPiiiissiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "wwwwwwwwwwwwwwwww111111111111111111111111111111111111111111111111111111111111111111111111",        
            "wwwwwwwwwwwwww111111111111111111111111111111111111111111111111111111111111111111111111111",
            "wwwwwwwwwww111111111111111111111111111111111111111111111111111111111111111111111111111111",
            "wwwwwwwwwwwwww111111111111111111111111111111111111111111111111111111111111111111111111111",
            "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ]
    },
    "fold" : {
        theme : "winter",
        addArraysToSave : ["dirtyCat", "waterBeaker", "iceBeaker", "wisp"],
        doors : {
            'a' : {
                level : "entry",
                symbol : 'b'
            },
        },
        plan : [
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "                                                                   ",
            "a                                                                  ",
            "D                                                                  ",
            "iiiiiiiiiiiiiiiiiiiiii                                             ",
            "wwwwwwwwwwwwwww1111111111iiiiiiiiii111iii1111iiiiiiiiiiiiiiiiiii   ",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww11111",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwiiiiiiii",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwiii111bbb",
            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwiii1bbbbb",
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
            "iiiiiiii                        iiiiiiiiiii",
            "iiii                              iiiiiiiii",
            "iii                a               iiiiiiii",
            "iii                [                 iiiiii",
            "iii       h h    PPPPP   h h           iiii",
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
    "IceDragon" : {
        theme : "winter",
        bosses : {
            'a' : {
                name : "iceDragon"
            }
        },
        plan : [
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                 p                                         ",
            "                                                             a                                             ",
            "                                                             B                                             ",
            "                                                                                                           ",
            "                                                                                                           ",
            "                                                                                                           ",
            "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        ],
    },
    "test" : {
        background : "underground",
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
                    contains : "bubbleShield",
                    total : true,
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
            "                                          wwwww",
            "    a                                     wwwww",
            "    D   p  ee        ``~~99              wwwwww",
            "gggggggggggggggg   gggggggggggggggggggggggggggg",
            "bbbbbbbbbbbbbbbb   bbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
    },
    "test2" : {
        doors : {
            'a' : {
                level : "test",
                symbol : 'a',
            },
            'b' : {
                level : "test",
                symbol : 'b',
                locked : true,
            },
        },
        keys : {
            'a' : {
                level : "test2",
                symbol : 'b',
            }
        },
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
            "                                               ",
            "                          a                    ",
            "      f                            sp  D       ",
            "ggggggggggggggggggggggggggggggggggggggggggggggg",
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