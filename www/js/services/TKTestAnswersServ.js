/* global angular*/
angular.module('TKTestAnswers',[])
.service('TKAnswersService',['$window', function ($window) {
    var service = this;
    var answerCategories = {
        "competing": 0,
        "collaborating": 0,
        "compromising": 0,
        "avoiding": 0,
        "accommodating": 0
    };
    var categoriesStack = [];
   
    service.getAnswers = function() {
        return answerCategories;
    };
   
    service.saveAnswer = function(answerCategory) {
        answerCategories[answerCategory.toLowerCase()]++;
        categoriesStack.push(answerCategory);
    };
   
    service.resetAnswers = function() {
        for (var property in answerCategories) {
            if (answerCategories.hasOwnProperty(property)) {
                answerCategories[property] = 0;
            }
        }
    };
   
    service.eraseLastAnswer = function() {
        answerCategories[categoriesStack.pop().toLowerCase()]--;
    };
   
    service.saveTest = function(test) {
        var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
        tempTests.push(test);
        $window.localStorage.tests = JSON.stringify(tempTests);
    };
}]);