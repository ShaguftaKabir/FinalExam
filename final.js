function show(){
    var searchTerm= document.getElementById("searchBox").value;
    var apiKey= '5393348a84e007a9a7bfe365a3f94e17'
    var url= `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`;

    fetch (url)
    .then(res => res.json())
    .then(data => display(data))
}
function display(data){
    var allData= data.;
    var oldContent= document.getElementById("content");
    oldContent.textContent= "";
    console.log(allData);

for(var i=0; i<allData.length; i++){
    var newDiv= document.createElement("div");
    newDiv.innerHTML= `Name: ${allData[i].name} <br>
                       Temperature: ${allData[i].temp} <br>
                       `;


    newDiv.classList.add("innerStyle");
    oldContent.appendChild(newDiv);
}
}


