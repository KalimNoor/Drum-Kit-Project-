// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got Clicked")
// }

// var numberO
// for (var i = 0; i<document.querySelectorAll(".drum").length)

// document.querySelector("button").addEventListener("click", function() {
//     alert("I got Clicked")
// });


//Detecting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;    //Creating a new variable called 

for (var i = 0; i<numberOfDrumButtons; i++) {  //loop i is 0 every time i is less than Number of buttons value increment i
   
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
  
        var buttoninnerHTML = this.innerHTML                  // Creating var and using 'this' which is a returning the buttons

        makeSound(buttoninnerHTML);

        buttonAnimation(buttoninnerHTML)

    });

}

//Detecting Keyboard press
document.addEventListener("keypress", function(event){   //Adding keypress to entire document  event is what triggers the keypress 
  
    makeSound(event.key)

    buttonAnimation(event.key)  

});



function makeSound(key){

    switch (key) {                             // Start Of switch statement 
        case "w":                                          //     
            var tom1 = new Audio("sounds/tom-1.mp3");      // 
            tom1.play();
            break;

        case"a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;
            
        case"s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case"d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
           break;

        case"j":
           var  snare = new Audio("sounds/snare.mp3");
           snare.play();
          break;

        case"k":
          var  crash = new Audio("sounds/crash.mp3");
          crash.play();
         break;

        case"l":
         var  kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
        break;

        default: console.log(buttoninnerHTML)
    }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}