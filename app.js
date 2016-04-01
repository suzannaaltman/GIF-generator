$(function(){

  $("#getGIF").on("click", function(){
    $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").done(function(response){
      addGif(response);
    })
  })

  $("#tagSearch").on("submit", function(event){
    event.preventDefault();
    var getObject = $("#tagSearch").serializeArray();
    var keywordTag = getObject[0].value;
    $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + keywordTag).done(function(response){
      addGif(response);
    })
  })

function addGif(response){
  $("#imageHolder").empty();
  $("#imageHolder").append("<p><img src=\"" + response.data.image_url + "\" /></div>");
}

});
