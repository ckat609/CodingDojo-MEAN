module.exports = function () {
    return {
        add: function (num1, num2) {
            return num1 + num2;
        },

        sub: function (num1, num2) {
            return num1 - num2;
        },

        mult: function (num1, num2) {
            return num1 * num2;
        },

        div: function (num1, num2) {
            return num1 / num2;
        }
    }
}