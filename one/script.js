var box = document.getElementById('box');
var container = document.getElementById('container');
var count = document.getElementById('count');
var image = document.getElementById('img')
var namescat = document.getElementById('namescat');

var array = box.getElementsByTagName('img');
var counters = [0,0,0,0,0];

var items = [];

jQuery.getJSON('data.json', function(json, textStatus) {
	$.each(json,function(index, el) {
		
		console.log(index);
		items.push(el);

	});
	for(var i=0;i<json.cats[0].length;i++){
		console.log(i);
 		$("body").append('<img>');
		array[i].alt = json.cats[0][i];
		array[i].src = json.cats[1][i];
	}
});

function ejecutar(e){

	for(i=0;i<array.length;i++){

		if(e.getAttribute("id")==array[i].getAttribute("id")){
			counters[i]++;
			image.src = e.src;
			count.innerHTML= counters[i];
			namescat.innerText = array[i].alt;
		}
	}	
}
