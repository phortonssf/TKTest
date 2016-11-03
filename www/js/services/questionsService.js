/* global angular */
angular.module('TKTestQuestions', [])
.service('TKTestQuestionService', ['$http', 'QuestionsRest', '$window', 
function ($http, QuestionsRest, $window){
    var service = this;
    var questions = [];
    service.all = function () {
        QuestionsRest.results($window.localStorage['token'])
        .then(function(response){
            if(response.status == 200)
            {
                questions = response.data;
            }
        });
    };

service.getQuestion = function(questionID)
{
        var results = [];
        questions.forEach(function(question){
            //Search for questions with the specified question ID
            if(question.Question_Number == questionID)
                results.push(question);
        });
        return results;
};
}]);