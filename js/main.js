// Default location (area code or city, state – in quotes)
var lc = "Foxborough, MA";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html =  '<main>';
    html += '<section class="topbar">';
    html += '<div class="left">';
    html += '<img src="img/gdw2.svg" alt="GDW Logo">';
    html += '</div>';
    html += '<div class="right">';
    html += '<h3 class="wdata123">'+weather.city+','+weather.region+'</h3>';
    html += '</div>';
    html += '</section>';

	html += '<section class="weathermain">';
    html += '<div class="left">';
    html += '<i class="icon icon-'+weather.code+'"></i>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h1 class="wdata4">'+weather.temp+'<span>&deg;</span></h1>';
    html += '<h3 class="wdata5">'+weather.currently+'</h3>';
    html += '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
    html += '<p class="wdata6">'+weather.high+' &deg; |</p>';
    html += '<i class="fa fa-arrow-down" aria-hidden="true"></i>';
    html += '<p class="wdata7">'+weather.low+' &deg;</p>';
    html += '<h2 class="wdata8"> <span>Humidity</span> '+weather.humidity+'&deg;</h2>';
    html += '</div>';
    html += '</section>';

	html += '<section class="windinfo">';
    html += '<div class="left">';
    html += '<h2 class="wdata910">'+weather.wind.speed+' MPH , <span>'+weather.wind.direction+'</span><h2>';
    html += '<h3 class="wdata11"><span>Wind Chill</span> '+weather.wind.chill+'&deg;</h3>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h4><i class="fa fa-flag" aria-hidden="true"></i></h4>';
    html += '</div>';
    html += '</section>';

    html += '<section class="bottom">';
    html += '<div class="left">';
    html += '<i class="fa fa-binoculars" aria-hidden="true"></i>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h3 class="wdata12"><span>Visibility</span> '+weather.visibility+'</h3>';
    html += '</div>';
    html += '</section>';
    html += '</main>';






	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

