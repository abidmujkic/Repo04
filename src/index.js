function main(numOne, numTwo) {

    var quotient;
    if(numTwo ===0){
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else { quotient = numOne / numTwo}
    // Only change code below this line

   
    // Only Change code above this line
    
    return quotient;
       
}


console.log(main(55, 0)); // change this line

module.exports = main;