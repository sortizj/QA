var box = document.getElementById('box');
var container = document.getElementById('container');
var count = document.getElementById('count');
var image = document.getElementById('img')
var namescat = document.getElementById('namescat');


var counters = [];

var items = [];
var array = [];

jQuery.getJSON('data.json', function(json, textStatus) {
	$.each(json,function(index, el) {
		items.push(el);
	});
	
	for(var i=0;i<json.cats[0].length;i++){
 		$(".box").append('<img>');
 		counters.push(0);
	}
	array = box.getElementsByTagName('img');
	console.log(array);
	for(var i=0;i<array.length;i++){
		array[i].alt = json.cats[0][i];
		array[i].src = json.cats[1][i];
		array[i].id  = i;
		array[i].setAttribute('onclick', "ejecutar(this)");
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
