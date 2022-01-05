let customerdetails= [];

function Papanasam() {
    let getvalue = localStorage.getItem("bus");
    let parse = JSON.parse(getvalue);

    console.log(parse);
    let value = "";
    for (let r=0; r<parse.length; r++){
        console.log(r);

        let create = "<h3 style='font-size: large; color:brown;' id='firstValue'>"+parse[r].busname+"</h3><h3 style='font-size: large; color:brown;' id='time'>"+parse[r].buslist+"</h3><h3 style='font-size: large; color:brown;' id='busname'>Selvam Travels</h3><h3 style='font-size: large; color:brown;' id='seats'> Non-AC Seater/Sleeper (2+1)</h3><h3 style='font-size: large; color:brown;' id='facip[;p'lities'>On Time</h3>"

        value= value+create;
    }

    document.getElementById("creat").innerHTML = value;
}

Papanasam();