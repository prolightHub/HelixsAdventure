var sounds = {
    sounds : {},
    repetent : {},
    settings : {
        off : false,
        mainVolume : 0.5,
        song: true
    },
    addSound : function(str, type, volume, returnIt)
    {
        if(!returnIt)
        {
            this.sounds[str] = new Audio("sounds/" + str);
            this.repetent[str] = [];
            this.sounds[str].type = type || "sound";
            volume = volume || 1;
            this.sounds[str].setVolume = volume;
            this.sounds[str].volume = this.settings.mainVolume * volume;
        }else{
            var snd = new Audio("sounds/" + str);
            snd.type = type || "sound";
            snd.isSong = isSong;
            volume = volume || 1;
            snd.setVolume = volume;
            snd.volume = this.settings.mainVolume * volume;
            return snd;
        }
    },
    getSound : function(str)
    {
        if(this.sounds[str] !== undefined)
        {        
            return this.sounds[str];
        }else{
            console.log("Warning : Failure to get loaded sound " + str);
            return {};
        }
    },
    mplaySound : function(str, vol)
    {
        if(this.settings.off || this.sounds[str] === undefined)
        {
            return;
        }

        var snd1 = new Audio();
        var src1 = document.createElement("source");
        src1.src = "sounds/" + str;
        snd1.type = this.sounds[str].type;
        snd1.volume = this.settings.mainVolume * (vol || this.sounds[str].volume);
        snd1.appendChild(src1);

        snd1.play(); 
    },
    playSound : function(str, loop)
    {
        if(this.settings.off)
        {
            return;
        }

        var sound = this.getSound(str);
        if(sound !== undefined && sound.play)
        {
            sound.loop = loop || false;
            sound.play();
        }
    },
    stopSound : function(str, noStartOver)
    {
        var sound = this.getSound(str);
        if(sound !== undefined)
        {
            sound.loop = false;
            if(!noStartOver)
            {
                sound.currentTime = sound.duration;
            }
            try{
                sound.pause();
            }
            catch(e)
            {
                console.log(e);
            }
        } 
    },
    getMainVolume : function()
    {
        return this.settings.mainVolume || 0.5;
    },
    setMainVolume : function(mainVolume)
    {
        this.settings.mainVolume = mainVolume;
        if(this.settings.mainVolume < 0)
        {
            this.settings.mainVolume = 0;
        }
        if(this.settings.mainVolume > 1)
        {
            this.settings.mainVolume = 1;
        }
        for(var i in this.sounds)
        {
            // this.sounds[i].volume = mainVolume;
            this.sounds[i].volume = (this.settings.mainVolume * this.sounds[i].setVolume);
            if(this.sounds[i].volume <= 0)
            {
                this.stopSound(i);
            }
        }
    },
    setVolume : function(str, volume)
    {
        var sound = this.getSound(str);
        if(sound !== undefined)
        {
            sound.volume = volume;
        }
    },
};

/* Import sounds */
sounds.addSound("coinSound.mp3");
sounds.addSound("explosion.mp3");
sounds.addSound("whistle1.mp3");
sounds.addSound("laser3.mp3", undefined, 0.15);
sounds.addSound("rumble.mp3");
sounds.addSound("swoosh.mp3", undefined, 0.15);
sounds.addSound("coin.mp3");
sounds.addSound("dooropen.mp3");
sounds.addSound("quickBoom.wav");
sounds.addSound("zoom1.wav");
sounds.addSound("soup4.wav");
sounds.addSound("zooba.wav");
sounds.addSound("whoo.wav");
sounds.addSound("hit2.mp3");
sounds.addSound("Explosion5.wav");
sounds.addSound("smchoof.wav");

//Made with beepbox
sounds.addSound("StepUp.wav", "song");
sounds.addSound("StepUpv2.wav", "song");

// This stuff einkurogane
sounds.addSound("PS2.mp3", "song");
sounds.addSound("PS2-8bit.mp3", "song");