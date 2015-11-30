var box = document.getElementById('box');
var container = document.getElementById('container');
var count = document.getElementById('count');
var image = document.getElementById('img')

var array = box.getElementsByTagName('img');
var counters = [0,0,0,0,0];


function ejecutar(e){

	for(i=0;i<array.length;i++){

		if(e.getAttribute("id")==array[i].getAttribute("id")){
			counters[i]++;
			image.src = e.src;
			count.innerHTML= counters[i];
		}
	}	
}
