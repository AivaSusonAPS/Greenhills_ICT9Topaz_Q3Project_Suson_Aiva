
// Computing for total fare

// Ordered list of MRT 3
const stationRoutes = [
    "North Avenue",
    "Quezon Avenue",
    "GMA Kamuning",
    "Araneta- Cubao",
    "Santolan- Annapolis",
    "Ortigas",
    "Shaw Blvd.",
    "Boni Avenue",
    "Guadalupe",
    "Buendia",
    "Ayala Maganalles",
    "Taft Avenue"
];

const trainDistances = [1.0, 1.0, 2.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0];

function computedDistance(pickup, destination) {
    let startIndex = stationRoutes.indexOf(pickup);
    let endIndex = stationRoutes.indexOf(destination);

    let distance = 0;
    for (let i = startIndex; i < endIndex; i++) {
        distance += trainDistances[i];
    }
    distance = Math.round(distance * 100) / 100; // round to 2 decimal places
return distance;
}

//calculate fare
    function calculateFare() {
let pickup = document.getElementById("mySelect").value.trim();
let destination = document.getElementById("mySelect2").value.trim();
let isDiscounted = document.getElementById("discount").checked;

// To check if the startIndex, endIndex, pick up and destinatio is being followed
    console.log("Pickup:", pickup, "Destination:", destination);
    console.log("Start index:", stationRoutes.indexOf(pickup));
    console.log("End index:", stationRoutes.indexOf(destination));

    if (pickup === "Select" || destination === "Select") {
        window.alert("Something went wrong. Please select both pickup and destination stations.");
        document.getElementById("result").innerHTML = "Total: ₱0.00";
        return;
    }

let totalDistance = computedDistance(pickup, destination);

    if (totalDistance === 0) {
        document.getElementById("result").innerHTML = "Total: ₱0.00";
   
        return;
    }

    const baseFare = 50; //min fare which include first 2KM
    const perKMrate = 15; //cost per KM beeyond 2KM
    const baseKM = 2; //distance included in the base

let totalFare;

// if total distance is below 2km or equal to it, totalFare will be = 50php
    if (totalDistance === 0) {
        totalFare = 0;
    }
    else if (totalDistance <= baseKM) {
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

