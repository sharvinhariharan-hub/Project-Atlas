alert("Welcome to Atlas")




// ----------------
// start button
// ----------------


function hello(){

alert("Start planning clicked")

}





// ----------------
// budget calculator
// ----------------


function calculate(){


let hotel = Number(document.getElementById("hotel").value)

let food = Number(document.getElementById("food").value)

let travel = Number(document.getElementById("travel").value)

let days = Number(document.getElementById("days").value)



let total = (hotel + food + travel) * days



document.getElementById("result").innerHTML =

"Your trip needs around ₹" + total



}



// ----------------
// saved trips
// ----------------


let trips = []



if(localStorage.getItem("myTrips")){


trips = JSON.parse(localStorage.getItem("myTrips"))


}







function saveJapan(){

trips.push("Japan")

showTrips()

}



function saveFrance(){

trips.push("France")

showTrips()

}



function saveAustralia(){

trips.push("Australia")

showTrips()

}







function addMyTrip(){



let name = document.getElementById("tripName").value

let country = document.getElementById("countryName").value

let days = document.getElementById("tripDays").value




if(name==""){

alert("Enter trip name")

return

}



let trip = name+" - "+country+" - "+days+" days"



trips.push(trip)



showTrips()



document.getElementById("msg").innerHTML="Trip Added"



}




function showTrips(){



let box=document.getElementById("savedList")


box.innerHTML=""




for(let i=0;i<trips.length;i++){


box.innerHTML += "<li>"+trips[i]+"</li>"


}





localStorage.setItem(

"myTrips",

JSON.stringify(trips)

)





if(document.getElementById("tripCounter")){


document.getElementById("tripCounter").innerHTML=

"Total trips : "+trips.length


}



updateDashboard()


}





// ----------------
// packing
// ----------------



let packingStuff=[]



if(localStorage.getItem("packing")){


packingStuff = JSON.parse(localStorage.getItem("packing"))


}





function addItem(){



let item=document.getElementById("itemInput").value




if(item==""){

alert("Enter item")

return

}




packingStuff.push(item)



showItems()


document.getElementById("itemInput").value=""


}




function showItems(){



let list=document.getElementById("items")


list.innerHTML=""





for(let i=0;i<packingStuff.length;i++){



list.innerHTML +=

"<li>"+packingStuff[i]+

"<button onclick='removeItem("+i+")'>delete</button></li>"


}




localStorage.setItem(

"packing",

JSON.stringify(packingStuff)

)



}




function removeItem(i){


packingStuff.splice(i,1)


showItems()


}





// ----------------
// notes
// ----------------



function saveNote(){


let note=document.getElementById("noteBox").value


localStorage.setItem("note",note)


document.getElementById("savedNote").innerHTML=note


}



// ----------------
// activities
// ----------------



let activities=[]




function addActivity(){


let activity=document.getElementById("activityInput").value



if(activity==""){

alert("empty activity")

return

}



activities.push(activity)



showActivity()



document.getElementById("activityInput").value=""


}



function showActivity(){


let box=document.getElementById("activityList")


box.innerHTML=""



for(let i=0;i<activities.length;i++){



box.innerHTML+="<li>"+activities[i]+"</li>"


}



updateDashboard()


}





// ----------------
// weather
// ----------------


function weatherCheck(){


let place=document.getElementById("weatherPlace").value



if(place==""){


document.getElementById("weatherAnswer").innerHTML=

"Enter a place"


}


else{


document.getElementById("weatherAnswer").innerHTML=

place+" looks sunny today ☀️"


}


}




// ----------------
// difficulty
// ----------------



function checkLevel(){



let level=document.getElementById("level").value




if(level=="Easy"){

document.getElementById("levelText").innerHTML="Relax trip"

}



if(level=="Medium"){

document.getElementById("levelText").innerHTML="Normal adventure"

}



if(level=="Hard"){

document.getElementById("levelText").innerHTML="Big challenge"

}



}


// ----------------
// search
// ----------------


function searchPlace(){


let search=document.getElementById("searchInput").value


document.getElementById("searchResult").innerHTML=

"Showing results for "+search


}





// ----------------
// rating
// ----------------


function rateTrip(){



let rate=document.getElementById("rateNumber").value




if(rate>=8){

document.getElementById("ratingText").innerHTML="Amazing ⭐⭐⭐"

}


else if(rate>=5){

document.getElementById("ratingText").innerHTML="Good ⭐⭐"

}


else{

document.getElementById("ratingText").innerHTML="Could improve ⭐"

}


}

// ----------------
// dashboard
// ----------------


function updateDashboard(){



if(document.getElementById("dashTrips")){


document.getElementById("dashTrips").innerHTML=trips.length


}





if(document.getElementById("dashActivities")){


document.getElementById("dashActivities").innerHTML=activities.length


}



}




// ----------------
// dark mode
// ----------------


function darkMode(){


document.body.classList.toggle("dark")



if(document.body.classList.contains("dark")){


localStorage.setItem("dark","yes")


}


else{


localStorage.setItem("dark","no")


}


}










// ----------------
// summary
// ----------------


function makeSummary(){



document.getElementById("summary").innerHTML =


"Trips: "+trips.length+

"<br>Activities: "+activities.length+

"<br>Packing Items: "+packingStuff.length



}




// load old data


window.onload=function(){



showTrips()

showItems()

updateDashboard()



let note=localStorage.getItem("note")



if(note){


document.getElementById("savedNote").innerHTML=note


}





if(localStorage.getItem("dark")=="yes"){


document.body.classList.add("dark")


}



}