class StringManipulation {

    inputIdentifier = '';
    buttonIdentifier = '';
    stringInput;
    outputElementId = 'result-element';


    constructor(inputId, buttonId) {
        this.inputIdentifier = inputId;
        this.buttonIdentifier = buttonId
        let button = document.getElementById(buttonId);
        button.addEventListener("click", this.runInputAlgo.bind(this));
    }

    runInputAlgo() {
        let input = document.getElementById(this.inputIdentifier);

        //Note even if you pass a number here, and it is processed it will still not find the number because we used regex
        //But for this case we want to console.log if its a number
        if(isNaN(input.value)) {
            if(/^[A-Z]*$/.test(input.value.charAt(0))) {
                //if true then first letter is capital
                this.processOutput('True');

                //Console log as a simple test
                console.log("True");
            }
            else {
                this.processOutput('False');

                //Console log as a simple test
                console.log("False")
            }
        }
        else {
            console.log("The value of the input element passed is NOT a string");
        }
    }

    processOutput(value) {
        //If the element is missing, create it.
        if(!document.getElementById(this.outputElementId)){
            let element = document.createElement('div')
            element.setAttribute('id', this.outputElementId);
            element.textContent = value;
            document.body.appendChild(element);
        }
        else {
            let element = document.getElementById(this.outputElementId);
            element.textContent = value;
        }
    }
    
}