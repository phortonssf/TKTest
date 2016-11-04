angular.module("RESTServices")
.service('TestResultsRest', [ '$http',
  function($http){
      var TestResultsRest = this;
   //Sends and saves all test results to server
   TestResultsRest.save = function(token, test) {
       return $http({
            headers:{
                 Authorization: token
            },
           url: "https://tktestbackend-phortonssf.c9users.io:8080/api/TestResults",
           method: 'POST',
           data: test
       });
   };
   //Gets all test restults from server
   TestResultsRest.getAll = function(token) {
       return $http({
           headers:{
                 Authorization: token
            },
           url: "https://tktestbackend-phortonssf.c9users.io:8080/api/TestResults",
           method: 'GET'
       });
   };
   
  }
]);