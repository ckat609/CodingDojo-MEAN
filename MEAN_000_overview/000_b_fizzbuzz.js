function fizzbuzz(aNumber) {
    var text = "";
    for (i = 1; i <= aNumber; i++) {
        if (i % 3 == 0) {
            text += "Fizz";
            console.log(text);
        }
        if (i % 5 == 0) {
            text += "Buzz";
            console.log(text);
        }
        text = "";
    }
}

fizzbuzz(100);