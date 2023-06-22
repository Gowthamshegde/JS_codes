
var arr=document.querySelectorAll("button")
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
        var char=this.innerHTML
        
        switch (char) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            
            case "j":
                debugger
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("snare.mp3");
                audio.play();
                break;
            default:
                break;
        }
    })
}

// var key=(document.addEventListener("keypress",function(event){ return (event.key);})); 
// console.log(key);
var key =document.addEventListener("keypress",function(event){ 
    var char1=event.key
    switch (char1) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            debugger
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
});
