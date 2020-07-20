function fizzbuzz(aNumber) {
    var text = "";
    var fullText = "";
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

        if (i != aNumber) {
            fullText += text + ", ";
        } else {
            fullText += text;
        }

        text = "";
    }
    return fullText;
}

console.log(fizzbuzz(100));