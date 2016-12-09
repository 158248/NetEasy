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
}]).controller('direct-seedingController',['$scope','HttpFactory',function ($scope,HttpFactory) {
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


    $scope.news = {
        newsListArray:[]
    };
    var url = 'http://data.live.126.net/livechannel/previewlist.json';
    HttpFactory.getData(url).then(function (result) {


        $scope.news.newsListArray = result.top;
        $scope.videos = result.live_review;
        $scope.headerArray = result.sublives;
        $scope.animas = result.future;
        console.log(result.future);



    });

}]);