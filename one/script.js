var cat = document.getElementById('click');
var counts = document.getElementById('counts');
var i=0;
cat.addEventListener('click',function(){
	i++;
	counts.innerHTML=i;
});