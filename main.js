javascript:(function(){
let choiceBox = confirm("Press ok for a custom color and cancle to invert colors");
if (choiceBox){
let colorString = prompt("Write the name of a color", "black");
if (colorString == null || colorString == "") return;
else{
colorString.toLowerCase();
document.body.style.background = colorString.toString();
return;
}
} else {}
let invertChoice = confirm("Invert the colors?");
if (invertChoice){
document.getElementsByTagName("html")[0].style.filter = "invert()";
if (typeof elementos === 'undefined') {let elementos = []}
elementos = document.querySelectorAll(" a, img, video");
for(let i = 0; i < elementos.length; i++){
if ((elementos[i].nodeName == "A" && (elementos[i].style.background != "" || elementos[i].style.backgroundImage != "")) || elementos[i].nodeName != "A"){
elementos[i].style.filter = "invert()";
}
}
}
})();
