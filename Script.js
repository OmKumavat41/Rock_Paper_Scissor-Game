// Variables To Update value 
let userscore = 0;
let compscore = 0;

// Selecting All Three Choices
const games = document.querySelectorAll(".game")
console.log(games);

// Selecting button
const btn = document.querySelector("#pick")

// Selecting User and Computer Score
let userpara = document.querySelector("#user");
let comppara = document.querySelector("#comp")

// Genrating Computer Choice
const genCompChoice = ()=>{
 const options =["rock","paper","scissors"];     
const randomidx = Math.floor(Math.random() * 3);
return options[randomidx]       //ComputerChoice
}


// Draw Function
const draw = ()=>{
 console.log("Game Was draw!....Play Again");
 btn.innerText="Game Was draw!....Play Again"
}

// ShowWinner Function
const showWinner = (userwin,userChoice,compchoice)=>{
  if(userwin){
    userscore++;
   userpara.innerHTML = userscore;
    console.log(`Congratulations.. You Win! ${userChoice} beats ${compchoice}`);
    btn.style.backgroundColor ="green"
    btn.style.color = "#fff"
    btn.innerText = `Congratulations.. You Win! ${userChoice} beats ${compchoice}`
  }
  else{
    compscore++;
    comppara.innerHTML = compscore; 
    console.log( `Sorry...You Lost!..${compchoice} beats ${userChoice}`);
     btn.style.backgroundColor ="red"
    btn.style.color = "#fff"
   btn.innerText = `Sorry...You Lost!..${compchoice} beats ${userChoice}`}
}

// Playing Game Function
const playgame = (userChoice)=>{
  console.log("user choice is = " ,userChoice);
  const compchoice = genCompChoice();
  console.log("computer choice is =",compchoice);
    
if(userChoice ===compchoice){
  draw();
} else{
  let userwin = true;
  if(userChoice ==="rock"){
    userwin= compchoice==="paper"? false : true;
  }
  else if(userChoice==="paper"){
    userwin=compchoice==="scissors"? false:true;
  }
  else{
    userwin=compchoice==="rock" ?false:true;
  }
  showWinner(userwin,userChoice,compchoice)
}
}


games.forEach((game)=>{
  game.addEventListener("click",()=>{
    const userChoice = game.getAttribute("id")   //UserChoice
   playgame(userChoice);
  })
})

