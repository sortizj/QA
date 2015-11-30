var cat = document.getElementById('click');
var counts = document.getElementById('counts');

var cat2 = document.getElementById('click2');
var counts2 = document.getElementById('counts2');

var i=0;
var j=0;

cat.addEventListener('click',function(){
	i++;
	counts.innerHTML=i;
});

cat2.addEventListener('click',function(){
	j++;
	counts2.innerHTML = j;
});