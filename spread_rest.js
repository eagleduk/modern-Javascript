const spread1 = {
    name: "1"
}

const spread2 = {
    ...spread1,
    value: "2"
} // {name:"1",value:"2"}

const spreadArr1 = [1,2,3,4];
const spreadArr2 = [...spreadArr1, 5,6,7]; // [1,2,3,4,5,6,7]

function subtract(x,y) {
    return x-y;
}

const numbers = [1,2];
const result = subtract(...numbers);


const rest1 = {
    name: "1",
    value: "2",
    key: "3"
};

const {name, rest2} = rest1;
// name = "1", rest = {value:"2",key:"3"}

const rest3 = [1,2,3,4,5,6,7];
const [one,two,...rest4] = rest3;
// one = 1, two = 2, rest4 = [3,4,5,6,7]

function sum(...rest) {
    return rest.reduce((acc,curr) => acc+curr,0);
}

sum([1,2,3,4,5,6]);