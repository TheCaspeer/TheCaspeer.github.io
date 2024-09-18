// window.onload = function() {
//     setTimeout(function() {
//       window.location.href = "https://www.example.com";
//     }, 3000); // Redirect after 3 seconds
//   };

function getRandomIntInRange(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
window.onload = function() {
    textCycle()
}

function textCycle(){
    var text = ["Hello", "Hey", "Goodmorning", "Goodafternoon","Goodnight"]
    var i = 0;
    var textCycle = setInterval(function(){
        document.getElementById("loadpageHello").innerHTML = text[i];
        i++;
        if(i >= text.length){
            i = 0;
        }
    }, 1000);

}