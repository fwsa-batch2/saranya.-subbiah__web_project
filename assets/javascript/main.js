let customername = [];
function PageOnLoad() {
    event.preventDefault();
    let buses = JSON.parse(localStorage.getItem("source and destination"));
    if (buses != null) {
      list = buses;
    }
}
 
function travelAgency() {
    event.preventDefault();
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let date = document.getElementById("date").value;
    let seats = document.getElementById("seats").value;
    
    let customeropinion= {
        "source": source,
        "destination": destination,
        "start": start,
        "end": end,
        "date": date,
        "seats": seats
    }

    customername.push(customeropinion);
    let check = JSON.stringify(customername)
    localStorage.setItem("source and destination", check);
}
