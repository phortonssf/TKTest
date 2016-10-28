/* global angular */
angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', 'TKAnswersService','$state',
function($scope, TKTestQuestionService, TKAnswersService, $state) {
    TKTestQuestionService.all();
    $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
}]);