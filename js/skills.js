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
           
			html+=`<h3>${v.name}</h3>`
			
		})
		$('#result').html(html)

	});
}
