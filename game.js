confirm("Let's play bathroom break");
console.log("You are sitting in class and Calvin is on a long winded lecture on JS");
console.log("In the middle of this lecture you hear your stomach rumble, so do you leave your seat to make a pit stop?");
var userAnswer = prompt("You are sitting in class and Calvin is on a long winded lecture on JS and in the middle of this lecture you hear your stomach rumble ,do you race toward the bathroom?")
  if (userAnswer === "yes") {
  console.log("You find that the bathroom is occupied and you have to decide if you want to wait, do you wait?");
    var userAnswer = prompt("Do you want to wait?");
    if (userAnswer === "yes") {
    } else if (userAnswer ==='maybe') {
      alert("Your indecisiveness has cost you a pair of underroos!");
    } else {
      alert("You need to go home and change your superman undies!");
    }
    console.log("You wait for only a short bit and you find that there is no toilet paper.");
    //prompt with a 3 choices
    var options = prompt("Choose one of three options \n Choose Wisely!!!\n A. You don't wipe\n B. You use paper towels \n C. You use your hand");
    if (options === "A") {
    alert("You now have monkey butt!!");
    }
    if(options === "B") {
    alert("You have choosen wisely my friend!!");
    }
    if (options === "C") {
    alert("Please do not shake hands with anyone ever!!");
    }


} else if (userAnswer ==='maybe') {
  alert("Your indecisiveness has cost you a pair of underroos!");
} else {
  alert("You need to go home and change your superman undies!");
}
