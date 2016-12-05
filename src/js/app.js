/**
 * Created by Administrator on 2016/11/30.
 */
angular.module('myApp',['ionic','myApp.Factory','myApp.slideBox','myApp.newsC','myApp.loginC','myApp.direct-seedingC','myApp.searchC','myApp.topic','myApp.mainC']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');
    $stateProvider.state('tabs',{
        url:'/tabs',
        abstract:true,
        templateUrl:'tabs.html'
    });
    $urlRouterProvider.otherwise('tabs/news')
}]);