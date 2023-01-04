xhttp.onload = function (){
    var data = JSON.parse(this.responseText);
    var ls = data.list;
    for (var i=0;i<ls.length;i++){
      var li_html=`<div class="col-3">
              <div class="card" ">
                  <h5 class="text-tt">${ls[i].dt_txt}</h5>
                  <h2>${ls[i].main.temp}<sup>o</sup>C</h2>
                  <h6>${ls[i].weather[0].description}</h6>
                  <img src="http://openweathermap.org/img/wn/${ls[i].weather[0].icon}@2x.png"/
  >
              </div>`;
      var ds = document.getElementById("ls");
      ds.innerHTML +=li_html;
    }
  }
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
  xhttp.open("get", url, true);
  xhttp.send();