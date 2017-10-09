function pickPeaks(arr) {
    var ind = [];
    var plateauIndex = 0;
    var peaks = arr.filter(function (element, index) {
        if (index != 0 || index != arr.length - 1) {
            if (arr[index - 1] < arr[index]) {
                if (arr[index] > arr[index + 1]) {
                    ind.push(index);
                    return element;
                }
                if (arr[index] === arr[index + 1]) {
                    plateauIndex = index;
                }
            } else if (arr[index - 1] === arr[index]) {
                if (arr[index] > arr[index + 1]) {
                    if (plateauIndex) {
                        ind.push(plateauIndex);
                        return element;
                    }
                }
            }
        }
    });
    return {pos: ind, peaks: peaks}
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
console.log(pickPeaks([1, 2, 2, 2, 1, 1, 2, 2, 2, 1]));
console.log(pickPeaks([1, 2, 2, 2, 3]));
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]));