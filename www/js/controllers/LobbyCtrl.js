/* global angular */
angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', 'TKAnswersService','$state', '$window',
'SSFUsersRest', '$location', '$ionicHistory', 

function($scope, TKTestQuestionService, TKAnswersService, $state, $window, SSFUsersRest, $location, $ionicHistory) {
    TKTestQuestionService.all();
    // Changes state to question view on button click in lobby html
    $scope.goToTest = function(){
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
   $scope.history = function(){
       $location.path('/history');
   };
   $scope.logout = function(){
        SSFUsersRest.logout()   
        .then(function(response){
           if (response.status === 204) {
            //Clears local data
            $window.localStorage.clear();
            //navigate to default state
            $state.go('landing');
               
           }
       })
    }
    $ionicHistory.nextViewOptions({
       disableBack: true,
       historyRoot: true
        
});
}]);