/*/global angular/
angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', 'SSFUsersRest', '$http', '$state', '$window',
        function($scope, SSFUsersRest, $http, $state, $window) {
            
            $scope.user = {};
            
            $scope.signupForm = function(form) {
                //if form missing required fields, alert user
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                
                SSFUsersRest.post($scope.user)
                .then(function(response) {
                    //store id/token to local storage
                    $window.localStorage.userId = response.data.id;
                    $window.localStorage.token = response.data.token;

                    //data is null, alert user
                    if (response.data === null) {
                        return alert("User is Offline");
                    }   //if successful register, redirect to lobby
                    else if (response.status === 200) {
                        $scope.user = {};
                        $state.go('lobby');
                    }
                }, 
                //alerts for error response
                function(error) {
                    if (error.status === 404) {
                        return alert("Not Found!");
                    }
                    else if (error.status === 422) {
                        return alert("Email Is Already Taken");
                    }
                    else if (error.status === 500) {
                        return alert("The World Has Ended!/n or Maybe The Server Is Offline...");
                    }
                        
                });
            };
            
        }
        
    ]);
    
    */
    
   /*global angular*/
angular.module('starter.controllers')
    .controller('RegisterCtrl', ['$scope', 'SSFUsersRest', '$http', '$state', '$window', '$ionicHistory',
        function($scope, SSFUsersRest, $http, $state, $window, $ionicHistory) {
            
            $scope.user = {};
            
            $scope.signupForm = function(form) {
                //if form missing required fields, alert user
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                
                SSFUsersRest.post($scope.user)
                .then(function(response) {
                    //store id/token to local storage
                    $window.localStorage.userId = response.data.id;
                    $window.localStorage.token = response.data.token;


                    //data is null, alert user
                    if (response.data === null) {
                        return alert("User is Offline");
                    }   //if successful register, redirect to lobby
                    else if (response.status === 200) {
                        $scope.user = {};
                        $ionicHistory.nextViewOptions({
                        disableBack: true,
                        historyRoot: true
    });
                        $state.go('lobby');
                    }
                }, 
                //alerts for error response
                function(error) {
                    if (error.status === 404) {
                        return alert("Not Found!");
                    }
                    else if (error.status === 422) {
                        return alert("Email Is Already Taken");
                    }
                    else if (error.status === 500) {
                        return alert("The World Has Ended!/n or Maybe The Server Is Offline...");
                    }
                        
                });
            };
            
        }
        
    ]);