	console.log(items);
	console.log(items.length);
	
	  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );