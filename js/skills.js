// python -m SimpleHTTPServer 8000

var url="skills.json"
function makeAjaxRequest(){
	$.get(url, function(data){
		var html=''
		$.each(data.skills,function(key,v){
			html+=`<h1>${v.name}</h1>`
			html+=`<p>${v.description}</p>`
		})
		$('#result').html(html)

	});
}
$(document).ready(function(){
	makeAjaxRequest();
})