/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.newsC',['ionic']).controller('newsController',['$scope','$http','$ionicSlideBoxDelegate',function ($scope,$http,$ionicSlideBoxDelegate) {
   var numArray ;
    $scope.numArray = ['头条','要闻','娱乐','体育','图片','军事','趣闻'];

}]);