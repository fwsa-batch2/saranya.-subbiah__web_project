let bus = "";

function PageOnLoad() {
    const busInlist = JSON.parse(localStorage.getItem("source and destination"))
    if (busInlist !== null) {
        bus = busInlist;
    }
console.log(busInlist);
}

let busDetails = JSON.parse(localStorage.getItem("source and destination"));
console.log(busDetails);
for (let i of busDetails) {
    let placeofsource = i.source;
    console.log(placeofsource)
    let placeofdestination = i.destination;
    let timeofstart = i.start;
    let timeofend = i.end;
    let dateoftravel = i.date;
    let numberofseats = i.seats;
    bus +=
   ` <div class="buslist">
    <p class="busdetails" style="color: #021826"> Source : <span class="sourcespan" style="color: whitesmoke">${placeofsource}</span></p>
    <p class="busdetails" style="color: #021826"> Destination :<span class="destinationspan" style="color: whitesmoke">${placeofdestination}</span></p>
    <p class="busdetails" style="color: #021826"> Start :<span class="startspan" style="color: whitesmoke">${timeofstart}</span></p>
    <p class="busdetails" style="color: #021826"> End :<span class="endspan" style="color: whitesmoke">${timeofend}</span></p>
    <p class="busdetails" style="color: #021826"> Date :<span class="datespan" style="color: whitesmoke">${dateoftravel}</span></p>
    <p class="busdetails" style="color: #021826"> No. Of Seats :<span class="seatspan" style="color: whitesmoke">${numberofseats}</span></p>
    <a href="../pages/booking.html">
        <input type="submit" id="BK" value="Book Tickets">
        </a>
    <hr>
</div>`

}

let div = document.getElementById("buslisting");
div.innerHTML = bus;
PageOnLoad();