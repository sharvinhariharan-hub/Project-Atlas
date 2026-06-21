alert("welcome to atlas")




function hello(){

alert("start planning clicked")

}






function calculate(){


let a = document.getElementById("hotel").value

let b = document.getElementById("food").value

let c = document.getElementById("travel").value

let d = document.getElementById("days").value




// convert text into numbers

a = Number(a)

b = Number(b)

c = Number(c)

d = Number(d)





let total = a + b + c


let final = total * d




document.getElementById("result").innerHTML = 
"Your trip needs around ₹" + final




}