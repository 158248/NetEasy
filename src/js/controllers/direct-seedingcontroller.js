/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.direct-seedingC',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.direct-seeding',{
        url:'/direct-seeding',
        views:{
            'tabs-direct-seeding':{
                templateUrl:'direct-seeding.html',
                controller:"direct-seedingController"
            }
        }
    });
}]).controller('direct-seedingController',['$scope',function ($scope) {
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