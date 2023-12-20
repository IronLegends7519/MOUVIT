const app = document.querySelector("#app")
const menu = document.querySelector("#menu")
const body = document.querySelector("#body")
let descendre = 10
let droite = 10
let pair = 1
const Buttonmoins = document.querySelector('#boutton-');
const Buttonplus = document.querySelector('#boutton');
const Compteur =document.querySelector('#compteur');
const Reset = document.querySelector('#reset');
let Zero = 1;
let atop = app.style.top
let aleft = app.style.left
let randomTop;
let randomLeft;

const bonus = document.querySelector("#bonus")

document.addEventListener('keydown', myFunction);


function myFunction(event) {
  switch (event.key) {
    case 'ArrowDown':
      if(parseInt(app.style.top) < 690){
        descendre+=Zero*10
        app.style.top= descendre+"px";
      
        console.log(parseInt(app.style.top))
        console.log(randomTop)
        if(parseInt(app.style.top)==randomTop && parseInt(app.style.left)==randomLeft){
          console.log('bonjour')
          playbonus();
        }
      }
      break;
    case 'ArrowUp':
      if(parseInt(app.style.top) > 0){
        descendre-=Zero*10
        app.style.top= descendre+"px"; 
      }
      break;
    case 'ArrowLeft':
      if(parseInt(app.style.left) > 0){
      droite-=Zero*10
      app.style.left = droite+"px"; }
      break;
    case 'ArrowRight':
      if(parseInt(app.style.left) < 990){
        droite+=Zero*10
        app.style.left = droite+"px"; }
      break;
    case 'Escape':
      pair+=1
      if(pair%2===0){
        menu.style.display= "block";
      }
      else{
        menu.style.display="none";
      }
      
      break;
    default:
      console.log(event.key, event.keyCode);
      return;
  }
}



    Buttonmoins.addEventListener('click', ()=> {
        if(Zero===0){
          Zero=0.1;
        }
         else if(Zero > 0.1) {
            Zero-=0.5;
        }    
        else {
        };
            Compteur.textContent=Zero;
        });



Buttonplus.addEventListener('click', ()=> {
  if(Zero===5.1){
    Zero=5
  }
  else if (Zero < 5) {
    Zero+=0.5;
}   
else { 
};
    Compteur.textContent=Zero;

});

Reset.addEventListener('click', ()=> {
    Zero=1;
    Compteur.textContent=Zero;
});

function playbonus(){
  randomTop = Math.floor(Math.random()*650)
  randomLeft = Math.floor(Math.random()*950)
  bonus.style.left = randomLeft+"px";
  bonus.style.top = randomTop+"px";
  bonus.style.display = 'block';
}
playbonus(); 
console.log(parseInt(app.style.top))
console.log(randomTop)
if(parseInt(app.style.top)==randomTop && parseInt(app.style.left)==randomLeft){
  console.log('bonjour')
  playbonus();
}