function handleButtonClick(button) {
    const buttonValue = button.textContent;
    const viewport = document.getElementById("viewport");
    viewport.value += buttonValue;
    
    
}



function clearDisplay(){
    let display = document.getElementById('viewport');
    display.value = '';
}

function removeLastCharacter(){
    let display = document.getElementById('viewport');
    display.value = display.value.slice(0, -1);

}


function rootfunction() {
    
    let display = document.getElementById("viewport");
    let buttonValue = "√"; 
    display.value += buttonValue;
}

function calculateResult(){

    let display = document.getElementById('viewport');
    let expression = display.value;

    // Check if the expression contains the square root symbol (√)
    if (expression.includes('√')) {
        // Extract the part after √ and calculate the square root
        let parts = expression.split('√');
        if (parts.length === 2) {
            let radicand = parseFloat(parts[1]);
            if (!isNaN(radicand)) {
                let result = Math.sqrt(radicand);
                display.value = result;
            } else {
                display.value = 'Error';
            }
        } else {
            display.value = 'Error';
        }
    }
    //The root ends here 
   
    
    else {
        
        try {
            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    }

}


function calculatePercentage(){

}

// Get the audio element
        const audio = document.getElementById("clickSound");

        // Get all buttons
        const buttons = document.querySelectorAll("button");

        // Add click event listener to each button
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                // Play the audio
                audio.play();
            });
        });

