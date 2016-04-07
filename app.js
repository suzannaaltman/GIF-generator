var app = angular.module('gifGenerator', []);

app.controller('showGif', function($scope, $http){
  $scope.getGif = function(){
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").then(function(response){
      $scope.gif = response.data.data.image_url;
      console.log(response);
    })
  }

  $scope.searchGif = function(){
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + $scope.keyword).then(function(response){
      $scope.gif = response.data.data.image_url;
      $scope.keyword = '';
      console.log(response);
    })
  }
})
