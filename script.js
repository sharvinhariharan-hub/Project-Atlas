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

let trips = []



let oldData = localStorage.getItem("myTrips")



if(oldData != null){


trips = JSON.parse(oldData)


showTrips()


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









function showTrips(){


let area = document.getElementById("savedList")


area.innerHTML = ""





for(let i=0;i<trips.length;i++){



area.innerHTML += 

"<li>" + trips[i] + "</li>"



}





document.getElementById("tripCounter").innerHTML =

"Total trips : " + trips.length





localStorage.setItem(
"myTrips",
JSON.stringify(trips)
)



}




localStorage.setItem(
"myTrips",
JSON.stringify(trips)
)





function addMyTrip(){



let name = document.getElementById("tripName").value


let country = document.getElementById("countryName").value


let days = document.getElementById("tripDays").value






if(name == ""){


alert("write trip name")

return


}





let fullTrip = name + " - " + country + " - " + days + " days"




trips.push(fullTrip)



showTrips()





document.getElementById("msg").innerHTML =
"Added " + name






document.getElementById("tripName").value=""

document.getElementById("countryName").value=""

document.getElementById("tripDays").value=""




}


let packingStuff = []





function addItem(){



let thing = document.getElementById("itemInput").value




if(thing==""){


alert("enter something")

return


}




packingStuff.push(thing)




showItems()



document.getElementById("itemInput").value=""



}









function showItems(){



let list = document.getElementById("items")


list.innerHTML=""




for(let x=0;x<packingStuff.length;x++){



list.innerHTML += 

"<li>" 
+ packingStuff[x] 
+ 
" <button onclick='removeItem("+x+")'>delete</button></li>"



}



}









function removeItem(number){



packingStuff.splice(number,1)



showItems()



}










function saveNote(){



let note = document.getElementById("noteBox").value





document.getElementById("savedNote").innerHTML = note




localStorage.setItem("note",note)




}










let oldNote = localStorage.getItem("note")



if(oldNote != null){



document.getElementById("savedNote").innerHTML = oldNote



}

let activities = []





function addActivity(){


let a = document.getElementById("activityInput").value



if(a==""){


alert("empty activity")


return


}




activities.push(a)



showActivity()



}








function showActivity(){



let box = document.getElementById("activityList")


box.innerHTML=""




for(let i=0;i<activities.length;i++){



box.innerHTML += "<li>"+activities[i]+"</li>"



}




}









function weatherCheck(){



let place = document.getElementById("weatherPlace").value





if(place==""){


document.getElementById("weatherAnswer").innerHTML=
"Enter place first"



}else{



document.getElementById("weatherAnswer").innerHTML=

place + " looks sunny today ☀️"



}



}










function checkLevel(){



let value = document.getElementById("level").value




if(value=="Easy"){


document.getElementById("levelText").innerHTML =
"Relax trip"


}





if(value=="Medium"){



document.getElementById("levelText").innerHTML =
"Normal adventure"



}






if(value=="Hard"){



document.getElementById("levelText").innerHTML =
"Be ready for challenge"



}





}

function darkMode(){



document.body.classList.toggle("dark")



}







// small fix because activity input was not clearing


let oldAdd = addActivity



addActivity=function(){


let a = document.getElementById("activityInput").value



if(a==""){


alert("empty activity")


return


}





activities.push(a)


showActivity()



document.getElementById("activityInput").value=""


}

function updateDashboard(){



document.getElementById("dashTrips").innerHTML =
trips.length



document.getElementById("dashActivities").innerHTML =
activities.length



}









function searchPlace(){



let search = document.getElementById("searchInput").value





if(search==""){



document.getElementById("searchResult").innerHTML =
"Nothing searched"



return


}





document.getElementById("searchResult").innerHTML =

"Showing results for " + search



}









function rateTrip(){



let rating = document.getElementById("rateNumber").value





if(rating>=8){


document.getElementById("ratingText").innerHTML =
"Amazing trip ⭐⭐⭐"


}





else if(rating>=5){


document.getElementById("ratingText").innerHTML =
"Good trip ⭐⭐"


}




else{


document.getElementById("ratingText").innerHTML =
"Could improve ⭐"


}




}




// adding dashboard update into old functions badly


let oldShowTrips = showTrips



showTrips=function(){



oldShowTrips()



updateDashboard()



}







let oldActivityShow = showActivity



showActivity=function(){



oldActivityShow()



updateDashboard()



} 

function makeSummary(){



let text = ""





text += "Trips planned: " + trips.length

text += "<br>"


text += "Activities: " + activities.length

text += "<br>"


text += "Packing items: " + packingStuff.length







document.getElementById("summary").innt




}










// save packing list finally



function savePacking(){



localStorage.setItem(

"packing",

JSON.stringify(packingStuff)

)


}







let oldPackingData = localStorage.getItem("packing")



if(oldPackingData != null){



packingStuff = JSON.parse(oldPackingData)


showItems()



}









let oldItemFunction = addItem




addItem=function(){



oldItemFunction()



savePacking()



}









let oldRemove = removeItem



removeItem=function(number){



oldRemove(number)



savePacking()



}









// remember dark mode


let darkSaved = localStorage.getItem("dark")




if(darkSaved=="yes"){



document.body.classList.add("dark")



}







let oldDark = darkMode




darkMode=function(){



oldDark()



if(document.body.classList.contains("dark")){


localStorage.setItem("dark","yes")


}


else{


localStorage.setItem("dark","no")


}



} 