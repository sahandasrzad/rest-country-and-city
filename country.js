$("#name").keyup(function(e){
	if(e.which==13){
		$("#submit").click();
	}
});


$("#submit").click(function(){
$("#contentBox").html("");			$(".resultBar").css({"opacity":"1","transform":"scale(1)"});
	var country = $("#name").val();
    var url = "https://restcountries.eu/rest/v2/name/" + country;
    


	$.getJSON(url,function(val){

		for(var i = 0 ; i < val.length ; i++){
			var name = val[i].name;
			var topLevelDomain = val[i].topLevelDomain;
			var callingCodes ="callingcode-> " + val[i].callingCodes[0];
			var capital = val[i].capital;
			var region = val[i].region;
			var population = val[i].population;
			var latlng = val[i].latlng[0] + " , " + val[i].latlng[1];
			var area = val[i].area + " km sq.";
			var nativeName = val[i].nativeName;
			var currencies = val[i].currencies[0].symbol;
			var language = val[i].languages[0].nativeName;
			var flag = val[i].flag;			
			console.log(name);		
            $("#contentBox").append("<div class='tile'><div class='flag'><img src='" + flag + "'></div>" + 
            "<div class='name'>" + name + "</div><div class='other'>| " + capital + " | " + region + " | " + latlng + " | " + language + " |</div><div class='info'><div class='flexItem pop'>" + population + "</div><div class='flexItem area'>" + area + "</div><div class='flexItem curr'>" + currencies + "</div></div><br><div class='ticker'><div class='domain'>Top Level Domain -> " + topLevelDomain + "</div><div class='callId'>+" + callingCodes + "</div></div>");
		
		}	
    });

    $('#submit').click(function(){

    var country = $("#name").val(); 
    if(country != ''){
    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather?q=' + country + "&units=metric"+
      "&APPID=06850beda270f9b2dfe3e481a696950f",
      type: "GET", 
      dataType:"jsonp",
      success: function(data){  
            var widget = show(data);
            $("#show").html(widget);
            $("#country").val('');
         }
    });

    
    }else{
      $("#errror").html('feild cannot be empty');
    }
    });

    function show(data){
      // console.log(data.weather[0].icon);
      // var iconcode = data.weather[0].icon;
      // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      // $('#wicon').attr('src', iconurl);
     
    
      return '<img src=http://openweathermap.org/img/w/' + data.weather[0].icon + '.png>'+
       "<h3><strong>weather</strong>: "+ data.weather[0].main +"<h3>"+
      "<h3><strong>temprature</strong>: "+ data.main.temp +"<h3>"+
      "<h3><strong>windspeed</strong>: "+ data.wind.speed +"<h3>"+
      "<h3><strong>humidity</strong>: "+ data.main.humidity +"<h3>"+
      "<h3><strong>weather</strong>: "+ data.weather[0].description +"<h3>";
    }
    
});






