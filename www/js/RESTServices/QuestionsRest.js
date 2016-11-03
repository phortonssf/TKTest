angular.module("RESTServices")
.service('QuestionsRest', ['$http',
    function($http ) {
            var QuestionsRest = this;
            QuestionsRest.results = function(token) {
                return $http({
                    headers: {
                        Authorization: token
                    },
                    url: "https://tktestbackend-phortonssf.c9users.io:8080/api/Questions",
                    method: "GET"
                });
            };
    }
]);