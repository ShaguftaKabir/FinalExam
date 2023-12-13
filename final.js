function show(
    var searchTerm= document.getElementById("searchBox").value;

    var url= `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${searchTerm}`;

    fetch (url)
    .then(res =. res.json())
    .then(data => display(data))
)
function display(data){
    var allData= data.coord;
    var oldContent= document.getElementById("content");
    oldContent.textContent= "";
    console.log(allData);
}

