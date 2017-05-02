var Pluies = [
	["https://media.giphy.com/media/ZJ6IOBmCaj5f2/giphy.gif","MATRIX"],
	["https://media.giphy.com/media/HkZ6bBjavyxDG/giphy.gif","TARZAN"],
	["https://media.giphy.com/media/OlQISBcbj6NO0/giphy.gif","LA FAMILLE ADDAMS"]
];

var Soleil = [
	["https://media.giphy.com/media/wg4HFmpDWK7m/giphy.gif","LES AVENTURIERS DE L&apos;ARCHE PERDUE"],
	["https://media.giphy.com/media/zkSFsZpQMZuG4/giphy.gif","LE ROI LION"],
	["https://media.giphy.com/media/TEAa6rnazO8y4/giphy.gif","LE LOUP DE WALL STREET"]
];

var Neiges = [
	["https://media.giphy.com/media/T7HXXwrcZ9IHu/giphy.gif","STAR WARS : EPISODE V - L&apos;EMPIRE CONTRE-ATTAQUE"],
	["https://media.giphy.com/media/D3Abm2Kb0d4xW/giphy.gif","DJANGO UNCHAINED"],
	["https://media.giphy.com/media/3oEduEFLgWS7Q8pC1O/giphy.gif","LES HUIT SALOPARDS"]
];

var Brumes = [
	["https://media.giphy.com/media/xpBiaXFbVUtTa/giphy.gif","HARRY POTTER ET LE PRISONNIER D&apos;AZKABAN"],
	["https://media.giphy.com/media/vBxtzaT6ejR7O/giphy.gif","STAR WARS - LE RÉVEIL DE LA FORCE"],
	["https://media.giphy.com/media/I3CFaupoxH4VG/giphy.gif","SEUL AU MONDE"]
];

var Brouillards = [
	["https://media.giphy.com/media/7gHHvk5Bmd95e/giphy.gif","HUNGER GAMES - L&apos;EMBRASEMENT"],
	["https://media.giphy.com/media/xoJTL7dupPZp6/giphy.gif","JURASSIC WORLD"],
	["https://media.giphy.com/media/ctEbsXykCmvOU/giphy.gif","S.O.S. FANTÔMES"]
];

var Orages = [
	["https://media.giphy.com/media/PUkc1nBeiekNy/giphy.gif","X-MEN: DAYS OF FUTURE PAST"],
	["https://media.giphy.com/media/raw0qiLVJNZpm/giphy.gif","LÀ-HAUT"],
	["https://media.giphy.com/media/wIJJiOh4LKPNm/giphy.gif","MAD MAX: FURY ROAD"]

];

var Nuages = [
	["https://media.giphy.com/media/xpBiaXFbVUtTa/giphy.gif","HARRY POTTER ET LE PRISONNIER D&apos;AZKABAN"],
	["https://media.giphy.com/media/vBxtzaT6ejR7O/giphy.gif","STAR WARS - LE RÉVEIL DE LA FORCE"],
	["https://media.giphy.com/media/I3CFaupoxH4VG/giphy.gif","SEUL AU MONDE"]
];

var Crachins = [
	["https://media.giphy.com/media/ZJ6IOBmCaj5f2/giphy.gif","MATRIX"],
	["https://media.giphy.com/media/HkZ6bBjavyxDG/giphy.gif","TARZAN"],
	["https://media.giphy.com/media/OlQISBcbj6NO0/giphy.gif","LA FAMILLE ADDAMS"]
];

function retrieveData(divlist) {

	$(".weather-data").append('<div class="weather-city">Aujourd\'hui à <span>'+ divlist.name_city +'</span>. </div>');
	$(".weather-data").append('<div class="weather-date"> Le '+ divlist.day +'-'+ divlist.month +'-'+ divlist.year +' à '+ divlist.hours + 'h'+ divlist.minutes +' </div>')
	$(".weather-data").append('<div class="weather-temp"> <div class="weather-temp-icon"></div> <br> <div class="weather-temp-text">'+ divlist.temp +'°C <br> <span>Température</span></div></div>');
	$(".weather-data").append('<div class="weather-name"> <div class="weather-name-icon"></div> <br> <div class="weather-name-text">'+ divlist.weather +' <br> <span>Météo</span></div></div>');
	$(".weather-data").append('<div class="weather-windspeed"> <div class="weather-windspeed-icon"></div> <br> <div class="weather-windspeed-text">'+ divlist.windspeed +' m/s <br> <span>Vitesse du vent</span> </div></div>');
	
	
		switch(divlist.weather) {
		case "Pluie":
			rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Pluies[rng][0] +"' alt='"+ Pluies[rng][1] +"'></img>");
		    break;
		case "Dégagé":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Soleil[rng][0] +"' alt='"+ Soleil[rng][1] +"'></img>");
		    break;
		case "Neige":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Neiges[rng][0] +"' alt='"+ Neiges[rng][1] +"'></img>");
		    break;
		case "Brume":
			rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Brumes[rng][0] +"' alt='"+ Brumes[rng][1] +"'></img>");				   
		    break;
		case "Brouillard":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Brouillards[rng][0] +"' alt='"+ Brouillards[rng][1] +"'></img>");
		    break;
		case "Orage":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Orages[rng][0] +"' alt='"+ Orages[rng][1] +"'></img>");
		    break;
		case "Nuageux":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Nuages[rng][0] +"' alt='"+ Nuages[rng][1] +"'></img>");
		    break;
		case "Crachins":
		    rng = Math.floor(Math.random() * (3 - 0)) + 0;
		    $(".weather-data").append("<img class='weather-gif' src='"+ Pluies[rng][0] +"' alt='"+ Pluies[rng][1] +"'></img>");
		    break;
	}

	$(".weather-data").append('<input id="input-movie" placeholder="Titre du film ? (Orthographe comme Allociné)" type="text" maxlength="50" name="title"> <button class="submit-btn"></button>');
 	$(".weather-data").append('<div class="button-new"> <p>Nouvelle recherche</p> <button class="new-query">+</button></div>')
}

$(document).ready(function() {

	$(".loader").hide();

	key = localStorage.key(0);

	if( key != undefined) {

		$(".select-country").hide();
		$(".weather-data").hide();
		var divlist = JSON.parse(localStorage.getItem(key));
		retrieveData(divlist);

		$('.weather-data .weather-gif').load(function(){
			$(".loader").fadeOut();
			$(".weather-data").fadeIn();
		});

	}else{
		$(".weather-data").hide();
		delete key;

	}

	$("main").on("mouseenter", ".new-query", function(){
		$(".button-new p").animate({
			opacity : 1,
    		marginRight: '0px'
		}, 300);
	});
	$("main").on("mouseleave", ".new-query", function(){
		$(".button-new p").animate({
			opacity : 0,
    		marginRight: '-=50px'
		}, 300);
	});
	$("main").on("click", ".new-query", function(){
		$(".weather-data").fadeOut();
		localStorage.clear();
		$(".weather-data").empty();
		$(".select-country").fadeIn();
	});


	$(".select-country input[name=city]").keyup(function (e) {
	    if (e.keyCode == 13) {
	    	$(".select-country button").click();
	    }
	});

	$(".select-country").on('click', 'button', function(){

		if( $("input[name=city]").val() == ""){

			swal("Veuillez entrer une réponse dans le champ correspondant", "", "error");

		} else {

			$(".select-country").fadeOut();

			$(".loader").fadeIn();

			localStorage.clear();

			$(".weather-data").empty();

			var city = $("input[name=city]").val();

			$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=0f5b22fadeb37f544bdc255a00008aea" , function( data ) {
		    	
		    	var list = {};

		    	list.weather = data.weather[0].main;

		    	switch(list.weather) {
					case "Rain":
					    list.weather = "Pluie";
					    break;
					case "Clear":
					    list.weather = "Dégagé";
					    break;
					case "Snow":
					    list.weather = "Neige";
					    break;
					case "Mist":
					    list.weather = "Brume";
					    break;
					case "Fog":
					    list.weather = "Brouillard";
					    break;
					case "Thunderstorm":
					    list.weather = "Orage";
					    break;
					case "Clouds":
					    list.weather = "Nuageux";
					    break;
					case "Drizzle":
					    list.weather = "Crachins";
					    break;
				}

		    	list.temp = data.main.temp;
		    	list.temp =  parseInt(list.temp, 10) - 273;
		    	list.windspeed = data.wind.speed;
		    	list.name_city = data.name;
		    	
		    	var d = new Date();
		    	list.day = d.getDate();
		    	if (list.day < 10) {
		    		list.day = "0" + list.day;
		    	}
		    	list.month = d.getMonth()+1;
		    	if (list.month < 10) {
		    		list.month = "0" + list.month;
		    	}
		    	list.year = d.getFullYear();
		    	list.hours = d.getHours();
		    	if (list.hours < 10) {
		    		list.hours = "0" + list.hours;
		    	}
		    	list.minutes = d.getMinutes();
		    	if (list.minutes < 10) {
		    		list.minutes = "0" + list.minutes;
		    	}

		    	if(typeof(Storage) !== "undefined") {

					// On passe la liste en local storage en la transformant en JSON
					localStorage.setItem("list", JSON.stringify(list));

					// on met l'objet json dans une variable
					var divlist = JSON.parse(localStorage.getItem("list"));

					retrieveData(divlist);

					$('.weather-data .weather-gif').load(function(){
						$(".loader").fadeOut();
						$(".weather-data").fadeIn();
					});
					

				} else {

				    alert("Votre navigateur ne peut pas utiliser le local storage");

				}

		  	});

		}

	});

	$("#input-movie").keyup(function (e) {
	    if (e.keyCode == 13) {
	    	$(".weather-data .submit-btn").click();
	    }
	});

	$('.weather-data').on("click",".submit-btn", function() {
		
		if( $("input[name=title]").val() == ""){
			swal("Veuillez entrer une réponse dans le champ correspondant", "", "error");
		}else{

			var response = $('input[name=title]').val();
			response = response.toUpperCase();

			var answer = $('.weather-gif').attr("alt");

			if( response == answer ){
				swal("Bonne réponse!", "", "success");
			}else{ 
				swal("Essaye encore!", "", "error");
			}
		}
	});
	
});