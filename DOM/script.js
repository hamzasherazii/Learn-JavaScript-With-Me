var link1 = document.getElementById("link1");
console.log(link1.innerText);

document.getElementById("link1").textContent = "Click this!";
console.log(link1);

// ------------

document.getElementsByClassName("para1")[0].textContent = "first paragraph";

var myBtn = document.getElementById("link2");
myBtn.style.color = "green";

// -------------

// modifying html with javascript
document.querySelector(".para3").textContent = "Sherazi Hamza";

// modifying css with javascript
var myPara = document.getElementsByClassName("para3")[0];
myPara.style.color = "red";
myPara.style.backgroundColor = "yellow";
