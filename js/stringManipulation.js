class StringManipulation {

    //Static as the class does not require a state to execute this function's purpose
    static evalFirstCapital(value) {
        //Note even if you pass a number here, and it is processed it will still not find the number because we used regex
        //But for this case we want to issue a console warning if they input a number
        if(isNaN(value)) {
            return /^[A-Z]*$/.test(value.charAt(0))
        }
        else {
            console.log("The value of the input element passed is NOT a string");
            //still need to return false as it doesnt meet the functions conditions
            return false;
        }
    }    
}

module.exports = StringManipulation;