angular.module("RESTServices")
.service('TestResultsRest', [ '$http', '$window',
  function($http, $window){
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
            //Filters results to match userID
           url: "https://tktestbackend-phortonssf.c9users.io:8080/api/TestResults?filter[where][userID]=" + $window.localStorage.userId,
           method: 'GET' 
       });
   };
   
  }
]);