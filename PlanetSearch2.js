var sketch = function(processing) /*Wrapper*/
{
    processing.size(400, 400);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function() 
    {
        mouseIsPressed = true;
    };
    processing.mouseReleased = function()
    {
        mouseIsPressed = false;
    };

    var keyIsPressed = false;
    processing.keyPressed = function()
    {
        keyIsPressed = true;
    };
    processing.keyReleased = function() 
    {
        keyIsPressed = false;
    };

    function getImage(s) 
    {
        var url = "https ://www.kasandbox.org/programming-images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    processing.loadBase64 = function(base64, onload)
    {
        var image = new Image();
        image.src = base64;
        image.crossOrigin = "Anonymous";
        image.onload = function() 
        {
            var context = canvas.getContext('2d');
            processing.background(0, 0, 0, 0);
            context.drawImage(image, 0, 0);
            onload(processing.get(0, 0, image.width, image.height));
            processing.background(0, 0, 0, 0);
        };
        return image;
    };

    String.prototype.upper = function() 
    {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
    String.prototype.startsWithVowel = function()
    {
        return (['a', 'e', 'i', 'o', 'u'].indexOf(this.charAt(0).toLowerCase()) !== -1);
    };

    function getLocalImage(url) 
    {
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    // use degrees rather than radians in rotate functions
    var rotateFn = processing.rotate;
    processing.rotate = function(angle) {
        rotateFn(processing.radians(angle));
    };
    
    processing.scaled = false;

    processing.hint(processing.OPENGL);

    with(processing)
    {

/**   Hybrid Game Engine (Planet Search 2)  **/
/**
    @Author Prolight
    @Version 0.8.4 beta (84% complete)

        64+ gameObjects!

    @How :
        Use the arrow keys to move. Down to go through 
        doors / set Checkpoints / collect keys / items.
        There are crates you can move. 'r' to restart level.
        Have fun, through it's a demo.
    
    @Info : 
        It's Called Hybrid Game Engine because it's a hybrid between 
        The Cartesian System and physics.
    
    @About Cartesian System :
        The cartesian system is a coordinate grid Designed to split up
        the objects into cells. Speeds up your game 3x by using cells for
        collision detection between adjacent cells. It only renders cells 
        with in the screen controlled by the camera. Will work with any 
        platformer with an array for the arrays for all of it's gameObjects. I hope
        you understand.
**/
/**
    Updates : 
        Note: Some logs are missing due to late logging in early development
    * v0.0.5 Full Cartesian System in place
    * v0.1.0 Circle and rectangle Physics reached
    * v0.1.5 Objects added 
    * v0.2.0 doors checkpoints keys
    * v0.2.1 Getting ready for graphics
    * v0.2.2 Cloud, dirt, ground and door graphics
    * v0.2.3 Image and screenUtils delegates / Json fully in place
    * v0.2.4 LoadImage function is pretty much done, added extra cloud graphics and a Sun, 
    plus checkPoints now are flags, 
    * v0.2.5 Added Dynamic rectangle physics and the key graphic, crates (with nicer collision) are 
    now in the game just needs the player sprite and then it will be to the next version
    * v0.2.6 Signs, oneways and moving platforms are added 
    * v0.2.7 Crate and ball physics are completely stablized
    * v0.2.8 Slope Prototype added
    * v0.2.9 Images can now load in khan academy mode
    * v0.3.0 completed slopes though they seem a little glitchy
    * v0.3.1 fps and physics adjusted
    * v0.3.2 Changed graphics to load
    * v0.3.3 - 0.3.4 Added a better player graphic. Made clouds in background move. Removed old background and code
    Title Screen added (too much like original) Pause Menu added. How and extras menu (For extra stuff) added.
    Added an infomation bar.
    * v0.3.5 Made the restart key 'r' so you can't hold it down and have the game keep restarting. Added a tutorial level
    * v0.3.6 Added platforms using oneways, added coins, got rid of suddle glitches with slopes and oneWays.
    * v0.3.7 Added water, ice, Falling blocks and ladders.
    * v0.3.8 +I have added a type to all the gameObjects. 
        +Added a lifeform object
        -Removed a glitch with the water enabling you to swim into the underside of blocks
        +Added an enemy gameObject
        +Made moving platforms realistic in terms of physics
        +Made starting checkpoints invisible     
    * v0.3.9
       + Made moving platforms on the x level have a 
        custom bounding box, so they are more likely to come back.
        +Allowed enemies to push crates, made crate physics more realistic
        -Fixed bug where a circle on left wall disappears.
        +Added point-circle collision detection and point-slope collision detection
        +Added enemy raycasting  
    * v0.4.0 #The Debug update
      + Added a debug cartesian system on right click 
      + Extra settings with buttons!
        This is getting close to 5000 lines of code woah!
      + Added a loading screen with a percentage. 
        I might turn it off for small loading quantities 
      + The loading Screen now has a bar  
    * v0.4.1 
        +I've added fire beakers and water beakers   
        +Created ordered rendering
        +Beakers switch eyes
    * v0.4.2 
       +Added shooters
       +Shooters now have health 
       +Crates now drop items
       +There are now two types of crates, the ones that break and the ones that don't
       +Shooters now working ka mode
       -Fixed bug with invisible / reappearing objects
        by instead of deleting objects, hiding them by replacing them 
        with a gameObject class 
    * v0.4.3
        Cloud mines are now added
        We now have Sky vipers and Ninjas with Ninja stars
    * v0.4.4
        Spikes and clouds added!
    * v0.4.5 #The sound and saving update!
        sounds.js in place! (Incomplete)
        Saving menu and saver added
        Put the canvas in the middle of the screen.
        Turned background outside of canvas to black
        Added unsupported browser warnings.
    * v0.4.6
        +Added sound effects
        +Added trees
        +Added extra "night mode" effect
        +Starting to add in the story of the game into a cut scene,
            in Between the title screen and the select save file scenes.
        +Added a levels key
        +Made slopes somewhat more accurate
        The storyline is done
    * v0.4.7
        +Added clouds with rain and snow
        -Removed the dummy object and replaced it with a dummy delegate
        -Removed snow piling up off screen
        +Added a lighting - grid effect, still not too sure what to do with it though 
        +Added light Fixtures
        +Finished weather and daylight cycle
        +Added a sprint ability
    * v0.4.8
        +Making the second level
        +Slope physics tweaked
        *Fixed loading / checkpoint bug
        *Fixed saving / check point bugs
        +added an air background
        *Found a bug with oneways and fixed it!
    * v0.4.9
        +crates are now way easier to push!
        +Sorted the files
        +Fixed compatiabliatly but not with the save data.
        +Fixed the text box
        -Loading from undefined level bug removed
        +Crates are now way easier to push
        +Saving is now fixed for all browsers!
    * v0.5.0 #The revision
        +Level editor (but in another program)
        -level file enclosure (but still needs to be turned into a json file which I couldn't do)
        +Made buttons easier to push with npcs
        +Sliders updated
        +TextBoxes updated
        *Circles now support rotation!
        *Changed npc message logic and added images to the npcs of Abby and Jason
        *Doors that go to other levels or rooms are now blue.
        +Levels can now choose if the debug menu is white.
    * v0.5.1
        +Added more levels
        +Put top and bottom collision on slopes
        +Added a village with more houses
        +Made the defeat viper challenge in the 2nd house in the village.
        *You can now see the keys the player has and put them up and down!
        *Fixed touching slopes disables bottom block collision
        *Fixed minor slope collision bug
        
    * v0.5.2 # The more items update
        +Added chests
        +Added a chest in level ???
        +Made the CoreGround level
        +Added The first powerup - The Bubble Shield!
        *Fixed bugs with bubble Shield!
        *Fixed esc infinite restarting level bug
        +Fixed sound error
        +Now the sound settings let you hear
        the coin sound when you click the volume bar 

    * v0.5.3
        Added a dark background
        CoreGround level done!
        SpaceBreaker, rendering is complete!
        Added raycasting for SpaceBreaker
        Changed slope collision once again -> works better

    * 0.5.4 # The bug-fixing update
        Made a mini-Battle level
        Updated bubble-shield to block launch balls from space breakers
        Fixed bubble-shield bugs
        Slightly fixed falling through oneways after thouching slopes bug
        Finished mini-battle level
        Changed: When you are low on hp bubble shields don't refresh your hp
        
        Note: bubbleShields now function easier

        UI: Is now easier to use
            Fixed: The save-exit no entry-bug (Where you can't start)
            Forced the start screen background to be spaceFromEarth (A background we can see)
            Fixed: The fast button press of play causes the restart of game progress
            Fixed: Up/down keys causes box char in the textbox object
            You can now chose save files with-out the mouse  
   
    * 0.5.5 #Quick saves
        Added save file name into player object!
        Made it easier to create a new save file!
        Made it easier to see buttons 
        Made it easy to see game saved!
        Made other things (misc) easier 
        Made the "bridge" in coreground save so that you can actually get back!
        Finally fixed the beaker slope glitch mania (Fixed the beaker forced underground because of slope bug)
        Made things in coreground function easier
        'p' can now exit the pause menu:
            When pressing 'r' your game doesn't actually save, but the flag is set/green
        Fixed (by making it refresh the page): Fix exiting and saving: -If you exit and enter into the same save file it won't work.
      
    * 0.5.6 #The more like a game update
        Made level called "night"
        Fixed things with nighttime lighting
        The player now has lives
        Made a new level called "ninja Temple Entrance"
        Made keys not appear when the player already has it
        With gameover screen
        Added extra comments
        Fixed an uncaught error "this.restart is not a function" changed to game.restart broke save files

    * 0.5.7 #The bug fixing / easier to use update!
        Cleaned the core of the game.
        Fixed that night mode flickering
        Made the select save file screen nicer with bigger left-right buttons,
            start screen back button and a copy button.
        Fixed player's hp problems
        Found the most friendly cell size
        Made the text on the hp bar easier to see,
        Made it possible to open the game using the keyboard!
        Made the story handler more dynamic 
        You can now see the verison in the start, select-save-file, extras, sound and settings screen(s)!
        
    * 0.5.8
        Made the fps counter more accurate
        Fixed a bug with the keyboard pause menu
        Fixed -When you go through a door your hp maxes out/you die
        Moved debug mode so it doesn't get stuck with the image while loading
        Fast load is now available!
        Player is now faster and now has the abilty to jump at different heights  
        The player now has a death animation

    * 0.5.9 #Fastest Version so far!
        The lighting grid is now way less laggy!
        You can now save your sound level!
        Moved Npc data outside of the levels' code
        Fixed Save file disappearence bug
        Cleaned up levels folder
        Removed: Npc talks about boring storyline stuff
        It can now replace /username with the actual player's name in dialog!
        Fixed: Player gets on wrong first checkpoint bug
        Fixed: Bubble shield renders over sign
        Added a crop lighting fixture mode.

    * 0.6.0 #Smoothest
        Scorebar now renders when fading.
        Other things like not rendering title, story, menu screen while unfading is fixed!
        Loading bar smooths out now!
        Fixed: While pressing 'r' the player does not render
        Fixed: The death animation flickers the screen
        Fixed: Death animation pieces dissapear in midair now it sometimes does that.
        Fixed: Clouds from being trippy
        Textboxes now can be closed by restarting the level or pressing the 'x' button and now text auto reads / scrolls

    [Smaller Updates]

    * 0.6.1 #Outsiders update
        Added a rename save button and did some other stuff to the select save file scene
        Fixed: Background save-changing instant fade change
        Fixed: Most of the text box issues
        Finished up the rest of text box stuff 
 
    * 0.6.2 #The more buttony update
        Switched play and copy buttons to make more sense in select save file scene
        Fixed minor lighting issues 
        Starting working on inside of ninja temple
        Themes are added 
        First room of ninja temple complete
        Added 3 more rooms the Ninja temple
        touched up on crate physics
        We can now play multiple sounds at once!

    * 0.6.3 
        Changed sound a bit
        Finished code that applies a config but can be overriden by the level
        Created a take damage function/method
        Beakers are now less powerful in damage
        Springs bounce less 
        Added a theme settings file
        Fixed more lighting grid issues
        All enemies are now less powerful

    * 0.6.4
        We can now chose which objects get saved as deleted in our levels!
        Added to space-savers to the code
        Got rid of some unnecessary code (Maybe uncommented code)
        Cleaned up TODO and Future Updates

    * 0.6.5
        Speeded up loading 10x
        Fixed levelshading when loading
        ladders are now white in the ninja temple 
        Added a defense up power-up!
        FireBeakers/temple beakers now have particles effects 

    * 0.6.6
        Fixed: objectSaver!
        We can now add arrayNames to save 
        & remove arrayNames to save
        & override existing theme arrayNames to save
        Added a defense percentage bar
        Enhanced the info bars
        Made that level to replace the "bomb" level
        Added a chest room for ninjas
        We now have cut-scenes!

    * 0.6.7
        Checked ladders being white!
        Added a get damage function option to life form object
        Doubled ninja amt in the backyard level
        Made a secret path to the backyard of the ninja temple
        Did a lot of work on the ninja temple!

        Fixed item regen in chests that have regen wouldn't regen there items
        made a backgroundDarkGrid (Backblock) choice so that it won't lag as much in the minibattle level
        ladders are now white
        You can now chose '9' to autorun or you can chose '0' to turn it off

    * 0.6.8
        Fixed minor issues with save file screen and defense chest and other stuff
        (Remember when adding objects that make ablities that save even after you die to add the arraysToSave)
    
        Fixed config arrays to save system by replacing "objectSaver" with "configAreaSaver"!
        Completely removed objectSaver system    
        Fixed a minor erase save file bug -duplication instead of deletion
        Got rid of a little bit of unnecessary code

    * 0.6.9 # Abilities and rpg. 
        Sky vipers now have knockback! (So you don't die instantly when they touch you)
        Multiplied players attack by 10 and multiplied all objects with hp by 10 (except for the player of course)

        Player now blinks after attack by a life form.
        Fixed cannot read property toString of undefined (When esc is pressed)

        Changed lifeforms' attack and hp
        Improved spacebreakers

        Did more work on the Ninja temple. (Made more rooms like the [ninja tank, hallway, boss, end])
        Made doors be able to stay open when you go through them
    
        Got rid of a ton of now unnecessary keys in the Ninja Temple
        Added a error handler
        Made the door lock until ninjas are defeated in level ninjaTempleBackyard by adding a key to appear

        Fixed the text rendering in a key
        Improved text dialog box
        Made text appear saying "It is locked." or something when you try opening a locked door

        Made player's fallspeed faster.
        Changed what npcs say.
        Made the dialog skipable.
        Fixed the erase save file copy bug.
        _______________________________________________________________________________________________________________________________________________________________________
        For later or done or undecided : Todo :
            1. Fix forever defense / bailup getting in ninjaTempleRoom#3 (again) (Improvement items have been disabled while I fix this)
            2. Improve all objects to do less damage and change their style to work with attack and make the game easier. (Make it harder but so you can last and play longer)
        _______________________________________________________________________________________________________________________________________________________________________

    * 0.7.0
        Fixed rectangle physics for real this time!
        Fixed the main loop(s) or the core.
        Fixed suddle oneway and AI glitches due to the new the systems works.
        Replaced width / 2 with halfWidth and also with height.
        Fixed that stupid measure text width bug.
        Crates now render over doors.
        Fixed that stupid beaker getting locked on blocks glitch.
        Fixed spike bouncing that wouldn't work.
        Fixed that strange bouncing thing with vertical moving platforms.
        Fixed spring padding!
        Made this room:
            ninjaTempleRoom#3 (beaker trial)
            Less of a pain!
        Added overworld theme to all levels before the ninja temple. [Coins will now be saved in those levels]
        Fixed slope physics!

    * 0.7.1
        Added spikes and a switch to the ninja temple boss room!
        Updated spike to fall down and go up and they now have a 
        green bar that show that they're connected to the ceiling.
        Added graphics to the lever. (Or switch)
        Made the lever (Or switch) have a handle.
        Made the boss, but without AI.
        Added trigger events to the level and lever.
        The boss now presses the lever to make the spikes come down on you.
        When a spike is defeated by jumping on it, it sheds small hp coins.
        Made the image for the boss
        Made the boss AI and stats for it.
        Updated the spikes!
        Made: Make an item (A hp heart that gives you 10/5 more max hp) for you to collect after defeating the boss
        Fixed hp Heart coming down when player has already collected it in the ninja temple boss room.
        Adjusted Levels
            
    * 0.7.2
        Fixed block being the same color when loaded glitch.
        Made the screen bigger.
        Made a crash screen.
        Fixed Spikes!
        Fixed ninja AI
        Added a cool way to end the world

        Added Levels :
            ninjaTempleWalkWay
            behindTheNinjaTemple

        Added a tower @behindTheNinjaTemple

        Made it so you can still play in 30 fps mode without slow downs in other browsers
        Hid the powerups you collect that are unused.

    * 0.7.3
        You now don't need to press down to activate a checkpoint
        You can still damage enemies while blinking
        Changed the cursor to cross when press mouse Right button instead of a sqaure.
        Made it so when jumping on an edge of a block next to water it does not stop you from jumping on it.

        Changed ninja temple room #1 (the room with all the doors) into ninja temple hub
        Fixed the door loading bug.
        Fixed strange save loading bugs with try catches
        Changed: that pesky level ninjaTempleRoom#3 to make it dynamic and easier.
        Added a lever into coreground (where it says touch lava for...)
        Added Hardcase block
        Added fog maachines!
        Finally added a power up handler.
        Finally added the Ninja Guard Power-up!

        Removed old defense power-ups from the code...

    * 0.7.4
        Simplified but fixed text boxes.
        Fixed minor level issues.
        Replaced getObject from the core engine of the code. (It is slow and also change raycasting)
        Doubled levelStepRows 10 -> 20 To speed up level loading.
        Removed defense up from the levels.
        Speed run game
        Fixed dialog text boxes.
        Added a winter background.
        Updated snow clouds with snow layers.
        Added super ice that is super slippy.
        Added messages that show which area you're in!
        Added a place after the Ninja Temple.

    * 0.7.5
        Changed running controls.
        Fixed the level fading.
        Removed upside spikes where they didn't belong in a level.
        Fixed an important ai bug with the Ninja Temple Boss where 
        he becomes defeatable while running. 
        Made slippy slopes only for the winter place.
        Made water blocks freeze over when next to ice.
        Fixed minor snow layer ai glitch where they would just stop.
        Fixed snow painting blocks -Snowballs and snowlayers will now 
        only paint the top of the block when they're there.
        Made it possible to set the alpha of the image you're saving.
        Snow balls are here but the circle-rect collision is unstable.
        Created an air bar.
        Fixed text width on air bar and intro title bar.
        Removed minor game.starting at wrong time bug.

    * 0.7.6
        Added game auto-delaging feature.
        Made a good cloud sleep timer.
        Created an ice beaker.
        Added two different types of snow blocks.
        Created snow blocks you can now move with your Ninjastar, but they teleport instead of move.
        Made a way to make 3x3 or largers blocks of water in winter levels because I overrided that property.
        Snow layers will now not spawn on snowblocks
        Made snowblocks transmit force, so that they work like a Newton's Cradle!
        Snow blocks are now more realistic and won't sink in water.
        Changed what it says on the power-up after the boss.
        Changed the dialog in all of houses in the village in the beginning of the game.
        (Got rid of that guy in the 2nd house)
        We now have nets yay!
        We now have a new cooler looking ice graphic!
        Added a lot of stuff to the level interX.

    * 0.7.7
        Made a bottom hud to go with the top one.
        Fixed the strange regeneration of hp when not needed on checkpoints.
        Fixed a message glitch (caused the game to crash) when going to the first level in the game.
        Fixed a few things with transistions.
        We now have an inventory!
        Made a way to re-save.
        Saving now covers adding new config areas into the game!
        The current power-up won't change when you die!
        Changed a door to not be locked so you can get the Ninja Guard power-up without having to find the secret entrance.
        We now have a new enemy but it's animation is incomplete.
        Fixed a few things that wouldn't let you beat the game
        Added another huge level, icy plains
        Fixed something with browser detection.
        Refined Wisps' Ice, aka the player can now get frozen.
        You can now deflect Wisps' ice
        Fixed the velocity animation on the player.
        
    * 0.7.8 
        Added 2 more levels!
        Super charged the game with fps by not calling frameRate all the time
        Fixed background resolution
        Added a dirty block!
        Added dirty Cat!
        Added catdog statue -moves when you can't see them
        Made doorsound.mp3 sound effect work with doors
        Added delag modes to the space breaker!
        Cat dog statues are done, they now have lasers!
        Changed the controls a bit, added more levels!
        Added the ice splicer power-up

    * 0.7.9
        Fixed new bugs that have popped up with things.
        Added more to the inventory menu.
        Like the item slots.
        Finished item slots and stuff.
        Fixed a bug with level saving.
        Added more levels.
        Started to make the ice dragon boss. Still need to figure out how to make the movement.
        Added a underground background!
        Added a level secret to "entry" level. You have to put the "energy" in the chest then it will destroy some ice.
        Fixed the freeze hit bug.
        Fixed bugs with the inventory items, where it was very unclear what was going on.
        Save files now must all have their own seperate name.
        Changed text with the rect in keys to be more reliable.

    * 0.8.0
        Removed 'x' button on text boxes, and the escape key.
        Made spikes in Ninja Temple Boss room move same speed in 30 fps mode.
        Zooming in or out of Night Mode is Fixed!
        The screen size/scale on the crash screen is now fixed.
        Changed the applyFps function to set the frameRate, and got rid of the setFrameRate function, it makes the game run faster!
        Fixed going into a level without a scene!
        Fixed the bug where the game crashes right after you collect a new power-up (Fixed but untested)
        The time the player takes to die is now consistent.
        Added a anti-undefined fps system.
        Fixed cave-background snapping.
        Changed the low alpha on intro text.
        Updated the tutorial level to include what things have changed.
        Key text length is verfied, it works!
        Reduced the intro story.
        Way better textboxes, they are fixed!

    * 0.8.1 #Faster fps!
        Fixed the gap between ground and tree.
        The player's autoRun variable will now be saved,
        so next time you play you can get right to it!
        Sort-of found a fix for the auto-button glitch.
        Made the npc abby say a thank you after you open the back door.
        The game now goes into cutscene mode when the player is doing his death animation.
        Completely fixed the background snapping.
        Commented out unnecessary things in the createArray to speed up performance!
        Updated weather effects, doesn't really work with the game though.
        Sped up get place on grid function.
        Night mode now renders faster!
        Changed clouds to be faster!
        Collision loop is now slightly faster.
        Got rid of unecessary code in the createArray!
        Completely removed weather object from the game.
        Completely removed the npc Owen from the game.
        Removed unneeded code from the messageHandler/talkHandler object(s).
        Just made it impossible to get out of a dialog box for cutscene error reasons.
    
    * 0.8.2 #Debugged!
        Fixed zooming in while not looking at the player.
        Sped up gameObjects.applyCollision function!
        Fixed a weird cloud bug where snow instead of rain falls.
        Modified processing.js to run a bit faster with images.
        We now have 2 different frameRate modes! p.doRaf & p.doSt!
        Added another delag button -F11, changes fpsTypes, auto/manual
        Hid the canvas border.
        Fixed backspace press goes back in Firefox.
        Did a few things to try to make this run in other browsers.
        Made a index.css file
        Fixed the keys: Enter, Esc and Backspace!
        There is now a scoring system for Enemies and xStars work as well.
        We now have wiggling falling ice.
        The Voxelizer is now in the game!

    * 0.8.3
        Fixed the cut-scene zoom in bug.
        Added the cut-scene to get the energy item.
        Fixed spike falling bug.
        Fixed water does not appear bug.
        Fixed another cut=scene bug.
        Fixed the door/sign entrance bug.
        Fixed the 30-fps mode can't see gameObjects when loading sometimes.
        Fixed the disappearance bug on cut-scenes.
        Added more to the existing levels in the ice place.
        Changed the text on the scoring system to fit.
        Made a special chest harder to get to.
        Removed all unnecessary comments
        Removed tiles object and array as it was unnecessary.
        Crystals are now in the game!

    * 0.8.4
        The save and exit button is now just the exit button.
        Added a new level: trek
        FireBeakers no longer hop on slopes.
        The player no longer walks when reading a sign.
        Fixed a few no-rendering glitches, and made the rendering a little bit faster!
        Added fps settings
        Fixed beaker glitch!
        Updated Moving platforms to not go back and forth when hitting water.
        Added a new level: Trek2!

    Next :   
        v0.8.6 -> 
            Do something about the underwater level. It doesn't make sense for the player to not have the oxygen bar.
            Fix the bubble shields. Maybe make bubble shield allows you to go underwater?

            Need to optimize game saving.
            Like make a section when when it loads from a save the right after the game has loaded make it load the settings.

            Fix the press 'r' and restart button makes player die glitch.
            Make snow blocks not fall through one ways.

            Add auto checkpoints into settings and fps into settings. Also need to make a block that costs coins to heal you.

    ===========================================================================================================================================================================
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ===========================================================================================================================================================================

    Ideas:

    Credits:
        Sound:
            Most mp3s by Khan Academy. (In www.kasandbox.org)
            Other sounds were created by using Bfxr and Chiptone: https://sfbgames.com/chiptone/ (Under CC0 licence)
        Libraries: processing.js (http://processingjs.org)
    
        Levels:
            All levels made by me, except one by Caleb.

    TODO:
        -Star pillars you can travel to
        Still need to make star pillars that you can travel to by selecting which level in an inventory
        Teleporters that don't reset the level only with a level fade!

        rpg-todo:
            Make a power-up to enhance the player +Attack
            Add an attack function that gets damage based on the object getting attacked
            Make a defense and attack system rpg?

        Npcs moving

    Most Important :
        Fix other physics? Fix circle-rect / spike-rect collision physics!

    Future Updates :
        To be added :
            More levels
            More Backgrounds

        AIs :
            Make space breakers not get stuck on the ceiling.
            (Maybe make them return to their original position?)
            Make AIs not get stuck on blocks like the space breaker

        (Maybe or way later)
            +Music
            +Pixelated story cut-scene at the start
**/

//////////////////////////////////////////////////Feel free to look through the code!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*****************************************************************Code*********************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var game = {
    fps : 60, 
    loadFps : 140,
    gameState : "start", //Default = "start"
    version : "v0.8.4 beta",
    fpsType : "manual", //Default = "manual"
    debugMode : true, //Turn this to true to see the fps
    showDebugPhysics : false,
    boundingBoxes : false,
    debugMenuWhite : true,

    overrideDebugSettings : false, // This doesn't do anything yet...
};
var levelInfo = {
    level : "intro", //Default = "intro"
    xPos : 0,
    yPos : 0,
    width : width,
    height : height,
    /*Changing this will effect game performance. (And maybe collision)
    Too low means that there will be too many cells for the camera to loop through.
    Too high and it means that too many collisions will be checked*/
    //This should be more than the unitSize and less than the cameraSize, If you have a stronger pc turn this up.
    cellWidth : 130, //30-400 (width) best~=80-130
    cellHeight : 130, //30-400 (height) best~=80-130
    /*Changing this will also effect game performance
    Too low means too many objects in each cell and there for lower fps.
    Too high and you won't be able to see anything but you'll get higher fps*/
    unitWidth : 30,
    unitHeight : 30,
    theme : " ",
};
var loader = {
    firstLoad : true, //keep this to true or toggle it if you can't load the game
    levelStepRows : 20, //Loading boost (Turn this to 1 if you're having problems loading)
};
var fonts = {
    title : createFont("cursive"),
    menu : createFont("cursive"),
};

var firstGameState = function() { return game.gameState; } ();
game.startMillis = millis();

var gc = function()
{
    return Math.ceil((performance.now() / 1000) % 60);
};

var fpsCatcher = {
    actualFps : game.fps,
    lastTime : 0,
    update : function()
    {        
        if(performance.now() % 15 >= 14)
        {
            var delta = (performance.now() - this.lastTime) / 1000;

            this.actualFps = (1 / delta).toFixed(0);
        }

        this.lastTime = performance.now();
    },
};

//Constants
var PI_MULT = PI / 180;
var MODE = "pjs";//Ka or pjs

//Make sure we have the right angle mode.
angleMode = "degrees";

//Predefine (Globals)
var cam, cameraGrid, GameObject, observer, gameObjects;

//Constants
const WIDTH = width;
const HEIGHT = height;
const HALF_WIDTH = width / 2;
const HALF_HEIGHT = height / 2; 
const BTN_COLOR = color(11, 68, 153, 200);

//Smooth out textures
smooth();

// No smoothing for performance
// noSmooth();

var keyIsPressed = false;

var BACKSPACE_KEY = false;
var ESC_KEY = false;
var ENTER_KEY = false;

var keys = [];
var keyPressed = function()
{
    keys[keyCode] = true;
    keys[(key || "").toString()] = true;
    keyIsPressed = true;

    BACKSPACE_KEY = keys[BACKSPACE];
    ENTER_KEY = keys[ENTER];
    ESC_KEY = keys[ESC];
};
var keyReleased = function()
{
    keys[keyCode] = false;
    keys[(key || "").toString()] = false;

    keyIsPressed = false;
    BACKSPACE_KEY = false;

    ENTER_KEY = keys[ENTER];
    ESC_KEY = keys[ESC];
};

if(MODE === "pjs")
{
    canvas.onkeydown = function(event)
    {
        keyCode = event.keyCode;

        if(event.keyCode === 8)
        {
            keyPressed();
            event.preventDefault();
        }
    };

    println = console.log;

    window.loadedImages = {};

    function _load_(index)
    {
        loadedImages[index] = processing.loadBase64(storage.base64[index], function(img)
        {
            loadedImages[index] = img;
        });
    }

    for(var i in storage.base64)
    {
        if(typeof storage.base64[i] === "string")
        { 
            _load_(i);
        }
    }
};

function removeEndIfNum(v)
{
    if(v.slice(v.length - 1).match(new RegExp('[0-9]'))) 
    {
        return v.slice(0, -1);
    }

    return v;
}

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/******************************************************************UI**********************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var Button = function(xPos, yPos, width, height, colorVal, message, _round, _textSize)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;

    this.color = colorVal;
    this.message = message;
    
    this.defaultXPos = xPos;
    this.defaultYPos = yPos;

    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;

    this.isButton = true;

    this.firstColor = this.color;

    this.textColor = color(0, 0, 0);

    this.round = _round;

    this.textSize = _textSize || 12;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, this.round);
        fill(0, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(this.textSize);
        if(this.font !== undefined)
        {
            textFont(this.font);
        }
        fill(this.textColor || this.color);
        text(this.message + (this.extra || ""), this.xPos + this.halfWidth, this.yPos + this.halfHeight);

        if(this.highlightColor !== undefined)
        {
            fill(this.highlightColor);
            rect(this.xPos, this.yPos, this.width, this.height, this.round);
        }

        if(this.highlightStroke !== undefined)
        {
            strokeWeight(1.5);
            stroke(this.highlightStroke);
            noFill();
            rect(this.xPos, this.yPos, this.width, this.height, this.round);
            noStroke();
        }
    };
    
    this.onClick = function() {};

    this.clicked = function(override)
    {
        var is = ((mouseIsPressed || override) && observer.collisionTypes.pointrect.colliding({xPos : mouseX, yPos : mouseY}, this));  

        if(is)
        {
            this.onClick(override);
        }

        return is;
    };
};

//Pretty chunky, eh?
var buttons = {
    play : new Button(160, 210, 80, 25, BTN_COLOR, "Play"),
    how : new Button(160, 245, 80, 25, BTN_COLOR, "How"),
    extras : new Button(160, 280, 80, 25, BTN_COLOR, "Extras"),
    back : new Button(160, 210 - 30, 80, 25, BTN_COLOR, "Back"),
    restart : new Button(160, 245 - 30, 80, 25, BTN_COLOR, "Restart"),
    menu : new Button(160, 280 - 30, 80, 25, BTN_COLOR, "Menu"),
    back2 : new Button(0, 375, 75, 25, BTN_COLOR, "Back"),
    settings : new Button(160, 210, 80, 25, BTN_COLOR, "Debug"),
    sound : new Button(160, 245, 80, 25, BTN_COLOR, "Sound"),
    other : new Button(160, 280, 80, 25, BTN_COLOR, "Fps"),
    volumeOn : new Button(160, 230, 80, 25, BTN_COLOR, "Volume"),
    debugMode : new Button(145, 185, 110, 25, BTN_COLOR, "DebugMode " + game.debugMode),
    debugPhysics : new Button(145, 220, 110, 25, BTN_COLOR, "DebugPhysics " + game.showDebugPhysics || false),
    boundingBoxes : new Button(145, 255, 110, 25, BTN_COLOR, "BoundingBoxes"),
    fps : new Button(145, 200, 110, 25, BTN_COLOR, "Fps " + game.fps),
    fpsType : new Button(145, 230, 110, 25, BTN_COLOR, "Fps Type " + game.fpsType),
    info : new Button(145, 290, 110, 25, BTN_COLOR, "Info"),
    save : new Button(155, 285, 90, 25, BTN_COLOR, "Exit"),
    erase : new Button(205, 235, 80, 30, BTN_COLOR, "Erase"),
    back3 : new Button(115, 235, 80, 30, BTN_COLOR, "Back"),
    back4 : new Button(115, 235 + 30, 80, 30, BTN_COLOR, "Back"),
    back5 : new Button(0, 290, 30, 30, BTN_COLOR, "<<"),
    create : new Button(205, 235 + 30, 80, 30, BTN_COLOR, "Create"),
    rename : new Button(205, 235 + 30, 80, 30, BTN_COLOR, "Rename")
};
buttons.boundingBoxes.textSize = 11;
buttons.debugPhysics.textSize = 11;

buttons.load = function(something)
{
    for(var i in (something || this))
    {
        (something || this)[i].round = 7; 
        (something || this)[i].textColor = color(20, 20, 20, 150);
    }
};

var storyHandler = {
    scroll : 0,
    message : "",
    storyIndex : 0,
    timer : 0,
    color : color(31, 173, 88),
    scrollVel : 20,
    set : function()
    {
        this.message = this.story[this.storyIndex].message;
        this.timer = (this.story[this.storyIndex].time || 200) * 1.6;
        this.color = this.story[this.storyIndex].color;
        this.scrollVel = this.story[this.storyIndex].scrollVel || 0;
        this.scroll = 0;
    },
    show : function()
    {
        this.timer--;
        if((this.timer < 0 && !screenUtils.fade.fading) || ENTER_KEY)
        {
            if(this.storyIndex > 0 || this.firstSet)
            {
                screenUtils.fade.start(20, 0);  
            }else{
                this.set();
                this.storyIndex++;
                this.firstSet = true;
            }
        }
        if(screenUtils.fade.full())
        {
            if(this.storyIndex <= this.story.length - 1)
            {
                this.set();
            }else{
                this.storyIndex = 0;
            }
            this.storyIndex++;
        }
        this.done = (this.timer < 0 && this.storyIndex === this.story.length);

        this.scroll += (this.scrollVel || 0);
    },
    story : [{
        message : "2,000 years ago, a hypercrystal\nwas born inside of Areolis."
    }, {
        message : "Areolis is a noble planet found\nwith-in the center of this galaxy.",
        time : 230
    },{
        message : "This hypercrystal contains an\nultimate binding of power!"
    }, {
        message : "Aliens constructed by the evil\nforces of Talon have obstructed this crystal!",
        time : 250
    }, {
        message : "A battle between aliens lasted for \n1,000 years!"
    }, {
        message : "Finally it was divided into multiple\ncrystals and its power was sealed away.",
        time : 250
    }, {
        message : "These crystals have been scattered\nacross this galaxy."
    }, {
        message : "Talon has re-discovered a green crystal!\nThis crystal has the power to\nsend a virus to a planet!",
        time : 300
    }, {
        message : "Fortunately you escaped Planet Search\nbefore it was infected."
    }, {
        message : "You were sent to Amber by a spacecraft\non a mission to find 3 of the crystals.",
        time : 270
    }, {
        message : "Unfortunately you had to eject in an\nescape pod on entry."
    }, {
        message : "You are now seperated by thousands\nof miles from your ship."
    }, {
        message : "You new mission is to find 3 crystals, and harness\ntheir power to find your ship.",
        time : 270
    }, {
        message : "Now go hero! Choose your path wisely!\nGood luck!"
    }],
};

var saveDataHandler = {
    saveFiles : [],
    buttons : {
        new : new Button(85, 290, 60, 30, color(11, 68, 153, 140), "New"),
        copy : new Button(170 + 35, 255, 60, 30, color(11, 68, 153, 140), "Copy"),
        rename : new Button(170 - 35, 255, 60, 30, color(11, 68, 153, 140), "Rename"),
        play : new Button(155, 290, 90, 30, color(11, 68, 153, 140), "Play"),
        erase : new Button(255, 290, 60, 30, color(11, 68, 153, 140), "Erase"),
        left : new Button(0, 160, 30, 100, color(0, 0, 0, 100), "<"),
        right : new Button(370, 160, 30, 100, color(0, 0, 0, 100), ">"),
    },
    draw : function()
    {
        for(var i in this.buttons)
        {
            this.buttons[i].draw();
        }

        for(var i = 0; i < this.saveFiles.length; i++)
        {
            this.saveFiles[i].draw();
        }
    },
    props : {
        slide : 140,
        startSlide : 140,
        slideSpeed : 5,
        spacing : 160,
        scale : 0.7,
        range : {
            min : 100,
            max : 300, 
        },
    },
    sortSaveFiles : function()
    {
        var newSaveFiles = [];
        var names = {};

        //Sort by save file name
        for(var i = 0; i < this.saveFiles.length; i++)
        {
            if(names[this.saveFiles[i].name])
            {
                var name = this.saveFiles[i].name;
                this.saveFiles[i].message = this.saveFiles[i].name = (
                isNaN(Number(name[name.length - 1])) ? name : name.slice(0, -1)) + ((Number(name[name.length - 1]) || 0) + 1);
            }else{
                names[this.saveFiles[i].name] = 1;
            }

            var num = Number((this.saveFiles[i].saveFileName.match(/[0-9]+/) || [0])[0]) - 1;

            if(newSaveFiles[num] === undefined)
            {
                newSaveFiles[num] = this.saveFiles[i];
            }else{
                newSaveFiles.splice(num, 0, this.saveFiles[i]);
            }
        }

        //Get rid of empty temp files
        var newSaveFiles2 = [];
        for(var i = 0; i < newSaveFiles.length; i++)
        {
            if(newSaveFiles[i] !== undefined && newSaveFiles[i].saveFileName !== undefined)
            {
                newSaveFiles2.push(newSaveFiles[i]);
            }
        }

        this.saveFiles = newSaveFiles2;
    },
    getSelectedSaveFile : function()
    {
        for(var i = 0; i < this.saveFiles.length; i++)
        {
            if(this.saveFiles[i].selected)
            {
                return this.saveFiles[i];
            }
        }
        return false;
    },
    erase : function(saveDataName, saveFile)
    {
        for(var i = this.saveFiles.length - 1; i >= 0; i--)
        {
            if(this.saveFiles[i].saveFileName === saveDataName)
            {
                saver.eraseSaveData(saveDataName);
                this.saveFiles.splice(i, 1);
                break;
            }
        }
        this.sortSaveFiles();
    },
    getNumName : function()
    {
        var exists = [];

        for(var i in saver.saveData)
        {
            exists[Number((i.match(/[0-9]+/) || [0])[0])] = true;
        }

        exists.shift();

        var j = 0;
        while(j < exists.length)
        {
            if(exists[j])
            {
                j++;
            }else{
                break;
            }
        }

        return j + 1;
    },
    addNew : function(saveDataName, name, replace, no, replaceName)
    {
        var saveName = (saveDataName || "save");
        if(!no)
        {
            saveName += this.getNumName();
        }
        saver.newSaveData(saveName, name, replace, replaceName);
        saveDataHandler.createSaveBtn(saveName, saver.saveData);
        buttons.load(this.saveFiles);
        this.sortSaveFiles();
        this.props.slide = -(this.props.spacing * this.saveFiles.length) + width * 0.75 - this.props.startSlide;
        this.slid = true;
        return saveName;
    },
    copySelectedSaveFile : function()
    {
        if(this.saveFiles.length < saver.maxSaves)
        {
            var svf = this.getSelectedSaveFile();
            if(svf)
            {
                this.addNew("save", "", saver.readSaveData(svf.saveFileName), undefined);
            }
        }
    },
    renameSaveFile : function(rename)
    {
        var svf = this.getSelectedSaveFile();
        if(svf)
        {
            //Get rid of the saveFile displayer
            for(var i = 0; i < this.saveFiles.length; i++)
            {
                if(this.saveFiles[i].saveFileName === svf.saveFileName)
                {
                    this.saveFiles.splice(i, 1);
                    break;
                }
            }

            //Remake it!
            this.addNew(svf.saveFileName, "", saver.readSaveData(svf.saveFileName), true, rename);

            this.sortSaveFiles();

            //Slide back to selectedSaveFile
            var num = Number(svf.saveFileName.match(/[0-9]+/)[0]) - 1;
            this.props.slide += (num * this.saveFiles[this.saveFiles.length - 1].width + this.props.spacing) - this.props.spacing * 0.25;
        }
    },
    update : function()
    {
        if(this.saveFiles.length > 0)
        {
            //Slide back if to far
            if(this.saveFiles[this.saveFiles.length - 1].xPos < this.props.startSlide * 0.9)
            {
                this.props.slide += this.props.slideSpeed;
            }

            if((keys[LEFT] || keys.a || this.buttons.left.clicked()) && this.saveFiles[0].xPos <= this.props.startSlide)
            {
                this.props.slide += this.props.slideSpeed;
            }
            else if((keys[RIGHT] || keys.d || this.buttons.right.clicked()) && this.saveFiles[this.saveFiles.length - 1].xPos >= this.props.startSlide)
            {
                this.props.slide -= this.props.slideSpeed;
            }

            if(this.slid)
            {
                this.slid = false;
                if(this.saveFiles[0].xPos >= this.props.startSlide && this.saveFiles.length > 1)
                {
                    this.props.slide -= this.props.slideSpeed * 4;
                    this.slid = true;
                }
                else if(this.saveFiles[this.saveFiles.length - 1].xPos <= this.props.startSlide)
                {
                    this.props.slide += this.props.slideSpeed * 4;
                    this.slid = true;
                }
            }
        }
        for(var i = 0; i < this.saveFiles.length; i++)
        {
            var saveFile = this.saveFiles[i];
            saveFile.xPos = this.props.slide + (this.props.spacing * i); 

            if(saveFile.xPos > this.props.range.min && saveFile.xPos + saveFile.lastWidth < this.props.range.max)
            {
                saveFile.width = saveFile.lastWidth;
                saveFile.height = saveFile.lastHeight;
                saveFile.yPos = saveFile.lastYPos;
                saveFile.selected = true;
                saveFile.color = color(0, 50, 0, 100);
            }else{
                saveFile.width = saveFile.lastWidth * this.props.scale;
                saveFile.height = saveFile.lastHeight * this.props.scale;
                saveFile.yPos = saveFile.lastYPos + saveFile.height * 0.25;
                saveFile.selected = false;
                saveFile.color = saveFile.lastColor;
            }

            saveFile.halfWidth = saveFile.width / 2;
            saveFile.halfHeight = saveFile.height / 2;
        }

        if(!this.init || mouseIsPressed || keyIsPressed)
        {
            this.sortSaveFiles();
            this.init = true;
        }
    },
    createSaveBtn : function(input, data)
    {
        var btnWidth = 130;
        var btnHeight = 75;
        var btn = new Button(HALF_WIDTH - btnWidth / 2, height / 1.9 - btnHeight / 2, btnWidth, btnHeight, color(0, 0, 0, 100), data[input].name);
        btn.lastDraw = btn.draw;
        btn.saveFileName = input;
        btn.name = data[input].name;
        btn.draw = function()
        {
            var sfn = (saveDataHandler.getSelectedSaveFile() || {}).saveFileName;

            btn.lastDraw();
            fill(0, 0, 0, 100);
            textSize((sfn === this.saveFileName) ? 17 : 11);
            textAlign(CENTER, CENTER);
            text(input, this.xPos + this.halfWidth, this.yPos + this.height * 0.21);            
           
            fill(0, 0, 0, 100);
            textSize((sfn === this.saveFileName) ? 12 : 9);
            text("Coins " + ((data[input].player || {}).coins || 0) + "\nScore " + ((data[input].player || {}).score || 0), 
                 this.xPos + this.halfWidth, this.yPos + this.height * 0.8);
        };
        btn.lastWidth = btn.width;
        btn.lastHeight = btn.height;
        btn.lastYPos = btn.yPos;
        btn.lastColor = btn.color;
        this.saveFiles.push(btn);
    },
    load : function()
    {
        buttons.load(saveDataHandler.buttons);
        this.buttons.left.textColor = color(200, 200, 200, 200);
        this.buttons.right.textColor = color(200, 200, 200, 200);

        //Add in the save files (buttons)
        for(var j in saver.saveData)
        {
            this.createSaveBtn(j, saver.saveData);
        }

        while(this.saveFiles.length > saver.maxSaves)
        {
            saver.eraseSaveData(this.saveFiles[this.saveFiles.length - 1].saveFileName, true);
            this.saveFiles.pop();
        }
        
        saver.apply();
        buttons.load(this.saveFiles);
    },
};
saveDataHandler.load();

var Slider = function(xPos, yPos, width, height, colorValue, message)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = colorValue;
    
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;

    this.notchSize = 0.15;
    this.notch = {
        xPos : this.xPos,
        yPos : this.yPos,
        width : this.width * this.notchSize,
        height : this.height * this.notchSize,
    };
    
    this.xDiv = (this.width > this.height) ? this.width * this.notchSize * 2 : 0;
    this.yDiv = (this.height > this.width) ? this.height * this.notchSize * 2 : 0;
    
    this.message = message;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, this.round);
        
        noStroke();
        fill(this.color);
        if(this.width > this.height)
        {
            rect(this.notch.xPos, this.notch.yPos,
            this.notch.width, this.height, this.round * 1.5);
            if(!this.using)
            {
                this.yDiv = 0;
                this.xDiv = this.width * this.notchSize * 2;
            }
        }else{
            rect(this.notch.xPos, this.notch.yPos, 
            this.width, this.notch.height, this.round * 1.5);
            if(!this.using)
            {
                this.xDiv = 0;
                this.yDiv = this.height * this.notchSize * 2;
            }
        }
        this.using = false;

        fill(0, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(this.textSize || 12);
        if(this.font !== undefined)
        {
            textFont(this.font);
        }
        fill(this.textColor || this.color);
        text(this.message, this.xPos + this.halfWidth, this.yPos + this.halfHeight);
    };
    
    this.isInside = function(mouse)
    {
        return observer.collisionTypes.pointrect.colliding(mouse, this, this.xDiv, this.yDiv);
    };
    
    this.getPercent = function()
    {
        if(this.width > this.height)
        {
            this.max = this.width - this.notch.width;
            this.min = this.notch.xPos - this.xPos;
        }else{
            this.max = this.height - this.notch.height;
            this.min = this.notch.yPos - this.yPos;
        }
        return (this.min * 100) / this.max;
    };

    this.set = function(percent)
    {
        var max = this.width - this.notch.width;
        var input = this.xPos + (percent * max / 100);
        if(this.width > this.height)
        {
            this.notch.xPos = constrain(input,
            this.xPos, this.xPos + this.width - this.notch.width);
        }else{
            this.notch.yPos = constrain(input,
            this.yPos, this.yPos + this.height - this.notch.height);
        }
    };

    this.onClick = function(mouse)
    {
        if(this.width > this.height)
        {
            this.notch.xPos = constrain(mouse.xPos,
            this.xPos, this.xPos + this.width - this.notch.width);
        }else{
            this.notch.yPos = constrain(mouse.yPos,
            this.yPos, this.yPos + this.height - this.notch.height);
        }
        this.yDiv = 300;
        this.xDiv = 300;
        this.using = true;
    };
};

var sliders = {
    volume : new Slider(160, 265, 80, 25, color(11, 68, 153, 100), 100 + "%"),
};
sliders.load = function()
{
    for(var i in this)
    {
        this[i].round = 7;
        this[i].textColor = color(20, 20, 20, 150);
    }
    this.volume.set(sounds.settings.mainVolume * 100);
};

var Bar = function(xPos, yPos, width, height, colorValue, inRound, barColor, strokeColor)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;

    this.defaultWidth = this.width;
    this.defaultHeight = this.height;

    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;

    this.color = colorValue;
    this.barColor = barColor;
    this.strokeColor = strokeColor;

    this.input = 0;
    this.set = function(amt, max)
    {
        this.input = (this.width * amt) / max;
    };
    
    this.draw = function(amt, max) 
    {
        if(!this.barColor)
        {
            noFill();
        }else{
            fill(this.barColor);
        }

        rect(this.xPos, this.yPos, this.width, this.height, (inRound || 0));

        fill(this.color);
        rect(this.xPos, this.yPos, (amt !== undefined) ? ((this.width * amt) / max) : this.input, this.height, (inRound || 0));
        noFill();

        if(!this.noStroke) 
        { 
            strokeWeight(1);
            if(!this.strokeColor)
            {
                stroke(0, 0, 0, 50); 
            }else{
                stroke(this.strokeColor);
            }
        }

        rect(this.xPos, this.yPos, this.width, this.height, (inRound || 0));
        noStroke();
    };
};
var TextBox = function(xPos, yPos, width, height, colorVal, secondColorValue, textColor)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = colorVal;

    this.message = "";
    this.selected = false;
    this.multipleLines = false;

    this.cursorIndex = 0;
    this.cursorMode = "line";

    this.textSize = 12;
    this.cursorIndex = 0;

    this.noSpaces = false;
    this.input = [];

    this.secondColorValue = secondColorValue || 100;
    this.textColor = textColor !== undefined ? textColor : color(0, 0, 0, 100);

    this.getCursorAscii = function()
    {
        if(millis() % 1000 > 500)
        {
            return "";
        }

        switch(this.cursorMode)
        {
            case "line" :
                return "|";

            case "insert" :
                return "_";
        }
    };

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, this.round);
        fill(0, 0, 0);
        textAlign(NORMAL, NORMAL);


        fill(this.textColor);
        textSize(this.textSize);
        text(this.message + this.getCursorAscii(), this.xPos + 3, this.yPos + this.height * 0.3, this.width, this.height);
        noStroke();

        /*************/

        if(this.maxLength && this.maxLength !== Infinity)
        {
            var msg = this.maxLength - this.message.length + " left";
            text(msg, this.xPos + this.width - 5 - textWidth(msg), this.yPos + this.height * 0.3, this.width, this.height);
        }

        this.color = (this.selected) ? colorVal : this.secondColorValue;

        if(!this.selected)
        {
            this.cursorIndex = this.message.length;
        }

        if(this.isMouseInside())
        {
            cursor("text");
            game.cursor = "text";
        }else{
            cursor("default");
            game.cursor = "default";
        }
    };

    this.maxLength = 9;

    this.edit = function()
    {
        if(!this.selected || !keyIsPressed)
        {
            return;
        }

        if(BACKSPACE_KEY)
        {
            this.input.pop();
            keyReleased();
        }
        else if(keyCode !== SHIFT && key.toString() !== "￿")
        {
            this.input.push(key.toString());
        }

        this.message = this.input.join("");

        textSize(this.textSize);

        if(this.maxLength < this.message.length || textWidth(this.message) > this.width - 10)
        {
            this.message = this.message.slice(0, -1);
            this.input = this.message.split("");
        }
    };

    this.isMouseInside = function()
    {
        return observer.collisionTypes.pointrect.colliding({xPos : mouseX, yPos : mouseY}, this);
    };

    this.clicked = function()
    {
        return (mouseIsPressed && observer.collisionTypes.pointrect.colliding({xPos : mouseX, yPos : mouseY}, this));
    };
};

var textBoxes = {
    naming : new TextBox(150, 210 + 25, 100, 20, 125),
};
textBoxes.naming.round = 7;
textBoxes.naming.safeStr = true;

var MessageBox = function(xPos, yPos, width, height, colorValue)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = colorValue;

    this.message = "";

    var sz = this.width * 0.06;
 
    this.readingIndex = 0;
    this.lastReadingIndex = 0;
    this.counter = 0;
    this.counterFull = true;

    this.readSpeed = 0.55;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, 5);
        fill(this.textColor || color(255, 255, 255, 175));
        if(this.font !== undefined)
        {
            textFont(this.font);
        }
        textAlign(NORMAL, NORMAL);
        textSize(this.textSize || 12);
        if(this.messages !== undefined && this.messages.length > 0)
        {
            var str = "";
            for(var i = 0; i < this.readingIndex; i++)
            {
                var message = this.messages[i];
                var messageArray = message.message.split("");

                var colorPack = message.colorPack;
                if(colorPack !== undefined)
                {
                    message.color = color(colorPack.red || 255, colorPack.green || 255, colorPack.blue || 255, colorPack.alpha || 255);
                }

                fill(message.color || this.textColor);

                var msg = message.message;

                if(!this.doneReading && i === this.readingIndex - 1)
                {
                    var val = Math.floor(this.counter) - msg.length;

                    if(Math.floor(this.counter) >= msg.length)
                    {
                        this.counterFull = true;
                    }

                    msg = msg.slice(0, val);
                }

                text(msg, this.xPos + 10 + textWidth(str), this.yPos + 20);
                str += message.message + " ";
            }

            if(this.skipAll)
            {
                this.counter = this.message.length;
                this.counterFull = true;
                this.skipAll = false;
                return;
            }

            if(!this.doneReading)
            {
                this.counter += this.readSpeed;
            }

            if(this.counterFull)
            {
                this.readingIndex += 1;
                if(this.readingIndex <= this.messages.length)
                {
                    this.counter = 0;
                }else{
                    this.doneReading = true;
                }
                this.counterFull = false;
            }
            
            this.readingIndex = Math.min(this.readingIndex, this.messages.length);

            this.lastReadingIndex = this.readingIndex;
        }else{
            var msg = this.message;

            if(this.skipAll)
            {
                this.counter = this.message.length;
                this.doneReading2 = true;
                this.skipAll = false;
                return;
            }

            if(!this.doneReading2)
            {
                var val = Math.floor(this.counter) - msg.length;

                if(this.counter >= msg.length)
                {
                    this.doneReading2 = true;
                }

                msg = msg.slice(0, val);

                this.counter += this.readSpeed;
            }
            text(msg, this.xPos + 10, this.yPos + 20);
        }
    };
};

var messageBoxes = {};
var choiceButtons = [];
var messageHandler = {
    choices : {},
    active : false,
    newMessage : function(name, message, messages, font, up)
    {
        if(messageBoxes[name] === undefined)
        {
            var yDiv = 50;

            var setY = ((typeof up === "boolean") ? yDiv : ((typeof up === "number") ? up : 0)); 

            this.origSetWidth = 250;
            this.origSetHeight = 60;

            this.origSetX = (HALF_WIDTH - this.origSetWidth / 2);
            this.origSetY = (setY || HEIGHT - (this.origSetHeight + yDiv));

            this.up = up;

            messageBoxes[name] = new MessageBox(this.origSetX, this.origSetY, this.origSetWidth, this.origSetHeight, color(0, 0, 0, 100));
            messageBoxes[name].message = message || "?";
            messageBoxes[name].messages = messages || messageBoxes[name].messages;
            messageBoxes[name].font = font;

            this.currentName = name;

            this.setup = true;
        }
    },
    removeMessage : function(name)
    {
        delete messageBoxes[name];
    },
    addChoice : function(name, message, config)
    {
        this.choices[name] = config || {
            message : message,
        };
    },
    draw : function()
    {
        if(!this.active)
        {
            return;
        }

        var alphaAmt = 100;

        if(this.setup)
        {
            this.choiceAmt = 0;
            for(var i in this.choices)
            {
                this.choiceAmt++;
            }

            this.btnSpacing = 4;
            this.btnHeight = 20;

            var minY = (this.choiceAmt * (this.btnHeight + this.btnSpacing) / 2);
            var diff = (HALF_HEIGHT - minY);
            var setX;

            var minSetX = WIDTH;
            var maxBtnWidth = 0;

            var textAlpha = 175;

            var j = 0;
            for(var i in this.choices)
            {
                if(choiceButtons[i] === undefined)
                {
                    var btnWidth;

                    try{
                        btnWidth = textWidth(this.choices[i].message)
                    }
                    catch(e)
                    {
                        console.log(e);
                    }
                    
                    this.btnWidth = Math.max(this.defMinBtnWidth || 60, (btnWidth || 310) * (this.choices[i].resize || 0.5));

                    setX = (HALF_WIDTH - this.btnWidth / 2);
                    if(minSetX > setX)
                    {
                        minSetX = setX;
                    }

                    if(maxBtnWidth < this.btnWidth)
                    {
                        maxBtnWidth = this.btnWidth;
                    }

                    if(this.choiceAmt === 1)
                    {
                        choiceButtons[i] = new Button(setX, this.origSetY + this.origSetHeight - this.btnHeight / 2, this.btnWidth, this.btnHeight, this.defButtonCollor || color(0, 0, 0, alphaAmt), this.choices[i].message);
                    }else{
                        choiceButtons[i] = new Button(setX, diff + j * (this.btnHeight + this.btnSpacing), this.btnWidth, this.btnHeight, this.defButtonCollor || color(0, 0, 0, alphaAmt), this.choices[i].message);
                    }

                    choiceButtons[i].textColor = this.choices[i].color || color(255, 255, 255, textAlpha);
                    choiceButtons[i].textSize = this.choices[i].textSize || choiceButtons[i].textSize;
                    choiceButtons[i].round = 5; 
                    choiceButtons[i].fromI = i;
                    choiceButtons[i].index = j;
                }
                j++;
            }

            if(this.choiceAmt > 1)
            {
                var div = this.btnSpacing + 3;
                this.planXPos = (minSetX - div);
                this.planYPos = (diff - div);
                this.planWidth = (maxBtnWidth + div * 2);
                this.planHeight = (HALF_HEIGHT + minY - diff + div * 2) - 2;
                this.highlightColor = this.defHighlightColor || color(0, 100, 200, 100);
            }
            this.highlightedNumber = 0;

            this.disableTime = millis() - 10000;

            this.setup = false;
        }

        for(var i in messageBoxes)
        {
            messageBoxes[i].draw();
        }

        if(this.choiceAmt > 1)
        {
            fill(0, 0, 0, alphaAmt + 20);
            rect(this.planXPos, this.planYPos, this.planWidth, this.planHeight, 5);
        }

        var j = 0;
        for(var i in choiceButtons)
        {
            if(this.highlightedNumber === j)
            {
                choiceButtons[i].highlightColor = this.highlightColor;
            }

            if((choiceButtons[i].clicked() ||
               (this.highlightedNumber === j && (keys[32] || ENTER_KEY))) && 
               !messageHandler.pickedChoice && millis() - this.disableTime > 1000)
            {
                if((messageBoxes[this.currentName].doneReading || 
                    messageBoxes[this.currentName].doneReading2))
                {
                    messageHandler.choice = i;
                    messageHandler.pickedChoice = true;
                }else{
                    messageBoxes[this.currentName].skipAll = true;
                    this.disableTime = millis();
                }
            }

            choiceButtons[i].draw();
            choiceButtons[i].highlightColor = color(0, 0, 0, 1);

            j++;
        }

        try{
            textAlign(LEFT, CENTER);
            textSize(12);
            fill(this.defTextColor || color(255, 255, 255, 130));
            text(this.nameToShow || "", messageBoxes[this.currentName].xPos + 20,  messageBoxes[this.currentName].yPos);
        }
        catch(e)
        {
            console.warn("Error: " + e);
        }
    },
    keyPressed : function()
    {
        if(this.choiceAmt > 1)
        {
            if(keys.w || keys[UP])
            {
                this.highlightedNumber--;
            }
            else if(keys.s || keys[DOWN])
            {
                this.highlightedNumber++;
            }

            this.highlightedNumber = constrain(this.highlightedNumber, 0, this.choiceAmt - 1);
        }else{
            this.highlightedNumber = 0;
        }
    },
    keyReleased : function()
    {
        this.disableTime = millis() - 1000;
    },
    mouseReleased : function()
    {
        this.disableTime = millis() - 1000;
    }
};

var talkHandler = {
    messagePattern : {},
    timer : 0,
    start : function(messagePattern, message, name, up)
    {
        this.message = message;
        this.messagePattern = messagePattern || {};
        this.up = (this.messagePattern.up || up);
        this.setMessage(message);
        messageHandler.active = true;
        messageHandler.nameToShow = name;

        this.startup = true;
        this.onEnd = function() {};
    },
    cureMessage : function(message)
    {
        message = message.replace("/username", gameObjects.getObject("player").input(0).username);
        return message;
    },
    setMessage : function(message)
    {
        var input = this.messagePattern;
        if(input[message] !== undefined)
        {
            this.message = message;
            if(input[message].messages !== undefined)
            {
                if(!input[message].cured)
                {
                    for(var i = 0; i < input[message].messages.length; i++)
                    {
                        input[message].messages[i].message = this.cureMessage(input[message].messages[i].message);
                    }

                    input[message].cured = true;
                }
                
                messageHandler.newMessage(message, undefined, input[message].messages, input[message].font, this.messagePattern[this.message].up || this.up);
            }
            else if(input[message].message !== undefined)
            {
                if(!input[message].cured)
                {
                    input[message].message = this.cureMessage(input[message].message);
                    input[message].cured = true;
                }

                messageHandler.newMessage(message, input[message].message, undefined, input[message].font, this.messagePattern[this.message].up || this.up);
            }
            messageHandler.choices = {};
            messageHandler.pickedChoice = false;
            if(input[message].choices === undefined)
            {
                input[message].choices = {
                    "" : "Exit",
                };
            }
            for(var i in input[message].choices)
            {
                if(typeof input[message].choices[i] === "object")
                {
                    messageHandler.addChoice(i, undefined, input[message].choices[i]);
                }else{
                    messageHandler.addChoice(i, undefined, {
                        message : input[message].choices[i],
                    });
                }
            }
        }
    },
    mouseReleased : function(pass)
    {
        if(!messageHandler.active)
        {
            return;
        }

        if(messageHandler.pickedChoice)
        {
            this.clear();

            if(messageHandler.choice === "" || 
            typeof messageHandler.choice !== "string" || 
            this.messagePattern[messageHandler.choice] === undefined || 
            this.messagePattern[messageHandler.choice].setOver)
            {
                this.end();
            }else{
                this.setMessage(messageHandler.choice);
            } 
            messageHandler.choice = undefined;
        }

        if(pass)
        {
            return;
        }

        messageHandler.mouseReleased();
    },
    keyPressed : function()
    {
        if(!messageHandler.active)
        {
            return;
        }

        messageHandler.keyPressed();

        if((keyCode !== 32 && keyCode !== UP && keyCode !== DOWN) || this.startup)
        {
            keys[keyCode] = false;
        }
        if((key.toString() !== 'w' && key.toString() !== 's') || this.startup)
        {
            keys[key.toString() || ""] = false;
        }

        this.startup = false;
    },
    keyReleased : function()
    {
        if(!messageHandler.active)
        {
            return;
        }

        messageHandler.keyReleased();

        this.mouseReleased(true);

        keys = [];
        ENTER_KEY = false;
    },
    clear : function()
    {
        messageHandler.pickedChoice = false;
        choiceButtons = [];
        messageBoxes = [];
        messageHandler.choices = [];
    },
    onEnd : function()
    {
        //Set onEnd and do stuff here
    },
    end : function()
    {
        this.clear();
        messageHandler.active = false;

        this.onEnd();
        keys[keyCode] = false;
        keys[key.toString() || ""] = false;
        ENTER_KEY = false;
    },
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/***************************************************************Graphics*******************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var trees = {
    work : {},
    genLine : function(inputArray, col, row, col2, row2, ch, interval)
    {
        var array = inputArray;
        array[col][row] = ch;
        array[col2][row2] = ch;
        var workCol = col;
        var workRow = row;
      
        var pullX = 0;
        var pullY = 0;
        var pol = '';
        var pick = '';
      
        var interval = max(interval || 5, 3);
        
        var i = 0;
        //This loop might take a while
        while(i < 100)
        {
            i++;
            var xDiff = abs(workCol - col2);
            var yDiff = abs(workRow - row2);
            
            if(i % interval >= interval - 1)
            {
                pick = (xDiff > yDiff) ? 'x' : 'y';
            }
            
            if(pullX >= max(interval - 2, 1))
            {
                pullX = 0;  
                pick = 'y';
                continue;
            }
            if(pullY >= max(interval - 2, 1))
            {
                pullY = 0;
                pick = 'x';
                continue;
            }
            
            if(pick === 'x')
            {
                if(col2 > workCol)
                {
                    workCol++;
                }
                else if(col2 < workCol)
                {
                    workCol--;
                }
                if(pol === '' || pol === 'x')
                {
                    pullX++;
                }
                pol = 'x';
            }
            else if(pick === 'y')
            {
                if(row2 > workRow)
                {
                    workRow++;
                }
                else if(row2 < workRow)
                {
                    workRow--;
                }
                if(pol === '' || pol === 'y')
                {
                    pullY++;
                }
                pol = 'y';
            }
            array[workCol][workRow] = ch;
            if(workCol === col2 && workRow === row2)
            {
                break;    
            }
        }
    },
    genBranches : function(startingPoints, endingPoints)
    {
        for(var i = 0; i < min(startingPoints.length, endingPoints.length); i++)
        {
            this.genLine(this.treesArray, startingPoints[i][0], startingPoints[i][1], 
            endingPoints[i][0], endingPoints[i][1], 'b', 5);    
        }
    },
    genStartingPoints : function(startingPoints, branchAmt, range, rootLine)
    {
        for(var i = 0; i < branchAmt; i++)
        {
            startingPoints.push([round(random(range[0], range[1])), rootLine]);  
        }
    },
    genEndingPoints : function(endingPoints, branchAmt, endRangeX, endRangeY)
    {
        for(var i = 0; i < branchAmt; i++)
        {
            endingPoints.push([round(random(endRangeX[0], endRangeX[1])), 
                              round(random(endRangeY[0], endRangeY[1]))]);
        }
    },
    render : function(inputArray)
    {
        for(var col = 0; col < inputArray.length; col++)
        {
            for(var row = 0; row < inputArray[col].length; row++)
            {
                var unitWidth = this.work.unitWidth;
                var unitHeight = this.work.unitHeight;
                var xPos = col * unitWidth;
                var yPos = row * unitHeight;

                this.work.img.noStroke();
                switch(inputArray[col][row])
                {
                    case 'b' :
                        if(random(0, 100) > 20)
                        {
                            this.work.img.fill(133, 79, 8);
                        }else{
                            this.work.img.fill(191, 100,100);
                        }
                        this.work.img.rect(xPos, yPos, unitWidth, unitHeight);
                        break;
                        
                    case 'B' :
                        this.work.img.fill(191, 157, 103);
                        this.work.img. rect(xPos, yPos, unitWidth, unitHeight);
                        break;
                        
                    case 'l' :
                        this.work.img.fill(0, 200, 0);
                        this.work.img.rect(xPos - unitWidth, yPos - unitHeight,
                        unitWidth * random(3, 7), unitHeight * random(3, 7));
                        break;
                        
                    case 'L' :
                        this.work.img.fill(0, 150, 120);
                        this.work.img.rect(xPos - unitWidth, yPos - unitHeight, unitWidth * random(3, 7), unitHeight * random(3, 7));
                        break;
                        
                    case 'x' :
                        this.work.img.fill(23, 189, 131);
                        this.work.img.rect(xPos, yPos, unitWidth, unitHeight);
                        break;
                        
                    case 'X' :
                        this.work.img.fill(75, 151, 209);
                        this.work.img.rect(xPos, yPos, unitWidth, unitHeight);
                        break;    
                }
            }
        }
    },
    createArray : function(width, height, unitWidth, unitHeight)
    {
        var array = [];
        var maxI = (floor(width * 10 / unitWidth) + 7) / 10;
        for(var i = 0; i < maxI; i++)
        {
            array.push([]);
            for(var j = 0; j < floor(height / unitHeight); j++)
            {
                array[i].push("");
            }
        }
        
        this.treesArray = array;
    },
    leaf : [
        " xxxxx ",
        "xxXXXxx",
        "xxXXXxx",
        "xxXXXxx",
        " xxxxx ",
    ],
    createTrunk : function(thickness, rootLine, midX, halfThickness, end0, rootConnections)
    {   
        var fail = false;
        for(var j = 0; j < thickness; j++)
        {
            for(var i = rootLine; i < this.treesArray[0].length; i++)
            {
                var x = midX + j - halfThickness;
                var y = i;
                
                if(this.treesArray[x] === undefined)
                {
                    if(!fail)
                    {
                        println("Failure to create roots, check your width.");
                    }
                    fail = true;
                    continue;
                }
               
                if(random(0, 100) <= 70)
                {
                    this.treesArray[x][y] = 'B';
                }else{
                    this.treesArray[x][y] = 'b';
                }
                
                if(i > end0 * 0.8)
                {
                    if(random(0, 100) > 90 || rootConnections.length <= 2)
                    {
                        rootConnections.push([x, y]);
                    }
                }
            }
        }
    },
    createTree : function(width, height, unitWidth, unitHeight)
    {
        this.work.img = createGraphics(width, height, P2D);
        this.work.img.beginDraw();
        
        //Clear the pixels
        this.work.img.noStroke();
        this.work.img.background(0, 0, 0, 0);
        
        //setup our work
        this.work.width = width;
        this.work.height = height;
        this.work.unitWidth = unitWidth;
        this.work.unitHeight = unitHeight;
        this.createArray(width, height, unitWidth, unitHeight);
        
        var end0 = (this.treesArray[0].length - 1);
        var rootLine = round(random(end0 * 0.7, end0 * 0.90));
        var midX = ((this.treesArray.length - 1) / 2);
        
        var thickness = min((this.treesArray.length - 1), round(random(1, 4)));
        
        var rootConnections = [];
        var halfThickness = floor(thickness / 2);
        
        //create trunk
        this.createTrunk(thickness, rootLine, midX, halfThickness, end0, rootConnections);
        
        //create roots
        for(var i = 0; i < rootConnections.length; i++)
        {
            this.genLine(this.treesArray, rootConnections[i][0], rootConnections[i][1], 
            round(random(0, this.treesArray.length - 1)), end0, 'b', 5);
        }
        
        var range = [midX - halfThickness, midX + halfThickness];
        var startingPoints = [];
        var branchAmt = round(random(3, 8));
        
        //min, max
        var end = (this.treesArray.length - 1);
        var endRangeX = [round(random(end * 0.2, end * 0.4)),
                         round(random(end * 0.6, end * 0.9))];
        var endRangeY = [round(random(rootLine, rootLine + 2)), 
                         round(random(end0 * 0.0, end0 * 0.4))];
        endRangeY[0] = constrain(endRangeY[0], 0, end0);
        
        var endingPoints = [];
        
        this.genStartingPoints(startingPoints, branchAmt, range, rootLine);
        this.genEndingPoints(endingPoints, branchAmt, endRangeX, endRangeY);
        
        //create branches
        this.genBranches(startingPoints, endingPoints);
        
        for(var i = 0; i < endingPoints.length; i++)
        {
            var col = endingPoints[i][0];
            var row = endingPoints[i][1];
            
            //Prevent thing
            if(row > end0 * 0.7)
            {
                continue;    
            }
            
            if(random(0, 100) < 40)
            {
                for(var j = 0; j < this.leaf.length; j++)
                {
                    for(var k = 0; k < this.leaf[j].length; k++)
                    {
                        if(col + j < this.treesArray.length && row + k < end0 + 1)
                        {
                            this.treesArray[col + j][row + k] = this.leaf[j][k]; 
                        }
                    }
                }
            }else{
                if(random(0, 100) < 20)
                {
                    this.treesArray[col][row] = 'L'; 
                }else{
                    this.treesArray[col][row] = 'l';
                }
            }
        }
        
        //Render the tree and finish
        this.render(this.treesArray);
        this.work.img.beginDraw();
        return this.work.img;
    },
};

var graphics = {};
graphics.Fade = function(colorValue)
{
    this.colorValue = colorValue;

    this.timer = 0;
    this.timerVel = 0.7;
    this.max = 100;
    this.fading = false;
    
    this.start = function(max, start)
    {
        this.max = max || this.max;
        this.timer = start || this.timer;
        this.fading = true; 
    };
    this.full = function()
    {
        return(this.timer >= this.max);
    };
    this.draw = function()
    {
        if(this.fading)
        {               
            if(!this.stopped)
            {
                if(this.timer < 0 || this.timer >= this.max)
                {
                    this.timerVel = -this.timerVel;
                }
                if(this.timer < 0)
                {
                    this.fading = false;
                }
                this.timer += this.timerVel;
            }
            noStroke();
            fill(red(this.colorValue), green(this.colorValue), blue(this.colorValue), this.timer * 255 / this.max);
            rect(0, 0, width, height);
        }
    };
};

graphics.inClouds = [];
graphics.inClouds.getSpeed = function()
{
    var speed = 0;
    var dir = round(random(-1, 1));
    if(dir === -1)
    {
        speed = -random(0.25, 0.5)/1.5;
    }
    else if(dir === 1)
    {
        speed = random(0.25, 0.5)/1.5;
    }
    else if(dir === 0)
    {
        speed = 0;
    }
    return speed;
};
graphics.inClouds.create = function(amt)
{
    this.length = 0;
    var n = 0;
    while(n < amt)
    {
        var x = round(random(0, width));
        var y = round(random(130, 250));
        var speed = this.getSpeed();
        for(var i = 0; i < round(random(1, 3)); i++)
        {
            var w = round(random(30, 70));
            var h = round(random(10, 25));
            var offX = (w / round(random(2, 4))) * ((random(0, 100) > 50) ? 1 : -1);
            var offY = (h / round(random(2, 4))) * ((random(0, 100) > 50) ? 1 : -1);
            this.push([x + offX, y + offY, w, h, {
                speed : speed,
                type : ((random(0, 100) <= 70) ? "rect" : "ellipse"),
            }]);
            n++;
        }
    }
};
graphics.inClouds.update = function() 
{
    for(var i = 0; i < this.length; i++)
    {
        this[i][0] += this[i][4].speed;
    }
};
graphics.inClouds.draw = function() 
{
    for(var i = 0; i < this.length; i++)
    {
        fill(255, 255, 255, 70);
        if(this[i][4].type === "rect")
        {
            rect(this[i][0], this[i][1], this[i][2], this[i][3], 5);
            if(this[i][0] + this[i][2] < 0)
            {
                this[i][0] = width;
            }
            if(this[i][0] > width)
            {
                this[i][0] = -this[i][2];
            }
        }
        else if(this[i][4].type === "ellipse")
        {
            ellipse(this[i][0], this[i][1], this[i][2], this[i][3]);
            
            var radius = this[i][2] / 2;
            if(this[i][0] + radius < 0)
            {
                this[i][0] = width + radius;
            }
            if(this[i][0] - radius > width)
            {
                this[i][0] = -radius;
            }
        }
    }
};
graphics.stars = [];
graphics.stars.create = function(amt)
{
    for(var i = 0; i < amt; i++)
    {
        this.push([random(0, width), random(0, 115)]);
    }
};
graphics.stars.draw = function() 
{
    for(var i = 0; i < this.length; i++)
    {
        fill(200, 200, 255);
        ellipse(this[i][0], this[i][1], 2, 2);
    }
};

var shapes = {
    bush : function(x, y, w, h)
    {
        for(var i = 0; i < width / 3; i += 70)
        {
            pushMatrix();
            translate(x + i, y);
            rotate(150);
            fill(35, 153, 98);
            ellipse(0, 0, w, h);
            popMatrix();
        }
        for(var i = 0; i < width / 3; i += 70)
        {
            pushMatrix();
            translate(x + 10 + i, y);
            rotate(150);
            fill(16, 128, 62);
            ellipse(0, 0, w - 23, h - 23);
            popMatrix();
        }
    },
    grass : function(x, y, w, h)
    {
        fill(50, 140, 30);
        var bladeW = w * 0.1;
        rect(x, y + h, bladeW, -h);
        rect(x + bladeW, y + h, bladeW, h * -0.4);
        rect(x + bladeW * 2, y + h, bladeW, h * -0.7);
        rect(x + bladeW * 3, y + h, bladeW, h * -0.2);
        rect(x + bladeW * 4, y + h, bladeW, h * -0.5);
        rect(x + bladeW * 5, y + h, bladeW, h * -0.8);
        rect(x + bladeW * 6, y + h, bladeW, h * -0.4);
        rect(x + bladeW * 7, y + h, bladeW, h * -0.9);
        rect(x + bladeW * 8, y + h, bladeW, h * -0.6);
        rect(x + bladeW * 9, y + h, bladeW, h * -0.4);
        rect(x + bladeW * 10, y + h, bladeW, h * -0.7);
    },
    sun : function(x, y)
    {
        fill(210, 210, 35);
        rect(x, y, 50, 50, 10);
        fill(210, 200, 40);
        rect(x + 5, y + 5, 40, 40, 10);
    },
    key : function(x, y, w, h)
    {
        var unitW = w / 3;
        var unitH = h / 6;
        var unitW2 = unitW * 2;
        var unitH2 = unitH * 2;

        noStroke();
        fill(235, 210 - 60, 70);
        rect(x + unitW * 2, y + 4 * unitH, 0.6 * unitW, unitH * 0.7);
        rect(x + unitW * 2, y + 5.3 * unitH, unitW, unitH * 0.7);
        fill(235, 210, 70);
        rect(x + unitW, y + unitH * 3, unitW, unitH * 3);
        fill(235, 210 - 80, 70);
        rect(x, y, unitW2, unitH);
        fill(235, 210 - 60, 70);
        rect(x + unitW2, y, unitW, unitH2);
        fill(235, 210 - 40, 70);
        rect(x + unitW, y + unitH2, unitW2, unitH);
        fill(235, 210 - 20, 70);
        rect(x, y + unitH, unitW, unitH2);
    },
};

var backgrounds = {
    background : "spaceFromEarth",
    backgrounds : {
        "air" : {
            load : function()
            {
                background(170, 217 - 20, 250);
                var circles = storage.graphics.circles;
                for(var i = 0; i < circles.length; i++)
                {
                    noStroke();
                    fill(circles[i].color);
                    ellipse(circles[i].xPos, circles[i].yPos, circles[i].diameter, circles[i].diameter);
                }
                fill(0, 0, 0, 30);
                rect(0, 0, width, height);
                backgrounds.backgrounds.air.img = get(0, 0, width, height);
            },
            drawBackground : function()
            {
                if(backgrounds.backgrounds.air.img !== undefined)
                {
                    image(backgrounds.backgrounds.air.img, 0, 0);
                }
            },
        },
        "dark" : {
            load : function()
            {
                background(3, 0, 123);

                strokeWeight(10);
                stroke(0, 0, 0, 160);
                fill(0, 0, 0, 100);
                for(var x = 5; x < width; x += 40)
                {
                    rect(x, 5, 30, 30);
                    rect(x, 375, 30, 30);

                    if(x > 30 && x < 370)
                    {
                        rect(x, 5 + 35, 30, 30);
                        rect(x, 375 - 35, 30, 30);
                    }
                }

                for(var y = 5 + 40; y < height - 50; y += 30)
                {
                    rect(5, y, 30, 30);
                    rect(365, y, 30, 30);

                    if(y > 30 && y < 370)
                    {
                        rect(5 + 35, y, 30, 30);
                        rect(375 - 35, y, 30, 30);
                    }
                }

                noStroke();
                for(var a = 200; a >= 0; a -= 50)
                {
                    fill(0, 30, 255 - a);
                    rect(200 - a / 2, 200 - a / 2, a, a);
                }

                backgrounds.backgrounds.dark.img = get(0, 0, width, height);

                backgrounds.backgrounds.dark.streaks = [];

                for(var i = 0; i < random(30, 50); i++)
                {
                    backgrounds.backgrounds.dark.streaks.push({
                        xPos : random(0, width),
                        yPos : random(HALF_HEIGHT - 20, HALF_HEIGHT + 30),
                        width : random(40, 60),
                        height : 4,
                        yVel : 0,
                        xVel : random(-2, 2),
                    });
                }

                fill(255, 255, 255, 60);
                rect(0, 0, width, height);
            },
            drawBackground : function()
            {
                if(backgrounds.backgrounds.dark.img !== undefined)
                {
                    image(backgrounds.backgrounds.dark.img, 0, 0);
                }

                var streaks = backgrounds.backgrounds.dark.streaks || [];
                for(var i = 0; i < streaks.length; i++)
                {
                    streaks[i].xPos += streaks[i].xVel;
                    streaks[i].yPos += streaks[i].yVel;

                    if(abs(streaks[i].xVel) > 0)
                    {
                        if(this.streaks[i].xPos + this.streaks[i].width < 0)
                        {
                            this.streaks[i].xPos = width;
                        }
                        else if(this.streaks[i].xPos > width)
                        {
                            this.streaks[i].xPos = -this.streaks[i].width;
                        }
                    }
                    if(abs(streaks[i].yVel) > 0)
                    {
                        if(this.streaks[i].yPos + this.streaks[i].height < 0)
                        {
                            this.streaks[i].yPos = height;
                        }
                        else if(this.streaks[i].yPos > height)
                        {
                            this.streaks[i].yPos = -this.streaks[i].height;
                        }
                    }

                    fill(0, 0, 0, 100);
                    rect(streaks[i].xPos, streaks[i].yPos, streaks[i].width, streaks[i].height, 5);
                }
            },
        },
        "underground" : {
            primeLoad : function()
            {
                var p_width = width, p_height = height;

                function Layer_1()
                {
                    background(2, 8, 30);
                    noStroke();
                    fill(0, 10, 70, 100);

                    var i = 0;
                    for(var y = 0; y < p_height; y += 30)
                    {
                        for(var x = (i % 2 === 0) ? 15 : 0; x < p_width; x += 30)
                        {
                            rect(x, y, 10, 10);
                        }

                        i++;
                    }

                    return get(0, 0, p_width, p_height);
                }

                function Layer_2()
                {
                    background(0, 0, 0, 0);

                    var map1 = [
                        "  cc      c c   c   ",
                        "  cc      ccc   cccc",
                        "   cc             cc",
                        "                    ",
                        "cccc                ",
                        "   cc    ccc      cc",
                        "cc  c    cc      ccc",
                        "ccc cc           c  ",
                        "  c  c        cccc  ",
                        "     cc     ccc  ccc",
                        "      ccc   c     cc",
                        "    c   c   c       ",
                        "   cc   c  cc       ",
                        "   cc   cccc        ",
                        "         c    ccc   ",
                        "         c     cc   ",
                        "         c          ",
                        "cc      cc          ",
                        "cccc    c   ccc   cc",
                        "   c    c   c c   cc",
                    ];

                    map1.unitWidth = 20;
                    map1.unitHeight = 20;

                    noStroke();
                    for(var i = 0; i < map1.length; i++)
                    {
                        for(var j = 0; j < map1[i].length; j++)
                        {
                            var xPos = j * map1.unitWidth,
                                yPos = i * map1.unitHeight;

                            switch(map1[i][j])
                            {
                                case "c" :
                                    fill(0, 0, 0, 30+50);
                                    rect(xPos, yPos, 
                                         map1.unitWidth, map1.unitHeight);

                                    fill(0, 0, 0, 70+50);
                                    rect(xPos + 4, yPos + 4, 
                                         map1.unitWidth - 8, map1.unitHeight - 8);

                                    if(j > 0 && map1[i][j - 1] === 'c')
                                    {
                                        rect(xPos, yPos + 4, 4, map1.unitHeight - 8);  
                                    }
                                    if(j < map1[i].length - 1 && map1[i][j + 1] === 'c')
                                    {
                                        rect(xPos + map1.unitWidth - 4, yPos + 4, 4, map1.unitHeight - 8);  
                                    }
                                    if(i > 0 && map1[i - 1][j] === 'c')
                                    {
                                        rect(xPos + 4, yPos, map1.unitWidth - 8, 4);  
                                    }
                                    if(i < map1.length - 1 && map1[i + 1][j] === 'c')
                                    {
                                        rect(xPos + 4, yPos + map1.unitHeight - 4, map1.unitWidth - 8, 4);  
                                    }
                                    break;
                            }
                        }
                    }

                    return get(0, 0, p_width, p_height);
                }

                function Layer_3()
                {
                    background(0, 0, 0, 0);
                    
                    var map1 = [
                        "    c        c  c   ",
                        " c  c c     cc cc   ",
                        " cccccc      ccc    ",                        
                        "    c cc   ccc cc   ",                       
                        "   cc      c   c    ", 
                        "   c                ",
                        "                    ", 
                        "                    ", 
                        "                    ", 
                        "                    ", 
                        "                    ", 
                        "                    ", 
                        "              c  c  ",  
                        "   cc  c     ccccc  ", 
                        "    c  c      c     ", 
                        "c c cccccc    cc    ", 
                        "ccc  c         c    ", 
                        "  cccc         ccc  ",  
                        "  c              c  ",  
                        "  c              c  ", 
                    ];

                    map1.unitWidth = 20;
                    map1.unitHeight = 20;

                    noStroke();
                    for(var i = 0; i < map1.length; i++)
                    {
                        for(var j = 0; j < map1[i].length; j++)
                        {
                            var xPos = j * map1.unitWidth,
                                yPos = i * map1.unitHeight;

                            switch(map1[i][j])
                            {
                                case "c" :
                                    fill(0, 80, 50, 28+10);
                                    rect(xPos, yPos, 
                                         map1.unitWidth, map1.unitHeight);

                                    fill(0, 120, 40, 46+10);
                                    rect(xPos + 4, yPos + 4, 
                                         map1.unitWidth - 8, map1.unitHeight - 8);

                                    if(j > 0 && map1[i][j - 1] === 'c')
                                    {
                                        rect(xPos, yPos + 4, 4, map1.unitHeight - 8);  
                                    }
                                    if(j < map1[i].length - 1 && map1[i][j + 1] === 'c')
                                    {
                                        rect(xPos + map1.unitWidth - 4, yPos + 4, 4, map1.unitHeight - 8);  
                                    }
                                    if(i > 0 && map1[i - 1][j] === 'c')
                                    {
                                        rect(xPos + 4, yPos, map1.unitWidth - 8, 4);  
                                    }
                                    if(i < map1.length - 1 && map1[i + 1][j] === 'c')
                                    {
                                        rect(xPos + 4, yPos + map1.unitHeight - 4, map1.unitWidth - 8, 4);  
                                    }
                                    break;
                            }
                        }
                    }

                    return get(0, 0, p_width, p_height);
                }

                function Layer_4()
                {
                    background(0, 0, 0, 0);
                    
                    fill(6, 20, 60);

                    var extra = 0;
                    var start = 360 - 40;
                    var end = 313 - 40;

                    pushMatrix();
                        translate(0, 10);
                        beginShape();
                            curveVertex(p_width + extra, 400);
                            curveVertex(-extra, 400);
                            for(var x = -25 - extra; x < p_width + extra; x += 70)
                            {
                                curveVertex(20 + x - 35, start + sin(x % 35) * 26);
                                curveVertex(20 + x, end + cos(x % 70) * 23);
                            }
                            curveVertex(p_width + extra, 400);
                            curveVertex(-extra, 400);
                        endShape();
                    popMatrix();

                    var start = 40 + 20;
                    var end = 0 + 20;

                    pushMatrix();
                        translate(0, -10);
                        beginShape();
                            curveVertex(p_width + extra, 0);
                            curveVertex(-extra, 0);
                            for(var x = 15 - extra; x < p_width + extra; x += 60)
                            {
                                curveVertex(20 + x - 30, start + sin(x % 35) * 23);
                                curveVertex(20 + x, end + cos(x % 70) * 23);
                            }
                            curveVertex(p_width + extra, 0);
                            curveVertex(-extra, 0);
                        endShape();
                    popMatrix();

                    return get(-extra, 0, p_width + extra * 2, p_height);
                }

                function Layer_5()
                {
                    background(0, 0, 0, 0);
                    
                    fill(6, 30, 78);

                    var extra = 0;
                    var start = 360 - 20;
                    var end = 310 - 20;

                    beginShape();
                        curveVertex(p_width + extra, 400);
                        curveVertex(-extra, 400);
                        for(var x = -25 - extra; x < p_width + extra; x += 70)
                        {
                            curveVertex(20 + x - 45, start + sin(x % 180) * 26);
                            curveVertex(20 + x, end + cos(x % 70) * 23);
                        }
                        curveVertex(p_width + extra, 400);
                        curveVertex(-extra, 400);
                    endShape();

                    var start = 40 + 20;
                    var end = 0 + 20;

                    beginShape();
                        curveVertex(p_width + extra, 0);
                        curveVertex(-extra, 0);
                        for(var x = 15 - extra; x < p_width + extra; x += 60)
                        {
                            curveVertex(20 + x - 30, start + sin(x % 180) * 23);
                            curveVertex(20 + x, end + cos(x % 70) * 23);
                        }
                        curveVertex(p_width + extra, 0);
                        curveVertex(-extra, 0);
                    endShape();

                    return get(-extra, 0, p_width + extra * 2, p_height);
                }

                function Layer_6()
                {
                    background(0, 0, 0, 0);

                    var k = 0;
                    for(var i = 0; i < p_width; i += 18)
                    {
                        k++;

                        pushMatrix();
                            translate(i, p_height - random(7, 19) * 3);
                            fill(34, 165, 80, 100);
                            rect(0, 0, 18, 90, 10);
                        popMatrix();
                    }

                    var k = 0;
                    for(var i = 0; i < p_width; i += 18)
                    {
                        k++;

                        pushMatrix();
                            translate(i, -30);
                            fill(34, 165, 80, 100);
                            rect(0, 0, 18, random(7, 19) * 2 + 30, 10);
                        popMatrix();
                    }
                    
                    return get(0, 0, p_width, p_height);
                }

                this.layers = [Layer_1(), Layer_2(), Layer_3(), Layer_4(), Layer_5(), Layer_6()];
                this.speeds = [];
                this.diff = levelInfo.width - cam.focusXPos * 10 || 0;
            },
            drawBackground : function()
            {
                this.diff = (levelInfo.width - cam.focusXPos * 10 || 0);
                this.speeds = [this.diff / 68, this.diff / 56, this.diff / 52, this.diff / 42, this.diff / 30, this.diff / 20];

                for(var i = 0; i < this.layers.length; i++)
                {
                    var layer = this.layers[i];

                    pushMatrix();
                        translate(this.speeds[i], 0);

                        var index = -floor((this.speeds[i] + width) / layer.width);

                        image(layer, layer.width * (index + 1), 0);
                        image(layer, layer.width * index, 0);
                    popMatrix();
                }
            },
            moves : true
        },
        "winter" : {
            primeLoad : function()
            {
                pushMatrix();
                scale(screen.width / 400, screen.height / 400);

                noStroke();
                var backColor = color(147 - 30, 221 - 30, 250 - 30);
                background(backColor);

                //Atmosphere
                fill(red(backColor) - 130, green(backColor) - 130, blue(backColor) - 130);
                ellipse(160, 300, 850, 850);
                fill(red(backColor) - 80, green(backColor) - 80, blue(backColor) - 80);
                ellipse(160, 300, 535, 535);
                fill(red(backColor) - 30, green(backColor) - 30, blue(backColor) - 30);
                ellipse(160, 300, 430, 430);
                fill(red(backColor) - 10, green(backColor) - 10, blue(backColor) - 10);
                ellipse(160, 300, 350, 350);

                var starAmt = round(random(60, 80));

                var stars = 0;

                fill(200, 200, 255);

                var j = 0;
                while(stars < starAmt)
                {
                    var x = round(random(5, 395)),
                        y = round(random(2, 225));

                    if(Math.pow(abs(160 - x), 2) + Math.pow(abs(300 - y), 2) > Math.pow(230, 2))
                    {
                        ellipse(x, y, 2, 2);

                        stars++;
                    }   

                    j++;

                    //protection
                    if(j > 1000)
                    {
                        break;
                    }
                }

                //Moon
                pushMatrix();
                beginShape();
                    translate(270, -20);
                    scale(0.34, 0.34);
                    vertex(274, 166);
                    bezierVertex(283, 154, 213, 122, 192, 171);
                    bezierVertex(179, 228, 264, 258, 286, 200);
                    bezierVertex(254, 239, 228, 207, 226, 183);
                    bezierVertex(242, 145, 269, 170, 279, 169);
                endShape();
                popMatrix();

                function mountain(x, y, sx, sy, cap)
                {
                    pushMatrix();
                        translate(x || 0, y || 0);
                        scale(sx || 1, sy || 1);

                        fill(20, 144, 200);
                        triangle(70, 240, -10, 380, 150, 380);
                        fill(20, 164, 200, 140);
                        triangle(70, 260, 9, 380, 140, 380);

                        if(cap)
                        {
                            fill(255, 255, 255, 200);
                            triangle(70, 240, 55, 264, 84, 264);
                        }
                    popMatrix();
                }   

                pushMatrix();
                    //Adjustments
                    scale(1, 1.08);
                    translate(0, -30);

                    mountain(50, -20);
                    mountain();
                    mountain(90, 10);

                    fill(20, 134, 190);
                    beginShape();
                        vertex(0, 400);
                        vertex(0, 330);
                        
                        for(var i = 0; i < 400; i += 50)
                        {
                            vertex(i + 25, 300);
                            vertex(i + 50, 330);
                        }  

                        vertex(400, 330);
                        vertex(400, 400);
                    endShape();

                    fill(0, 146, 194);
                    beginShape();
                        vertex(0, 400);
                        vertex(0, 330);
                        
                        for(var i = 0; i < 400; i += 80)
                        {
                            vertex(i + 35, 300);
                            vertex(i + 60, 330);
                        }    
                        
                        vertex(400, 330);
                        vertex(400, 400);
                    endShape();

                    fill(10, 125, 167);
                    beginShape();
                        vertex(0, 400);
                        vertex(0, 330+10);
                        
                        for(var i = 0; i < 400; i += 80)
                        {
                            vertex(i + 35, 320);
                            vertex(i + 60, 350);
                        }    
                        
                        vertex(400, 330+10);
                        vertex(400, 400);
                    endShape();

                    quad(0, 350, 400, 350, 400, 380, 0, 380);

                    //Hills
                    fill(20, 114, 150);
                    ellipse(50, 400, 120, 80);
                    ellipse(170, 400, 160, 80);
                    ellipse(280, 400, 140, 80);
                    ellipse(400, 400, 170, 80);

                    fill(20, 134, 150);
                    ellipse(60, 410, 120, 80);
                    ellipse(180, 410, 160, 80);
                    ellipse(290, 410, 140, 80);
                    ellipse(410, 410, 170, 80);

                    //Shading
                    fill(112, 64, 31, 20);
                    rect(0, 387, 400, 14, 100);
                popMatrix();

                backgrounds.backgrounds.winter.img = get(0, 0, screen.width, screen.height);
                popMatrix();
            },
            load : function()
            {
                graphics.inClouds.create(round(random(10, 20)));
            },
            drawBackground : function()
            {
                if(backgrounds.backgrounds.winter.img !== undefined)
                {
                    image(backgrounds.backgrounds.winter.img, 0, 0, width, height);

                    graphics.inClouds.draw();
                    if(!screenUtils.fade.fading)
                    {
                        graphics.inClouds.update();
                    }
                }
            },
        },
        "spaceFromEarth" : {
            primeLoad : function()
            {
                graphics.stars.create(round(random(54, 80)) + 3);
                background(255, 255, 255);

                pushMatrix();
                    scale(screen.width / 400, screen.height / 400);
                    noStroke();
                    var backColor = color(147 - 30, 221 - 30, 250 - 30);
                    fill(red(backColor), green(backColor), blue(backColor));
                    rect(0, 0, screen.width, screen.height);

                    backgrounds.backgrounds.spaceFromEarth.drawBackground();
                    var spaceFromEarth = get(0, 0, screen.width, screen.height);//400, 400
                popMatrix();
                backgrounds.backgrounds.spaceFromEarth.drawBackground = function()
                {
                    image(spaceFromEarth, 0, 0, width, height);
                    graphics.inClouds.draw();
                    if(!screenUtils.fade.fading)
                    {
                        graphics.inClouds.update();
                    }
                };
            },
            load : function()
            {
                graphics.inClouds.create(round(random(4, 13)));
            },
            drawBackground : function()
            {
                var backColor = color(147 - 30, 221 - 30, 250 - 30);
                background(red(backColor), green(backColor), blue(backColor));
                noStroke();
                
                //Atmosphere
                fill(red(backColor) - 10, green(backColor) - 10, blue(backColor) - 10);
                rect(0, 155, 400, 10);
                fill(red(backColor) - 30, green(backColor) - 30, blue(backColor) - 30);
                rect(0, 130, 400, 25);
                fill(red(backColor) - 80, green(backColor) - 80, blue(backColor) - 80);
                rect(0, 90, 400, 40);
                fill(red(backColor) - 130, green(backColor) - 130, blue(backColor) - 130);
                rect(0, 0, 400, 90, 0);
                graphics.stars.draw();
                
                //Moon
                fill(220, 222, 124);
                pushMatrix();
                scale(0.3, 0.3);
                translate(-17, -63);
                beginShape();
                vertex(274, 166);
                bezierVertex(283, 154, 213, 122, 192, 171);
                bezierVertex(179, 228, 264, 258, 286, 200);
                bezierVertex(254, 239, 228, 207, 226, 183);
                bezierVertex(242, 145, 269, 170, 279, 169);
                endShape();
                popMatrix();
                
                //Mountains
                fill(13, 93, 204);
                triangle(343, 308, 213, 421, 299, 239);
                fill(13, 133, 130);
                triangle(317, 308, 200, 421, 266, 256);
                triangle(369, 308, 204, 421, 342, 255);
                
                fill(255, 255, 255, 200);
                triangle(266, 256, 262, 267, 273, 263);
                triangle(342, 255, 348, 266, 332, 266);
                triangle(299, 239, 293, 251, 308, 252);
                
                //Hills
                fill(28, 122, 52);
                ellipse(258, 317, 158, 66);
                fill(30, 130, 50);
                ellipse(71, 298, 153, 60);
                ellipse(15, 338, 114, 58);
                ellipse(371, 332, 146, 70);
                
                //observetory
                var ox = 129;
                var oy = 291;
                fill(130, 130, 130);
                pushMatrix();
                translate(ox, oy);
                scale(1.2, 1.2);
                rotate(208);
                fill(23, 71, 161);
                rect(-2.5, 5, 5, 28);
                fill(24, 92, 161);
                rect(-4.5, 16, 10, 10);
                popMatrix();
                
                //Hills and grass
                fill(23, 71, 161);
                ellipse(ox, oy, 50, 45);
                fill(24, 92, 161);
                ellipse(ox, oy, 33, 33);
                
                shapes.bush(60, 335, 149, 70);
                shapes.bush(270, 344, 122, 70);
                fill(117, 82, 57);
                ellipse(200, 360, 155, 83);
                
                fill(41, 171, 115);
                ellipse(77, 353, 162, 67);
                ellipse(319, 357, 168, 63);
                
                shapes.grass(35, 320, 20, 31);
                shapes.grass(79, 307, 20, 45);
                shapes.grass(121, 333, 20, 17);
                
                shapes.grass(331, 315, 20, 38);
                shapes.grass(289, 333, 20, 17);
                
                //Ground
                fill(56, 158, 25);
                rect(0, 350, 400, 100, 10);
                
                fill(76, 184, 33);
                for(var x = 0; x < width; x += 40)
                {
                    rect(x, 350, 20, 100, 15);
                }
                
                fill(0, 0, 0, 60);
                for(var x = 0; x < width; x += 70)
                {
                    rect(x, 375, 70, 100, 10);
                }
            },
        },
    },
    load : function()
    {
        if(this.backgrounds[this.background].load !== undefined)
        {
            this.backgrounds[this.background].load();
        }
    },
    setBackground : function(backgroundName)
    {
        if(this.backgrounds[backgroundName] !== undefined)
        {
            this.background = backgroundName;
        }
    },
    drawBackground : function()
    {
        if(this.backgrounds[this.background].drawBackground !== undefined)
        {
            this.backgrounds[this.background].drawBackground();
        }

        if(levelInfo.backgroundDarkGrid)
        {
            this.darkGrid.draw();
        }
    },
    drawForeground : function()
    {
        if(this.backgrounds[this.background].drawForeground !== undefined)
        {
            this.backgrounds[this.background].drawForeground();
        }
    },
    primeLoad : function()
    {
        for(var i in this.backgrounds)
        {
            if(this.backgrounds[i].primeLoad !== undefined)
            {
                this.backgrounds[i].primeLoad(); 
            }
        }

        this.darkGrid = new BackBlock(0, 0, WIDTH, HEIGHT);
    },
};

var pixelFuncs = {
    safeRead : function(item, col, row)
    {
        return(((col >= 0 && col < item.length) &&
            (row >= 0 && row < item[col].length)) ? item[col][row]  : undefined);
    },
    replacePixels : function(img, findColor, replaceColor)
    {
        var _pixels = img.pixels.toArray();
        for(var i = 0; i < _pixels.length; i++)
        {
            if(_pixels[i] === findColor || (red(_pixels[i]) >= 240 && green(_pixels[i]) >= 240 && blue(_pixels[i]) >= 240))
            {
                img.pixels.setPixel(i, replaceColor);
            }
        }
    },
    createPixelImage : function(input)
    {
        if(input.pixelSize === undefined)
        {
            input.pixelSize = 1;
        }

        if(input.width === undefined)
        {
            input.width = input.pixelSize * input.pixels[0].length;
        }

        if(input.height === undefined)
        {
            input.height = input.pixelSize * input.pixels.length;
        }

        var img = createGraphics(input.width, input.height, P2D);
        img.beginDraw();
        img.noStroke();
        img.background(0, 0, 0, 0);
        for(var row = 0; row < input.pixels.length; row++)
        {
            for(var col = 0; col < input.pixels[row].length; col++)
            {
                var char = pixelFuncs.safeRead(input.pixels, row, col);
                var toFill = (input.pallete[char] !== undefined) ?
                    input.pallete[char]  : "clear";
                if(toFill !== "clear")
                {
                    img.fill(toFill);
                    img.rect(col * input.pixelSize, row * input.pixelSize,
                        input.pixelSize, input.pixelSize);
                }
            }
        }
        img.endDraw();
        img.inputWidth = input.width;
        img.inputHeight = input.height;
        return img;
    },
};

var pallete = {
    'b' : color(31, 54, 122),
    'c' : color(0, 0, 0),
    'd' : color(43, 181, 181),
    'e' : color(200, 150, 60),
    'f' : color(43, 132, 181),
    'g' : color(14, 130, 31),
    'h' : color(40, 95 - 50, 151),
    'i' : color(31 - 20, 54 - 20, 122 - 20),
    'j' : color(200 - 30, 150 - 30, 60 - 30),
    'k' : color(34, 150, 51),
    'l' : color(51, 51, 51),
};
var storedImages = {
    "skyViper" : pixelFuncs.createPixelImage({
        width : 50, 
        height : 50, 
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aaaaaaaabbbbaa",
            "aaaaaaabccccba",
            "bbabbbabcbcbcb",
            "bdbdeebcffcffb",
            "bdeedbcccccbba",
            "abdebfffbbbaaa",
            "aabbbcccfbaaaa",
            "aaaabffcfcbaaa",
            "agaaabbbffcbaa",
            "gaggaaaabcfbaa",
            "aggggbaabcfbaa",
            "aaggbfbbfcfbaa",
            "aaagbfccffbaaa",
            "aaaaabffbbaaaa",
            "aaaaaabbaaaaaa",
        ],
        pallete : {
            'a':"clear",
            'b':-16777215,
            'c':-13778048,
            'd':-11846475,
            'e':-10848091,
            'f':-13785753,
            'g':-1025524,
        },
    }),
    "skyViperLeft" : pixelFuncs.createPixelImage({
        width : 50, 
        height : 50, 
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aabbbbaaaaaaaa",
            "abccccbaaaaaaa",
            "bcbcbcbabbbabb",
            "bffcffcbeedbdb",
            "abbcccccbdeedb",
            "aaabbbfffbedba",
            "aaaabfcccbbbaa",
            "aaabcfcffbaaaa",
            "aabcffbbbaaaga",
            "aabfcbaaaaggag",
            "aabfcbaabgggga",
            "aabfcfbbfbggaa",
            "aaabffccfbgaaa",
            "aaaabbffbaaaaa",
            "aaaaaabbaaaaaa",
        ],
        pallete : {
            'a':"clear",
            'b':-16777215,
            'c':-13778048,
            'd':-11846475,
            'e':-10848091,
            'f':-13785753,
            'g':-1025524,
        },
    }),
    "skyViper2" : pixelFuncs.createPixelImage({
        width : 50, 
        height : 50, 
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aabbaaaaaaaaaaa",
            "abcdbbbabbbbaaa",
            "abdccdcbeeeebaa",
            "bbcbbbdbebebeba", 
            "bfbfddbeggeggba",
            "bfddfbeeeeghbaa", 
            "abfdbgggbgbahaa", 
            "aabbabeegbaaaha", 
            "aaaaabgegebahah",
            "aiaaaabbggebaaa", 
            "iaiiaaaabegbaaa", 
            "aiiiibaabegbaaa", 
            "aaiibgbbgegbaaa", 
            "aaaibgeeggbaaaa", 
            "aaaaabggbbaaaaa", 
            "aaaaaabbaaaaaaa", 
        ],
        pallete : {
            'a':"clear",
            'b':-16777215,
            'c':-14787959,
            'd':-10848091,
            'e':-13778048,
            'f':-11846475,
            'g':-13785753,
            'h':-1048513,
            'i':-1025524,
        },
    }),
    "skyViperLeft2" : pixelFuncs.createPixelImage({
        width : 50, 
        height : 50, 
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aaaaaaaaaaabbaa",
            "aaabbbbabbbdcba",
            "aabeeeebcdccdba",
            "abebebebdbbbcbb",
            "abggeggebddfbfb",
            "aabhgeeeebfddfb",
            "aahabgbgggbdfba",
            "ahaaabgeebabbaa",
            "hahabegegbaaaaa",
            "aaabeggbbaaaaia",
            "aaabgebaaaaiiai",
            "aaabgebaabiiiia",
            "aaabgegbbgbiiaa",
            "aaaabggeegbiaaa",
            "aaaaabbggbaaaaa",
            "aaaaaaabbaaaaaa",
        ],
        pallete : {
            'a':"clear",
            'b':-16777215,
            'c':-14787959,
            'd':-10848091,
            'e':-13778048,
            'f':-11846475,
            'g':-13785753,
            'h':-1048513,
            'i':-1025524,
        },
    }),
    "ninja" : pixelFuncs.createPixelImage({
        width : 30, 
        height : 48, 
        replace : true,
        pixelSize : 4, 
        pixels : [
            "aabbbbaa",
            "aabccdaa",
            "aabbbdaa",
            "effbbffe",
            "abffffba",
            "abgbbgba",
            "acdbgbca",
            "acbbdbca",
            "aabgbbaa",
            "aadbbgaa",
            "aabbbbaa",
            "aacaacaa",
            "aacaacaa",
        ],
        pallete : {
            'a':"clear",
            'b':-16777216,
            'c':-14803328,
            'd':-16777152,
            'e':-8355712,
            'f': 127.5,
            'g':-15794032,
        },
    }),
    "ninjaStar" : pixelFuncs.createPixelImage({
        width : 18, 
        height : 18, 
        replace : true,
        pixelSize : 3, 
        pixels : [
            "abbaaa",
            "aabaab",
            "aaccbb",
            "bbccaa",
            "baabaa",
            "aaabba",
        ],
        pallete : {
            'a':"clear",
            'b':-16777216,
            'c':-12802684,
        },
    }),
    "ninjaBoss" : pixelFuncs.createPixelImage({
        width : 11 * 2.7, 
        height : 28 * 2.7, 
        replace : true,
        pixelSize : 2.7, 
        pixels : [
            "aabcdddcbaa",
            "abbdcccdbba",
            "abeeeeeeeba",
            "aceffeffeca",
            "aceeeeeeeca",
            "abbdgggdbba",
            "aabcccccbaa",
            "aahcifichaa",
            "abhfeeefhba",
            "bfcedddecfb",
            "bfcdifidcfb",
            "ddhfififhdd",
            "dfhfeeefhfd",
            "bfcedddecfb",
            "becdifidceb",
            "eehfififhee",
            "eahfeeefhae",
            "aacfeeefcaa",
            "aahhfffhhaa",
            "aabbbbbbbaa",
            "aabfcccfbaa",
            "aabfcacfbaa",
            "abbecacebba",
            "aeeecaceeea",
            "afchhahhcfa",
            "afchaaahcfa",
            "afddaaaddfa",
            "afeeaaaeefa",
        ],
        pallete : {
           'a':"clear",
           'b':-15778670,
           'c':-13808768,
           'd':-9842040,
           'e':-10836532,
           'f':-12814140,
           'g':-14776440,
           'h':-13808768,
           'i':-16738574,
        },
    }),
    "suitLeft" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  hchcbi  ",
            "  ccccbi  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "fdejdfbbbi",
            "ffddbbejfd",
            " lddbbeeff",
            " libbbjel ",
            " libbbjel ",
            " lkgbbbill",
            "  gkbbbill",
            "  kg  bi  ",
            "  dd  dd  ",
            "  ff  ff  ",
        ],
        pallete : pallete,
    }),
    "suitLeft2" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  hchcbi  ",
            "  ccccbi  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "fdejdfbbbi",
            "ffddbbejfd",
            " lddbbeeff",
            " libbbjel ",
            " libbbjel ",
            " lkgbbbill",
            "  gkbbbill",
            "  kg  dd  ",
            "  dd  ff  ",
            "  ff      ",
        ],
        pallete : pallete,
    }),
    "suitLeft3" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  hchcbi  ",
            "  ccccbi  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "fdejdfbbbi",
            "ffddbbejfd",
            " lddbbeeff",
            " libbbjel ",
            " libbbjel ",
            " lkgbbbill",
            "  gkbbbill",
            "  dd  bi  ",
            "  ff  dd  ",
            "      ff  ",
        ],
        pallete : pallete,
    }),
    "suitRight" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  ibchch  ",
            "  ibcccc  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "ibejdfbbdf",
            "dfddbbejff",
            "ffddbbeel ",
            " libbbjel ",
            " libbbjel ",
            "llkgbbbil ",
            "llgkbbbi  ",
            "  kg  bi  ",
            "  dd  dd  ",
            "  ff  ff  ",
        ],
        pallete : pallete,
    }),
    "suitRight2" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  ibchch  ",
            "  ibcccc  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "ibejdfbbdf",
            "dfddbbejff",
            "ffddbbeel ",
            " libbbjel ",
            " libbbjel ",
            "llkgbbbil ",
            "llgkbbbi  ",
            "  dd  bi  ",
            "  ff  dd  ",
            "      ff  ",
        ],
        pallete : pallete,
    }),
    "suitRight3" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  ibchch  ",
            "  ibcccc  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "ibejdfbbdf",
            "dfddbbejff",
            "ffddbbeel ",
            " libbbjel ",
            " libbbjel ",
            "llkgbbbil ",
            "llgkbbbi  ",
            "  kg  dd  ",
            "  dd  ff  ",
            "  ff      ",
        ],
        pallete : pallete,
    }),
    "suit" : pixelFuncs.createPixelImage({
        width : 30,
        height : 60,
        replace : true,
        pixelSize : 3,
        pixels : [
            "  iiiiii  ",
            "  ibbbbi  ",
            "  ichchi  ",
            "  icccci  ",
            "  ibbbbi  ",
            "iiibbbbidd",
            "ibbbbbbbdf",
            "ibeebbddbi",
            "ibjebbddbi",
            "ibeeddbbbi",
            "ibejdfbbbi",
            "fdddbbejdf",
            "ffddbbeeff",
            " libbbjel",
            " libbbjel",
            " lkgbbbil ",
            "llgkbbbill",
            "llkgllbill",
            "  dd  dd  ",
            "  ff  ff  ",
        ],
        pallete : pallete,
    }),
    npcs : {
        "Abby" : pixelFuncs.createPixelImage({
            replace : true,
            pixelSize : 3, 
            pixels : [
                "aabbbbaaa",
                "abbbbbbaa",
                "abbccbbba",
                "abcdcdbba",
                "abccccbba",
                "abceecbba",
                "bbccccbba",
                "bbfffffba",
                "bffgggffa",
                "fhfggifff",
                "fhfgiifhf",
                "fhfggifhf",
                "fhfgggfhf",
                "fhfiggfhf",
                "fffiigfff",
                "ccfiggccf",
                "ccggggcca",
                "aafhhhfaa",
                "aahfffhaa",
                "aahfafhaa",
                "aahfafhaa",
                "aahfafhaa",
                "aahfafhaa",
                "aahfafhaa",
                "aaffaffaa",
                "aagjajgaa",
                "aggjajgga",
            ],
            pallete : {
                'a':"clear",
                'b':-6916009,
                'c':-7781,
                'd':-11831097,
                'e':-1981543,
                'f':-11811943,
                'g':-10832671,
                'h':-8855143,
                'i':-12821791,
                'j':-10821151,
            },
        }),
        "Jason" : pixelFuncs.createPixelImage({
            replace : true,
            pixelSize : 3, 
            pixels : [
                "abbbbbaa",
                "bbbbbbba",
                "bbcccbba",
                "acdcdcaa",
                "acccccaa",
                "aaceecaa",
                "aaccccaa",
                "aafffffa",
                "affgggff",
                "ahhiiihh",
                "afhggghf",
                "afhiiihf",
                "afhggghf",
                "afhiiihf",
                "accjjjcc",
                "acckkkcc",
                "aaakkkaa",
                "aaakakaa",
                "aaakakaa",
                "aaakakaa",
                "aaakakaa",
                "aaajajaa",
                "aajjajja",
            ],
            pallete : {
                'a':"clear",
                'b':-14799616,
                'c':-1977714,
                'd':-13781941,
                'e':-4938385,
                'f':-2991550,
                'g':-9838270,
                'h':-1989310,
                'i':-9853630,
                'j':-13781823,
                'k':-14780223,
            },
        }),
        "Oscar" : pixelFuncs.createPixelImage({
            replace : true,
            pixelSize : 3, 
            pixels : [
                "aaabbaaa",
                "abbbbbaa",
                "abcccbba",
                "abccccba",
                "bbdccdba",
                "aaccccaa",
                "aaccccaa",
                "aaceecaa",
                "aaccccaa",
                "aaaccaaa",
                "aaffffaa",
                "affffffa",
                "fffggfff",
                "ffhhhhff",
                "ffggggff",
                "ffhhhhff",
                "ffggggff",
                "ffhhhhff",
                "cciiiicc",
                "aiiiiiia",
                "aiiaaiia",
                "aiiaaiia",
                "aiiaaiia",
                "aiiaaiia",
                "aiiaaiia",
                "ajjaajja",
            ],
            pallete : {
                'a':-"clear",
                'b':-167,
                'c':-11661,
                'd':-16734887,
                'e':-19393,
                'f':-50087,
                'g':-13785767,
                'h':-9838247,
                'i':-14811047,
                'j':-12795047,
            },
        }),
    },
    "chest" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 4, 
        pixels : [
            "bbbbbbb",
            "bcccccb",
            "bbbdbbb",
            "bcccccb",
            "bcccccb",
            "bbbbbbb",
        ],
        pallete : {
           'a':"clear",
           'b':-2972390,
           'c':-1002412,
           'd':-987031,
        },
    }),
    "chest-open" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 4, 
        pixels : [
            "bbbcbbb",
            "bdddddb",
            "bdddddb",
            "bbbbbbb",
            "beeeeeb",
            "beeeeeb",
            "bbbbbbb",
        ],
        pallete : {
            'a':"clear",
            'b':-2972390,
            'c':-990976,
            'd':-14807296,
            'e':-1002412,
        },
    }),
     "itemChest" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 4, 
        pixels : [
            "bbbbbbbbb",
            "bbcccccbb",
            "bcccccccb",
            "bbbdddbbb",
            "bcccccccb",
            "bcccccccb",
            "bbcccccbb",
            "bbbbbbbbb",
        ],
        pallete : {
           'a':"clear",
           'b':color(2, 2, 2),
           'c':color(52, 38, 138),
           'd':color(75, 175, 75),
        },
    }),
    "itemChest-open" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 4, 
        pixels : [
            "bbbdddbbb",
            "bUUUUUUUb",
            "bUUUUUUUb",
            "bbbbbbbbb",
            "bcccccccb",
            "bcccccccb",
            "bbcccccbb",
            "bbbbbbbbb",
        ],
        pallete : {
           'a':"clear",
           'b':color(2, 2, 2),
           'c':color(52, 38, 138),
           'd':color(75, 175, 75),
           'U':color(22, 13, 90),
        },
    }),
    "dirtyBlock" : pixelFuncs.createPixelImage({
       replace : true,
       pixelSize : 6, 
       pixels : [
           "bbbccbbb",
           "bdbedddc",
           "bebddeeb",
           "cebeeeeb",
           "ceebbbbc",
           "cbeeeebc",
           "bbdddebb",
           "ccbbbbcc",
       ],
       pallete : {
           'a':"clear",
           'b':-12798767,
           'c':-11823450,
           'd':-12818109,
           'e':-13797210,
       },
    }),
    "dirtyCat" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aaaaaaabaaaaaaaaaaaaaaaaaaa",
            "abaaaaabaaaaaaaaaaaaaaaaaaa",
            "abaaaabcbaaaaaaaaaaaaaaaaaa",
            "bcbbbbbcbaaaaaaaaaaaaaaaaaa",
            "bcbccddbbaaaaaaaaaaaaaaaaaa",
            "bbbccccbbaaaaaaaaaaaaaaaaaa",
            "bddcccddbaaaaaaaaaaaaaaaaaa",
            "bccccddebaaaaaaaaaaaaaaaaaa",
            "bcdddccebaaaaaaaaaaaaaaaaaa",
            "bccccccebaaabbbabbbbaaaaaaa",
            "abbbceecbbbabccbccccbbbbbbb",
            "aabcececceebcceeccececececb",
            "aabbcceeccccceccceecebbbbba",
            "aaabbceecccceecccccbbaaaaaa",
            "aaaabbbceecbbbbbbcbaaaaaaaa",
            "aaaaaaabcbbaaaaabcbaaaaaaaa",
            "aaaaaaaabaaaaaaaabaaaaaaaaa",
        ],
        pallete : {
            'a':"clear",
            'b':-14788024,
            'c':-16769498,
            'd':-10832824,
            'e':-15774938,
        },
    }),
    "dirtyCat2" : pixelFuncs.createPixelImage({
        replace : true,
        pixelSize : 3, 
        pixels : [
            "aaaaaaabaaaaaaaaaaaaaaaaaaa",
            "abaaaaabaaaaaaaaaaaaaaaaaaa",
            "abaaaabcbaaaaaaaaaaaaaaaaaa",
            "bcbbbbbcbaaaaaaaaaaaaaaaaaa",
            "bcbccddbbaaaaaaaaaaaaaaaaaa",
            "bbbccccbbaaaaaaaaaaaaaaaaaa",
            "bddcccddbaaaaaaaaaaaaaaaaaa",
            "bccccddebaaaaaaaaaaaaaaaaaa",
            "bcdddccebaaaaaaaaaaaaaaaaaa",
            "bccccccebaaabbbabbbbaaaaaaa",
            "abbbceecbbbabccbccccbbbbbbb",
            "aabcececceebcceeccececececb",
            "aabbcceeccccceccceecebbbbba",
            "aaabbceecccceecccccbbaaaaaa",
            "aaaabbbccebbbbbbbcbaaaaaaaa",
            "aaaaaabcbbaaaaaaabcbaaaaaaa",
            "aaaaaaabaaaaaaaaaabaaaaaaaa",
        ],
        pallete : {
            'a':"clear",
            'b':-14788024,
            'c':-16769498,
            'd':-10832824,
            'e':-15774938,
        },
    }),
};

graphics.infoBarProps = {
    font : createFont("sans serif"),
    height : 17,
};

var usableItems = {
    "bubbleShield" : {
        description : "Shields you from projectiles.",
        displayName : "Bubble shield",
        use : function(data, useObject)
        {
            cameraGrid.addReference(gameObjects.getObject("bubbleShield").add(
                physics.getMiddleXPos(useObject), 
                physics.getMiddleYPos(useObject), 40));
        },
    },
    "candy" : {
        displayName : "Candy",
        description : "A piece of candy, recovers little to none hp.",
        use : function(data, useObject)
        {
            useObject.hp = Math.min(useObject.hp + Math.floor(random(0, 3)), useObject.maxHp);
        },
        image : pixelFuncs.createPixelImage({
            replace : true,
            pixelSize : 5, 
            pixels : [
                "               ",
                "     eeeee     ",
                "     ecccc     ",
                "     ecbbc     ",
                "     ecbce     ",
                "     eccce     ",
                "     eeeee     ",
                "       _       ",
                "       _       ",
                "       _       ",
                "       _       ",
                "       _       ",
                "       _       ",
                "       _       ",
            ],
            pallete : {
                'a':"clear",
                'b': color(20, 130, 76),
                'c': color(20, 30, 76),
                'd': color(180, 20, 16),
                'e': color(200, 30, 20),
                '_': color(230, 230, 230, 234)
            },
        }),
    },
    "meal" : {
        displayName : "Meal",
        description : "A tasty meal, recovers 10 hp.",
        use : function(data, useObject)
        {
            useObject.hp = Math.min(useObject.hp + 10, useObject.maxHp);
        },
    },
    "goldbar" : {
        description : "Each worth 100 coins",
        displayName : "Gold bar",
        use : function(data, useObject)
        {
            useObject.coins += 100;
        },
    },
    "energy" : {
        nonDrop : true,
        description : "Can be used to power up chests.",
        appropriate : function()
        {
            return false;
        }
    }
};

var itemsHandler = {
    canUse : function(data, useObject)
    {
        return (usableItems[data.contains] !== undefined && 
               (usableItems[data.contains].appropriate === undefined || 
                usableItems[data.contains].appropriate(data, useObject)));
    },
    use : function(data, useObject)
    {
        if(!this.canUse(data))
        {
            return false;
        }
        
        try{
            usableItems[data.contains].use(data, useObject);
        }
        catch(e)
        {
            console.log(e);
            return false;
        }

        return true;
    },
};

var Crystal;
var inventoryMenu = {
    opened : false,
    state : "closed",
    tryToOpen : function(func, a, b)
    {
        if(func && func() || keys.e)
        {
            this.open("home", a, b);
            return true;
        }
        return false;
    },
    tryToClose : function(func, a, b)
    {
        if(func && func() || keys.e)
        {
            this.close("home", a, b);
            return true;
        }
        return false;
    },
    open : function(scene, oFuncs, skipV)
    {
        this.scene = scene;

        this.init = false;
        this.opened = true;
        this.state = "opening";

        this.slideVel = 4.5;

        if(!skipV)
        {
            this.slideY = this.maxY;
        }

        this.oFuncs = oFuncs || {};
    },
    close : function(scene, onClose)
    {
        this.scene = scene;

        var lastState = this.state;

        this.opened = false;
        this.state = "closing";

        this.slideVel = 4.5;

        this.oFuncs = {};

        (onClose || function() {})();
    },
    oFuncs : {},

    slideY : height,
    slideX : 0,
    slideVel : 0,
    slideAcl : 2.4,
    maxY : height, 
    minY : 60,

    font : createFont("arial"),

    scene : "home",
    scenes : {
        slideX : 4,
        slideY : 40,
        slideVel : 0,
        maxX : width + 10, 
        minX : 10,
        width : 280,
        height : 200,
        "home" : {
            width : 330,
            height : 230,
            open : true,
            buttons : {
                name  : new Button(10, 132 + 18 * 0, 140, 18, color(12, 60, 160, 100), ""),
                hp    : new Button(10, 132 + 18 * 1, 140, 18, color(12, 60, 160, 100), ""),
                coins : new Button(10, 132 + 18 * 2, 140, 18, color(12, 60, 160, 100), ""),
                score : new Button(10, 132 + 18 * 3, 140, 18, color(12, 60, 160, 100), ""),
                k1 : new Button(186, 132 + 18 * 0, 141, 18, color(12, 60, 160, 100), ""),
                k2 : new Button(186, 132 + 18 * 1, 141, 18, color(12, 60, 160, 100), ""),
                k3 : new Button(186, 132 + 18 * 2, 141, 18, color(12, 60, 160, 100), ""),
                k4 : new Button(186, 132 + 18 * 3, 141, 18, color(12, 60, 160, 100), ""),
                k5 : new Button(186, 132 + 18 * 4, 141, 18, color(12, 60, 160, 100), ""),
                k6 : new Button(186, 132 + 18 * 5, 141, 18, color(12, 60, 160, 100), ""),
            }
        },
        "chest" : {
            width : 330,
            height : 230,
            buttons : {},
        },
        "items" : {
            width : 330,
            height : 230,
            buttons : {
                "options_use" : new Button(190, 132, 138, 22, color(28, 180, 48, 100), "Use", undefined, 10),
                "options_drop" : new Button(190, 154, 138, 22, color(28, 180, 48, 100), "Drop", undefined, 10),
            },
        },
        "crystals" : {
            width : 330,
            height : 230,
            buttons : {

            }
        }
    },
    menuButtons : {
        home : new Button(334, 100, 64, 26, color(12, 60, 160, 130), "Home"),
        items : new Button(334, 126, 64, 26, color(12, 60, 160, 130), "Items"),
        crystals : new Button(334, 152, 64, 26, color(12, 60, 160, 130), "Crystals"),
    },

    update : function()
    {
        if(this.state === "opening")
        {
            this.slideY -= this.slideVel;
            this.slideVel += this.slideAcl;

            if(this.slideY < this.minY)
            {
                this.slideY = this.minY;
                this.state = "opened";
            }
        }
        else if(this.state === "closing")
        {
            this.slideY += this.slideVel;
            this.slideVel += this.slideAcl;

            if(this.slideY > this.maxY)
            { 
                this.slideY = this.maxY;
                this.state = "closed";
            }
        }

        var player = gameObjects.getObject("player").input(0);
        var scene = this.scenes[this.scene];
        var self = this;

        if(!this.init)
        {
            switch(this.scene)
            {
                case "home" :
                    scene.buttons.name.message = "Name  " + player.name;
                    scene.buttons.hp.message = "Hp  " + player.hp.toFixed(1) + " / " + player.maxHp.toFixed(1);
                    scene.buttons.coins.message = "Coins  " + player.coins;
                    scene.buttons.score.message = "Score  " + player.score;

                    scene.buttons.name.hover = "Your character's avatar name or alias.";
                    scene.buttons.hp.hover = "Heart points, this is your health, try to keep it full.";
                    scene.buttons.coins.hover = "The amount of coins you've collected so far.";
                    scene.buttons.score.hover = "Your total score.";

                    var j = 0;
                    for(var i in player.discoveredPowers)
                    {
                        j++;

                        try{
                            scene.buttons["k" + j].message = player.discoveredPowers[i].name || i;
                            scene.buttons["k" + j].hover = player.discoveredPowers[i].description;
                            scene.buttons["k" + j].type = "Ability";
                        }
                        catch(e)
                        {
                            console.log(e);
                        }
                    }

                    for(var i in scene.buttons)
                    {
                        var btn = scene.buttons[i];
                        btn.textSize = 10;

                        if(btn.message === "")
                        {
                            delete scene.buttons[i];
                        }
                    }
                    break;

                case "items" :
                    scene.buttons["options_drop"].lastClickTime = millis();
                    scene.buttons["options_drop"].hover = "(hold) Drop the item, you can't get it back.";
                    scene.buttons["options_drop"].onClick = function()
                    {
                        if(!mouseIsPressed)
                        {
                            this.lastClickTime = 0;
                            return;
                        }

                        if(scene.highlightedButtonIndex === undefined || millis() - this.lastClickTime < 1000)
                        {
                            return;
                        }

                        var i = scene.highlightedButtonIndex;

                        var btn = scene.buttons["player_" + i];
                        var item = player.inventory.items[btn.index];

                        if(usableItems[item.contains] && usableItems[item.contains].nonDrop)
                        {
                            return;
                        }

                        if(typeof item.amount === "number")
                        {
                            item.amount--;
                        }

                        if(!item.amount)
                        {
                            item = player.inventory.items[btn.index] = {};
                            btn = scene.buttons["player_" + i] = new Button(10, 132 + i * 18, 140, 18, color(28, 28, 28, 100), " - ", undefined, 10);
                        }

                        btn.amount = item.amount;
                        btn.extra = (item.amount ? " x " + item.amount : "");

                        delete scene.highlightedButtonIndex;

                        this.lastClickTime = millis();
                    };

                    var _lastDraw = scene.buttons["options_drop"].draw;
                    scene.buttons["options_drop"].draw = function()
                    {
                        if(!mouseIsPressed)
                        {
                            this.lastClickTime = millis();
                        }

                        return _lastDraw.apply(this, arguments);
                    };

                    scene.buttons["options_use"].lastClickTime = 0;
                    scene.buttons["options_use"].hover = "Use the item, you can't get it back.";
                    scene.buttons["options_use"].onClick = function()
                    {
                        if(!mouseIsPressed)
                        {
                            this.lastClickTime = 0;
                            return;
                        }

                        if(scene.highlightedButtonIndex === undefined || millis() - this.lastClickTime < 500)
                        {
                            return;
                        }

                        var i = scene.highlightedButtonIndex;

                        var btn = scene.buttons["player_" + i];
                        var item = player.inventory.items[btn.index];

                        if(itemsHandler.use(item, player))
                        {
                            if(typeof item.amount === "number")
                            {
                                item.amount--;
                            }

                            if(!item.amount)
                            {
                                item = player.inventory.items[btn.index] = {};
                                btn = scene.buttons["player_" + i] = new Button(10, 132 + i * 18, 140, 18, color(28, 28, 28, 100), " - ", undefined, 10);
                                delete scene.highlightedButtonIndex;
                            }

                            btn.amount = item.amount;
                            btn.extra = (item.amount ? " x " + item.amount : "");
                        }

                        this.lastClickTime = millis();
                    };
                    break;
            }
            
            (this.oFuncs.init || function() {})(scene);

            for(var i in this.menuButtons)
            {
                this.menuButtons[i].textSize = 10;
            }

            this.init = true;
        }

        switch(this.scene)
        {
            case "items" :
                if(scene.highlightItems)
                {
                    var j = 0;
                    while(inventoryMenu.scenes[inventoryMenu.scene].buttons["player_" + j])
                    {
                        var btn = inventoryMenu.scenes[inventoryMenu.scene].buttons["player_" + j];

                        if(scene.highlightedButtonIndex === j)
                        {
                            j++;
                            continue;
                        }

                        btn.highlighted = undefined;
                        btn.highlightStroke = undefined;

                        j++;
                    }
                }

                var chng = (scene.highlightedButtonIndex === undefined || !itemsHandler.canUse(
                    player.inventory.items[scene.buttons["player_" + scene.highlightedButtonIndex].index], player));

                var item = {};
                if(scene.highlightedButtonIndex !== undefined)
                {
                    item = player.inventory.items[scene.buttons["player_" + scene.highlightedButtonIndex].index];
                }

                scene.buttons["options_use"].overrideColor = chng ? color(28, 28, 28, 100) : scene.buttons["options_use"].firstColor;
                if((usableItems[item.contains] && usableItems[item.contains].nonDrop) || scene.highlightedButtonIndex === undefined)
                {
                    scene.buttons["options_drop"].overrideColor = color(28, 28, 28, 100);
                }else{
                    scene.buttons["options_drop"].overrideColor = scene.buttons["options_drop"].firstColor;
                }
                break;
        }

        for(var i in scene.buttons)
        {
            var btn = scene.buttons[i];
            if(btn.clicked(mouseX, mouseY))
            {
                btn.color = color(0, 30, 130, 100);
                btn.textColor = color(240, 240, 240, 100);
            }else{
                btn.color = btn.overrideColor || btn.firstColor;
                btn.textColor = color(240, 240, 240, 150);
            }
        }

        for(var i in this.menuButtons)
        {
            var btn = this.menuButtons[i];
            if(btn.clicked(mouseX, mouseY))
            {
                btn.color = color(0, 30, 130, 100);
                btn.textColor = color(240, 240, 240, 100);
            }else{
                btn.color = btn.firstColor;
                btn.textColor = color(240, 240, 240, 150);
            }
        }

        (this.oFuncs.update || function() {})(this.scenes[this.scene]);

        if(!mouseIsPressed || this.scenes[this.scene].remoteMode)
        {
            return;
        }

        if(this.menuButtons.items.clicked() && this.scene !== "items")
        {            
            this.close(this.scene);
            this.open("items", {
                init : function(scene)
                {
                    player.onOpenItems(scene, true);
                }, 
                close : function(scene)
                {
                    if(keys.e)
                    {
                        scene.highlightedButtonIndex = undefined;
                        return ["items", function()
                        {
                            game.switchGameState(true, "play", true); 
                        }];
                    }
                },
            }, true);
        }
        else if(this.menuButtons.home.clicked() && this.scene !== "home")
        {            
            this.close(this.scene);
            this.open("home", undefined, true);
        }
        else if(this.menuButtons.crystals.clicked() && this.scene !== "crystals")
        {
            this.close(this.scene);
            this.open("crystals", undefined, true);
        }
    },
    draw : function()
    {
        var player = gameObjects.getObject("player").input(0);
        var returned = (this.oFuncs.close || function() {})(this.scenes[this.scene]);

        if(returned && returned.length)
        {
            return this.close.apply(this, returned);
        }

        var scene = this.scenes[this.scene];

        pushMatrix();
            translate(this.slideX, this.slideY);
            fill(0, 0, 0, 120);
            rect(0, 0, width, height - 120, 10);

            textFont(this.font);
            textSize(14);
            textAlign(LEFT, TOP);
            fill(240, 240, 240, 200);
            text("Inventory", 12, 10);

            pushMatrix();
                translate(this.scenes.slideX, this.scenes.slideY);
                switch(this.scene)
                {
                    case "home" :
                        fill(0, 0, 0, 90);
                        rect(0, 0, scene.width || this.scenes.width, scene.height || this.scenes.height + 30);

                        fill(12, 60, 160, 100);
                        rect(0, 0, scene.width || this.scenes.width, 26);

                        fill(240, 240, 240, 180);
                        text("Player                                  " + "Ability", 10, 5);
                        break;

                    case "chest" : case "items" : 
                        fill(0, 0, 0, 90);
                        rect(0, 0, scene.width || this.scenes.width,  scene.height || this.scenes.height + 30);

                        fill(12, 60, 160, 100);
                        rect(0, 0, scene.width || this.scenes.width, 26);

                        fill(240, 240, 240, 180);
                        text("Items                                   " + ((this.scene === "chest") ? "Chest Items" : "Options"), 10, 5);
                        break;

                    case "crystals" :
                        fill(0, 0, 0, 90);
                        rect(0, 0, scene.width || this.scenes.width,  scene.height || this.scenes.height + 30);

                        fill(12, 60, 160, 100);
                        rect(0, 0, scene.width || this.scenes.width, 26);

                        fill(240, 240, 240, 180);
                        text("Collected Crystals", 10, 5);

                        var crystals = player.crystals;

                        if(isEmpty(crystals))
                        {
                            fill(240, 240, 240, 100);
                            textSize(10);
                            text("You have not collected any crystals yet...", 10, 30);
                            break;
                        }

                        pushMatrix();
                            translate(170, 100);
                            fill(0, 0, 0, 200);
                            ellipse(0, 0, 20, 20);

                            if(this.autoAngle === undefined)
                            {
                                this.autoAngle = 0;
                            }

                            var toText = "";
                            var toFill = color(255, 255, 255, 140);

                            if(this.rDir === undefined)
                            {
                                this.rDir = random(-3, 3);
                            }

                            var a = 0;
                            for(var i in crystals)
                            {
                                a += 60;

                                if(!crystals[i].object)
                                {
                                    crystals[i].object = new Crystal(0, 0, 30, { 
                                        kind : i.toString() 
                                    });
                                }

                                var oAngle = physics.formulas.resolveAngle(this.autoAngle + a);
                                crystals[i].object.xPos = sin(radians(oAngle)) * 50;
                                crystals[i].object.yPos = cos(radians(oAngle)) * 50;
                                crystals[i].object.draw();

                                if(oAngle > 320 || oAngle < 40)
                                {
                                    toText = i.toString().upper();
                                    toFill = crystals[i].object.color;
                                }
                            }

                            if(keys[LEFT])
                            {
                                this.autoAngle -= 3;
                                this.rDir = 0;
                            }
                            else if(keys[RIGHT])
                            {
                                this.autoAngle += 3;
                                this.rDir = 0;
                            }else{
                                this.autoAngle += this.rDir;
                            }

                        popMatrix();

                        fill(red(toFill), green(toFill), blue(toFill), 120);
                        textSize(14);
                        textAlign(CENTER, TOP);
                        text(toText, 170, 200);
                        textAlign(LEFT, TOP);

                        scene.onHover = toText;
                        break;
                }

                if(this.scene === "items")
                {
                    noFill();
                    strokeWeight(0.5);
                    stroke(240, 240, 240, 170);

                    var imageFrame = {
                        xPos : (scene.width || this.scenes.width) - 75,
                        yPos : (scene.height || this.scenes.height) - 75,
                        width : 65,
                        height : 65,
                    };

                    rect(imageFrame.xPos, imageFrame.yPos, imageFrame.width, imageFrame.height);
                    noStroke();

                    var itemImg;

                    try{
                        itemImg = usableItems[player.inventory.items[scene.buttons["player_" + scene.highlightedButtonIndex].index].contains].image;
                    }
                    catch(e) { }

                    if(itemImg)
                    {
                        var wratio = imageFrame.width / imageFrame.height, ratio = itemImg.width / itemImg.height;
                         
                        if(wratio < ratio) 
                        {
                            image(itemImg, imageFrame.xPos, imageFrame.yPos, imageFrame.width, (imageFrame.width / ratio));
                        }else{
                            image(itemImg, imageFrame.xPos, imageFrame.yPos, (imageFrame.height * ratio), imageFrame.height);
                        }
                    }
                }

                (this.oFuncs.draw || function() {})(this.scenes[this.scene]);

                var drawnText = false;
                if(scene.buttons && !scene.noBar)
                {
                    fill(0, 0, 0, 100);
                    rect(78, -35, (scene.width || this.scenes.width) - 18, 30, 6);

                    textSize(10);
                    fill(240, 240, 240, 180);

                    for(var i in scene.buttons)
                    {
                        var btn = scene.buttons[i];
                        if(btn.clicked(mouseX, mouseY))
                        {
                            text((btn.type || "") +  " - " + (btn.hover || ""), 84, /*(scene.height || this.scenes.height) +*/ -31.5, (scene.width || this.scenes.width) - 5, 30);
                            drawnText = true;
                        }
                    }

                    if(!drawnText && scene.onHover)
                    {
                        text(scene.onHover, 84, -31.5, (scene.width || this.scenes.width) - 5, 30);
                    }
                }
            popMatrix();
        popMatrix();

        if(this.state === "opened")
        {
            var scene = this.scenes[this.scene];

            if(scene.buttons)
            {
                textSize(10);
                
                for(var i in scene.buttons)
                {
                    scene.buttons[i].draw();
                }
            }

            if(!this.scenes[this.scene].remoteMode)
            {
                for(var i in this.menuButtons)
                {
                    this.menuButtons[i].draw();
                }
            }
        }
    },
};

var _this = this;

var debugTool = {
    textBox : new TextBox(0, height - 20, width, 20, color(0, 0, 0, 170), color(56, 56, 56), color(255, 255, 255, 150)),
    apply : function()
    {
        this.textBox.selected = this.active;

        if(!this.active)
        {
            return;
        }

        this.update();
        this.draw();
    },
    activate : function(input)
    {
        try{
            var s = "gameObjects, game, keys, screenUtils, loader, inventoryMenu, debugTool, physics, observer, buttons, cam";
            var a = [window.processing, gameObjects, game, keys, screenUtils, loader, inventoryMenu, physics, observer, buttons, window.cam];
            var func = ("return function any(p," + s +")\n{\n" + input.toString() + "\n};");
            return new Function(func)().apply(_this, a);
        }
        catch(e)
        {
            console.log("Error: " + e);
        }
    },
    update : function()
    {
        if(ENTER_KEY)
        {
            this.activate(this.textBox.input.join(""));
            ENTER_KEY = false;
        }
    },
    draw : function()
    {
        this.textBox.draw();
    }, 
    keyPressed : function()
    {
        if(!this.active || ENTER_KEY)
        {
            return;
        }

        this.textBox.edit();
    },
    setup : function()
    {
        this.textBox.maxLength = Infinity;
    }
};

var screenUtils = {
    fade : new graphics.Fade(color(0, 0, 0)),
    load : function() {},
    shakeScreen : function(intensity, time)
    {
        if(screenUtils.shakeScreen.noShake === undefined)
        {
            screenUtils.shakeScreen.noShake = false;
        }

        if(this.timer === undefined)
        {
            this.timer = 0;
        }

        if(screenUtils.shakeScreen.noShake)
        {
            return;
        }

        this.timer++;

        if(this.timer >= time)
        {
            //Shake it all!
            translate(random(-intensity, intensity), random(-intensity, intensity));
            this.timer = 0;
        }
    },
    rumble : function()
    {
        if(!sounds.getSound("rumble.mp3").paused)
        {
            screenUtils.shakeScreen(5, 4);
        }
    },
    debugCameraGrid : {
        draw : function()
        {
            if(game.debugMode && mouseIsPressed && game.gameState === "play" && mouseButton === RIGHT)
            {
                cameraGrid.draw();
                cursor(CROSS);
                game.cursor = CROSS;
            }
        },
        update : function()
        {
            if(game.debugMode && mouseIsPressed && game.gameState === "play" && mouseButton === RIGHT)
            {
                try{
                    var place = cameraGrid.getPlace((cam.focusXPos - cam.halfWidth) + mouseX, (cam.focusYPos - cam.halfHeight) + mouseY);
                    var cell = cameraGrid[place.col][place.row];
                    
                    textAlign(NORMAL, NORMAL);
                    fill(0, 0, 0);
                    if(screenUtils.debugMenuWhite)
                    {
                        fill(255, 255, 255, 100);
                    }
                    text(place.col + ", " + place.row, 10, 85);

                    var txt = "";
                    for(var i in cell)
                    {
                        txt += i.toString() + "\n";
                    }

                    text(txt, 10, 96);
                }
                catch(e)
                {
                    console.warn(e);
                }
            }
        },
    },
    withCamera : function()
    {
        this.debugCameraGrid.draw();
        this.inverseCircle();
    },
    filterLevel : function(level)
    {
        var lvl = level;

        if(lvl !== levelInfo.theme && levelInfo.theme !== undefined)
        {
            lvl = lvl.replace(levelInfo.theme, "...");
        }

        return lvl;
    },
    infoBar : {
        keysYPos : 0,
        keysYVel : 0,
        keysMaxYVel : 5,
        showKeys : true,
        height : graphics.infoBarProps.height,
        healthMeter : new Bar(0, 0, 100, graphics.infoBarProps.height - 1, color(34, 190, 51, 80), 10),
        defenseMeter : new Bar(-2, height - 14, 100, graphics.infoBarProps.height - 1, color(0, 95, 150, 220), 10, undefined, color(250, 250, 250, 50)),
        pads : true,
        padY : 0,
        bossBar : new Bar(0, height - 6, width, 6, color(34, 151, 190, 200), 10),
        airMeter : new Bar(150, 80, 100, graphics.infoBarProps.height - 1, color(4, 84, 172, 200), 10),
        showBottomHud : true,
        draw : function(noLives)
        {
            fill(0, 0, 0, 80);
            noStroke();
            rect(0, 0, width, screenUtils.infoBar.height);
            screenUtils.infoBar.healthMeter.draw();
            
            var player = gameObjects.getObject("player").input(0);
            screenUtils.infoBar.healthMeter.set(player.hp, player.maxHp);
            screenUtils.infoBar.defenseMeter.set(player.defense, player.maxDefense);
            
            var airMeter = screenUtils.infoBar.airMeter;

            airMeter.using = (!player.breathing || player.air < player.maxAir);

            if(!airMeter.first)
            {
                airMeter.width = 0;
                airMeter.halfWidth = 0;
                airMeter.first = true;
            }

            if(airMeter.using)
            {
                if(airMeter.width < airMeter.defaultWidth)
                {
                    airMeter.width += 4;
                }
            }
            else if(airMeter.width > 0)
            {
                airMeter.width -= 4;
            }

            airMeter.width = constrain(airMeter.width, 0, airMeter.defaultWidth);
            airMeter.halfWidth = airMeter.width / 2;

            airMeter.xPos = HALF_WIDTH - airMeter.halfWidth;
            var between = airMeter.width > 0 && airMeter.width < airMeter.defaultWidth;

            if((between || airMeter.using) && !levelInfo.inWater)
            {
                if(player.air > 0 || millis() % 750 >= 375)
                {
                    if((millis() + 400) % 40 > 22 || between || !airMeter.msg)
                    {
                        airMeter.set(round(player.air), player.maxAir);
                        airMeter.msg = (!levelInfo.inWater) ? ("Oxygen " + round(player.air) + "/" + player.maxAir) : ("Oxygen " + round(player.air) + "/" + player.maxAir);
                    }

                    airMeter.draw();

                    var messageArray = airMeter.msg.split("");
                    var firstLength = messageArray.length;
                    messageArray.length = floor(airMeter.width * (firstLength + 1) / airMeter.defaultWidth);
                    var msg = messageArray.join("");

                    fill(250, 250, 250, airMeter.width * 100 / airMeter.defaultWidth);
                    textAlign(LEFT, CENTER);
                    textSize(10);
                    text(msg, airMeter.xPos + 3, airMeter.yPos + airMeter.halfHeight);
                }
            }

            textAlign(CENTER, CENTER);
            fill(0, 0, 0, 100);
            textFont(graphics.infoBarProps.font);
            textSize(11);
            
            fill(0, 12, 12, 50);
            rect(1, 0, 70, screenUtils.infoBar.height, 10);
            
            fill(230, 230, 230, 100);
            text("Hp " + (max((player.hp || 0), 0).toFixed(0)) + "/" + player.maxHp, 34, screenUtils.infoBar.height - 8);
            
            textAlign(NORMAL, CENTER);
            fill(0, 12, 12, 150);
            rect(125, 0, 140, screenUtils.infoBar.height, 10);
            fill(230, 230, 230, 100);

            var sp = "    ";

            if(player.coins)
            {
                if(player.coins > 999)
                {
                    sp = sp.slice(0, -1);
                }
                else if(player.coins > 9999)
                {
                    sp = sp.slice(0, -2);
                }
            }

            text("Coins " + (player.coins || 0) + sp + "Score " + (player.score || 0), 130, screenUtils.infoBar.height - 8);
            
            var lvl = screenUtils.filterLevel(levelInfo.level);

            fill(0, 12, 12, 150);
            rect(285, 0, max(/*85*/ 55, textWidth("Level " + (lvl || 0) + 10)), screenUtils.infoBar.height, 10);
            fill(230, 230, 230, 100);
            textAlign(LEFT, CENTER);
            text("Level " + (lvl || 0), 290, screenUtils.infoBar.height - 8);

            if(player.defense > 0)
            {
                pushMatrix();
                    translate(0, this.padY);
                    this.defenseMeter.draw();

                    fill(255, 255, 255, 105);
                    textAlign(LEFT, TOP);
                    text(player.defense + "/" + player.maxDefense + "% defense", 5, height - 12);
                popMatrix();

                if(this.padding)
                {
                    this.padY += ((this.pads) ? -3 : 3);
                }

                this.padY = constrain(this.padY, 0, 60);
            }

            if(typeof this.bossArrayName !== "undefined")
            {
                var boss = gameObjects.getObject(this.bossArrayName).input(0);
                if(!boss.fake)
                {
                    this.bossBar.set(boss.hp, boss.maxHp);
                    this.bossBar.color = (boss.hp <= 5) ? color(200, 25, 25, 190) : color(34, 151, 190, 200);
                    this.bossBar.draw();
                    this.bossBar.noStroke = true;
                }
            }
            else if(this.showBottomHud)
            {
                textSize(11);
                
                if(configs[levelInfo.theme] && configs[levelInfo.theme].name !== undefined)
                {
                    textAlign(LEFT, DOWN);
                    fill(0, 0, 0, 130);
                    rect(-6, height - 15, 25 + textWidth(configs[levelInfo.theme].name), 30, 5);
                    fill(240, 240, 240, 145);
                    text(configs[levelInfo.theme].name, 8, height - 3);
                }

                var powerKeys = [];
                var txt = "";
                for(var i in player.discoveredPowers)
                {
                    txt += "   ";

                    powerKeys.push(player.discoveredPowers[i].key);
                }
                powerKeys.reverse();

                fill(0, 0, 0, 130);
                rect(width + 5 - textWidth(txt + "   E") - 40, height - 15, 100, 30, 5);

                var powerString = player.discoveredPowersHandler.currentPower;

                var c = 0;

                var str = player.discoveredPowersHandler.currentPower;
                var isKey = false;
                for(var i = 0; i < powerKeys.length; i++)
                {
                    c++;
                    isKey = (powerKeys[i] === player.discoveredPowers[str].key);

                    fill(isKey ? color(240, 240, 240, 180) : color(240, 240, 240, 145));

                    textAlign(LEFT, DOWN);
                    text(powerKeys[i], width - 38 - c * textWidth(powerKeys[i] + "  "), height - 3);

                    if(isKey)
                    {
                        text("_", width - 38 - c * textWidth(powerKeys[i] + "  "), height - 2);
                    }
                }

                fill(240, 240, 240, 145);
                textAlign(RIGHT, DOWN);
                text(txt + "   E", width - 27, height - 3);

                var saved = false;
                var checkpoints = gameObjects.getObject("checkPoint");

                for(var i = 0; i < checkpoints.length; i++)
                {
                    if(checkpoints[i].checked)
                    {
                        saved = true;
                        break;
                    }
                }
            }
            
            textAlign(LEFT, CENTER);

            if(!game.hideKeys && player.goto !== undefined && player.goto.keysHolding !== undefined)
            {
                this.keysYPos += this.keysYVel;

                var j = 0;
                var xOff = 5;
                var yOff = 60 - (this.lastJ - 1) * 30 + this.keysYPos;

                for(var i in player.goto.keysHolding)
                {
                    if(player.goto.keysHolding[i] === undefined)
                    {
                        continue;
                    }

                    var x = j * 34;
                    var inputText = player.goto.keysHolding[i].level + ",\nDoor " + player.goto.keysHolding[i].symbol;
                    fill(0, 12, 12, 150);
                    var xOff2 = -(textWidth(inputText) - 35);
                    rect(330 + xOff + xOff2, 290 + yOff + x, textWidth(inputText) + 27, 31, 10);
                    shapes.key(336 + xOff + xOff2, 297 + yOff + x, 9, 18);
                    fill(230, 230, 230, 100);
                    text(inputText, 350 + xOff + xOff2, 305 + yOff + x);
                    j++;
                }
                this.lastJ = j;
                this.xOff = xOff;
                this.yOff = yOff;

                if(this.showKeys)
                {
                    this.keysYVel -= 0.3;
                    if(this.keysYVel < -this.keysMaxYVel)
                    {
                        this.keysYVel = -this.keysMaxYVel;
                    }
                }else{
                    this.keysYVel += 0.3;
                    if(this.keysYVel > this.keysMaxYVel)
                    {
                        this.keysYVel = this.keysMaxYVel;
                    }
                }

                if(this.keysYPos < 20)
                {
                    this.keysYPos = 20;
                }
                if(this.keysYPos > 40 + (this.lastJ - 1) * 30)
                {
                    this.keysYPos = 40 + (this.lastJ - 1) * 30;
                }
            }
        },
        mouseReleased : function()
        {
            if(mouseX > 330 + this.xOff && mouseX < 330 + this.xOff + 80 && mouseY > ((this.showKeys) ? 305 + this.yOff - 20 : 380))
            {
                this.showKeys = !this.showKeys;
                this.keysYVel = 0;
            }

            if(mouseX < Math.max(this.defenseMeter.halfWidth, this.defenseMeter.input) && mouseY > height - 18)
            {
                this.pads = !this.pads;
                this.padding = true;
            }
        },
    },
    needsScreenShot : false,
    takeScreenShot : function(w, h)
    {
        if(this.needsScreenShot)
        {
            this.screenShot = get(0, 0, w || width, h || height);
            this.needsScreenShot = false;
        }
    },
    //Use this after defining the draw method in a gameObject
    letImage : function(object, name, pro)
    {
        object.imageName = name;
        object.draw = (pro) ? function()
        {
            image(storedImages[this.imageName], this.xPos, this.yPos, this.width, this.height);
        } :
        function()
        {
            image(storedImages[this.imageName], this.xPos, this.yPos);
        };
    },
    loadImage : function(object, constImage, name, notRect, customBackColor, ref, tone, pro)
    {
        //Constant Image is for images that do not change, we store them
        if(constImage && storedImages[name || object.arrayName] !== undefined)
        {
            screenUtils.letImage(object, name || object.arrayName);
            return;
        }

        /*We cannot replace pixels in ka mode due to the 
        way the framework works differently*/
        if(notRect && MODE === "ka")
        {
            return;
        }

        /*It doesn't matter what the color is as long as we 
        don't use it in images we load*/
        var backColor = customBackColor || color(255, 255, 255);

        //Get image process
        noStroke();
        fill(backColor);
        rect(0, 0, object.width, object.height);
        var lastXPos = object.xPos;
        var lastYPos = object.yPos;
        object.xPos = 0;
        object.yPos = 0;
        if(object.setDraw !== undefined)
        {
            object.setDraw();
        }
        object[ref || "draw"]();
        var img = get(0, 0, object.width, object.height);
        object.xPos = lastXPos;
        object.yPos = lastYPos;

        if(tone !== undefined)
        {
            var _pixels = img.pixels.toArray();
            for(var i = 0; i < _pixels.length; i++)
            {
                img.pixels.setPixel(i, color(red(_pixels[i]), green(_pixels[i]), blue(_pixels[i]), tone));
            }
        }

        if(notRect)
        {
            //Only works for images without curves or angles, if you do have these use createGraphics instead
            pixelFuncs.replacePixels(img, backColor, color(255, 255, 255, 0));
        }

        //Store image
        if(constImage)
        {
            storedImages[name || object.arrayName] = img;
        }
        screenUtils.letImage(object, name || object.arrayName, pro);

        return storedImages[name || object.arrayName];
    },
    debugMode : function()
    {
        if(!game.debugMode)
        {
            return;
        }
        
        textSize(11);
        
        //Debug menu
        var player = gameObjects.getObject("player").input(0);
        fill(!lighting.working ? color(0, 0, 0, 200) : color(255, 255, 255, 100));
        if(screenUtils.debugMenuWhite)
        {
            fill(255, 255, 255, 100);
        }
        textAlign(NORMAL, NORMAL);
        text("xPos " + player.xPos.toFixed(2), 10, 30);
        text("yPos " + player.yPos.toFixed(2), 10, 44);
        if(game.showDebugPhysics)
        {
            text("xVel " + player.xVel.toFixed(2), 10, 58);
            text("yVel " + player.yVel.toFixed(2), 10, 72);
            text("inAir " + player.inAir, 10, 72 + 14);
            text("hp " + player.hp.toFixed(2), 10, 72 + 14 * 2);
            text("Friction " + player.friction.toFixed(2), 10, 72 + 14 * 3);
            text("xAcl " + player.xAcl.toFixed(2), 10, 72 + 14 * 4);
            text("maxXVel " + player.maxXVel.toFixed(2), 10, 72 + 14 * 5);
        }
        text(game.version, 330, 30);
        textAlign(CENTER, NORMAL);
        text("sfps " + game.fps + " fps " + fpsCatcher.actualFps + " s " +  second() + " " + game.fpsType.split("")[0], 200, 30);
    },
    loadingScreenBar : new Bar(0, height - 6, width, 6, color(34, 190, 51, 100), 10),
    noB : 0,
    loadingScreen : function()
    {
        if(game.gameState === "load")
        {
            keys[32] = false; // Stop from double spacing the story screen

            if(this.noB < 20)
            {
                this.loadingScreenBar.set(loader.loops, loader.estLoops);
                pushMatrix();
                    translate(this.noB * 20, this.noB / 3);
                    this.loadingScreenBar.draw();
                popMatrix();
                this.loadingScreenBar.noStroke = true;

                if(loader.loops >= loader.estLoops)
                {
                    this.noB++;
                }
            }

            if(screenUtils.fade.full() && game.debugMode)
            {  
                fill(250, 250, 250, 100);
                textSize(13);
                textAlign(NORMAL, CENTER);
                if(loader.point !== undefined)
                {
                    loader.point += 0.075;  
                    text(min(floor(loader.loops * 100 / loader.estLoops), 100) + "%" + 
                        ([".", "..", "...", ""][min(floor(loader.point), 3)]), 340, 370);  
                    if((loader.point) >= 4)
                    {
                        loader.point = 0;  
                    }
                }
            }
        }else{
            this.noB = 0;
        }
    },
    inverseCircle : function()
    {
        if(!this.useInverseCircle)
        {
            return;
        }

        var player = gameObjects.getObject("player")[0];
        noFill();
        stroke(0, 0, 0);
        strokeWeight(460);
        ellipse(physics.getMiddleXPos(player), physics.getMiddleYPos(player), 650, 650);
    },
    mouseReleased : function()
    {
        if(game.gameState === "play")
        { 
            if(messageHandler.active)
            {
                talkHandler.mouseReleased();
            }
            this.infoBar.mouseReleased();
        }
    },
    fixDisappearences : function()
    {
        if(firstGameState !== "start")
        {
            return;
        }

        if(!this.doStop && (game.gameState !== "start" || game.tempState === "start") && !this.fade.full())
        {
            game.start();
            if(game.gameState === "start")
            {
                this.doStop = true;
            }
        }
        else if(!this.doStop2 && (game.gameState === "load" || game.tempState === "menu") && 
        (!screenUtils.fade.fading || screenUtils.fade.timerVel < 0))
        {
            backgrounds.drawBackground(); //Make sure we're rendering the correct background
            game.menu();
            if(game.gameState === "menu")
            {
                this.doStop2 = true;
            }
        }
        if(!this.doStop3)
        {
            if(game.gameState === "selectSaveFile")
            {
                game.pegState = game.gameState;
            }
            if((game.gameState === "load" && game.pegState === "selectSaveFile") && screenUtils.fade.fading)
            {
                game.selectSaveFile();
                if(screenUtils.fade.timerVel < 0)
                {
                    this.doStop3 = true;
                }
            }
        }
    },  
    showErrors : function()
    {
        if(game.errorTripped || this.errorBlinkTime === undefined)
        {
            this.errorBlinkTime = performance.now();
        }

        var lastErrorTime = performance.now() - this.errorBlinkTime;

        if(game.errors > 0 && lastErrorTime >= 100 && lastErrorTime <= 3000)
        {
            fill(255, 25, 25, 125);
            textSize(14);
            text(game.errors + "!", 380, 360);
        }
    },
    messages : [],
    createMessage : function(message, xPos, yPos, width, height, config)
    {
        config = config || {};
        textSize(config.textSize);
        textFont(config.font || createFont("arial"));
        width = width || textWidth(message) * 1.25;

        this.messages.push({
            message : message,

            xPos : xPos - width / 2, 
            yPos : yPos - height / 2,

            width : width,
            height : height,

            halfWidth : width / 2,
            halfHeight : height / 2,

            leftXPos : xPos,
            defaultWidth : width,

            color : config.colorValue || color(0, 0, 0, 120),
            defaultColor : config.colorValue || color(0, 0, 0, 120),

            textColor : config.textColor || color(250, 250, 250, 200),
            defaultTextColor : config.textColor || color(250, 250, 250, 200),

            time : config.time || 1500,
            openCloseTime : 500,
            startTime : millis(),

            state : "opening",
            font : config.font || createFont("arial"),
            textSize : config.textSize || 14,
        });
    },
    updateMessages : function()
    {
        for(var i = 0; i < this.messages.length; i++)
        {
            var msg = this.messages[i];

            var textColor = msg.textColor;
            var rectColor = msg.color;

            switch(msg.state)
            {
                case "opening" : 
                    var diff = millis() - msg.startTime;

                    if(diff > msg.openCloseTime)
                    {
                        msg.startTime = millis();
                        msg.state = "waiting";
                    }else{
                        rectColor = color(red(rectColor), 
                                          blue(rectColor), 
                                          green(rectColor), 
                                          alpha(rectColor) * diff / msg.openCloseTime);

                        textColor = color(red(textColor), 
                                          blue(textColor), 
                                          green(textColor), 
                                          alpha(textColor) * diff / msg.openCloseTime);

                        msg.width = msg.defaultWidth * diff / msg.openCloseTime;
                        msg.halfWidth = msg.width / 2;
                        msg.xPos = msg.leftXPos - msg.halfWidth;
                    }
                    break;

                case "waiting" :
                    if(millis() - msg.startTime > msg.time)
                    {
                        msg.startTime = millis();
                        msg.state = "closing";
                    }
                    break;

                case "closing" :
                    var diff = millis() - msg.startTime;

                    if(diff > msg.openCloseTime)
                    {
                        this.messages.splice(i, 1);
                    }else{
                        var between = (msg.openCloseTime - diff);

                        rectColor = color(red(rectColor), 
                                          blue(rectColor), 
                                          green(rectColor), 
                                          alpha(rectColor) * between / msg.openCloseTime);

                        textColor = color(red(textColor), 
                                          blue(textColor), 
                                          green(textColor), 
                                          alpha(textColor) * between / msg.openCloseTime);

                        msg.width = msg.defaultWidth * between / msg.openCloseTime;
                        msg.halfWidth = msg.width / 2;
                        msg.xPos = msg.leftXPos - msg.halfWidth;
                    }
                    break;
            }

            if(millis() - msg.startTime < 50 && msg.state === "opening" || 
                millis() - msg.startTime > msg.openCloseTime - 50 && msg.state === "closing")
            {
                return;
            }

            if(typeof msg.message === "undefined")
            {
                return;
            }

            var messageArray = msg.message.split("");
            var firstLength = messageArray.length;
            messageArray.length = min(firstLength, floor(msg.width * (firstLength + 1) / msg.defaultWidth));
            var msgText = messageArray.join("");

            fill(rectColor);
            rect(msg.xPos, msg.yPos, msg.width, msg.height, 10);

            fill(red(textColor), green(textColor), blue(textColor), min(180, alpha(textColor)));
            textSize(msg.textSize);
            textAlign(CENTER, CENTER);
            text(msgText, msg.xPos + msg.halfWidth, msg.yPos + msg.halfHeight);
        }
    },
    update : function()
    {
        if(!processing.scaled)
        {
            this.takeScreenShot();
        }else{
            this.takeScreenShot(screen.width, screen.height);
        }
        this.fixDisappearences();

        if(game.gameState === "inventoryMenu" || game.gameState === "play" || game.gameState === "pauseMenu" || 
          ((game.tempState === "play" || game.tempState === "load") && game.gameState === "load" && !screenUtils.fade.full()))
        {
            messageHandler.draw();
            this.infoBar.draw();

            if(game.gameState !== "inventoryMenu")
            {
                this.debugMode();
            }
        }

        if(game.gameState === "inventoryMenu" || game.gameState === "play" || 
          (game.tempState === "play" && game.gameState === "load") || (screenUtils.fade.vel > 0 && screenUtils.fade.fading && !screenUtils.fade.full()))
        {
            noStroke();
            fill(levelInfo.levelShade);
            rect(0, 0, width, height);
        }

        this.showErrors();

        if(game.gameState === "play")
        {
            this.updateMessages();
        }

        this.fade.draw();

        if(game.fps === 30)
        {
            this.fade.draw();
        }

        if(game.switchedState && this.fade.full())
        {
            game.gameState = game.switchState; 
            game.switchedState = false;
        }

        this.debugCameraGrid.update();
        this.loadingScreen();
        fpsCatcher.update();

        if(game.noCursor)
        {
            noCursor();
            return;
        }

        if(game.cursor)
        {
            cursor(game.cursor);
        }else{
            cursor(ARROW);
        }
    },
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/************************************************************Physics-Engine****************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var physics = {
    formulas : {
        resolveAngle : function(a)
        {
            a = a % 360;
            if(a < 0)
            {
                a = 360 - abs(a);  
            }
            return a;
        },
        sign : function(n) 
        {
            if(n !== 0) 
            { 
                return (n > 0) ? 1 : -1;
            }
            return 0;
        },
        crossProduct : function(point1, point2, point3)
        {
            return (point1.xPos - point3.xPos) * (point2.yPos - point3.yPos) -
                   (point2.xPos - point3.xPos) * (point1.yPos - point3.yPos);
        },
        createBoundingBoxForLine : function(linePoint0, linePoint1)
        {
            return {
                xPos : (linePoint0.xPos < linePoint1.xPos) ? linePoint0.xPos : linePoint1.xPos,
                yPos : (linePoint0.yPos < linePoint1.yPos) ? linePoint0.yPos : linePoint1.yPos,
                width : Math.abs(linePoint0.xPos - linePoint1.xPos) || 1,
                height : Math.abs(linePoint0.yPos - linePoint1.yPos) || 1,
            };
        },
        closestPointOnLine : function(point1, linePoint0, linePoint1)
        { 
            var A1 = linePoint1.yPos - linePoint0.yPos;
            var B1 = linePoint0.xPos - linePoint1.xPos;
            
            var C1 =  A1 * linePoint0.xPos + B1 * linePoint0.yPos;
            var C2 = -B1 * point1.xPos + A1 * point1.yPos;
            
            var det = A1 * A1 + B1 * B1;
            
            var cx = 0;
            var cy = 0;
            
            if(det !== 0)
            { 
                cx = ((A1 * C1 - B1 * C2) / det);
                cy = ((A1 * C2 + B1 * C1) / det);
            }else{
                cx = point1.xPos;
                cy = point1.yPos;
            }
            
            return {
                xPos : constrain(cx, Math.min(linePoint0.xPos, linePoint1.xPos), Math.max(linePoint0.xPos, linePoint1.xPos)),
                yPos : constrain(cy, Math.min(linePoint0.yPos, linePoint1.yPos), Math.max(linePoint0.yPos, linePoint1.yPos)),
            }; 
        },
    },
    //Gives a place for grouped physics hueristic specific-like code
    getMiddleXPos : function(object)
    {
        object.middleXPos = (object.xPos + object.halfWidth);
        return object.middleXPos;
    },
    getMiddleYPos : function(object)
    {
        object.middleYPos = (object.yPos + object.halfHeight);
        return object.middleYPos;
    },
    teleport : function(object, xPos, yPos)
    {
        object.yVel = 0;
        object.xVel = 0;
        object.xPos = xPos;
        object.yPos = yPos;

        //Don't forget to update the boundingBox
        if(object.updateBoundingBox !== undefined)
        {
            object.updateBoundingBox();
        }

        //Also add the reference to the cell!
        cameraGrid.addReference(object);
    },
    push : {
        rectcircle : function(host, object)
        {
            if(host.yPos + host.height < object.yPos && object.inAir)
            {
                object.yPos = object.lastYPos;
            }
            if(abs(object.yVel) < abs(host.yVel))
            {
                if(host.xVel > 0)
                {
                    object.xVel += max(abs(host.xVel), 0.1) * 4 || 0;
                    object.rotateVel = 5;
                }
                else if(host.xVel < 0)
                {
                    object.xVel -= max(abs(host.xVel), 0.1) * 4 || 0;
                    object.rotateVel = -5;
                }
            }
        },
    },
    getSlopePoints : function(slope1)
    {
       var v1 = {
            xPos : 0,
            yPos : 0,
        };
        var v2 = {
            xPos : 0,
            yPos : 0,
        };
        var v3 = {
            xPos : 0,
            yPos : 0,
        };
    
        var slopeRight = slope1.xPos + slope1.width;
        var slopeBottom = slope1.yPos + slope1.height;
        switch(slope1.direction)
        {
            case "leftup" :
                v1.xPos = slope1.xPos;
                v1.yPos = slope1.yPos;
                v2.xPos = slope1.xPos - slope1.width;
                v2.yPos = slopeBottom;
                v3.xPos = slopeRight;
                v3.yPos = slopeBottom;
                break;
    
            case "rightup" :
                v1.xPos = slopeRight;
                v1.yPos = slope1.yPos;
                v2.xPos = slope1.xPos;
                v2.yPos = slopeBottom;
                v3.xPos = slopeRight + slope1.width;
                v3.yPos = slopeBottom;
                break;
    
            case "leftdown" :
                v1.xPos = slope1.xPos;
                v1.yPos = slope1.yPos;
                v2.xPos = slope1.xPos;
                v2.yPos = slopeBottom;
                v3.xPos = slopeRight;
                v3.yPos = slope1.yPos;
                break;
    
            case "rightdown" :
                v1.xPos = slope1.xPos;
                v1.yPos = slope1.yPos;
                v2.xPos = slopeRight;
                v2.yPos = slope1.yPos;
                v3.xPos = slopeRight;
                v3.yPos = slopeBottom;
                break;
        }
        
        //Return our points
        return [v1, v2, v3];
    },
};

//Observer (off limits)
var observer = {
    collisionTypes : {
        "blank" : {
            colliding : function() {},
            solveCollision : function() {},
        },
        "pointrect" : {
            colliding : function(point1, rect1, xDiv, yDiv)
            {
                return ((point1.xPos > rect1.xPos - (xDiv ? xDiv : 0) && 
                         point1.xPos < rect1.xPos + rect1.width + (xDiv ? xDiv : 0)) &&
                        (point1.yPos > rect1.yPos - (yDiv ? yDiv : 0) && 
                         point1.yPos < rect1.yPos + rect1.height + (yDiv ? yDiv : 0)));   
            },
            solveCollision : function() {},
        },
        "pointcircle" : {
            colliding : function(point1, circle1)
            {
               return (Math.pow(Math.abs(circle1.xPos - point1.xPos), 2) + Math.pow(Math.abs(circle1.yPos - point1.yPos), 2) < circle1.radius * circle1.radius);
            },
            solveCollision : function() {},
        },
        "pointpolygon" : {
            colliding : function(point1, polygon1)
            {
                // http ://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
                var inside = false;
                for(var i = 0, j = polygon1.points.length - 1; i < polygon1.points.length; j = i++)
                {
                    if((polygon1.points[i].yPos > point1.yPos) !== (polygon1.points[j].yPos > point1.yPos) &&
                        point1.xPos < (polygon1.points[j].xPos - polygon1.points[i].xPos) * (point1.yPos - polygon1.points[i].yPos) /
                       (polygon1.points[j].yPos - polygon1.points[i].yPos) + polygon1.points[i].xPos)
                    {
                        inside = !inside;
                    }
                }
                return inside;
            },
            solveCollision : function(point1, polygon1) {},
        },
        "pointslope" : {
            colliding : function(point1, slope1)
            {
                return observer.collisionTypes.pointpolygon.colliding(point1, {
                    points : physics.getSlopePoints(slope1)
                });
            },
            solveCollision : function() {},
        },
        "circleslope" : {
            colliding : function(circle1, slope1)
            {
                var colliding = false;
                var point = {
                    xPos : circle1.xPos,
                    yPos : circle1.yPos,
                };
                switch(slope1.direction)
                {  
                    case "leftup" :
                        var hyp = dist(slope1.xPos, slope1.yPos, slope1.xPos + slope1.width, slope1.yPos + slope1.height);
                        var angle = asin(slope1.width / hyp);
                        point.xPos -= cos(angle) * circle1.radius;
                        point.yPos += sin(angle) * circle1.radius + (circle1.gravity || 1);
                        break;
                        
                    case "rightup" :
                        var hyp = dist(slope1.xPos, slope1.yPos + slope1.height, slope1.xPos + slope1.width, slope1.yPos);
                        var angle = asin(slope1.width / hyp);
                        point.xPos += cos(angle) * circle1.radius;
                        point.yPos += sin(angle) * circle1.radius + (circle1.gravity || 1);
                        break;
                        
                    case "leftdown" :
                        var hyp = dist(slope1.xPos, slope1.yPos + slope1.height, slope1.xPos + slope1.width, slope1.yPos);
                        var angle = asin(slope1.width / hyp);
                        point.xPos -= cos(angle) * circle1.radius;
                        point.yPos -= sin(angle) * circle1.radius;
                        break;
                        
                    case "rightdown" :
                        var hyp = dist(slope1.xPos, slope1.yPos, slope1.xPos + slope1.width, slope1.yPos + slope1.height);
                        var angle = asin(slope1.width / hyp);
                        point.xPos += cos(angle) * circle1.radius;
                        point.yPos -= sin(angle) * circle1.radius;
                        break;
                }
                
                if(circle1.xPos <= slope1.xPos)
                {
                    point.xPos = slope1.xPos;
                }
                if(circle1.xPos >= slope1.xPos + slope1.width)
                {
                    point.xPos = slope1.xPos + slope1.width;
                }
                if(circle1.yPos <= slope1.yPos && (slope1.direction === "leftdown" || slope1.direction === "rightdown"))
                {
                    point.yPos = slope1.yPos;
                }
                if(circle1.yPos >= slope1.yPos + slope1.height &&  (slope1.direction === "leftup" || slope1.direction === "rightup"))
                {
                    point.yPos = slope1.yPos + slope1.height;
                }
                circle1.keptPoint = point;
                //Re-use anther colliding function
                colliding = observer.collisionTypes.rectslope.colliding({}, slope1, [point]);
                return colliding;
            },
            solveCollision : function(circle1, slope1)
            {
                var angle = atan2(slope1.height, slope1.width);
                if(circle1.keptPoint === undefined)
                {
                   return; 
                }
                
                switch(slope1.direction)
                {
                    case "leftup" :
                        var right = slope1.xPos + slope1.width;
                        var w1 = abs(right - circle1.keptPoint.xPos);
                        var h2 = sin(angle) * w1;
                        if(circle1.keptPoint.xPos < right)
                        {
                            circle1.inAir = false;
                            circle1.yVel = min(0, circle1.yVel);
                            circle1.xPos += (slope1.slip || 1);
                            circle1.xVel += (slope1.slip || 1);
                            circle1.yVel += (slope1.slip || 1);
                            circle1.yPos = (slope1.yPos + (slope1.height - h2)) - (circle1.radius - (circle1.gravity || 1));
                        }
                        break;
                        
                    case "rightup" :
                        var w1 = abs(circle1.keptPoint.xPos - slope1.xPos);
                        var h2 = sin(angle) * w1;
                        if(circle1.keptPoint.xPos > slope1.xPos)
                        {
                            circle1.inAir = false;
                            circle1.yVel = min(0, circle1.yVel);
                            circle1.xPos -= (slope1.slip || 1);
                            circle1.xVel -= (slope1.slip || 1);
                            circle1.yVel += (slope1.slip || 1);
                            circle1.yPos = (slope1.yPos + (slope1.height - h2)) - (circle1.radius - (circle1.gravity || 1));
                        }
                        break;
                        
                    case "leftdown" :
                        var right = slope1.xPos + slope1.width;
                        var w1 = abs(right - circle1.keptPoint.xPos);
                        var h2 = sin(angle) * w1;
                        if(circle1.keptPoint.xPos < right)
                        {
                            circle1.yVel = max(0, circle1.yVel);
                            circle1.xPos += (slope1.slip || 1);
                            circle1.yPos = slope1.yPos + h2 + circle1.radius;
                        }
                        break;
                        
                    case "rightdown" :
                        var w1 = abs(circle1.keptPoint.xPos - slope1.xPos);
                        var h2 = sin(angle) * w1;
                        if(circle1.keptPoint.xPos > slope1.xPos)
                        {
                            circle1.yVel = max(0, circle1.yVel);
                            circle1.xPos -= (slope1.slip || 1);
                            circle1.yPos = slope1.yPos + h2 + circle1.radius;
                        }
                        break;
                }  
            },
        },
        "rectslope" : {
            colliding : function(rect1, slope1, customRectPoints)
            {
                var rect1Points = customRectPoints || [{
                    xPos : rect1.xPos,
                    yPos : rect1.yPos
                }, {
                    xPos : rect1.xPos + rect1.width,
                    yPos : rect1.yPos
                }, {
                    xPos : rect1.xPos,
                    yPos : rect1.yPos + rect1.height,
                }, {
                    xPos : rect1.xPos + rect1.width,
                    yPos : rect1.yPos + rect1.height,
                }];
                var points = physics.getSlopePoints(slope1);
                
                for(var i = 0; i < rect1Points.length; i++)
                {
                    if(observer.collisionTypes.pointpolygon.colliding(rect1Points[i], {
                            points : points
                        }))
                    {
                        return true;
                    }
                }
                if(rect1Points.length > 1)
                {
                    for(var i = 0; i < points.length; i++)
                    {
                        if(observer.collisionTypes.pointpolygon.colliding(points[i], {
                                points : rect1Points
                            }))
                        {
                            return true;
                        }
                    }
                }  
            },
            solveCollision : function(rect1, slope1)
            {
                rect1.lastSlopeCollider = slope1;
                var slopeRight = slope1.xPos + slope1.width;

                switch(slope1.direction)
                {
                    case "leftup" :
                        /*Collide Bottom*/
                        var slopeBottom = slope1.yPos + slope1.height;

                        if(rect1.yPos - rect1.yVel >= slopeBottom && !slope1.fromSpike)
                        {
                            rect1.yPos = slopeBottom;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            break;
                        }
                        
                        /*Collide diagonal*/
                        if(rect1.xPos - 2 <= slope1.xPos && !slope1.fromSpike)
                        {
                            rect1.yPos = slope1.yPos - rect1.height;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                        }
                        else if(rect1.xPos <= slopeRight)
                        {
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            var angle = atan2(slope1.height, slope1.width);
                            var w1 = abs(rect1.xPos + 4 - slope1.xPos);
                            var h2 = sin(angle) * w1;
                            if(!slope1.fromSpike)
                            {
                                rect1.yPos = (slope1.yPos + h2) - rect1.height;
                            }else{
                                rect1.yVel = -3;
                                rect1.yPos -= 3;
                            }

                            if(slope1.slippy)
                            {
                                if(rect1.xVel >= -0.1)
                                {
                                    rect1.yVel += 0.75;
                                    rect1.xVel += 0.2;
                                    rect1.xVel *= 1.1;
                                }
                            }
                        }
                        break;

                    case "rightup" :
                       /* if(rect1.yPos < slope1.yPos + slope1.height && 
                            rect1.yPos + rect1.height + 10 > slope1.yPos + slope1.height && 
                            rect1.xPos < slope1.xPos + rect1.xVel)
                        if(observer.collisionTypes.pointrect.colliding({
                            xPos : slope1.xPos,
                            yPos : slope1.yPos + slope1.height,
                        }, rect1))
                        {
                            console.log(true);
                            rect1.xPos = slope1.xPos - rect1.width;
                            break;
                        }*/


                        /*Collide Bottom*/
                        var slopeBottom = slope1.yPos + slope1.height;

                        if(rect1.yPos - rect1.yVel >= slopeBottom && !slope1.fromSpike)
                        {
                            rect1.yPos = slopeBottom;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            break;
                        }

                        /*Collide diagonal*/
                        var rect1PointXPos = rect1.xPos + rect1.width;

                        if(rect1PointXPos + 2 >= slopeRight && !slope1.fromSpike)
                        {
                            rect1.yPos = slope1.yPos - rect1.height;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                        }
                        else if(rect1PointXPos >= slope1.xPos)
                        {
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            var angle = atan2(slope1.height, slope1.width);
                            var w1 = abs(slope1.xPos - rect1.xPos + rect1.width + 4);
                            var h2 = sin(angle) * w1;
                            if(!slope1.fromSpike)
                            {
                                rect1.yPos = (slope1.yPos + h2) - rect1.height;
                            }else{
                                rect1.yVel = -3;
                                rect1.yPos -= 3;
                            }

                            if(slope1.slippy)
                            {
                                if(rect1.xVel <= 0.1)
                                {
                                    rect1.yVel += 0.75;
                                    rect1.xVel -= 0.2;
                                    rect1.xVel *= 1.1;
                                }
                            }
                        }
                        break;

                    case "leftdown" :
                        if(slope1.fromSpike)
                        {
                            break;
                        }

                        /*Collide Top*/
                        if(rect1.yPos + rect1.height <= slope1.yPos + rect1.yVel)
                        {
                            rect1.yPos = slope1.yPos - rect1.height;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            break;
                        }

                        /*Collide diagonal*/
                        if(rect1.xPos <= slopeRight)
                        {
                            rect1.inAir = true;
                            rect1.yVel = max(rect1.yVel, 0);
                            var angle = atan2(slope1.height, slope1.width);
                            var w1 = abs(slopeRight - rect1.xPos);
                            var h2 = sin(angle) * w1;
                            rect1.yPos = (slope1.yPos + h2);
                        }
                        break;

                    case "rightdown" :
                        if(slope1.fromSpike)
                        {
                            break;
                        }

                        /*Collide Top*/
                        if(rect1.yPos + rect1.height <= slope1.yPos + rect1.yVel)
                        {
                            rect1.yPos = slope1.yPos - rect1.height;
                            rect1.yVel = 0;
                            rect1.inAir = false;
                            break;
                        }

                        /*Collide diagonal*/
                        var rect1PointXPos = rect1.xPos + rect1.width;

                        if(rect1PointXPos >= slope1.xPos)
                        {
                            rect1.inAir = true;
                            rect1.yVel = max(rect1.yVel, 0);
                            var angle = atan2(slope1.height, slope1.width);
                            var w1 = abs(slope1.xPos - rect1PointXPos);
                            var h2 = sin(angle) * w1;
                            rect1.yPos = (slope1.yPos + h2);
                        }
                        break;
                }
                rect1.lastSlopeCollider = slope1;
            }
        },
        "circlecircle" : {
            colliding : function(circle1, circle2)
            {
                circle1.measuredDist = dist(circle1.xPos, circle1.yPos, circle2.xPos, circle2.yPos);
                return(circle1.measuredDist <= circle1.radius + circle2.radius);
            },
            solveCollision : function(circle1, circle2)
            {
                var angle = atan2(circle1.yPos - circle2.yPos, circle1.xPos - circle2.xPos) + (circle1.winding || 0);
                var input = circle1.radius + circle2.radius - circle1.measuredDist;
                circle1.xPos += input * cos(angle);
                circle1.yPos += input * sin(angle);
                circle1.inAir = (circle1.yPos - circle1.radius > circle2.yPos);
                circle1.touchedCircle = true;
                circle2.touchedCircle = true;
            },
        },
        "rectcircle" : {
            colliding : function(rect1, circle1)
            {
                var point1 = {};
                rect1.middleXPos = rect1.xPos + rect1.halfWidth;
                rect1.middleYPos = rect1.yPos + rect1.halfHeight;
                rect1.halfLineThrough = dist(rect1.xPos, rect1.yPos, rect1.xPos + rect1.width, rect1.yPos + rect1.height) / 2;

                //Step 1  : Get the closest point on the circle on the rectangle to the circle
                var angle = atan2(circle1.yPos - rect1.middleYPos, circle1.xPos - rect1.middleXPos);
                point1.xPos = rect1.middleXPos + (rect1.halfLineThrough * cos(angle));
                point1.yPos = rect1.middleYPos + (rect1.halfLineThrough * sin(angle));

                //Step 2  : Constrain the point into the rectangle
                point1.xPos = constrain(point1.xPos, rect1.xPos, rect1.xPos + rect1.width);
                point1.yPos = constrain(point1.yPos, rect1.yPos, rect1.yPos + rect1.height);

                //Step 3  : check if the point is colliding with the circle
                circle1.pointDist = dist(circle1.xPos, circle1.yPos, point1.xPos, point1.yPos);
                circle1.inputAngle = circle1.inputAngle;                
                return(circle1.pointDist <= circle1.radius);
            },
            solveCollision : function(rect1, circle1)
            {
                var angle = atan2(rect1.middleYPos - circle1.yPos, rect1.middleXPos - circle1.xPos);
                var input = (circle1.radius - circle1.pointDist);
                var inputX = input * cos(angle);
                var inputY = input * sin(angle);
                if(rect1.physics.movement === "dynamic")
                {
                    rect1.xPos += inputX;
                    rect1.yPos += inputY;
                    rect1.inAir = (rect1.yPos + rect1.height >= circle1.yPos);
                    if(circle1.physics.movement === "dynamic" && circle1.yVel === rect1.yVel && !rect1.touchedRect)
                    {
                        circle1.yVel = max(circle1.yVel, 3);
                    }
                    if(rect1.touchedRect)
                    {
                        if(inputX > 0)
                        {
                            rect1.xVel = max(0, rect1.xVel);
                        }
                        else if(inputX < 0)
                        {
                            rect1.xVel = min(0, rect1.xVel);
                        }
                        //Reboot the collision
                        if(rect1.lastRectCollider !== undefined)
                        {
                            if(observer.collisionTypes.rectrect.colliding(rect1, rect1.lastRectCollider))
                            {
                                observer.collisionTypes.rectrect.solveCollision(rect1, rect1.lastRectCollider);
                            }
                        }
                        rect1.collidedWithCircle = false;
                        rect1.touchedRect = false;
                    }
                    
                    //Reboot the collision with the slopes
                    if(rect1.lastSlopeCollider !== undefined)
                    {
                        if(observer.collisionTypes.rectrect.colliding(rect1, rect1.lastSlopeCollider))
                        {
                            observer.collisionTypes.rectrect.solveCollision(rect1, rect1.lastSlopeCollider);
                        }
                    }
                    if(!rect1.inAir)
                    {
                        rect1.yVel = min(rect1.yVel, rect1.maxYVel * (circle1.friction || 0.25));
                    }
                }
                if(circle1.physics.movement === "dynamic")
                {
                    if(rect1.arrayName !== "oneWay")
                    {
                        circle1.xPos -= inputX;
                        circle1.yPos -= inputY;
                        circle1.inAir = (inputY < 0);
                    } else {
                        if(inputX < 0 && rect1.physics.sides.right)
                        {
                            circle1.xPos -= inputX;
                        }
                        else if(inputX > 0 && rect1.physics.sides.left)
                        {
                            circle1.xPos -= inputX;
                        }
                        if(inputY < 0 && rect1.physics.sides.down)
                        {
                            circle1.yPos -= inputY;
                        }
                        else if(inputY > 0 && rect1.physics.sides.up)
                        {
                            circle1.yPos -= inputY;
                        }
                    }
                    if(circle1.touchedCircle)
                    {
                        if((inputX < 0 && circle1.xVel > 0) ||
                            (inputX > 0 && circle1.xVel < 0))
                        {
                            circle1.xVel = 0;
                        }
                        if((inputY < 0 && circle1.yVel > 0) ||
                            (inputY > 0 && circle1.yVel < 0))
                        {
                            circle1.yVel = 0;
                        }
                    }
                    circle1.touchedCircle = false;
                    if((circle1.xPos > rect1.xPos && circle1.xPos < rect1.xPos + rect1.width))
                    {
                        circle1.inAir = (circle1.yPos > rect1.yPos);
                        if(circle1.yPos - circle1.radius >= rect1.yPos + rect1.height)
                        {
                            circle1.yVel = max(circle1.yVel, 0);
                            circle1.inAir = true;
                        }
                        if(!circle1.inAir)
                        {
                            circle1.yVel = 0;
                        }
                    }
                }
            },
        },
        "rectrect" : {
            colliding : function(rect1, rect2)
            {
                return ((rect1.xPos + rect1.width > rect2.xPos &&
                         rect1.xPos < rect2.xPos + rect2.width) &&
                       (rect1.yPos + rect1.height > rect2.yPos &&
                         rect1.yPos < rect2.yPos + rect2.height));
            },
            getSide : function(rect1, rect2)
            {
                /*
                    @dx: Difference xPos or the difference between both centers 
                         of rectangles in X-axis.
                         
                    @dy: Difference yPos or the difference between both centers 
                         of rectangles in Y-axis.
                */
                var dx = ((rect1.xPos + rect1.halfWidth) - (rect2.xPos + rect2.halfWidth)),
                    dy = ((rect1.yPos + rect1.halfHeight) - (rect2.yPos + rect2.halfHeight));
                
                //Important for normalizing differences between our values (vx, vy)
                var hWidths = (rect1.halfWidth + rect2.halfWidth),
                    hHeights = (rect1.halfHeight + rect2.halfHeight);

                var sx = 1, sy = 1;

                //Based on the last decided side ignore x or y.
                if(rect1._side === "up" || rect1._side === "down" || rect1._side === "")
                {
                    sx = 0;
                }
                else if(rect1._side === "left" || rect1._side === "right")
                {
                    sy = 0;
                }

                var ox = hWidths  - Math.abs(dx - (rect1.xVel + (rect2.xVel || 0)) * sx),
                    oy = hHeights - Math.abs(dy - (rect1.yVel + (rect2.yVel || 0)) * sy);

                if(ox < oy)
                {
                    if(dx < 0)
                    {
                        return "left";
                    }else{
                        return "right";
                    }
                }else{
                    if(dy < 0)
                    {
                        return "up";  
                    }else{
                        return "down";  
                    }
                }
            },
            applySide : function(side, rect1, rect2, noZero)
            {
                switch(side)
                {
                    case "left" :
                        rect1.xVel = (!noZero) ? 0 : rect1.xVel;
                        rect1.xPos = rect2.xPos - rect1.width;
                        break;
                    
                    case "right" :
                        rect1.xVel = (!noZero) ? 0 : rect1.xVel;
                        rect1.xPos = rect2.xPos + rect2.width;
                        break;
                             
                    case "up" :
                        rect1.inAir = false;
                        rect1.yVel = (!noZero) ? 0 : min(0, rect1.yVel);
                        rect1.yPos = rect2.yPos - rect1.height;                        
                        break;
                    
                    case "down" :
                        rect1.inAir = true;
                        rect1.yVel = (!noZero || rect1.yVel < -rect1.upForce) ? 0 : rect1.yVel;
                        rect1.yPos = rect2.yPos + rect2.height;

                        //Enable the double lifting of crates
                        if(noZero && rect2.upForce && rect1.yVel <= 0)
                        {
                            rect2.yVel = min(rect2.yVel, -rect2.upForce); 
                        }
                        break;
                }
            },
            getSideOneWay : function(side, rect1, oneWay) //For oneways
            {
                switch(side)
                {
                    case "left" :
                        if(oneWay.physics.sides.left && rect1.xVel > 0 && 
                        rect1.xPos + rect1.width <= oneWay.xPos + abs(rect1.xVel) + rect1.maxXVel)
                        {
                            return "left";    
                        }
                        break;
                    
                    case "right" :
                        if(oneWay.physics.sides.right && rect1.xVel < 0 && 
                        rect1.xPos + abs(rect1.xVel) + rect1.maxXVel >= oneWay.xPos + oneWay.width)
                        {
                            return "right";    
                        }
                        break;
                        
                    case "up" :
                        if(oneWay.physics.sides.up && rect1.yVel > 0 && 
                        rect1.yPos + rect1.height <= oneWay.yPos + abs(rect1.yVel) + rect1.maxYVel)
                        {
                            return "up"; 
                        }
                        break;
                        
                    case "down" :
                        if(oneWay.physics.sides.down && rect1.yVel < 0 && 
                        rect1.yPos + abs(rect1.yVel) + rect1.maxYVel >= oneWay.yPos + oneWay.height)
                        {
                            return "down";    
                        }
                        break;
                }
                return "";
            },
            applyVelSide : function(side, rect1, rect2) //For crates
            {
                switch(side)
                {
                    case "left" :
                        if(rect1.xVel > 0)
                        {
                            rect2.xVel += rect1.xForce || rect1.xAcl * (rect1.mass || 1);  
                        }
                        return true;
                    
                    case "right" :
                        if(rect1.xVel < 0) 
                        {
                            rect2.xVel -= rect1.xForce || rect1.xAcl * (rect1.mass || 1);  
                        }
                        return true;
                        
                    case "up" :
                        if(rect1.yVel > 0 && rect2.yVel < 0)
                        {
                            rect2.yVel += (rect1.yForce || (rect1.yAcl || 2) * (rect1.mass || 1));
                        }
                        return true;
                        
                    case "down" :
                        if(rect1.yVel < 0)
                        {
                            rect2.yVel -= rect1.yForce || (rect1.yAcl || 2) * (rect1.mass || 1); 
                        }
                        return true;
                }
                return false;
            },
            solveCollision : function(rect1, rect2, extra)
            {
                var side = this.getSide(rect1, rect2);

                if(rect2.physics.sides !== undefined)
                {
                    side = this.getSideOneWay(side, rect1, rect2);
                }

                //Record the last decided side
                rect1._side = side;

                var noZero;
                if(rect2.physics.movement === "dynamic")
                {
                    noZero = this.applyVelSide(side, rect1, rect2);
                }

                this.applySide(side, rect1, rect2, noZero);

                rect1.lastRectCollider = rect2;

                return {
                    side : side,
                };
            },
        },
    },
    access : function(object1, object2, access)
    {
        var info = observer.getType(
            object1.physics.shape,
            object2.physics.shape,
            observer.collisionTypes
        );
        var colliding = false;

        if(!info.flipped)
        {
            colliding = observer.collisionTypes[info.type][access](object1, object2);
        }else{
            colliding = observer.collisionTypes[info.type][access](object2, object1);
        }
        return colliding;
    },
    colliding : function(object1, object2)
    {
        return this.access(object1, object2, "colliding");
    },
    solveCollision : function(object1, object2)
    {
        return this.access(object1, object2, "solveCollision");
    },
    boundingBoxesColliding : function(box1, box2)
    {
        return ((box1.xPos + box1.width > box2.xPos &&
                 box1.xPos < box2.xPos + box2.width) &&
               (box1.yPos + box1.height > box2.yPos &&
                 box1.yPos < box2.yPos + box2.height));
    },
    fastBoundingBoxesColliding : function(box1, box2) /*Will be used in the future!*/
    {
        return (box1.minX < box2.maxX && box1.maxX > box2.minX && 
                box1.minY < box2.maxY && box1.maxY > box2.minY);
    },
    getType : function(name1, name2, delegate)
    {
        var typeToReturn = "blank";
        var flipped = false;
        var type = name1 + name2;
        if(delegate[type] !== undefined)
        {
            typeToReturn = type;
        }else{
            //Flip shapes
            flipped = true;
            type = name2 + name1;
            if(delegate[type])
            {
                typeToReturn = type;
            }
        }
        return {
            type : typeToReturn,
            flipped : flipped,
        };
    },
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*************************************************************World-Helpers****************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var Camera = function(xPos, yPos, width, height)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;

    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.focusXPos = this.halfWidth;
    this.focusYPos = this.halfHeight;

    this.upperLeft = {
        col : 0,
        row : 0,
    };
    this.lowerRight = {
        col : 0,
        row : 0,
    };

    this.speed = 0.125;

    this.getObject = function()
    {
        return this;
    };

    this.boundingBox = {};
    this.updateBoundingBox = function()
    {
        this.boundingBox = {
            xPos : this.focusXPos - this.halfWidth,
            yPos : this.focusYPos - this.halfHeight,
            width : this.focusXPos + this.halfWidth,
            height : this.focusYPos + this.halfHeight
        };
    };

    this.updateBoundingBox();

    this.attach = function(func, directAttach, time, endFunc)
    {
        if(this.getObject === func)
        {
            return;
        }

        this.lastGetObject = this.getObject;
        this.getObject = func;
        var object = func();
        if(directAttach)
        {
            this.focusXPos = object.boundingBox.xPos + (object.boundingBox.width / 2);
            this.focusYPos = object.boundingBox.yPos + (object.boundingBox.height / 2);
        }
        this.getObject.attachTime = millis();
        this.getObject.time = time;
        this.getObject.endFunc = endFunc;
    };

    this.scale = 0.3;
    this.maxScale = 0.26;
    this.scaleVel = 0.03;

    this.scaleZoom = function()
    {
        if(this.scale > 0)
        {
            translate(-width * this.scale / 2, -height * this.scale / 2);
            scale(1 + this.scale, 1 + this.scale);
        }
    };

    this.view = function(object)
    {
        if(this.getObject.time !== undefined && 
        millis() - this.getObject.attachTime > this.getObject.time)
        {
            (this.getObject.endFunc || function() {})();
            this.getObject = this.lastGetObject || this.getObject;
        }

        if(object === undefined)
        {
            object = this.getObject();

            if(!object)
            {
                (this.getObject.endFunc || function() {})();
                this.getObject = this.lastGetObject || this.getObject;
                object = this.getObject();
            }
        }

        if(this.scale <= 0 || this.scale >= this.maxScale)
        {
            if(object.controls && object.controls.zoom)
            {
                if(object.controls.zoom())
                {
                    this.scaleVel = -abs(this.scaleVel);
                }else{
                    this.scaleVel = abs(this.scaleVel);
                }
            }
        }

        this.scale += this.scaleVel;
        this.scale = constrain(this.scale, 0, this.maxScale);

        this.scaleZoom();

        this.cScale = (1 - this.scale * 0.75);

        //Get the camera position
        var xPos = object.boundingBox.xPos + (object.boundingBox.width / 2);
        var yPos = object.boundingBox.yPos + (object.boundingBox.height / 2);

        this.angle = atan2(yPos - this.focusYPos, xPos - this.focusXPos);
        this.distance = dist(this.focusXPos, this.focusYPos, xPos, yPos) * this.speed;

        this.focusXPos += this.distance * cos(this.angle);
        this.focusYPos += this.distance * sin(this.angle);

        //Keep it in the grid
        this.focusXPos = constrain(this.focusXPos, levelInfo.xPos + this.halfWidth * this.cScale, 
                                    levelInfo.xPos + levelInfo.width - this.halfWidth * this.cScale);
        this.focusYPos = constrain(this.focusYPos, levelInfo.yPos + this.halfHeight * this.cScale, 
                                    levelInfo.yPos + levelInfo.height - this.halfHeight * this.cScale);

        //Get the corners position on the grid
        this.upperLeft = cameraGrid.getPlace(this.focusXPos + EPSILON - this.halfWidth, this.focusYPos + EPSILON - this.halfHeight);
        this.lowerRight = cameraGrid.getPlace(this.focusXPos + this.halfWidth - EPSILON, this.focusYPos + this.halfHeight - EPSILON);

        translate(this.xPos, this.yPos);
        if(levelInfo.width >= this.width)
        {
            translate(this.halfWidth - this.focusXPos, 0);
        }else{
            translate(-levelInfo.xPos, 0);
        }
        if(levelInfo.height >= this.height)
        {
            translate(0, this.halfHeight - this.focusYPos);
        }else{
            translate(0, -levelInfo.yPos);
        }

        this.updateBoundingBox();
    };

    this.untranslate = function()
    {
        translate(-this.xPos, -this.yPos);
    };

    this.draw = function()
    {
        fill(0, 0, 0, 50);
        rect(cameraGrid.xPos + this.upperLeft.col * cameraGrid.cellWidth, 
            cameraGrid.yPos + this.upperLeft.row * cameraGrid.cellHeight, 
            ((this.lowerRight.col + 1) - this.upperLeft.col) * cameraGrid.cellWidth,
            ((this.lowerRight.row + 1) - this.upperLeft.row) * cameraGrid.cellHeight);
    };

    this.drawOutline = function()
    {
        noFill();
        stroke(0, 0, 0);
        rect(this.xPos, this.yPos, this.width, this.height);
    };
};
var cam = new Camera(0, 0, width, height); //Use this as the default
window.cam = cam;

/*Production createArray*/
var createArray = function(object, inArray)
{
    var array = inArray || [];
    array.references = {};
    array.add = function()
    {
        if(object.apply !== undefined)
        {
            //Instatiate
            var oNew = Object.create(object.prototype);
            object.apply(oNew, Array.prototype.slice.call(arguments));
            this.push(oNew);
        }else{
            array.push(Array.prototype.slice.call(arguments)[0]);
        }
        
        //Set props
        var lastIndex = array.length - 1;
        array[lastIndex].arrayName = array.name;
        array[lastIndex].name = array.tempArg || array.name;
        array[lastIndex].index = lastIndex;
        array[lastIndex].firstIndex = lastIndex;

        return array[lastIndex];
    };
    //Add an object with a name addObject(name, arg1, arg2...)
    array.addObject = function(name) 
    {
        if(this.references[name] === undefined)
        {
            this.references[name] = this.length;
        }else{
            println("Warning: You cannot have multiple objects \n" + 
                    "with the same name \'" + name + "\', Object removed.");
            //Exit the function immediately.
            return;
        }
        
        var args = Array.prototype.slice.call(arguments);
        this.tempArg = args[0];
        args.shift();
        this.add.apply(null, args);
    };
    array.getObject = function(name)
    {
        if(this[this.references[name]] !== undefined)
        {
            return this[this.references[name]];
        }else{
            println("Error referencing object '" + name + "'"); 
            delete this.references[name];
            return {
                fake : true,
            };
        }
    };
    array.removeObject = function(name)
    {
        if(this.references[name] !== undefined)
        {
            this.splice(this.references[name], 1);
            delete this.references[name];
        }
    };
    //Want to reference your array as if when it was first created?
    //Call this while iterating if you're constantly moving objects around
    array.applyObject = function(i)
    {
        if(this[i] === undefined)
        {
            return;
        }

        if(this[i].delete)
        {
            this.splice(i, 1);
            return;
        }
        
        if(this[i].hideDelete && !this[i].fake)
        {
            //Dummy object
            this[i] = {
                xPos : 0,
                yPos : 0,
                boundingBox : {
                    off : true,
                },
                physics : {},
                draw : function() {},
                update : function() {},

                fake : true,
            };
            return;
        }

        if(!this[i].fake)
        {
            this[i].index = i;
            this[i].arrayName = this.name || this[i].arrayName;
        }
    };
    array.clear = function()
    {
        this.length = 0;
        this.references = {};
    };
    array.input = function(index) //Use this for safe references
    {
        return this[index] || {
            fake : true
        };
    };
    array.last = array.getLast = function()
    {
        return this.input(this.length - 1);
    };
    array.draw = function()
    {
        for(var i = 0; i < this.length; i++)
        {
            this[i].draw();
        }
    };
    array.update = function(applyObject)
    {
        for(var i = 0; i < this.length; i++)
        {
            this[i].update();
            
            if(applyObject)
            {
                this.applyObject(i);   
            }
        }
    };
    return array;
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*************************************************************Engine-Core******************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var cameraGrid = [];
cameraGrid.setup = function(xPos, yPos, cols, rows, cellWidth, cellHeight)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.halfCellWidth = this.cellWidth / 2;
    this.halfCellHeight = this.cellHeight / 2;

    this.create(cols, rows);
};
cameraGrid.create = function(cols, rows)
{
    this.length = 0;
    for(var col = 0; col < cols; col++)
    {
        this.push([]);
        for(var row = 0; row < rows; row++)
        {
            this[col].push({});
        }
    }
    this.cols = cols;
    this.rows = rows;

    this._length = this.length - 1;
    this[0]._length = this[0].length - 1;
};
cameraGrid.reset = function()
{
    this.create(this.rows, this.cols);
};
cameraGrid.getPlace = function(xPos, yPos)
{
    return {
        col : constrain(round(((xPos - this.xPos) - this.halfCellWidth) / this.cellWidth), 0, this._length),
        row : constrain(round(((yPos - this.yPos) - this.halfCellHeight) / this.cellHeight), 0, this[0]._length),
    };
};
cameraGrid.addReference = function(object)
{
    var toSet = {
        arrayName : object.arrayName,
        index : object.firstIndex
    };

    if(!object.boundingBox.off)
    {
        var upperLeft = this.getPlace(object.boundingBox.xPos, object.boundingBox.yPos);
        var lowerRight = this.getPlace(object.boundingBox.xPos + object.boundingBox.width, object.boundingBox.yPos + object.boundingBox.height);
        for(var col = upperLeft.col; col <= lowerRight.col; col++)
        {
            for(var row = upperLeft.row; row <= lowerRight.row; row++)
            {
                this[col][row][object.arrayName + object.index] = toSet;
            }
        }

        object._places = {
            upperLeft : upperLeft,
            lowerRight : lowerRight,
        };
    }else{
        var place = this.getPlace(object.xPos, object.yPos);
        this[place.col][place.row][object.arrayName + object.index] = toSet;
        object.place = place;

        object._places = {
            upperLeft : place,
            lowerRight : place,
        };
    }
};
cameraGrid.removeReference = function(object)
{
    var upperLeft = object._places.upperLeft,
        lowerRight = object._places.lowerRight;

    var index = object.arrayName + object.index;

    for(var col = upperLeft.col; col <= lowerRight.col; col++)
    {
        for(var row = upperLeft.row; row <= lowerRight.row; row++)
        {
            delete this[col][row][index];
        }
    }       
};
cameraGrid.draw = function()
{
    noFill();
    stroke(0, 0, 0);
    if(screenUtils.debugMenuWhite)
    {
        stroke(255, 255, 255, 100);
    }
    strokeWeight(1);
    for(var col = cam.upperLeft.col; col <= cam.lowerRight.col; col++)
    {
        for(var row = cam.upperLeft.row; row <= cam.lowerRight.row; row++)
        {  
            rect(this.xPos + col * this.cellWidth, this.yPos + row * this.cellHeight, this.cellWidth, this.cellHeight);
        }
    }
};

var gameObjects = createArray([]);
gameObjects.lastAddObject = gameObjects.addObject;
gameObjects.drawBoundingBoxes = function()
{
    if(!game.boundingBoxes)
    {
        return;  
    }

    noFill();
    stroke(0, 0, 0);
    strokeWeight(0.5);

    var boundingBox, array, object, i, j, shape;

    //Render!
    for(i = 0; i < this.toOrder.length; i++)
    {
        array = this.renderPlace[this[this.toOrder[i]].name];

        for(j = 0; j < array.length; j++)
        {
            if(this[this.toOrder[i]][array[j]])
            {
                shape = this[this.toOrder[i]][array[j]].boundingBox;
                rect(shape.xPos, shape.yPos, shape.width, shape.height);
            }
        }
    }

    noStroke();
};
gameObjects.removeObjects = function()
{
    var savedObjects = [];
    for(var i = 0; i < this.length; i++)
    {
        savedObjects.push([]);

        //Keep objects where save equals true, 
        for(var j = 0; j < this[i].length; j++)
        {
            if(this[i][j].save)
            {
                savedObjects[i].push(this[i][j]);
            }
        }

        this[i].clear();
    }

    //Add the objects back
    for(var i = 0; i < savedObjects.length; i++)
    {
        for(var j = 0; j < savedObjects[i].length; j++)
        {
            if(savedObjects[i][j].reAdd !== undefined)
            {
                savedObjects[i][j].reAdd();
            }
            savedObjects[i][j].toSetAfter = true;

            this[i].push(savedObjects[i][j]);
            this[i].applyObject(j); // Don't forget to apply our object!
        }
    }
};
gameObjects.findOrder = function()
{
    this.renderPlace = {};
    for(var i = 0; i < this.length; i++)
    {
        this.renderPlace[this[i].name] = [];
    }

    this.toOrder = [];
};
gameObjects.addObjectsToCameraGrid = function()
{
    for(var i = 0; i < this.length; i++)
    {
        for(var j = 0; j < this[i].length; j++)
        {
            cameraGrid.addReference(this[i][j]);
        }
    }
};
gameObjects.setAfter = function()
{
    for(var i = 0; i < this.length; i++)
    {
        for(var j = 0; j < this[i].length; j++)
        {
            if(this[i][j] === undefined)
            {
                this[i][j] = {
                    fake : true
                };
            }
            if(this[i][j].toSetAfter && this[i][j].setAfter !== undefined)
            {
                this[i][j].setAfter();
                this[i][j].toSetAfter = false;
            }
        }
    }

    this.objectsApplied = 0;
};
gameObjects.delag = function(clearEffects, deleteSnow)
{
    if(deleteSnow)
    {        
        gameObjects.getObject("snow").length = 0;
    }

    if(clearEffects)
    {
        var clouds = gameObjects.getObject("cloud");

        //Get clouds in screen
        var cloudsIndexes = [];
        for(var i = 0; i < clouds.length; i++)
        {
            if(Math.pow(cam.focusXPos - clouds[i].boundingBox.xPos, 2) +
               Math.pow(cam.focusYPos - clouds[i].boundingBox.yPos, 2) <= 160000)
            {
                cloudsIndexes.push(i);
            }
        }

        var toSleep = (cloudsIndexes.length - 2) - 1;

        //Sleep clouds
        var picked = 0;
        for(var i = 0; i < cloudsIndexes.length; i++)
        {
            if(random(0, 1) < 0.5 || cloudsIndexes.length - i <= toSleep)
            {
                clouds[cloudsIndexes[i]].sleep(1700);
                picked++;
            }

            if(picked > toSleep)
            {
                break;
            }
        }
    }else{
        for(var i = 0; i < cameraGrid.length; i++)
        {
            for(var j = 0; j < cameraGrid[i].length; j++)
            {
                cameraGrid[i][j] = {};
            }
        }
        gameObjects.addObjectsToCameraGrid();
    }
};
gameObjects.applyCollision = function(objectA)
{
    if(objectA.physics.movement === "static" || objectA.physics.skipCollision)
    {
        return; //We don't want to process anything that doesn't move
    }

    var pcs = {};

    var cell, array, objectB, col, row, info;
    
    for(col = objectA._places.upperLeft.col; col <= objectA._places.lowerRight.col; col++)
    {
        for(row = objectA._places.upperLeft.row; row <= objectA._places.lowerRight.row; row++)
        {
            cell = cameraGrid[col][row];

            for(var i in cell)
            {
                //If an object is going to be tested with itself skip the loop
                if(pcs[i] || objectA.arrayName === cell[i].arrayName && objectA.index === cell[i].index)
                {
                    continue;
                }

                array = this[this.references[cell[i].arrayName]] || [];
                objectB = array[cell[i].index];

                if(!objectB || objectB.fake)
                {
                    continue;
                }

                //Test boundingBoxes
                if(!objectA.boundingBox.off && !objectB.boundingBox.off && 
                   !observer.boundingBoxesColliding(objectA.boundingBox, objectB.boundingBox))
                {
                    continue;
                }

                if(objectA.physics.shape === "rect" && objectB.physics.shape === "rect" && 
                    !(objectA.boundingBox.overSized || objectB.boundingBox.overSized) ||
                    observer.colliding(objectA, objectB))
                {
                    info = {};

                    if(objectA.physics.solidObject && objectB.physics.solidObject && 
                       !(objectA.avoidCollision(objectB, info) || objectB.avoidCollision(objectA, info)))
                    {
                        info = observer.solveCollision(objectA, objectB);

                        objectA.updateBoundingBox();
                        objectB.updateBoundingBox();
                    }

                    array.applyObject(cell[i].index);
                    objectA.onCollide(objectB, info);
                    objectB.onCollide(objectA, info);
                }

                pcs[i] = true;
            }
        }
    }
};
gameObjects.apply = function(noApply)
{
    if(noApply)
    {
        return;
    }

    var pcs = {};
    this.indexes = {};

    for(var i = 0; i < this.toOrder.length; i++)
    {
        this.renderPlace[this[this.toOrder[i]].name].length = 0;
    }

    var col, row, cell, i, array, object;

    for(col = cam.upperLeft.col; col <= cam.lowerRight.col; col++)
    {
        for(row = cam.upperLeft.row; row <= cam.lowerRight.row; row++)
        {           
            cell = cameraGrid[col][row];

            for(i in cell)
            {  
                if(pcs[i])
                {
                    continue;
                }

                array = this[this.references[cell[i].arrayName]] || [];
                object = array[cell[i].index];

                //Delete any refs to objects removed
                if(!object || object.fake)
                {
                    delete cameraGrid[col][row][i];
                    continue;
                }

                array.applyObject(cell[i].index); //Needed for moving objects around

                /*Keep the cell up to date
                Note : use this before referencing a cell*/
                if(object.physics.movement === "dynamic" || object.physics.changes)
                {
                    cameraGrid.removeReference(object);
                    cameraGrid.addReference(object);
                }

                if(!game.cutScening || !object.isLifeForm)
                {
                    object.lastXPos = object.xPos;
                    object.lastYPos = object.yPos;

                    object.update();
                    gameObjects.applyCollision(object);
                }

                //Signify that we've used the object for this loop
                pcs[i] = true;
                this.renderPlace[object.arrayName].push(object.index);
                this.indexes[this.references[object.arrayName]] = true;
            }
        }
    }
};
gameObjects.draw = function(noDraw)
{
    if(noDraw)
    {
        return;
    }

    var array, i, j;

    var order = [];
    for(i in this.indexes)
    {
        if(order.indexOf(i) === -1)
        {
            order.push(i);
        }
    }

    if(this.objectsApplied >= 2)
    {
        try{
            for(i = 0; i < order.length; i++)
            {
                array = this.renderPlace[this[order[i]].name];

                for(j = 0; j < array.length; j++)
                {
                    this[order[i]][array[j]].draw();
                }
            }
        }
        catch(e)
        {

        }
    }else{
        for(i = 0; i < order.length; i++)
        {
            array = this.renderPlace[this[order[i]].name];

            for(j = 0; j < array.length; j++)
            {
                if(this[order[i]][array[j]])
                {
                    this[order[i]][array[j]].draw();
                }
            }
        }
    }

    this.toOrder = order;
};
gameObjects.updateLoops = 0;
gameObjects.counter = -100;
gameObjects.update = function()
{
    if((screenUtils.fade.fading && game.gameState === "play" && game.tempState !== "load" && 
        gameObjects.updateLoops > 120) && !game.cutScening)
    {
        return;
    }

    var clouds = gameObjects.getObject("cloud");

    //Delag the game when running at over 30 fps with clouds
    if(game.fps > 30 && millis() % 1000 >= 915 && clouds.length >= 4 && clouds.length <= 400)
    {
        if(fpsCatcher.actualFps <= 50)
        {
            frameRate(game.fps);
            this.delag(true);
        }
    }
    if(game.fpsType === "auto")
    {
        if(!this.lastCheckTime || millis() - this.lastCheckTime > ((game.fps === 60) ? 600 : 1000))
        {
            if(game.fps === 30 && fpsCatcher.actualFps >= 30)
            {
                game.fps = 60;
                game.applyFps();
            }
            else if(game.fps === 60 && fpsCatcher.actualFps <= 50)
            {
                game.fps = 30;
                game.applyFps();
            }

            this.lastCheckTime = millis();
        }
    }

    this.objectsApplied++;

    gameObjects.apply(messageHandler.active);

    if(game.fps === 30 && game.gameState !== "load")
    {
        gameObjects.apply(messageHandler.active);
    }

    gameObjects.updateLoops++;
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/****************************************************************Effects*******************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var lighting = {
    map : [],
    fixtures : {},
    lumin : 0.3,
    maxLighting : 255,
    minLighting : 0,
    end : function()
    {
        if(levelInfo.lastLevel !== levelInfo.level)
        {
            this.fixtures = {};
            this.initFixtures = false;
        }
    },
    create : function(noReload)
    {
        this.lastMaxLighting = this.maxLighting;
        this.maxLighting = 255;

        this.map = [];
        for(var i = 0; i < levelInfo.width / levelInfo.unitWidth + 1; i++)
        {
            this.map.push([]);
            for(var j = 0; j < levelInfo.height / levelInfo.unitHeight + 1; j++)
            {
                this.map[i].push({
                    color : color(0, 0, 0, 0),
                });
            }
        }

        for(var i = 0; i < gameObjects.length; i++)
        {
            if(gameObjects[i].length > 0 && gameObjects[i][0].type === "block" && 
               gameObjects[i][0].width === levelInfo.unitWidth &&
               gameObjects[i][0].height === levelInfo.unitHeight)
            {
                for(var j = 0; j < gameObjects[i].length; j++)
                {
                    var place = this.getPlace(gameObjects[i][j].xPos + 1, gameObjects[i][j].yPos + 1);
                    var cell = this.map[place.col][place.row];
                    cell.usable = true;
                    cell.blockName = gameObjects[i].name; 
                    cell.color = color(red(cell.color), green(cell.color), blue(cell.color), alpha(cell.color));
                }
            }
        }

        levelInfo.halfUnitWidth = levelInfo.unitWidth / 2;
        levelInfo.halfUnitHeight = levelInfo.unitHeight / 2;
        this.blockDist = dist(0, 0, levelInfo.unitWidth, levelInfo.unitHeight);
        this.maxLumin = abs(this.minLighting - this.maxLighting);

        this.img = get(0, 0, 400, 400);   
        this.initFixtures = false;
        this.pg = createGraphics(cam.width, cam.height, JAVA2D);
        this.startMillis = millis();

        this.pg.noStroke();
        this.pg.noSmooth();

        this.map._length = this.map.length - 1;
        this.map[0]._length = this.map[0].length - 1;
    },
    getPlace : function(xPos, yPos)
    {
        return {
            col : constrain(round(((xPos - levelInfo.xPos) - levelInfo.unitWidth / 2) / levelInfo.unitWidth), 0, this.map._length),
            row : constrain(round(((yPos - levelInfo.yPos) - levelInfo.unitHeight / 2) / levelInfo.unitHeight), 0, this.map[0]._length),
        };
    },
    setAllFixtures : function()
    {
        if(this.initFixtures)
        {
            return;
        }

        var inCamFixtures = [];

        for(var fixture in this.fixtures)
        {
            var fixture1 = this.fixtures[fixture];

            if(fixture1.perX !== undefined && fixture1.perY !== undefined && !fixture1.mapped)
            {
                fixture1.xPos = levelInfo.xPos + constrain(fixture1.xPos, fixture1.perX, levelInfo.width - fixture1.perX) - fixture1.halfWidth;
                fixture1.yPos = levelInfo.yPos + constrain(fixture1.yPos, fixture1.perY, levelInfo.height - fixture1.perY) - fixture1.halfHeight;
            }

            inCamFixtures.push(fixture);

            if(fixture1.map === undefined)
            {
                fixture1.map = [[]];
                fixture1.index = 0;
            }
        }

        for(var i = 0; i < this.map.length; i++)
        {
            for(var j = 0; j < this.map[i].length; j++)
            {
                var xPos = levelInfo.xPos + levelInfo.unitWidth * i;
                var yPos = levelInfo.yPos + levelInfo.unitHeight * j;
                var pivotXPos = xPos + levelInfo.halfUnitWidth;
                var pivotYPos = yPos + levelInfo.halfUnitHeight;

                var cell = this.map[i][j];

                for(var k = 0; k < inCamFixtures.length; k++)
                {
                    if(!this.fixtures[inCamFixtures[k]].mapped)
                    {
                        this.setFixture(this.fixtures[inCamFixtures[k]], cell, pivotXPos, pivotYPos, inCamFixtures[k]);
                    }
                }
            }

            for(var k = 0; k < inCamFixtures.length; k++)
            {
                var fixture1 = this.fixtures[inCamFixtures[k]];

                if(!fixture1.mapped && fixture1.map[fixture1.index].length > 0)
                {
                    fixture1.index++;
                    fixture1.map.push([]);
                }
            }
        }

        for(var k = 0; k < inCamFixtures.length; k++)
        {
            var fixture1 = this.fixtures[inCamFixtures[k]];

            if(!fixture1.mapped && fixture1.map.length > 1)
            {
                fixture1.map = this.filterMap(fixture1.map);
                fixture1.mapped = true;
            }
        }

        this.initFixtures = true;

        this.maxLighting = this.lastMaxLighting || 255;
    },
    filterMap : function(map)
    {
        var testMap = [];
        var maxXLength = 0;

        for(var n = 0; n < map.length; n++)
        {
            if(map[n].length > 0)
            {
                testMap.push(map[n]);

                if(maxXLength < map[n].length)
                {
                    maxXLength = map[n].length;
                }
            }
        }

        map = testMap;

        for(var n = 0; n < map.length; n++)
        {   
            while(map[n].length < maxXLength)
            {
                map[n].unshift(0);
                map[n].push(0);
            }

            if(map[n].length > maxXLength)
            {
                map[n].pop();
            }
        }

        return map;
    },
    setFixture : function(fixture, cell, pivotXPos, pivotYPos, fixtureIndex)
    {
        var distance = (Math.pow(Math.abs(fixture.xPos - pivotXPos), 2) +
                        Math.pow(Math.abs(fixture.yPos - pivotYPos), 2));

        if(distance < fixture.range * fixture.range)
        {
            distance = Math.sqrt(distance);

            var percent = ((100 - fixture.brightness) + ((distance / this.blockDist) * 
                          (fixture.centeredLighting || 100) / (fixture.range / this.blockDist)));
            
            var inputAlpha = this.minLighting + (constrain(percent, 1, 100) * max(this.maxLumin, 1) / 100); 
            
            cell.state = fixture.state || cell.state;
            cell.fixtureIndex = fixtureIndex || cell.fixtureIndex;

            if(cell.alpha < this.maxLighting)
            {
                if(inputAlpha < cell.alpha)
                {
                    cell.alpha = inputAlpha;
                }
            }else{
                cell.alpha = inputAlpha;
            }

            if(!fixture.mapped)
            {
                fixture.map[fixture.index].push(cell.alpha);
            }
        }
    },
    setImage : function()
    {
        this.place = this.getPlace((cameraGrid.xPos + (cam.upperLeft.col) * cameraGrid.cellWidth),
        (cameraGrid.yPos + (cam.upperLeft.row) * cameraGrid.cellHeight));
        this.place2 = this.getPlace((cameraGrid.xPos + (cam.lowerRight.col + 2) * cameraGrid.cellWidth), 
        (cameraGrid.yPos + (cam.lowerRight.row + 2) * cameraGrid.cellHeight));

        var i, j;

        for(i = this.place.col; i < min(this.place2.col, this.map.length); i++)
        {
            for(j = this.place.row; j < min(this.place2.row, this.map[i].length); j++)
            {
                this.map[i][j].alpha = this.maxLighting;
            }
        }

        var inCamFixtures = [];

        var ulc = cam.upperLeft.col - 1;
        var ulr = cam.upperLeft.row - 1;
        var lrc = cam.lowerRight.col + 1;
        var lrr = cam.lowerRight.row + 1;

        var fixture, fixture1;
        for(fixture in this.fixtures)
        {
            fixture1 = this.fixtures[fixture];

            if(fixture1.inCam || (fixture1.place !== undefined && 
            (fixture1.place.col >= ulc && fixture1.place.col <= lrc) && 
            (fixture1.place.row >= ulr && fixture1.place.row <= lrr)))
            {
                inCamFixtures.push(fixture);
            }
        }

        var k, place, halfX, halfY, x, y, cell;
        for(k = 0; k < inCamFixtures.length; k++)
        {
            fixture1 = this.fixtures[inCamFixtures[k]];

            if(fixture1.mapped)
            {
                place = this.getPlace(fixture1.xPos, fixture1.yPos);

                halfX = Math.floor(fixture1.map.length / 2);
                halfY = Math.floor(fixture1.map[0].length / 2);

                for(x = 0; x < fixture1.map.length; x++)
                {
                    for(y = 0; y < fixture1.map[0].length; y++)
                    {
                        cell = (this.map[x + place.col - halfX] || [])[y + place.row - halfY];

                        if(cell && fixture1.map[x][y] > 0)
                        {
                            if(cell.alpha > fixture1.map[x][y])
                            {
                                cell.alpha = fixture1.map[x][y];
                            }
                        }
                    }
                }
            }
        }

        var offX = Math.round(cam.focusXPos - cam.halfWidth);
        var offY = Math.round(cam.focusYPos - cam.halfHeight);
        var wd = levelInfo.unitWidth;
        var hd = levelInfo.unitHeight;

        this.pg.beginDraw();
        this.pg.background(0, 0, 0, 0);
        
        for(i = this.place.col; i < Math.min(this.place2.col, this.map.length); i++)
        {
            for(j = this.place.row; j < Math.min(this.place2.row, this.map[i].length); j++)
            {
                this.pg.fill(0, 0, 0, constrain(this.map[i][j].alpha, this.minLighting, this.maxLighting));
                this.pg.fastRect(wd * i - offX, hd * j - offY, wd, hd);
            }
        }

        this.pg.endDraw();
    },
    draw : function()
    {
        this.working = false;

        if(((this.lumin <= 0 || this.maxLighting < 3 || this.off) || (!levelInfo.daylightCycle && !levelInfo.nightMode)) &&    
        (this.startMillis === undefined || (!(levels[levelInfo.level] || {}).nightMode) || millis() - this.startMillis > 1400))
        {
            return;
        }

        this.working = true;

        //Will exec once
        this.setAllFixtures();

        if(millis() % 30 >= ((game.fps === 60) ? 12 : 6) || game.gameState !== "play" || (millis() - this.startMillis) <= 400)
        {
            this.setImage();
        }

        image(this.pg, 0, 0);
    },
};

var daylightCycle = {
    switchTime : millis(),
    lastMillis : 0,
    defaultDayLength : 1000 * 60,
    dayLength : 1000 * 60,
    state : "day",
    maxLighting : 252,
    first : true,
    defaultDivTime : 140,
    divTime : 100,
    setState : function(state)
    {
        this.switchTime = millis();
        this.state = state;
        this.switchState = undefined;
        this.switching = false;
        this.first = false;

        switch(this.state)
        {
            case "day" :
                lighting.maxLighting = 2; 
                break;

            case "night" :
                lighting.maxLighting = this.maxLighting; 
                break;
        }
    },
    update : function()
    {
        if(!levelInfo.daylightCycle && !levelInfo.nightMode)
        {
            return;
        }
        lighting.off = this.first;

        if(!levelInfo.daylightCycle && levelInfo.nightMode)
        {
            this.setState("night");
            return;
        }

        var div = abs(this.lastMillis - millis()) / this.divTime;
        
        this.switching = false;
        if(abs(millis() - this.switchTime) >= this.dayLength)
        {
            this.switching = true;
            switch(this.state)
            {
                case "day" :
                    this.switchState = "night";
                    lighting.maxLighting += div;
                    if(lighting.maxLighting >= this.maxLighting)
                    {
                        this.setState("night");
                    }
                    break;

                case "night" :
                    this.switchState = "day";
                    lighting.maxLighting -= div;
                    if(lighting.maxLighting <= 2)
                    {
                        this.setState("day");
                    }
                    break;
            }
        }
        this.recMaxLighting = lighting.maxLighting;
        this.lastMillis = millis();
    },
};

var travelObjects = [];
travelObjects.add = function(object)
{
    this.push({
        index : object.index,
        arrayName : object.arrayName,
    });
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*************************************************************Game-Objects*****************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var GameObject = function(xPos, yPos)
{
    this.xPos = xPos;
    this.yPos = yPos;

    this.boundingBox = {
        xPos : this.xPos,
        yPos : this.yPos,
    };

    this.physics = {
        shape : "?",
        movement : "static",
        solidObject : true,
    };

    this.draw = function() {};
    this.update = function() {};

    this.onCollide = function(object, info) {};
    this.avoidCollision = function(object, info) {};

    this.updateBoundingBox = function() {};

    this.remove = function()
    {
        this.hideDelete = true;
    };

    this.enterFunc = function(name, begin, end)
    {
        var suffix = name + millis() + round(random(100, 0));

        var lastBeginKey = "begin" + suffix;
        this[lastBeginKey] = begin || function() {};

        var lastEndKey = "end" + suffix;
        this[lastEndKey] = end || function() {};

        var lastNameKey = "last" + suffix;
        this[lastNameKey] = this[name];

        var self = this;

        this[name] = function()
        {
            var r = this[lastBeginKey].apply(this, arguments);

            if(r === undefined || r > 0)
            {
                r = this[lastNameKey].apply(this, arguments) || r;
            }

            if(r === undefined || r > 1)
            {
                this[lastEndKey].apply(this, arguments);
            }
        };
    };
};

var Rect = function(xPos, yPos, width, height)
{
    GameObject.call(this, xPos, yPos);

    this.width = width;
    this.height = height;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.boundingBox.width = width;
    this.boundingBox.height = height;
    this.physics.shape = "rect";
    this.type = "block";

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
    };
};
gameObjects.addObject("rect", createArray(Rect));

var Circle = function(xPos, yPos, diameter)
{
    GameObject.call(this, xPos, yPos);

    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.boundingBox.xPos = this.xPos - this.radius;
    this.boundingBox.yPos = this.yPos - this.radius;
    this.boundingBox.width = this.diameter;
    this.boundingBox.height = this.diameter;
    this.physics.shape = "circle";
    this.type = "collision";

    this.rotation = 0;
    this.showRotation = false;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        if(this.showRotation)
        {
            pushMatrix();
                translate(this.xPos, this.yPos);
                rotate(this.rotation);
                stroke(0, 0, 0);
                line(0, 0, this.radius * 0.7, this.radius * 0.7);
            popMatrix();
        }
    };
};
gameObjects.addObject("circle", createArray(Circle));

var DynamicObject = function()
{
    this.physics.movement = "dynamic";
    this.xVel = 0;
    this.maxXVel = 0;

    this.yVel = 0;
    this.maxYVel = 0;
    this.gravity = 0;
    this.inAir = false;

    this.update = function()
    {
        this.updateVel();
        this.updateBoundingBox();
    };

    this.updateVel = function()
    {
        if(this.autoXDeacl)
        {
            if(this.xVel < 0)
            {
                this.xVel += this.xDeacl;  
            }
            else if(this.xVel > 0)
            {
                this.xVel -= this.xDeacl;
            }
            
            if(Math.abs(this.xVel) < this.xDeacl)
            {
                this.xVel = 0;  
            }
        }
        else if(this.xDeacl !== undefined)
        {
            if(this.xVel > 0)
            {
                this.xVel -= this.xDeacl;
            }
            if(this.xVel < 0)
            {
                this.xVel += this.xDeacl;
            }
            if(this.xVel >= -this.xDeacl && this.xVel <= this.xDeacl)
            {
                this.xVel = 0;
            }

            this.xDeacl = this.lastXDeacl || this.xDeacl;
        }

        if(this.boundingBox.xPos <= levelInfo.xPos)
        {
            this.xVel = max(0, this.xVel);
            this.xPos = abs(this.xPos - this.boundingBox.xPos) + levelInfo.xPos;
        }
        if(this.boundingBox.xPos + this.boundingBox.width >= levelInfo.xPos + levelInfo.width)
        {
            this.xVel = min(0, this.xVel);
            this.xPos = (levelInfo.xPos + levelInfo.width - this.boundingBox.width) - abs(this.boundingBox.xPos - this.xPos) + (this.diameter || 0);
        }
        this.xVel = constrain(this.xVel, -this.maxXVel, this.maxXVel);
        this.xPos += this.xVel;

        if(this.boundingBox.yPos <= levelInfo.yPos)
        {
            this.yPos = abs(this.yPos - this.boundingBox.yPos) + levelInfo.yPos;
            this.yVel = 0;
        }

        if(this.yVel !== 0)
        {
            this.inAir = true;
        }
        if(!this.onLadder)
        {
            this.yVel += this.gravity;
        }
       
        this.inLiquid = false;
        this.onLadder = false;
        
        this.yVel = constrain(this.yVel, -this.maxYVel, this.maxYVel);

        if(this.minYVel !== undefined)
        {
            this.yVel = max(this.yVel, this.minYVel);
        }else{
            this.yVel = max(this.yVel, -this.maxYVel);  
        }
        this.yPos += this.yVel;
    };
};

//The lifeform package (object) must be instantiated with a dynamic object
var LifeForm = function(hp, notNormalDeath)
{
    this.type = "lifeform";
    this.isLifeForm = true;

    //Death stats
    this.maxHp = hp || 5;
    this.hp = this.maxHp;
    this.dead = false;
    this.normalDeath = !notNormalDeath;
    
    //xVel
    this.xAcl = 0.8;//1.0 is the default
    this.xDeacl = 0.05;
    this.maxXVel = 3;

    //yVel
    this.maxYVel = 10; //Max falling speed
    this.minYVel = -18; //Min jumping speed
    this.gravity = 0.325;
    this.jumpHeight = 9.4;

    //Speeds
    this.swimSpeed = 2;
    this.climbSpeed = 2.5;
    this.friction = 1; //Friction as a multiplier
    
    this.revive = function()
    {
        this.dead = false;
        this.hp = this.maxHp;
    };
        
    //Make sure we have damage!
    this.damage = this.damage || 0;

    this.lps = false;

    this.defense = 0;

    this.subDefense = function(amt)
    {
        return (1 - ((amt || Math.min(this.defense, 99)) / 100));
    };

    this.takeDamage = function(object, amt)
    {
        if(!this.lps || performance.now() % this.lps >= this.lps - 1)
        {
            var damage1 = ((object.getDamage !== undefined) ? object.getDamage(object, amt) : (amt || object.damage));
            this.hp -= (damage1) * this.subDefense();

            if(this.scoreValue && this.hp <= 0 && 
            (object.isLifeForm || object.likeLifeForm) && typeof object.score === "number")
            {
                this.killer = {
                    arrayName : object.arrayName,
                    index : object.index
                };
            }
        }
    };

    this.handleDeath = function()
    {
        if(!this.save)
        {
            if(this.killer)
            {
                var object = gameObjects.getObject(this.killer.arrayName)[this.killer.index];
                if(object)
                {
                    object.score += this.scoreValue;
                    this.scoreValue = 0;
                }
            }

            this.remove();
        }
    };

    this.setMaxHp = function(type, amt)
    {
        if(type === "set")
        {
            this.maxHp = amt;
            this.hp = this.maxHp;
        }
        else if(type === "add")
        {
            this.maxHp += amt;
            this.hp = this.maxHp;
        }
    };

    this.update = function()
    {
        //The controls controller for moving
        if(this.controls !== undefined)
        {
            if(this.controls.left())
            {
                this.xVel -= this.xAcl;
            }
            if(this.controls.right())
            {
                this.xVel += this.xAcl;
            }
    
            if(!this.controls.left() && !this.controls.right())
            {
                var xDeacl = ((this.inAir) ? (this.xDeacl * this.friction) * 0.75 : (this.xDeacl * this.friction));
                if(this.inAir)
                {
                    if(this.xVel > 0)
                    {
                        this.xVel += this.xAcl * 0.05;
                    }
                    if(this.xVel < 0)
                    {
                        this.xVel -= this.xAcl * 0.05;
                    }
                }
                if(this.xVel > 0)
                {
                    this.xVel -= xDeacl;
                }
                if(this.xVel < 0)
                {
                    this.xVel += xDeacl;
                }
    
                if(this.xVel > -xDeacl && this.xVel < xDeacl)
                {
                    this.xVel = 0;
                }
            }
            
            if(this.controls.up())
            {
                if(this.inLiquid)
                {
                    this.yVel = -this.swimSpeed; 
                }
                else if(this.onLadder)
                {
                    this.yVel = -this.climbSpeed; 
                }
                else if(!this.inAir)
                {
                    if(this.jumpTime === undefined)
                    {
                        this.yVel = -this.jumpHeight;
                    }else{
                        this.isJumping = true;
                        this.jumpTimer = this.jumpTime;
                    }
                }
                if(this.flying && this.yFlySpeed !== undefined)
                {
                    this.yVel = -this.yFlySpeed;    
                }

                if(this.isJumping)
                {
                    if(this.jumpTimer <= 0 || this.yVel < -this.jumpHeight)
                    {
                        this.isJumping = false;
                    }

                    this.yVel -= this.jumpSpeed || (this.jumpHeight / this.jumpTime);
                    this.jumpTimer--;
                }
            }else{
                this.jumpTimer = 0;
                this.isJumping = false;
            }
            
            if(this.controls.down())
            {
                if(this.inLiquid)
                {
                    this.yVel = this.swimSpeed; 
                }
                else if(this.onLadder)
                {
                    this.yVel = this.climbSpeed; 
                }
                if(this.flying && this.yFlySpeed !== undefined)
                {
                    this.yVel = this.yFlySpeed;    
                }
            }
    
            if(!this.controls.up() && !this.controls.down() && this.onLadder)
            {
                this.yVel = 0;
            }
        }

        //If it fell out of the level restart the level
        if(this.yPos >= levelInfo.yPos + levelInfo.height || this.hp <= 0)
        {
            this.dead = true;
        }
      
        if(this.dead && this.normalDeath)
        {
            this.handleDeath();
        }
        
        this.friction = 1;
        if(this.setXAcl !== undefined)
        {
            this.xAcl = this.setXAcl;
        }

        if(this.frozen)
        {
            this.xVel = constrain(this.xVel, -0.3, 0.3);
            this.yVel = max(this.yVel, -0.3);
        }

        this.updateVel();
        this.updateBoundingBox();
    };

    this.__lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        if(object.arrayName === "water" && object.freezing)
        {
            //Stop the water from freezing!
            object.temp += object.freezeRate * 3;

            if(object.temp < object.freezeTemp + 3)
            {
                object.temp = object.freezeTemp + 3;
            }
            return;
        }

        this.__lastOnCollide(object, info);
    };
};

var DynamicCircle = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    DynamicObject.call(this);

    this.color = colorValue;
    this.xAcl = 1.5;
    this.xDeacl = 0.3;
    this.maxXVel = 4;

    this.maxYVel = 12;
    this.gravity = 0.4;
    this.jumpHeight = 10.5;

    this.rotateVel = 0;
    this.rotateFr = 0.3;

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos - this.radius;
        this.boundingBox.yPos = this.yPos - this.radius;
    };

    this.lastUpdate2 = this.update;
    this.update = function()
    {
        if(this.rotateVel > 0)
        {
            this.rotateVel -= this.rotateFr;
        }
        else if(this.rotateVel < 0)
        {
            this.rotateVel += this.rotateFr;
        }

        if(abs(this.rotateVel) < this.rotateFr)
        {
            this.rotateVel = 0;
        }

        this.rotation += this.rotateVel;

        if(this.rotation > 360)
        {
            this.rotation = 0;
        }
        else if(this.rotation < 0)
        {
            this.rotation = 360;
        }

        this.xVel += this.rotateVel;
            
        if(this.rotateVel !== 0)
        {
            if(this.xVel > 0)
            {
                this.xVel -= this.rotateFr;
            }
            else if(this.xVel < 0)
            {
                this.xVel += this.rotateFr;
            }
        }

        this.lastUpdate2();
    };
};
gameObjects.addObject("dynamicCircle", createArray(DynamicCircle));

var DynamicRect = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    DynamicObject.call(this);

    this.color = colorValue;
    this.xAcl = 1.5 * 0.7;
    this.xDeacl = 0.4 * 0.3;
    this.maxXVel = 4 * 0.7;

    this.maxYVel = 12 * 0.75;
    this.gravity = 0.4 * 0.6;
    this.jumpHeight = 10.5 * 0.75;
    this.inAir = true;

    this.yAcl = 3;

    this.mass = 2;
    
    this.upForce = 3.51;

    this.lastUpdate3 = this.update;
    this.update = function()
    {
        this.touchingBlock = false;
        this.lastUpdate3();
    };

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos;
        this.boundingBox.yPos = this.yPos;
    };

    this.onCollide = function(object)
    {
        if(object.physics.movement === "dynamic" && object.physics.shape === "circle")
        {
            physics.push.rectcircle(this, object);
        }
    };
};
gameObjects.addObject("dynamicRect", createArray(DynamicRect));

var Water = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height, colorValue); 
    this.color = colorValue || color(40, 103, 181, 150);
    this.physics.solidObject = false;
    
    this.type = "liquid";
    this.thickness = 1.405;
    this.damage = 0.1;

    this.frozen = false;
    this.freezing = false;
    this.freezable = true;

    this.temp = 70;
    this.freezeTemp = 22;
    this.maxTemp = 72;
    this.freezeRate = 0.05;
    this.scoreValue = 150;

    this.offMillis = round(random(-2000, 1000));

    this.boundingBox.width += 2;
    this.boundingBox.height += 2;

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos - 1;
        this.boundingBox.yPos = this.yPos - 1;
    };

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        if(this.freezing && !this.showNoFreeze)
        {
            fill(33, 198, 207, this.a || 200 * (this.maxTemp - this.temp) / this.maxTemp);
            triangle(this.xPos + this.width, this.yPos + this.height, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
        }
    };

    this.__lastUpdate = this.update;
    this.update = function()
    {
        this.__lastUpdate();

        if(!this.freezable) 
        {
            this.freezing = false;
            return;
        }

        if(this.freezing)
        {
            this.temp -= this.freezeRate;
        }

        if(this.temp < this.freezeTemp)
        {
            this.frozen = true;

            this.remove();
            gameObjects.getObject("ice").add(this.xPos, this.yPos, this.width, this.height, undefined, undefined, true);

            var ice = gameObjects.getObject("ice").getLast();

            //Make the ice look like when water is frozen
            ice.draw = this.draw;
            ice.a = 200;
            ice.color = this.color;
            ice.freezing = true;

            cameraGrid.addReference(ice);
        }

        this.physics.movement = (millis() % (3000 + this.offMillis) >= 2970 + this.offMillis) ? "dynamic" : "static"; 
    };

    this.onCollide = function(object)
    {
        if(object.air !== undefined && !object.breathing)
        {
            if(this.width > levelInfo.unitWidth && this.height > levelInfo.unitHeight)
            {
                object.air -= (object.downBreathSpeed || 0.25) * 5;
                object.air = max(object.air, 0);
            }else{
                object.air -= object.downBreathSpeed || 0.25;
                object.air = max(object.air, 0);
            }
        }
        if(object.physics.movement === "dynamic" && 
          (object.inAir || object.yVel > 0 || object.boundingBox.yPos + object.boundingBox.height > this.yPos))
        {
            object.yVel = object.yVel / this.thickness;
            object.inLiquid = true;
            object.inAir = false;
        }
    };
};
gameObjects.addObject("water", createArray(Water));

var BackBlock = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 0, 0, 150);
    this.physics.solidObject = false;
    
    this.draw = function()
    {
        if(!this.imageLoaded)
        {
            var pg = createGraphics(width, height, P2D);
            pg.noStroke();
            pg.beginDraw();
            pg.fill(this.color); 
            pg.rect(0, 0, this.width, this.height, 5);
            for(var x = 0; x < this.width; x += 30)
            {
                for(var y = 0; y < this.height; y += 30)
                {
                    pg.rect(0 + 5 + x, 0 + 5 + y, 20, 20, 5);
                }
            }
            pg.endDraw();
            this.img = pg;

            this.imageLoaded = true;
        }

        image(this.img, this.xPos, this.yPos);
    };
};
gameObjects.addObject("backBlock", createArray(BackBlock));

var Pillar = function(xPos, yPos, width, height, colorValue, pillarBlock)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 0, 0, 150);

    this.pillarBlock = pillarBlock;

    this.physics.sides = (this.pillarBlock) ? {} : {
        up : true,
    };

    var wDiv = this.width * 0.1;
    var wVert = this.width * 0.3;
    var hVert = this.height * 0.2;

    this.draw = function()
    {   
        noStroke();

        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        strokeWeight(0.8);
        
        stroke(95, 95, 95);

        if(!this.pillarBlock)
        {
            pushMatrix();
                translate(this.xPos, this.yPos);
                for(var x = 0; x < this.width; x += (this.width / 5))
                {
                    line(x, 3, x, this.height);
                }
            popMatrix();

            strokeWeight(0.3);
            stroke(255, 255, 255);

            beginShape();
                vertex(this.xPos - wVert, this.yPos);
                vertex(this.xPos + this.width + wVert, this.yPos);
                vertex(this.xPos + this.width + wDiv, this.yPos + hVert);
                vertex(this.xPos - wDiv, this.yPos + hVert);
            endShape(CLOSE);

            noStroke();
            fill(85, 85, 85);
            rect(this.xPos - wVert, this.yPos, this.width + wVert * 2, 3);
        }else{
            pushMatrix();
                translate(this.xPos, this.yPos);
                for(var x = 0; x < this.width; x += (this.width / 5))
                {
                    line(x, 0, x, this.height);
                }
            popMatrix();
            
            noStroke();
        }
    };
};
gameObjects.addObject("pillar", createArray(Pillar));

var Tree = function(xPos, yPos, width, height)
{
    Rect.call(this, xPos, yPos, width, height);

    this.physics.solidObject = false;
    this.img = trees.createTree(this.width, this.height, 3, 3);

    this.draw = function()
    {
        image(this.img, this.xPos, this.yPos + 5, this.width, this.height);
    };
};
gameObjects.addObject("tree", createArray(Tree));

var Slope = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(175, 175, 175, 100);
    this.physics.shape = "slope";
    this.direction = "leftup";

    var thicknessX = 0.1;
    var bindingX = 3;
    var thicknessY = 0.1;
    var bindingY = 3;
    this.slip = 0.5;
    this.type = "collision";
    
    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos;
        this.boundingBox.yPos = this.yPos;
    };

    this.draw = function()
    {
        fill(this.color);
        switch(this.direction)
        {
            case "leftup" :
                triangle(this.xPos, this.yPos, this.xPos, this.yPos + this.height, this.xPos + this.width, this.yPos + this.height);
                break;

            case "rightup" :
                triangle(this.xPos, this.yPos + this.height, this.xPos + this.width, this.yPos, this.xPos + this.width, this.yPos + this.height);
                break;

            case "leftdown" :
                triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
                break;

            case "rightdown" :
                triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos, this.xPos + this.width, this.yPos + this.height);
                break;
        }
    };
};
gameObjects.addObject("slope", createArray(Slope));

var OneWay = function(xPos, yPos, width, height, colorValue, direction, inHeritance, dynamic)
{
    if(!dynamic)
    {
        Rect.call(this, xPos, yPos, width, height);
    } else {
        DynamicRect.call(this, xPos, yPos, width, height);
    }

    this.type = "block";

    this.color = colorValue;
    this.direction = direction;
    this.physics.sides = {};
    
    switch(this.direction)
    {
        case "left" :
            this.physics.sides.left = true;
            break;

        case "right" :
            this.physics.sides.right = true;
            break;

        case "up" :
            this.physics.sides.up = true;
            break;

        case "down" :
            this.physics.sides.down = true;
            break;
    }

    this.lastDraw = this.draw;
    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        var symbol = "L";
        var textXPos = this.width * 0.2;

        pushMatrix();
        translate(this.xPos, this.yPos);
        switch(this.direction)
        {
            case "right" :
                translate(this.width, this.height);
                rotate(180);
                break;

            case "up" :
                translate(this.width, 0);
                rotate(90);
                break;

            case "down" :
                translate(0, this.height);
                rotate(270);
                break;
        }
        fill(0, 0, 0, 100);
        textAlign(CENTER, CENTER);
        textSize(20 * this.width / 40);
        fill(0, 0, 0, 100);
        rect(this.width * 0.0, 0, this.width * 0.1, this.height);
        rect(this.width * 0.3, 0, this.width * 0.1, this.height);
        for(var i = 0; i < floor(this.height / 10); i++)
        {
            text(symbol, 0 + textXPos, 0 + this.height * 0.10 + 10 * i);
        }
        textAlign(NORMAL, NORMAL);
        popMatrix();
    };

    if(!inHeritance)
    {
        screenUtils.loadImage(this, true, "oneWay" + this.direction);
    }
};
gameObjects.addObject("oneWay", createArray(OneWay));

var FallingBlock = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(80, 0, 160, 150);
    this.timer = 0;
    this.trigTime = 1;
    this.fallTime = 70;
    this.gravity = 1.5;
    this.type = "block";
    
    //Don't forget to set this to true since this object moves but it's not dynamic
    
    this.physics.sides = {
        up : true,
    };
    
    this.originalYPos = this.yPos;
    this.originalColor = this.color;
    this.opacity = 130;
    this.maxOpacity = 130;
    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
        rect(this.xPos + this.width * 0.15, this.yPos + this.height * 0.15, this.width * 0.7, this.height * 0.7);
    };
    
    this.update = function()
    {
        if(this.activated)
        {
            this.timer++; 
            this.color = color(100, 0, 0, this.opacity);  
            
            if(this.yPos > this.originalYPos && this.opacity > 50)
            {
                this.opacity -= 0.5;
            }
             
            if(this.timer >= this.fallTime)
            {
                this.yPos += this.gravity;
            }

            //Make the bounding box grow with difference in position,
            //So that it always comes back when it gets to the bottom of the level
            if(this.yPos > this.originalYPos)
            {
                this.boundingBox.height = abs(this.yPos - this.originalYPos) + this.height;
            }
                      
            if(this.opacity <= 50)
            {
                this.timer = 0;
                this.activated = false;
                this.opacity = this.maxOpacity;
                this.boundingBox.overSized = false;
                this.yPos = this.originalYPos;
                this.color = this.originalColor;
                this.boundingBox.height = this.height;            
            }
        }
    };
    
    this.onCollide = function(object)
    {
        if((object.type === "lifeform" || (object.arrayName === "crate" && object.noBreak)) && !object.inAir && !this.activated && object.arrayName !== "ninja")
        {
            if(this.timer >= this.trigTime)
            {
                this.boundingBox.overSized = true;
                this.activated = true;
                this.physics.changes = true; 
            }else{  
                if(levelInfo.theme === "winter")
                {
                    this.boundingBox.overSized = true;
                    this.activated = true;
                    this.physics.changes = true; 
                    this.timer = this.fallTime - 10;
                }

                this.timer++;
            } 
        }
    };
};
gameObjects.addObject("fallingBlock", createArray(FallingBlock));

var MovingPlatform = function(xPos, yPos, width, height, colorValue, direction, fixed, noRender)
{
    OneWay.call(this, xPos, yPos, width, height, colorValue, direction, true, !fixed);
    this.physics.independent = true;
    this.updateVel = function() {};
    this.physics.sides = {
        up : true,
    };
    this.physics.movement = (fixed) ? "static" : "dynamic"; 
    this.boundingBox.maxWidth = WIDTH * 0.5;
    
    this.type = "block";

    this.lastUpdate = this.update;
    this.gravity = 0;

    this.xSpeed = 0;
    this.outerXVel = this.xSpeed;
    this.lastXVel = this.outerXVel;

    this.ySpeed = 0;
    this.outerYVel = this.ySpeed;
    this.lastYVel = this.outerYVel;
    
    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
        fill(0, 0, 0, 50);
        triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
    };
    
    screenUtils.loadImage(this, true, "movingPlatform" + this.color);

    this.updateBoundingBox = function()
    {     
        if(this.outerXVel !== 0)
        {
            this.boundingBox.overSized = true;
            if(this.xPos < this.boundingBox.xPos)
            {
                this.boundingBox.width += abs(this.boundingBox.xPos - this.xPos);
                this.boundingBox.xPos = this.xPos;  
            }else{
                var rightX = this.xPos + this.width;
                var rightXB = this.boundingBox.xPos + this.boundingBox.width;
                if(rightX > rightXB)
                {
                    var diff = abs(rightX - rightXB);
                    this.boundingBox.width += diff; 
                    if(this.boundingBox.width >= this.boundingBox.maxWidth)
                    {
                        this.boundingBox.xPos += diff;
                    }
                }
            }
            this.boundingBox.width = min(this.boundingBox.maxWidth, this.boundingBox.width);
        }else{
            this.boundingBox.xPos = this.xPos;
        }
        this.boundingBox.yPos = this.yPos;
    };

    this.toSetAfter = true;
    this.setAfter = function()
    {
        switch(this.type)
        {
            case "blocks":
                this.color = color(0, 90, 150, 90);

                var s = this.width / 4;
                this.height = s;
                this.draw = function() 
                {
                    noStroke();
                    strokeWeight(0.2);

                    var border = 3.5;
                    var x, y, w, h;

                    for(var i = 0; i < this.width; i += s)
                    {
                        x = this.xPos + i;
                        y = this.yPos;

                        fill(this.color);
                        rect(x, y, s, s);

                        stroke(0, 0, 10);
                        fill(0, 0, 10);
                        rect(x, y, s, border);
                        rect(x + s - border, y, border, s);
                        rect(x, y + s - border, s, border);
                        rect(x, y, border, s)
                    }
                };
                break;
        }
    };

    this.changedX = 0;
    this.update = (this.physics.movement === "dynamic") ? function()
    {   
        this.outerXVel = this.nextXVel || this.outerXVel;
        if(this.outerXVel === 0 && this.xSpeed !== 0)
        {
            this.outerXVel = ((random(0, 100) > 50) ? -this.xSpeed : this.xSpeed);
        }
        
        if(this.xPos <= levelInfo.xPos)
        {
            this.outerXVel = this.xSpeed;
        }
        else if(this.xPos >= levelInfo.xPos + levelInfo.width - this.width)
        {
            this.outerXVel = -this.xSpeed;
        }

        this.xPos += this.outerXVel;
        this.nextXVel = undefined;
        
        this.outerYVel = this.nextYVel || this.outerYVel;
        if(this.outerYVel === 0 && this.ySpeed !== 0)
        {
            this.outerYVel = ((random(0, 100) > 50) ? -this.ySpeed : this.ySpeed);
        }
        
        if(this.yPos <= levelInfo.yPos)
        {
            this.outerYVel = this.ySpeed;
        }
        else if(this.yPos >= levelInfo.yPos + levelInfo.width - this.width)
        {
            this.outerYVel = -this.ySpeed;
        }

        this.yPos += this.outerYVel;
        this.nextYVel = undefined;
        this.lastUpdate();
        this.lastXPos = this.xPos;
        this.lastYPos = this.yPos;
        this.lastOuterXVel = this.outerXVel;
        this.changedX--;
    } : this.update;

    this.onCollide = (this.physics.movement === "dynamic") ? function(object)
    {
        if(this.arrayName === object.arrayName || object.arrayName === "snow" || object.arrayName === "rain")
        {
            return;  
        }

        if(object.type === "block" && object.arrayName !== "crate" && (object.arrayName !== "backBlock"))
        {
            this.nextXVel = ((this.xPos > object.xPos) ? this.xSpeed : -this.xSpeed);
            this.nextYVel = ((this.yPos > object.yPos) ? this.ySpeed : -this.ySpeed);
            this.changedX = 20;
        }
        else if(object.physics.movement === "dynamic" || object.arrayName === "crate")
        {
            if(object.yPos + object.height < this.yPos + this.height * 0.3)
            {
                if(this.changedX <= 0 && this.outerXVel !== 0 && abs(object.xVel) < abs(this.outerXVel) && abs(object.xVel) < this.xSpeed)
                {
                    object.xPos += this.outerXVel;
                }
                if(this.outerYVel < 0)
                {
                    object.yVel = max(-1, object.yVel);
                    object.inAir = false;
                    object.yPos -= 2;
                }
                else if(this.outerYVel !== 0 && abs(object.yVel) <= abs(this.outerYVel) && abs(object.yVel) <= this.ySpeed)
                {
                    object.yVel = this.outerYVel;   
                }
            }
            this.xPos = this.lastXPos;
            this.yPos = this.lastYPos;
        }
    } : this.onCollide;
};
gameObjects.addObject("movingPlatform", createArray(MovingPlatform));

var Lava = function(xPos, yPos, width, height, colorValue, damage)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(175, 30, 40);
    this.color2 = color(130, 70, 80);
    this.physics.solidObject = false;
    /*Add padding to the boundingBox so it doesn't kill 
    you while your standing on an edge of a block */
    var padding = 0.1;
    var xPadding = this.width * padding;
    var yPadding = this.height * padding;
    var widthPadding = this.width * (1 - padding * 2);
    var heightPadding = this.height * (1 - padding * 2);
    this.boundingBox.xPos = this.xPos + xPadding;
    this.boundingBox.yPos = this.yPos + yPadding;
    this.boundingBox.width = widthPadding;
    this.boundingBox.height = heightPadding;

    this.type = "hazard";

    this.grid = [];
    this.setupGrid = function(cols, rows)
    {
        this.grid.length = 0;
        for(var col = 0; col < cols; col++)
        {
            this.grid.push([]);
            for(var row = 0; row < rows; row++)
            {
                this.grid[col].push(color(random(0, 200), random(0, 25), random(0, 25), random(100, 250)));
            }
        }
    };
    this.drawGrid = function()
    {
        var cellWidth = this.width / this.grid.length;
        var cellHeight = this.height / this.grid[0].length;
        for(var col = 0; col < this.grid.length; col++)
        {
            for(var row = 0; row < this.grid[col].length; row++)
            {
                fill(this.grid[col][row]);
                rect(this.xPos + col * cellWidth, this.yPos + row * cellHeight, cellWidth, cellHeight);
            }
        }
    };

    this.setupGrid(3, 3);

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
        this.drawGrid();
    };

    this.toSetAfter = true;
    this.setAfter = function()
    {
        this.fixturePlace = (this.arrayName + this.index);

        this.getPlace = cameraGrid.getPlace(this.boundingBox.xPos, this.boundingBox.yPos);
        
        lighting.fixtures[this.fixturePlace] = {
            xPos : this.xPos,
            yPos : this.yPos,
            range : 60,
            brightness : 100, //0-100
            centeredLighting : 100,
            state : this.physics.movement,
        };

        lighting.fixtures[this.fixturePlace].place = this.getPlace;
    };

    this.lastUpdate1 = this.update;
    this.update = function()
    {
        var fixture = lighting.fixtures[this.fixturePlace];
        if(this.physics.movement === "dynamic")
        {
            fixture.xPos = this.xPos;
            fixture.yPos = this.yPos;
            this.getPlace = cameraGrid.getPlace(this.boundingBox.xPos, this.boundingBox.yPos);
            fixture.place = this.getPlace;
        }

        this.update = this.lastUpdate1;
    };

    this.num = round(random(0, 1000));
    screenUtils.loadImage(this, true, "lava" + this.num);

    this.damage = damage || 0.1;
    this.onCollide = function(object)
    {
        if(object.type === "lifeform" && !object.lavaImmune)
        {
            object.takeDamage(this);
        }
    };
};
gameObjects.addObject("lava", createArray(Lava));

var MovingLava = function(xPos, yPos, width, height, colorValue, damage)
{
    Lava.call(this, xPos, yPos, width, height, colorValue);
    MovingPlatform.call(this, xPos, yPos, width, height, colorValue, "left", false);
    this.lastOnCollide = this.onCollide;
    this.imageName = "lava" + this.num;
    
    this.type = "hazard";
    
    this.physics.solidObject = true;

    this.damage = damage || 0.05;
    this.onCollide = function(object)
    {
        this.lastOnCollide(object);
        if(object.type === "lifeform")
        {
            object.takeDamage(this);
        }
    };
};
gameObjects.addObject("movingLava", createArray(MovingLava));

var Coin = function(xPos, yPos, diameter, colorValue, amt)
{
    Circle.call(this, xPos, yPos, diameter);
    this.color = colorValue || color(184, 194, 75, 200);
    this.amt = amt || 1;
    this.score = this.amt * 100;
    this.physics.solidObject = false;
    this.type = "item";
    
    this.rot = 0;
    this.rotVel = ((random(0, 100) >= 50) ? -0.75 : 0.75);
    this.maxRot = this.diameter;

    this.draw = function()
    {  
        //Shadow splash
        fill(0, 0, 0, 50);
        ellipse(this.xPos, this.yPos, this.rot * this.diameter * 1.3 / this.maxRot, this.diameter * 1.3);

        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.rot, this.diameter);

        //Show a value for abnormal amts
        if(this.amt !== 1 && !(this.arrayName === "hpCoin" && this.amt === 3))
        {
            fill(0, 0, 0, 100);
            textSize(12);       
            textAlign(CENTER, CENTER);
            text(this.amt, this.xPos, this.yPos);
        }
    };
    
    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();

        if(this.rot < -this.maxRot || this.rot > this.maxRot)
        {
            this.rotVel = -this.rotVel;
        }

        this.rot += this.rotVel;
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.coins += this.amt;
            object.score += this.score;
            sounds.mplaySound("coinSound.mp3");
            this.remove(); //Don't forget to delete the coin!
        }
    };
};
gameObjects.addObject("coin", createArray(Coin));

var HpCoin = function(xPos, yPos, diameter, colorValue, amt)
{
    Coin.call(this, xPos, yPos, diameter);

    this.color = colorValue || color(75, 194, 164 - 50);
    this.type = "item";
    this.amt = amt || 1;
    this.score = this.amt * 100;
    this.physics.solidObject = false;

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.hp += this.amt;
            object.hp = min(object.hp, object.maxHp);
            object.score += this.score;
            sounds.mplaySound("coinSound.mp3");
            this.remove(); //Don't forget to delete the hpCoin!
        }
    };
};
HpCoin.prototype = Object.create(Coin.prototype);
gameObjects.addObject("hpCoin", createArray(HpCoin));

var Ring = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    this.color = colorValue;
    this.type = "collision";

    this.angle = 0;
    this.bladeSpeed = round(random(3, 8)) * ((random(0, 100) > 50) ? 1  : -1) * 0.75;
    this.bladeColor = color(0, 100, 230);

    this.arcSize = this.diameter * 2 / 3;
    this.bladeRanges = [
        [0, 90],
        [90, 180],
        [180, 270],
        [270, 360]
    ];

    if(MODE === "pjs")
    {
        for(var i = 0; i < this.bladeRanges.length; i++)
        {
            this.bladeRanges[i][0] *= PI_MULT;
            this.bladeRanges[i][1] *= PI_MULT;
        }
    }

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
       
        pushMatrix();
        translate(this.xPos, this.yPos);
        rotate(this.angle);
        fill(this.bladeColor);
        arc(0, 0, this.arcSize, this.arcSize, this.bladeRanges[1][0], this.bladeRanges[1][1]);
        arc(0, 0, this.arcSize, this.arcSize, this.bladeRanges[3][0], this.bladeRanges[3][1]);
        popMatrix();
    };

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();
        this.angle += this.bladeSpeed;
    };
};
gameObjects.addObject("ring", createArray(Ring));

var Ground = function(xPos, yPos, width, height, colorValue, name)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue;
    this.grassColor = color(28, 156, 30);
    this.type = "block";

    this.snowflakes = 0;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        if(!this.noGrass)
        {
            noStroke();
            fill(this.grassColor);
            rect(this.xPos, this.yPos, this.width, this.height * 0.15);
        }

        fill(0, 0, 0, 50);
        triangle(this.xPos + this.width, this.yPos + this.height, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
    };

    screenUtils.loadImage(this, true, name);
};
gameObjects.addObject("ground", createArray(Ground));

var Dirt = function(xPos, yPos, width, height, colorValue)
{
    this.noGrass = true;
    this.arrayName = "dirt";
    Ground.call(this, xPos, yPos, width, height, colorValue);
};
gameObjects.addObject("dirt", createArray(Dirt));

var Block = function(xPos, yPos, width, height, colorValue)
{
    this.noGrass = true;
    this.arrayName = "block";
    Ground.call(this, xPos, yPos, width, height, colorValue, "block" + colorValue);
};
gameObjects.addObject("block", createArray(Block));

var ImageBlock = function(xPos, yPos, width, height, imageName)
{
    Rect.call(this, xPos, yPos, width, height);

    this.imageName = imageName;

    this.snowflakes = 0;

    this.draw = function()
    {
        try{
            image(loadedImages[this.imageName], this.xPos, this.yPos, this.width, this.height);
        }
        catch(e) { }
    };
};
gameObjects.addObject("imageBlock", createArray(ImageBlock));

var Ice = function(xPos, yPos, width, height, colorValue, slipFactor, override)
{
    if(!levelInfo.cold || override)
    {
        this.noGrass = true;
        this.arrayName = "ice";
        Ground.call(this, xPos, yPos, width, height, colorValue || color(33, 198, 207));

        this.triangular = true;

        this.draw = function()
        {
            fill(33, 198, 207);
            rect(this.xPos, this.yPos, this.width, this.height);
            fill(0, 0, 0, 70);
            triangle(this.xPos, this.yPos + this.height, 
                    this.xPos + this.width, this.yPos, 
                    this.yPos + this.height, this.xPos + this.width);
        };

        screenUtils.loadImage(this, true, "ice_actual" + (millis() * Math.random()).toFixed(5), undefined, undefined, undefined, 225);
    }else{
        Rect.call(this, xPos, yPos, width, height);
        this.color = colorValue || color(33, 198, 207);

        this.type = "block";
        this.imageName = "ice1";

        if(typeof storedImages[this.imageName] === "undefined")
        {
            this.xSize = this.width / 10;
            this.ySize = this.height / 10;
            this.layout = [
                "1111  1111",
                "1        1",
                "1 444444 1",
                "1 444444 1",
                "  44  44  ",
                "  44  44  ",
                "1 444444 1",
                "1 444444 1",
                "1        1",
                "1111  1111",
            ];

            this.draw = function()
            {  
                fill(this.color);
                rect(this.xPos, this.yPos, this.width, this.height);

                noStroke();
                for(var i = 0; i < this.layout.length; i++)
                {
                    for(var j = 0; j < this.layout[i].length; j++)
                    {
                        switch(this.layout[i][j])
                        {
                            case '0' :
                                fill(2, 22, 80);
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;

                            case '1' :
                                fill(2, 152, 182);
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;

                            case '2' :
                                fill(2, 122, 202);
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;

                            case '3' : 
                                fill(240, 240, 240);
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;

                            case '4' :
                                fill(32, 182, 212);
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;
                        }
                    }
                }
            };

            screenUtils.loadImage(this, true, this.imageName, undefined, undefined, undefined, 200);
        }

        this.draw = function()
        {
            image(storedImages[this.imageName], this.xPos, this.yPos, this.width, this.height);
        };
    }

    this.shapes = [];
    this.shapes.add = function(xPos, yPos, width, height, color, life)
    {
        this.push({
            xPos : xPos, 
            yPos : yPos,
            width : width,
            height : height,

            rotation : 0,
            rotateVel : 5 * random(-1, 1),

            xVel : random(-3, 3),
            yVel : random(2, 6),

            color : color,

            life : life || 100,
            gravity : 0.06,

            halfWidth : width / 2,
            halfHeight : height / 2,
        });
    };
    this.shapes.draw = function()
    {
        for(var i = this.length - 1; i >= 0; i--)
        {
            var shape = this[i];

            shape.xPos += shape.xVel;
            shape.yPos += shape.yVel;
            shape.rotation += shape.rotateVel;

            shape.yVel += shape.gravity;

            shape.life--;

            if(shape.life < 0)
            {
                this.splice(i, 1);
            }

            fill(shape.color);
            pushMatrix();
                translate(shape.xPos, shape.yPos);
                rotate(shape.rotation);
                rect(-shape.halfWidth, -shape.halfHeight, shape.width, shape.height);
            popMatrix();
        }
    };

    this.shatter = function(wl, hl, life)
    {
        if(this.shattered)
        {
            return;
        }

        sounds.mplaySound("quickBoom.wav");

        this.draw = function() 
        {
            this.shapes.draw();

            if(this.shapes.length <= 0)
            {
                this.remove();
            }
        };

        wl = wl || 3;
        hl = hl || 3;

        var shapeWidth = this.width / wl;
        var shapeHeight = this.width / hl;

        for(var i = 0; i < wl; i++)
        {
            for(var j = 0; j < hl; j++)
            {
                this.shapes.add(this.xPos + i * shapeWidth, this.yPos + i * shapeHeight, shapeWidth * random(0.5, 1), shapeHeight * random(0.5, 1), this.color, life);
            }
        }

        this.physics.solidObject = false;
        this.shattered = true;
    };

    this.slipFactor = slipFactor || -0.45;
    this.onCollide = function(object)
    {
        if(object.arrayName === "water" && levelInfo.cold)
        {
            object.temp -= 3;
            object.freezing = true;
        }
        else if(object.physics.movement === "dynamic")
        {
            if(object.friction !== undefined)
            {
                object.friction = this.slipFactor; //Make friction work against itself
            }
            
            if(object.setXAcl === undefined)
            {
                object.setXAcl = object.xAcl;
            }
            
            object.xAcl = object.setXAcl;

            //The restraining of trying to go the other way on ice
            if(abs(object.xVel) <= object.maxXVel * 0.6 && abs(object.xVel) > 0)
            {
                object.xAcl = object.setXAcl * 0.6;
            }
        }
    };
};
gameObjects.addObject("ice", createArray(Ice));

var DirtyBlock = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue;
    this.type = "block";

    this.physics.solidObject = false;

    this.imageName = "dirtyBlock";

    this.draw = function()
    {
        image(storedImages[this.imageName], this.xPos, this.yPos, this.width, this.height);
    };

    screenUtils.loadImage(this, true, "dirtyBlock" + "--", undefined, undefined, undefined, undefined, true);
    this.imageName = "dirtyBlock" + "--";

    this.intensity = 18;

    this.onCollide = function(object)
    {
        object.inAir = object.yPos + object.height < this.yPos + 3;

        object.yVel = max(-2, object.yVel);

        var v = (object.maxXVel + object.maxYVel) / 2 / this.intensity;

        object.xVel = constrain(object.xVel, -v, v);
        object.yVel = constrain(object.yVel, -v, v);
    };
};
gameObjects.addObject("dirtyBlock", createArray(DirtyBlock));

var SuperIce = function(xPos, yPos, width, height, colorValue, slipFactor)
{
    this.noGrass = true;
    this.arrayName = "superIce";
    Ground.call(this, xPos, yPos, width, height, colorValue || color(33, 158, 207));
    
    var w = this.width * (1 / 3);
    var h = this.height * (1 / 3);

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        for(var i = 0; i < this.width; i += w)
        {
            for(var j = 0; j < this.height; j += h)
            {
                fill(40, 80, 220, random(40, 150));
                rect(this.xPos + i, this.yPos + j, w, h);
            }
        }

        fill(0, 0, 0, 50);
        triangle(this.xPos + this.width, this.yPos + this.height, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
    };

    screenUtils.loadImage(this, true, "superIce" + random(0, 1).toFixed(2), undefined, undefined, undefined, 200);

    this.slipFactor = slipFactor || -0.75;
    this.onCollide = function(object)
    {
        if(object.arrayName === "water")
        {
            object.temp -= 3;
            object.freezing = true;
        }
        else if(object.physics.movement === "dynamic")
        {
            if(object.friction !== undefined)
            {
                object.friction = this.slipFactor; //Make friction work against itself
            }

            if(object.setXAcl === undefined)
            {
                object.setXAcl = object.xAcl;
            }
            
            //The restraining of trying to go the other way on ice
            if(abs(object.xVel) <= object.maxXVel * 0.35 && abs(object.xVel) > 0)
            {
                object.xAcl = object.setXAcl * 0.5;
            }else{
                object.xAcl = object.setXAcl * 2;
            }
        }
    };
};
gameObjects.addObject("superIce", createArray(SuperIce));

var FilterBlock = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 50, 124, 120);

    this.snowflakes = 0;

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, 5);

        fill(0, 0, 70, 100);
        triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
    };

    this.avoidCollision = function(object)
    {
        return (object.arrayName !== "player" && object.arrayName !== "xStar");
    };
};
gameObjects.addObject("filterBlock", createArray(FilterBlock));

var Ladder = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.physics.solidObject = false;
    this.type = "use";
    
    this.snowflakes = 0;

    this.color = colorValue || color(0, 0, 0);

    var lines = 4;

    this.draw = function()
    {
        stroke(red(this.color), green(this.color), blue(this.color), alpha(this.color));
        strokeWeight(1);
        var spacing = this.height / lines;
        for(var i = 0; i < lines; i++)
        {
           line(this.xPos, this.yPos + i * spacing, 
           this.xPos + this.width, this.yPos + i * spacing);
        }
        var spacing2 = spacing * 2;
        for(var i = 0; i < lines / 2; i++)
        {
            line(this.xPos, this.yPos + i * 2 * spacing, 
                 this.xPos, this.yPos + (i * 2 + 1) * spacing);
                 
            line(this.xPos + this.width - 1, this.yPos + (i * 2 - 1) * spacing + spacing * 2, 
                 this.xPos + this.width - 1, this.yPos + (i * 2) * spacing + spacing * 2);
        }
    };
    
    this.onCollide = function(object)
    {
        if(object.type === "lifeform")
        {
            object.onLadder = true;
            object.inAir = false;
        }
    };
    
    screenUtils.loadImage(this, true, "ladder", true);
};
gameObjects.addObject("ladder", createArray(Ladder));

var Spring = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 150, 80);
    this.boost = 10.15;
    this.xBoost = this.boost;
    this.yBoost = this.boost;
    this.type = "block";

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);
        fill(0, 0, 0, 50);
        rect(this.xPos + this.width * 0.15, this.yPos + this.height * 0.15, this.width * 0.65, this.height * 0.65);
        fill(0, 0, 0, 60);
        triangle(this.xPos, this.yPos + this.height, this.xPos + this.width, this.yPos, this.xPos + this.width, this.yPos + this.height);
    };

    screenUtils.loadImage(this, true, "spring");

    this.onCollide = function(object)
    {
        var padding = (object.xAcl || 1); //Padding, usually based on acceleration
        if(object.xPos + (object.radius || object.width) < this.xPos + (padding))
        {
            object.xVel = -this.xBoost;
        }
        else if(object.xPos > this.xPos + this.width - (padding))
        {
            object.xVel = this.xBoost;
        }

        padding = (object.yAcl || 0.25); //Padding, usually based on acceleration
        if(object.yPos + (object.radius || object.height) < this.yPos + (padding))
        {
            object.yVel = -this.yBoost;
        }
        if(object.yPos > this.yPos + this.height - (padding))
        {
            object.yVel = this.yBoost;
        }
    };
};
gameObjects.addObject("spring", createArray(Spring));

var Sign = function(xPos, yPos, width, height, colorValue, message, textColor, fontName)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(200, 150, 70);
    this.message = message || "This is a sign";
    this.textColor = textColor;
    this.physics.solidObject = false;
    this.type = "use";

    this.fontName = fontName;

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos + this.width * 0.4, this.yPos, this.width * 0.2, this.height);
        rect(this.xPos, this.yPos, this.width, this.height * 0.6);
        fill(0, 0, 0, 50);
        rect(this.xPos + this.width * 0.1, this.yPos + this.height * 0.1, this.width * 0.8, this.height * 0.4);

        stroke(0, 0, 0, 50);
        strokeWeight(2);
        line(this.xPos + this.width * 0.25, this.yPos + this.width * 0.25, this.xPos + this.width * 0.7, this.yPos + this.width * 0.25);
        line(this.xPos + this.width * 0.25, this.yPos + this.width * 0.35, this.xPos + this.width * 0.7, this.yPos + this.width * 0.35);
        noStroke();
    };
    screenUtils.loadImage(this, true, "sign" + this.color, true);
    
    this.lastDraw = this.draw;
    this.draw = function()
    {
        this.lastDraw();     
        if(this.active)
        {
            this.drawMessage();
        }
        this.active = false;
    };
    
    this.load = function()
    {
        this.textSize1 = (this.textSize || 10);
        this.startX = this.xPos + this.halfWidth + (this.adjustX || 0);
        this.startY = (this.yPos - this.halfHeight) + (this.adjustY || 0);
        this.split = ("").split(this.message).length;
        this.messageHeight = this.adjustH || split * (this.textSize1 * 2.6);
        this.messageWidth = this.adjustW || (this.message.length) * (this.textSize1 / 1.6);
        this.messageWidth2 = this.messageWidth * 0.9;
        this.messageHeight2 = this.messageHeight * 0.8;
        this.textRectX = this.startX - this.messageWidth / 2;
        this.textRectY = this.startY - this.messageHeight / 2;
        this.textRectX2 = this.startX - this.messageWidth2 / 2;
        this.textRectY2 = this.startY - this.messageHeight2 / 2;

        if(this.fontName !== undefined)
        {
            //Note  : There used to be a try catch block here but I removed it because it stalls the program
            this.font = createFont(this.fontName);
            this.fontName = undefined;
        }
    };

    this.sleep = 0;
    this.drawMessage = function()
    {
        this.sleep++;
        //Wait a sec to render the sign's message to reduce lag
        if(this.sleep < 5)
        {
            return;  
        }
        
        if(!this.messageScanned)
        {
            this.message = this.message.replace("/username", gameObjects.getObject("player").input(0).username);
            this.messageScanned = true;
        }

        textAlign(CENTER, CENTER);
        if(this.font !== undefined)
        {
            textFont(this.font);
        }
        textSize(this.textSize1);
        noStroke();
        fill(this.color);
        rect(this.textRectX, this.textRectY, this.messageWidth, this.messageHeight);
        fill(0, 0, 0, 50);
        rect(this.textRectX2, this.textRectY2, this.messageWidth2, this.messageHeight2);
        fill(this.textColor || 0);
        text(this.message, this.startX, this.startY);
        textAlign(NORMAL, NORMAL);
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            this.active = true;

            if(object.controls.down())
            {
                talkHandler.start({
                    "start" : {
                        message : this.message,
                        choices : {
                            "End" : {
                                message : "End",
                            },
                        },
                    },
                }, "start", "", true);
            }

            if(messageHandler.active)
            {
                object.xVel = 0;
            }
        }
    };
};
gameObjects.addObject("sign", createArray(Sign));

var Door = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.physics.solidObject = false;
    this.color = colorValue || color(28, 145, 37);
    this.goto = {};
    this.type = "use";
    
    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        fill(0, 0, 0, 30);
        rect(this.xPos + this.width * 0.1, this.yPos + this.height * 0.05, this.width * 0.8, this.height * 0.9);

        fill(this.color, this.color, this.color, 20);
        rect(this.xPos, this.yPos + this.halfHeight, this.width, this.halfHeight);

        fill(this.color, this.color, this.color, 30);
        var knobRaduis = this.width * 0.30;
        ellipse(this.xPos + this.width * 0.8, this.yPos + this.height * 0.5, knobRaduis, knobRaduis);
    };

    screenUtils.loadImage(this, true, "door" + this.color);

    var self = this;

    this.particles = [];
    this.emitter = {
        add : function()
        {
            self.particles.push({
                xPos : self.middleXPos,
                yPos : self.middleYPos,
                radius : round(random(2, 7)),
                life : 100,
                maxLife : 100,
                xVel : round(random(-2, 2)),
                yVel : round(random(-2, 2)),
                color : ((random(0, 1) < 0.35) ? color(0, 170, 126) : color(0, 50, 200)),
                angle : 0,
                angleVel : random(-this.angleVel, this.angleVel),
                angleSpeed : 5,
            });
        },
        start : function(amt)
        {
            this.amt = amt;
            this.angleVel = TWO_PI / 30;
            for(var i = 0; i < amt; i++)
            {
                this.add();
            }
        },
        update : function()
        {
            for(var i = self.particles.length - 1; i >= 0; i--)
            {
                var p = self.particles[i];

                p.angle += p.angleVel;

                p.xPos += cos(p.angle) * p.angleSpeed;
                p.yPos += sin(p.angle) * p.angleSpeed;

                p.life -= 0.5;

                if(p.life <= 0)
                {
                    self.particles.splice(i, 1);
                    if(self.particles.length < this.amt)
                    {
                        this.add();
                    }
                }
            }
        },
        draw : function()
        {
            for(var i = self.particles.length - 1; i >= 0; i--)
            {
                var p = self.particles[i];

                fill(red(p.color), green(p.color), blue(p.color), p.life * alpha(p.color) / p.maxLife);
                ellipse(p.xPos, p.yPos, p.radius, p.radius);
            }
        },
    };

    this.lastDraw = this.draw;
    this.draw = function()
    {
        if(!this.magic)
        {
            this.lastDraw();
        }
        else if(!this.goto.locked)
        {
            this.emitter.draw();
        }

        if(this.goto.locked)
        {
            if(this.magic)
            {
                return;
            }

            noStroke();
            fill(0, 0, 0, 120);
            rect(this.xPos, this.yPos, this.width, this.height);
        }

        fill(0, 0, 0, 30);
        textAlign(CENTER, CENTER);
        textSize(30);
        text(this.symbol, this.xPos + this.width * 0.5, this.yPos + this.height * 0.4);
    };

    this.update = function()
    {
        if(this.magic && !this.goto.locked)
        {
            if(!this.emitter.started)
            {
                physics.getMiddleXPos(this);
                physics.getMiddleYPos(this);

                this.emitter.start(100);
                this.emitter.started = true;
            }

            this.emitter.update();
            return;
        }
    };

    this.onCollide = function(object)
    {
        if(object.openDoor !== undefined && object.openDoor())
        {
            if(object.goto.keysHolding !== undefined)
            {
                if(object.goto.keysHolding[levelInfo.level + this.symbol])
                {
                    this.goto.locked = false;
                    object.goto.keysHolding[levelInfo.level + this.symbol] = undefined;
                }
            }

            if(game.usedDoors === undefined)
            {
                game.usedDoors = {};
            }

            if(!this.goto.locked)
            {
                object.save = true;
                object.goto.doorSymbol = this.goto.symbol;
                object.goto.travelType = "door";

                loader.startLoadLevel(this.goto.level, "door", this.index);
                talkHandler.end();

                sounds.playSound("dooropen.mp3");

                if(levels[this.goto.level] !== undefined)
                {
                    levels[this.goto.level].doors[this.goto.symbol].locked = false; // Make sure we're not locked out of the door we go through

                    //Save the door we opened
                    game.usedDoors[this.goto.level + this.goto.symbol] = {
                        symbol : this.goto.symbol,
                        level : this.goto.level,
                        locked : false,
                    };
                }

                game.usedDoors[levelInfo.level + this.symbol] = {
                    symbol : this.symbol,
                    level : levelInfo.level,
                    locked : this.goto.locked,
                };
            }
            else if(!messageHandler.active && !this.magic)
            {
                object.xVel = 0;
                object.yVel = 0;
                keys[keyCode] = false;
                talkHandler.start({
                    "locked" : {
                        message : "It's locked!",
                        choices : {
                            "Ok" : {
                                message : "Okay",
                            },
                        },
                    },
                    "Open" : {
                        message : "It won't open.",
                        choices : {
                            "Ok" : {
                                message : "Okay",
                            },
                        },
                    }
                }, this.setMessage || "locked", "", true);
            }
        }
    };
};
gameObjects.addObject("door", createArray(Door));

var Crate = function(xPos, yPos, width, height, colorValue, noBreak)
{
    DynamicRect.call(this, xPos, yPos, width, height, colorValue || color(190, 160, 84, 255)); 
   
    this.breakPercent = 0;
    this.breakRate = 0.3;
    this.xDeacl = 0.25; //Turn this up for less glitches
    this.type = "block";
    this.noBreak = noBreak;
    this.broken = false;
    this.autoXDeacl = true;

    this.mass = 3;
    this.maxXVel = 3.5;

    this.addDrops = function()
    {
        for(var i = 0; i < round(random(1, 4)); i++)
        {
            var item = (random(0, 100) <= 60) ? "coin" : "hpCoin";
            var array = gameObjects.getObject(item);
            array.add(this.xPos - round(random(-this.width * 0.4, this.width * 0.4)),
            this.yPos - round(random(-this.height * 0.4, this.height * 0.4)), this.halfWidth);  
            cameraGrid.addReference(array.getLast());
        }
    };
    
    this.break = function()
    {
        this.remove();
        if(!this.droppedItems)
        {
            this.addDrops();
            this.droppedItems = true;
        }
    };
    
    this.draw = function()
    {
        noStroke();
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        fill(this.color, this.color, this.color, 20);
        rect(this.xPos + this.width * 0.15, this.yPos + this.height * 0.15, this.width * 0.7, this.height * 0.7);

        fill(0, 0, 0, 50);
        triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos, this.xPos, this.yPos + this.height);
        
        if(this.noBreak)
        {
            fill(0, 0, 0, 50);
            triangle(this.xPos, this.yPos, this.xPos + this.width, this.yPos + this.height, this.xPos, this.yPos + this.height); 
        }
    };
 
    this.lastDraw = this.draw;
 
    screenUtils.loadImage(this, true, "crate" + this.noBreak);

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();
        
        if(!this.noBreak)
        {
            if(this.broken || this.breakPercent >= 70)
            {
                this.color = color(red(this.color), green(this.color), blue(this.color), alpha(this.color) - 5);  
                this.changeDraw = true;
            }
            
            if(this.breakPercent >= 100)
            {
                this.broken = true;  
            }
            
            if(alpha(this.color) < 30)
            {
                this.break();
            }
            
            if(this.changeDraw && !this.changedDraw)
            {
                this.draw = this.lastDraw;
                this.changedDraw = true;  
            }
        }
        this.lastYVel = this.yVel;
    };
    
    this.onCollide = function(object, info)
    {
        if(this.noBreak)
        {
            return;
        }

        if(object.type === "block")
        {
            if(this.lastYVel >= this.maxYVel * 0.9)
            {
                this.broken = true;
            }
            if(abs(this.lastXPos - this.xPos) >= this.maxXVel * 0.9)
            {
                this.breakPercent += this.breakRate;
            }
        }
        else if(object.physics.movement === "dynamic" && abs(this.xVel) >= this.maxXVel * 0.3 && object.arrayName !== this.arrayName)
        {
            this.breakPercent += this.breakRate;
        }
    };
};
gameObjects.addObject("crate", createArray(Crate));

var Key = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.physics.solidObject = false;
    this.color = colorValue || color(180, 170, 30);
    this.goto = {};
    this.type = "item";

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos;
        this.boundingBox.yPos = this.yPos;
    };

    this.draw = function()
    {
        shapes.key(this.xPos, this.yPos, this.width, this.height);
    };
    
    screenUtils.loadImage(this, true, "key", true);

    this.lastDraw = this.draw;
    this.draw = function()
    {
        if(this.goto.hidden)
        {
            return;
        }

        this.lastDraw();
        
        if(this.msgWidth === undefined)
        {
            this.msg = "Key " + this.goto.level + " " + this.goto.symbol;
            textSize(11);
            this.msgWidth = textWidth(this.msg) * 1.2;
            this.lastMsgWidth = this.msgWidth;
        }

        fill(0, 0, 0, 100);
        rect(this.xPos + this.halfWidth - this.msgWidth / 2, this.yPos - this.height * 0.75, this.msgWidth, this.halfHeight, 5);
        fill(200, 200, 200, 170);
        textAlign(CENTER, CENTER);
        textSize(11);
        text(this.msg, this.xPos + this.halfWidth, this.yPos - this.halfHeight);
    };
    
    this.lastUpdate = this.update;
    this.update = function()
    {
        if(this.goto.hidden)
        {
            return;
        }

        this.lastUpdate();

        //Remove if the player already has the key
        if(!this.checked)
        {
            var object = gameObjects.getObject("player").input(0);
            if(object.goto.keysHolding !== undefined &&
            object.goto.keysHolding[this.goto.level + this.goto.symbol] !== undefined &&
            object.goto.keysHolding[this.goto.level + this.goto.symbol].collected)
            {
                this.remove();
            }
            this.checked = true;
        }
    };

    this.onCollide = function(object)
    {
        if(this.goto.hidden)
        {
            return;
        }

        if(object.collectItem !== undefined && object.collectItem())
        {
            sounds.mplaySound("coin.mp3");
            if(object.goto.keysHolding === undefined)
            {
                object.goto.keysHolding = {};
            }
            object.goto.keysHolding[this.goto.level + this.goto.symbol] = this.goto;
            this.goto.collected = true;
            this.remove();
        }
    };
};
gameObjects.addObject("key", createArray(Key));

var CheckPoint = function(xPos, yPos, width, height, colorValue, invisible)
{
    Rect.call(this, xPos, yPos, width, height);
    this.physics.solidObject = false;
    this.green = color(28, 156, 30);
    this.color = colorValue || color(200, 0, 0);
    this.type = "use";
    this.xDiv = this.width * 0.2;
    this.xOff = this.width * 0.13;
    this.flagX2 = this.xOff + this.xDiv;
    this.flagRightX2 = this.width * 0.7 + this.xDiv;
    this.midY = this.yPos + this.height / 4;
    this.bottomY = this.yPos + this.halfHeight;
    this.invisible = invisible;
    
    this.message = "";
    this.timer = 0;
    this.maxTimer = 100;

    this.loadImg = function(colorValue)
    {
        var img = createGraphics(0, 0, P2D);
        img.noStroke();
        img.beginDraw();
        img.background(0, 0, 0, 0);
        img.fill(colorValue);
        img.triangle(this.flagX2, 0, this.flagX2, this.halfHeight, this.flagRightX2, this.height / 4);
        img.fill(0, 0, 0, 50);
        img.rect(this.xDiv, 0, this.xOff, this.height);
        img.endDraw();
        return img;
    };
    
    this.draw = function()
    {
        if(storedImages.redFlag === undefined)
        {
            storedImages.redFlag = this.loadImg(color(200, 0, 0));
        }
        if(storedImages.flag === undefined)
        {
            storedImages.flag = this.loadImg(this.green || this.color);
        }
        
        this.draw = function()
        {
            if(this.invisible)
            {
                return;  
            }
            if(this.color !== color(200, 0, 0))
            {
                image(storedImages.flag, this.xPos, this.yPos);
            }else{
                image(storedImages.redFlag, this.xPos, this.yPos);
            }

            if(this.timer <= 0)
            {
                this.message = "";
            }else{
                if(!screenUtils.debugMenuWhite)
                {
                    fill(40, 40, 40, this.timer * 255 / this.maxTimer);
                }else{
                    fill(255, 255, 255, this.timer * 255 / this.maxTimer);
                }

                textAlign(CENTER, CENTER);
                textSize(12);
                text(this.message, this.xPos + this.halfWidth, this.yPos - this.height * 1.5);
            }

            this.timer--;
        };
    };
    
    if(this.goto === undefined)
    {
        this.goto = {};
    }

    this.setObjectProps = function(object)
    {   
        object.save = true;
        object.goto.checkPointLevel = this.goto.level || levelInfo.level;
        object.goto.checkPointIndex = this.index;

        //Don't save if we're not in the play state!
        if(game.gameState === "play")
        {
            if((!this.checked || object.overrideSave !== undefined && object.overrideSave()) && object.onCheckPoint !== undefined)
            {
                object.onCheckPoint(this);
                this.message = "Game saved";
                this.timer = this.maxTimer;
            }

            this.checked = true;
            this.color = this.green;
        }
    };
    
    this.onCollide = function(object)
    {
        if(!this.invisible && object.useCheckPoint !== undefined && object.useCheckPoint())
        {
            this.setObjectProps(object);
        }
    };
};
gameObjects.addObject("checkPoint", createArray(CheckPoint));

var Chest = function(xPos, yPos, width, height)
{
    Rect.call(this, xPos, yPos, width, height);

    this.img = "chest";
   
    this.physics.solidObject = false;

    this.goto = {};

    var eX, eY, pX, pY;

    this.draw = function()
    {
        if(this.goto.hidden)
        {
            var mTime = millis() - this.goto.unHideTimer;

            if(this.goto.unHideTime && (mTime < this.goto.unHideTime))
            {
                eX = mTime * width / this.goto.unHideTime;
                eY = mTime * height / this.goto.unHideTime;
                pX = this.xPos - eX / 2 + this.halfWidth;
                pY = this.yPos - eY / 2 + this.halfHeight;

                fill(0, 0, 0, 50);
                rect(pX, this.yPos - eY * 10, eX, eY * 20, 10);
                rect(this.xPos - eX * 10, pY, eX * 20, eY, 10);

                image(storedImages[this.img], pX, pY, eX, eY);

                fill(0, 0, 0, 60);
                rect(this.xPos + random(-this.halfWidth, this.halfWidth) + this.halfWidth, this.yPos + random(-this.halfHeight, this.halfHeight) + this.halfHeight, this.width * 0.2, this.height * 0.2);
            }

            return;
        }

        fill(0, 0, 0, 50);
        rect(pX, this.yPos - eY * 10, eX, eY * 20, 10);
        rect(this.xPos - eX * 10, pY, eX * 20, eY, 10);

        this.img = (this.goto.isOpen) ? "chest-open" : "chest";
        image(storedImages[this.img], this.xPos, this.yPos, this.width, this.height);

        fill(0, 0, 0, 50);
        rect(this.xPos, this.yPos, this.width, this.height);
    };


    this.lastUpdate = this.update;
    this.update = function()
    {
        if(this.goto.unHideTime && (millis() - this.goto.unHideTimer >= this.goto.unHideTime))
        {
            this.goto.hidden = false;
        }

        if(this.goto.hidden)
        {
            return;
        }

        this.lastUpdate();

        //Regeneration logic.
        if(!this.set)
        {
            if(this.goto.regen)
            {
                this.goto.isOpen = false;

                for(var i = 0; i < this.drops.length; i++)
                {
                    this.drops[i].col1 = false;
                }
            }
            else if(this.goto.save)
            {
                var k = 0;
                this.drops.forEach(function(element) 
                {
                    if(element.col1)
                    {
                        k++;
                    }
                });

                if(k < this.drops.length)
                {
                    this.goto.isOpen = false;
                }
            };

            this.set = true;
        }
    };

    this.dispenseDrop = function(drop)
    {
        for(var j = 0; j < (drop.amt || 1); j++)
        {
            var array = gameObjects.getObject(drop.contains || drop.name);
            if(array.add !== undefined)
            {
                array.add(this.xPos + random(-this.halfWidth, this.halfHeight) + (drop.offX || 0), 
                this.yPos - this.height * 1.2 + (drop.offY || 0), 
                levelInfo.unitWidth / 2 * (drop.scale || 1), 
                levelInfo.unitHeight / 2 * (drop.scale || 1));

                if(array.getLast().physics.shape === "circle")
                {
                    array.pop();
                    var coinAmt = (drop.props || {}).coinAmt;
                    array.add(this.xPos + (drop.xPos || random(-this.halfWidth, this.halfWidth)),
                    this.yPos + (drop.yPos || (random(-this.halfHeight, this.halfHeight) - this.height * 2)), drop.diameter || (levelInfo.unitWidth / 2 * ((coinAmt / 35) || 1)), undefined, coinAmt);
                }

                var object = array.getLast();
                object.lastRemove1 = object.remove;
                object.remove = function()
                {
                    this.lastRemove1();
                    drop.col1 = true;
                };

                cameraGrid.addReference(array.getLast());
            }
        }
    };

    this.dispense = function()
    {
        for(var i = 0; i < this.drops.length; i++)
        {
            if(this.drops[i].total && !this.drops[i].col1)
            {
                this.dispenseDrop(this.drops[i]);
            }
        }
    };

    this.onCollide = function(object)
    {
        if(this.goto.hidden)
        {
            return;
        }

        if(object.openChest !== undefined && object.openChest() && (!this.goto.isOpen || (!this.opened && this.goto.regen)))
        {
            this.goto.isOpen = true;
            this.opened = true;
            this.dispense();
        }
    };
};
gameObjects.addObject("chest", createArray(Chest));

var ItemChest = function(xPos, yPos, width, height)
{
    Rect.call(this, xPos, yPos, width, height);

    this.img = "itemChest";
    this.isOpen = false;

    this.physics.solidObject = false;

    this.goto = {
        items : [],
    };

    this.maxItems = 10;

    var eX, eY, pX, pY;

    this.draw = function()
    {
        if(this.goto.hidden)
        {
            var mTime = millis() - this.goto.unHideTimer;

            if(this.goto.unHideTime && (mTime < this.goto.unHideTime))
            {
                eX = mTime * width / this.goto.unHideTime;
                eY = mTime * height / this.goto.unHideTime;
                pX = this.xPos - eX / 2 + this.halfWidth;
                pY = this.yPos - eY / 2 + this.halfHeight;

                fill(0, 0, 0, 50);
                rect(pX, this.yPos - eY * 10, eX, eY * 20, 10);
                rect(this.xPos - eX * 10, pY, eX * 20, eY, 10);

                image(storedImages[this.img], pX, pY, eX, eY);

                fill(0, 0, 0, 60);
                rect(this.xPos + random(-this.halfWidth, this.halfWidth) + this.halfWidth, this.yPos + random(-this.halfHeight, this.halfHeight) + this.halfHeight, this.width * 0.2, this.height * 0.2);
            }

            return;
        }

        this.img = (this.goto.isOpen) ? "itemChest-open" : "itemChest";
        image(storedImages[this.img], this.xPos, this.yPos, this.width, this.height);
    };

    var self = this;

    this.updateItemsOrder = function(scene)
    {
        for(var i = 0; i < self.goto.items.length; i++)
        {
            var item = self.goto.items[i];

            if(!item || !item.contains)
            {
                scene.buttons["slot_" + i] = new Button(186, 132 + i * 18, 140, 18, color(28, 28, 28, 100), " - ");
            }else{
                scene.buttons["slot_" + i] = new Button(186, 132 + i * 18, 140, 18, color(12, 60, 160, 100), " - ");
                scene.buttons["slot_" + i].message = self.goto.items[i].displayName || 
                (usableItems[self.goto.items[i].contains] ? 
                usableItems[self.goto.items[i].contains].displayName : false) || self.goto.items[i].contains;
            }
            scene.buttons["slot_" + i].textSize = 10;
            scene.buttons["slot_" + i].textColor = color(240, 240, 240, 200);
            scene.buttons["slot_" + i].hover = self.goto.items[i].description || 
                (usableItems[self.goto.items[i].contains] ? 
                usableItems[self.goto.items[i].contains].description : false) || 
                scene.buttons["slot_" + i].hover;

            if(scene.buttons["slot_" + i].message !== " - ")
            {
                scene.buttons["slot_" + i].extra = (self.goto.items[i].amount ? " x " + self.goto.items[i].amount : "");
            }else{
                delete scene.buttons["slot_" + i].extra;
            }
        }
    };

    this.onOpen = function(object)
    {
        inventoryMenu.open("chest", {
            init : function(scene)
            {
                scene.remoteMode = true;

                try{
                    object.onOpenItems(scene);
                }
                catch(e)
                {
                    console.log(e);
                }

                try{
                    //Create swapping buttons
                    for(var i = 0; i < min(object.inventory.slots, self.goto.items.length); i++)
                    {
                        scene.buttons["swap_" + i] = new Button(150, 132 + i * 18, 36, 18, color(28, 180, 48, 100), "< >");
                        scene.buttons["swap_" + i].textSize = 10;

                        scene.buttons["swap_" + i].lastHitTime = millis();

                        scene.buttons["swap_" + i].index = i;
                        scene.buttons["swap_" + i].onClick = function(override, override2)
                        {
                            if(!override2)
                            {
                                if(!mouseIsPressed)
                                {
                                    this.lastHitTime = 0;
                                    return;
                                }

                                if(millis() - this.lastHitTime < 1000)
                                {
                                    return;
                                }
                            }

                            var i = this.index;
                            var temp = object.inventory.items[i];
                            object.inventory.items[i] = self.goto.items[i];
                            self.goto.items[i] = temp;

                            var player_btn = scene.buttons["player_" + i];
                            var slot_btn = scene.buttons["slot_" + i];

                            var player_item = object.inventory.items[i];
                            var slot_item = self.goto.items[i];

                            player_btn.message = object.inventory.items[i].displayName || object.inventory.items[i].contains || " - ";
                            slot_btn.message = self.goto.items[i].displayName || self.goto.items[i].contains || " - ";

                            if(player_btn.message !== " - ")
                            {
                                player_btn.extra = (player_item.amount ? " x " + player_item.amount : "")
                            }else{
                                delete player_btn.extra;
                            }

                            if(slot_btn.message !== " - ")
                            {
                                slot_btn.extra = (slot_item.amount ? " x " + slot_item.amount : "");
                            }else{
                                delete slot_btn.extra;
                            }

                            player_btn.hover = object.inventory.items[i].description || player_btn.hover;
                            slot_btn.hover = self.goto.items[i].description || slot_btn.hover;

                            player_btn.firstColor = player_btn.color = (player_btn.message === " - ") ? color(28, 28, 28, 100) : color(12, 60, 160, 100);
                            slot_btn.firstColor = slot_btn.color = (slot_btn.message === " - ") ? color(28, 28, 28, 100) : color(12, 60, 160, 100);

                            player_btn.textSize = 10;
                            slot_btn.textSize = 10;

                            this.lastHitTime = millis();
                        };
                    }
                }
                catch(e)
                {
                    console.log(e);
                }

                self.updateItemsOrder(scene);

                scene.buttons["change_all"] = new Button(150, 312, 36, 18, color(28, 180, 48, 100), "< >", undefined, 11);
                scene.buttons["change_all"].lastHitTime = 0;
                scene.buttons["change_all"].onClick = function()
                {
                    if(!mouseIsPressed)
                    {
                        this.lastHitTime = 0;
                        return;
                    }

                    if(millis() - this.lastHitTime < 300)
                    {
                        return;
                    }

                    for(var i = 0; i <  min(object.inventory.slots, self.goto.items.length); i++)
                    {
                        scene.buttons["swap_" + i].onClick(false, true);
                    }

                    this.lastHitTime = millis();
                };

                scene.buttons["slot_up"] = new Button(186, 312, 70, 18, color(28, 180, 48, 100), "^", undefined, 11);
                scene.buttons["slot_up"].lastHitTime = 0;
                scene.buttons["slot_up"].onClick = function()
                {
                    if(!mouseIsPressed)
                    {
                        this.lastHitTime = 0;
                        return;
                    }

                    if(millis() - this.lastHitTime < 140)
                    {
                        return;
                    }

                    self.goto.items.push(self.goto.items.shift());
                    self.updateItemsOrder(scene);

                    this.lastHitTime = millis();
                };

                scene.buttons["slot_down"] = new Button(256, 312, 70, 18, color(28, 180, 48, 100), "v", undefined, 11);
                scene.buttons["slot_down"].lastHitTime = 0;
                scene.buttons["slot_down"].onClick = function()
                {
                    if(!mouseIsPressed)
                    {
                        this.lastHitTime = 0;
                        return;
                    }

                    if(millis() - this.lastHitTime < 140)
                    {
                        return;
                    }

                    self.goto.items.unshift(self.goto.items.pop());
                    self.updateItemsOrder(scene);

                    this.lastHitTime = millis();
                };
            },
            close : function()
            {     
                if(object.openChest(true) || keys.e)
                {
                    self.goto.isOpen = false;
                    inventoryMenu.scenes[inventoryMenu.scene].remoteMode = false;

                    return ["chest", function()
                    {
                        game.switchGameState(true, "play", true); 
                    }];
                }
            },
        });
        game.switchGameState(true, "inventoryMenu", true); 
    };

    this.lastToggleTime = 0;

    var _lastUpdate = this.update;
    this.update = function()
    {
        if(this.goto.unHideTime && (millis() - this.goto.unHideTimer >= this.goto.unHideTime))
        {
            this.goto.hidden = false;
        }

        this.goto.items.length = min(this.goto.items.length, this.maxItems);

        return _lastUpdate.apply(this, arguments);
    };

    this.onCollide = function(object)
    {
        if(this.goto.hidden)
        {
            return;
        }

        if(!keyIsPressed)
        {
            this.lastToggleTime = 0;
        }

        if(object.openChest !== undefined && object.openChest() && millis() - this.lastToggleTime > 500)
        {
            object.xVel = 0;
            object.yVel = 0;

            if(!this.goto.isOpen)
            {
                this.goto.isOpen = true;
                this.onOpen(object);
            }else{
                this.goto.isOpen = false;
            }

            this.lastToggleTime = millis();
        } 
    };
};
gameObjects.addObject("itemChest", createArray(ItemChest));

//Cloud mines, they hide in the clouds
var CloudMine = function(xPos, yPos, diameter)
{
    Circle.call(this, xPos, yPos, diameter);

    this.damage = 3.5;
    this.activated = false;
    this.timer = 1;

    this.ex = {
        diameter : this.diameter * 1,
    };
    this.color = color(255, 255, 255, 100);

    this.lastDiameter = this.diameter;
    this.maxDiameter = this.lastDiameter * 3.5;

    this.physics.movement = "dynamic";

    this.idInput = round(random(0, 100));

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos - this.radius;
        this.boundingBox.yPos = this.yPos - this.radius;
        this.boundingBox.width = this.diameter;
        this.boundingBox.height = this.diameter;
    };

    var self = this;
    var particles = [];
    particles.create = function(amt, gravity)
    {
        this.gravity = gravity;
        for(var i = 0; i < amt; i++)
        {
            this.push({
                xPos : self.xPos,
                yPos : self.yPos,
                yVel : round(random(-5, 5)),
                xVel : round(random(-5, 5)), 
                diameter : random(2, 7),
                color : color(0, random(100, 200), 0, random(50, 150)),
            });
        }
    };
    particles.update = function(selfRadius, bounce)
    {
        for(var i = 0; i < this.length; i++)
        {
            this[i].yVel += this.gravity;
            this[i].xPos += this[i].xVel;
            this[i].yPos += this[i].yVel;

            if(bounce && !this[i].out && dist(this[i].xPos, this[i].yPos, self.xPos, self.yPos) >= selfRadius - this[i].diameter / 2)
            {
                this[i].xVel = -this[i].xVel;
                this[i].yVel = -this[i].yVel;
                this[i].out = true;
            }else{
                this[i].out = false;
            }
        }
    };
    particles.draw = function()
    {
        for(var i = 0; i < this.length; i++)
        {
            fill(this[i].color);
            ellipse(this[i].xPos, this[i].yPos, this[i].diameter, this[i].diameter);
        }
    };

    this.particles = particles;
    this.particles.create(random(25, 125), 0.3);

    this.explode = function()
    {
        //The explosion rendering code
        fill(200, 0, 0, 100);
        ellipse(this.xPos, this.yPos, this.ex.diameter, this.ex.diameter);

        noStroke();
        fill(200, 0, 0, 100);
        ellipse(this.xPos, this.yPos, this.ex.diameter * 0.7, this.ex.diameter * 0.7);

        fill(200, 210, 0, 100);
        ellipse(this.xPos, this.yPos, this.ex.diameter * 0.2, this.ex.diameter * 0.2);

        if(this.ex.diameter < this.maxDiameter)
        {
            this.ex.diameter += 6;
        }
    };

    this.toSetAfter = true;
    this.setAfter = function()
    {
        this.fixturePlace = (this.arrayName + this.index);

        this.getPlace = cameraGrid.getPlace(this.boundingBox.xPos, this.boundingBox.yPos);
        
        lighting.fixtures[this.fixturePlace] = {
            xPos : this.xPos,
            yPos : this.yPos,
            range : 110,
            brightness : 60, //0-100
            centeredLighting : 90,
            state : this.physics.movement,
        };

        lighting.fixtures[this.fixturePlace].place = this.getPlace;
    };

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();
        if(this.inWater)
        {
            return;
        }

        if(this.activated)
        {
            this.timer--;
            if(!this.blasted)
            {
                sounds.mplaySound("explosion.mp3");
                this.blasted = true;
            }
        }

        if(this.timer < 0)
        {
            this.diameter = this.ex.diameter;
            this.radius = this.diameter / 2;
            this.physics.solidObject = false;
            this.physics.movement = "dynamic";
            this.updateBoundingBox();
        }

        if(this.timer < -120)
        {
            this.remove();
        } 

        if(this.ex.diameter > this.lastDiameter * 1.5)
        {
            this.particles.update(this.ex.diameter / 2, this.ex.diameter < this.maxDiameter);
        }
    };

    this.lastDraw = this.draw;
    this.draw = function()
    {
        if(this.timer >= 0)
        {
            this.lastDraw();
        }

        if(this.timer < 0 && this.ex.diameter < this.maxDiameter)
        {
            this.explode();
        }
        if(this.timer < 0)
        {
            particles.draw(); 
        } 

        this.silentTimer--;
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "water" && this.diameter <= this.lastDiameter)
        {
            this.timer = 0;
            this.activated = false;
            this.physics.solidObject = true;
            this.physics.movement = "static";
            this.inWater = true;
            this.onCollide = function() {};
        }
        else if(!this.activated)
        {
            this.physics.movement = "static";
        }

        if(object.type === "block" && object.arrayName !== "block" &&
           object.arrayName !== "oneWay" && object.arrayName !== "movingPlatform" && 
           object.arrayName !== "cloud" && object.arrayName !== "crate" && object.arrayName !== "hardCaseBlock" && !object.explosive)
        {
            object.remove();
        }
        else if(object.arrayName === this.arrayName)
        {
            if(this.timer < -17.5)
            {
                object.activated = true;
            }
        }
        else if((object.type === "lifeform" && object.arrayName !== "waterBeaker") || object.explosive)
        {
            this.activated = true;
            if(object.physics.shape === "rect" && this.ex.diameter < this.maxDiameter)
            {
                this.inputAngle = atan2((object.yPos + object.halfHeight) - this.yPos, (object.xPos + object.halfWidth) - this.xPos);
                if(this.inputAngle !== undefined)
                {
                    object.xVel += cos(this.inputAngle) * 4;
                    object.yVel += sin(this.inputAngle) * 4;
                }
            }
            if(!object["damagedByMine" + this.idInput] && this.ex.diameter < this.maxDiameter)
            {
                if(object.takeDamage !== undefined)
                {
                    object.takeDamage(this);
                }else{
                    object.hp -= this.damage;
                }
                object["damagedByMine" + this.idInput] = true;
            }

            if(object.arrayName === "crate")
            {
                object.remove();
            }
        }
        else if(object.arrayName === "waterBeaker")
        {
            object.xDir = (object.xDir === "left") ? "right" : "left";
        }
    };
};
gameObjects.addObject("cloudMine", createArray(CloudMine));

var addParticleRules = function(object)
{
    object.physics.solidObject = false;
    object.physics.shape = "point";
    object.boundingBox = {};
    object.boundingBox.off = true;
    object.physics.movement = "dynamic";
};

var Spike = function(xPos, yPos, width, height, colorValue, upSideDown)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(155, 155, 155);
    this.physics.solidObject = false;

    var slopes = gameObjects.getObject("slope");
    var halfWidth = this.halfWidth;
    var fourthWidth = this.width / 4;
    var halfHeight = this.halfHeight;

    this.slopes = [];
    this.rects = [];

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos;
        this.boundingBox.yPos = this.yPos;
    };

    if(!upSideDown)
    {
        slopes.add(this.xPos, this.yPos + 1, halfWidth, this.height, this.color);
        slopes.getLast().direction = "rightup";
        slopes.getLast().fromSpike = true;
        this.slopes.push(slopes.length - 1);

        slopes.add(this.xPos + halfWidth, this.yPos + 1, halfWidth, this.height, this.color);
        slopes.getLast().direction = "leftup";
        slopes.getLast().fromSpike = true;
        this.slopes.push(slopes.length - 1);

        var rects = gameObjects.getObject("rect");
        this.rects.push(rects.add(this.xPos, this.yPos + this.height, this.width, 5));
        rects.getLast().color = this.color;
    }else{
        slopes.add(this.xPos, this.yPos, halfWidth, this.height - 1, this.color).draw = function() {};
        slopes.getLast().direction = "rightdown";
        this.slopes.push(slopes.length - 1);

        slopes.add(this.xPos + fourthWidth, this.yPos, fourthWidth, halfHeight, this.color).draw = function() {};
        slopes.getLast().direction = "rightdown";
        this.slopes.push(slopes.length - 1);

        slopes.add(this.xPos + halfWidth, this.yPos, halfWidth, this.height - 1, this.color).draw = function() {};
        slopes.getLast().direction = "leftdown";
        this.slopes.push(slopes.length - 1);

        slopes.add(this.xPos + halfWidth, this.yPos, fourthWidth, halfHeight, this.color).draw = function() {};
        slopes.getLast().direction = "leftdown";
        this.slopes.push(slopes.length - 1);
    }

    this.pOffset = floor(random(-30, 20));

    this.hp = 70;
    this.maxHp = 70;


    this.shakePos = 0;
    this.shakeVel = 2;

    this.shake = function()
    {
        if(abs(this.shakePos) > 3.5)
        {
            this.shakeVel = -this.shakeVel;
        }

        this.shakePos += this.shakeVel;
    };

    this.draw = ((upSideDown) ? function()
    {
        fill(red(this.color), green(this.color), blue(this.color), this.hp * 255 / this.maxHp);
        triangle(this.xPos + this.halfWidth + this.shakePos, this.yPos + this.height, this.xPos + this.shakePos, 
                 this.yPos, this.xPos + this.width + this.shakePos, this.yPos);

        if(!this.winter)
        {
            fill(70, 200, 80, 120 + this.pOffset);
            rect(this.xPos + 5, yPos, this.width - 10, this.yPos - yPos);
        }
    }
    : function()
    {
        fill(this.color);
        triangle(this.xPos + this.halfWidth, this.yPos, this.xPos, this.yPos + this.height, this.xPos + this.width, this.yPos + this.height);
    });

    this.damage = 1.5;

    this.updatePoint = function()
    {
        this.point = {
            physics : {
                shape : "point",
            },
            xPos : this.xPos + this.halfWidth,
            yPos : this.yPos + ((upSideDown) ? this.height : 0),
        };
    };

    this.updatePoint();

    var lastRemove = this.remove;
    this.remove = function()
    {
        this.move(this.xPos, -Infinity, true);

        return lastRemove.apply(this, arguments);
    };

    this.startedShakeAndFall = false;
    this.shatter = function() {};

    this.fallSpeed = 4;
    this.incrementFallSpeed = 0.33;

    this.shakeTime = 0;
    this.shakeAndFall = function()
    {
        if(this.shakeTime < 40)
        {
            this.shake();
            this.shakeTime++;

            this.damage = 2;
        }else{
            this.shakePos = 0;

            var slopes = gameObjects.getObject("slope");
            this.slopes.forEach(function(element, index, array) 
            {
                var slope = slopes[element];

                slope.physics.solidObject = false;
            });

            var ice = new Ice(this.xPos, this.yPos, this.width, this.height, this.color);
            this.shatter = ice.shatter;
            this.shapes = ice.shapes;

            this.physics.movement = "dynamic";
            this.move(this.xPos, this.yPos + this.fallSpeed, true);

            this.fallSpeed += this.incrementFallSpeed;
            this.fallSpeed = min(this.fallSpeed, 12.2);
        }
    };

    var self = this;
    this.addCast = function(onTarget)
    {
        gameObjects.getObject("cast").add(
            this.xPos + this.halfWidth, this.yPos + this.height * 2, 3, this.arrayName, function(object)
        {
            if(object.physics === undefined)
            {
                return;
            }

            if(object.arrayName === "player")
            {
                self.startedShakeAndFall = true;
            }
        },
        function(cast)
        {
            cast.xPos = self.xPos + self.halfWidth;  
            cast.yPos = self.yPos + self.halfHeight * 2;
        }, false, 600);

        this.cast = gameObjects.getObject("cast").getLast();
        this.cast.ignore.push("slope");
        this.cast.yVel = 12;

        cameraGrid.addReference(this.cast);
    };

    this.lastAddCastTime = millis();

    this.update = function()
    {
        this.makeBlink = (this.updateMe && !this.dead);

        if(this.shattered)
        {
            this.remove();
        }

        if(this.falls)
        {
            if(this.startedShakeAndFall)
            {
                this.shakeAndFall();
            }
            else if(!this.cast)
            {
                this.addCast();
            }
        }

        if(!this.updateMe)
        {
            return;
        }

        if(this.hp < 20)
        {
            this.dead = true;
            this.move(0, this.yPos + 10, true);
        }

        if(!this.spittedOut && this.hp < 20)
        {
            physics.getMiddleXPos(this);

            var hpCoins = gameObjects.getObject("hpCoin");
            for(var i = 0; i < round(random(2, 5)); i++)
            {
                hpCoins.add(this.middleXPos + round(random(-this.halfWidth + 10, this.halfWidth - 10)), yPos + 100 + random(-30, 300), 10, 0, 1);
                cameraGrid.addReference(hpCoins.getLast());
            }

            this.spittedOut = true;
        }
    };

    this.move = function(x, y, override)
    {
        if(!this.updateMe && !this.falls || this.hp < 20 && !override)
        {
            return;
        }

        cameraGrid.removeReference(this);

        this.xPos = x || this.xPos;
        this.yPos = y || this.yPos;

        this.updatePoint();
        this.updateBoundingBox();

        cameraGrid.addReference(this);

        this.slopes.forEach(function(element, index, array) 
        {
            var slope = slopes[element];
            cameraGrid.removeReference(slope);

            slope.xPos = x || this.xPos;
            slope.yPos = y || this.yPos;

            slope.updateBoundingBox();
            cameraGrid.addReference(slope);
        });
    };

    this.avoidCollision = function(object)
    {
        return (this.makeBlink && object.invincibleToLifeForm || object.arrayName === "voxelizer");
    };

    this.lastPlay = 0;

    this.onCollide = function(object)
    {
        if(this.falls)
        {
            if(this.startedShakeAndFall && object.arrayName !== "slope" && object.arrayName !== "fallingBlock" && 
              (object.physics.solidObject && object.physics.movement === "static") || object.arrayName === "player")
            {
                this.shatter(4, 4, 300);

                if(object.isLifeForm && !object.invincibleToLifeForm && !this.doneDamage)
                {
                    object.takeDamage(this);

                    this.doneDamage = true;
                }

                return;
            }
        }

        if(object.type === "lifeform" && object.arrayName !== "ninja" && object.arrayName !== "voxelizer" && 
            object.arrayName !== "skyViper" && !object.isBoss)
        {
            if(observer.colliding(object, this.point))
            {
                if(!upSideDown)
                {
                    object.yVel -= 4;
                }else{
                    object.yVel += 4;

                    if(object.inAir && !object.invincibleToLifeForm)
                    {
                        object.yPos = this.point.yPos;
                    }
                }

                if(!this.makeBlink || !object.invincibleToLifeForm)
                {
                    object.takeDamage(this);
                }
            }
            else if(this.updateMe && object.yVel > 0 && object.inAir)
            {
                object.inAir = false;
                object.yVel = -5;
                object.yPos = this.yPos - object.height;

                this.move(0, this.yPos + 5);

                this.hp -= object.damage * 5;
            }
        }
    };
};
gameObjects.addObject("spike", createArray(Spike));

var Bullet = function(xPos, yPos, diameter, colorValue, blastAngle, damage, homing)
{
    Circle.call(this, xPos, yPos, diameter);
    
    this.physics.solidObject = false;
    this.physics.shape = "point";
     
    this.boundingBox = {};
    this.boundingBox.off = true;
    this.physics.movement = "dynamic";
    
    this.color = colorValue || color(255, 255, 255);
    
    this.blastAngle = blastAngle + ((MODE === "ka") ? 90 : 0) || 0;
    this.xVel = 0;
    this.yVel = 0;
    this.maxVel = 1;
    this.acl = 1;
  
    this.maxLife = 350;
    this.life = this.maxLife;
    this.homing = homing;
    
    this.getTarget = function()
    {
        var player = gameObjects.getObject("player").getLast();
        return {
            xPos : player.xPos + player.halfWidth,
            yPos : player.yPos + player.halfHeight,
        };
    };
    
    this.changeAngleSpeed = 30;
    
    this.draw = function()
    {
        fill(red(this.color), green(this.color), blue(this.color), this.life * 215 / this.maxLife + 30);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);  
    };
    
    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();
        
        this.life--;
        if(this.life < 0)
        {
            this.remove();
        }
        
        if(this.homing)
        {
            var target = this.getTarget();
            var angle = atan2(target.yPos - this.yPos, target.xPos - this.xPos);
            if(this.blastAngle < angle)
            {
                this.blastAngle += min(this.changeAngleSpeed, abs(angle - this.blastAngle));
            }
            else if(this.blastAngle > angle)
            {
                this.blastAngle -= min(this.changeAngleSpeed, abs(angle - this.blastAngle));
            }
        }
        
        this.acl = this.maxVel;
        this.xVel = this.acl * cos(this.blastAngle);
        this.xVel = constrain(this.xVel, -this.maxVel, this.maxVel);
        this.xPos += this.xVel;
        
        this.yVel = this.acl * sin(this.blastAngle);
        this.yVel = constrain(this.yVel, -this.maxVel, this.maxVel);
        this.yPos += this.yVel;
    };
    
    this.damage = damage || 1;
    this.onCollide = function(object)
    {
        if(object.type === "lifeform" && !object.fromEnemy)
        {
            object.takeDamage(this);
            this.remove();
            this.onCollide = function() {};
        }
        else if(object.physics.solidObject && 
        object.arrayName !== this.arrayName && 
        object.arrayName !== "shooter")
        {
            this.remove();
            this.onCollide = function() {};
        }
    };
};
gameObjects.addObject("bullet", createArray(Bullet));

//A shooter is a factory that creates bullets!
var Shooter = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    this.color = colorValue || color(125, 125, 255);
    
    this.shootSpeed = 1;
    this.shootTimer = 0;
    this.shootAngle = 0;
    
    this.hp = 75;
    this.maxHp = 75;
    this.hpBar = new Bar(this.xPos - this.radius, this.yPos - this.radius * 1.5, this.diameter, 5, color(34, 190, 51, 130), 10); 

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        pushMatrix();
        translate(this.xPos, this.yPos);
        if(MODE === "pjs")
        {
            rotate((this.shootAngle * 57.29578) - 90);
        }else{
            rotate(this.shootAngle);  
        }
        rect(-this.diameter * 0.15, 0, this.diameter * 0.3, this.diameter, 2);
        popMatrix();
        
        fill(0, 0, 90, 50);
        ellipse(this.xPos, this.yPos, this.diameter * 0.8, this.diameter * 0.8);

        this.hpBar.draw();
        this.hpBar.set(max(this.hp, 0), this.maxHp);
        
        if(this.hp <= this.maxHp * 0.4)
        {
            this.hpBar.color = color(190, 34, 51, 130);
        }
    };
    
    this.createBullet = function(self)
    {
        var homing = (random(0, 100) < 12.4);
        
        var colorValue;
        if(homing)
        {
            colorValue = color(0, 240, 20);  
        }
        gameObjects.getObject("bullet").add(self.xPos, self.yPos, self.diameter * 0.2, colorValue, this.shootAngle, 0.75, homing);
        
        var lastBullet = gameObjects.getObject("bullet").getLast();
        if(homing)
        {
            lastBullet.maxVel = 1.55;
            lastBullet.life = 200;
            lastBullet.damage = 2;
            sounds.mplaySound("laser3.mp3");
        }else{
            sounds.mplaySound("laser3.mp3", 0.012);
            lastBullet.damage = (this.minDamage || lastBullet.damage);
        }

        lastBullet.maxVel *= (this.upSpeed || 1);

        cameraGrid.addReference(lastBullet);
    };
    
    this.getTarget = function()
    {
        var player = gameObjects.getObject("player").getLast();
        return {
            xPos : player.xPos + player.halfWidth,
            yPos : player.yPos + player.halfHeight,
        };
    };
    
    this.update = function()
    {
        var target = this.getTarget();
        if(MODE === "pjs")
        {
            this.shootAngle = atan2(this.yPos - target.yPos, this.xPos - target.xPos) - PI;
        }else{
            this.shootAngle = atan2(target.yPos - this.yPos, target.xPos - this.xPos) - 90;
        }
        
        this.shootTimer += this.shootSpeed;
        if(this.shootTimer >= 33)
        {
            this.shootTimer = 0;  
            this.createBullet(this);
        }
        
        if(this.hp <= 0)
        {
            this.shootTimer = 0;
            this.color = color(red(this.color), green(this.color), blue(this.color), alpha(this.color) - 2);
        }
        
        if(alpha(this.color) < 10)
        {
            this.remove();
        }
    };
    
    this.takeDamage = function(object, amt)
    {
        this.hp -= amt || object.damage;
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player" && object.yPos + object.height < this.yPos)
        {
            this.takeDamage(object);
        }
    };
};
gameObjects.addObject("shooter", createArray(Shooter));

var Cast = function(xPos, yPos, diameter, objectArrayName, inform, setPos, oneTime, time)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.physics.shape = "point";
    
    this.xVel = 0;
    this.yVel = 0;
    
    this.boundingBox.off = true;
    this.physics.movement = "dynamic";
    
    this.timer = 0;
    this.time = time || 50;
    
    this.objectArrayName = objectArrayName;
    this.inform = inform;
    this.setPos = setPos;
    
    this.oneTime = oneTime;

    this.onKill = function()
    {
        if(this.setPos === undefined || this.oneTime)
        {
            this.remove();
        }else{
            this.setPos(this); 
            this.timer = 0;
        }
    };
     
    this.draw = function() {};
     
    this.signal = function()
    {
        return (this.timer === this.lastTimer);
    };
     
    this.update = function()
    {
        if(this.xVel !== 0)
        {
            this.xPos += this.xVel;
            if(constrain(this.xPos, cam.focusXPos - cam.halfWidth, cam.focusXPos + cam.halfWidth) !== this.xPos)
            {
                this.timer = this.time + 1;
            }
        }
        if(this.yVel !== 0)
        {
            this.yPos += this.yVel;
            if(constrain(this.yPos, cam.focusYPos - cam.halfHeight, cam.focusYPos + cam.halfHeight) !== this.yPos)
            {
                this.timer = this.time + 1;
            }
        }
        this.timer++;
        if(this.timer > this.time)
        {
            if(this.inform !== undefined)
            {
                this.inform({}, this);
            }
            this.onKill();  
        }
        this.lastTimer = this.timer;
    };

    this.ignore = [];

    this.onCollide = function(object)
    {    
        if(object.arrayName !== this.objectArrayName && (object.physics.solidObject || this.noSolid) && 
            this.ignore.indexOf(object.arrayName) === -1)
        {
            if(this.inform !== undefined)
            {
                this.inform(object, this);
            }
            this.onKill();
        }
    };
};
gameObjects.addObject("cast", createArray(Cast));

var Enemy = function(xPos, yPos, width, height, colorValue, props, complexDraw, hp, damage)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    LifeForm.call(this, hp || 2); //Inherit from life form width LifeForm.call(this, hp, notNormalDeath);
    this.color = colorValue || color(red(-166344), green(-166344), blue(-166344), 150);
    this.damage = damage || 1.0;
    
    this.scoreValue = 200;

    this.addCast = function(self, arrayName)
    {
        gameObjects.getObject("cast").add(self.xPos + self.halfWidth, self.yPos + self.halfHeight, 3, arrayName, function(object)
        {
            if(object.physics === undefined)
            {
                return;
            }

            self.hitObjectArrayName = object.name;   
            self.castHitObject = object;
            if(object.type === "lifeform" && object.arrayName !== self.arrayName)
            {
                self.castHit = true;
            }
        },
        function(cast)
        {
            cast.xPos = self.xPos + self.halfWidth;  
            cast.yPos = self.yPos + self.halfHeight;
        }, false);
        self.cast = gameObjects.getObject("cast").getLast();
    };
    
    this.groundBelow = 0;

    this.addCastForGroundCheck = function(self, arrayName)
    {
        gameObjects.getObject("cast").add(self.xPos + self.halfWidth, self.yPos + self.halfHeight - 1, 3, arrayName, function(object)
        {
            if(object.physics === undefined)
            {
                return;
            }

            if(/*object.physics.shape === "rect" &&*/ object.type !== "lifeform" && object.arrayName !== self.arrayName)
            {
                self.groundBelow = 1;
              
                self.block.nextToBlock = false;
            }
        },
        function(cast)
        {
            cast.xPos = self.xPos + self.halfWidth;  
            cast.yPos = self.yPos + self.halfHeight - 1;
        }, false, Infinity);
        self.groundCast = gameObjects.getObject("cast").getLast();
        self.groundCast.setPos(self.groundCast);
        self.groundCast.yVel = 10;
        cameraGrid.addReference(self.groundCast);
    };

    this.props = props || {
        charging : true,
        handleEdge : true,
    };
    
    this.trigHeight = this.halfHeight;
    this.origHeight = this.height;
    
    this.xDir = (random(0, 100) > 50) ? "left" : "right";
    this.yDir = "";
    
    this.task = "patrol";
    this.fromEnemy = true;
    
    this.maxXVel = 1;
    
    this.complexDraw = complexDraw;
    
    var self = this;
    this.controls = {
        left : function() 
        {
            return (self.xDir === "left" || self.keyLeft);
        },
        right : function() 
        {
            return (self.xDir === "right" || self.keyRight);
        },
        up : function() 
        {  
            return (self.yDir === "up" || self.keyUp);
        },
        down : function()
        {
            return (self.yDir === "down" || self.keyDown);
        },
    };
    
    this.handlePlayer = function(object, info)
    {
        //Can't get this logic right
        if(object.yPos < this.yPos + this.height &&
           object.xPos + object.width >= this.xPos + this.width * 0.1 && 
           object.xPos <= this.xPos + this.width * 0.9)
        {
            if(!this.lastHit)
            {
                //Damage enemy
                this.takeDamage(object, object.damage || 0.1);
                object.yVel = -(object.jumpHeight || 1) / 2;
            }
            this.lastHit = true;
        }else{
            //Damage player
            object.takeDamage(this);
            this.lastHit = false;
        }
    };
    this.handleEnemy = function(object, info)
    {
        if((info.side === "left" || info.side === "right") && 
        this.xDir === "left" && object.xDir === "right")
        {
            this.xDir = "right";
            this.xVel = 0;
            object.xDir = "left";
            object.xVel = 0;
        }
    };

    this.onHandleBlock = function(object, info) {};

    this.marginRight = 0;

    this.handleBlock = function(object, info)
    {
        if(this.onHandleBlock(object, info))
        {
            return;
        }

        if(info.side === "left" || info.side === "right")
        {
            this.xDir = info.side; //If this ran into a block, go the other way

            this.xVel = {"left" : this.xAcl, "right" : -this.xAcl}[this.xDir];
        }
        else if(info.side === "up")
        {
            if(this.block && this.marginRight <= this.block.xPos)
            {
                this.marginRight = this.block.xPos;
            }
            this.block = object;
        }
    };

    this.handleLeft = function()
    {
        this.xDir = "right";
    };
    this.handleRight = function()
    {
        this.xDir = "left";
    };

    this.onHandleEdges = function() {};

    this.handleEdges = function()
    {
        if(!this.props.handleEdge)
        {
            return;
        }

        //If this is approaching the edge of the block, go the other way
        if(this.groundBelow < -1 && this.block !== undefined)
        {
            this.handledEdge = true;
            if(!this.onHandleEdges(this.block))
            {
                var inBetweenX = this.xPos + this.halfWidth;
                if(inBetweenX <= this.block.xPos)
                {
                    this.handleLeft();
                }
                else if(inBetweenX >= this.block.xPos + this.block.width && !this.block.nextToBlock && 
                       this.marginRight < this.block.xPos + this.block.width)
                {
                    this.handleRight();
                }
            }
        }else{
            this.handledEdge = false;
        }
    };
    this.handleBorders = function()
    {
        if(this.xPos <= levelInfo.xPos)
        {
            this.xDir = "right";
        }
        else if(this.xPos + this.width >= levelInfo.xPos + levelInfo.width)
        {
            this.xDir = "left";  
        }
    };
    this.chargeTimer = 0;
    this.chargeTime = 100;
    
    this.lastRemove = this.remove;
    this.remove = function()
    {
        if(this.cast !== undefined)
        {
            this.cast.remove();
        }

        if(this.groundCast !== undefined && this.groundCast.remove !== undefined)
        {
            this.groundCast.remove();
        }

        this.lastRemove();
    };
          
    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height, 5);
    };   
    
    if(this.complexDraw)
    {
        this.eyeAngle = 180;
        this.hide = 0;
        this.hideVel = 1.5;
        this.eyes = 2;
        this.eyeSwitch = round(random(1, 2));
        
        this.draw = function() 
        {
            noStroke();
            fill(this.color);
            rect(this.xPos, this.yPos, this.width, this.height, 5);
            
            fill(255, 255, 255, 200);
            var _x = this.xPos + ((this.eyeSwitch === 1) ? this.width * 0.25 : this.width * 0.75);
            var _y = this.yPos + this.height * 0.3;
            var _radius = this.width * 0.15;
            var _diameter = _radius * 2;
            var _x2 = this.xPos + ((this.eyeSwitch === 1) ? this.width * 0.75 : this.width * 0.25);
            var _y2 = this.yPos + this.height * 0.7;
            if(this.eyes === 1 || this.eyes === 2)
            {
                ellipse(_x, _y, _diameter, _diameter);
            }
            if(this.eyes === 2)
            {
                ellipse(_x2, _y2, _diameter, _diameter);
            }
            
            var player = gameObjects.getObject("player").getLast();
            if(player !== undefined)
            {
                this.eyeAngle = atan2(player.yPos - this.yPos, player.xPos - this.xPos);
            }else{
                this.eyeAngle = atan2((mouseY + cam.focusYPos - cam.halfHeight) - this.yPos, (mouseX + cam.focusXPos - cam.halfWidth) - this.xPos);
            }
            var x = cos(this.eyeAngle) * this.width * 0.1;
            var y = sin(this.eyeAngle) * this.width * 0.1;
            fill(0, 0, 0, 200);
            if(this.eyes === 1 || this.eyes === 2)
            {
                ellipse(_x + x, _y + y, _radius, _radius);
            }
            if(this.eyes === 2)
            {
                ellipse(_x2 + x, _y2 + y, _radius, _radius);
            }
            
            fill(red(this.color), green(this.color), blue(this.color), this.hide);
            rect(this.xPos, this.yPos, this.width, this.height, 5);
            
            if(this.hide < 0 || this.hide > (this.maxHide || 255))
            {
                this.hideVel = -this.hideVel; 
                if(this.hide > (this.maxHide || 255))
                {
                    this.eyes--;
                    if(this.eyes <= 0)
                    {
                        this.eyeSwitch++;
                        if(this.eyeSwitch > 2)
                        {
                            this.eyeSwitch = 1;
                        }
                        this.eyes = 2;  
                    }
                }
            }
            this.hide += this.hideVel;
        };
    }    
    
    this.lastUpdate = this.update;
    this.simpleUpdate = function()
    {
        if(!this.noHeightChanges)
        {
            var lastHeight = this.height;
            this.height = max((this.origHeight - this.trigHeight) + (this.hp * this.trigHeight / this.maxHp), 0);
            this.boundingBox.height = this.height;
            this.halfHeight = this.height / 2;
        }

        if(this.props.handleEdge && !this.initCheck)
        {
            this.addCastForGroundCheck(this, this.arrayName);
            this.initCheck = true;
        }

        this.groundCast = this.xPos + this.halfWidth;

        this.groundBelow--;

        this.lastUpdate();
    };

    this.update = function()
    {
        this.handleEdges();
        this.handleBorders();

        if(!this.preventDefaultAI)
        {
            if(this.hitObjectArrayName === "player" && this.task !== "kill")
            {
                this.task = "charge";
                this.chargeTimer = this.chargeTime;
            }

            if(this.task === "charge")
            {
                this.chargeTimer--;
                if(this.chargeTimer < 0)
                {
                    this.task = "patrol";
                }
            }
            
            switch(this.task)
            {
                case "patrol" :
                    this.maxXVel = 1;
                    break;

                case "kill" :
                    this.maxXVel = 2;
                    break;

                case "charge" :
                    this.maxXVel = 3;
                    break;
            }
        }

        if(this.cast !== undefined)
        {
            var speed = this.maxXVel + 10;
            this.cast.xVel = (this.xDir === "left") ? -speed : speed;
            if(!this.cast.signal())
            {
                this.cast.setPos(this.cast);
                cameraGrid.addReference(this.cast);
            }
        }

        this.hitObjectArrayName = undefined;

        this.lastHit = false;
        this.castHit = false;

        this.simpleUpdate();
    };
    
    this.onCollide = function(object, info)
    {
        switch(true)
        {
            case (object.arrayName === "player") :
                this.handlePlayer(object, info);
                break;
                
            case (object.type === "block" && object.arrayName !== "snowLayer") :
                this.handleBlock(object, info);
                break;
                
            case (object.arrayName === "slope") :
                break;
            
            case (this.arrayName === object.arrayName || object.fromEnemy) :
                this.handleEnemy(object, info);
                break;
        }
    };
};
gameObjects.addObject("enemy", createArray(Enemy));

var FireBeaker = function(xPos, yPos, width, height, colorValue)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue || color(166, 110, 49), {
        handleEdge : true,
    }, true);

    this.scoreValue = 250;

    this.damage = 1;

    this.particles = [];
    this.particleColor = this.color;

    this.addParticle = function()
    {
        this.particles.push({
            color : this.particleColor,
            xPos : this.xPos + floor(random(0, this.width)),
            yPos : this.yPos + floor(random(0, this.height)),
            yVel : -random(0.5, 2.2)/2,
            xVel : this.xVel * -round(random(1.5, 3))/2.3,
            diameter : 7,
            shrink : 0.1,
            life : 100,
            maxLife : 100,
        });
    };
    this.updateParticles = function()
    {
        for(var i = 0; i < this.particles.length; i++)
        {
            var p = this.particles[i];

            p.xPos += p.xVel;
            p.yPos += p.yVel;
            p.life--;
            p.diameter -= p.shrink;

            if(p.life < 0 || p.diameter < 0)
            {
                this.particles.splice(i, 1);
            }
        }
    };
    this.drawParticles = function()
    {
        for(var i = 0; i < this.particles.length; i++)
        {
            var p = this.particles[i];

            fill(red(p.color), green(p.color), blue(p.color), 255 * p.life / p.maxLife);
            ellipse(p.xPos, p.yPos, p.diameter, p.diameter);
        }
    };

    this.lastDrawB = this.draw;
    this.draw = function()
    {
        this.drawParticles();
        this.lastDrawB();
    };

    this.lastUpdateB = this.update;
    this.update = function()
    {
        this.lastUpdateB();

        if(millis() % 15 >= 10)
        {
            this.addParticle();
        }

        this.updateParticles();
    };

    this.lavaImmune = true;
    this.lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        if(object.arrayName === "water")
        {
            this.hp -= object.damage * 0.23;
        }
        this.lastOnCollide(object, info);
    };
};
gameObjects.addObject("fireBeaker", createArray(FireBeaker));

var WaterBeaker = function(xPos, yPos, width, height, colorValue)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue || color(56, 137, 161), {
        charging : true,
    }, true);    
    this.addCast(this, "waterBeaker");
    this.lastGravity = this.gravity;
    this.lastUpdate1 = this.update;

    this.damage = 1;

    this.update = function()
    {
        this.gravity = (this.inLiquid) ? 0 : this.lastGravity;
        this.lastUpdate1();
    };
};
gameObjects.addObject("waterBeaker", createArray(WaterBeaker));

var IceBeaker = function(xPos, yPos, width, height, colorValue)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue || color(56, 187, 181, 160), {
        charging : true,
        handleEdge : true,
    }, true, 4);    
    this.addCast(this, "iceBeaker");
    this.lastGravity = this.gravity;
    this.lastUpdate1 = this.update;

    this.scoreValue = 400;

    this.damage = 2;

    this.angle = 0;
    this.angleVel = 2;

    this.maxHide = 230;
    this.hideVel = 1;

    this.kArray = [];

    for(var i = 0; i < 4; i++)
    {
        this.kArray.push([round(random(-5, 5)), round(random(-5, 5))]);
    }

    this.update = function()
    {
        this.gravity = (this.inLiquid) ? 0 : this.lastGravity;
        this.lastUpdate1();

        if(millis() % 1000 >= 890)
        {
            for(var i = 0; i < 4; i++)
            {
                this.kArray[i] = [round(random(-5, 5)), round(random(-5, 5))];
            }
        }
    };

    this.custHeight = this.height * 0.1;
    this.custWidth = this.height * 0.1;

    this.lastDraw = this.draw;
    this.draw = function()
    {
        noStroke();
        fill(23, 140, 187); 

        physics.getMiddleXPos(this);
        physics.getMiddleYPos(this);

        this.angle += this.angleVel;

        for(i = 0; i < 4; i++)
        {
            pushMatrix();
                translate(this.middleXPos, this.middleYPos);
                rotate(this.angle);
                ellipse(0, 0, this.halfWidth - this.kArray[i][0], this.halfHeight - this.kArray[i][1]);
            popMatrix();
        }

        this.lastDraw();

        fill(240, 240, 240, 200);
        rect(this.xPos, this.yPos + this.height - this.custHeight, this.width, this.custHeight, 5);
    };

    this._lastOnCollide1 = this.onCollide;
    this.onCollide = function(object, info)
    {
        this._lastOnCollide1(object, info);
        if(object.arrayName === "water")
        {
            object.temp -= 1.5;
            object.freezing = true;
        }
        else if(typeof object.snowflakes !== "undefined" && object.physics.shape === "rect" && 
            this.yPos + this.height <= object.yPos + 1 && !object.snowLayered)
        {
            object._lastDraw = object.draw;
            object.draw = function()
            {
                this._lastDraw();
                noStroke();
                fill(250, 250, 250, 215);
                rect(this.xPos, this.yPos, this.width, this.height * 0.15);
            };

            object.snowLayered = true;
            return;
        }
    };
};
gameObjects.addObject("iceBeaker", createArray(IceBeaker));

var SkyViper = function(xPos, yPos, width, height, colorValue)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue || color(30, 67, 117), {
        charging : true,
    }, false, 4);
    this.addCast(this, "skyViper");
    this.lastGravity = this.gravity;
    this.gravity = 0;

    this.damage = 2;
    this.scoreValue = 500;

    this.turnTimer = 0;
    this.turnTime = 100;

    this.imageTimer = 0;
    this.addOn = "";
    this.draw = function()
    {
        this.imageName = this.arrayName;
        this.imageTimer++;
        if(this.imageTimer >= 40)
        {
            this.addOn = (this.addOn === "2") ? "" : "2";
            this.imageTimer = 0;
        }
        if(this.xDir === "right")
        {
            this.imageName = this.arrayName + this.addOn;
        }
        else if(this.xDir === "left")
        {
            this.imageName = this.arrayName + "Left" + this.addOn;
        }
        image(storedImages[this.imageName], this.xPos, this.yPos);
    };

    this.lastUpdate1 = this.update;
    this.flying = true;
    this.yFlySpeed = 2;
    this.killTimer = 0;
    this.killTime = 300;
    this.noHeightChanges = true;

    this.update = function()
    {
        if(this.yDir === "")
        {
            this.yVel = 0;
        }
        if(this.xDir === "right")
        {
            this.turnTimer++;
        }
        else if(this.xDir === "left")
        {
            this.turnTimer--;
        }

        if(this.task === "patrol")
        {
            if(this.turnTimer > this.turnTime)
            {
                this.xDir = "left";
            }
            else if(this.turnTimer < -this.turnTime)
            {
                this.xDir = "right";
            }
            if(this.yPos <= yPos - 300)
            {
                this.yDir = "down";
            }else{
                this.yDir = "";
            }
        }

        if(this.task === "kill" && (this.killObject === undefined || !this.killObject.invincibleToLifeForm))
        {
            this.killTimer++;
            if(this.killTimer > this.killTime)
            {
                this.task = "patrol";
                this.killTimer = 0;
                this.yDir = "";
            }
            if(this.killObject !== undefined)
            {
                switch(true)
                {
                    case (this.killObject.boundingBox.xPos + this.killObject.boundingBox.width <= this.xPos) :
                        this.xDir = "left";
                        break;

                    case (this.killObject.boundingBox.xPos >= this.xPos + this.width) :
                        this.xDir = "right";
                        break;
                }
                switch(true)
                {
                    case (this.killObject.boundingBox.yPos + this.killObject.boundingBox.height <= this.yPos) :
                        if(this.killObject.boundingBox.xPos + this.killObject.boundingBox.width <= this.xPos ||
                           this.killObject.boundingBox.xPos >= this.xPos + this.width)
                        {
                            this.yDir = "up";
                        }
                        break;

                    case (this.killObject.boundingBox.yPos >= this.yPos + this.height) :
                        this.yDir = "down";
                        break;
                }
            }
        }

        if(this.killObject !== undefined && this.killObject.invincibleToLifeForm && this.yDir === "up")
        {
            this.yDir = "";
        }

        this.lastUpdate1();
    };

    this.lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        this.lastOnCollide(object, info);
        if(object.arrayName === "player")
        {
            this.killObject = object;
            this.task = "kill";

            if(object.yPos + object.height * 0.7 > this.yPos)
            {
                if(object.xPos < this.xPos)
                {
                    object.xVel = -abs(this.xVel) - 5;
                }else{
                    object.xVel = abs(this.xVel) + 5;
                }

                object.maxXVel = 10;
            }
            else if(object.yVel > 0)
            {
                object.yVel = Math.min(object.yVel, -6);
            }
        }
    };
};
gameObjects.addObject("skyViper", createArray(SkyViper));

var DirtyCat = function(xPos, yPos, width, height)
{
    this.imageName = "dirtyCat";

    var of = storedImages[this.imageName].height / 3;
    height -= of;

    Enemy.call(this, xPos, yPos, width, height, color(0, 0, 0, 0), {
        charging : true,
    }, false, 10);
    this.addCast(this, "dirtyCat");

    this.scoreValue = 600;

    this.damage = 2.5;

    this.lastChangeTime = millis();

    this.draw = function()
    {
        pushMatrix();
        translate(this.xPos, this.yPos - of);

        if(this.controls.right() && !this.controls.left())
        {
            translate(this.width, 0.0);
            scale(-1.0, 1.0);
        }

        if(this.task === "charging")
        {
            if(millis() - this.lastChangeTime > 150)
            {
                this.imageName = (this.imageName === "dirtyCat") ? "dirtyCat2" : "dirtyCat";
                this.lastChangeTime = millis();
            }
        }else{
             if(millis() - this.lastChangeTime > 300)
            {
                this.imageName = (this.imageName === "dirtyCat") ? "dirtyCat2" : "dirtyCat";
                this.lastChangeTime = millis();
            }
        }

        image(storedImages[this.imageName], 0, 0, this.width, this.height + of);
        popMatrix();
    };

    this.lastJumpTime = millis();

    var _lastUpdate = this.update;
    this.update = function()
    {
        _lastUpdate.apply(this, arguments);
        this.yDir = "";

        if(Math.random() <= 0.005 && millis() - this.lastJumpTime >= 2334)
        {
            this.yDir = "up";

            this.lastJumpTime = millis();
        }
    };

    var _lastAvoidCollision

    var _lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        this.hitDirtyBlock = false;

        if(object.arrayName === "ice" && object.freezing)
        {
            return;
        }

        if(object.arrayName === "dirtyBlock")
        {
            this.yVel = min(-2, this.yVel);

            this.hitDirtyBlock = true;
        }
        
        if((this.task === "charge" || this.hitDirtyBlock) && info && (info.side === "left" || info.side === "right") && this._side !== "down")
        {
            return this.yDir = "up";
        }

        _lastOnCollide.apply(this, arguments);
    };
};
gameObjects.addObject("dirtyCat", createArray(DirtyCat));

var CatDogStatue = function(xPos, yPos, width, height)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    this.likeLifeForm = true;
    this.scoreValue = 800;

    this.physics.sides = {};

    this.physics.movement = "dynamic";
    
    var offSet = (Math.random() < 0.5 ? -3 : 3);

    this.laser = {
        xPos : this.xPos + this.halfWidth + offSet,
        yPos : this.yPos + this.height * 0.2,
        xPos2 : this.xPos + this.halfWidth,
        yPos2 : this.yPos + this.height,

        length : 0,
        lengthVel : 0,
        active : false,

        damage : 1,
        lastDamageTime : 0,
        damageInterval : 250,
    };

    var self = this;

    this.hp = 16;
    this.maxHp = 16;
    this.defense = 0.5;

    this.autoHp = 0.005;
    this.lastAutoHpTime = 0;
    this.autoHpTimeInterval = 200;

    this.useLaser = true;

    this.laser.draw = function(xPos2, yPos2)
    {
        if(!this.active)
        {
            return;
        }

        this.xPos = self.xPos + self.halfWidth + offSet;
        this.yPos = self.yPos + self.height * 0.2;
        this.xPos2 = xPos2 ? xPos2 : self.xPos + self.halfWidth;
        this.yPos2 = yPos2 ? yPos2 : self.yPos + self.height;

        this.length += this.lengthVel;
        this.length = constrain(this.length, 0, 1);

        if(this.length <= 0 && this.active)
        {
            this.active = false;
        }

        var xDiff = this.xPos2 - this.xPos;
        var yDiff = this.yPos2 - this.yPos;

        var l = dist(0, 0, abs(xDiff), abs(yDiff)) * this.length;
        var a = atan2(xDiff, yDiff);

        strokeWeight(1.2);
        stroke(41, 47, 200, 189);
        line(this.xPos, this.yPos, this.xPos + sin(a) * l, this.yPos + cos(a) * l);
        noStroke();
    };

    this.laser.colliding = function(object)
    {
        if(!this.active)
        {
            return false;
        }

        if(object.xPos > max(this.xPos, this.xPos2) || 
           object.xPos + object.width < min(this.xPos, this.xPos2) || 
           object.yPos > max(this.yPos, this.yPos2) || 
           object.yPos + object.height < min(this.yPos, this.yPos2))
        {
            return false;
        }

        var xDiff = this.xPos2 - this.xPos;
        var yDiff = this.yPos2 - this.yPos;

        var hyp = dist(0, 0, abs(xDiff), abs(yDiff));
        var a = atan2(xDiff, yDiff);

        for(var i = 0; i < hyp * this.length; i += 4)
        {
            if(observer.collisionTypes.pointrect.colliding({
                xPos : this.xPos + sin(a) * i,
                yPos : this.yPos + cos(a) * i
            }, object))
            {
                return true;
            }
        }

        return false;
    };

    var spys = [];
    spys.add = function(xPos, yPos, width, height, color, other)
    {
        var toSet = {
            xPos : xPos, 
            yPos : yPos, 
            width : width, 
            height : height, 
            color : color,

            maxLife : 100,
            life : 100,

            angle : random(0, TWO_PI),
            angleVel : random(-0.1, 0.1),
            speed : random(1, 2),
        };

        if(other)
        {
            for(var i in other)
            {
                toSet[i] = other[i];
            }
        }

        this.push(toSet);
    };
    spys.draw = function()
    {   
        noStroke();

        for(var i = this.length - 1; i >= 0; i--)
        {
            var spy = this[i];

            spy.angle += spy.angleVel;
            spy.xPos += cos(spy.angle) * spy.speed;
            spy.yPos += sin(spy.angle) * spy.speed;

            fill(red(spy.color), green(spy.color), blue(spy.color), spy.life * alpha(spy.color) / spy.maxLife);
            rect(spy.xPos, spy.yPos, spy.width, spy.height);

            spy.life--;

            if(spy.life < 0)
            {
                this.splice(i, 1);
            }
        }
    };

    this.drawEffect = function()
    {
        if(!spys.started)
        {
            for(var i = 0; i < random(1, 6) * 10; i++)
            {
                spys.add(this.xPos + Math.random() * this.width, 
                         this.yPos + Math.random() * this.height, 
                         random(3, 6), random(3, 6), color(random(0, 200), 50, random(0, 200), 200)); 
            }

            spys.started = true;
        }

        spys.draw();

        if(spys.length <= 0)
        {
            this.feelingSaucy = false;
            spys.started = false;
        }
    };

    var hpBarYDiv = this.halfWidth * 0.5;
    this.hpBar = new Bar(this.xPos, this.yPos - hpBarYDiv, this.width, 4, color(34, 176, 111, 200), 3); 

    this.draw = function()
    {
        image(loadedImages[this.arrayName], this.xPos + 3, this.yPos, loadedImages[this.arrayName].width * 0.5, loadedImages[this.arrayName].height * 0.5);

        if(this.feelingSaucy)
        {
            this.drawEffect();
        }

        this.hpBar.xPos = this.xPos;
        this.hpBar.yPos = this.yPos - hpBarYDiv;

        this.laser.draw(this.laser.xPos2, this.yPos + this.height);

        if(this.hp < this.maxHp)
        {
            if(this.hp <= this.maxHp * 0.4)
            {
                this.hpBar.color = color(190, 34, 51, 130);
            }

            this.hpBar.set(max(this.hp, 0), this.maxHp);
            this.hpBar.draw();
        }
    };

    this.activate = function()
    {
        this.laser.active = true;
        this.laser.lengthVel = 0.05;
        this.feelingSaucy = true;
    };

    this.deactivate = function()
    {
        this.laser.lengthVel = -0.05;
    };

    var _lastUpdate = this.update;
    this.update = function()
    {
        if(millis() - this.lastAutoHpTime > this.autoHpTimeInterval)
        {
            this.hp += this.autoHp;
            this.hp = min(this.hp, this.maxHp);

            this.lastAutoHpTime = millis();
        }

        if(!observer.boundingBoxesColliding(this.boundingBox, cam.boundingBox))
        {
            if(!this.pickedVel)
            {
                this.pickVel = random(-2, 2);
                this.pickedVel = true;
            }

            this.feelingSaucy = true;
        }else{
            this.pickedVel = false;
        }

        if(this.useLaser)
        {
            var player = gameObjects.getObject("player").input(0);

            if(Math.pow(Math.abs(physics.getMiddleXPos(player) - physics.getMiddleXPos(this)), 2) + 
               Math.pow(Math.abs(physics.getMiddleYPos(player) - physics.getMiddleYPos(this)), 2) < 150 * 150)
            {
                if(!this.laser.active)
                {
                    this.activate();
                }
            }
            else if(this.laser.active)
            {
                this.deactivate();
            }
        }

        if(this.laser.active)
        {
            if(this.laser.xPos2 < player.middleXPos)
            {
                this.laser.xPos2 += 2.5;
            }else{
                this.laser.xPos2 -= 2.5;
            }

            this.laser.xPos2 = constrain(this.laser.xPos2, this.middleXPos - this.width * 3, this.middleXPos + this.width * 3);
        }

        if(millis() - this.laser.lastDamageTime > this.laser.damageInterval && this.laser.colliding(player))
        {
            player.takeDamage(this, this.laser.damage);

            this.laser.lastDamageTime = millis();
        }

        if(this.hp <= 0)
        {
            this.dead = true;
            this.remove();
        }

        return _lastUpdate.apply(this, arguments);
    };

    this.avoidCollision = function(object)
    {
        if(!(object.arrayName !== "player" || object.yPos + object.height - object.yVel > this.yPos))
        {
            this.jumpedOn = true;
        }

        return object.physics.movement === "dynamic" && !this.jumpedOn;
    };

    this.takeDamage = function(amt)
    {
        this.hp -= Math.max(0, amt - this.defense);
    };

    this.onCollide = function(object, info)
    {
        if(this.jumpedOn || object.arrayName === "xStar")
        {
            if(!this.jumpedOn)
            {
                this.takeDamage(object.damage ? object.damage : 0);
                object.draw = function() {};
                object.onCollide = function() {};
                object.remove(this);
            }else{
                object.yVel = abs(object.yVel);
            }

            this.useLaser = true;
            this.jumpedOn = false;
        }
    };
};
gameObjects.addObject("catDogStatue", createArray(CatDogStatue));

//Ninja Star, specific to the Ninja.
var NinjaStar = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    this.colorValue = colorValue;
    this.physics.movement = "dynamic";
    this.physics.solidObject = false;
    this.outerXVel = 0;
    this.outerYVel = 0;

    this.damage = 1.5;

    this.life = random(150, 400);

    this.blocked = false;

    this.imageName = "ninjaStar";
    this.setAngle = 0;
    this.draw = function()
    {
        pushMatrix();
        translate(this.xPos, this.yPos);
        rotate(this.setAngle);
        image(storedImages[this.imageName], -this.radius, -this.radius, this.diameter, this.diameter);
        popMatrix();
        this.setAngle += 3;

        //It's been gooed by the player's shield.
        if(this.blockedByPlayer)
        {
            noStroke();
            fill(31, 89, 235, 170);
            ellipse(this.xPos, this.yPos, this.radius * 1.2, this.radius * 1.2);
        }
    };

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos - this.radius;
        this.boundingBox.yPos = this.yPos - this.radius;
    };

    this.lastUpdate1 = this.update;
    this.update = function()
    {
        this.lastUpdate1();
        this.xPos += this.outerXVel2;
        this.yPos += this.outerYVel2;  

        this.updateBoundingBox();   
        this.life--;
        if(this.life < 0)
        {
            this.remove();
        }       
    };

    this.hits = 0;
    this.onCollide = function(object)
    {
        var ignorePlayerDamage = this.blockedByPlayer;

        if((object.arrayName === "player" && !ignorePlayerDamage) || (this.blocked && (object.arrayName === "ninja" || object.arrayName === "ninjaBoss")))
        {
            var blocked = object.takeDamage(this);
            if(!blocked)
            {
                this.onCollide = function(){};
                this.remove();
            }else{
                var d = Math.sqrt(Math.pow(this.outerYVel2, 2) + Math.pow(this.outerXVel2, 2));
                var a = atan2(this.outerYVel2, 
                              this.outerXVel2);

                a += PI;
                d *= 1.1;

                this.outerXVel2 = cos(a) * d;
                this.outerYVel2 = sin(a) * d;

                if(object.arrayName === "player")
                {
                    this.blockedByPlayer = true;
                    this.life += 200;
                }
            }

            this.blocked = blocked;
        }
        if(object.physics.solidObject && object.arrayName !== this.arrayName && !object.isBoss &&
        object.arrayName !== "ninja" && object.arrayName !== "fallingBlock" &&
        object.arrayName !== "movingPlatform" && object.arrayName !== "pillar")
        {
            this.hits++;
            if(this.hits >= 3)
            {
                this.remove();
                this.onCollide = function(){};
            }
        }
    };
};
gameObjects.addObject("ninjaStar", createArray(NinjaStar));

var Ninja = function(xPos, yPos, width, height, colorValue)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue || color(30, 67, 117), {
        handleEdge : true,
    }, false, 4);

    this.addCast(this, "ninja");
    this.scoreValue = 350;

    this.damage = 1;

    this.getStarThrowTime = function()
    {
        return round(random(1000, 2000)) * 1.5;
    };
    this.getStarSpeed = function()
    {
        return round(random(2, 5));
    };

    this.lastThrowTimer = millis();

    this.createNinjaStar = function(amt, func)
    {
        sounds.mplaySound("swoosh.mp3");

        for(var i = 0; i < (amt || 1); i++)
        {
            gameObjects.getObject("ninjaStar").add(this.middleXPos, this.middleYPos, 15, this.color);
            this.ninjaStar = gameObjects.getObject("ninjaStar").getLast();          
            cameraGrid.addReference(this.ninjaStar);

            this.ninjaStar.damage = 0.75;

            if(typeof func !== "undefined")
            {
                func(this.ninjaStar, i);
            }else{
                this.ninjaStar.outerXVel2 = (this.xVel >= 0) ? this.getStarSpeed() : -this.getStarSpeed();
                this.ninjaStar.outerYVel2 = 0;
            }
        }   
    };
    this.updateNinjaStars = function()
    {
        if(millis() - this.lastThrowTimer >= this.getStarThrowTime())
        {
            physics.getMiddleXPos(this);
            physics.getMiddleYPos(this);

            this.createNinjaStar((random(0, 1) > 0.15) ? 1 : 2);
            this.lastThrowTimer = millis();
        }
    };

    var self = this;

    this.tasks = [];
    this.tasks.addTask = function(name, start, run, end)
    {
        this.push(name);
        
        this[name] = (typeof start === "object") ? start : {};
        this[name].name = name;
        this[name].start = (typeof start === "function") ? start : this[name].start || function() {};

        this[name].run = this[name].run || run || function() {};
        this[name].end = this[name].end || end || function() {};
    };
    this.tasks.startTask = function(taskName)
    {
        var task = this.indexOf(taskName);

        if(task !== -1)
        {
            if(typeof this.currentTask === "object")
            {
                this.currentTask.end.apply(self, arguments);
            }

            this[taskName].start.apply(self, arguments);
            this.currentTask = this[taskName];
        }
    };
    this.tasks.runTask = function()
    {
        this.currentTask.run.apply(self, arguments);
    };

    this.defaultMaxXVel = 2;

    this.tasks.addTask("default", {
        run : function()
        {
            if(random(0, 1) < 0.35 && millis() % 4000 >= 2500)
            {
                this.yDir = "up";
            }else{
                this.yDir = "";
            }
        },
    });

    this.taskEndTime = millis();

    this.hitObjectDist = function(d)
    {
        return Math.pow(Math.abs(this.middleXPos - this.hitObject.middleXPos), 2) + 
               Math.pow(Math.abs(this.middleYPos - this.hitObject.middleYPos), 2) < Math.pow(d, 2);
    };

    this.tasks.addTask("follow", {
        start : function()
        {
            this.lastHandleLeft = this.handleLeft;
            this.handleLeft = function()
            {
                if(!this.inAir)
                {
                    this.yDir = "up";
                }
            };
            this.lastHandleRight = this.handleRight;
            this.handleRight = function()
            {
                if(!this.inAir)
                {
                    this.yDir = "up";
                }
            };

            this.lastHandleBlock = this.handleBlock;
            this.handleBlock = function(object, info)
            {
                if(info.side === "left" || info.side === "right")
                {
                    if(!this.inAir)
                    {
                        this.yDir = "up";
                    }
                }
            };

            this.startTaskTime = millis();
        },
        run : function()
        {
            physics.getMiddleXPos(this.hitObject);
            physics.getMiddleXPos(this);

            physics.getMiddleYPos(this.hitObject);
            physics.getMiddleYPos(this);

            this.xDir = (this.hitObject.middleXPos < this.middleXPos) ? "left" : "right";
            this.yDir = "";

            if(millis() - this.playerLastHitTime > 6000 && 
                !this.hitObjectDist(70))
            {
                this.tasks.startTask("default");
                return;
            }
            else if(millis() - this.startTaskTime > 3000 && 
                this.hitObjectDist(150))
            {
                this.tasks.startTask("default");
                return;
            }

            if(this.yPos > this.hitObject.yPos + this.hitObject.height &&
               (abs(this.middleXPos - this.hitObject.middleXPos) > (this.width + this.hitObject.width) / 2))
            {
                this.yDir = "up";
            }

            if(millis() - this.startTaskTime > 15000)
            {
                this.tasks.startTask("default");
                return;
            }
        },
        end : function()
        {
            this.props.handleEdge = true;
            this.handleLeft = this.lastHandleLeft;
            this.handleRight = this.lastHandleRight;
            this.handleBlock = this.lastHandleBlock;
            this.maxXVel = this.defaultMaxXVel;

            this.taskEndTime = millis();
        },
    });

    this.draw = function()
    {   
        image(storedImages[this.arrayName], this.xPos, this.yPos, this.width, this.height);
    };

    this.enterFunc("update", function()
    {
        if(!this._setup_)
        {
            this.tasks.startTask("default");
            this._setup_ = true;
        }

        this.updateNinjaStars();
        this.task = "";

        if(!this.wwwSounds)
        {
            sounds.mplaySound("whistle1.mp3");
            this.wwwSounds = true;
        }
    }, 
    function()
    {   
        this.tasks.runTask();
    });

    this.enterFunc("onCollide", function(object, info)
    {
        if(object.arrayName === "player")
        {
            this.playerLastHitTime = millis();
            if(millis() - this.taskEndTime > 3000)
            {
                this.tasks.startTask("follow");
            }
            this.hitObject = object;
        }
        else if(object.arrayName === "pillar" || object.arrayName === "pillarBlock")
        {
            return 0;
        }
    });
};
gameObjects.addObject("ninja", createArray(Ninja));

var LaunchBall = function(xPos, yPos, diameter, colorValue, damage, speed)
{
    DynamicCircle.call(this, xPos, yPos, diameter);
    this.color = colorValue || color(0, 0, 0, 100);
    this.damage = damage || 1;
    this.hp = 3;

    this.physics.solidObject = false;
    this.gravity = 0;

    this.mode = "rotate";

    this.speed = speed || 4;

    this.maxFadeLife = 80;
    this.fadeLife = this.maxFadeLife;

    this.draw = function()
    {
        fill(red(this.color), green(this.color), blue(this.color), this.fadeLife * 255 / this.maxFadeLife);
        stroke(11, 93, 140);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    };

    this.primeMode = function()
    {
        switch(this.mode)
        {
            case "fade" :
                this.yVel = -8;
                this.gravity = 0.3;
                break;

            case "life" :
                this.life = 100;
                break;
        }
    };

    this.maxGrowth = 200;
    this.growth = 0;

    this.maxDiameter = diameter;

    this.lastUpdate = this.update;
    this.update = function()
    {
        if(this.mode !== "rotate" &&
        (this.xPos < levelInfo.xPos + this.radius ||
        this.xPos > levelInfo.xPos + levelInfo.width - this.radius || 
        this.yPos < levelInfo.yPos + this.radius ||
        this.yPos > levelInfo.yPos + levelInfo.height - this.radius))
        {
            this.remove();
        }

        this.growth = this.growth || 0;

        switch(this.mode)
        {
            case "rotate" :
                this.growth++;
                if(this.growth >= this.maxGrowth)
                {
                    this.growth = this.maxGrowth;
                }
                this.diameter = (this.growth * this.maxDiameter / this.maxGrowth);
                this.radius = this.diameter / 2;
                break;

            case "fade" : 
                this.fadeLife--;
                if(this.fadeLife < 0)
                {
                    this.remove();
                }
                break;

            case "launch" :
                this.xVel = this.setXVel || this.xVel || 0;
                this.yVel = this.setYVel || this.yVel || 0;
                break;
        }

        this.lastUpdate();
    };

    this.noDamageTo = [];

    this.onCollide = function(object)
    {
        if(this.mode === "launch")
        {
            if(object.arrayName !== this.hostObject.arrayName && object.arrayName !== "ninja")
            {
                if(object.type === "lifeform" && this.noDamageTo.indexOf(object.arrayName + object.index) === -1)
                {
                    var countered = object.takeDamage(this);

                    if(!countered)
                    {
                        this.remove();
                        this.onCollide = function() {};
                    }else{
                        var d = Math.sqrt(Math.pow(this.outerYVel2, 2) + Math.pow(this.outerXVel2, 2));
                        var a = atan2(this.outerYVel2, 
                                      this.outerXVel2);

                        a += PI;
                        d *= 1.1;

                        this.outerXVel2 = cos(a) * d;
                        this.outerYVel2 = sin(a) * d;

                        this.noDamageTo.push(object.arrayName + object.index);
                    }
                }
                else if(object.physics.solidObject)
                {
                    this.remove();
                }
            }
        }
    };
};
gameObjects.addObject("launchBall", createArray(LaunchBall));

var SpaceBreaker = function(xPos, yPos, diameter, colorValue, amt)
{
    DynamicCircle.call(this, xPos, yPos, diameter);
    LifeForm.call(this, 50);
    this.scoreValue = 700;

    this.color = colorValue || color(0, 200, 0);

    this.damage = 0.5;

    this.lastRemove = this.remove;
    this.remove = function()
    {
        this.lastRemove();

        for(var i = 0; i < this.launchBalls.length; i++)
        {
            this.launchBalls[i].mode = "fade";
            this.launchBalls[i].primeMode();
        }
    };

    //Make the enemy "floaty"
    this.gravity = 0.0;
    this.posRadius = this.diameter;
    
    this.posAngle = 0;
    this.posAngleVel = 0.03 * ((random(0, 100) >= 50) ? -1 : 1);
    this.posMode = "rotate";
    this.posAmt = 8;

    this.launchBalls = [];
    this.toLaunchIndex = 0;

    this.nextHitTimeMultiplier = 3;
    this.launchBallSpeedMultiplier = 1.6;

    this.primePositions = function(growth)
    {
        var self = this;
        var launchBalls = gameObjects.getObject("launchBall");
        this.launchBalls = [];

        for(var i = 0; i < this.posAmt; i++)
        {
            launchBalls.add(this.xPos - 200, this.yPos, this.radius, this.color, 2, round(random(2.5, 5)) * this.launchBallSpeedMultiplier);

            var launchBall = launchBalls.getLast();
            launchBall.hostObject = this;
            launchBall.growth = ((growth === "full") ? launchBall.maxGrowth : growth) || launchBall.growth;

            cameraGrid.addReference(launchBall);
            this.launchBalls.push(launchBall);
        }
    };

    this.casts = [];
    this.maxCasts = 100;
    this.castShootAngle = 0;
    this.hits = [];

    this.openCasts = 0;

    this.hitLimiter = 60;
    this.getNextHitTime = function()
    {
        return round(random(20, 30)) / this.nextHitTimeMultiplier;
    };

    this.nextHitTime = this.getNextHitTime();

    this.addCast = function(self)
    {
        if(this.casts.length > this.maxCasts)
        {
            return;
        }

        this.openCasts++;
        gameObjects.getObject("cast").add(self.xPos, self.yPos, 3, self.arrayName, function(object, cast)
        {
            if(object.type === "lifeform" && object.arrayName !== self.arrayName)
            {
                self.hits.push({
                    object : object,
                    xVel : cast.xVel,
                    yVel : cast.yVel,
                    indie : cast.indie,
                    hitMillis : millis(),
                });
            }

            self.openCasts--;
        },
        function(cast)
        {
            cast.xPos = self.xPos;  
            cast.yPos = self.yPos;
        }, true);

        this.castShootAngle += ((MODE === "pjs") ? 0.1 : 3) * 17;

        var lastCast = gameObjects.getObject("cast").getLast();
        lastCast.setPos(lastCast);
        lastCast.time = 100;
        lastCast.xVel = sin(this.castShootAngle) * 7;
        lastCast.yVel = cos(this.castShootAngle) * 7;

        lastCast.lastRemove = lastCast.remove;
        lastCast.remove = function()
        {
            this.lastRemove();
            self.casts.splice(this.indie, 1);
        };

        cameraGrid.addReference(lastCast);
        lastCast.indie = self.casts.length;
        self.casts.push(lastCast);
    };

    this.aDiameter = this.diameter / 4;
    this.dDiameter = this.diameter * 0.2;
    this.pDiameter = this.diameter * 3;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        fill(0, 60, 120, 140);
        ellipse(this.xPos - this.dDiameter, this.yPos - this.dDiameter, this.aDiameter, this.aDiameter);
        ellipse(this.xPos + this.dDiameter, this.yPos - this.dDiameter, this.aDiameter, this.aDiameter);

        stroke(11, 93, 140);

        noFill();
        strokeWeight(3);
        arc(this.xPos, this.yPos, this.pDiameter, this.pDiameter, 0, ((MODE === "pjs") ? 
        (this.hp * TWO_PI / this.maxHp) : (this.hp * 360 / this.maxHp)));
        strokeWeight(1);
        noStroke();
    };

    this.mode = "fire";
    this.regenChangeTime = millis();
    this.travelMode = "idle";

    this.setXVel = 0;
    this.setYVel = 0;
    this.setAngle = 0;
    this.setAngleVel = 6;
    this.normSpeed = 5;

    this.setVelAngle = function(angle, speed)
    {
        var sp = dist(0, 0, this.setXVel || this.xVel, this.setYVel || this.yVel);
        this.setXVel = sin(angle) * (speed || sp);
        this.setYVel = cos(angle) * (speed || sp);
    };

    this.isEnemy = function(str)
    {
        return (str === "player");
    };

    this.loadUpTime = millis();

    this.riseLoops = 0;
    this.sinkLoops = 0;

    this.delag = true;

    this.delagSoft = false;

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.lastUpdate();

        if(!this.zoomed && millis() - this.loadUpTime > 1000)
        {
            sounds.mplaySound("zoom1.wav");
            this.zoomed = true;
        }

        if(!this.primed)
        {
            this.primePositions("full");
            this.primed = true;
        }

        if(this.openCasts < 100 && millis() % (!this.delagSoft ? 600 : 900) >= (!this.delagSoft ? 80 : 400) && !this.delag)
        {
            this.addCast(this);
        }

        if(abs(this.posAngle) > ((MODE === "pjs") ? TWO_PI : 360))
        {
            this.posAngleVel = -this.posAngleVel;
        }

        this.posAngle += this.posAngleVel;

        switch(this.travelMode)
        {
            case "figure8" :
                this.setAngle += this.setAngleVel;
                if(this.setAngle >= 360 || this.setAngle <= 0)
                {
                    this.setAngleVel = -this.setAngleVel;
                }
                this.setVelAngle(this.setAngle * TWO_PI / 360, this.normSpeed);
                if(this.mode === "fire")
                {
                    this.travelMode = "idle";
                }
                break;

            case "idle" :
                this.setXVel = 0;
                this.setYVel = 0;
                break;

            case "run" :
                if(this.mode === "fire")
                {
                    this.travelMode = "idle";
                }

                if(this.hits.length > 0 && this.isEnemy(this.hits[0].object.arrayName) &&
                  dist(this.hits[0].object.xPos, this.hits[0].object.yPos, this.xPos, this.yPos) < 155)
                {
                    var a = atan2(this.hits[0].yVel, this.hits[0].xVel);
                    this.setVelAngle(a/* + ((MODE === "pjs") ? PI : 360)*/, 4);
                    this.setYVel -= 2;
                }else{
                    this.setXVel = 0;
                    this.setYVel = 0;
                }
                break;

            case "sink" :
                this.setXVel = 0;
                this.setYVel = 0.4;

                this.sinkLoops++;
                break;

            case "rise" :
                this.setXVel = 0;
                this.setYVel = -0.4;

                this.riseLoops++;
                break;
        }

        if(this.travelMode !== "rise")
        {
            this.riseLoops = 0;
        }
        else if(this.riseLoops >= 120)
        {
            this.travelMode = "sink";

            this.yVel = -10;
        }
        if(this.travelMode !== "sink")
        {
            this.sinkLoops = 0;
        }
        else if(this.sinkLoops >= 30)
        {
            this.travelMode = "rise";

            if(random(0, 1) > 0.7)
            {
                this.travelMode = "figure8";
            }

            this.yVel = 10;
        }

        this.xVel = this.setXVel;
        this.yVel = this.setYVel;

        if(this.mode === "regen" && this.chooseTravel)
        {
            this.travelMode = (round(random(0, 100)) >= 50) ? "figure8" : "run";
            this.chooseTravel = false;
        }

        if(random(0, 100) > 80 && this.takenDamage)
        {
            this.travelMode = "figure8";
            this.takenDamage = false;
        }

        if(this.hp < this.maxHp * 0.25)
        {
            this.travelMode = "run";
        }

        if(this.launchBalls[0].growth < this.launchBalls[0].maxGrowth * 0.4)
        {
            this.travelMode = (round(random(0, 100)) >= 50) ? "figure8" : "run";
        }

        this.upTime--;
        this.downTime--;

        if(this.upTime > 0)
        {
            this.travelMode = "rise";
        }
        else if(this.yPos + 150 < yPos || this.downTime > 0)
        {
            this.travelMode = "sink";
        }

        switch(this.mode)
        {
            case "fire" :
                var i = min(this.toLaunchIndex, this.launchBalls.length - 1);
                if((this.delag && random(0, 1) > 0.5 || this.hits.length > 0 && this.isEnemy(this.hits[0].object.arrayName)) && 
                (millis() % this.nextHitTime >= this.nextHitTime - 1 || this.unLaunchedBalls <= 1))
                {
                    if(!this.launchBalls[i].used &&
                    /* this.launchBalls[i].mode !== "launch" &&*/
                     this.launchBalls[i].growth >= this.launchBalls[i].maxGrowth)
                    {
                        this.launchBalls[i].mode = "launch";
                        this.launchBalls[i].used = true;

                        var a = 0;
                        if(this.delag)
                        {
                            var player = gameObjects.getObject("player").input(0);
                            a = atan2(player.yPos - this.yPos, player.xPos - this.xPos) + round(random(-0.12, 0.12));
                        }else{
                            var a = atan2(this.hits[0].yVel, this.hits[0].xVel);
                        }

                        this.launchBalls[i].setXVel = cos(a) * (this.launchBalls[i].speed) * (this.delag ? 0.7 : 1);
                        this.launchBalls[i].setYVel = sin(a) * (this.launchBalls[i].speed) * (this.delag ? 0.7 : 1);

                        this.nextHitTime = this.getNextHitTime();

                        if(!this.delag)
                        {
                            this.hits.shift();
                        }
                    }
                }

                if(this.hits.length > 0 && abs(this.hits[0].hitMillis - millis()) >= this.hitLimiter)
                {
                    this.hits.shift();
                }

                this.toLaunchIndex = ceil(random(0, this.launchBalls.length)) - 1;

                this.usedLaunchBalls = 0;
                for(var i = 0; i < this.launchBalls.length; i++)
                {
                    if(this.launchBalls[i].used)
                    {
                        this.usedLaunchBalls++;
                    }
                }

                if(this.usedLaunchBalls >= this.launchBalls.length)
                {
                    this.mode = "regen";
                    this.regenChangeTime = millis();
                    this.usedLaunchBalls = 0;
                    this.chooseTravel = true;
                }

                this.unLaunchedBalls = (this.launchBalls.length - this.usedLaunchBalls);
            break;

            case "regen" :
                if(abs(millis() - this.regenChangeTime) >= 3000)
                {
                    this.primePositions(0);
                    this.mode = "fire";
                    this.override = true;
                }
                break;
        }

        switch(this.posMode)
        {
            case "rotate" :
                var angle = 0;
                var addAngle = ((MODE === "pjs") ? TWO_PI : 360) / this.launchBalls.length;
                for(var i = 0; i < this.launchBalls.length; i++)
                {
                    if(this.launchBalls[i].mode === "rotate")
                    {
                        this.launchBalls[i].xPos = this.xPos + sin(angle + this.posAngle) * this.posRadius;
                        this.launchBalls[i].yPos = this.yPos + cos(angle + this.posAngle) * this.posRadius;
                    }
                    angle += addAngle;
                }
                break;
        }

        this.maxCasts += 1;

        if(this.hp <= this.maxHp * 0.25)
        {
            this.gravity = ((100 - this.hp * 100 / this.maxHp * 4) / 30);
        }
    };

    this.onCollide = function(object)
    {
        this.lastColliderType = object.type;
        if(this.lastColliderType === "block" && object.physics.solidObject)
        {
            if(object.yPos > this.yPos)
            {
                this.upTime = 150;
            }else{
                this.downTime = 150;
            }
        }
        if(this.isEnemy(object.arrayName))
        {
            this.takenDamage = true;
            this.takeDamage(object);
        }
    };
};
gameObjects.addObject("spaceBreaker", createArray(SpaceBreaker));

var Boss = function(xPos, yPos, width, height, colorValue, props, what, hp)
{
    Enemy.call(this, xPos, yPos, width, height, colorValue, props, what, hp);
    this.scoreValue = 1000;
    this.isBoss = true;
};

var NinjaBoss = function(xPos, yPos, width, height)
{
    Boss.call(this, xPos, yPos, width, height, color(150, 20, 220, 240), {
        charging : true,
    }, false, 15);

    this.damage = 0.5;

    this.preventDefaultAI = true;

    this.addCast(this, "ninjaBoss");
    this.addCast(this, "ninjaBoss");

    this.draw = function()
    {   
        image(storedImages[this.arrayName], this.xPos, this.yPos, this.width, this.height);
    };

    this.createNinjaStar = function(amt, func)
    {
        sounds.mplaySound("swoosh.mp3");

        for(var i = 0; i < (amt || 1); i++)
        {
            gameObjects.getObject("ninjaStar").add(this.middleXPos, this.middleYPos, 15, this.color);
            this.ninjaStar = gameObjects.getObject("ninjaStar").getLast();          
            cameraGrid.addReference(this.ninjaStar);

            if(typeof func !== "undefined")
            {
                func(this.ninjaStar, i);
            }else{
                var speed = round(random(2, 5));

                this.ninjaStar.outerXVel2 = ((random(0, 100) >= 50) ? speed : -speed);
                this.ninjaStar.outerYVel2 = 0;

                physics.getMiddleXPos(this);

                if(this.hitObject !== undefined)
                {
                    if(this.middleXPos > this.hitObject.xPos + this.hitObject.halfWidth)
                    {
                        this.ninjaStar.outerXVel2 = -speed;
                    }else{
                        this.ninjaStar.outerXVel2 = speed;
                    }
                }
            }
        }   
    };

    this.tasks = ["charge", "run", "tired"];
    this.task = "";

    this.results = [];

    this.setTask = function(task)
    {
        var valid = this.tasks.indexOf(task) !== -1;

        if(valid)
        {
            this.endTask(this.task);
            this.task = task;
            this.startTask(this.task);
        }

        return valid;
    };
    this.clearTask = function()
    {
        this.endTask(this.task);
        this.task = "";
    };

    this.autoMaxXVel = this.maxXVel;
    this.fastMaxXVel = 3.5;
    this.slowMaxXVel = 1.5;

    this.slowDown = 0.7;

    this.jumpInterval = 1200;
    this.jumpAboveObjectNext = millis();

    this.maxEnergy = 45;
    this.energy = 45;

    this.startTask = function()
    {
        switch(this.task)
        {
            case "charge" :
                this.maxXVel = this.fastMaxXVel - 0.5;
                this.lastComeBackTime = millis() - 1000;
                break;

            case "tired" :
                this.maxXVel = this.slowMaxXVel;
                break;

            case "run" :
                this.maxXVel = this.fastMaxXVel;
                this.jumpAboveObjectNext = millis() - this.jumpInterval;
                this.startRunTime = millis();

                if(this.xDir !== "left" || this.xDir !== "right")
                {
                    this.setXDir((random(0, 1) < 0.5) ? "left" : "right");
                }
                break;
        }
    };
    this.endTask = function()
    {
        switch(this.task)
        {
            case "charge" : case "run" : case "tired" :
                this.maxXVel = this.autoMaxXVel;
                break;
        }
    };
    this.updateTask = function()
    {
        this.task = "run";

        switch(this.task)
        {
            case "charge" :
                if(millis() - this.lastComeBackTime > 1000)
                {
                    this.setXDir((this.middleXPos > this.hitObject.middleXPos) ? "left" : "right");

                    this.lastComeBackTime = millis();
                }

                this.setYDir("");

                if(this.hitObject.yPos < this.yPos && this.hitObject.yVel < 0 && 
                    this.hitObject.yPos > this.yPos - this.hitObject.height * 1.5 && 
                   (this.hitObject.xVel !== 0 || random(0, 1) < 0.05) && 
                   millis() - this.jumpAboveObjectNext > this.jumpInterval &&
                   abs(this.middleXPos - this.hitObject.middleXPos) > ((this.width + this.hitObject.width) / 2) && 
                   abs(this.xPos - this.hitObject.xPos) < levelInfo.unitWidth * 2)
                {
                    this.setYDir("up");

                    this.jumpAboveObjectNext = millis();
                    this.lastComeBackTime = millis();

                    this.energy -= 5 / fpsCatcher.actualFps;
                }

                if(this.hitObject.yPos < this.yPos && millis() - this.startRunTime > 2000 && 
                   random(0, 1) < 0.1 && millis() % 1000 >= 900 && 
                   abs(this.middleXPos - this.hitObject.middleXPos) < (this.width + this.hitObject.width) / 2)
                {
                    this.setTask("run");
                }

                this.energy -= 1 / fpsCatcher.actualFps;

                if(this.energy < 15)
                {
                    this.maxXVel = this.fastMaxXVel - 0.5 - this.slowDown;
                }

                if(this.energy < 0)
                {
                    this.energy = 0;
                    this.setTask("tired");
                }
                break;

            case "run" :
                this.setYDir("");

                if(this.hitObject.yPos >= this.yPos && 
                   millis() - this.jumpAboveObjectNext > this.jumpInterval &&
                   abs(this.xPos - this.hitObject.xPos) < levelInfo.unitWidth * 2.5)
                {
                    this.setYDir("up");

                    this.energy -= 9 / fpsCatcher.actualFps;

                    this.jumpAboveObjectNext = millis();
                }

                if(this.hitObject.yPos < this.yPos && abs(this.middleXPos - this.hitObject.middleXPos) < (this.width + this.hitObject.width) / 2)
                {
                    if(this.xPos + this.width >= levelInfo.xPos + levelInfo.width - this.width * 2.5)
                    {
                        this.setXDir("left");
                    }
                    else if(this.xPos < levelInfo.xPos + this.width * 2.5)
                    {
                        this.setXDir("right");
                    }else{
                        this.setXDir((this.hitObject.xVel > 0 && this.xVel !== 0) ? "left" : "right");
                    }
                }

                if(millis() - this.jumpAboveObjectNext < this.jumpInterval)
                {
                    this.maxXVel = this.fastMaxXVel + 2;
                }else{
                    this.maxXVel = this.fastMaxXVel;
                }

                this.energy -= 2 / fpsCatcher.actualFps;

                if(this.energy < 15)
                {
                    this.maxXVel = this.fastMaxXVel - this.slowDown;
                }
                else if(millis() - this.startRunTime > 5000)
                {
                    this.setTask("charge");
                }

                if(this.energy < 0)
                {
                    this.energy = 0;
                    this.setTask("tired");
                }
                break;

            case "tired" :
                this.setYDir("");

                if(this.hitObject.yPos < this.yPos && abs(this.middleXPos - this.hitObject.middleXPos) < (this.width + this.hitObject.width) / 2)
                {
                    this.setXDir((this.hitObject.xVel > 0) ? "left" : "right");
                }

                this.energy += 10 / fpsCatcher.actualFps;

                if(this.energy > this.maxEnergy)
                {
                    this.energy = this.maxEnergy;
                    this.setTask("charge");
                }
                break;
        }
    };

    this.setXDir = function(input)
    {
        this.xDir = input;
    };
    this.setYDir = function(input)
    {
        this.yDir = input;
    };
    this.clearXDir = function()
    {
        this.xDir = "";
    };
    this.clearYDir = function()
    {
        this.yDir = "";
    };
    this.clearDir = function()
    {
        this.clearXDir();
        this.clearYDir();
    };

    this.lastThrowTimer = millis();
    this.throwTime = 1200;

    this.updateNinjaStars = function()
    {
        if(millis() - this.lastThrowTimer >= this.throwTime)
        {
            var self = this;

            var amount = (random(0, 1) > 0.15) ? 1 : 2;

            this.createNinjaStar(amount, function(ninjaStar, i)
            {
                var a = atan2(self.middleYPos - self.hitObject.middleYPos, 
                              self.middleXPos - self.hitObject.middleXPos) - PI / 2;

                var speed = self.maxXVel + Number(random(0, 0.5).toFixed(1));

                ninjaStar.outerXVel2 = sin(a) * speed;
                ninjaStar.outerYVel2 = max(-5, -abs(cos(a) * speed));

                ninjaStar.damage = 0.2;
            });

            this.lastThrowTimer = millis();
        }
    };

    this.setTask("charge");

    this._lastUpdate = this.update;
    this.update = function()
    {
        physics.getMiddleXPos(this);
        physics.getMiddleYPos(this);

        this.hitObject = gameObjects.getObject("player")[0];  

        if(this.hitObject !== undefined)
        {
            physics.getMiddleXPos(this.hitObject);
            physics.getMiddleYPos(this.hitObject);

            this.updateTask();
            this.updateNinjaStars();
        }

        this._lastUpdate();
    };

    this.avoidCollision = function(object)
    {
        return (object.arrayName === "spike" || object.arrayName === "slope");
    };

    this.blowsToTheHead = 0;

    this._lastRemove = this.remove;

    this.remove = function()
    { 
        this.lastRemove();

        if(gameObjects.getObject("player").input(0).maxHp < 15)
        {
            gameObjects.getObject("heart").add(
                levelInfo.xPos + levelInfo.width / 2,
                levelInfo.yPos + levelInfo.unitHeight, 
                levelInfo.unitWidth, 5);

            var heart = gameObjects.getObject("heart").getLast();

            heart.falling = true;
            heart.gravity = 5;

            heart.minimumYPos = levelInfo.yPos + levelInfo.unitHeight * 11;

            cameraGrid.addReference(heart);
        }
    };

    this._lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        if(object.arrayName === "lever")
        {
            if(!object.set)
            {
                object.set = true;
            }
            return;
        }

        if(this.hitObject !== undefined)
        {
            if(object.arrayName === this.hitObject.arrayName)
            {
                switch(info.side)
                {
                    case "up" :
                        this.blowsToTheHead++;

                        this.energy -= 2.5;

                        if(this.blowsToTheHead % 3 >= 2)
                        {
                            this.setTask("run");
                        }

                        if(this.yVel < 0)
                        {
                            this.hitObject.yVel = -14;
                        }
                        break;
                }
            }
        }

        this._lastOnCollide(object, info);
    };
};
gameObjects.addObject("ninjaBoss", createArray(NinjaBoss));

var IceDragon = function(xPos, yPos, width, height)
{
    Boss.call(this, xPos, yPos, width, height, color(15, 120, 220, 220), {
        charging : true,
    }, false, 35);

    this.physics.solidObject = true;

    var self = this;

    this.gravity = 0;

    this.nodes = [{
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : 300,
        yPos : 80
    }, {
        xPos : 400,
        yPos : 80,
    }, {
        xPos : 400,
        yPos : 80,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }, {
        xPos : this.xPos,
        yPos : this.yPos,
    }];
    this.nodes.draw = function()
    {
        noStroke();
        fill(255, 255, 255, 80);
        beginShape();
            for(var i = this.length - 1; i >= 0; i--)
            {
                vertex(this[i].xPos, this[i].yPos);
            }
        endShape(CLOSE);
    };
    this.nodes.getSides = function(pointer)
    {
        var sides = [];
        var ra = physics.formulas.resolveAngle;

        for(var i = 0; i < this.length - 1; i++)
        {
            var point0 = this[i], point1 = this[i + 1];

            var s = physics.formulas.crossProduct(pointer, point1, point0);

            if(abs(s) / 30 > (Math.sqrt(abs(point1.xPos - point0.xPos)) + Math.sqrt(abs(point1.yPos - point0.yPos))) * 3)
            {
                sides[i] = 0;
                continue;
            }

            var side = physics.formulas.sign(s);

            var a = degrees(atan2(point1.yPos - point0.yPos, 
                                  point1.xPos - point0.xPos));

            var n1 = ra(a - ra(degrees(atan2(point0.yPos - pointer.yPos, 
                                             point0.xPos - pointer.xPos))));
            var n2 = ra(a - ra(degrees(atan2(point1.yPos - pointer.yPos, 
                                             point1.xPos - pointer.xPos))));
   
            sides[i] = 0;

            if(side > 0)
            {
                if(n1 < 270 && n2 > 270)
                {
                    sides[i] = side;
                }
            }else{
                if(n1 > 90 && n2 < 90)
                {
                    sides[i] = side;
                }
            }
        }

        return sides;
    };
    this.nodes.applyCollision = function(object)
    {
        var pointerLeftUp = {
            xPos : object.xPos,
            yPos : object.yPos,
        };

        var pointerRightUp = {
            xPos : object.xPos + object.width,
            yPos : object.yPos,
        };

        var aSides = this.getSides(pointerLeftUp);
        var bSides = this.getSides(pointerRightUp);

        var a = aSides.indexOf(-1);
        var b = bSides.indexOf(-1);

        if(a !== -1 && !observer.collisionTypes.rectrect.colliding(object, physics.formulas.createBoundingBoxForLine(this[a], this[a + 1])))
        {
            a = -1;
        }

        if(b !== -1 && !observer.collisionTypes.rectrect.colliding(object, physics.formulas.createBoundingBoxForLine(this[b], this[b + 1])))
        {
            b = -1;
        }

        if(a !== -1 || b !== -1)
        {
            var newPointerLeft = (a === -1) ? false : physics.formulas.closestPointOnLine(pointerLeftUp, this[a], this[a + 1]);
            var newPointerRight = (b === -1) ? false : physics.formulas.closestPointOnLine(pointerRightUp, this[b], this[b + 1]);

            var y1 = Math.min(newPointerLeft ? newPointerLeft.yPos : Infinity, 
                              newPointerRight ? newPointerRight.yPos : Infinity);

            object.xPos = (y1 === newPointerLeft.yPos) ? newPointerLeft.xPos : newPointerRight.xPos - object.width;
            object.yPos = y1;

            object.yVel = 1;
            object.inAir = true;

            object.updateBoundingBox();
        }

        var pointerLeftDown = {
            xPos : object.xPos,
            yPos : object.yPos + object.height,
        };

        var pointerRightDown = {
            xPos : object.xPos + object.width,
            yPos : object.yPos + object.height,
        };

        var iSides = this.getSides(pointerLeftDown);
        var jSides = this.getSides(pointerRightDown);

        var i = iSides.indexOf(-1);
        var j = jSides.indexOf(-1);

        if(i !== -1 && !observer.collisionTypes.rectrect.colliding(object, physics.formulas.createBoundingBoxForLine(this[i], this[i + 1])))
        {
            i = -1;
        }

        if(j !== -1 && !observer.collisionTypes.rectrect.colliding(object, physics.formulas.createBoundingBoxForLine(this[j], this[j + 1])))
        {
            j = -1;
        }

        if(i !== -1 || j !== -1)
        {
            var newPointerLeft = (i === -1) ? false : physics.formulas.closestPointOnLine(pointerLeftDown, this[i], this[i + 1]);
            var newPointerRight = (j === -1) ? false : physics.formulas.closestPointOnLine(pointerRightDown, this[j], this[j + 1]);

            var y1 = Math.min(newPointerLeft ? newPointerLeft.yPos : Infinity, 
                              newPointerRight ? newPointerRight.yPos : Infinity);

            object.xPos = (y1 === newPointerLeft.yPos) ? newPointerLeft.xPos : newPointerRight.xPos - object.width;
            object.yPos = y1 - object.height;

            object.yVel = Math.min(object.yVel, 1);
            object.inAir = (object.yVel >= 2);

            object.updateBoundingBox();
        }
    };

    this.angle = 120;

    this.sections = 5;
    this.sectionLength = 120;

    this.dragNodes = function()
    {
        this.fallLine = this.yPos + 5;

        if(mouseIsPressed)
        {
            if(mouseButton === RIGHT)
            {
                this.yPos -= 0.75;
            }else{
                this.yPos += 0.75;
            }
        }

        this.nodes[0].xPos = this.xPos + this.width;
        this.nodes[0].yPos = this.fallLine;

        if(!this._init_)
        {
            for(var i = 1; i < this.sections; i++)
            {
                this.nodes[i].xPos = this.xPos + this.sectionLength * i;
                this.nodes[i].yPos = this.fallLine;
            }
            this._init_ = true;
        }

        var node, lastNode;

        var d = dist(0, 0, this.xVel, this.yVel);
        for(var i = 1; i < this.sections; i++)
        {
            var node = this.nodes[i], lastNode = this.nodes[i - 1];
            node.xPos += this.xVel;
            node.yPos += this.yVel;

            if(node.yPos > lastNode.yPos)
            {
                node.yPos = lastNode.yPos;
            }
        }

        /*Bottom*/

        this.nodes[5].xPos = this.xPos + 120 * 4;
        this.nodes[5].yPos = this.yPos + 80;

        this.nodes[6].xPos = this.xPos + 120 * 3;
        this.nodes[6].yPos = this.yPos + 80;

        this.nodes[7].xPos = this.xPos + 120 * 2;
        this.nodes[7].yPos = this.yPos + 72;

        this.nodes[8].xPos = this.xPos + 120 * 1;
        this.nodes[8].yPos = this.yPos + 56;

        this.nodes[9].xPos = this.xPos + this.width;
        this.nodes[9].yPos = this.yPos + this.height - 3;
    };

    var _lastUpdate = this.update;
    this.update = function(isRemote)
    {
        if(!isRemote)
        {
            this.updateBoundingBox();
            return;
        }

        this.dragNodes();
        _lastUpdate.apply(this, arguments);
    };

    this.draw = function(isRemote)
    {
        if(!isRemote)
        {
            return;
        }

        this.nodes.draw();

        fill(255, 255, 255, 80);
        stroke(255, 255, 255);
        rect(this.xPos, this.yPos, this.width, this.height, 5);
        noStroke();
    };
};
gameObjects.addObject("iceDragon", createArray(IceDragon));

var XStar = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    this.colorValue = colorValue;

    this.physics.movement = "dynamic";
    this.physics.solidObject = false;

    this.outerXVel = 0;
    this.outerYVel = 0;

    this.damage = 1;

    this.life = 200;

    this.blocked = false;

    this.imageName = "ninjaStar";
    this.setAngle = 0;
    this.setAngleVel = 3;

    this.explosive = true;

    this.draw = function()
    {
        pushMatrix();
        translate(this.xPos, this.yPos);
        rotate(this.setAngle);
        image(storedImages[this.imageName], -this.radius, -this.radius, this.diameter, this.diameter);
        popMatrix();

        this.setAngle += 3;

        noStroke();
        fill(31, 89, 235, 170);
        ellipse(this.xPos, this.yPos, this.radius * 1.1, this.radius * 1.1);
    };

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos - this.radius;
        this.boundingBox.yPos = this.yPos - this.radius;
    };

    this.lastUpdate1 = this.update;
    this.update = function()
    {
        this.lastUpdate1();
        this.xPos += this.outerXVel2 || 0;
        this.yPos += this.outerYVel2 || 0;  

        this.updateBoundingBox();   

        this.life--;
        if(this.life < 0)
        {
            this.remove();
            this.onCollide = function() {};
        }       
    };

    this.blockedObjects = [];

    this.onCollide = function(object, info)
    {
        if(object.physics.solidObject && object.arrayName !== "fallingBlock" && object.physics.movement === "static")
        {
            this.onCollide = function() {};
            this.remove();
        }
        else if(object.isLifeForm && object.arrayName !== "player" && this.blockedObjects.indexOf(object.arrayName + object.index) === -1)
        {
            var blocked = object.takeDamage(this);

            if(!blocked)
            {
                this.onCollide = function(){};
                this.remove(object);
            }else{
                var d = Math.sqrt(Math.pow(this.outerYVel2, 2) + Math.pow(this.outerXVel2, 2));
                var a = atan2(this.outerYVel2, 
                              this.outerXVel2);

                a += PI;
                d *= 1.1;

                this.outerXVel2 = cos(a) * d;
                this.outerYVel2 = sin(a) * d;

                this.blockedObjects.push(object.arrayName + object.index);
            }
        }
    };

    this.activate = function(object)
    {
        return object.arrayName === "lever";
    };
};
gameObjects.addObject("xStar", createArray(XStar));

//Npc (Non playable character)
var Npc = function(xPos, yPos, width, height, colorValue)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(250, 250, 250, 150);

    this.message = "hi";
    this.messagePattern = {
        "hi" : {
            message : "Hi",
        },
    };

    this.showName = false;

    this.lastUpdate2 = this.update;
    this.update = function()
    {
        if(!this.setSize && storedImages.npcs[this.img] !== undefined)
        {
            this.yPos -= abs(storedImages.npcs[this.img].inputHeight - this.height);
            this.height = storedImages.npcs[this.img].inputHeight;
            this.width = storedImages.npcs[this.img].inputWidth;
            this.boundingBox.width = this.width;
            this.boundingBox.height = this.height;
            this.setSize = true;
        }
        this.lastUpdate2();
    };

    this.draw = function()
    {
        if(this.img === undefined)
        {
            fill(this.color);
            rect(this.xPos, this.yPos, this.width, this.height, 7.5);
        }
        else if(storedImages.npcs[this.img] !== undefined)
        {
            image(storedImages.npcs[this.img], this.xPos, this.yPos);
        }
    };

    this.avoidCollision = function(object)
    {
        return (object.type === "lifeform" || object.arrayName === this.arrayName);
    };

    this.onCollide = function(object)
    {
        if(object.talkToNpc !== undefined && object.talkToNpc() && !messageHandler.active)
        {
            object.xVel = 0;
            object.yVel = 0;
            talkHandler.start(this.messagePattern, this.message, this.name);
        }
    }
};
gameObjects.addObject("npc", createArray(Npc));

var Player = function(xPos, yPos, width, height, colorValue)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    LifeForm.call(this, 10, true); //Inherit from life form with LifeForm.call(this, hp, notNormalDeath);
    
    this.restart = false;
    this.coins = 0;
    this.score = 0;
    this.damage = 1;
    this.xAcl = 0.23;

    this.jumpTime = 5;
    this.jumpSpeed = 1.73;
    this.jumpHeight = 8;
    this.maxYVel = 12.5;

    //Never die (temperary)
    this.maxLives = 9999;
    this.lives = this.maxLives;

    this.walkSpeed = 3.25 - 0.34;
    this.runSpeed  = 4.25 - 0.84;

    this.xForce = 2;
    this.yForce = 3;

    this.imageName = "suit";
    this.marchTimer = 0;
    this.marchTime = 30;
    this.splitMarchTime = this.marchTime / 3;

    this.maxDefense = 70;

    this.invincibleToLifeForm = true;
    this.lifeFormHitTime = millis();
    this.invincibleToLifeFormTime = 2000;

    this.res = {}; //Resistants

    this.discoveredPowers = {}; //These will get replaced, don't attach anything to it.
    this.changePowers = {};
    this.inventory = {};
    this.crystals = {};

    var self = this;

    this.setInventory = function(slots)
    {
        this.inventory.items = [];
        this.inventory.slots = slots || 10;
        for(var i = 0; i < this.inventory.slots; i++)
        {
            this.inventory.items.push({});
        }
    };

    this.setInventory();

    this.updateItemsOrder = function(scene)
    {
        var items = this.inventory.items;

        for(var i = 0; i < items.length; i++)
        {
            var item = items[i];

            if(!item || !item.contains)
            {
                scene.buttons["player_" + i] = new Button(10, 132 + i * 18, 140, 18, color(28, 28, 28, 100), " - ");
            }else{
                scene.buttons["player_" + i] = new Button(10, 132 + i * 18, 140, 18, color(12, 60, 160, 100), " - ");
                scene.buttons["player_" + i].message = items[i].displayName || 
                (usableItems[items[i].contains] ? 
                usableItems[items[i].contains].displayName : false)  || items[i].contains;
            }

            scene.buttons["player_" + i].textSize = 10;
            scene.buttons["player_" + i].textColor = color(240, 240, 240, 200);
            scene.buttons["player_" + i].hover = items[i].description || 
                (usableItems[items[i].contains] ? 
                usableItems[items[i].contains].description : false) || 
                scene.buttons["player_" + i].hover;

            if(scene.buttons["player_" + i].message !== " - ")
            {
                scene.buttons["player_" + i].extra = (items[i].amount ? " x " + items[i].amount : "");
            }else{
                delete scene.buttons["player_" + i].extra;
            }

            scene.buttons["player_" + i].index = i;

            if(this.highlightItems)
            {
                var _lastOnClick = scene.buttons["player_" + i].onClick;
                scene.buttons["player_" + i].lastChangeTime = 0;
                scene.buttons["player_" + i].onClick = function()
                {
                    if(mouseIsPressed && millis() - this.lastChangeTime > 400 && this.message !== " - ")
                    {
                        this.highlighted = !this.highlighted;
                        this.highlightStroke = this.highlighted ? color(200, 200, 200, 180) : undefined;

                        this.lastChangeTime = millis();

                        if(!this.highlighted)
                        {
                            scene.highlightedButtonIndex = undefined;
                            return;
                        }

                        scene.highlightedButtonIndex = this.index;
                    }

                    return _lastOnClick.apply(this, arguments);
                };
            }
        }
    };

    this.onOpenItems = function(scene, highlightItems)
    {
        this.highlightItems = highlightItems || false;
        scene.highlightItems = this.highlightItems;

        if(!this.inventory.items || this.inventory.items.length <= 0)
        {
            this.setInventory();
        }

        this.updateItemsOrder(scene);

        scene.buttons["player_up"] = new Button(10, 312, 70, 18, color(28, 180, 48, 100), "^", undefined, 11);
        scene.buttons["player_up"].lastHitTime = 0;
        scene.buttons["player_up"].onClick = function()
        {
            if(!mouseIsPressed)
            {
                this.lastHitTime = 0;
                return;
            }

            if(millis() - this.lastHitTime < 140)
            {
                return;
            }

            self.inventory.items.push(self.inventory.items.shift());
            self.updateItemsOrder(scene);

            this.lastHitTime = millis();
        };

        scene.buttons["player_down"] = new Button(80, 312, 70, 18, color(28, 180, 48, 100), "v", undefined, 11);
        scene.buttons["player_down"].lastHitTime = 0;
        scene.buttons["player_down"].onClick = function()
        {
            if(!mouseIsPressed)
            {
                this.lastHitTime = 0;
                return;
            }

            if(millis() - this.lastHitTime < 140)
            {
                return;
            }

            self.inventory.items.unshift(self.inventory.items.pop());
            self.updateItemsOrder(scene);

            this.lastHitTime = millis();
        };
    };

    var self = this;

    this.maxAir = 200;
    this.air = 200;
    this.breathing = true;

    this.downBreathSpeed = 0.03;
    this.upBreathSpeed = 0.3;

    this.addCastForLiquid = function()
    {
        self.breathing = true;

        gameObjects.getObject("cast").add(
            self.xPos + self.halfWidth, 
            self.yPos + self.halfHeight * 0.2, 3, self.arrayName, function(object)
        {
            if(object.physics === undefined)
            {
                return;
            }

            if(object.arrayName === "water")
            {
                self.breathing = false;
            }
        }, 
        undefined, false);

        self.cast = gameObjects.getObject("cast").getLast();
        self.cast.noSolid = true;

        cameraGrid.addReference(self.cast);
    };

    this.discoveredPowersHandler = {
        currentPower : "",
        addPower : function(name, object)
        {
            self.discoveredPowers[name] = object || {};  
            this.currentPower = name;
            this.setChangePowers();
        },
        init : function()
        {
            for(var i in self.discoveredPowers)
            {
                var array = gameObjects.getObject(i);
                array.add(0, 0, 0, 0);
                self.discoveredPowers[i] = array.getLast().actObject || self.discoveredPowers[i];
                array.getLast().remove();
            }
        },
        setChangePowers : function()
        {
            self.changePowers = {};
            for(var i in self.discoveredPowers)
            {
                var power = self.discoveredPowers[i];
                power.active = false;
                self.changePowers[power.key] = i;
            }
        },
        testChangePowers : function()
        {
            if(keyIsPressed)
            {
                this.currentPower = self.changePowers[key.toString()] || this.currentPower;
            }
        },
        activate : function()
        {
            if(this.currentPower === "")
            {
                return;
            }

            var power = self.discoveredPowers[this.currentPower];

            var pastActive = power.active;
            power.active = self.controls.activate() || false;

            if(!pastActive && power.active)
            {
                power.startTime = millis();
                (power.start || function() {}) (self, power);
            }

            if(power.active)
            {
                (power.activate || function() {}) (self, power);
            }
            else if(pastActive)
            {
                power.endTime = millis();
                (power.end || function() {}) (self, power);
            }
        },
        avoidDamage : function(object, amt)
        {
            if(this.currentPower === "")
            {
                return false;
            }

            var power = self.discoveredPowers[this.currentPower];

            return (power.avoidDamage || function() 
            { 
                return false;
            }) (object, amt, self, power);
        },
        update : function()
        {
            if(this.currentPower === "")
            {
                return;
            }

            var power = self.discoveredPowers[this.currentPower];
            (power.update || function() {}) (self, power, self.controls.activate() || false);
        },
        draw : function()
        {
            if(this.currentPower === "")
            {
                return;
            }

            var power = self.discoveredPowers[this.currentPower];
            (power.draw || function() {}) (self, power, self.controls.activate() || false);
        },
        onCollide : function(object, info)
        {
            if(this.currentPower === "")
            {
                return;
            }

            var power = self.discoveredPowers[this.currentPower];
            (power.onCollide || function() {}) (self, power, self.controls.activate() || false, object, info);
        },
    };

    this.getNinjaResMult = function(object)
    {
        return (((object.arrayName === "ninja" || 
        object.arrayName === "ninjaStar") &&
        this.res.ninjaResistanceLevel) ? 
        Math.abs(1 - (Math.min(4, this.res.ninjaResistanceLevel) * 2 / 9)) : 1);
    };

    this.getDamage = function(object, amt)
    {
        return ((!object.isLifeForm/* && this.invincibleToLifeForm*/) ? 0 : (amt || object.damage));
    };

    this.takeDamage = function(object, amt)
    {
        if((!this.lps || performance.now() % this.lps >= this.lps - 1) && (!object.isLifeForm || !this.invincibleToLifeForm))
        {
            this.lastHp = this.hp;
            var damage1 = ((object.getDamage !== undefined) ? object.getDamage(object, amt) : (amt || object.damage));

            if(this.discoveredPowersHandler.avoidDamage(object, amt))
            {
                return true;
            }

            this.hp -= (damage1) * this.subDefense() * this.getNinjaResMult(object);

            if(object.isLifeForm || object.makeBlink)
            {
                this.invincibleToLifeForm = true;
                this.lifeFormHitTime = millis();
            }
        }
    };

    this.setFixture = function()
    {
        lighting.fixtures.player = {
            xPos : this.xPos,
            yPos : this.yPos + this.halfHeight,
            range : 120,
            brightness : 100, //0-100
            centeredLighting : 100,
            inCam : true,

            /* Offset settings*/
            perX : levelInfo.unitWidth * 4,
            perY : levelInfo.unitHeight * 4,
            halfWidth : this.halfWidth,
            halfHeight : this.halfHeight,
        };
    };

    this.setFixture();

    this.xFire = (random(0, 1) < 0.5) ? -1 : 1;
    this.backwards = true;
    this.autoRun = true;

    this.controls = {
        left : function()
        {
            var left = (keys[LEFT] || keys[65]);
            if(left)
            {
                self.xFire = -1;
                self.throwInversed = false;
            }
            if(self.backwards && keys[" "])
            {
                self.xFire = 1;
                self.throwInversed = true;
            }
            return left;
        },
        right : function()
        {
            var right = (keys[RIGHT] || keys[68]);
            if(right)
            {
                self.xFire = 1;
                self.throwInversed = false;
            }
            if(self.backwards && keys[" "])
            {
                self.xFire = -1;
                self.throwInversed = true;
            }
            return right;
        },
        up : function()
        {
            return (keys[UP] || keys[87]);
        },
        down : function()
        {
            return (keys[DOWN] || keys[83]);
        },
        restart : function()
        {
            return (keys[82]); //The 'r' key
        },
        toggleZoom : function()
        {
            return (keys.x || keys.k);
        },
        zoom : function()
        {
            return self.autoRun;//'x'/'k' keys
        },
        activate : function()
        {
            return (keys.z || keys.l);
        },
        shake : function()
        {
            return keys[' '];
        },
    };

    this.keyPressed = function()
    {
        if(this.controls.toggleZoom())
        {
            this.autoRun = !this.autoRun;
        }

        if(this.frozen && (this.controls.shake() || this.controls.activate() || 
                           this.controls.up() || this.controls.down() || this.con))
        {
            this.freeze -= 20;
        }
    };

    this.setPowers = function(powers)
    {
        for(var i = powers.length; i >= 0; i--)
        {
            if((powers[i] === "bubbleShield" || (powers[i] !== undefined && powers[i].name === "bubbleShield")))
            {
                var array = gameObjects.getObject("bubbleShield");
                array.add(physics.getMiddleXPos(this), physics.getMiddleYPos(this), max(this.height, this.width));

                if(!this.nextBubbleShield)
                {
                    powers[i].hp -= floor(100 / 3);
                }

                var bubbleShield = array.getLast();
                bubbleShield.hp = min(bubbleShield.maxHp, (powers[i].hp || bubbleShield.hp));

                //The two fundamental things for an object to be known in it's space :
                bubbleShield.updateBoundingBox();
                cameraGrid.addReference(bubbleShield);
            }
        }
    };

    this.getPowers = function()
    {
        var powers = [];
        if(this.bubbleShield !== undefined)
        {
            var inputBs = gameObjects.getObject("bubbleShield").input(this.bubbleShield.index);
            this.bubbleShield = ((!inputBs.fake) ? inputBs : this.bubbleShield);
            powers.push({
                name : "bubbleShield",
                hp : this.bubbleShield.hp,
            });
        }
        return powers;
    };

    var self = this;

    this.exploding = false;
    this.explosionTime = 1000 * 3;
    this.explosionImages = [];
    this.explosionPieces = [];
    this.explosionPieces.update = function()
    {
        for(var i = 0; i < this.length; i++)
        {
            var piece = this[i];
            if(piece.timer === undefined || piece.timer < 0)
            {
                piece.yVel += piece.gravity;

                piece.xPos += piece.xVel;
                piece.yPos += piece.yVel;
            }else{
                piece.timer--;
            }

            if(piece.yPos > self.yPos + cam.halfHeight)
            {
                this.splice(i, 1);
            }
        }
    };
    this.explosionPieces.draw = function(xOff, yOff)
    {
        for(var i = 0; i < this.length; i++)
        {
            image(this[i].image, this[i].xPos + xOff, this[i].yPos + yOff, this[i].width, this[i].height);
        }
    };

    this.tryWidth = 5;
    this.tryHeight = 10;

    this.initImage = function()
    {
        if(this.explosionImages.length <= 0)
        {
            var tryWidth = this.tryWidth;
            var tryHeight = this.tryHeight;

            resetMatrix();
            background(0, 0, 0, 0);
            image(storedImages[this.imageName], 0, 0, this.width, this.height);

            for(var x = 0; x < this.width; x += tryWidth)
            {
                this.explosionImages.push([]);
                for(var y = 0; y < this.height; y += tryHeight)
                {
                    this.explosionImages[x / tryWidth].push(get(x, y, tryWidth, tryHeight));
                }
            }
        }
    };

    this.initImage();

    this.startExplosion = function()
    {
        if(this.exploding)
        {
            return;
        }

        self = this;

        this.explosionStartTime = millis();
        this.exploding = true;

        var tryWidth = this.tryWidth;
        var tryHeight = this.tryHeight;

        var maxJ = this.explosionImages[0].length;
        for(var i = 0; i < this.explosionImages.length; i++)
        {
            for(var j = 0; j < this.explosionImages[i].length; j++)
            {
                this.explosionPieces.push({
                    image : this.explosionImages[i][j],
                    xPos : i * tryWidth,
                    yPos : j * tryHeight,
                    width : tryWidth * random(0.8, 1.6),
                    height : tryHeight * random(0.8, 1.6),
                    xVel : random(-1.4, 1.4),
                    yVel : -4,
                    timer : ((maxJ) - j) * tryHeight,
                    gravity : random(0.2, 0.3) / 1.3,
                });
            }
        }
    };

    this.endExplosion = function(onEnd)
    {
        this.exploding = false;
        this.explosionTimer = 0;
        this.explosionPieces.length = 0;
        this.quickBoom = false;

        (onEnd || function(){})();
    };

    this.updateExplosion = function(onEnd)
    {
        if(!this.exploding)
        {
            return;
        }

        if(millis() - this.explosionStartTime >= 300)
        {
            this.explosionPieces.update();

            if(!this.quickBoom && millis() - this.explosionStartTime >= 900)
            {
                sounds.mplaySound("quickBoom.wav");
                this.quickBoom = true;
            }
        }
        if(this.explosionPieces.length <= 0)
        {
            this.endExplosion(onEnd);
        }
    };

    this.drawExplosion = function()
    {
        if(!this.exploding)
        {
            return;
        }

        this.explosionPieces.draw(this.xPos, this.yPos);
    };

    this.deathInfo = {};
    this.saveDeathInfo = function()
    {
        this.deathInfo = {
            playerWasDead : this.dead,
            playerWasDeath : this.isDeath,
            playerLastHp : this.hp,
        };
    };

    this.safeRevive = function(toSetHp)
    {
        this.dead = false;
        this.exploding = false;
        this.physics.solidObject = true;
        this.invincibleToLifeForm = false;
        this.air = this.maxAir;

        this.freeze = 0;
        this.accume = 0;
        this.frozenHits = 0;
        this.frozen = false;

        if(this.deathInfo.playerWasDead && this.goto.travelType === "checkPoint")
        {
            //Does the player need to be revived or not?
            if(this.hp <= 0)
            {
                this.revive();
            }
        }
    };

    this.handleDeath = function(isDeath)
    {
        if(this.goto.checkPointLevel !== undefined)
        {
            this.goto.travelType = "checkPoint";
        }

        if(isDeath)
        {
            this.lives--;

            if(this.lives <= 0)
            {
                this.lives = this.maxLives;
                levelInfo.level = "intro";
                this.goto.checkPointLevel = "intro";
                this.goto.checkPointIndex = 0;
                game.switchGameState(true, "gameOver", true);
            }

            /*Make sure we are still exploding when we die so we don't
            see ourselves reappear when the death animation is over*/
            this.exploding = true; 
        }

        if(this.bubbleShield !== undefined)
        {
            this.bubbleShield.remove();
            this.bubbleShield.save = false;
            this.bubbleShield.objectToAttachTo = undefined;
            this.bubbleShield = undefined;

            var array = gameObjects.getObject("bubbleShield");
            array.length = 0;
        }

        this.dead = true;
        this.nextBubbleShield = !isDeath;
        this.isDeath = isDeath;
        this.invincibleToLifeForm = false;

        this.air = this.maxAir;
        this.isLifeForm = true;

        this.saveDeathInfo();
        loader.startLoadLevel(this.goto.checkPointLevel || levelInfo.level);
    };

    this.updateLighting = function()
    {
        if(levelInfo.daylightCycle || levelInfo.nightMode)
        {
            if(lighting.fixtures.player === undefined)
            {
                this.setFixture();
            }

            lighting.fixtures.player.xPos = this.xPos + ((this.xVel >= 0) ? this.halfWidth : this.width);
            lighting.fixtures.player.yPos = this.yPos + this.halfHeight;
        }
    };

    this.rendered = false;
    this.draw = function()
    {
        this.rendered = true;
        var img = "suit";
        if(this.xVel > this.xAcl)
        {
            if(!this.inAir)
            {
                this.marchTimer += this.controls.zoom() ? 1.5 : 1;
            }
            this.imageName = (this.marchTimer < this.splitMarchTime) ? img + "Right" : (this.marchTimer < this.splitMarchTime * 2) ? img + "Right2" : img + "Right3";
        }
        else if(this.xVel < -this.xAcl)
        {
            if(!this.inAir)
            {
                this.marchTimer += this.controls.zoom() ? 1.5 : 1;
            }
            this.imageName = (this.marchTimer < this.splitMarchTime) ? img + "Left" : (this.marchTimer < this.splitMarchTime * 2) ? img + "Left2" : img + "Left3";
        }else{
            this.imageName = img;
        }
        if(this.marchTimer > this.marchTime)
        {
            this.marchTimer = 0;
        }

        if(!this.exploding && (!this.invincibleToLifeForm || millis() % 600 >= 300))
        {
            image(storedImages[this.imageName], this.xPos, this.yPos, this.width, this.height);
        }

        this.drawExplosion();
        this.updateLighting();
        this.discoveredPowersHandler.draw();

        if(this.frozen)
        {
            fill(0, 170, 200, 100);
            rect(this.xPos, this.yPos, this.width, this.height);
        }
    };

    this.maxAccume = 10;
    this.accume = 0;

    this.frozenTime = 0;
    this.freezeTime = 2000;

    this.freeze = 0;
    this.frozenHits = 0;

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.nextBubbleShield = true;

        if(!this.invincibleToLifeForm)
        {
            if(this.accume >= 1)
            {
                this.accume = 1;
                if(this.freeze <= 0 && !this.frozen)
                {
                    this.freeze = 100;
                    this.frozenTime = millis();
                }
            }

            this.lastFrozen = this.frozen;
            this.frozen = (this.freeze > 0);

            if(!this.frozen && this.lastFrozen)
            {
                this.freeze = 0;
                this.accume = 0;
                this.frozenHits = 0;

                this.invincibleToLifeForm = true;
                this.lifeFormHitTime = millis();
            }

            if(this.frozen)
            {
                if(millis() - this.frozenTime > this.freezeTime)
                {
                    this.hp -= 1;
                    this.frozenHits++;
                    this.frozenTime = millis();

                    if(this.frozenHits > 2)
                    {
                        this.freeze = 0;
                    }
                }
            }
        }

        /*Specific code*/
        if(!this.added)
        {
            travelObjects.add(this);
            this.added = true;
        }
        
        var self = this;
        this.updateExplosion(function()
        {
            self.handleDeath(self.dead); //When the explosion ends, do this!
        });

        if(this.exploding)
        {
            return;
        }

        //Restart key 'r' spam protection
        if(!this.restart && !this.controls.restart())
        {
            this.restart = true;
        }
        
        if(this.dead || (this.restart && this.controls.restart())) //or 'r'
        {
            if(!this.dead || this.yPos >= levelInfo.yPos + levelInfo.height)
            {
                this.handleDeath(this.dead);
            }
            else if(!this.controls.restart())
            {
                game.cutScening = true;
                this.isLifeForm = false;
                this.startExplosion();
            }
            this.restart = false;
        }

         /////////////////////////////OTHER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        ///////////////////////////////CODE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        //Must be called in specifically this order.
        this.discoveredPowersHandler.testChangePowers();
        this.discoveredPowersHandler.activate();
        this.discoveredPowersHandler.update();

        this.maxXVel = (this.controls.zoom() ? this.runSpeed : this.walkSpeed);

        if(this.inLiquid)
        {
            this.maxXVel = 2;
            if(this.origMaxYVel === undefined)
            {
                this.origMaxYVel = this.maxYVel;
            }
            this.maxYVel = 3;
        }
        else if(this.origMaxYVel !== undefined)
        {
            this.maxYVel = this.origMaxYVel;
        }
        
        //May not need:
        if(this.bubbleShield !== undefined && this.toSet)
        {
            this.bubbleShield.xPos = physics.getMiddleXPos(this);
            this.bubbleShield.yPos = physics.getMiddleYPos(this);
            this.toSet = false;
        }

        this.readingSign = false;

        if(millis() - this.lifeFormHitTime >= this.invincibleToLifeFormTime)
        {
            this.invincibleToLifeForm = false;
        }

        if(this.breathing)
        {
            this.air += this.upBreathSpeed;
            this.air = min(this.air, this.maxAir);
        }

        if(levelInfo.inWater)
        {
            this.air = this.maxAir;
        }

        if(this.inLiquid)
        {
            if(millis() % 200 >= 180)
            {
                this.addCastForLiquid();
            }
        }
        else if(this.cast !== undefined)
        {
            this.breathing = true;
            this.cast.onKill();
            this.cast = undefined;
        }

        if(this.air <= 0 && millis() % 700 >= 680)
        {
            this.hp -= 1;
        }

        this.lastUpdate();
    };

    this.setAfter = function()
    {
        if(this.bubbleShield !== undefined)
        {
            var bubbleShields = gameObjects.getObject("bubbleShield");
            //If the bubble shield ceased to exist, set it back up!
            //Like when we go through a door
            if(bubbleShields.input(this.bubbleShield.index).fake)
            {
                bubbleShields[this.bubbleShield.index] = this.bubbleShield;
                var bubbleShield = bubbleShields[this.bubbleShield.index];
                bubbleShield.xPos = physics.getMiddleXPos(this);
                bubbleShield.yPos = physics.getMiddleYPos(this);
                bubbleShield.delete = false;
                bubbleShield.hideDelete = false;
                bubbleShield.updateBoundingBox();
                cameraGrid.addReference(bubbleShield);
                this.bubbleShield = bubbleShield;
            }
        }
    };

    this.lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        this.lastOnCollide(object, info);

        this.discoveredPowersHandler.onCollide(object, info);

        if(object.arrayName === "sign")
        {
            this.readingSign = true;
        }
    };

    /*Specific code*/
    this.goto = {};
    this.activate = function(override)
    {
        return ((!this.inAir || !this.breathing || override) && this.controls.down());
    };
    this.openDoor = function() 
    {
        return this.activate() && (this.hp > 0);
    };

    this.openChest = this.activate;
    this.talkToNpc = this.activate;
    this.useCheckPoint = function()
    {
        return (!this.inAir && this.hp > 0);
    };
    this.overrideSave = function()
    {
        return (this.useCheckPoint() && this.controls.down());
    };
    this.collectItem = function()
    {
        return true;
    };

    this.onCheckPoint = function(checkPoint)
    {
        if(game.gameState === "play")
        {
            game.save(checkPoint);
        }
    };
};
gameObjects.addObject("player", createArray(Player));

var BubbleShield = function(xPos, yPos, diameter, colorValue, hp)
{
    DynamicCircle.call(this, xPos, yPos, diameter);
    this.color = colorValue || color(120, 120, 250, 100);
    this.physics.solidObject = false;

    this.hp = hp || 100;
    this.maxHp = this.hp;

    this.maxBlinkTimer = 300;

    this.takeDamage = function(object, amt)
    {
        this.hp -= amt || object.damage;
    };

    this.draw = function()
    {
        if(this.blinking && this.blinkTimer % 30 >= 15 || (this.objectToAttachTo || {}).readingSign)
        {
            return;
        }

        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        stroke(red(this.color), green(this.color), blue(this.color), 150);
        strokeWeight(10);
        noFill();
        var offSet = ((MODE === "ka") ? 90 : TWO_PI/4);
        arc(this.xPos, this.yPos, this.diameter - 5, this.diameter - 5, -offSet, (this.hp * ((MODE === "ka") ? 360 : TWO_PI) / this.maxHp) - offSet);
        strokeWeight(1);
        noStroke();

        fill(230, 230, 230, 100);
        ellipse(this.xPos - this.diameter * 0.2, this.yPos - this.diameter * 0.2, this.diameter * 0.3, this.diameter * 0.3);
        ellipse(this.xPos - this.diameter * 0.08, this.yPos - this.diameter * 0.4, this.diameter * 0.1, this.diameter * 0.1);

        textAlign(CENTER, CENTER);
        textSize(16);
        text(floor(this.hp), this.xPos, this.yPos - this.radius);
    };

    this.gravity = 0;

    this.setPos = function(isUpdate)
    {
        if(this.objectToAttachTo !== undefined)
        {
            this.xPos = physics.getMiddleXPos(this.objectToAttachTo);
            this.yPos = physics.getMiddleYPos(this.objectToAttachTo);   
        }
    };

    this.lastUpdate = this.update;
    this.update = function()
    {
        this.xVel = 0;
        this.yVel = 0;

        this.lastUpdate();

        this.setPos(true);

        if(this.blinking)
        {
            this.blinkTimer--;
            if(this.blinkTimer < 0)
            {
                this.objectToAttachTo.bubbleShield = undefined;
                this.remove();
            }
        }
    };

    this.onCollide = function(object)
    {
        if(this.hp <= 0)
        {
            if(this.blinking === undefined)
            {
                this.blinkTimer = this.maxBlinkTimer;
            }
            this.blinking = true;
        }

        if(object.arrayName === "bullet" || object.arrayName === "ninjaStar" || object.arrayName === "launchBall")
        {
            this.takeDamage(object);
            object.remove();
            object.onCollide = function() {};
        }
        else if(object.arrayName === "player")
        {
            /*Player already has the bubble shield but bubble shield hp not full?
            Fill hp and remove me.*/
            if(object.bubbleShield !== undefined && object.bubbleShield !== this && 
               object.bubbleShield.hp < 100)
            {
                object.bubbleShield.hp = 100;
                object.bubbleShield.blinking = false;
                object.bubbleShield.blinkTimer = object.bubbleShield.maxBlinkTimer;
                this.remove();
            }

            if(this.objectToAttachTo === undefined && object.bubbleShield === undefined)
            {
                this.objArrayName = "player";
                this.objIndex = object.index;

                object.bubbleShield = this;
                this.objectToAttachTo = object;

                this.diameter = max(object.width, object.height) * 1.5;
                this.radius = this.diameter / 2;

                this.boundingBox.width = this.diameter;
                this.boundingBox.height = this.diameter;
            }
        } 
    };
};
gameObjects.addObject("bubbleShield", createArray(BubbleShield));

var WispIce = function(xPos, yPos, diameter, colorValue)
{
    DynamicCircle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;

    this.color = colorValue || color(70-50, 160-50, 210-50, 200);

    this.diameter3o1 = this.diameter / 3;

    this.loadDraw = function()
    {
        this.imageName = "wispIce";

        if(storedImages[this.imageName] === undefined)
        {
            this.img = createGraphics(this.diameter, this.diameter, P2D);

            var thd = this.diameter / 3;

            this.img.beginDraw();
                this.img.fill(this.color);
                this.img.noStroke(this.color);

                this.img.rect(0, 0, thd, thd);
                this.img.rect(thd * 2, 0, thd, thd);

                this.img.rect(thd, thd, thd, thd);

                this.img.rect(0, thd * 2, thd, thd);
                this.img.rect(thd * 2, thd * 2, thd, thd);
            this.img.endDraw();

            storedImages[this.imageName] = this.img;
        }

        this.draw = function()
        {
            if(this.hit && millis() - this.startHit > this.hitTime - 1000 && millis() % 250 >= 125)
            {
                return;
            }

            image(storedImages[this.imageName], this.xPos - this.radius, this.yPos + this.radius, this.radius * 1.5, this.radius * 1.5);
        };
    };

    this.loadDraw();

    this.outerXVel2 = 0;
    this.outerYVel2 = 0;

    this.hitTime = 3500;
    this.startHit = 0;

    this.update = function()
    {
        this.xPos += this.outerXVel2;
        this.yPos += this.outerYVel2;

        if(this.hit && millis() - this.startHit > this.hitTime)
        {
            this.remove();
            this.onCollide = function() {};

            if(this.attached !== undefined)
            {
                this.attached.accume--;
                this.attached.accume = max(0, this.attached.accume);
            }
        }

        if(this.attached !== undefined)
        {
            this.xPos = this.attached.xPos + this.deltaX;
            this.yPos = this.attached.yPos + this.deltaY;
        }

        this.updateBoundingBox();
    };

    this.damage = 0;

    this.onCollide = function(object)
    {
        if(object.arrayName === "player" && !this.blockedByPlayer && !object.invincibleToLifeForm)
        {
            var blocked = object.takeDamage(this, 0);
            if(!blocked)
            {
                this.outerXVel2 = 0;
                this.outerYVel2 = 0;

                this.blocked = blocked;

                var margin = 0;

                if(object.accume <= 2)
                {
                    margin = 1.5;
                }
                else if(object.accume <= 4)
                {
                    margin = 2;
                }
                else if(object.accume <= 6)
                {
                    margin = 2.5;
                }

                margin += 1.15;

                object.xVel = constrain(object.xVel, -object.maxXVel + margin, object.maxXVel - margin);
                object.yVel = constrain(object.yVel, -object.maxYVel + margin, object.maxYVel - margin);

                this.deltaX = this.xPos - object.xPos;
                this.deltaY = this.yPos - object.yPos;

                if(object.accume === undefined)
                {
                    object.accume = 0;
                }

                this.attached = object;
                this.attached.accume++;

                //Temp
                this.remove();
                this.onCollide = function() {};

                if(!this.hit)
                {
                    this.startHit = millis();
                    this.hit = true;
                }
            }else{
                var d = Math.sqrt(Math.pow(this.outerYVel2, 2) + Math.pow(this.outerXVel2, 2));
                var a = atan2(this.outerYVel2, 
                              this.outerXVel2);

                a += PI;
                d *= 1.1;

                this.outerXVel2 = cos(a) * d;
                this.outerYVel2 = sin(a) * d;

                if(object.arrayName === "player")
                {
                    this.blockedByPlayer = true;
                    this.life += 200;
                }
            }
        }
    };
};
gameObjects.addObject("wispIce", createArray(WispIce));

var Wisp = function(xPos, yPos, diameter, colorValue)
{
    DynamicCircle.call(this, xPos, yPos, diameter);
    LifeForm.call(this, 4);
    this.scoreValue = 400;

    this.color = colorValue || color(70, 160, 210, 200);

    this.gravity = 0;

    this.eyeDiameter = this.diameter / 5.5;

    this.topY = this.yPos - this.radius;
    this.downY = this.yPos + this.radius;

    this.direction = "front";

    this.draw = function()
    {
        switch(this.direction)
        {
            case "front" :
                fill(65, 65, 65);
                triangle(this.xPos - this.diameter - 2, this.downY, this.xPos, this.topY, this.xPos, this.downY);
                triangle(this.xPos + this.diameter + 2, this.downY, this.xPos, this.topY, this.xPos, this.downY);

                fill(this.color);
                triangle(this.xPos - this.diameter, this.downY, this.xPos, this.topY, this.xPos, this.downY);
                triangle(this.xPos + this.diameter, this.downY, this.xPos, this.topY, this.xPos, this.downY);

                fill(this.color);
                ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

                fill(0, 0, 0, 60);
                triangle(this.xPos, this.yPos - this.diameter, this.xPos - this.radius, this.yPos, this.xPos + this.radius, this.yPos);

                fill(0, 0, 0, 60);
                arc(this.xPos, this.yPos, this.diameter - 6, this.diameter - 6, 0, radians(180));

                fill(240, 240, 240, 200);
                ellipse(this.xPos - 4, this.yPos - 3.4, this.eyeDiameter, this.eyeDiameter);

                fill(240, 240, 240, 200);
                ellipse(this.xPos + 4, this.yPos - 3.4, this.eyeDiameter, this.eyeDiameter);
                break;

            case "left" :
                fill(this.color);
                ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

                fill(0, 0, 0, 60);
                triangle(this.xPos, this.yPos - this.diameter, this.xPos - this.radius, this.yPos, this.xPos, this.yPos);

                fill(0, 0, 0, 60);
                arc(this.xPos, this.yPos, this.diameter - 6, this.diameter - 6, radians(-90), radians(180));
                break;

            case "right" :
                break;
        }
    };

    this.task = "locate";

    this.angle = 0;
    this.speed = 5;

    this.lastLaunchTime = 0;

    this.offXVel = 0;
    this.offYVel = 0;

    this.between = round(random(1500, 2500));

    this._lastUpdate1 = this.update;
    this.update = function()
    {
        this.xPos += cos(radians(this.angle)) * this.speed + this.offXVel;
        this.yPos += sin(radians(this.angle)) * this.speed / 4 + this.offYVel;

        this._lastUpdate1();

        this.angle += 4;

        if(this.angle > 360)
        {
            this.angle = 0;
        }
        else if(this.angle < 0)
        {
            this.angle = 360;
        }

        this.topY = this.yPos - this.radius + 1;
        this.downY = this.yPos + this.radius - 2;

        //The only object this will attack
        var player = gameObjects.getObject("player").getLast();

        if(player.yPos - this.yPos < -60)
        {
            this.offYVel = -2.5;
        }else{
            this.offYVel = 0;
        }

        if(millis() - this.lastLaunchTime > this.between)
        {
            this.launchIce(player, 5);
            this.lastLaunchTime = millis();
            this.between = round(random(1500, 2500));
        }
    };

    this.launchIce = function(object, speed)
    {   
        var wispIces = gameObjects.getObject("wispIce");
        wispIces.add(this.xPos, this.yPos, 12);

        var ice = wispIces.getLast();
        cameraGrid.addReference(ice);

        physics.getMiddleXPos(object);
        physics.getMiddleYPos(object);

        var angle = atan2(object.middleYPos - this.yPos,
                          object.middleXPos - this.xPos);

        ice.outerXVel2 = cos(angle) * speed;
        ice.outerYVel2 = sin(angle) * speed;
    };

    this._lastOnCollide1 = this.onCollide;
    this.onCollide = function(object, info)
    {
        if(object.arrayName === "player" && object.yVel > 0 && object.yPos + object.height < this.yPos)
        {
            object.yVel = -6;
            this.takeDamage(object);
        }

        this._lastOnCollide1(object, info);
    };
};
gameObjects.addObject("wisp", createArray(Wisp));

var Voxelizer = function(xPos, yPos, width, height, colorValue)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    LifeForm.call(this, 4);
    this.scoreValue = 2000;
    this.damage = 2;

    this.color = colorValue || color(62, 18, 136, 200);

    this.gravity = 0;

    this.angle = 0;
    this.rot = 0;
    this.rotVel = 7 * (random(0, 1) < 0.5 ? 1 : -1);

    var ux = physics.getMiddleXPos(this);
    var uy = physics.getMiddleYPos(this);

    this.draw = function()
    {
        this.rot += this.rotVel;

        ux = physics.getMiddleXPos(this);
        uy = physics.getMiddleYPos(this);
        var uw, uh;

        noStroke();
        pushMatrix();
            translate(ux, uy);
            rotate(this.angle);
            fill(29, 18, 174, 70);
            rect(-this.halfWidth + 1, -this.halfHeight + 1, this.width - 2, this.height - 2, 2);
        popMatrix();

        fill(red(this.color), green(this.color), blue(this.color), 40); 
        for(var i = 0; i < 4; i++)
        {
            pushMatrix();
                translate(ux, uy);
                rotate(this.rot + i * 23);

                uw = (this.width - i * 2.3);
                uh = (this.height - i * 2.3);
                rect(-uw / 2, -uh / 2, uw, uh);
            popMatrix();
        }

        this.streaks.draw();
    };

    var self = this;

    this.streaks = [];
    this.streaks.add = function()
    {
        var rx = random(-self.halfWidth, self.halfWidth);
            ry = random(-self.halfHeight, self.halfHeight);

        this.push({
            x : self.middleXPos + rx,
            y : self.middleYPos + ry,
            sx : self.middleXPos + rx,
            sy : self.middleYPos + ry,
            fade : 100
        });
    };
    this.streaks.draw = function()
    {
        strokeWeight(0.7);

        var _r = red(self.color),
            _g = green(self.color),
            _b = blue(self.color);

        for(var i = this.length - 1; i >= 0; i--)
        {
            var streak = this[i];

            streak.fade -= 1.4;

            if(streak.fade > random(70, 90))
            {
                streak.x += self.xVel;
                streak.y += self.yVel;
            }

            stroke(_r, _g, _b, streak.fade * 50 / 100);
            line(streak.x, streak.y, streak.sx, streak.sy);

            if(streak.fade < 0)
            {
                this.splice(i, 1);
            }
        }

        noStroke();
    };
    this.streaks.update = function()
    {
        for(var i = 0; i < this.length; i++)
        {
            var streak = this[i];
        }
    };

    this.lastStreakTime = 0;
    this.nextStreakTime = 800;

    this.timeOffset = random(400, 1600);
    this.lastFollowTime = 500;
    this.nextFollowTime = 1000;
    this.following = 0;

    this.maxXVel = 5;
    this.maxYVel = 5;

    this.lastXDeacl = this.xDeacl;
    this.lastYDeacl = this.yDeacl;

    var lastUpdate = this.update;
    this.update = function()
    {
        if(millis() - this.lastStreakTime > this.nextStreakTime)
        {
            this.streaks.add();

            this.lastStreakTime = millis();
            this.nextStreakTime = random(20, 80);
        }

        this.streaks.update();

        if((millis() + this.timeOffset) - this.lastFollowTime > this.nextFollowTime)
        {
            this.following++;
            if(this.following > 3)
            {
                this.following = 0;
            }
            this.nextFollowTime = (this.following !== 1) ? 1000 : 700;
            this.lastFollowTime = millis() + this.timeOffset;
        }

        this.xDeacl = this.lastXDeacl;
        this.yDeacl = this.lastYDeacl;

        switch(this.following)
        {
            case 0 : case 2 :
                this.target = gameObjects.getObject("player")[0];

                var a = atan2(physics.getMiddleYPos(this.target) - this.middleYPos, 
                              physics.getMiddleXPos(this.target) - this.middleXPos);

                this.xVel = cos(a) * 3.7;
                this.yVel = sin(a) * 3.7;
                break;

            case 1 :
                this.target = this.getClosest(this.arrayName, 100, 600);
                if(this.target.index !== this.index)
                {
                    var a = atan2(physics.getMiddleYPos(this.target) - this.middleYPos, 
                                  physics.getMiddleXPos(this.target) - this.middleXPos);

                    this.xVel = cos(a) * 3;
                    this.yVel = sin(a) * 3;
                }
                break;

            default :
                this.xDeacl = 0.2;
                this.yDeacl = 0.2;
                break;
        }

        return lastUpdate.apply(this, arguments);
    };

    this.getClosest = function(arrayName, minD, maxD)
    {
        var neighbor = this;
        var items = gameObjects.getObject(arrayName);

        minD = Math.pow(minD || -Infinity, 2);
        maxD = Math.pow(maxD || Infinity, 2);

        var closest = Infinity;
        var d = 0;
        var index;

        for(var i = 0; i < items.length; i++)
        {
            if(items[i].arrayName === this.arrayName && 
               i === this.index || items[i].fake)
            {
                continue;
            }

            d = Math.pow(Math.abs(this.xPos - items[i].xPos), 2) + 
                Math.pow(Math.abs(this.yPos - items[i].yPos), 2);

            if(d < closest && d > minD && d < maxD)
            {
                index = i;
                closest = d;
            }   
        }

        if(index !== undefined)
        {
            neighbor = items[index];
        }

        return neighbor;
    };

    this.avoidCollision = function(object)
    {
        return (object.arrayName === "fallingBlock" || object.arrayName === "slope");
    };

    var lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        if(this.target && object.arrayName === this.target.arrayName && 
            object.arrayName !== this.arrayName)
        {
            object.takeDamage(this);
            object.xVel += this.xVel * 0.5;
            object.yVel += this.yVel * 0.5;
        }

        return lastOnCollide.apply(this, arguments);
    };
};
gameObjects.addObject("voxelizer", createArray(Voxelizer));

var HardCaseBlock = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 0, 0, 170);

    this.snowflakes = 0;

    if(levelInfo.theme === "winter")
    {
        this.useCore = true;

        physics.getMiddleXPos(this);
        physics.getMiddleYPos(this);

        this.physics.sides = {
            up : true,
        };

        this.updateBoundingBox();
    }

    this.coreTimer = 0;
    this.vel = 0.1;

    this.draw = function()
    {
        fill(this.color);
        rect(this.xPos, this.yPos, this.width, this.height);

        fill(255, 255, 255, 30);
        rect(this.xPos + 5, this.yPos + 5, this.width - 10, this.height - 10, 5);

        if(this.useCore)
        {
            pushMatrix();
                translate(this.middleXPos, this.middleYPos);
                rotate(this.k);
                fill(120, 200, 0, 100);
                ellipse(0, 0, this.halfWidth - 2, (this.halfHeight - 2) - (this.coreTimer));
            popMatrix();
        }
    };

    this.k = round(random(-180, 180));

    this._lastUpdate = this.update;
    this.update = function()
    {
        this._lastUpdate();

        if(!this.useCore)
        {
            return;
        }

        this.k += 5;

        if(this.k > 360)
        {
            this.k = 0;
        }

        if(abs(this.coreTimer) > 5)
        {
            this.vel = -this.vel;
        }

        this.coreTimer += this.vel;
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player" && levelInfo.theme === "winter")
        {
            object.hp += 0.025;
            object.hp = min(object.hp, object.maxHp);
        }
    };  
};
gameObjects.addObject("hardCaseBlock", createArray(HardCaseBlock));

var Fog = function(xPos, yPos, diameter, colorValue)
{
    Circle.call(this, xPos, yPos, diameter);
    this.color = colorValue || color(0, 0, 0, 100);

    this.maxAlpha = alpha(this.color);

    this.physics.solidObject = false;
    this.physics.skipCollision = true;

    this.maxLife = 100;
    this.life = 100;

    this.gravity = 0;

    this.angle = 0;
    this.angleVel = radians(random(-2, 2));

    this.speed = 0.4;

    this.maxRadius = this.radius;

    this.lastUpdate_ = this.update;
    this.update = function()
    {
        if(this.diameter < this.maxDiameter)
        {
            this.diameter += 1;
        }else{
            this.diameter = this.maxDiameter;
             this.grown = true;
        }

        this.life -= 0.5;

        if(this.life <= 1)
        {
            this.life = 1;
            this.remove();
            this.draw = function() {};
        }

        this.color = color(red(this.color), green(this.color), blue(this.color), this.life * this.maxAlpha / this.maxLife);
        
        this.angle += this.angleVel;

        this.xPos += sin(this.angle) * this.speed;
        this.yPos += cos(this.angle) * this.speed;

        if(millis() % 1000 >= 800)
        {
            this.angleVel = radians(random(-2, 2));
        }
        else if(millis() % 1000 >= 700)
        {
            if(this.xPos + this.radius < levelInfo.xPos || 
               this.yPos + this.radius < levelInfo.yPos || 
               this.xPos - this.radius > levelInfo.xPos + levelInfo.width || 
               this.yPos - this.radius > levelInfo.yPos + levelInfo.height)
            {
                this.remove();
                this.draw = function() {};
            }
        }

        this.updateBoundingBox();
    };
};
gameObjects.addObject("fog", createArray(Fog));

var FogMachine = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 0, 0, 170);

    this.physics.solidObject = false;

    this.draw = function() {};

    this.fogPerUpdate = 3;
    this.updateTime = 420;
    this.lastUpdateTime = millis();

    physics.getMiddleXPos(this);
    physics.getMiddleYPos(this);

    this.update = function()
    {
        if(millis() - this.lastUpdateTime > this.updateTime)
        {
            var fogs = gameObjects.getObject("fog"); 

            for(var i = 0; i < this.fogPerUpdate; i++)
            {
                fogs.add(this.middleXPos + random(-10, 10), this.middleYPos + random(-10, 10), 0);

                var fog = fogs.getLast();
                fog.angle = radians(/*random(0, 70) + 160*/random(0, 360));
                fog.maxDiameter = random(3, 5) * 4;

                cameraGrid.addReference(fog);
            }

            this.lastUpdateTime = millis();
        }
    };
};
gameObjects.addObject("fogMachine", createArray(FogMachine));

var Snow = function(xPos, yPos, width, height, colorValue, collisionOff)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(255, 255, 255);
    addParticleRules(this);

    this.isFlake = random(0, 1) < 0.5;

    this.draw = function() 
    {
        if(this.isFlake)
        {
            stroke(this.color);
            strokeWeight(1.3);
            pushMatrix();
            translate(this.xPos, this.yPos);
            rotate(this.angle);
            
            line(this.halfWidth, -this.halfHeight, -this.halfWidth, this.halfHeight);
            line(-this.halfWidth, 0, this.halfWidth, 0);
            line(-this.halfWidth, -this.halfHeight, this.halfWidth, this.halfHeight);
            line(0, -this.halfHeight, 0, this.halfHeight);
            
            popMatrix();

            return;
        }

        fill(this.color);
        ellipse(this.xPos, this.yPos, this.width, this.height);
    };
    
    this.xVel = 0;
    this.maxXVel = 2;
    this.xDeacl = 0.2;

    this.yVel = 0;
    this.maxYVel = Number(random(1, 2).toFixed(2)) + 0.7;

    this.minYVel = -3;

    this.angle = 360 / 2;
    this.angleVel = (random(0, 100) > 50) ? -2 : 2;
    this.gravity = 0.053;

    this.inAir = true;
    
    this.zPos = 1;
    this.lastUpdate1 = this.update;

    this.offset = floor(random(-500, 500));

    this.physics.skipCollision = (random(0, 1) < 0.3);

    this.meltTimer = random(80, 150) * 2.5 * 2;

    this.speedFall = 0.005;

    this.update = function()
    {
        this.lastUpdate1();
        this.xVel = constrain(this.xVel, -this.maxXVel, this.maxXVel);
        this.xPos += this.xVel;

        if(this.xVel > 0)
        {
            this.xVel -= this.xDeacl;
        }
        else if(this.xVel < 0)
        {
            this.xVel += this.xDeacl;
        }
        if(this.xVel < this.xDeacl && this.xVel > -this.xDeacl)
        {
            this.xVel = 0;
        }

        if(this.touchedObject)
        {
            this.meltTimer--;
        }

        if(this.meltTimer < 0)
        {
            this.inAir = true;
        }

        if(this.inAir)
        {
            this.yVel += this.gravity;
            this.yVel = constrain(this.yVel, -this.maxYVel, this.maxYVel);

            if(this.angle < 0 || this.angle > 360)
            {
                this.angleVel = -this.angleVel;    
            }
            this.angle += this.angleVel;
        }

        this.maxYVel += this.speedFall;

        this.yPos += this.yVel;

        if(abs(this.yVel) > this.maxYVel * 0.05)
        {
            this.inAir = true;
        }

        if(this.yPos >= levelInfo.height + this.height || this.yPos >= cam.focusYPos + cam.halfHeight)
        {
            this.remove();
        }
    };

    this.hitRect = 0;

    this.onCollide = collisionOff ? this.onCollide : this.onCollide = function(object)
    {
        if(object.physics.shape === "slope")
        {
            this.physics.skipCollision = true;
        }
        else if(object.arrayName === "snowLayer" || object.arrayName === "snowBlock")
        {
            return;
        }
        if(object.arrayName === "lava")
        {
            this.remove();
            return;
        }
        else if(object.arrayName === "ladder" && random(0, 1) <= 0.06 && object.snowflakes < 5)
        {
            object.snowflakes++; 

            this.inAir = false;
            this.yVel = 0;
            return;
        }
        if(object.physics.shape === "rect" && object.physics.solidObject)
        {
            if(typeof object.snowflakes !== "undefined" && !this.slidObject)
            {
                object.snowflakes++; 

                if(object.snowflakes >= 5 && !object.snowLayers)
                {
                    if(!object.snowLayered)
                    {
                        object._lastDraw = object.draw;
                        object.draw = function()
                        {
                            this._lastDraw();
                            noStroke();
                            fill(250, 250, 250, 215);
                            rect(this.xPos, this.yPos, this.width, this.height * 0.15);
                        };

                        object.snowLayered = true;
                    }

                    object.snowLayers = 1;
                }
                else if(object.snowflakes % 5 >= 4 && (object.snowLayers === 1 || object.snowLayers === 2))
                {
                    var hy = object.height * 0.1;

                    gameObjects.getObject("snowLayer").add(object.xPos, object.yPos - hy * object.snowLayers, object.width, hy);
                    cameraGrid.addReference(gameObjects.getObject("snowLayer").getLast());
                    
                    object.snowLayers++;
                }
            }

            if(object.physics.movement === "dynamic")
            {
                this.xVel += object.xVel * 0.1;
                this.yVel += object.yVel * 0.4;
            }
            else if(this.zPos >= -2 && this.zPos <= 2)
            {
                if(random(0, 100) > 50 && !this.slidObject)
                {
                    if(this.yPos < object.yPos + object.height * 0.1)
                    {
                        this.inAir = false;
                        this.yPos = object.yPos - 1;
                        this.yVel = 0;
                    }
                    this.touchedObject = true;
                }else{
                    this.zPos = 4;
                }
            }

            if(object.physics.movement === "static")
            {
                this.slidObject = true;
                this.physics.skipCollision = true;
            }
        }
    };
};
gameObjects.addObject("snow", createArray(Snow));

var SnowLayer = function(xPos, yPos, width, height)
{
    DynamicRect.call(this, xPos, yPos, width, height);
    this.color = fill(250, 250, 250, 210);

    this.maxXVel = 2;
    this.isSnowLayer = true;

    this.avoidCollision = function(object)
    {
        return object.physics.shape === "slope";
    };

    this.onCollide = function(object, info)
    {
        //Add snow on blocks
        if(typeof object.snowflakes !== "undefined" && object.physics.shape === "rect" && 
            this.yPos < object.yPos && !object.snowLayered)
        {
            object._lastDraw = object.draw;
            object.draw = function()
            {
                this._lastDraw();
                noStroke();
                fill(250, 250, 250, 215);
                rect(this.xPos, this.yPos, this.width, this.height * 0.15);
            };

            object.snowLayered = true;
            return;
        }

        if(object.isLifeForm && object.physics.shape === "rect")
        {
            var hy = object.yPos + object.height;
            if(hy > this.yPos && hy <= this.yPos + this.height &&
                (info.side === "left" && object.xVel > 0 || 
                info.side === "right" && object.xVel < 0))
            {
                object.yPos = this.yPos - object.height;
                object.xPos += object.xVel;
                this.xVel = 0;
                return;
            }
        }

        if(object.isSnowLayer)
        {
            this.yVel = 0;
        }

        this.xPos += object.xVel / 2.5 || 0;
    };
};
gameObjects.addObject("snowLayer", createArray(SnowLayer));

var SnowBall = function(xPos, yPos, diameter)
{
    DynamicCircle.call(this, xPos, yPos, diameter);
    this.color = color(240, 240, 240, 250);

    this.__lastOnCollide = this.onCollide;
    this.onCollide = function(object, info)
    {
        //Add snow on blocks
        if(typeof object.snowflakes !== "undefined" && object.physics.shape === "rect" && 
            this.yPos + this.radius - 1 <= object.yPos && !object.snowLayered)
        {
            object._lastDraw = object.draw;
            object.draw = function()
            {
                this._lastDraw();
                noStroke();
                fill(250, 250, 250, 215);
                rect(this.xPos, this.yPos, this.width, this.height * 0.15);
            };

            object.snowLayered = true;
            return;
        }
        this.__lastOnCollide(object, info);
    };
};
gameObjects.addObject("snowBall", createArray(SnowBall));

var SnowBlock = function(xPos, yPos, width, height, colorValue, layoutType)
{
    Rect.call(this, xPos, yPos, width, height, colorValue || color(200, 200, 255));

    this.sWidth = this.width * 0.1;
    this.sHeight = this.height * 0.1;
    this.tWidth = this.width * 0.15;
    this.tHeight = this.height * 0.15;

    this.snowflakes = 0;

    this.loadDraw = function()
    {
        if(typeof storedImages["snowBlock" + (layoutType || "")] === "undefined")
        {
            switch(layoutType)
            {
                case "other" :
                    this.xSize = this.width / 12;
                    this.ySize = this.height / 12;
                    this.layout = [
                        "  0   0   ",
                        "  0   0   ",
                        "  0   0   ",
                        "0   0   0 ",
                        "0   0   0 ",
                        "0   0   0 ",
                        "  0   0   ",
                        "  0   0   ",
                        "  0   0   ",
                        "0   0   0 ",
                        "0   0   0 ",
                        "0   0   0 ",
                    ];
                    break;

                default :
                    this.xSize = this.width / 8;
                    this.ySize = this.height / 8;
                    this.layout = [
                        "00000000",
                        "       0",
                        "000000 0",
                        "0    0 0",
                        "0 0  0 0",
                        "0 0000 0",
                        "0      0",
                        "00000000",
                    ];
                    break;
            }

            this.draw = function()
            {
                fill(this.color);
                rect(this.xPos, this.yPos, this.width, this.height);

                fill(0, 0, 0, 30);
                rect(this.xPos + this.sWidth, this.yPos + this.sHeight, this.width - this.sWidth * 2, this.height - this.sHeight * 2);

                fill(255, 255, 255);
                for(var i = 0; i < this.layout.length; i++)
                {
                    for(var j = 0; j < this.layout[i].length; j++)
                    {
                        switch(this.layout[i][j])
                        {
                            case '0' :
                                rect(this.xPos + j * this.xSize, this.yPos + i * this.ySize, this.xSize, this.ySize);
                                break;
                        }
                    }
                }
            };

            screenUtils.loadImage(this, true, "snowBlock" + (layoutType || ""), undefined, undefined, undefined, 190);
        }else{
            this.draw = function()
            {
                image(storedImages["snowBlock" + (layoutType || "")], this.xPos, this.yPos, this.width, this.height);
            };
        }
    };

    this.loadDraw();

    this.physics.movement = "dynamic";
    this.gravity = 0.06;

    this.oxVel = 0;
    this.oyVel = 0;

    this.maxOXVel = 0;
    this.maxOYVel = 8;

    this.xVel = 0;
    this.yVel = 0;

    var self = this;

    this.coolDown = 0;

    this.addCheckRect = function(xPos, yPos, direction)
    {
        var rects = gameObjects.getObject("rect");

        rects.add(xPos, yPos, this.width, this.height);

        this.checkRect = rects.getLast();

        this.checkRect.physics.solidObject = false;
        this.checkRect.physics.movement = "dynamic";

        this.checkRect.boundingBox.xPos += 1;
        this.checkRect.boundingBox.yPos += 1;
        this.checkRect.boundingBox.width -= 2;
        this.checkRect.boundingBox.height -= 2;

        this.checkRect.timer = 0;
        this.checkRect.update = function()
        {
            if(this.timer >= 2)
            {
                self.moveDir = direction;
                self.busyChecking = false;
                this.remove();
                this.onCollide = function() {};
            }

            this.timer++;
        };

        this.checkRect.onCollide = function(object)
        {
            physics.getMiddleXPos(self);
            physics.getMiddleXPos(object);

            if(object.arrayName === self.arrayName && object.yPos === this.yPos)
            {
                object.checkIfSafe(direction);
            }
            if(object.physics.solidObject && object.arrayName !== "snow" && object.arrayName !== "snowLayer")
            {
                self.moveDir = "";
                self.busyChecking = false;
                this.remove();
                this.onCollide = function() {};
            }
        };

        cameraGrid.addReference(this.checkRect);
    };

    this.checkIfSafe = function(direction)
    {
        if(this.busyChecking && millis() - this.coolDown > 1000)
        {
            return;
        }

        switch(direction)
        {
            case "left" :
                this.addCheckRect(this.xPos - this.width, this.yPos, "left");
                this.busyChecking = true;
                this.coolDown = millis();
                break;

            case "right" :
                this.addCheckRect(this.xPos + this.width, this.yPos, "right");
                this.busyChecking = true;
                this.coolDown = millis();
                break;
        }
    };

    this.update = function()
    {
        this.xVel = 0;
        this.yVel = 0;

        if(this.moveDir === "left")
        {
            this.xPos -= this.width;
            cameraGrid.addReference(this);
            this.moveDir = "";
        }
        else if(this.moveDir === "right")
        {
            this.xPos += this.width;
            cameraGrid.addReference(this);
            this.moveDir = "";
        }else{
            this.oyVel += this.gravity;
            this.oyVel = constrain(this.oyVel, -this.maxOYVel, this.maxOYVel);

            this.yPos += this.oyVel;

            this.oxVel = constrain(this.oxVel, -this.maxOXVel, this.maxOXVel);
            this.xPos += this.oxVel;
        }

        this.updateBoundingBox();
    };

    this.updateBoundingBox = function()
    {
        this.boundingBox.xPos = this.xPos;
        this.boundingBox.yPos = this.yPos;
    };

    this.avoidCollision = function(object)
    {
        return (object.arrayName === "snowLayer" || object.height <= 10 ||
               object.physics.shape === "circle" && object.physics.solidObject && object.physics.movement === "dynamic");
    };

    this.onCollide = function(object, info)
    {   
        if(object.isLifeForm)
        {
            switch(true)
            {
                case (info.side === "left" || info.side === "right") :
                    object.xVel = 0;
                    break;

                case (info.side === "up" || info.side === "down") :
                    object.yVel = 0;
                    break;
            }
        }

        if(object.arrayName === "water" && !this.busyChecking)
        {
            this.oyVel = -this.gravity;
            this.inLiquid = true;
        }
        else if(object.arrayName === "ninjaStar" || object.arrayName === "xStar")
        {
            if(object.xPos > this.middleXPos)
            {
                if(object.lastXPos > object.xPos)
                {
                    this.checkIfSafe("left");
                }
            }else{
                if(object.lastXPos < object.xPos)
                {
                    this.checkIfSafe("right");
                }
            }

            object.remove();
        }
    };
};
gameObjects.addObject("snowBlock", createArray(SnowBlock));

var Rain = function(xPos, yPos, width, height, colorValue, collisionOff)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(20, 90, 220, random(70, 150));
    addParticleRules(this);

    this.gravity = 0.03;
    this.draw = function() 
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.width, this.height); 
    };
    
    this.yVel = 0;
    this.maxYVel = 3;
    
    this.xVel = 0;
    this.maxXVel = 0;

    this.offset = floor(random(-500, 500));

    this.update = function()
    {
        this.xVel = constrain(this.xVel, -this.maxXVel, this.maxXVel);
        this.xPos += this.xVel;
        
        this.yVel += this.gravity;
        this.yVel = constrain(this.yVel, -this.maxYVel, this.maxYVel);
        this.yPos += this.yVel;

        if(this.yPos >= levelInfo.height + this.height)
        {
            this.remove();
        }

        //Huge performance boost!
        this.physics.skipCollision = ((millis() - this.offset) % 1000 > 700);
    };

    this.onCollide = collisionOff ? this.onCollide : function(object)
    {
        if(object.type === "block" && object.physics.solidObject)
        {
            if(this.yPos < object.yPos + object.height * 0.1)
            {                    
                this.remove();
            }
        }
    };
};
gameObjects.addObject("rain", createArray(Rain));

var Net = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(0, 0, 0);

    this.physics.solidObject = false;
    this.type = "use";
    
    this.snowflakes = 0;

    this.size = (this.width + this.height) / 2;
    this.step = this.size / 3;

    this.tightness = 0.2;

    this.arrayName = "net";

    this.loadDraw = function()
    {
        if(typeof storedImages[this.arrayName] === "undefined")
        {
            this.img = createGraphics(this.width + 1, this.height + 1, P2D);
            this.img.beginDraw();
                this.img.smooth();
                this.img.noFill();
                this.img.strokeWeight(1);
                this.img.stroke(0, 0, 0);

                for(var i = 0; i < this.size; i += this.step)
                {
                    this.img.rect(i / 2, i / 2, this.width - i, this.height - i, 4);
                }
            this.img.endDraw();

            storedImages[this.arrayName] = this.img;
        }else{
            this.img = storedImages[this.arrayName];
        }
    };

    this.loadDraw();

    this.draw = function()
    {
        image(this.img, this.xPos, this.yPos, this.width, this.height);
    };

    this.onCollide = function(object)
    {
        if(object.isLifeForm)
        {
            object.xVel = constrain(object.xVel, -this.tightness,  this.tightness);
            object.yVel = constrain(object.yVel, -this.tightness,  this.tightness);
        }
    };
};
gameObjects.addObject("net", createArray(Net));

var Cloud = function(xPos, yPos, width, height, colorValue, weather, cloudType, noFade, collisionOff)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue;
    this.weather = weather || "rain";
    
    this.physics.solidObject = false;

    this.cloudType = cloudType || "light";
    this.switchType = this.cloudType;
        
    this.maxWaterLife = 100;
    this.waterLife = this.maxWaterLife;

    if(weather === undefined || weather === "")
    {
        this.silent = true;
    }

    this.rain = createArray(Rain);
    this.snow = createArray(Snow);

    this.alpha = 255;

    this.setColor = function()
    {
        switch(this.cloudType)
        {
            case "dark" :
                this.color = color(255/2, 255/2, 255/2, this.alpha);
                break;
                
            case "light" :
                this.color = color(255, 255, 255, this.alpha);
                break;
                
            case "fade" :
                this.color = color(255, 255, 255, 255, this.alpha);
                break;
        }
    };
    
    this.sleepTime = 0;
    this.startSleepTime = 0;
    this.sleeping = false;

    this.sleep = function(time)
    {
        this.sleepTime = time; // Time in millis!
        this.sleeping = true;
        this.startSleepTime = millis();
    };

    this.setColor();
    
    this.setWeather = function(weather)
    {
        this.weather = weather;
    };

    this.draw = function() 
    {
        if(this.useInside)
        {
            this.rain.draw();
            this.snow.draw();
        }

        noStroke();
        fill(this.color);
        ellipse(this.xPos + this.width * 0.5, this.yPos + this.height * 0.35, this.width * 0.5, this.height * 0.6);
        ellipse(this.xPos + this.width * 0.3, this.yPos + this.height * 0.6, this.width * 0.5, this.height * 0.6);
        ellipse(this.xPos + this.width * 0.67, this.yPos + this.height * 0.6, this.width * 0.6, this.height * 0.7);
    };
    
    this.lastUpdate1 = this.update;

    this.addParticle = function(arrayName, w, h)
    {
        var inputSize = random(3, 8) + 3;
        w = w || inputSize;
        h = h || inputSize;
        var inputXPos = round(random(this.xPos + this.width * 0.1, this.xPos + this.width * 0.9));
        if(inputXPos > cameraGrid.xPos + (cam.upperLeft.col) * cameraGrid.cellWidth && 
           inputXPos < cameraGrid.xPos + (cam.lowerRight.col + 1) * cameraGrid.cellWidth)
        {
            var inputYPos = this.yPos + this.halfHeight;
            if(inputYPos > cameraGrid.yPos + (cam.upperLeft.row) * cameraGrid.cellHeight && 
            inputYPos < cameraGrid.yPos + (cam.lowerRight.row + 1) * cameraGrid.cellHeight)
            {
                if(this.useInside)
                {
                    if(this.weather === "rain")
                    {
                        this.rain.add(inputXPos, inputYPos, w, h, undefined, collisionOff);
                    }
                    else if(this.weather === "snow")
                    {
                        this.snow.add(inputXPos, inputYPos, w, h, undefined, collisionOff);
                    }
                }else{
                    if(arrayName === "snow" || arrayName === "rain")
                    {
                        w -= 3.4;
                        h -= 3.4;
                    }
                    gameObjects.getObject(arrayName).add(inputXPos, inputYPos, w, h, undefined, collisionOff);
                    cameraGrid.addReference(gameObjects.getObject(arrayName).getLast());
                }
            }
        }
    };

    this.lastRainTime = 0;
    this.lastSnowTime = 0;

    this.nextRainTime = 30;
    this.nextSnowTime = 250;

    this.delag = 40;

    this.update = function()
    {
        this.lastUpdate1();

        if(this.silent)
        {
            return;   
        }

        if(this.sleeping && millis() - this.startSleepTime >= this.sleepTime)
        {
            this.sleeping = false;
        }

        if(this.waterLife >= 0 && !this.sleeping)
        {
            switch(this.weather)
            {
                case "rain" :
                   if(millis() - this.lastRainTime > this.nextRainTime)
                    {
                        this.addParticle("rain");

                        if(this.hasLife)
                        {
                            this.waterLife--;
                        }

                        this.nextRainTime = random(40, 160) + this.delag;
                        this.lastRainTime = millis();
                    }
                    break;
                    
                case "snow" :
                    if(millis() - this.lastSnowTime > this.nextSnowTime)
                    {
                        this.addParticle("snow");

                        if(this.hasLife)
                        {
                            this.waterLife--;
                        }

                        this.nextSnowTime = random(60, 280) + this.delag;
                        this.lastSnowTime = millis();
                    }
                    break;
            }
           
        }

        if(this.waterLife < 0)
        {
            this.cloudType = this.switchType;
            if(this.cloudType !== "fade")
            {
                this.waterLife = this.maxWaterLife;
            }
            switch(this.cloudType)
            {
                case "dark" :
                    this.switchType = "light";
                    break;
                    
                case "light" :
                    this.switchType = "fade";
                    break;
            }
        }
        
        if(this.cloudType !== this.switchType)
        {
            switch(this.switchType)
            {
                case "light" :
                    var input = 255 - this.waterLife * 127.5 / this.maxWaterLife;
                    this.color = color(input, input, input, 255);
                    break;
            }
        }
        if(this.cloudType === "fade" && this.waterLife < 0)
        {
            this.color = color(red(this.color), green(this.color),
            blue(this.color), alpha(this.color) - 1);
        }

        if(noFade)
        {
            this.color = color(red(this.color), green(this.color),
            blue(this.color), 255);
        }

        if(this.useInside)
        {
            this.rain.update();
            this.snow.update();
        }
    };
};
gameObjects.addObject("cloud", createArray(Cloud));

var NinjaGuard = function(xPos, yPos, diameter)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.type = "power";

    this.color = color(40, 120, 200, 130);

    this.font = createFont("monoSpace");

    this.draw = function()
    {
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        pushMatrix();
            fill(70, 130, 200, 200);
            translate(this.xPos, this.yPos);
            scale(this.flip, 1);
            stroke(0, 120, 150);
            strokeWeight(2);
            ellipse(0, 0, this.diameter * 0.8, this.diameter * 0.8);

            fill(0, 0, 0, 70);
            textSize(this.diameter / 2.5);
            textFont(this.font);
            textAlign(CENTER, CENTER);
            text("NG", 0, 0);
        popMatrix();

        noStroke();

        var av = radians(this.angle);
        var ac = av * 2;
        var az = TWO_PI / 8;
        var r = this.radius + 16;

        fill(70, 160, 120, 160);

        for(var a = 0; a < TWO_PI; a += az)
        {
            var ox = this.xPos + sin(a + av) * r,
                oy = this.yPos + cos(a + av) * r;

            ellipse(ox, oy, 8, 8);

            for(var a2 = 0; a2 < TWO_PI; a2 += az)
            {
                ellipse(ox + sin(a2 + ac) * 8, oy + cos(a2 + ac) * 8, 5, 5);
            }
        }
    };

    this.flip = 1;
    this.flipVel = 0.05;

    this.angle = 0;
    this.angleVel = 3;

    this.nextChange = millis();

    this._lastUpdate = this.update;
    this.update = function()
    {
        if(this.flip > 1 || this.flip < -1)
        {
            this.flipVel = -this.flipVel;
        }
        this.flip += this.flipVel;

        this.angle += this.angleVel;
        this.angle %= 360;

        if(millis() - this.nextChange > 3000)
        {
            this.angleVel = -this.angleVel;
            this.nextChange = millis();
        }

        this._lastUpdate();
    };

    this.actObject = {
        description : "Deflect Ninja Stars by timing the button press correctly.",
        key : '1',
        name : "Ninja Guard",
        start : function(object, power)
        {
            //Spam protection
            if((typeof power.hitEndedTime === "undefined" || millis() - power.hitEndedTime >= 200) && 
               (typeof power.hitStartedTime === "undefined" || millis() - power.hitStartedTime >= 400))
            {
                power.hitStartedTime = millis();
                power.on = true;
            }
        },
        avoidDamage : function(hitObject, amt, object, power)
        {
            var diff = millis() - power.hitStartedTime;

            if((hitObject.arrayName === "ninjaStar" || hitObject.arrayName === "launchBall" || hitObject.arrayName === "wispIce") && power.on)
            {
                return (diff > 15 && diff < 450);
            }

            return false;
        },
        update : function(object, power)
        {
            if(millis() - power.startTime > 450)
            {
                if(power.on)
                {
                    power.hitEndedTime = millis();
                    power.on = false;
                }
            }
        },
        draw : function(object, power)
        {
            if(!power.on)
            {
                return;
            }

            physics.getMiddleXPos(object);
            physics.getMiddleYPos(object);

            var diff = millis() - power.hitStartedTime;
            
            var oldDiff = diff;
            if(diff > 450 - 30)
            {
                diff = 450;
            }

            var s = (0.1 + diff * 1.15 / 340);
            var sFill = ((oldDiff >= 280) ? (oldDiff - 280) * 170 / 270 : 0);

            noFill();
            strokeWeight(4 + diff * 4 / 350);
            stroke(80, 20, 160, 170 - sFill);
            ellipse(object.middleXPos, object.middleYPos, object.width * s, object.height * s);
            fill(31, 89, 235, 170 - sFill);
            ellipse(object.middleXPos, object.middleYPos, object.width * s, object.height * s);
            noStroke();
        },
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.xVel = 0;
            object.yVel = 0;

            if(typeof object.discoveredPowers[this.arrayName] === "undefined")
            {
                this.messages = {
                    "start" : {
                        messages : [{
                            message : "You got a new Power-up!",
                            color : color(255, 255, 255, 160),
                        }, {
                            message : "Ninja Guard!\n",
                            color : color(0, 140, 100, 160),
                        }],
                        choices : {
                            "---" : "..."
                        },
                    },
                    "---" : {
                        message : "With Ninja Guard you can dodge\nNinja stars by timing it correctly.\nJust press Z or L !",
                        choices : {
                            "exit" : "..."
                        }
                    }
                };

                talkHandler.start(this.messages, "start", "");

                var self = this;
                talkHandler.onEnd = function()
                {
                    self.remove();
                    self.draw = function() {};
                };
            }else{
                this.remove();
                this.draw = function() {};
            }

            object.discoveredPowersHandler.addPower(this.arrayName, this.actObject);
        }
    };
};
gameObjects.addObject("ninjaGuard", createArray(NinjaGuard));

var NinjaStarShooter = function(xPos, yPos, diameter)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.type = "power";

    this.color = color(101, 7, 160);

    this.angle = 0;
    this.xOut = 0;
    this.xOutVel = 1;

    this.draw = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);

        noFill();
        stroke(0, 90, 170);
        strokeWeight(2);
        ellipse(this.xPos, this.yPos, (this.diameter - this.xOut) * 1.5, this.diameter * 1.5);

        pushMatrix();
            translate(this.xPos, this.yPos);
            rotate(this.angle);
            stroke(0, 90, 30);
            strokeWeight(3);
            for(var a = 0; a < 360; a += 60)
            {
                arc(0, 0, this.diameter, this.diameter, radians(a), radians(a + 20));
            }
        popMatrix();

        stroke(0, 0, 0, 100);
        strokeWeight(1);
        var vs = (millis() % 1000 / 1000);
        ellipse(this.xPos, this.yPos, this.diameter * vs, this.diameter * vs);

        vs = ((millis() + 500) % 1000 / 1000);
        ellipse(this.xPos, this.yPos, this.diameter * vs, this.diameter * vs);
        noStroke();
    };

    this._lastUpdate = this.update;
    this.update = function()
    {
        this._lastUpdate();

        if(this.xOut > this.diameter || this.xOut < 0)
        {
            this.xOutVel = -this.xOutVel;
        }

        this.xOut += this.xOutVel;

        this.angle += 2;

        if(this.angle > 360)
        {
            this.angle = 0;
        }
    };

    this.messages = {
        "start" : {
            messages : [{
                message : "You got another power-up ",
                color : color(255, 255, 255, 160),
            }, {
                message : "Ninja Star Shooter!",
                color : color(0, 140, 100, 160),
            }],
            choices : {
                "---" : "..."
            },
        },
        "---" : {
            message : "With this new power up you can shoot\nNinja Stars! Press 'z' or 'l' to fire!",
            choices : {
                "last" : "..."
            }
        },
        "last" : {
            message : "Also remember you can press\nkeys like '1' or '2' to switch power-ups.",
            choices : {
                "exit" : "..."
            }
        }
    };

    this.actObject = {
        description : "Shoot Ninja Stars at stuff by pressing 'z' or 'l'!",
        key : '2',
        name : "Ninja Star Shooter",
        hitStartedTime : 0,
        start : function(object, power)
        {
            
        },
        update : function(object, power, activateKey)
        {
            if(activateKey && millis() - power.hitStartedTime > 700)
            {
                power.launchStar(object, power);
                power.hitStartedTime = millis();
            }
        },
        launchStar : function(object, power)
        {
            var xStars = gameObjects.getObject("xStar");
            xStars.add(object.xPos + object.halfWidth, object.yPos + object.halfHeight / 2, 14.5);

            sounds.mplaySound("swoosh.mp3");

            var xStar = xStars.getLast();
            xStar.likeLifeForm = true;

            xStar.lastRemove = xStar.remove;
            xStar.remove = function(objectB, scoreValue)
            {
                if(objectB && (objectB.dead || objectB.hp <= 0) && 
                  (objectB.isLifeForm || objectB.likeLifeForm) && !objectB.usedScore)
                {
                    object.score += scoreValue || objectB.scoreValue || 0;
                    objectB.usedScore = true;
                }
                return this.lastRemove.apply(this, arguments);
            };

            cameraGrid.addReference(xStar);

            xStar.outerXVel2 = (object.xFire < 0) ? -4 : 4;
            xStar.outerYVel2 = 0;

            if(object.controls.zoom())
            {
                xStar.outerXVel2 = (object.xFire < 0) ? -5 : 5;
            }
            if(object.throwInversed)
            {
                xStar.outerXVel2 *= 0.5;
            }

            xStar.setAngleVel = (object.xFire > 0) ? -3 : 3;
        },
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.xVel = 0;
            object.yVel = 0;

            if(typeof object.discoveredPowers[this.arrayName] === "undefined")
            {
                talkHandler.start(this.messages, "start", "");

                var self = this;
                talkHandler.onEnd = function()
                {
                    self.remove();
                    self.draw = function() {};
                };
            }else{
                this.remove();
                this.draw = function() {};
            }

            object.discoveredPowersHandler.addPower(this.arrayName, this.actObject);
        }
    };
};
gameObjects.addObject("ninjaStarShooter", createArray(NinjaStarShooter));

var IceSplicer = function(xPos, yPos, diameter)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.type = "power";

    this.rectAngle = 0;
    this.vel = 3;
    
    this.color = color(191, 15, 115);
    this.color2 = color(221, 45, 145);

    this.draw = function() 
    {
        this.rectAngle += this.vel;
        this.size = this.radius * 1.1 * (this.rectAngle * 0.05) * 0.1;
        this.halfSize = this.size / 2;

        fill(this.color);
        ellipse(this.xPos, this.yPos, this.halfSize * 2.3, this.halfSize * 2.3);
        pushMatrix();
        translate(this.xPos, this.yPos);
        rotate(this.rectAngle);
        rect(-this.halfSize, -this.halfSize, this.size, this.size);
        popMatrix();
        fill(this.color2);
        ellipse(this.xPos, this.yPos, this.halfSize * 1.6, this.halfSize * 1.6);

        if(this.rectAngle > 360 || this.rectAngle < 0)
        {
            this.vel = -this.vel;  
        }
    };

    this.messages = {
        "start" : {
            messages : [{
                message : "You got a new power-up, ",
                color : color(255, 255, 255, 160),
            }, {
                message : "Ice Splicer.",
                color : color(0, 140, 100, 160),
            }],
            choices : {
                "next" : "..."
            }
        },
        "next" : {
            message : "You can now splice normal ice!",
            choices : {
                "last" : "..."
            }
        },
        "last" : {
            message : "Remember to only use this on\nice that looks clear or light blue.",
            choices : {
                "exit" : "..."
            }
        }
    };

    this.actObject = {
        description : "Only splice/break ice that is clear or light blue with 'z' or 'l'!\nIf it doesn't work, try throwing yourself at the ice.",
        key : '3',
        name : "Ice Splicer",
        lastRemoveTime : 0,
        onCollide : function(object, power, activateKey, hitObject, info)
        {
            if(activateKey && hitObject.triangular && hitObject.arrayName === "ice" && millis() - power.lastRemoveTime > 300)
            {
                hitObject.shatter();
                
                power.lastRemoveTime = millis();
            }
        },
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.xVel = 0;
            object.yVel = 0;

            if(typeof object.discoveredPowers[this.arrayName] === "undefined")
            {
                talkHandler.start(this.messages, "start", "");

                var self = this;
                talkHandler.onEnd = function()
                {
                    self.remove();
                    self.draw = function() {};
                };
            }else{
                this.remove();
                this.draw = function() {};
            }

            object.discoveredPowersHandler.addPower(this.arrayName, this.actObject);
        }
    };
};
gameObjects.addObject("iceSplicer", createArray(IceSplicer));

var Heart = function(xPos, yPos, diameter, amt)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.type = "power";
    this.amt = amt || 5;

    this.color = color(30, 160, 120, 220);

    this.draw = function()
    {
        pushMatrix();
            translate(this.xPos, this.yPos);
            scale(this.flip, 1);
            noStroke();
            fill(this.color);
            ellipse(0, 0, this.diameter, this.diameter);

            textAlign(CENTER, CENTER);
            fill(255, 255, 255, 130);
            textSize(11);
            text((this.amt || amt) + " hp", 0, 0);
        popMatrix();
    };

    this.falling = false;

    this.gravity = 0;
    this.minimumYPos = yPos + 600;

    this.flip = 1;
    this.flipVel = 0.05;

    this._lastUpdate = this.update;
    this.update = function()
    {
        if(this.flip > 1 || this.flip < -1)
        {
            this.flipVel = -this.flipVel;
        }
        this.flip += this.flipVel;

        if(this.falling)
        {
            cameraGrid.removeReference(this);
            this.yPos += this.gravity;

            if(this.yPos > this.minimumYPos)
            {
                this.yPos = this.minimumYPos;
                this.falling = false;
            }

            this.boundingBox.yPos = this.yPos;
            cameraGrid.addReference(this);
        }

        this._lastUpdate();
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            object.dead = false;
            object.maxHp += this.amt;
            object.hp = object.maxHp;

            object.xVel = 0;
            object.yVel = 0;

            talkHandler.start({
                "start" : {
                    messages : [{
                        message : "Your",
                        color : color(255, 255, 255, 170)
                    }, {
                        message : "Max Hp",
                        color : color(14, 140, 280, 200)
                    }, {
                        message : "has increased by",
                        color : color(255, 255, 255, 170)
                    }, {
                        message : this.amt.toString(),
                        color : color(14, 140, 280, 200)
                    }, {
                        message : "!",
                        color : color(255, 255, 255, 170)
                    }],
                    choices : {
                        "---" : "..."
                    }
                },
                "---" : {
                    messages : [{
                        message : "Your",
                        color : color(255, 255, 255, 170)
                    }, {
                        message : "hp bar",
                        color : color(14, 140, 280, 200)
                    }, {
                        message : "has also been filled up!",
                        color : color(255, 255, 255, 170)
                    }],
                    choices : {
                        "exit" : "..."
                    }
                }
            }, "start", "");

            this.amt = 0;

            this.remove();
            this.onCollide = function() {};
        }
    };
};
gameObjects.addObject("heart", createArray(Heart));

var Crystal = function(xPos, yPos, diameter, config)
{
    Circle.call(this, xPos, yPos, diameter);

    this.physics.solidObject = false;
    this.type = "power";

    this.kind = config.kind;

    switch(this.kind)
    {
        case "overworld" :
            this.color = color(30, 160, 120, 80);
            break;

        case "ninja" :
            this.color = color(105, 0, 200, 80);
            break;

        case "winter" :
            this.color = color(0, 146, 172, 80); 
            break;

        default :
            this.color = color(0, 0, 0, 80);
            break;
    }

    this.altColor = color(0, 0, 0, 100);

    this.generateTriangles = function()
    {
        this.angles = [];
        this.vels = [];
        this.sizes = [];
        this.colors = [];
        var defaultColor = color(red(this.color), green(this.color), blue(this.color), 100);

        for(var i = 0; i < floor(random(6, 9)); i++)
        {
            this.angles[i] = random(0, 360);
            this.vels[i] = random(-3, 3);
            this.sizes[i] = min((random() + 0.3) * this.radius, this.radius);
            this.colors[i] = (random() < 0.3) ? this.altColor : defaultColor;
        }
    };

    this.generateTriangles();

    var player = gameObjects.getObject("player")[0];
    if(player && player.crystals)
    {
        if(player.crystals[this.kind])
        {
            this.remove();
            this.draw = function() {};
            this.onCollide = function() {};
        }
    }

    var s = this.radius;
    this.draw = function()
    {
        var i, a;
        for(var i = 0; i < this.angles.length; i++)
        {
            this.angles[i] += this.vels[i];
            var a = this.angles[i];
            s = this.sizes[i];

            fill(this.colors[i]);
            triangle(this.xPos + sin(radians(a)) * s, this.yPos + cos(radians(a)) * s, 
                     this.xPos + sin(radians(a + 120)) * s, this.yPos + cos(radians(a + 120)) * s, 
                     this.xPos + sin(radians(a + 240)) * s, this.yPos + cos(radians(a + 240)) * s);
        }

        fill(this.color);
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    };

    var inter = (this.kind.startsWithVowel() ? "an " : "a ") + this.kind.upper();
    this.messages = {
        "start" : {
            messages : [{
                message : "You got " + inter, 
                color : color(255, 255, 255, 150)
            }, {
                message : "Crystal",
                color : color(0, 160, 200, 170)
            }, {
                message : "!",
                color : color(255, 255, 255, 150)
            }],
            up : true,
            choices : {
                "exit" : "Okay"
            }
        },
    };

    this.onCollide = function(object)
    {
        if(object.arrayName === "player")
        {
            talkHandler.start(this.messages, "start", "");

            object.crystals[this.kind] = {};

            this.remove();
            this.onCollide = function() {};
        }
    };
};
gameObjects.addObject("crystal", createArray(Crystal));

var Lever = function(xPos, yPos, width, height, colorValue)
{
    Rect.call(this, xPos, yPos, width, height);
    this.color = colorValue || color(155, 155, 155);

    this.physics.solidObject = false;
    this.set = false;

    this.maxX = this.xPos + this.width;
    this.maxY = this.yPos + this.height;

    physics.getMiddleYPos(this);
    physics.getMiddleXPos(this);

    this.quadDiv = 7;

    this.lastSetTime = 0;
    this.maxSetTime = 300;
    this.handleLength = 18;

    this.leftHandleAngle = 360 - 127.5;
    this.rightHandleAngle = 120;

    this.pivotAngle = 105;

    this.handleAngle = this.leftHandleAngle;
    this.setAngleWithRange = function(x)
    {
        this.handleAngle = (this.leftHandleAngle - x) % 360;
    };

    this.draw = function()
    {
        noStroke();
        fill((this.set) ? 255 : 0);

        if(this.set)
        {
            this.setAngleWithRange((this.maxSetTime - constrain(millis() - this.lastSetTime, 0, this.maxSetTime)) * this.pivotAngle / this.maxSetTime);
        }else{
            this.setAngleWithRange(constrain(millis() - this.lastSetTime, 0, this.maxSetTime) * this.pivotAngle / this.maxSetTime);
        }

        var aX = this.middleXPos + sin(radians(this.handleAngle)) * this.handleLength;
        var aY = this.middleYPos + cos(radians(this.handleAngle)) * this.handleLength;

        strokeWeight(4);
        stroke(255, 255, 255, 100);
        line(this.middleXPos, this.middleYPos + 7, aX, aY);

        noStroke();
        fill((this.set) ? color(0, 200, 0, 150) : color(200, 0, 0, 150));
        ellipse(aX, aY, 10, 10);

        stroke(255, 255, 255, 100);

        fill(120, 120, 120);
        quad(this.xPos, this.maxY, 
             this.maxX, this.maxY, 
             this.maxX - this.quadDiv, this.middleYPos,
             this.xPos + this.quadDiv, this.middleYPos);

        textAlign(CENTER, CENTER);
        textSize(8);
        fill(0, 0, 0);

        if(this.handleAngle <= this.leftHandleAngle || this.handleAngle >= this.rightHandleAngle)
        {
            this.textSf = (this.set) ? "On" : "Off";
        }

        text(this.textSf, this.middleXPos, this.middleYPos + 7.5);
    };

    this.onCollide = function(object, info)
    {
        if(object.activate !== undefined && millis() - this.lastSetTime >= this.maxSetTime && object.activate(this))
        {
            this.set = !this.set;

            this.lastSetTime = millis();
        }

        if(object.arrayName === "xStar")
        {
            object.remove();
        }
    };
};
gameObjects.addObject("lever", createArray(Lever));

var Flypi = function(xPos, yPos, diameter, colorValue)
{
    DynamicCircle.call(this, xPos, yPos, diameter);

    this.color = colorValue || color(0, 0, 0, random(20, 100));

    this.physics.solidObject = false;

    this.gravity = 0;

    this.xSpeed = this.ySpeed = function() 
    {
        return random(-5, 5);
    };

    this.oyVel = this.xSpeed();
    this.oxVel = this.ySpeed();

    var tx = levelInfo.xPos,
        bx = levelInfo.xPos + levelInfo.width;

    var ty = levelInfo.yPos,
        by = levelInfo.yPos + levelInfo.height;

    this.life = 100;
    this.maxLife = 100;
    this.maxRadius = this.radius;
    this.maxColor = this.color;

    this.miniFlypis = createArray(Flypi);

    this._lastDraw = this.draw;
    this.draw = function()
    { 
        this._lastDraw();

        if(this.factory)
        {
            this.miniFlypis.draw();
        }
    };

    this._lastUpdate = this.update;
    this.update = function()
    {
        if(!this.mini)
        {
            if(this.attached)
            {
                var attachObject = gameObjects.getObject(this.attachedArrayName).input(this.attachedIndex);

                this._lastRadius = this.radius;
                this.radius = 8;

                if(observer.colliding(this, attachObject))
                {
                    this.oxVel = attachObject.xVel;
                    this.oyVel = attachObject.yVel;
                }else{
                    this.oyVel = this.xSpeed();
                    this.oxVel = this.ySpeed();
                    this.attached = false;
                }

                this.radius = this._lastRadius;
            }

            if(this.xPos + this.oxVel < levelInfo.xPos - this.radius ||
               this.xPos + this.oxVel > levelInfo.xPos + levelInfo.width + this.radius)
            {
                this.oxVel = -this.oxVel;
            }

            if(this.yPos + this.oyVel < levelInfo.yPos - this.radius || 
               this.yPos > levelInfo.yPos + levelInfo.height + this.radius)
            {
                this.oyVel = -this.oyVel;
            }
        }

        this.xPos += this.oxVel;
        this.yPos += this.oyVel;

        this._lastUpdate();

        if(this.factory)
        {
            if(this.miniFlypis.length < 20)
            {
                var amt = 3;
                var flypis = gameObjects.getObject("flypi");
                var radius = this.radius * 0.25;

                for(var i = amt - 1; i >= 0; i--)
                {
                    this.miniFlypis.add(this.xPos, this.yPos, radius);

                    var miniFlypi = this.miniFlypis.getLast();
                    miniFlypi.mini = true;

                    var a = degrees(atan2(this.oxVel, this.oyVel)) + round(random(-30, 30));
                    var s = round(random(2, 4)) / 2; 
                   
                    miniFlypi.oxVel = -cos(radians(a)) * s;
                    miniFlypi.oyVel = -sin(radians(a)) * s;
                    miniFlypi._index = this.miniFlypis.length - 1;

                    var self = this;
                    miniFlypi.remove = function()
                    {   
                        self.miniFlypis.splice(this._index, 1);
                    };
                }  
            }

            this.miniFlypis.update();
        }
        else if(this.mini)
        {
            this.life -= 1;
            this.radius = this.life * this.maxRadius / this.maxLife;

            var a = (this.maxLife - this.life) * alpha(this.maxColor) / this.maxLife;

            this.color = color(red(this.maxColor), blue(this.maxColor), green(this.maxColor), a);

            if(this.life < 0)
            {
                this.remove();
            }
        }
    };

    this.avoidCollision = function(object)
    {
        return (this.attached && 
                object.arrayName === this.attachedArrayName &&
                object.index === this.attachedIndex);
    };

    this.onCollide = function(object)
    {
        if(object.isLifeForm)
        {
            this.oxVel = 0;
            this.oyVel = 0;
            this.attached = true;
            this.attachedArrayName = object.arrayName;
            this.attachedIndex = object.index;
        }
    };
};
gameObjects.addObject("flypi", createArray(Flypi));

game.addFlypis = function()
{
    var amt = (floor(levelInfo.width * levelInfo.height / 25000)) * 1.5;

    var flypis = gameObjects.getObject("flypi");

    var tx = levelInfo.xPos,
        bx = levelInfo.xPos + levelInfo.width;

    var ty = levelInfo.yPos,
        by = levelInfo.yPos + levelInfo.height;

    for(var i = 0; i < amt; i++)
    {   
        var sz = round(random(5, 20)) * 1.5; 

        flypis.add(random(tx + sz, bx - sz), random(ty + sz, by - sz), sz);

        var flypi = flypis.getLast();
        flypi.factory = false;
    }
};

gameObjects.addObject("magicDoor", createArray(Door));

gameObjects.findOrder();

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*****************************************************Level-Object-Creation-Configs********************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var configAreaSaver = {
    setFromLevelCache : function(level, objectArrayNames, theme)
    {
        //use with f_getArrayNamesToSave

        var objectsExists = levels[level].cache.objectsExists;

        if(typeof objectsExists === "undefined" || 
           typeof theme === "undefined")
        {
            return;
        }

        for(var i = 0; i < objectArrayNames.length; i++)
        {
            var path = ("deleted_" + objectArrayNames[i]);
            var array = gameObjects.getObject(objectArrayNames[i]);

            if(array.fake || typeof objectsExists[path] === "undefined")
            {
                continue;
            }

            for(var j = 0; j < array.length; j++)
            {
                if(!array.input(j).fake && objectsExists[path][j])
                {
                    array.input(j).remove();
                    array.applyObject(j);
                }
            }
        }
    },
    gather : function(objectArrayNames)
    {
        //use with f_getArrayNamesToSave

        var recordedObjectBools = {};

        for(var i = 0; i < objectArrayNames.length; i++)
        {
            var path = ("deleted_" + objectArrayNames[i]);
            var array = gameObjects.getObject(objectArrayNames[i]);

            if(array.fake)
            {
                continue;
            }

            recordedObjectBools[path] = [];

            for(var j = 0; j < array.length; j++)
            {
                recordedObjectBools[path].push(array.input(j).fake || false);
            }
        }

        return recordedObjectBools;
    },
    saveToLevelCache : function(level, objectArrayNames, theme)
    {
        if(typeof theme === "undefined")
        {
            return;
        }

        var objectsExists = this.gather(objectArrayNames);

        levels[level].cache.objectsExists = objectsExists;
    },
};

var themes = {
    "ninjaTemple" : {
        afterLoad : function()
        {
            var fireBeakers = gameObjects.getObject("fireBeaker");
            for(var i = 0; i < fireBeakers.length; i++)
            {
                fireBeakers[i].color = color(70, 10, 200, 120);
                fireBeakers[i].particleColor = color(30, 30, 200, 130);
                fireBeakers[i].maxHp = 4;
                fireBeakers[i].hp = 4;
                fireBeakers[i].damage = 1.5;
            }

            var waterBeakers = gameObjects.getObject("waterBeaker");
            for(var i = 0; i < waterBeakers.length; i++)
            {
                waterBeakers[i].color = color(70, 10, 200, 120);
                waterBeakers[i].particleColor = color(30, 30, 200, 130);
                waterBeakers[i].maxHp = 4;
                waterBeakers[i].hp = 4;
                waterBeakers[i].damage = 1.5;
                waterBeakers[i].explosive = true;
            }

            var shooters = gameObjects.getObject("shooter");
            for(var i = 0; i < shooters.length; i++)
            {
                shooters[i].upSpeed = 2.7;
                shooters[i].minDamage = 0.5;
            }
        },
    },
};

var levelScripts = {
    "intro" : {
        apply : function()
        {
            var checkPoint = gameObjects.getObject("checkPoint").input(1);

            if(!checkPoint.checked)
            {
                var player = gameObjects.getObject("player").input(0);

                if(player.username !== undefined)
                {
                    //Prevent the game from not being saved at the start to refrain from dying and going to the wrong check point
                    game.save();

                    this.stop = true;
                    this.apply = function() {};
                }
            }else{
                this.stop = true;
            }
        }
    },
    "villageHouse" : {
        apply : function()
        {
            if(!levels[levelInfo.level].doors.b.locked)
            {
                gameObjects.getObject("npc")[1].message = "thank";
                self.stop = true;
            }
        }
    },
    "coreGround" : {
        apply : function()
        {
            if(levels[levelInfo.level].save.brokeIce)
            {
                gameObjects.getObject("ice").splice(0, 6);
                gameObjects.getObject("lever").getLast().set = true;
                this.stop = true;
            }

            var player = gameObjects.getObject("player").getLast();
            if(gameObjects.getObject("lever").getLast().set)
            {
                cam.lowerRight.col += 3;
                gameObjects.getObject("ice").clear();
                levels[levelInfo.level].save.brokeIce = true;
                this.stop = true;
            }
        },
    },
    "miniBattle" : {
        afterLoad : function()
        {
            if(levels[levelInfo.level].save.defeatedEnemies)
            {   
                gameObjects.getObject("ninja").length = 0;
                gameObjects.getObject("spaceBreaker").length = 0;
            }else{
                levels[levelInfo.level].doors.a.locked = true;
                levels[levelInfo.level].doors.b.locked = true;
            }
        },
        apply : function()
        {
            var ninjas = gameObjects.getObject("ninja");
            var spaceBreakers = gameObjects.getObject("spaceBreaker");
            
            var defeated = true;
            for(var i = 0; i < ninjas.length; i++)  
            {
                defeated &= (ninjas[i] === undefined || ninjas[i].arrayName !== "ninja" ||
                ninjas[i].hideDelete || ninjas[i].fake);
                if(!defeated)
                {
                    break;
                }
            }
            for(var i = 0; i < spaceBreakers.length; i++)  
            {
                defeated &= (spaceBreakers[i] === undefined || spaceBreakers[i].arrayName !== "spaceBreaker" || 
                spaceBreakers[i].hideDelete || spaceBreakers[i].fake);
                if(!defeated)
                {
                    break;
                }
            }

            if(defeated)
            {
                levels[levelInfo.level].save.defeatedEnemies = true;
                levels[levelInfo.level].doors.a.locked = false;
                levels[levelInfo.level].doors.b.locked = false;
                this.stop = true;
            }
        },
    },
    "ninjaTempleBackyard" : {
        apply : function()
        {
            var chest = gameObjects.getObject("chest").getLast();

            if(chest.goto.isOpen || !chest.goto.hidden)
            {
                gameObjects.getObject("ninja").forEach(function(element, index, array) 
                {
                    element.remove();
                    array.applyObject(index);
                });
                chest.goto.hidden = false;

                try{
                    var key1 = gameObjects.getObject("key").getLast();
                    key1.goto.hidden = false;
                }
                catch(e)
                {
                    console.log(e);
                }

                this.stop = true;
                return;
            }

            var ninjas = gameObjects.getObject("ninja");

            var fakeNinjas = 0;
            ninjas.forEach(function(element, index, array) 
            {
                if(element.fake)
                {
                    fakeNinjas++;
                }
            });

            if(fakeNinjas >= ninjas.length)
            {
                cam.attach(function()
                {
                    var chest = gameObjects.getObject("chest").getLast();

                    if(!game.cutScening)
                    {
                        chest.goto.unHideTimer = millis();
                        chest.goto.unHideTime = 1000;
                    }

                    game.cutScening = true;

                    if(chest.goto.unHideTimer >= 1000)
                    {
                        try{
                            var key1 = gameObjects.getObject("key").getLast();
                            key1.goto.hidden = false;
                        }
                        catch(e)
                        {
                            console.log(e);
                        }
                    }

                    return chest;
                }, false, 2000, function()
                {
                    game.cutScening = false;
                });

                this.stop = true;
            }
        },
    },
    "ninjaTemple" : {
        afterLoad : function()
        {
            this.setTime = millis();
        },
        apply : function()
        {
            levelInfo.nightMode = false;
            this.stop = true;
        },
    },
    "ninjaTempleFight" : {
        afterLoad : function()
        {
            this.ninjaIndex = 0;

            var keys = gameObjects.getObject("key");

            (keys.getLast().goto || {}).hidden = true;

            if(keys.length <= 0)
            {
                gameObjects.getObject("ninja").forEach(function(element, index, array) 
                {
                    element.remove();
                    array.applyObject(index);
                });
                gameObjects.getObject("spaceBreaker").forEach(function(element, index, array) 
                {
                    element.remove();
                    array.applyObject(index);
                });
                this.stop = true;
            }
        },
        apply : function()
        {
            var ninja = gameObjects.getObject("ninja")[this.ninjaIndex];

            if(ninja === undefined)
            {
                return;
            }

            var key = gameObjects.getObject("key").getLast();

            if(key.fake)
            {
                this.stop = true;
            }

            if(ninja.fake)
            {
                key.goto.hidden = false;
                this.stop = true;
            }else{
                physics.teleport(key, ninja.xPos, ninja.yPos);
            }
        },
    },
    "ninjaTempleBossRoom" : {
        afterLoad : function()
        {
            this.spikeSpeed = 2.5;

            this.state = this.spikeSpeed;
            this.up = levelInfo.yPos + levelInfo.unitHeight * 3;
            this.down = levelInfo.yPos + levelInfo.height - levelInfo.unitHeight * 3.7;
            this.startWaitTime = 0;
            this.startUpTimer = 0;

            var spikes = gameObjects.getObject("spike");
            spikes.forEach(function(element, index, array)
            {
                element.interval = random(1, 2);
                element.damage = 2.7;
            });

            var bossDefeated = levels[levelInfo.level].save.bossDefeated;

            if(!bossDefeated)
            {
                levels[levelInfo.level].doors.a.locked = true;
                levels[levelInfo.level].doors.b.locked = true;
            }else{
                try{
                    var ninjaBosses = gameObjects.getObject("ninjaBoss");
                    ninjaBosses.input(0).remove();
                    ninjaBosses.applyObject(0);
                }
                catch(e)
                {

                }
            }

            this.doneThis = false;
        },
        apply : function()
        {
            var bossDefeated = gameObjects.getObject("ninjaBoss").input(0).fake;
            var lever = gameObjects.getObject("lever").input(0);
            var player = gameObjects.getObject("player").input(0);
            var spikes = gameObjects.getObject("spike");

            if(bossDefeated && !player.dead && !this.doneThis)
            {
                levels[levelInfo.level].doors.a.locked = false;
                levels[levelInfo.level].doors.b.locked = false;
                levels[levelInfo.level].save.bossDefeated = true;
                lever.set = false;
                this.state = -this.spikeSpeed;
                this.doneThis = true;
                return;
            }

            spikes.forEach(function(element, index, array)
            {
                element.updateMe = true;
            });

            if(this.state !== 0)
            {
                var spikes = gameObjects.getObject("spike");
                var lastElement = {};
                var self = this;

                spikes.forEach(function(element, index, array)
                {
                    if(element.dead)
                    {
                        return;
                    }

                    element.move(0, constrain(element.yPos + self.state * element.interval, self.up, self.down));

                    lastElement = element;
                });

                //Make spikes "move" at the same speed even in 30 fps mode.
                if(game.fps === 30)
                {
                    spikes.forEach(function(element, index, array)
                    {
                        if(element.dead)
                        {
                            return;
                        }

                        element.move(0, constrain(element.yPos + self.state * element.interval, self.up, self.down));

                        lastElement = element;
                    });
                }

                var stateChange = false;

                if(lastElement.yPos + this.state >= this.down)
                {
                    if(this.startUpTimer === 0)
                    {
                        this.startUpTimer = millis();
                    }
                    else if(millis() - this.startUpTimer >= 4000)
                    {
                        lever.set = false;
                        this.state = -this.spikeSpeed;
                        this.startWaitTime = 0;

                        stateChange = true;
                    }
                }

                if(!stateChange)
                {
                    this.state = (lever.set) ? this.spikeSpeed : -this.spikeSpeed;

                    if(!lever.set)
                    {
                        this.startUpTimer = 0;
                    }
                }
            }
        }
    },
    "icyTracks" : {
        beforeLoad : function()
        {
            gameObjects.getObject("water").add(levelInfo.xPos + 3030, levelInfo.yPos + 330, 3000, 4000);
            gameObjects.getObject("water").getLast().freezable = false;
        },
    },
    "icyTracks_2" : {
        beforeLoad : function()
        {
            gameObjects.getObject("water").add(levelInfo.xPos + 10020 - 30, levelInfo.yPos + levelInfo.height + 100, 370, 800);

            this.water = gameObjects.getObject("water").getLast();
            this.water.showNoFreeze = true;

            this.water.physics.movement = "dynamic";
            cameraGrid.addReference(this.water);

            this.water.update = this.water.__lastUpdate;

            this.water.avoidCollision = function(object)
            {
                return object.physics.movement === "static";
            };
        },
        apply : function()
        {
            var lever = gameObjects.getObject("lever").input(0);

            if(lever.set)
            {
                this.water.yPos -= 10;
            }else{
                this.water.yPos += 10;
            }

            this.water.yPos = constrain(this.water.yPos, levelInfo.yPos + 510, levelInfo.yPos + levelInfo.height + 100);

            this.water.updateBoundingBox();

            this.water.update();

            cameraGrid.addReference(this.water);
        }
    },
    "locked_In" : {
        afterLoad : function()
        {
            var chest = gameObjects.getObject("chest").getLast();

            if(chest.goto.isOpen || !chest.goto.hidden)
            {
                gameObjects.getObject("iceBeaker").forEach(function(element, index, array) 
                {
                    element.remove();
                    array.applyObject(index);
                });
                chest.goto.hidden = false;

                this.stop = true;
            }
        },
        apply : function()
        {
            var chest = gameObjects.getObject("chest").getLast();

            if(chest.goto.isOpen || !chest.goto.hidden)
            {
                gameObjects.getObject("iceBeaker").forEach(function(element, index, array) 
                {
                    element.remove();
                    array.applyObject(index);
                });
                chest.goto.hidden = false;

                this.stop = true;
                return;
            }

            var iceBeakers = gameObjects.getObject("iceBeaker");

            var deadIceBeakers = 0;
            iceBeakers.forEach(function(element, index, array) 
            {
                if(element.fake)
                {
                    deadIceBeakers++;
                }
            });

            if(deadIceBeakers >= iceBeakers.length)
            {
                cam.attach(function()
                {
                    var chest = gameObjects.getObject("chest").getLast();

                    if(!game.cutScening)
                    {
                        chest.goto.unHideTimer = millis();
                        chest.goto.unHideTime = 1000;
                    }

                    game.cutScening = true;

                    return chest;
                }, false, 2000, function()
                {
                    game.cutScening = false;
                });

                this.stop = true;
            }
        },
    },
    "entry" : {
        openLoad : function()
        {
            if(levels[levelInfo.level].save.secretUnlocked)
            {
                this.afterSecret();
                this.containsItem = true;
                this.offX = -570;
            }else{
                levels[levelInfo.level].save.secretUnlocked = false;
                this.offX = 0;
            }
        },
        afterLoad : function()
        {
            var chest = gameObjects.getObject("itemChest").input(0);
            var lastDraw = chest.draw;
            chest.draw = function()
            {
                lastDraw.apply(this, arguments);

                if(chest.goto.open)
                {
                    return;
                }

                var vw = this.width * 0.46, vh = this.height * 0.46;
                var px = (cam.focusXPos - cam.halfWidth) + mouseX, py = (cam.focusYPos - cam.halfHeight) + mouseY;

                textSize(12);
                textAlign(CENTER, CENTER);
                fill(255, 255, 255);
                text('?', this.xPos + vw / 2, this.yPos + vh / 2);

                fill(levels[levelInfo.level].save.secretUnlocked ? color(10, 200, 0, 178) : color(10, 0, 200, 178));
                rect(this.xPos, this.yPos, vw, vh, 8);

                if(observer.collisionTypes.pointrect.colliding({
                    xPos : px,
                    yPos : py
                }, {
                    xPos : this.xPos,
                    yPos : this.yPos,
                    width : vw,
                    height : vh
                }, 3, 3))
                {
                    fill(255, 255, 255, 255);
                    textSize(9);
                    textAlign(LEFT, CENTER);
                    text(window.bombEmoji || '*', px - 2, py);
                    game.noCursor = true;
                }
            };
        },
        draw : function()
        {
            var self = levelScripts.entry;
            var isGreen = (self.containsItem || levels[levelInfo.level].save.secretUnlocked);

            if(isGreen && !game.cutScening)
            {
                self.offX = Math.max(self.offX - 4, -570);
            }
            
            if(isNaN(self.offX) || self.offX === undefined)
            {
                self.offX = 0;
            }

            stroke(isGreen ? color(10, 200, 170, 160) : color(10, 20, 200, 160));
            strokeWeight(4);
            line(1543, 338, 2275 + self.offX, 338);

            textSize(12);
            textAlign(CENTER, CENTER);
            fill(255, 255, 255);
            text('?', 2275 + 6.9 + self.offX, 338);

            noStroke();
            fill(isGreen ? color(10, 200, 170, 160) : color(10, 20, 200, 160));
            rect(2275 + self.offX, 338 - 6.9, 13.8, 13.8);

            var px = (cam.focusXPos - cam.halfWidth) + mouseX, py = (cam.focusYPos - cam.halfHeight) + mouseY;
            if(observer.collisionTypes.pointrect.colliding({
                xPos : px,
                yPos : py
            }, {
                xPos : 2275 + self.offX,
                yPos : 338 - 6.9,
                width : 13.8,
                height : 13.8
            }, 3, 3))
            {
                fill(255, 255, 255, 255);
                textSize(9);
                textAlign(LEFT, CENTER);
                text(window.bombEmoji || '*', px - 2, py);
                game.noCursor = true;
            } 
        },
        apply : function()
        {
            if(this._stop)
            {
                return;
            }

            var chest = gameObjects.getObject("itemChest").input(0);

            if(!this.containsItem)
            {
                chest.goto.items.forEach(item => {
                    if(item.contains === "energy")
                    {
                        this.containsItem = true;
                    }
                });

                if(gameObjects.getObject("ice").length > 110)
                {
                    levels[levelInfo.level].save.secretUnlocked = false;
                }
            }else{
                if(!this._notFirst && gameObjects.getObject("ice").length > 110)
                {
                    levels[levelInfo.level].save.secretUnlocked = false;
                    this.containsItem = false;
                    this._notFirst = true;
                }else{
                    this._stop = true;
                    return;
                }
            }

            if(this.containsItem)
            {
                var self = this;
                self.lastShatterTime = 0;
                self.shatterIndex = 0;
                if(!self.hadShattered)
                {
                    game.cutScening = true;
                }
                cam.attach(function()
                {
                    var object = gameObjects.getObject("ice")[self.shatterIndex];

                    if(!self.lastShatterTime || millis() - self.lastShatterTime >= 300)
                    {
                        if(object.shatter && !object.shattered)
                        {
                            object.shatter();
                            self.hadShattered = true;
                        }
                        self.lastShatterTime = millis();
                        self.shatterIndex++;
                    }

                    var ices = gameObjects.getObject("ice");

                    var vObject = ices[self.shatterIndex];

                    var i = self.shatterIndex;
                    while(true)
                    {
                        if(!vObject || vObject.fake)
                        {
                            i++;
                            vObject = ices[i];

                            if(i >= ices.length)
                            {
                                return false;
                            }

                            continue;
                        }else{
                            break;
                        }
                    }

                    self.shatterIndex = (typeof i === "number") ? i : self.shatterIndex;

                    if(vObject.index >= 28)
                    {
                        return false;
                    }

                    game.cutScening = true;

                    return vObject;
                }, false, 7500, function()
                {
                    game.cutScening = false;
                    delete self.shatterIndex;
                    delete self.lastShatterTime;

                    self.afterSecret(chest);
                });

                this._stop = true;
            }
        },
        afterSecret : function(chest)
        {
            chest = chest || gameObjects.getObject("itemChest").input(0);
            levels[levelInfo.level].save.secretUnlocked = true;

            if(this.hadShattered)
            {
                chest.goto.items.forEach((item, index, items) => {
                    if(item.contains === "energy")
                    {
                        chest.goto.items[index] = {};
                    }
                });
            }
        }
    },
    "icyPuzzles2" : {
        afterLoad : function()
        {
            var level = levels[levelInfo.level];
            level.itemChests.a.hidden = !level.save.roomDefeated;

            if(level.save.roomDefeated)
            {
                gameObjects.getObject("voxelizer").forEach(element => element.remove());
                this.stop = true;
            }
        },
        apply : function()
        {
            var enemiesDefeated = 0;

            var voxelizers = gameObjects.getObject("voxelizer");
            voxelizers.forEach((element, index, array) => {
                if(element.fake)
                {
                    enemiesDefeated++;
                }
            });

            if(enemiesDefeated === voxelizers.length)
            {
                cam.attach(function()
                {
                    var chest = gameObjects.getObject("itemChest")[0];
                    
                    if(!game.cutScening)
                    {
                        chest.goto.unHideTimer = millis();
                        chest.goto.unHideTime = 1000;
                    }

                    game.cutScening = true;

                    return chest;
                },
                false, 2000, function()
                {
                    game.cutScening = false;
                    levels[levelInfo.level].save.roomDefeated = true;
                });
                this.stop = true;
            }
        },
    },
    "IceDragon" : {
        apply : function()
        {
            var iceDragon = gameObjects.getObject("iceDragon").input(0);

            if(iceDragon === undefined || iceDragon.draw === undefined)
            {
                this.stop = true;
                return;
            }

            try{
                cameraGrid.removeReference(iceDragon);
                iceDragon.update(true);
                cameraGrid.addReference(iceDragon);

                var player = gameObjects.getObject("player").input(0);
                iceDragon.nodes.applyCollision(player);

                player.xPos += iceDragon.xVel;
                player.yPos += iceDragon.yVel;
            }
            catch(e) {}
        },
        draw : function()
        {
            var iceDragon = gameObjects.getObject("iceDragon").input(0);

            if(iceDragon === undefined || iceDragon.draw === undefined)
            {
                this.stop = true;
                return;
            }

            iceDragon.draw(true);
        },
    },
};
levelScripts.restart = function()
{
    for(var i in this)
    {
        this[i].stop = false;
    }

    if(levelInfo.theme !== undefined)
    {
        for(var i in themes[levelInfo.theme])
        {
            themes[levelInfo.theme][i].stop = false;
        }
    }
};
levelScripts.openLoad = function()
{
    if(typeof this[levelInfo.level] === "object" && 
       this[levelInfo.level].openLoad !== undefined)
    {
        this[levelInfo.level].openLoad();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].openLoad !== undefined)
        {
            themes[levelInfo.theme].openLoad();
        }
    }
};
levelScripts.beforeLoad = function()
{
    if(typeof this[levelInfo.level] === "object" && 
       this[levelInfo.level].beforeLoad !== undefined)
    {
        this[levelInfo.level].beforeLoad();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].beforeLoad !== undefined)
        {
            themes[levelInfo.theme].beforeLoad();
        }
    }
};
levelScripts.onSave = function()
{
    if(typeof this[levelInfo.level] === "object" && 
       this[levelInfo.level].onSave !== undefined)
    {
        this[levelInfo.level].onSave();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].onSave !== undefined)
        {
            themes[levelInfo.theme].onSave();
        }
    }
};
levelScripts.afterLoad = function()
{
    if(typeof this[levelInfo.level] === "object" && 
       this[levelInfo.level].afterLoad !== undefined)
    {
        this[levelInfo.level].afterLoad();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].afterLoad !== undefined)
        {
            themes[levelInfo.theme].afterLoad();
        }
    }
};
levelScripts.apply = function()
{
    if(this[levelInfo.level] !== undefined && 
    typeof this[levelInfo.level].apply === "function" && 
    !this[levelInfo.level].stop)
    {
        this[levelInfo.level].apply();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].apply !== undefined && 
        !themes[levelInfo.theme].stop)
        {
            themes[levelInfo.theme].apply();
        }
    }
};
levelScripts.draw = function()
{
    if(this[levelInfo.level] !== undefined && 
    typeof this[levelInfo.level].draw === "function" && 
    !this[levelInfo.level].stop)
    {
        this[levelInfo.level].apply();
        (this[levelInfo.level].draw || function(){})();
    }

    if(levelInfo.theme !== undefined)
    {
        if(typeof themes[levelInfo.theme] === "object" && 
        themes[levelInfo.theme].draw !== undefined && 
        !themes[levelInfo.theme].stop)
        {
            themes[levelInfo.theme].draw();
        }
    }
};

//Make sure every level has a save place
for(var i in levels)
{
    if(typeof levels[i].save === "undefined")
    {
        levels[i].save = {};
    }
}

//Levels!
levels.getSymbol = function(col, row, levelPlan)
{
    if(col >= 0 && col < levelPlan[0].length &&
       row >= 0 && row < levelPlan.length)
    {
        return levelPlan[row][col];
    }else{
        return " ";
    }
};
levels.clearCache = function()
{
    for(var i in levels)
    {
        if(typeof levels[i].plan !== "undefined")
        {
            levels[i].cache = {};
        }
    }
};
//Eventually these methods will be with the gameObject arrays (maybe)
levels.setObjectAtCheckPoint = function(object, xPos, yPos)
{
    var checkPoint = gameObjects.getObject("checkPoint").getLast();
    if(object.goto !== undefined && object.goto.travelType === "checkPoint" && object.goto.checkPointIndex === checkPoint.index)
    {
        physics.teleport(object, xPos, yPos - abs(object.height - levelInfo.unitHeight));

        checkPoint.setObjectProps(object);
    }
};
levels.setObjectAtDoor = function(object, xPos, yPos, symbol)
{
    if(object.goto !== undefined && object.goto.travelType === "door" && object.goto.doorSymbol === symbol)
    {
        physics.teleport(object, xPos, yPos + (levelInfo.unitHeight * 2 - object.height));
    }
};
levels.setPlayer = function(xPos, yPos, colorValue)
{
    //Init with a checkPoint
    gameObjects.getObject("checkPoint").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, undefined, true);
    if(gameObjects.getObject("player").length <= 0)
    {
        gameObjects.getObject("player").add(xPos, yPos - abs(levelInfo.unitHeight * 2 - levelInfo.unitHeight), levelInfo.unitWidth, levelInfo.unitHeight * 2, colorValue);
        //Set checkPoint
        gameObjects.getObject("checkPoint").getLast().setObjectProps(gameObjects.getObject("player").getLast(0));
    }
    this.setObjectAtCheckPoint(gameObjects.getObject("player").getLast(), xPos, yPos);
};
levels.applySettings = function(level)
{
    var configLevel = ((configs[levelInfo.theme] || {}).level || {});

    levelInfo.nightMode = level.nightMode || configLevel.nightMode;
    levelInfo.daylightCycle = level.daylightCycle || configLevel.daylightCycle;
    levelInfo.laddersWhite = level.laddersWhite || configLevel.laddersWhite;
    levelInfo.useFlypis = level.useFlypis || configLevel.useFlypis;

    levelInfo.cold = configLevel.cold || level.cold;

    if(level.background !== undefined)
    {
        backgrounds.setBackground(level.background);
    }
    else if(configLevel.background !== undefined)
    {
        backgrounds.setBackground(configLevel.background);
    }

    if(level.debugMenuWhite !== undefined)
    {
        screenUtils.debugMenuWhite = level.debugMenuWhite;
    }
    else if(configLevel.debugMenuWhite !== undefined) 
    {
        screenUtils.debugMenuWhite = configLevel.debugMenuWhite;
    }else{
        screenUtils.debugMenuWhite = (screenUtils.debugMenuWhite || game.debugMenuWhite);
    }

    if(level.shade !== undefined)
    {
        levelInfo.levelShade = color(level.shade.r || 0, level.shade.g || 0, level.shade.b || 0, level.shade.a || 0);
    }
    else if(configLevel.shade !== undefined)
    {
        levelInfo.levelShade = color(configLevel.shade.r || 0, configLevel.shade.g || 0, configLevel.shade.b || 0, configLevel.shade.a || 0);
    }else{
        levelInfo.levelShade = color(0, 0, 0, 1);
    }

    if(level.inWater || configLevel.inWater)
    {
        gameObjects.getObject("water").add(levelInfo.xPos, levelInfo.yPos, levelInfo.width, levelInfo.height);  
    }
    if(level.darkGrid || configLevel.darkGrid)
    {
        gameObjects.getObject("backBlock").add(levelInfo.xPos, levelInfo.yPos, levelInfo.width, levelInfo.height);
    }

    levelInfo.inWater = level.inWater || configLevel.inWater;

    if(levelInfo.useFlypis)
    {
        game.addFlypis();
    }

    levelInfo.backgroundDarkGrid = (level.backgroundDarkGrid || configLevel.backgroundDarkGrid);
    screenUtils.useInverseCircle = level.hideScreen || configLevel.hideScreen;
},
levels.build = function(plan)
{
    var level = this[plan.level];
    
    if(plan.first)
    {
        levelInfo.width = level.plan[0].length * levelInfo.unitWidth;
        levelInfo.height = level.plan.length * levelInfo.unitHeight;
        levelInfo.theme = level.theme;

        this.applySettings(level);
    }
    
    var done = false;
    var start = max((plan.minRow || 0), 0);
    var end = min((plan.maxRow || level.plan.length), level.plan.length);
    
    var table = (level.table || ((configs[levelInfo.theme] || {}).level || {}).table || {});
    var blockColor = ((typeof levelInfo.theme !== "undefined" && levelInfo.theme.toString() === "ninjaTemple") ? color(90, 20, 180) : color(130, 130, 130));

    for(var row = start; row < end; row++)
    {
        for(var col = 0; col < level.plan[row].length; col++)
        {
            var xPos = levelInfo.xPos + col * levelInfo.unitWidth;
            var yPos = levelInfo.yPos + row * levelInfo.unitHeight;

            /*Prevent objects from generating in the door 
            besides objects that went though the door*/
            var belowSymbol = this.getSymbol(col, row + 1, level.plan);
            if(belowSymbol === 'D')
            {
                for(var i = 0; i < travelObjects.length; i++)
                {
                    var object = gameObjects.getObject(travelObjects[i].arrayName).input(travelObjects[i].index);
                    this.setObjectAtDoor(object, xPos, yPos, level.plan[row][col]);
                }
                continue;
            }
            else if(belowSymbol === 'K' || belowSymbol === 'S' ||
            (belowSymbol === 'C' && (level.plan[row][col] === 'r' || 
            level.plan[row][col] === 's')) || belowSymbol === '@' || 
            belowSymbol === '[' || belowSymbol === "$" || 
            belowSymbol === 'B' || belowSymbol === 'H' || 
            belowSymbol === ']')
            {
                continue;
            }

            switch(level.plan[row][col])
            {
                case 'g' :
                    gameObjects.getObject("ground").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(107, 83, 60));
                    break;

                case 'd' :
                    gameObjects.getObject("dirt").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(107, 83, 60));
                    break;
                
                case 'b' : 
                    gameObjects.getObject("block").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, blockColor);
                    break;
                
                case 'w' : 
                    gameObjects.getObject("water").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
               
                case 'z' :
                    gameObjects.getObject("lever").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case '1' :
                    gameObjects.getObject(table['1'] || "filterBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case '2' :
                    if(typeof table['2'] !== "undefined")
                    {
                        gameObjects.getObject(table['2']).add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    }else{
                        var clr = ((typeof levelInfo.theme !== "undefined" && levelInfo.theme.toString() === "ninjaTemple") ? color(60, 18, 170, 214) : color(100, 128, 120, 214));
                        gameObjects.getObject("block").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, clr);
                        gameObjects.getObject("block").getLast().physics.solidObject = false;
                    }
                    break;

                case '3' :
                    if(typeof table['3'] !== "undefined")
                    {
                        gameObjects.getObject(table['3']).add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    }
                    break;

                case '4' :
                    if(table['4'] === "snowBlockOther")
                    {
                        gameObjects.getObject("snowBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, undefined, "other");
                    }
                    else if(typeof table['4'] !== "undefined")
                    {
                        gameObjects.getObject(table['4']).add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    }
                    break;

                case '5' :
                    if(typeof table['5'] !== "undefined")
                    {
                        gameObjects.getObject(table['5']).add(xPos, yPos, levelInfo.unitWidth * 0.7);
                    }
                    break;

                case '6' :
                    gameObjects.getObject(table['6'] || "dirtyBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case '7' :
                    gameObjects.getObject("voxelizer").add(xPos + 4, yPos + 4, levelInfo.unitWidth - 8, levelInfo.unitHeight - 8);
                    break;

                case '8' :
                    gameObjects.getObject(table['8'] || "catDogStatue").add(xPos, yPos - levelInfo.unitHeight, levelInfo.unitWidth, levelInfo.unitHeight * 2);
                    break;

                case 'k' : 
                    gameObjects.getObject("dirtyCat").add(xPos, yPos, levelInfo.unitWidth * 2.0, levelInfo.unitHeight * 1.28);
                    break;

                case '_' :
                    gameObjects.getObject("snowLayer").add(xPos, yPos + levelInfo.unitHeight * 1.1, levelInfo.unitWidth, levelInfo.unitHeight * 0.1); 
                    break;

                case 'Q' :
                    gameObjects.getObject("hardCaseBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case 'G' :
                    gameObjects.getObject("fogMachine").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case 'W' : 
                    if(table['W'] === "unWater")
                    {
                        gameObjects.getObject("water").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                        gameObjects.getObject("water").getLast().freezable = false;
                    }else{
                        gameObjects.getObject("water").add(xPos - levelInfo.unitWidth, yPos - levelInfo.unitHeight, levelInfo.unitWidth * 3, levelInfo.unitHeight * 3);
                    }
                    break;

                case '0' :
                    if(table['W'] === "unWater")
                    {
                        gameObjects.getObject("water").add(xPos - levelInfo.unitWidth, yPos - levelInfo.unitHeight, levelInfo.unitWidth * 3, levelInfo.unitHeight * 3);
                        gameObjects.getObject("water").getLast().freezable = false;
                    }
                    break;
                
                case 'T' :
                    var w = levelInfo.unitWidth * 2;
                    var h = levelInfo.unitHeight * random(4, 6);
                    gameObjects.getObject("tree").add(xPos, yPos - (h -  levelInfo.unitHeight), w, h);
                    break;

                case 'i' :
                    gameObjects.getObject("ice").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
                
                case 'C' :
                    var numX = random(1.5, 2.4);
                    var numY = random(1.4, 1.7);
                    var weather = "";
                    var aboveSymbol = this.getSymbol(col, row - 1, level.plan);
                    if(aboveSymbol === 'r')
                    {
                        weather = "rain";
                    }
                    else if(aboveSymbol === 's')
                    {
                        weather = "snow";
                    }
                    gameObjects.getObject("cloud").add(xPos - levelInfo.unitWidth * numX, yPos - levelInfo.unitHeight * 0.1,
                    levelInfo.unitWidth * numX * 2, levelInfo.unitHeight * numY, undefined, weather, "light", true);
                    break;

                case '#' :
                    gameObjects.getObject("lava").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
                
                case 'e' :
                    gameObjects.getObject("fireBeaker").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
                
                case 'E' :
                    gameObjects.getObject("waterBeaker").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
                
                case '%' :
                    gameObjects.getObject("shooter").add(xPos + levelInfo.unitWidth / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth);
                    break;

                case '9' :
                    //Could be used for grappling hooks
                    gameObjects.getObject("imageBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, "dark"); 
                    break;

                case '`' :
                    gameObjects.getObject("imageBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, "up").physics.sides = { up : true }; 
                    break;

                case '~' :
                    gameObjects.getObject("imageBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, "cathodes2"); 
                    break;

                case '*' :
                    gameObjects.getObject("cloudMine").add(xPos + levelInfo.unitWidth / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth);
                    break;

                case '&' :
                    gameObjects.getObject("skyViper").add(xPos, yPos, levelInfo.unitWidth * 1.35, levelInfo.unitHeight * 1.45);
                    break;

                case 'I' :
                    if(table['I'] === "ice")
                    {
                        gameObjects.getObject("ice").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, undefined, undefined, true);
                    }else{
                        gameObjects.getObject("ninja").add(xPos, yPos - levelInfo.unitHeight * 0.7, levelInfo.unitWidth * 1, levelInfo.unitHeight * 1.7);
                    }
                    break;

                case 'A' :
                    gameObjects.getObject("spike").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);

                    if(levelInfo.theme === "winter")
                    {
                        gameObjects.getObject("spike").getLast().color = color(24, 184, 219);
                    }
                    break;

                case 'V' :
                    gameObjects.getObject("spike").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, undefined, true);

                    if(levelInfo.theme === "winter")
                    {
                        gameObjects.getObject("spike").getLast().color = color(24, 184, 219);
                        gameObjects.getObject("spike").getLast().falls = true;
                        gameObjects.getObject("spike").getLast().winter = true;
                    }
                    break;

                case 'U' :
                    gameObjects.getObject("ladder").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, (levelInfo.laddersWhite || backgrounds.background === "dark") ? color(230, 230, 230, 160) : undefined);
                    break;
                    
                case '+' :
                    gameObjects.getObject("net").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case 'n' : 
                    gameObjects.getObject("movingLava").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    gameObjects.getObject("movingLava").getLast().xSpeed = 2;
                    break;
                    
                case 'N' : 
                    gameObjects.getObject("movingLava").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    gameObjects.getObject("movingLava").getLast().ySpeed = 2;
                    break;  
                    
                case 's' :
                    gameObjects.getObject("spring").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;
                    
                case 'P' : 
                    gameObjects.getObject("movingPlatform").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(20, 20, 220), "up", true);
                    break;
                
                case 'x' :
                    gameObjects.getObject("crate").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    break;

                case '|' :
                    gameObjects.getObject("pillar").add(xPos, yPos - levelInfo.unitHeight * 3, levelInfo.unitWidth, levelInfo.unitHeight * 4, 122);
                    break;

                case '/' :
                    gameObjects.getObject("pillar").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, 122, true);
                    break;

                case 'X' :
                    gameObjects.getObject("crate").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, undefined, true);
                    break;

                case 'm' :
                    if(levelInfo.theme !== "winter")
                    {
                        gameObjects.getObject("movingPlatform").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(200, 200, 20), "up");
                        gameObjects.getObject("movingPlatform").getLast().xSpeed = 1.5;
                    }else{
                        var platform = gameObjects.getObject("movingPlatform").add(xPos, yPos, levelInfo.unitWidth * 3 - levelInfo.unitWidth * 0.6, levelInfo.unitHeight, color(200, 200, 20), "up");
                        platform.xSpeed = 1.6;
                        platform.type = "blocks";
                    }
                    break;

                case 'M' :
                    gameObjects.getObject("movingPlatform").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(200, 200, 20), "up");
                    gameObjects.getObject("movingPlatform").getLast().ySpeed = 1.5;
                    break;

                case 'c' : 
                    gameObjects.getObject("coin").add(xPos + levelInfo.unitWidth / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth / 2);
                    break;
                    
                case 'h' :
                    gameObjects.getObject("hpCoin").add(xPos + levelInfo.unitWidth / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth / 2, 0, 3);
                    break;

                case 'o' :
                    gameObjects.getObject("circle").add(xPos + levelInfo.unitHeight / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth);
                    gameObjects.getObject("circle").getLast().color = color(175, 175, 175);
                    break;

                case 'O' :
                    gameObjects.getObject("ring").add(xPos + levelInfo.unitWidth, yPos + levelInfo.unitHeight, levelInfo.unitWidth * 2, color(175, 175, 175));
                    break;

                case '0' :
                   
                    break;
                    
                case 'F' : 
                    var fallingBlock = gameObjects.getObject("fallingBlock").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);

                    if(levelInfo.theme === "winter")
                    {
                        fallingBlock.color = fallingBlock.originalColor = color(0, 0, 0, 90);
                    }
                    break;

                case 'u' : 
                    gameObjects.getObject("backBlock").add(xPos, yPos, levelInfo.unitWidth * 4, levelInfo.unitHeight * 4);
                    break;

                case '<' : case '>' : case '^' : case 'v' :
                    gameObjects.getObject("oneWay").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, color(120, 96, 81), ({
                        '<' : "left",
                        '>' : "right",
                        '^' : "up",
                        'v' : "down"
                    }[level.plan[row][col]]));
                    break;

                case 'l' : case 'r' : case 'L' : case 'R' :
                    var clr = (level.theme !== "winter") ? color(0, 0, 0, 150) : color(33, 178, 227, 200);
                    gameObjects.getObject("slope").add(xPos, yPos, levelInfo.unitWidth * 2, levelInfo.unitHeight, clr);
                    gameObjects.getObject("slope").getLast().direction = ({
                        'l' : "leftup",
                        'r' : "rightup",
                        'L' : "leftdown",
                        'R' : "rightdown",
                    }[level.plan[row][col]]);

                    if(level.theme === "winter")
                    {
                        gameObjects.getObject("slope").getLast().slippy = true;
                    }
                    break;
                 
                case '@' :
                    var aboveSymbol = this.getSymbol(col, row - 1, level.plan);
                    gameObjects.getObject("npc").add(xPos, yPos - levelInfo.unitHeight, levelInfo.unitWidth, levelInfo.unitHeight * 2);
                    if(level.npcs !== undefined && level.npcs[aboveSymbol] !== undefined)
                    {
                        var npc = gameObjects.getObject("npc").getLast();
                        if(npcData[level.npcs[aboveSymbol].name] !== undefined)
                        {
                            npc.name = (level.npcs[aboveSymbol].name || "npc");

                                      /*[Primary, Secondary, FallBack]*/
                            npc.img = (npcData[level.npcs[aboveSymbol].name].img || level.npcs[aboveSymbol].img || npc.name);
                            npc.message = (level.npcs[aboveSymbol].input || npcData[level.npcs[aboveSymbol].name].input || npc.message);
                            npc.messagePattern = (npcData[level.npcs[aboveSymbol].name].pattern || level.npcs[aboveSymbol].pattern || npc.messagePattern);
                        }else{
                            npc.name = level.npcs[aboveSymbol].name || "npc";
                            npc.img = level.npcs[aboveSymbol].img;
                            npc.message = level.npcs[aboveSymbol].input || npc.message;
                            npc.messagePattern = level.npcs[aboveSymbol].pattern || npc.messagePattern;
                        }   
                    }
                    break;
                
                case 'B' :
                    var aboveSymbol = this.getSymbol(col, row - 1, level.plan);
                    if(level.bosses !== undefined && level.bosses[aboveSymbol] !== undefined)
                    {
                        switch(level.bosses[aboveSymbol].name)
                        {
                            case "ninjaBoss" :
                                gameObjects.getObject("ninjaBoss").add(xPos, yPos - levelInfo.unitHeight, 11 * 2.7, floor(28 * 2.7));
                                screenUtils.infoBar.bossArrayName = "ninjaBoss";
                                break;

                            case "iceDragon" :
                                gameObjects.getObject("iceDragon").add(xPos, yPos, 60, 60);
                                screenUtils.infoBar.bossArrayName = "iceDragon";
                                break;
                        }
                    }
                    break;

                case 'H' :
                    var aboveSymbol = this.getSymbol(col, row - 1, level.plan);
                    if(level.hearts !== undefined && level.hearts[aboveSymbol] !== undefined)
                    {
                        gameObjects.getObject("heart").add(xPos, yPos, levelInfo.unitWidth, level.hearts[aboveSymbol].amt);
                    }
                    break;

                case 'S' :
                    var message = "";
                    var textColor = 0;
                    var colorValue;
                    var fontName;
                    var symbol = this.getSymbol(col, row - 1, level.plan);
                    var condition = (level.signs !== undefined && level.signs[symbol] !== undefined);

                    if(condition)
                    {
                        message = level.signs[symbol].message;
                        textColor = level.signs[symbol].textColor;
                        fontName = level.signs[symbol].font;

                        colorValue = level.signs[symbol].color;
                        var colorPack = level.signs[symbol].colorPack;
                        if(colorPack !== undefined)
                        {
                            colorValue = color(colorPack.red || 255, colorPack.green || 255, colorPack.blue || 255, colorPack.alpha || 255);
                        }
                    }

                    gameObjects.getObject("sign").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight, colorValue, message, textColor, fontName);

                    if(condition)
                    {
                        var sign = gameObjects.getObject("sign").getLast();
                        sign.adjustX = level.signs[symbol].adjustX;
                        sign.adjustY = level.signs[symbol].adjustY || -40;
                        sign.adjustW = level.signs[symbol].adjustW || 100;
                        sign.adjustH = level.signs[symbol].adjustH || 35;
                        sign.textSize = level.signs[symbol].textSize;

                        var textColorPack = level.signs[symbol].textColorPack;
                        if(textColorPack !== undefined)
                        {
                            sign.textColor = color(textColorPack.red || 255, textColorPack.green || 255, textColorPack.blue || 255, textColorPack.alpha || 255);
                        }

                        sign.load();
                    }
                    break; 
                    
                case 'p' :
                    levels.setPlayer(xPos, yPos, color(200, 10, 30));
                    break;
                    
                case 'D' :
                    var aboveSymbol = this.getSymbol(col, row - 1, level.plan);
                    var doorColor = ((level.doors[aboveSymbol].level !== plan.level) ? color(11 + 40, 68 + 40, 153 + 40) : undefined);

                    var arrayName = !level.doors[aboveSymbol].magic ? "door" : "magicDoor";
                    gameObjects.getObject(arrayName).add(xPos, yPos - levelInfo.unitHeight, levelInfo.unitWidth, levelInfo.unitHeight * 2, doorColor);
                    var door = gameObjects.getObject(arrayName).getLast();
                    door.goto = level.doors[aboveSymbol];
                    door.symbol = aboveSymbol;
                    door.magic = level.doors[aboveSymbol].magic;

                    //Reminder
                    if(level.doors[aboveSymbol].symbol === undefined)
                    {
                        println("Error : missing goto symbol in door '" + aboveSymbol + "'"); 
                    }
                    break;
                    
                case 'f' :
                    gameObjects.getObject("checkPoint").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    var checkPoint = gameObjects.getObject("checkPoint").getLast();
                    if(checkPoint.goto === undefined)
                    {
                        checkPoint.goto = {};
                    }
                    checkPoint.goto.level = levelInfo.level;
                    for(var i = 0; i < travelObjects.length; i++)
                    {
                        this.setObjectAtCheckPoint(gameObjects.getObject(travelObjects[i].arrayName).input(travelObjects[i].index), xPos, yPos);
                    }
                    break;
                    
                case 'K' :
                    var entered = this.getSymbol(col, row - 1, level.plan);
                    var scope = level.keys[entered];

                    if(!scope.collected && levels[scope.level].doors[scope.symbol] !== undefined && levels[scope.level].doors[scope.symbol].locked)
                    {
                        gameObjects.getObject("key").add(xPos + levelInfo.unitWidth * 0.2, yPos, levelInfo.unitWidth / 2, levelInfo.unitHeight);
                        gameObjects.getObject("key").getLast().goto = scope;
                        gameObjects.getObject("key").getLast().goto.entered = entered;
                    }
                    break;

                case '$' :
                        try{
                            var entered = this.getSymbol(col, row - 1, level.plan);
                            var scope = level.special[entered];
                            scope.arguments = scope.arguments || {}; 
                            switch(scope.shape)
                            {
                                case "circle" :
                                    gameObjects.getObject(scope.arrayName).add(xPos, yPos, scope.diameter || levelInfo.unitWidth, scope.arguments['4']);
                                    break;

                                case "rect" : default :
                                    gameObjects.getObject(scope.arrayName).add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                                    break;
                            }
                        }
                        catch(e)
                        {
                            console.log(e);
                        }
                    break;

                case '[' :
                    gameObjects.getObject("chest").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);
                    if(level.chests !== undefined)
                    {
                        var scope = level.chests[this.getSymbol(col, row - 1, level.plan)];
                        gameObjects.getObject("chest").getLast().drops = scope.drops;
                        gameObjects.getObject("chest").getLast().goto = scope;
                    }
                    break;

                case ']' :
                    gameObjects.getObject("itemChest").add(xPos, yPos, levelInfo.unitWidth, levelInfo.unitHeight);

                    if(level.itemChests !== undefined)
                    {
                        var scope = level.itemChests[this.getSymbol(col, row - 1, level.plan)];
                        gameObjects.getObject("itemChest").getLast().goto = scope;
                    }
                    break;

                case 't' :
                    gameObjects.getObject("spaceBreaker").add(xPos + levelInfo.unitWidth / 2, yPos + levelInfo.unitHeight / 2, levelInfo.unitWidth / 2); 
                    break;
            }
            done = (row >= level.plan.length - 1);
        }
    }
    return done;
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**************************************************************Game-Loader*****************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var f_getArrayNamesToSave = function(level, theme)
{
    var lvl = level || levelInfo.level;
    var thm = theme || levelInfo.theme;

    var preSelect = (levels[lvl].arraysToSave || 
    (configs[thm] || {level : {}}).level.arraysToSave) || [];

    if(typeof levels[lvl].addArraysToSave !== "undefined")
    {
        preSelect = preSelect.concat(levels[lvl].addArraysToSave);
    }

    if(typeof levels[lvl].removeArraysToSave !== "undefined")
    {
        var rmv = levels[lvl].removeArraysToSave;

        for(var i = 0; i < rmv.length; i++)
        {
            preSelect = preSelect.filter(arrayName => arrayName !== rmv[i]);
        }
    }

    return preSelect;
};

game.startFade = function(top)
{
    screenUtils.fade.start(20, (top) ? 20 : 0);
};
loader.setProps = function(level)
{
    this.loops = 0;
    this.levelStepRows = this.levelStepRows || 1;
    //+ The amount of steps - 1, that we can not calculate
    this.estLoops = (levels[level].plan.length / this.levelStepRows) + 4;
    this.point = 0;
    this.step = 0;
    this.returned = {};
};
loader.startLoadLevel = function(level, actType, objectIndex)
{
    levelInfo._lastLevel = levelInfo.level; 
    this.level = level;
    game.cutScening = false;
    game.startFade(this.firstLoad);
    screenUtils.needsScreenShot = true;
    game.tempState = game.gameState;
    game.gameState = "load";
    loader.setProps(level);

    levelScripts.openLoad();

    this.objectIndex = objectIndex;
    this.actType = actType;

    if(actType === "door")
    {
        configAreaSaver.saveToLevelCache(levelInfo._lastLevel, f_getArrayNamesToSave(levelInfo._lastLevel, levelInfo.theme), levelInfo.theme);
    }
};
loader.loadLevel = function(level, step, levelStep)
{
    var toReturn = {};
    this.loops++;
    switch(step)
    {
        case 0 :
            var player = gameObjects.getObject("player").getLast();
            if(player.dead && saver.current.loaded)
            {
                saver.current.loaded = false;
            }
            game.loadSave(saver.current.saveDataName);
            levelInfo.lastLevel = levelInfo.level;
            levelInfo.level = level;
            gameObjects.removeObjects();
            levelScripts.restart();
            levelScripts.beforeLoad();
            lighting.end();
            delete screenUtils.infoBar.bossArrayName;
            break;
        
        case 1 :
            if(!levels.build({
                level : level,
                minRow : this.levelStepRows * levelStep,
                maxRow : this.levelStepRows * (levelStep + 1),
                first : (levelStep === 0),
            }))
            {
                toReturn = {
                   setStep : 1, 
                   levelStep : levelStep + 1,
                }; 
            }
            break;
        
        case 2 :
            //Grids of the game (Important)
            cameraGrid.setup(levelInfo.xPos, levelInfo.yPos, levelInfo.width / levelInfo.cellWidth, levelInfo.height / levelInfo.cellHeight, levelInfo.cellWidth, levelInfo.cellHeight);
            gameObjects.addObjectsToCameraGrid();
            if((levelInfo.nightMode || levelInfo.daylightCycle) && !this.firstLoad)
            {
                lighting.create();
            }
            gameObjects.setAfter();
            break;
            
        case 3 :
            backgrounds.load();
            if(levelInfo.daylightCycle)
            {
                if(levelInfo.nightMode)
                {
                    daylightCycle.setState("night");
                }else{
                    daylightCycle.setState("day");
                }
            }
            break;
            
        case 4 :
            var player = gameObjects.getObject("player").input(0);
            cam.attach(function()
            {
                return player;
            }, true);

            game.loadSaveAfterLoad();
            player.safeRevive(); //Revive the player when dead
            levelScripts.afterLoad();

            configAreaSaver.setFromLevelCache(loader.level, f_getArrayNamesToSave(loader.level, levelInfo.theme), levelInfo.theme);

            toReturn = {
                loaded : true,
            };
            break;
    }
    return toReturn;
};
loader.update = function()
{
    if(this.firstLoad)
    {
        backgrounds.primeLoad();
        buttons.load();
        sliders.load();
        lighting.create();
        screenUtils.load();
        levels.clearCache();
        debugTool.setup();

        this.loadCount = 0;
    }
    
    if(screenUtils.fade.full() || (!this.tempLoaded && this.step >= 1))
    {
        frameRate(game.loadFps || game.fps);

        this.returned = this.loadLevel(this.level, this.step, (this.returned.levelStep || 0));
        this.tempLoaded = this.returned.loaded;
        this.step++;
        if(this.returned.setStep !== undefined)
        {
            this.step = this.returned.setStep;  
        }
        screenUtils.fade.stopped = !this.tempLoaded;
        if(!this.firstLoad && this.tempLoaded && game.tempState !== "menu")
        {
            var player = gameObjects.getObject("player").getLast();
            game.play(game.tempState !== "play" && player.goto.travelType !== "door");
            screenUtils.messages.length = 0;

            if(!scaled)
            {
                screenUtils.screenShot = get(0, 0, width, height);
            }else{
                screenUtils.screenShot = get(0, 0, screen.width, screen.height);
            }
        }

        this.firstLoad = false;
        debugTool.active = false;
    }

    /*A little hack to stop the background from snapping*/
    if(backgrounds.backgrounds[backgrounds.background].moves)
    {
        var object = gameObjects.getObject("player").getLast();

        if(this.loadCount >= (firstGameState === "play" ? 0 : 2) && object && object.xPos)
        {
            cam.focusXPos = object.boundingBox.xPos + (object.boundingBox.width / 2);
            cam.focusYPos = object.boundingBox.yPos + (object.boundingBox.height / 2);

            cam.focusXPos = constrain(cam.focusXPos, levelInfo.xPos + cam.halfWidth * cam.cScale, 
                                    levelInfo.xPos + levelInfo.width - cam.halfWidth * cam.cScale);
            cam.focusYPos = constrain(cam.focusYPos, levelInfo.yPos + cam.halfHeight * cam.cScale, 
                                    levelInfo.yPos + levelInfo.height - cam.halfHeight * cam.cScale);
        }
    }

    if(!screenUtils.fade.fading)
    {
        this.tempLoaded = false;
        game.gameState = (game.tempState !== "load") ? game.tempState : "play";

        if(game.gameState === "play" && firstGameState !== "play")
        {
            game.tryShowNewArea();
        }

        frameRate(game.fps);

        this.loadCount++;
    }

    if(screenUtils.screenShot !== undefined && !screenUtils.fade.full())
    {
        image(screenUtils.screenShot, 0, 0, width, height);
    }
};
loader.startLoadLevel(levelInfo.level);

game.tryShowNewArea = function()
{
    if(typeof configs[levelInfo.theme] !== "undefined" && !configs[levelInfo.theme].shownName &&
    levelInfo.theme === levels[levelInfo.level].theme && configs[levelInfo.theme].name !== undefined && !configs[levelInfo.theme].hidden)
    {
        screenUtils.createMessage(configs[levelInfo.theme].name, 200, 180, 150, 30, {
            textSize : 13,
            textColor : color(250, 250, 250, 300),
        });

        screenUtils.createMessage(configs[levelInfo.theme].area, 200, 220, 60, 15, {
            textSize : 9,
            textColor : color(250, 250, 250, 300),
        });

        configs[levelInfo.theme].shownName = true;
    }
};
game.loadSave = function(saveDataName)
{
    if(saver.current.loaded)
    {
        return;
    }

    if(!saver.setCurrent(saveDataName))
    {
        saver.current.loaded = true;
        return;
    }

    this.data = saver.readSaveData(saveDataName);

    levelInfo.level = this.data.level || levelInfo.level;
    loader.level = levelInfo.level;
    
    this.configAreas = this.data.configAreas || this.configAreas;
    levels.clearCache();

    var discoveredAreas = this.data.discoveredAreas || {};

    for(var i in discoveredAreas)
    {
        (configs[i] || {}).shownName = discoveredAreas[i].shownName;
    }

    var player = gameObjects.getObject("player").getLast();
    if(player.dead)
    {
        gameObjects.getObject("chest").forEach(function(element, index, array)
        {
            if(element.opened)
            {
                element.goto.isOpen = false;
                element.opened = false;
            }
        });
    }

    //Load in doors
    this.usedDoors = this.data.doors;
    for(var i in this.data.doors)
    {
        var door = this.data.doors[i];
        try{
            levels[door.level].doors[door.symbol].locked = door.locked;
        }
        catch(e) {}
    }

    if(this.data.openedChests !== undefined)
    {
        for(var i in this.data.openedChests)
        {
            if(levels[i].chests !== undefined)
            {
                for(var j in this.data.openedChests[i])
                {
                    if(levels[i].chests[j].save) 
                    {
                        if(this.data.openedChests[i][j].isOpen !== undefined)
                        {
                            levels[i].chests[j].isOpen = this.data.openedChests[i][j].isOpen;
                        }
                        if(this.data.openedChests[i][j].hidden !== undefined)
                        {
                            levels[i].chests[j].hidden = this.data.openedChests[i][j].hidden;
                        }

                        if(this.data.openedChests[i][j].openDrops !== undefined)
                        {
                            for(var l in levels[i].chests[j].drops)
                            {
                                if(levels[i].chests[j].drops[l].col1)
                                {
                                    try{
                                        delete levels[i].chests[j].drops[l].col1;
                                    }
                                    catch(e) {}
                                } 
                            }
                            for(var k in this.data.openedChests[i][j].openDrops)
                            {
                                if(this.data.openedChests[i][j].openDrops[k])
                                {
                                    try{
                                        levels[i].chests[j].drops[k].col1 = true;
                                    }
                                    catch(e) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if(this.data.itemChestGotos !== undefined)
    {
        var itemChestGotos = this.data.itemChestGotos;

        for(var i in itemChestGotos)
        {
            try{
                if(levels[i] !== undefined && levels[i].itemChests !== undefined)
                {
                    for(var j in itemChestGotos[i])
                    {
                        if(levels[i].itemChests[j] === undefined)
                        {
                            delete itemChestGotos[i][j];
                            continue;
                        } 

                        levels[i].itemChests[j] = itemChestGotos[i][j];
                    }
                }
            }
            catch(e) 
            {
                console.log(e);
            }
        }
    }

    if(this.data.custom !== undefined)
    {
        for(var i in this.data.custom)
        {
            if(levels[i] !== undefined)
            {
                levels[i].save = this.data.custom[i];
            }
        }
    }

    //Load in the key info
    if(this.data.player !== undefined && this.data.player.goto.keysHolding !== undefined)
    {
        var keys = this.data.player.goto.keysHolding;
        for(var i in keys)
        {
            if(keys[i] !== undefined && levels[keys[i].level].keys !== undefined)
            {
                if(levels[keys[i].level].keys[keys[i].entered] !== undefined)
                {
                    levels[keys[i].level].keys[keys[i].entered] = keys[i];
                }
            }
        }
    }

    if(this.configAreas !== undefined)
    {
        for(var area in this.configAreas)
        {
            for(var level in this.configAreas[area].levels)
            {
                levels[level].cache.objectsExists = this.configAreas[area].levels[level].objectsExists;
            }
        }
    }
};
game.loadSaveAfterLoad = function()
{
    if(this.data === undefined || saver.current.loaded)
    {
        return;
    }

    //Find Player
    var player = gameObjects.getObject("player").getLast();
    player.alias = saver.current.name;
    player.username = removeEndIfNum(saver.current.name);

    /*Player save-loading*/
    if(this.data.player !== undefined)
    {
        player.coins = this.data.player.coins || player.coins;
        player.score = this.data.player.score || player.score;
        player.defense = this.data.player.defense || player.defense;
        player.goto = this.data.player.goto || player.goto;
        player.hp = this.data.player.hp || player.hp;
        player.maxHp = this.data.player.maxHp || player.maxHp;
        player.name = this.data.name || player.name;
        player.inventory = this.data.player.inventory || player.inventory;
        player.crystals = this.data.player.crystals || player.crystals;

        if(this.data.player.autoRun !== undefined && !this._ft_autoRun)
        {
            player.autoRun = this.data.player.autoRun;
        }
        this._ft_autoRun = true;

        player.discoveredPowers = this.data.player.discoveredPowers || player.discoveredPowers;
        player.discoveredPowersHandler.init();
        player.discoveredPowersHandler.setChangePowers();

        //Who wants to die and and keep on having to switch power-ups? So just keep the current power-up when you die.
        if(!this.everAfterLoaded)
        {
            player.discoveredPowersHandler.currentPower = this.data.player.currentPower || player.discoveredPowersHandler.currentPower;
        }

        //Make sure the player is at the right checkPoint!
        var checkPoints = gameObjects.getObject("checkPoint");
        if((player.goto.checkPointLevel === levelInfo.level || 
           player.goto.checkPointLevel === loader.level) &&
           player.goto.checkPointIndex !== undefined && 
           player.goto.checkPointIndex < checkPoints.length)
        {
            var checkPoint = checkPoints[player.goto.checkPointIndex];
            physics.teleport(player, checkPoint.xPos, checkPoint.yPos - abs(player.height - levelInfo.unitHeight));
            checkPoint.setObjectProps(player);
        }

        if(this.data.player.powers !== undefined)
        {
            player.setPowers(this.data.player.powers);
        }
    }

    /*Sound save-loading*/
    if(typeof this.data.soundPercent === "number")
    {
        sounds.setMainVolume(this.data.soundPercent / 100);
        this.percent = this.data.soundPercent / 100;
    }
    if(typeof this.data.soundOff === "boolean")
    {
        sounds.settings.off = this.data.soundOff;
    }

    saver.current.loaded = true;
    this.everAfterLoaded = true;
};
game.save = function(checkPoint)
{
    var player = gameObjects.getObject("player").getLast();

    this.customSaveData = {};

    var openedChests = {};
    for(var i in levels)
    {
        this.customSaveData[i] = levels[i].save || {};

        if(levels[i].chests !== undefined)
        {
            openedChests[i] = {};
            for(var j in levels[i].chests)
            {
                openedChests[i][j] = {};
                if(levels[i].chests[j].save)
                {
                    if(levels[i].chests[j].isOpen !== undefined)
                    {
                        openedChests[i][j].isOpen = levels[i].chests[j].isOpen;
                    }
                    if(levels[i].chests[j].hidden !== undefined)
                    {
                        openedChests[i][j].hidden = levels[i].chests[j].hidden;
                    }

                    if(openedChests[i][j].openDrops === undefined)
                    {
                        openedChests[i][j].openDrops = {};
                    }

                    for(var k in levels[i].chests[j].drops)
                    {
                        if(levels[i].chests[j].drops[k].col1)
                        {
                            openedChests[i][j].openDrops[k] = true;
                        }
                    }
                }
            }
        }
    }  

    configAreaSaver.saveToLevelCache(levelInfo.level, f_getArrayNamesToSave(levelInfo.level, levelInfo.theme), levelInfo.theme);

    if(this.configAreas === undefined)
    {
        //You've never been in any areas before? Add it!

        this.configAreas = {};

        for(var i in configs)
        {
            this.configAreas[i] = {
                levels : {},
            };
        }

        for(var i in levels)
        {
            if(typeof levels[i].theme === "string" && 
               typeof configs[levels[i].theme] !== "undefined")
            {
                this.configAreas[levels[i].theme].levels[i] = {};
            }
        }
    }else{
        //Cover new areas added to the game

        for(var i in configs)
        {
            if(typeof this.configAreas[i] === "undefined" || typeof this.configAreas[i].levels === "undefined")
            {
                this.configAreas[i] = {
                    levels : {},
                };

                for(var j in levels)
                {
                    if(typeof levels[j].theme !== "undefined" && 
                        levels[j].theme.toString() === i.toString())
                    {
                        this.configAreas[i].levels[j] = {};
                    }
                }

                continue;
            }

            for(var j in levels)
            {
                if(typeof this.configAreas[i].levels[j] === "undefined" && 
                    typeof levels[j].theme !== "undefined" && 
                    levels[j].theme.toString() === i.toString())
                {
                    this.configAreas[i].levels[j] = {};
                }
            }
        }
    }

    var discoveredAreas = {};

    for(var i in configs)
    {
        discoveredAreas[i] = {
            shownName : configs[i].shownName,
        };
    }

    for(var area in this.configAreas)
    {
        for(var level in this.configAreas[area].levels)
        {
            this.configAreas[area].levels[level].objectsExists = (
                levels[level].cache.objectsExists ||
                this.configAreas[area].levels[level].objectsExists);
        }
    }

    var itemChestGotos = {};

    for(var i in levels)
    {
        try{
            if(levels[i].itemChests !== undefined)
            {
                itemChestGotos[i] = levels[i].itemChests;
            }
        }
        catch(e) 
        {
            console.log(e);
        }
    }

    levelScripts.onSave();

    for(var i in player.crystals)
    {
        delete player.crystals[i].object;
    }

    var success = saver.overWriteSaveData(saver.current.saveDataName, {
        name : saver.current.name,
        level : player.goto.checkPointLevel || levelInfo.level,
        dead : player.dead,
        soundPercent : sounds.getMainVolume() * 100,
        soundOff : sounds.settings.off,
        player : {
            autoRun : player.autoRun,
            coins : player.coins,
            score : player.score,
            defense : player.defense,
            goto : player.goto,
            hp : player.hp,
            maxHp : player.maxHp,
            inventory : player.inventory,
            crystals : player.crystals,
            powers : player.getPowers(),
            discoveredPowers : player.discoveredPowers,
            currentPower : player.discoveredPowersHandler.currentPower,
        },
        doors : this.usedDoors || {},
        openedChests : openedChests,
        custom : this.customSaveData || {},
        configAreas : this.configAreas,
        discoveredAreas : discoveredAreas,
        itemChestGotos : itemChestGotos,
    });

    if(success)
    {
        console.log("Planet Search 2: Game successfully saved!");
    }

    //Set checkpoint...
    if(checkPoint !== undefined)
    {
        player.goto.checkPointLevel = (checkPoint.goto !== undefined) ? checkPoint.goto.level || levelInfo.level : levelInfo.level;
        player.goto.checkPointIndex = checkPoint.index;
    }
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**************************************************************Game-Scenes*****************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

game.load = function()
{
    loader.update();
};
game.switchGameState = function(condition, state, needsScreenShot)
{
    if(condition)
    {
        this.startFade();
        this.switchedState = true;
        this.switchState = state;

        if(needsScreenShot)
        {
            screenUtils.needsScreenShot = true;
        }

        if(this[this.gameState].done)
        {
            this[this.gameState].done = false;
        }

        if(!this[this.switchState].done)
        {
            this[this.switchState].done = true; 
            this.lastState = this.gameState;
            (this[this.switchState].onEnter || function(){})();
        }
    }
};
game.restart = function()
{
    if(MODE === "ka")
    {
        Program.restart();
    }else{
        window.location.reload();
    }
};
game.how = function()
{
    textFont(fonts.menu);

    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(11, 68, 153, 80);
    rect(100, 100, 200, 210, 10);
    fill(200, 200, 200, 150);
    textAlign(NORMAL, NORMAL);
    text("  Use the arrow keys to move or wasd." +
    "Press down to go through doors or to activate checkpoints." +
    " Press 'p' to pause, 'r' to restart, 't' to print what" +
    " signs say if you can't read it and 'm' to go directly to the menu." +
    "\n\n   This is Planet Search 2 If you haven't played the first " +
    "one please play it right now.\n\n        Created by Prolight", 110, 115, 200, 225);
    fill(0, 0, 0, 100);
    text(game.version, 334, 394); 
    buttons.back2.draw();
    this.switchGameState(buttons.back2.clicked(), "menu");
};
game.settings = function()
{
    textFont(fonts.menu);

    textSize(40);
    fill(31, 173, 88);
    textAlign(CENTER, CENTER);
    text("Debug", 200, 110);
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(0, 0, 0, 100);
    textSize(12);
    text(game.version, 364, 390); 
    buttons.back2.draw();
    this.switchGameState(buttons.back2.clicked(), "extras");
    buttons.debugMode.draw();
    buttons.debugMode.message = "DebugMode " + game.debugMode;
    buttons.debugPhysics.draw();
    buttons.debugPhysics.message = "DebugPhysics " + (game.showDebugPhysics || false);
    buttons.boundingBoxes.draw();
    buttons.boundingBoxes.message = "BoundingBoxes " + (game.boundingBoxes || false);
    buttons.info.draw();
    
    if(buttons.info.clicked())
    {
        noStroke();
        rect(100, 340, 200, 40, 10);
        textAlign(CENTER, NORMAL);
        fill(200, 200, 200, 200);
        textSize(8);
        text("In debug mode you can press right click to show the Cartesian System (Grid).\nDelag buttons: F9/F10/F11", 100, 350, 200, 40);
    }
};
game.settings.mousePressed = function()
{
    if(buttons.debugMode.clicked())
    {
        game.debugMode = !game.debugMode;
    }
    if(buttons.debugPhysics.clicked())
    {
        game.showDebugPhysics = !game.showDebugPhysics;
    }
    if(buttons.boundingBoxes.clicked())
    {
        game.boundingBoxes = !game.boundingBoxes;
    }
};
game.extras = function()
{
    textFont(fonts.menu);

    textSize(40);
    fill(31, 173, 88);
    textAlign(CENTER, CENTER);
    text("Extras", 200, 110);
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(0, 0, 0, 100);
    textSize(12);
    text(game.version, 364, 390); 
    buttons.back2.draw();
    this.switchGameState(buttons.back2.clicked(), "menu");
    buttons.settings.draw();
    this.switchGameState(buttons.settings.clicked(), "settings");
    buttons.sound.draw();
    this.switchGameState(buttons.sound.clicked(), "sound");
    buttons.other.draw();
    this.switchGameState(buttons.other.clicked(), "other");
};
game.other = function()
{
    textSize(40);
    fill(31, 173, 88);
    textAlign(CENTER, CENTER);
    text("Fps", 200, 110);
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(0, 0, 0, 100);
    textSize(12);
    text(game.version, 364, 390); 

    buttons.back2.draw();
    buttons.fps.draw();
    buttons.fpsType.draw();
};
game.other.mousePressed = function()
{
    if(buttons.fps.clicked())
    { 
        game.fps = {"60": 30, "30": 60}[game.fps.toString()];

        if(game.fps === undefined)
        {
            game.fps = 60;
        }

        game.applyFps();
        buttons.fps.message = "Fps " + game.fps;
    }
    else if(buttons.fpsType.clicked())
    { 
        game.fpsType = (game.fpsType === "auto") ? "manual" : "auto";
        buttons.fpsType.message = ("Fps Type " + game.fpsType);
    }


    game.switchGameState(buttons.back2.clicked(), "extras");
};
game.sound = function()
{
    textFont(fonts.menu);

    textSize(40);
    fill(31, 173, 88);
    textAlign(CENTER, CENTER);
    text("Sound", 200, 110);
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(0, 0, 0, 100);
    textSize(12);
    text(game.version, 364, 390); 
    buttons.back2.draw();
    this.switchGameState(buttons.back2.clicked(), "extras");
    buttons.volumeOn.draw();
    buttons.volumeOn.message = "Volume " + (sounds.settings.off ? "off" : "on");
    sliders.volume.draw();

    this.percent = sliders.volume.getPercent();
    sliders.volume.message = Math.floor(this.percent) + "%";

    var mouse = {
        xPos : mouseX,
        yPos : mouseY,
    };

    if(mouseIsPressed && sliders.volume.isInside(mouse))
    {
        game.wasInSound = true;
        sliders.volume.onClick(mouse);
    }

    sounds.setMainVolume(this.percent / 100);
};
game.sound.onEnter = function()
{
    sliders.volume.set(sounds.getMainVolume() * 100);
};
game.sound.mousePressed = function()
{
    if(buttons.volumeOn.clicked())
    {
        sounds.settings.off = !sounds.settings.off;
    }
};
game.sound.mouseReleased = function()
{
    if(game.wasInSound)
    {
        sounds.playSound("coinSound.mp3");
        this.wasInSound = false;
    }
};

game.start = function()
{
    this.drawTitle();

    textFont(fonts.menu);
    fill(0, 0, 0, 100);
    textAlign(CENTER, CENTER);
    textSize(17);
    text("Press any key to play!", 200, 230);

    //If the set background is not a background 
    //we can see the start screen with, change it
    if(backgrounds.background !== "spaceFromEarth")
    {
        backgrounds.setBackground("spaceFromEarth");
    }

    if(keyIsPressed)
    {
        this.switchGameState(true, "story");
    }

    textSize(12);
    fill(0, 0, 0, 100);
    text(game.version, 364, 390);
};
game.selectSaveFile = function()
{
    textFont(fonts.menu);

    fill(0, 0, 0, 60);
    rect(0, 80, width, height - 70 * 2);

    if(saveDataHandler.saveFiles.length <= 0 || saveDataHandler.saveFiles.length >= saverInfo.maxSaves)
    {
        rect(110, 115, 180, 30, 5);
    }else{
        rect(80, 115, 240, 30, 5);
    }

    fill(31, 173, 88);
    textSize(17);
    textAlign(CENTER, NORMAL);

    if(saveDataHandler.saveFiles.length >= saver.maxSaves)
    {
        game.selectSaveFile.newSave = false;
    }

    if(game.selectSaveFile.rename)
    {
        fill(0, 0, 0, 100);
        rect(110, 200, 180, 100, 7);
        fill(31, 173, 88);
        text("Renaming Save", 200, 135);  
        textBoxes.naming.draw();
        buttons.back4.draw();
        buttons.rename.draw();
        textSize(13);
        fill(31, 173, 88);
        text("Change your name", 200, 215);

        buttons.rename.color = ((textBoxes.naming.message !== "") ? BTN_COLOR : color(153, 55, 11, 200));
    }
    else if(game.selectSaveFile.newSave)
    {
        fill(0, 0, 0, 100);
        rect(110, 200, 180, 100, 7);
        fill(31, 173, 88);
        text("New Save", 200, 135);  
        textBoxes.naming.draw();
        buttons.back4.draw();
        buttons.create.draw();
        textSize(13);
        fill(31, 173, 88);
        text("Type your name!", 200, 215);
    }
    else if(!saveDataHandler.erasePrompt)
    {
        if(saveDataHandler.saveFiles.length <= 0)
        {
            text("Create a save file", 200, 135);
        }
        else if(saveDataHandler.saveFiles.length >= saverInfo.maxSaves)
        {
            text("Select a save file", 200, 135);
        }else{
            text("Select or create a save file", 200, 135);
        }

        saveDataHandler.draw();
        saveDataHandler.update();

        buttons.back5.draw();
    }else{
        this.seSaveFile = saveDataHandler.getSelectedSaveFile();
        fill(0, 0, 0, 100);
        rect(110, 200, 180, 70, 7);
        fill(31, 173, 88);
        text("Erase", 200, 135);
        textSize(13);
        text("Erase save file " + this.seSaveFile.name + "?", 200, 220);
        buttons.erase.draw();
        buttons.back3.draw();
    }

    fill(0, 0, 0, 140);
    textSize(14);
    textAlign(NORMAL, NORMAL);
    text("Saves " + saveDataHandler.saveFiles.length + "/" + saver.maxSaves, 13, 115);

    textAlign(CENTER, CENTER);
    textSize(12);
    fill(0, 0, 0, 100);
    text(game.version, 364, 390);

    if(game.selectSaveFile.stopErase === undefined)
    {
        game.selectSaveFile.stopErase = 0;
    }

    game.selectSaveFile.stopErase--;
};
game.selectSaveFile.keyPressed = function()
{
    if(screenUtils.fade.fading)
    {
        return;
    }

    if(this.rename)
    {
        if(ENTER_KEY)
        {
            this.renameSaveFile();
            textBoxes.naming.input = [];
        }else{
            textBoxes.naming.selected = true; //Make sure we can type!
            textBoxes.naming.edit();
            keys = [];
        }
    }
    else if(game.selectSaveFile.newSave)
    {
        if(ENTER_KEY)
        {
            this.createSaveFile();
        }else{
            textBoxes.naming.selected = true; //Make sure we can type!
            textBoxes.naming.edit();
            keys = [];
        }
    }
    else if(ENTER_KEY || keys[32])
    {
        this.activateSaveFile();
        keys[keyCode] = false;
        keys[key.toString() || ""] = false;
    }
};
game.selectSaveFile.renameSaveFile = function()
{
    if(textBoxes.naming.message === "")
    {
        return;
    }

    saveDataHandler.renameSaveFile(textBoxes.naming.message);
    this.rename = false;
    textBoxes.naming.message = "";
};
game.selectSaveFile.afterNew = function()
{
    saver.setCurrent(game.selectSaveFile.saveName);
    game.gameState = "menu";
    loader.startLoadLevel(levelInfo.level);
};
game.selectSaveFile.createSaveFile = function()
{
    var message = (textBoxes.naming.message !== "") ? textBoxes.naming.message : "User";
        game.selectSaveFile.saveName = saveDataHandler.addNew(undefined, message);
        game.selectSaveFile.newSave = false;
        game.selectSaveFile.afterNew();
};
game.selectSaveFile.activateSaveFile = function(noSetFile)
{
    if(!noSetFile)
    {
        this.seSaveFile = saveDataHandler.getSelectedSaveFile();
    }
    if(this.seSaveFile)
    {
        saver.setCurrent(this.seSaveFile.saveFileName);
        game.gameState = "menu";
        //Make sure we load the right level!
        levelInfo.level = saver.saveData[this.seSaveFile.saveFileName].level || levelInfo.level;
        loader.startLoadLevel(levelInfo.level);
    }
};
game.selectSaveFile.mousePressed = function()
{
    /*Safety fix -we don't want to mess up the save files until they are loaded*/
    if(screenUtils.fade.fading)
    {
        return;
    }

    if(game.selectSaveFile.rename)
    {
        if(buttons.back4.clicked())
        {
            game.selectSaveFile.rename = false;
            textBoxes.naming.message = "";
        }
        else if(buttons.rename.clicked())
        {
            this.renameSaveFile();
        }
    }
    else if(game.selectSaveFile.newSave)
    {
        if(buttons.back4.clicked())
        {
            game.selectSaveFile.newSave = false;
            textBoxes.naming.message = "";
            textBoxes.naming.input = [];
        }
        else if(buttons.create.clicked())
        {
            this.createSaveFile();
        }
    }
    else if(saveDataHandler.buttons.copy.clicked() && this.stopErase <= 0 && !saveDataHandler.erasePrompt)
    {
        saveDataHandler.copySelectedSaveFile();
    }
    else if(buttons.back5.clicked())
    {
        game.switchGameState(true, "start");
    }
    else if(saveDataHandler.erasePrompt)
    {
        this.stopErase = 60;

        if(buttons.back3.clicked())
        {
            saveDataHandler.erasePrompt = false;
        }
        else if(buttons.erase.clicked())
        {
            if(this.seSaveFile)
            {
                saveDataHandler.erase(this.seSaveFile.saveFileName, this.seSaveFile);
            }
            saveDataHandler.erasePrompt = false;
        }
    }else{
        this.seSaveFile = saveDataHandler.getSelectedSaveFile();
        if(this.seSaveFile)
        {
            if(saveDataHandler.buttons.play.clicked())
            {
                this.activateSaveFile(true);
                return;
            }
            else if(saveDataHandler.buttons.erase.clicked())
            {
                saveDataHandler.erasePrompt = true;
            }
            else if(saveDataHandler.buttons.rename.clicked())
            {
                var self = this;
                if(textBoxes.naming.message === "")
                {
                    textBoxes.naming.message = (function() 
                    { 
                        return self.seSaveFile.name;
                    }());
                }
                textBoxes.naming.selected = false;
                this.rename = true;
            }
        }
        if(saveDataHandler.buttons.new.clicked())
        {
            game.selectSaveFile.newSave = true;
            textBoxes.naming.selected = false;
        }
    }
};
game.story = function()
{
    textFont(fonts.menu);

    fill(0, 0, 0, 150);
    rect(50, 0, width - 100, height);

    textAlign(CENTER, CENTER)

    this.story.timer++;
    if(this.story.timer > 20 && this.story.timer < 255)
    {
        fill(30, 170, 100, 255 - this.story.timer);
        text("Press any key to skip.", width * 0.5, 385);
        this.endMillis = millis();
    }
    if(this.endMillis !== undefined && millis() - this.endMillis > 400)
    {
        fill(30, 170, 100, 255 - ((millis() - this.endMillis - 400) * 255 / 2500));
        text("Press Enter to contnue.", width * 0.5, 385);
        if(millis() - this.endMillis > 2900)
        {
            this.endMillis = undefined;
        }
    }

    if(this.story.needsInit)
    {
        storyHandler.scroll = 0;
        storyHandler.scrollVel = 0;
        storyHandler.message = "";
        storyHandler.timer = 0;
        storyHandler.storyIndex = 0;
        storyHandler.done = false;
        this.story.needsInit = false;
    }

    storyHandler.show();
    textSize(12);
    pushMatrix();
    textAlign(CENTER, CENTER);
    translate(0, storyHandler.scroll);
    fill(storyHandler.color || color(31, 173, 88));
    text(storyHandler.message, (width * 0.5), HALF_HEIGHT);
    popMatrix();

    game.hideLoadView = true;

    if((keyIsPressed || storyHandler.done) && !ENTER_KEY && this.story.timer > 20)
    {   
        game.story.needsInit = true;
        this.story.timer = 0;
        this.switchGameState(true, "selectSaveFile");
    }
};
game.story.needsInit = true;
game.story.timer = 0;

game.drawTitle = function()
{
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    fill(41, 98, 213, 100);
    textFont(fonts.title);
    textAlign(CENTER, CENTER);
    textSize(43);
    text("Planet\nSearch 2", 200, 83);
    textSize(26);
    fill(0, 0, 0, 30);
    rect(150, 146, 100, 30, 5);
    fill(31, 173, 88);
    text("Amber", 200, 160);

    textFont("");
};
game.gameOver = function()
{
    textFont(fonts.menu);

    background(0, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("GameOver!", 200, 200);
    textSize(11);
    text("Press any key to continue...", 200, 300);

    screenUtils.infoBar.draw(true);
};
game.gameOver.keyPressed = function()
{
    game.restart();
};
game.pauseMenu = function()
{
    textFont(fonts.menu);

    image(screenUtils.screenShot, 0, 0, width, height);
    textSize(40);
    fill(31, 173, 88);
    textAlign(CENTER, CENTER);
    text("Paused", 200, 110);
    fill(0, 0, 0, 60);
    rect(75, 0, width - 75 * 2, height);
    cursor(ARROW);
    game.cursor = ARROW;
    
    buttons.back.draw();
    this.switchGameState((buttons.back.clicked() || keys[80]) && !ENTER_KEY, "play");
    
    buttons.restart.draw();
    if(buttons.restart.clicked())
    {
        this.gameState = "play";
        talkHandler.end(); //Make sure we're not talking to the npc anymore
        gameObjects.getObject("player").input(0).handleDeath();
    }
    
    buttons.menu.draw();
    this.switchGameState(buttons.menu.clicked(), "menu");

    buttons.save.draw();
};
game.pauseMenu.mousePressed = function()
{
    if(buttons.save.clicked())
    {
        //game.save();
        //game.switchGameState(true, "start");

        //Restart the program, a quick fix to make sure 
        //we don't accidently unproperly load the same
        //save file as the currently opened one, if the same one was opened.
        if(MODE === "pjs")
        {
            game.restart();
        }
    }
};
game.menu = function()
{
    this.drawTitle();

    textFont(fonts.menu);

    textSize(12);
    fill(0, 0, 0, 100);
    text(game.version, 364, 390); 
    
    buttons.play.draw();
    buttons.how.draw();
    buttons.extras.draw();
};
game.menu.mousePressed = function()
{
    game.switchGameState(buttons.play.clicked(), "play");
    game.switchGameState(buttons.how.clicked(), "how");
    game.switchGameState(buttons.extras.clicked(), "extras");
},
game.menu.keyPressed = function()
{
    if(!keys[32] && ENTER_KEY)
    {
        game.switchGameState(true, "play");
    }
};

game.inventoryMenu = function()
{
    textFont(fonts.menu);

    image(screenUtils.screenShot, 0, 0, width, height);

    keys[27] = false;
    ESC_KEY = false;

    inventoryMenu.update();
    inventoryMenu.draw();

    game.switchGameState(inventoryMenu.state === "closed", "play"); 
};
game.inventoryMenu.mousePressed = function()
{
    if(mouseY < 60 || mouseY > 340)
    {
        inventoryMenu.tryToClose(function() 
        {
            return mouseButton === LEFT;
        });
    }
};
game.inventoryMenu.keyPressed = function()
{
    keys[27] = false;
    ESC_KEY = false;

    if(!inventoryMenu.oFuncs || !inventoryMenu.oFuncs.close)
    {
        inventoryMenu.tryToClose();
    }
};

game.applyFps = function()
{   
    if(this.fps === 30)
    {
        loader.levelStepRows *= 2;
        cam.speed *= 2;
    }else{
        loader.levelStepRows /= 2;
        cam.speed /= 2;
    }

    frameRate(game.fps);
};

////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**************************************************************Final-loop******************************************************************/
////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

game.play = function(noDraw)
{
    pushMatrix();
        cam.view();
        backgrounds.drawForeground();
        gameObjects.update();
        gameObjects.draw(noDraw);
        gameObjects.drawBoundingBoxes();
        //cameraGrid.draw();
        //cam.draw();
        screenUtils.withCamera();
        
        levelScripts.draw();
    popMatrix();

    daylightCycle.update();
    levelScripts.apply();
    //cam.drawOutline();

    pushMatrix();
        cam.scaleZoom();
        lighting.draw();
    popMatrix();

    debugTool.apply();

    if(!messageHandler.active && !debugTool.active)
    {
        //Menu
        this.switchGameState(keys[77], "menu"); //On key 'm' switch to menu
        this.switchGameState(keys[80] || ESC_KEY, "pauseMenu", true); //On key 'p' switch to pause menu
    }
};
game.play.keyPressed = function()
{
    if(keys[F12] && (!game.cutScening || debugTool.active))
    {
        debugTool.active = !debugTool.active;
        game.cutScening = debugTool.active;

        if(debugTool.active)
        {
            screenUtils.infoBar.sBH = screenUtils.infoBar.showBottomHud;
            screenUtils.infoBar.showBottomHud = false;
        }else{
            screenUtils.infoBar.showBottomHud = screenUtils.infoBar.sBH;
        }
    }

    debugTool.keyPressed();

    if(debugTool.active)
    {
        return;
    }

    var player = gameObjects.getObject("player").getLast();
    player.keyPressed();

    talkHandler.keyPressed();

    if(messageHandler.active)
    {
        return;
    }

    if(keys[F11] && game.debugMode)
    {
        game.fpsType = (game.fpsType === "auto") ? "manual" : "auto";
    }
    else if(keys[F10] && game.debugMode)
    {
        game.fps = {"60": 30, "30": 60}[game.fps.toString()];

        if(game.fps === undefined)
        {
            game.fps = 60;
        }

        game.applyFps();
    }
    else if(keys[F9] && game.debugMode)
    {
        gameObjects.delag(false, true);      
    }
    else if(keys[F6])
    {
        screenUtils.infoBar.showBottomHud = !screenUtils.infoBar.showBottomHud;
    }

    if(keys[F7])
    {
        game.hideKeys = !game.hideKeys;
    }

    game.switchGameState(inventoryMenu.tryToOpen(), "inventoryMenu", true); 
};
game.play.keyReleased = function()
{
    talkHandler.keyReleased();
};

game.doCursor = function()
{
    game.cursor = false;
    game.noCursor = false;
};

var draw = function()
{
    game.doCursor();
    backgrounds.drawBackground();
    game[game.gameState]();
    screenUtils.update();
};

var lastMouseReleased = mouseReleased;
mouseReleased = function()
{
    lastMouseReleased();
    screenUtils.mouseReleased();
};

/* Inputs */ //Binding the inputs with game scenes/states
var inputs = {"mousePressed" : mousePressed,
              "keyPressed" : keyPressed,
              "mouseReleased" : mouseReleased,
              "keyReleased" : keyReleased};
inputs.set = function(name, input)
{
    processing[name] = function() 
    {
        input();
        if(game[game.gameState][name] !== undefined)
        {
            game[game.gameState][name]();
        }
    };
};
inputs.load = function()
{
    for(var i in this)
    {
        inputs.set(i, this[i]);
    }
};

//Load the inputs
inputs.load();

function showError(e, fatal)
{
    processing.width = 600;
    processing.height = 600;

    background(0, 60, 200);

    resetMatrix();

    if(this.sec)
    {
        scale(6 / 4, 6 / 4);
    }

    this.sec = true;

    processing.width = 400;
    processing.height = 400;

    fill(255, 255, 255, 100);
    textSize(width * 0.037);
    textAlign(CENTER, CENTER)
    text("Oops! An " + ((!fatal) ? "error" : "fatal") + " occurred!", width / 2, height * 0.35);

    textSize(width * 0.026);
    text(((!fatal) ? "Press any key to continue." : "Failure to continue,\n restarting ..."), width / 2, height * 0.55);

    var crashText = e.toString();
    var crashStack = e.stack;
    var crashLineNumber = e.stack.toString().split("\n")[4];

    console.log(crashText);
    console.log(crashStack);

    if(crashText.toString() === "TypeError: Cannot read property 'xPos' of undefined")
    {
        console.warn("(Player is missing!)");
    }

    console.log("Line:" + crashLineNumber);

    textSize(width * 0.02);

    textAlign(LEFT, CENTER);
    text(crashText + "\n" + "Line:\n" + crashLineNumber, 1, height * 0.8);
}

function initErrorHandler()
{
    processing.lastDraw = draw;
    draw = function()
    {
        try{
            processing.lastDraw();
        }
        catch(e)
        {
            resetMatrix();
            showError(e);
            noLoop();

            var time = millis();

            processing["_lastKeyReleased" + time] = keyReleased;
            keyReleased = function()
            {
                if(key.toString() === '-')
                {
                    return;
                }

                try{
                    processing["_lastKeyReleased" + time]();
                    processing.lastDraw();
                    loop();
                }
                catch(e)
                {
                    showError(e, true);

                    keyReleased = function() {};

                    window.setInterval(function()
                    {
                        window.location.reload();
                    }, 3000);
                }
            };
        }
    };
};

//Try out the error handler
initErrorHandler();

processing.scaledCondition = function()
{
    return (game.gameState !== "load");
};

//Other browsers have slowdowns
if(browserDetection.isFireFox)
{
    game.fpsType = "auto";
}

/*Globalize things for debugging*/
if(game.debugMode)
{
    window.gameObjects = gameObjects;
    window.cam = cam;
    window.storedImages = storedImages;
}

//Done!

//Close the wrapper
    }
    if(typeof draw !== 'undefined') processing.draw = draw;
};

//Apply to the sketch to the canvas
window.canvas = document.getElementById("canvas");
window.processing = new Processing(canvas, sketch);
window.processing.chrome = browserDetection.isChrome; 

function updateSize(pjs, w, h, w2, h2)
{
    var screen = {
        width : w2,
        height : h2,
        normalWidth : w,
        normalHeight : h,
    };

    pjs.size(screen.width, screen.height);

    processing.screen = screen;

    var ratios = {};
    function setRatios()
    {
        ratios = {
            smallWidth : screen.normalWidth / screen.width,
            smallHeight : screen.normalHeight / screen.height,
            bigWidth : screen.width / screen.normalWidth,
            bigHeight :  screen.height / screen.normalHeight,
        };
    }

    setRatios();

    var tempCanvas = document.createElement("canvas");
    var tctx = tempCanvas.getContext("2d");

    var ctx = canvas.getContext("2d");

    function resizeTo(canvas, pctW, pctH, noLarge)
    {
        var cw = canvas.width;
        var ch = canvas.height;
        tempCanvas.width = cw;
        tempCanvas.height = ch;

        tctx.drawImage(canvas, 0, 0);

        if(!noLarge)
        {
            canvas.width *= pctW;
            canvas.height *= pctH;
        }

        ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * pctW, ch * pctH);
    }
        
    function begin()
    {
        pjs.lastMouseX = pjs.mouseX;
        pjs.lastMouseY = pjs.mouseY;
        pjs.mouseX = pjs.lastMouseX * (ratios.smallWidth);
        pjs.mouseY = pjs.lastMouseY * (ratios.smallHeight);

        pjs.width = screen.normalWidth;
        pjs.height = screen.normalHeight;
    }

    function end()
    {
        if(pjs.scaled)
        {
            pjs.width = screen.width;
            pjs.height = screen.height;
        }
        pjs.mouseX = pjs.lastMouseX;
        pjs.mouseY = pjs.lastMouseY;
    }

    pjs. _lastMouseReleased = pjs.mouseReleased;
    pjs.mouseReleased = function()
    {
        begin();
        pjs._lastMouseReleased();
        end();
    };

    pjs. _lastMousePressed = pjs.mousePressed;
    pjs.mousePressed = function()
    {
        begin();
        pjs._lastMousePressed();
        end();
    };

    pjs.scaledCondition = pjs.scaledCondition || function() {};

    pjs.lastLoop = pjs.draw;
    pjs.draw = function()
    {
        pjs.pushMatrix();

        if(pjs.scaledCondition() && pjs.scaled !== undefined)
        {
            pjs.scale(ratios.bigWidth, ratios.bigHeight);

            pjs.scaled = true;
        }else{
            pjs.scaled = false;
        }

        begin();

        pjs.lastLoop();

        if(!pjs.scaled)
        {
            resizeTo(canvas, ratios.bigWidth, ratios.bigHeight, true);
        }

        end();
        
        pjs.popMatrix();
    };
};

updateSize(processing, 400, 400, 600, 600);

var oEvents = ["Backspace"];

document.addEventListener('keydown', function()
{
    if(oEvents.indexOf(event.key.toString()) !== -1) 
    {
        event.preventDefault();
    }
});
document.addEventListener('keyup', function()
{
    if(oEvents.indexOf(event.key.toString()) !== -1) 
    {
        event.preventDefault();
    }
});

try{
    window.bombEmoji = '💣';
}
catch(e) 
{
    console.log(e);
}