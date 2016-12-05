/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.newsC',['ionic']).config(['$stateProvider',function ($stateProvider){
    $stateProvider.state('tabs.news',{
        url:'/news',
        views:{
            'tabs-news':{
                templateUrl:'news.html',
                controller:'newsController'
            }
        }
    })
}]).controller('newsController',['$scope','$location','HttpFactory',function ($scope,$location,HttpFactory) {
    //导航条列表
    var url = 'http://c.m.163.com/nc/topicset/ios/subscribe/manage/listspecial.html ';
    HttpFactory.getData(url).then(function (result) {
        $scope.numArray1= result;
        // console.log(result);
    });
    //添加
    // var n;
    $scope.add1 = function () {
    // n++;
    var div = $('.header1');
        div.slideToggle('slow');
    // ( n % 2 == 0)? div.css({"display":"none"}):div.css({"display":"block"});
};
// $scope.numArray1=[];
    //轮播图
    $scope.news = {
        newsArray : '',
        newsListArray:[]
        // goToNewsSummary:goToNewsSummary
    };
    var url = "http://c.m.163.com/recommend/getSubDocPic?from=toutiao&offset=0&size=10";
    HttpFactory.getData(url).then(function (result) {
        $scope.news.newsArray = result;
        $scope.news.newsListArray = result[0].ads;
        // $scope.news.newsListArray.splice(0,1);
        // console.log($scope.news.newsListArray);
    });
    // function goToNewsSummary(index) {
    //     console.log('211111111');
    //     $location.path('/newsSummary/' + $scope.news.newsListArray[index].docid);
    // }

}]);