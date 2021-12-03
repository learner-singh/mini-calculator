let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for(item of buttons) {
    item.addEventListener("click", e => {
        let buttonValue = e.target.innerText;
        console.log("Button value is", buttonValue)
        if(buttonValue == "X") {
            buttonValue = "*";
            screenValue += buttonValue;
            screen.value = screenValue;
        }
        else if(buttonValue == "C") {
            buttonValue = "";
            screen.value = buttonValue;
        }
        else if(buttonValue == "=") {
            let result = eval(screenValue); 
            console.log("result is ", result);
            screenValue = result;
            screen.value = screenValue;
            console.log("screen.value is ", screen.value)

        }
        else {
            screenValue += buttonValue;
            screen.value = screenValue;
        }
    })
}