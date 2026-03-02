
// Computing for total fare

//const is needed bc the stations and distances is fixed i shoultndt be replaced or whatev
// Ordered list of MRT 3
const stationRoutes = [
    "North Avenue", // startindex 0, endindex 12
    "Quezon Avenue", // startindex 1, endindex 11
    "GMA Kamuning", // startindex 2, endindex 10
    "Araneta- Cubao", // startindex 3, endindex 9
    "Santolan- Annapolis", // startindex 4, endindex 8
    "Ortigas", // startindex 5, endindex 7
    "Shaw Blvd.", // startindex 6, endindex 6 
    "Boni Avenue", // startindex 7, endindex 5
    "Guadalupe", // startindex 8, endindex 4
    "Buendia", // startindex 9, endindex 3
    "Ayala", // startindex 10, endindex 2
    "Maganalles", // startindex 11, endindex 1
    "Taft Avenue" // startindex 12, endindex 0
];

const trainDistances = [1.0, 1.0, 2.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0];

//Getting total distance of pick up to destination by getting all distances that the pickup(startindex) to destination(endindex) will cover 
function computedDistance(pickup, destination) {
    let startIndex = stationRoutes.indexOf(pickup);
    let endIndex = stationRoutes.indexOf(destination);

// adds a loop that if user is planning to pass, for example, 3 stations, the loop will add the 3 distances. "i < endIndex" means the "i" should not be higher or equals to destinatio(endIndex) since thats your stop
    let distance = 0;
    for (let i = startIndex; i < endIndex; i++) {
        distance += trainDistances[i];
    }
    distance = Math.round(distance * 100) / 100; // round to 2 decimal places
return distance;
}

//calculate fare
    function calculateFare() {
let pickup = document.getElementById("mySelect").value.trim(); //trims extra spaces to make my <select> exact
let destination = document.getElementById("mySelect2").value.trim();
let isDiscounted = document.getElementById("discount").checked;

// To check if the startIndex, endIndex, pick up and destinatio is being followed
    console.log("Pickup:", pickup, "Destination:", destination);
    console.log("Start index:", stationRoutes.indexOf(pickup));
    console.log("End index:", stationRoutes.indexOf(destination));

// If you choose select for both options, it will trigger window.alert
    if (pickup === "Select" || destination === "Select") {
        window.alert("Something went wrong. Please select both pickup and destination stations.");
        document.getElementById("result").innerHTML = "Total: ₱0.00";
        return;
    }

let totalDistance = computedDistance(pickup, destination);

    if (totalDistance === 0) {
        document.getElementById("result").innerHTML = "Total: ₱0.00"; // if the pick up and destination is the same, the total will appear as 0 instead of 50php or smth
   
        return; // it stops computing. Basically, if this is removed the if statement above will continue to get the totalFare
    }

    const baseFare = 50; //min fare which include first 2KM
    const perKMrate = 15; //cost per KM beeyond 2KM
    const baseKM = 2; //distance included in the base

let totalFare;

// whatever i just said above
    if (totalDistance === 0) {
        totalFare = 0;
    }
    else if (totalDistance <= baseKM) {  // if total distance is below 2km or equal to it, totalFare will be = 50php
        	totalFare = baseFare;
    }
    else{
            totalFare = baseFare + (totalDistance - baseKM) * perKMrate;
    }

    if (isDiscounted) totalFare *= 0.80;

    document.getElementById("result").innerHTML = "Total: ₱" + totalFare.toFixed(2);
}
// Source:
// https://www.w3schools.com/JS/js_if_else.asp
// https://www.w3schools.com/js/js_loop_for.asp

function goToConfirmation() {
    window.location.href = "confirmation.html";

}




