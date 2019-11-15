$('#taskform > input[type=submit]').click(function(event) {
    event.preventDefault();
    
    let filename = $('#taskform > input[type=text]').val();
    let url = `http://${window.location.hostname}/${filename}`;
    console.log(`url = ${url}`);
    $.ajax({
	dataType: "json",
	url: url,
	data: {},
	success: function(data, statusText) {
	    alert('Все хорошо!');
	},
	error: function(xhr, statusText, error) {
	    $( "#alertmessage" ).dialog({
		resizable: false,
		height: "auto",
		width: 400,
		modal: true,
		buttons: {
		    Ok: function() {
			$( this ).dialog( "close" );
		    },
		    Cancel: function() {
			$( this ).dialog( "close" );
		    }
		}
	    });
	}
    });    

});
