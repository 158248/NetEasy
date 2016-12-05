/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.mainC',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.main',{
        url:'/main',
        views:{
            'tabs-main':{
                templateUrl:'main.html'
            }
        }
    });
}]);