
localStorage.getItem = function(key)
{
    return STORAGE[key];
};

localStorage.setItem = function(key, value)
{
    STORAGE[key] = value;

    console.clear();
    console.log(JSON.stringify(STORAGE).toString());
};
