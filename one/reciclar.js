	console.log(items);
	console.log(items.length);
	
	  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );

	items[i]= "<li> <a href='"+json.cats[1][i]+"'>"+json.cats[0][i]+"</a></li>";