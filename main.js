javascript:(function(){
    let choiceBox = confirm("Use hex or string (ok for string, cancle for RGB)");
    if (choiceBox){
        let colorString = prompt("Write the name of a color", "black");
        if (colorString == null || colorString == "") return;
        else{
            colorString.toLowerCase();
            document.body.style.background = colorString.toString();
            return;
        }
    } else {
        var R = parseInt(prompt("Enter Red Value"));
        var G = parseInt(prompt("Enter Green Value"));
        var B = parseInt(prompt("Enter Blue Value"));
        document.body.style.background = 'rgb(' + R + ',' + G + ',' + B + ')';
    }
})();
