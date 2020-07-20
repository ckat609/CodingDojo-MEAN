function bSort(arr) {
    let sorted = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
            if (arr[j] > arr[j + 1]) {
                sorted = false;
            }
        }
        if (sorted) {
            console.log("The array is already sorted");
            return arr;
        }
    }
    return arr;
};

let arr = [83, 48, 98, 13, 73, 38, 99, 24, 10, 1, 35, 78, 27, 84, 65, 33, 29, 76];
console.log(bSort(arr));


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 90, 100];
console.log(bSort(arr));