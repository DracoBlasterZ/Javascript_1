console.log("Hello world!")
console.log("I'm the fourth script!")


let values = [true, 5, false, "hello", "bye", 2];


let stringValue = "";
for (value of values){

    if (typeof value === "string" && value > stringValue){
        stringValue = value;
    }
}


console.log(stringValue);


for (value of values){
    
    if (typeof value === "boolean"){
        console.log(value);
    }
}


let v1;
let v2;
let intcount = 0;

for (value of values){
    if (typeof value === "number"){
        if (intcount === 0) {
            v1 = value;
            intcount++;
        } else if (intcount === 1) {
            v2 = value;
            intcount++;
        }
    }
}

console.log(v1 + " + " + v2 + " = " + (v1+v2));
console.log(v1 + " - " + v2 + " = " + (v1-v2));
console.log(v1 + " * " + v2 + " = " + (v1*v2));
console.log(v1 + " / " + v2 + " = " + (v1/v2));
console.log(v1 + " % " + v2 + " = " + (v1%v2));