// submit
function submit() {
    document.getElementById("rating").style.display = "none";
    document.getElementById("thankYou").style.display = "block";
}
// rating buttons
var one = document.getElementById("1");
    one.addEventListener("click", function(){
        var description = document.getElementsByClassName("ratingDescription");
        description[0].innerHTML = "You selected 1 out of 5";
    });
var two = document.getElementById("2");
    two.addEventListener("click", function(){
        var description = document.getElementsByClassName("ratingDescription");
        description[0].innerHTML = "You selected 2 out of 5";;
    });
var three = document.getElementById("3");
    three.addEventListener("click", function(){
        var description = document.getElementsByClassName("ratingDescription");
        description[0].innerHTML = "You selected 3 out of 5";;
    });
var four = document.getElementById("4");
    four.addEventListener("click", function(){
        var description = document.getElementsByClassName("ratingDescription");
        description[0].innerHTML = "You selected 4 out of 5";;
    });
    var five = document.getElementById("5");
    five.addEventListener("click", function(){
        var description = document.getElementsByClassName("ratingDescription");
        description[0].innerHTML = "You selected 5 out of 5";;
    });        
// submit button// 
var sumbitButton = document.getElementById("submit");
sumbitButton.addEventListener("click", submit);
