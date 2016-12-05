/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.topic',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.topic',{
        url:'/topic',
        views:{
            'tabs-topic':{
                templateUrl:'topic.html',
                controller:'topicController'
            }
        }
    });
}]).controller('topicController',['$scope',function ($scope) {
    $scope.liveTopStyle1 = {
        'color':'black'
    };
    $scope.changeTopStyle1 = function () {
        $scope.liveTopStyle1 = {
            'color':'black'
        };
        $scope.liveTopStyle2 = {
            'color':'white'
        };
        $scope.liveTopStyle3 = {
            'color':'white'
        };
    };
    $scope.changeTopStyle2 = function () {
        $scope.liveTopStyle1 = {
            'color':'white'
        };
        $scope.liveTopStyle2 = {
            'color':'black'
        };
        $scope.liveTopStyle3 = {
            'color':'white'
        };
    };
    $scope.changeTopStyle3 = function () {
        $scope.liveTopStyle1 = {
            'color':'white'
        };
        $scope.liveTopStyle2 = {
            'color':'white'
        };
        $scope.liveTopStyle3 = {
            'color':'black'
        };
    };
}]);