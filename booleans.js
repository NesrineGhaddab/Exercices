const isEven = (number) => {
    if (number % 2 === 0) {
        return true
    }
    else return false

}

let isValidPassword = (password) => {
    if (password.length >= 8) {
        return true;
    }
    else return false;

};
// let longerString = (string1, string2)=>{
//     if (string1.length =string2.length ){
//         console.log(string1);
//         console.log(string2);
//     }
//     else if (string1.length > string2.length) return string1
//     else return string2

// };
let longerString = (string1, string2) => {
    if (string1.length === string2.length) return "both";
    else if (string1.length > string2.length) return string1;
    else return string2;
};