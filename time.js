var dates = new Date("Thu Sep 14 2017 19:00:00 GMT-0500 (Central Daylight Time)");
console.log(dates);

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/gi, "red");
console.log(res);
var formatDate = dates.toISOString().replace(/(....)-(..)-(..)............../g, '$1/$2/$3');

console.log(formatDate);

//2017-09-15T00:00:00.000Z

//Thu Sep 14 2017 19:00:00 GMT-0500 (Central Daylight Time)
//https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/dl/1868/arr/2017/9/14?appId=c6ff30bc&appKey=426abb99047676f5431844082be0f85b
    //2017/9/14
