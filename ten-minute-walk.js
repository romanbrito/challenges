// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too
// early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its
// citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of
// one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute
// to traverse one city block, so create a function that will return true if the walk the app gives you will take you
// exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
// Return false otherwise.
//
// Note: you will always receive a valid array containing a random assortment of direction letters
// ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    if (walk.length === 10){
        var xAxis = walk.map(function (t) {
                if (t === 'n'){return 1}
                if (t === 's'){return -1}
                if (t === 'e'){return 0}
                if (t === 'w'){return 0}
        });

        var yAxis = walk.map(function (t) {
            if (t === 'n'){return 0}
            if (t === 's'){return 0}
            if (t === 'e'){return 1}
            if (t === 'w'){return -1}
        });

        var result_y = yAxis.reduce(function (a,cv) { return a + cv  });
        var result_x = xAxis.reduce(function (a,cv) { return a + cv  });

        return result_x === 0 && result_y === 0;
        } else {
            return false;
        }
}


function isValidWalkA(walk) {
    function count(val) {
        return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['s','w']));
console.log(isValidWalk(['n','w','s','s']));
console.log(isValidWalk(['n','w']));
console.log(isValidWalk(['n','w']));
console.log(isValidWalk( ['e', 'w', 'n', 'n', 's', 'w', 'n', 'n', 's', 'n']));
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']));