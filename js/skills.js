var url="skills.json"

// python -m SimpleHTTPServer 8000
$(document).ready(function(){
	makeAjaxRequest();
})

function makeAjaxRequest(){
	console.log(url)
	$.get(url, function(data){
		console.log(data)
		var html=''
		$.each(data.skills,function(key,v){
           
			html+=`<div class='col-md-4'><h4>${v.name}</h4>
			        <p>${v.description}</p></div>`
			
		})
		$('#result').html(html)

	});
}
