$(function() {
  $('#favourite-repos').hide()
  bindFavouriteBtn();
  callRepos("https://api.github.com/users/fatimaberazi/repos?sort=pushed&per_page=5")
})
function bindFavouriteBtn(){
  $('#favourite-btn').on('click',function(){
    console.log(this)
    //$('#favourite-repos').attr("visibility", "visible");
    $('#favourite-repos').show()
  })
}
function callRepos(url){

  $("#current-btn").on('click',function(){
    $('#repos').html(null)
    $.get(url, function(data){

      $.each(data,function(key,v){

        var date=new Date(v.created_at);

        $('#repos').append(`<li><a href="${v.html_url}">${v.name} ${date}</li>`)

      })
    });
  });

}
// $('#result').append('<a href='+`${itm['html_url']}`+'>'+`${itm['name']}`+'</a><br/><br>'+`${itm['created_at']}`);


// function formatDate(date) {
//   var hours = date.getHours();
//   var monthIndex = date.getMonth();
//   var minutes = date.getMinutes();
//     var monthNames = [
//     "January", "February", "March",
//     "April", "May", "June", "July",
//     "August", "September", "October",
//     "November", "December"
//   ];
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0'+minutes : minutes;
//   var strTime = hours + ':' + minutes + ' ' + ampm;
//   return  date.getDate() + "/" + monthNames[monthIndex] + "/" + date.getFullYear() + "   Time: " + strTime;

// }

