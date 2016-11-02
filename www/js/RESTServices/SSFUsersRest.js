angular.module("RESTServices", [])
    .service('SSFUsersRest', ['$http', '$window',
        function($http,$window) {
            var SSFUsersRest = this;
            SSFUsersRest.post = function(newUserData) {
                return $http({
                    url: "https://tktestbackend-phortonssf.c9users.io:8080/api/SSFUsers",
                    method: "POST",
                    data: newUserData
                });
            };
          SSFUsersRest.login = function(UserData) {
                return $http({
                    url: "https://tktestbackend-phortonssf.c9users.io:8080/api/SSFUsers/login",
                    method: "POST",
                    data: UserData
                });
            };
            SSFUsersRest.logout = function(){
                return $http({
                    headers: {
                        Authorization: $window.localStorage.token
                    },
                    url: "https://tktestbackend-phortonssf.c9users.io:8080/api/SSFUsers/logout",
                    method: "POST",
                    
                    

                });
            }
        }
        
    ]);