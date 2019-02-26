//JS module closures and flow 


function coolModule(){

  function forLoopLet(){
    for(let i = 0; i <= 5;i++){
      (function(){
        setTimeout(function timer(){
        console.log(i);
      }, i * 1000)
    })();
  }
}

function forLoopJ(){
  for (var i=1; i<=5; i++) {
    (function(j){
      setTimeout( function timer(){
      console.log( j );
      }, j*1000 );
    })( i );
  }
}
let a = "this is a private variable"

function DoSomething(){
  console.log(a);
}

return {
  forloopLet: forLoopLet,
  forLoopJ:forLoopJ,
  DoSomething:DoSomething
}


}

//declaring module to initalize inner closure of function
var module = coolModule()

//Calls Funtions outside of the scope. 
module.forLoopJ()
module.DoSomething()


//Alt. could have used function expression to run it on call 
