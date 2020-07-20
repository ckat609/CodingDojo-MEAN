function fizzbuzz(aNumber) {
    var text = "";
    for (i = 1; i <= aNumber; i++) {
        if (i % 3 == 0) {
            text += "Fizz";
        }
        if (i % 5 == 0) {
            text += "Buzz";
        }
        if (i % 7 == 0) {
            text += "Spas";
        }
        if (text == "") {
            text = i;
        }
        console.log(text);
        text = "";
    }
}

fizzbuzz(100);