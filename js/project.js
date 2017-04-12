var isShown=false;
$(function() {
  $('#favourite-repos').hide()
  bindFavouriteBtn();
  callRepos("https://api.github.com/users/fatimaberazi/repos?sort=pushed&per_page=5")
})
function bindFavouriteBtn(){
  $('#favourite-btn').on('click',function(){
    console.log(this)
    $('#favourite-repos').slideToggle()
  })
}
function callRepos(url){

  $("#current-btn").on('click',function(){
    $('#repos').html(null)
    $.get(url, function(data){

      $.each(data,function(key,v){

        var date=new Date(v.created_at);

        $('#repos').append(`☯ <a href="${v.html_url}">${v.name} <br><br>`)

      })
      isShown ? $('#repos').hide('slow') : $('#repos').show('slow')
      isShown = !isShown
    });
  });

}
// ${date}
