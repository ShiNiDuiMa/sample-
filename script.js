let d = 4;
let b = 5;
let c = d + b;
console.log(c);

const a = "hello";
// alert("hello");

//confirm("do you want to continue?");
let e = prompt("what's your name");
console.log(e);

const headings = document.getElementsByClassName("heading");
//console.log(headings);

const heading1 = document.getElementById("h11");
console.log(heading1);

const heading = document.querySelector("#id");

const body = document.querySelector("body");
body.append("ahihi");

const newDiv = document.createElement("div");
const bold = document.createElement("b");
bold.innerText = "hellooo";

newDiv.append(bold);
body.append(newDiv);

const para = document.getElementById("h12");
para.remove();

const para1 = document.getElementById("h13");
para1.setAttribute("onclick", alert("hello"));

para1.style.backgroundColor = "pink";

function getPrice(id) {
    switch (id) {
        case "1":
        return 150;
        break;
        case "2":
        return 200;
        break;
        case "3":
        return 300;
        break;
    }
}

let tour = document.getElementById("tour"),
price = document.getElementById("price");

price.textContent = ${getPrice(tour[tour.selectedIndex].value)}$/Person;
tour.addEventListener("change", ()=> {
    let value = ${getPrice(tour[tour.selectedIndex].value)}$/Person;
    price.textContent = ${value};
});

let totalprice = document.getElementById("totalprice"),
number = document.getElementById('number');

function totaltheprice() {
    totalprice.textContent = Total Money: ${getPrice(tour[tour.selectedIndex].value) * number.value}$;
}