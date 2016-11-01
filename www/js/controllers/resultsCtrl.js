angular.module('starter.controllers')
.controller('ResultsCtrl', ['$scope', 'TKAnswersService', '$ionicHistory', '$state', 'TKResultsButtonService',
// to retrieve the answers for the questions and $ionicHistory to take care of the back button.
    function($scope, TKAnswersService, $ionicHistory, $state, TKResultsButtonService) {
        
        $scope.shouldShowButton = TKResultsButtonService.getShouldShowMenuButton();
        // Retrieve Data from TKAnswersService
        var answersInfo = TKAnswersService.getAnswers();
        // Define the labels as an array of strings
        $scope.labels = ["Competing", "Collaborating", "Compromising", "Avoiding", "Accommodating"];
        // Create array by calling the returnPercentage function for each category.
        $scope.data = [[returnPercentage(answersInfo["competing"]), returnPercentage(answersInfo["collaborating"]),
            returnPercentage(answersInfo["compromising"]), returnPercentage(answersInfo["avoiding"]), returnPercentage(answersInfo["accommodating"])]];
       // Chart Options
        $scope.options = {
            scaleIntegersOnly: true,
            animation: true,
            responsive:true,
            maintainAspectRatio: false,
            scaleOverride: true,
            scaleSteps: 4,
            scaleStepWidth: 25,
            scaleStartValue: 0,
            scaleLabel: "<%=value%>"+"%",
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value.toFixed(0) %>"+"%",
        };
        //Chart Colors
        $scope.colours = [{
           fillColor: "rgba(151,187,205,0.2)",
           strokeColor: "rgba(15,187,25,1)",
           pointColor: "rgba(15,187,25,1)",
           pointStrokeColor: "#fff",
           pointHighlightFill: "#fff",
           pointHighlightStroke: "rgba(151,187,205,0.8)"
        }];
        
        //  show the information as a percentage,  maximum value an user can obtain for a category is twelve.
        function returnPercentage (value){
            return (value/12)*100;
        }
        
        // This is the action for the button in the nav bar
        $scope.menuButtonTapped = function(){
            $ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true
        });
            $state.go('lobby');
        }; 
}]);