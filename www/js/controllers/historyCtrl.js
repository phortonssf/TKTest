/*global angular*/
angular.module('starter.controllers')
// "tests" will hold all the previous test the user has taken.
.controller('HistoryCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService', 'TKResultsButtonService',
function($scope, $window, $state, tests, TKAnswersService, TKResultsButtonService) {
    /* Since it is possible that tests is undefined, we need to make sure this doesn't affect the lists. 
    / This is the ternary operator. If tests is undefined, we initialize $scope.tests with an empty array,
    otherwise, assign tests. */
    $scope.tests = tests === undefined ? [] : tests;
    
    // Display lists functions is triggered by clicking on result in list
    $scope.goToResult = function(test)
    {
        var answers = {
            "competing": test.competing,
            "collaborating": test.collaborating,
            "compromising": test.compromising,
            "avoiding": test.avoiding,
            "accommodating": test.accommodating
        };
        /*global TKResultsButtonService*/
        TKAnswersService.setAnswers(answers);
        TKResultsButtonService.setShouldShowMenuButton(false);
        
        $state.go('results');
        /*The test object is passed to the function and it is used to initialize an object that will be then 
        be passed to the setAnswers function, to properly display the correct graph. */
    };
}]);