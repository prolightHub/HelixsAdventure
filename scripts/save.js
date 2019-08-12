var saverInfo = {
    saveType : ((browserDetection.isChrome || browserDetection.isFirefox) && !browserDetection.isEdge ? "localStorage" : "cookie"),
    useSaveData : true,
    storageName : "saveData",
    maxSaves : 8,
};

// if(browserDetection.isFirefox || browserDetection.isEdge)
// {
//     window.alert("This browser may not be the fastest for this game.\nThe recommended browser for this game is Chromium.");
// }

//Not mine but edited to fit
var cookieHandler = {
    setCookie : function(name, value, days, time) 
    {
        var expires = "";
        if(days)
        {
            var date = new Date();
            date.setTime(date.getTime() + (time || (days * 24 * 60 * 60 * 1000)));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie : function(name) 
    {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) 
        {
            var c = ca[i];
            while(c.charAt(0) == ' ') 
            {
                c = c.substring(1, c.length);
            }
            if(c.indexOf(nameEQ) == 0) 
            {
                return c.substring(nameEQ.length, c.length);
            }   
        }
        return null;
    },
    eraseCookie : function(name) 
    {   
        document.cookie = name + '=; Max-Age=-99999999999;';  
    }
};

var saver = {
    saveData : {},
    current : {}, 
    maxSaves : saverInfo.maxSaves,   
    loadSaveData : function()
    {
        if(saverInfo.useSaveData)
        {
            try{
                var retrieved;
                if(saverInfo.saveType === "localStorage" && window.localStorage !== undefined)
                {
                    retrieved = window.localStorage.getItem(saverInfo.storageName);
                }
                else if(saverInfo.saveType === "cookie")
                {
                    retrieved = cookieHandler.getCookie(saverInfo.storageName);
                }
                this.saveData = (retrieved ? JSON.parse(retrieved) : this.saveData); 
            }
            catch(e)
            {
                console.log(e);
            }
        }else{
            window.alert("Saving in this game won't work with this browser. \nThe recommended browser for this game is Chromium.");
        }
    },
    apply : function()
    {
        if(saverInfo.useSaveData)
        {
            try{
                if(saverInfo.saveType === "localStorage" && window.localStorage !== undefined)
                {
                    window.localStorage.setItem(saverInfo.storageName, JSON.stringify(this.saveData));
                }
                else if(saverInfo.saveType === "cookie")
                {
                    cookieHandler.setCookie(saverInfo.storageName, JSON.stringify(this.saveData), 999999999999999);
                }
            }
            catch(e)
            {
                console.log(e);
            }
        }
    },
    newSaveData : function(saveDataName, name, replace, replaceName)
    {
        this.saveData[saveDataName] = replace || {
            name : name,
        };
        this.saveData[saveDataName].name = replaceName ||  this.saveData[saveDataName].name;
        this.apply();
    },
    eraseSaveData : function(saveDataName, noApply)
    {
        this.saveData[saveDataName] = undefined;
        if(!noApply)
        {
            this.apply();
        }
    },
    overWriteSaveData : function(saveDataName, info)
    {
        if(this.saveData[saveDataName] !== undefined)
        {
            this.saveData[saveDataName] = info;
            this.apply();

            return true;
        }else{
            console.warn("Warning: Failure to overwrite saveData of " + saveDataName);

            return false;
        }
    },
    writeSaveData : function(saveDataName, info)
    {
        if(this.saveData[saveDataName] !== undefined)
        {
            for(var i in info)
            {
                this.saveData[saveDataName][i] = info[i];
            }
            this.apply();

            return true;
        }else{
            console.warn("Warning: Failure to write saveData of " + saveDataName);

            return false;
        }
    },
    readSaveData : function(saveDataName)
    {
        if(this.saveData[saveDataName] !== undefined)
        {
            return this.saveData[saveDataName];
        }else{
            console.warn("Warning: Failure to read saveData of " + saveDataName);
            return {};
        }
    },
    setCurrent : function(saveDataName)
    {
        if(this.saveData[saveDataName] !== undefined)
        {
            this.current.saveDataName = saveDataName;
            this.current.name = this.saveData[saveDataName].name;
            this.current.loaded = false;
            return true;
        }
        return false;
    },
};

//Load data
saver.loadSaveData();

function dataSave(name, json, type, days, time)
{
    if((type || saverInfo.saveType) === "localStorage" && typeof window.localStorage !== "undefined")
    {
        window.localStorage.setItem(name, JSON.stringify(json));
    }
    else if((type || saverInfo.saveType) === "cookie")
    {
        cookieHandler.setCookie(name, JSON.stringify(json), days || 999999999999999, time);
    }
}
function dataGet(name, type)
{
    if((type || saverInfo.saveType) === "localStorage" && typeof window.localStorage !== "undefined")
    {
        return JSON.parse(window.localStorage.getItem(name) || "{}");
    }
    else if((type || saverInfo.saveType) === "cookie")
    {
        return JSON.parse(cookieHandler.getCookie(name) || "{}");
    }
}
function dataErase(name, type)
{
    if((type || saverInfo.saveType) === "localStorage" && typeof window.localStorage !== "undefined")
    {
        window.localStorage.removeItem(name);
    }
    else if((type || saverInfo.saveType) === "cookie")
    {
        cookieHandler.removeCookie(name);
    }
}

(function()
{
    var showSaveData = false;

    if(saverInfo.useSaveData && showSaveData)
    {
        if(saverInfo.saveType === "localStorage" && typeof window.localStorage !== "undefined")
        {
            //Show save data in debugger 
            console.log(window.localStorage.getItem(saverInfo.storageName));

            //Remove all save data
            //window.localStorage.setItem("saveData", "");

            //window.localStorage.clear();
        }
        else if(saverInfo.saveType === "cookie")
        {
            console.log(cookieHandler.getCookie(saverInfo.storageName));
        }
    }
}());

// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

/*Again not mine*/
function isEmpty(obj) 
{
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for(var key in obj) 
    {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

var convertToBinary = function(obj)
{
    for(var i in obj)
    {
        var newArr = [];

        obj[i].forEach(function(element, index)
        {
            newArr.push(element ? 1 : 0);
        });

        obj[i] = newArr;
    }

    return obj;
};
var convertToBoolean = function(obj)
{
    for(var i in obj)
    {
        var newArr = [];

        obj[i].forEach(function(element, index)
        {
            newArr.push(element ? true : false);
        });

        obj[i] = newArr;
    }

    return obj;
};