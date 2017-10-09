function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    }
    var time = g / (v2 - v1); // hours
    var mod_time = (time * 3600)%3600;
    var hours = Math.floor(time);
    var minutes = Math.floor(mod_time/60) ;
    var seconds =  Math.floor(mod_time)%60;
    return [hours, minutes, seconds];
}

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
console.log(race(80, 100, 40));

function raceA(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    }
    var time = g / (v2 - v1); // hours
    var time_seconds = time * 3600;
    var hours = Math.floor(time_seconds/3600);
    var minutes = Math.floor((time_seconds % 3600)/60) ;
    var seconds =  Math.floor(time_seconds % 3600)%60;
    return [hours, minutes, seconds];
}