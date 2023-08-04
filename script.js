let bikeCross = document.getElementById("bikeCross")
let bikeCrossNumber = document.getElementById("bikeCrossNumber")

let bikeRoad = document.getElementById("bikeRoad")
let bikeRoadNumber = document.getElementById("bikeRoadNumber")

let bikeChild = document.getElementById("bikeChild")
let bikeChildNumber = document.getElementById("bikeChildNumber")

let bikeGravel = document.getElementById("bikeGravel")
let bikeGravelNumber = document.getElementById("bikeGravelNumber")

let days = document.getElementById("days")

let holderRoof = document.getElementById("holderRoof")
let holderRear = document.getElementById("holderRear")

let calculate = document.getElementById("calculate")
let priceBox = document.getElementById("priceBox")

let budget = document.getElementById("budget")
let message = document.getElementById("message")


calculate.addEventListener("click", function(){
    let price = 0;

    if(bikeCross.checked === true){
        price = price + bikeCrossNumber.value * bikeCross.value
    }
    
    if(bikeRoad.checked === true){
        price = price + bikeRoadNumber.value * bikeRoad.value
    }

    if(bikeChild.checked === true){
        price = price + bikeChildNumber.value * bikeChild.value
    }

    if(bikeGravel.checked === true){
        price = price + bikeGravelNumber.value * bikeGravel.value
    }

    price = price * days.value

    if(holderRoof.checked === true){
        price = price * 1.05
    }

    if(holderRear.checked === true){
        price = price * 1.1
    }


    priceBox.value = price


    if(budget.value >= price && budget.value != ""){
        message.value = "Rozpočet je dostačující"
    } else if (budget.value === ""){
        message.value = ""
    } else {
        message.value = "Nízký rozpočet"
    }
})

let send = document.getElementById("send");
let email = document.getElementById("email")

email.addEventListener("change", function(){
  if (email.value != /\S+@\S+\.\S+/) send.removeAttribute("disabled")
});
