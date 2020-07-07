function maxMinAvg(arr) {
    var min, max, avg;

    if (arr.length > 0) {
        min = arr[0];
        max = arr[0];
        avg = 0;
    } else {
        return "Invalid array length"
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        avg += arr[i];
    }
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
    console.log(`Avg: ${avg/arr.length}`);
}


aArray = [1, -2, 9, 4];
maxMinAvg(aArray);

aArray = [6, 3, 5, 0, 1, 9, 2];
maxMinAvg(aArray);

aArray = [19, 34, 14, 94, 48, 63, 12, 59, 93, 38, 73];
maxMinAvg(aArray);

aArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
maxMinAvg(aArray);