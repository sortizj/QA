var box = document.getElementById('box');
var container = document.getElementById('container');
var count = document.getElementById('count');
var image = document.getElementById('img')
var namescat = document.getElementById('namescat');

var array = box.getElementsByTagName('img');
var counters = [0,0,0,0,0];
var names = ["cat1","cat2","cat3","cat4", "cat5"];

function ejecutar(e){

	for(i=0;i<array.length;i++){

		if(e.getAttribute("id")==array[i].getAttribute("id")){
			counters[i]++;
			image.src = e.src;
			count.innerHTML= counters[i];
			namescat.innerText = names[i];
		}
	}	
}
