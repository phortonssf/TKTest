// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/* global angular*/
angular.module('starter', ['ionic', 'TKTestQuestions', 'starter.controllers', 'TKTestAnswers', 'chart.js', 'TKResultsButton', 
"RESTServices"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      /* global */
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      /* global cordova */
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      /* global StatusBar */
      StatusBar.styleDefault();
    }
  });
})

// Lobby View Template
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('lobby', {
    url: '/lobby',
    templateUrl: 'templates/lobby.html',
    controller: 'LobbyCtrl'
  })
  
  //Questions View Template
  .state('question', {
    url: '/question:questionID',
    templateUrl: 'templates/question.html',
    controller: 'QuestionsCtrl',
    resolve: {
      testInfo: function($stateParams, TKTestQuestionService) {
        return TKTestQuestionService.getQuestion($stateParams.questionID);
      }
    }})
    // Results View Template
    .state('results', {
      url: '/results',
      templateUrl: 'templates/results.html',
      controller: 'ResultsCtrl'
    })
    
    // History View Template
    .state('history', {
      url: '/history',
      templateUrl: 'templates/history.html',
      controller: 'HistoryCtrl',
      resolve: {
        tests: ['TKAnswersService', function(TKAnswersService) {
          return TKAnswersService.getTests();
      }]
    }
  })
    .state('landing',{
    url: '/',
    templateUrl: 'templates/landing.html',
    
    })
    .state('register',{
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: "RegisterCtrl"
    })
    .state('login',{
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: ""
    })
});

