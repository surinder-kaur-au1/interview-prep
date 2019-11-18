//object destructuring

const student = {
    firstName:"surinder",
    lastName: "kaur",
    country:"India"

};

const {firstName, lastName, country} = student;
console.log(firstName, lastName, country);

//Array Destructuring

const rgb = [255, 200, 0];
const [a,b,c] = rgb;
console.log(`RED:${a}  GREEN:${b}   BLUE:${c}`);