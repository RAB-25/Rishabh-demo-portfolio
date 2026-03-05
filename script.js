
function addBenefit() {

    var input = document.getElementById("benefit-input");
    var text = input.value.trim();

    if (text === "") {
        alert("Please type something before clicking Add.");
        return;
    }

    var newItem = document.createElement("li");

    newItem.textContent = text + " ";

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "del-btn";

    deleteBtn.onclick = function () {
        deleteItem(deleteBtn);
    };

    newItem.appendChild(deleteBtn);

    document.getElementById("benefits-list").appendChild(newItem);

    input.value = "";
    input.focus();
}

document.getElementById("benefit-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addBenefit();
    }
});


function deleteItem(button) {
    
    var listItem = button.parentElement;
    listItem.remove();
}



document.getElementById("contact-form").addEventListener("submit", function (e) {

    e.preventDefault();

    var name = document.getElementById("user-name").value.trim();

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    this.reset();
});


var days   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

function showDateTime() {

    var now = new Date();

    
    var dayName = days[now.getDay()];
    var date    = now.getDate();
    var month   = months[now.getMonth()];
    var year    = now.getFullYear();

    var hours   = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");

    var formatted = dayName + ", " + date + " " + month + " " + year
                    + ", " + hours + ":" + minutes + ":" + seconds;

   
    document.getElementById("footer-time").textContent = formatted;
}


showDateTime();

setInterval(showDateTime, 1000);
