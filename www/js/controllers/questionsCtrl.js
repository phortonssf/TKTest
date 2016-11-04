/* global angular */
angular.module('starter.controllers')
.controller('QuestionsCtrl',['$scope', '$stateParams', 'testInfo', 'TKAnswersService', '$state', '$ionicHistory','TKResultsButtonService', 
'$window',
function($scope, $stateParams, testInfo, TKAnswersService, $state, $ionicHistory, TKResultsButtonService, $window) {
    $scope.ptorQuestionGoA = 'ptor-question-go-a' + $stateParams.questionID;
    $scope.ptorQuestionGoB = 'ptor-question-go-b' + $stateParams.questionID;
    $scope.ptorQuestionTextA = 'ptor-question-text-a' + $stateParams.questionID;
    $scope.ptorQuestionTextB = 'ptor-question-text-b' + $stateParams.questionID;
    $scope.qNumber = $stateParams.questionID;
    
    //testInfo will hold the pair of questions to display.
    /* Here we iterate over the questions, gotten in the "resolve" step, and assign 
each question to a $scope variable. With this assignment, the html page will render correctly.*/
    testInfo.forEach(function(infoDict) {
     if(infoDict.Answer_ID === "A")
          $scope.questionA = infoDict;
     if(infoDict.Answer_ID === "B")
          $scope.questionB = infoDict;
    });
   
   /*This is the action that triggers whenever button A or B is clicked.
   The characters A or B are passed to the function */
  $scope.buttonClicked = function ( option ) {
        var category = $scope["question" + option].Style;
        TKAnswersService.saveAnswer(category);
       
        if($scope.qNumber == 30) {
           performRequest();
        }
        else {
          var nextqNumber = Number($scope.qNumber) + 1;
          $state.go('question', {questionID: nextqNumber
              
          });
        }
    };
    /* This is the custom action that will trigger when we click the back button. We
    need to check if we are not in the beginning, otherwise, there would be an error. 
    If it's  not the first question, then we call the "eraseLastAnswer" method to effectively 
    erase our last answer. In either case, we call goBack() in $ionicHistory to return to the previous page.*/
    $scope.goBack = function() {
      if($scope.qNumber >1)
        TKAnswersService.eraseLastAnswer();
      $ionicHistory.goBack();
    };
 
 //Is invoked when questions == 30
 function performRequest() {
    var answersDict = angular.copy(TKAnswersService.getAnswers());
    var date = new Date();
    answersDict["createDate"] = date.toUTCString();
    answersDict["userID"] = $window.localStorage.userId;
    TKAnswersService.saveTest(answersDict, $window.localStorage.token);
   
    
    $ionicHistory.nextViewOptions({
         historyRoot: true
    });
    
    TKResultsButtonService.setShouldShowMenuButton(true);
    $ionicHistory.nextViewOptions({
         historyRoot: true
    });
    $state.go('results');
}
}]);


