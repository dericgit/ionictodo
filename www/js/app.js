// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
.controller('MyCtrl', ['$scope', function($scope){
        $scope.groups = [];
        for ( var i = 0; i < 10; i++){
            $scope.groups[i] = {
                name: i,
                items: []
            };
            for ( var j = 0; j < 3; j++){
                $scope.groups[i].items.push(i+'-'+j);
            }
        }

        $scope.toggleGroup = function(group){
            if ( $scope.isGroupShown(group) ){
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };

        $scope.isGroupShown = function(group){
            return $scope.shownGroup === group;
        };
    }])