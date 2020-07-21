function bSearch(arr, aNum) {
    let midPoint = Math.floor(arr.length / 2);
    let leftSide = arr.slice(0, midPoint);
    let rightSide = arr.slice(midPoint, arr.length);

    // console.log(`ARRAY: ${arr}`);
    // console.log(`LEFT: ${leftSide}`);
    // console.log(`RIGHT: ${rightSide}`);
    // console.log(`LENGTH: ${arr.length}`);
    // console.log(`MIDPOINT: ${midPoint}`);


    if (arr.length > 2) {
        console.log(arr.length);
        // midPoint /= 2;
        if (aNum == arr[midPoint]) {
            return (midPoint);
        }
        if (aNum < arr[midPoint]) {
            bSearch(leftSide, aNum);
        }
        if (aNum > arr[midPoint]) {
            bSearch(rightSide, aNum);
        }
    }
}

// console.log(bSearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));
console.log(bSearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));