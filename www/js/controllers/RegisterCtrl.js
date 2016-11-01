angular.module('starter.controllers')
.controller('RegisterCtrl',["$scope", "$stateParams", "$state", "SSFUsersRest",
    function($scope, $stateParams, $state, SSFUsersRest){
        $scope.user ={};
        $scope.signupForm = function(form) {
            if(form.$invalid) return alert("Please complete the form before proceeding.");
        };
        SSFUsersRest.post();
    }
]);