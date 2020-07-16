class Bike {
    price: number;
    max_speed: number;
    miles: number;

    constructor(price: number, max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    showInfo() {
        console.log(this.price);
        console.log(this.max_speed);
        console.log(this.miles);
        return this;
    }

    ride() {
        this.miles += 10;
        console.log("Riding...");
        return this;
    }

    reverse() {
        if (this.miles >= 5) {
            this.miles -= 5;
            console.log("Reversing...");
        } else {
            console.log("Can't reverse!")
        }

        return this;
    }
}

let a = new Bike(14.99, 13);
let b = new Bike(19.99, 20)
let c = new Bike(17.99, 18)

a.ride().ride().ride().showInfo();
b.ride().ride().reverse().reverse().showInfo();
c.reverse().reverse().reverse().showInfo();