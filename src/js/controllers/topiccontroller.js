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
}]).controller('topicController',['$scope','HttpFactory',function ($scope,HttpFactory) {
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
    //列表
    var url = 'http://c.m.163.com/newstopic/list/classification.html';
    HttpFactory.getData(url).then(function (result) {
        $scope.listIteams = result.data;
        console.log($scope.listIteams);
    });
    var n = 0;
    $scope.show1 = function () {
        n++;
        (n%2==0)?$(".card").css({'height':'85px'}):$(".card").css({'height':'308px'});
        (n%2==0)?$("#down").css({'margin-top':'-168px'}):$("#down").css({'margin-top':'55px'});
        (n%2==0)?$("#down").attr("class","ion-ios-arrow-down"):$("#down").attr("class","ion-ios-arrow-up");
    }
}]);