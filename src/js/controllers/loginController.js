/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.loginC',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.login',{
        url:'/login',
        views:{
            'tabs-main':{
                templateUrl:"login.html",
                controller:'loginController'
            }
        }

    })
}]).controller('loginController',['$scope',function ($scope) {

}]);