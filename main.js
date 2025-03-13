var map = L.map('map').setView([50.6751568996643, 7.161392967579368], 14);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

var point = 0;

function button_press() {
    if (point == 0){
        XML = new XMLHttpRequest();
        XML.open("GET", "http://localhost:5000/getQuestion", true);
        XML.onreadystatechange = function() {
            if (XML.readyState == 4 && XML.status == 200) {
                document.getElementById("text").innerHTML = XML.responseText;
            }
            point = 1;
        };
        XML.send();
    } else if (point == 1){
        XML = new XMLHttpRequest();
        XML.open("POST", "http://localhost:5000/compareResult", true);
        XML.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        params = {"guess": document.getElementById("input").value};


        XML.onreadystatechange = function() {
            if (XML.readyState == 4 && XML.status == 200) {
                if (XML.responseText == "True"){
                    document.getElementById("text").innerHTML = "Correct!";
                }
                else {
                    document.getElementById("text").innerHTML = "Incorrect!";
                }
            }
        };         
        XML.send(JSON.stringify(params));
    }
}