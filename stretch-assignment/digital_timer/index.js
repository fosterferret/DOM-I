window.onload = function() {
    //Initialize digits as 0's and timeInterval function which controls the interval for each call
    let msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 0;
    let timerInterval;

     // Initialize digit places
     let msHundredsCount = document.querySelector("#msHundreds");
     let msTensCount = document.querySelector("#msTens");
     let secondOnesCount = document.querySelector("#secondOnes");
     let secondTensCount = document.querySelector("#secondTens");
 
    // Initialize buttons
    let start = document.querySelector("#startBtn");
    let stop = document.querySelector("#stopBtn");
    let reset = document.querySelector("#resetBtn");

    // Start timer on click of start button and clear existing data
    start.onclick = function() {
        clearInterval(timerInterval);
        timerInterval = setInterval(tenSecTimer, 10);
    }

    // Set stop button effect
    stop.onclick = function() {
        clearInterval(timerInterval);
    }

    // Set reset effect
    reset.onclick = function() {
       
       clearInterval(timerInterval);
      
        msHundredsCount.classList.remove("redDigit");
        msTensCount.classList.remove("redDigit");
        secondOnesCount.classList.remove("redDigit");
        secondTensCount.classList.remove("redDigit");
      
        msTens = "-"; 
        msHundreds = "-"; 
        secondOnes = "-"; 
        secondTens = "-";
        msHundredsCount.innerHTML = `${msHundreds}`;
        msTensCount.innerHTML = `${msTens}`;
        secondOnesCount.innerHTML = `${secondOnes}`;
        secondTensCount.innerHTML = `${secondTens}`;
        msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 0;
    }

    function tenSecTimer() {
        msHundreds += 1;
        //while mshundreds is increasing by 1, its HTML value should be the +1 increments
        if (msHundreds < 9) {
            msHundredsCount.textContent = `${msHundreds}`;
        }

        //as mshundreds gets to 10, ms tens should start counting and increasing by 1
        if (msHundreds > 9) {
            msTens += 1;
            msTensCount.textContent = `${msTens}`;
            msHundreds = 0;
            msHundredsCount.textContent = `${msHundreds}`;
        }

        if (msTens < 9) {
            msTensCount.textContent = `${msTens}`;
        }

        if (msTens > 9) {
            secondOnes += 1;
            secondOnesCount.textContent = `${secondOnes}`;
            msTens = 0;
            msTensCount.textContent = `${msTens}`;
        }

        if (secondOnes < 9) {
            secondOnesCount.textContent = `${secondOnes}`;
        }

        if (secondOnes > 9) {
            secondTens += 1;
            secondTensCount.textContent = `${secondTens}`;
            secondOnes = 0;
            secondOnesCount.textContent = `${secondOnes}`;
        }

        if (secondTens === 1) {
            clearInterval(timerInterval);
            msTens = 0; 
            msHundreds = 0; 
            secondOnes = 0; 
            secondTens = 1;
            msHundredsCount.textContent = `${msHundreds}`;
            msTensCount.textContent = `${msTens}`;
            secondOnesCount.textContent = `${secondOnes}`;
            secondTensCount.textContent = `${secondTens}`;
            msHundredsCount.className += " redDigit";
            msTensCount.className += " redDigit";
            secondOnesCount.className += " redDigit";
            secondTensCount.className += " redDigit";
        }
    }
}