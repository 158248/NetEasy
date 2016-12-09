/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.searchC',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.search',{
        url:'/search',
        views:{
            'tabs-news':{
                templateUrl:'search.html'
            }
        }
    });
}]);