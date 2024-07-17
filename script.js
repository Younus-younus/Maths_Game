let rand = document.querySelector("#board");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let h6 = document.querySelector("#score-count");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let high = 0;
let s = 0;
let timer = document.getElementById("timing");
let change = document.getElementById("change");
let TimeRemaining;
let action;
let gameover = document.getElementById("gameover");
let blurr = document.getElementsByClassName("blur");
const optionElements = document.querySelectorAll('.option');
const wrong1 = document.getElementById("bgcolor");
let correctAnswer;

btn.addEventListener("click",()=>
{   
    Question();
    timer.style.display = "block";
   TimeRemaining = 10;
   document.getElementById("timeremaining").innerHTML = TimeRemaining;
   change.innerText = "Your time Has Been Started";
   countdown();
  //  btn.style.display = "none";
});
function countdown() {
    action = setInterval(function(){
        TimeRemaining -= 1;
        document.getElementById("timeremaining").innerHTML = TimeRemaining;
        if(TimeRemaining == 10){
            lesstime();
        }
        if(TimeRemaining == 0){
            stop();
        }
    }
    ,1000);
}
function stop(){
    clearInterval(action);
    gameover.style.display = "block";
    for(let blur of blurr){
        blur.style.filter = "blur(5px)";
    }
    // inp.style.display = "none";
    // check.style.display = "none";
    h2.innerHTML = `Your score ${s}..Start Again`;
    highscore();
}
function lesstime(){
        timer.classList.add("blink");
        change.innerText = "Just ten Seconds Left!";
}
btn2.addEventListener("click",()=>
{   
    rand.innerHTML = "Lets Start The Game";
    rand.style.fontSize = "40px";
    timer.style.display = "none";
   s = 0;
   h6.innerText = `Score ${s}`;
   change.innerText = "You have 1 min to Answer";
   gameover.style.display = "none";
   timer.classList.remove("blink");
   btn.style.display = "inline-block";
   for(let blur of blurr){
    blur.style.filter = "";
    wrong1.style.backgroundColor = "#0D9276";
    optionElements.forEach((button, index) => {
        button.textContent = 0;
        button.dataset.answer = 0;
      });
}
});
btn3.addEventListener("click",()=>
  {   
      rand.innerHTML = "Lets Start The Game";
      rand.style.fontSize = "40px";
      timer.style.display = "none";
     s = 0;
     h6.innerText = `Score ${s}`;
     change.innerText = "You have 1 min to Answer";
     gameover.style.display = "none";
     timer.classList.remove("blink");
     btn.style.display = "inline-block";
     for(let blur of blurr){
      blur.style.filter = "";
      wrong1.style.backgroundColor = "#0D9276";
      optionElements.forEach((button, index) => {
          button.textContent = 0;
          button.dataset.answer = 0;
        });
  }
  });

function Question() {
    const num1 = Math.floor(Math.random() * 10) + 3;
    const num2 = Math.floor(Math.random() * 10) + 3;
    correctAnswer = num1 * num2;
    rand.innerText = `${num1} X ${num2}`;
    rand.style.fontSize = "80px";
    wrong1.style.backgroundColor = "#0D9276";
    const options = [];
    while (options.length < 3) {
      const randomAnswer = Math.floor(Math.random() * 100) + 1;
      if (randomAnswer !== correctAnswer && !options.includes(randomAnswer)) {
        options.push(randomAnswer);
      }
    }
    options.push(correctAnswer);
    options.sort(() => Math.random() - 0.5);

    optionElements.forEach((button, index) => {
      button.textContent = options[index];
      button.dataset.answer = options[index];
    });
  }  

//   function checkans(res) {
//         for(let a of optionElements) {
//             a.addEventListener("click", ()=> {
//                 if(a.textContent==res){
//                     reset1();
//                 }
//                 else {
//                     wrong();
//                 }
//             })
//         }
//     }
function checkAnswer(button) {
    const selectedAnswer = parseInt(button.dataset.answer);
    // const questionElement = rand.innerText;
    // const correctAnswer = eval(questionElement);
  
    if (selectedAnswer === correctAnswer) {
        reset1();
    }
    else {
        wrong();
    }
  }

function reset1() {
    Question();
    score();
    change.innerText = "correct";
    wrong1.style.backgroundColor = "#0D9276";
}

function wrong() {
    wrong1.style.backgroundColor = "red";
    change.innerText = "Wrong Answer";
}

function score() {
    s++;
    h6.innerText = `Score ${s}`;
}

function highscore() {
    if(s > high) high = s;
    if(high == s) {
      h3.innerHTML = `High Score = ${s}`; 
    }
    else {
      h3.innerHTML = `New High Score = ${high}`;
    }
   }

//    function Question() {
        //     let a = Math.floor(Math.random() * 10)+3;
        //     let b = Math.floor(Math.random() * 10)+3;
        //     let res = a*b;
        
        // }