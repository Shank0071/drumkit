for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", playAudio);
}

function playAudio() {
    var buttonElement = this.innerHTML;
    switch (buttonElement) {
        case "w":    
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.loop = false;
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.loop = false;
            tom2.play();
            break;
        
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.loop = false;
            tom2.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.loop = false;
            tom2.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.loop = false;
            tom2.play();
            break;

        case "k":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.loop = false;
            tom2.play();
            break;

        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.loop = false;
            tom2.play();
            break;

        default: console.log(buttonElement);
    }
    buttonAnimation(buttonElement);
} 

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}