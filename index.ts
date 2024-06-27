import { differenceInSeconds, DifferenceInWeeksOptions } from "date-fns";

// step 1
// Function for count down seconds
function* countdownTimer(second: number){
    // While loop
    while (second > 0) {
        yield second;
        second--;
    }
}

// step 2: counter inilization

let timeInterator = countdownTimer(10);

// Functions to create a count down timer
function displayCountdown(){
    // value below 10
    let result = timeInterator.next();
    // if else conditions
    if (!result.done) {
        // current date and time calls
        const now = new Date();
        // Calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000))

        // Calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTimer , now)

        // Printing remaining seconds
        console.log(`Remaining Seconds: ${remainingSeconds}`);

        setTimeout(displayCountdown, 1000); // 1 second is equal to 1000 ms
        
    } else {
        // Display result count down complete
        console.log("Countdown Complete!");
    }
}

displayCountdown();