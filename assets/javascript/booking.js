const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectplace = document.getElementById("bus");

populateUI();
 
let ticketPrice = +selectplace.value;

function setBusData(busIndex, busPrice) {
    localStorage.setItem("selectedbusIndex", busIndex);
    localStorage.setItem("selectedbusPrice", busPrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row.seat.selected");

    const seatsIndex = [...selectedSeats].map(function(seat) {
        return[...seats].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedseats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, Index) => {
            if (selectedSeats.indexOf(Index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
    const selectedbusIndex = localStorage.getItem("selectedbusIndex"); 
    
    if (selectedbusIndex != null) {
        busSelect.selectedIndex = selectedbusIndex;
    }
}

selectplace.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setBusData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
    }
    updateSelectedCount();
});

updateSelectedCount();