var num = Math.ceil(Math.random() * 100);
var count = 1;
console.log(num);

function check() {
    var usernum = parseInt(document.getElementById("n1").value);
    if (!isNaN(usernum)) {
        if (usernum == num) {
            document.getElementById("res").textContent = "Your guess is Correct! ";
        } else if (usernum > num) {
            document.getElementById("res").textContent = "Your number is too high!";
        } else {
            document.getElementById("res").textContent = "Your number is too low!";
        }
        document.getElementById("trail").textContent = count;
        count++;
        
    } else {
        document.getElementById("res").textContent = "Please enter a valid number!";
    }
}
