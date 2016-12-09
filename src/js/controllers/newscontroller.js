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
}]).controller('newsController',['$scope','$location','$state','$ionicViewSwitcher','$ionicScrollDelegate','$ionicSlideBoxDelegate','HttpFactory',function ($scope,$location,$state,$ionicViewSwitcher,$ionicScrollDelegate,$ionicSlideBoxDelegate,HttpFactory) {
    //导航条列表
    var url = 'http://c.m.163.com/nc/topicset/ios/subscribe/manage/listspecial.html';
    HttpFactory.getData(url).then(function (result) {
        $scope.numArray1= result.tList;
        console.log($scope.numArray1);
        $scope.top1 =function (index) {

            console.log($scope.numArray1[index].tid);
            var id = $scope.numArray1[index].tid;
            // var index =0;
            // $scope.news = {
            //     newsListArray1:[]
            //     // goToNewsSummary:goToNewsSummary
            // };
            // var url = "http://c.m.163.com/recommend/getSubDocPic?tid="+id+"&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";
            // HttpFactory.getData(url).then(function (result) {
            //     // $scope.news.newsArray = result;
            //     // $scope.news.newsArray.splice(0,1);
            //
            //     $scope.news.newsListArray1 = result.T1348647909107[index].ads;
            //     console.log(result);
            //     // $scope.news.newsListArray.splice(0,1);
            //     // console.log($scope.news.newsListArray);
            // });
            //
            //
            //
            // $scope.items1 = [];
            // $scope.isShowInfinite = true;
            //
            // $scope.loadMore = function () {
            //     index =1;
            //     index += 10;
            //     var url = "http://c.m.163.com/recommend/getSubDocPic?tid="+id+"&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";
            //
            //     HttpFactory.getData(url).then(function (result) {
            //         // console.log(1);
            //         $scope.items1 = $scope.items1.concat(result.T1348647909107);
            //         // $scope.items.splice(0,1);
            //
            //         // console.log($scope.items[1].interest);
            //         if (index >= 40){
            //             $scope.isShowInfinite = false;
            //             console.log("到底了！");
            //         }
            //         $scope.$broadcast('scroll.infiniteScrollComplete');
            //
            //     });
            // };
            // $scope.doRefresh = function () {
            //     // index = 1;
            //     var url = "http://c.m.163.com/recommend/getSubDocPic?tid=T1348647909107&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";
            //     HttpFactory.getData(url).then(function (result) {
            //         $scope.items1 = result.T1348647909107;
            //         // $scope.isShowInfinite = true;
            //         $scope.$broadcast('scroll.refreshComplete');
            //
            //     });
            // };
            // $scope.scrollTop1 = function() {
            //     $ionicScrollDelegate.scrollTop();
            // };
        };
    });

    //添加
    // var n;
    $scope.add1 = function () {
    // n++;
    //     console.log(12222222)
    var div = $('.header1');
        div.slideToggle('slow');
    // ( n % 2 == 0)? div.css({"display":"none"}):div.css({"display":"block"});
};
// $scope.numArray1=[];
    //轮播图
   var index =0;
    $scope.news = {
        newsArray : '',
        newsListArray:[]
        // goToNewsSummary:goToNewsSummary
    };
    var url = "http://c.m.163.com/recommend/getSubDocPic?tid=T1348647909107&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";
    HttpFactory.getData(url).then(function (result) {
        // $scope.news.newsArray = result;
        // $scope.news.newsArray.splice(0,1);

        $scope.news.newsListArray = result.T1348647909107[0].ads;
        // console.log($scope.news.newsArray);
        // $scope.news.newsListArray.splice(0,1);
        // console.log($scope.news.newsListArray);
    });



    $scope.items = [];
    $scope.isShowInfinite = true;

    $scope.loadMore = function () {
        index =1;
        index += 10;
        var url = "http://c.m.163.com/recommend/getSubDocPic?tid=T1348647909107&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";

        HttpFactory.getData(url).then(function (result) {
            // console.log(1);
            $scope.items = $scope.items.concat(result.T1348647909107);
            // $scope.items.splice(0,1);

            // console.log($scope.items[1].interest);
            if (index >= 40){
                $scope.isShowInfinite = false;
                console.log("到底了！");
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');

        });
    };
    $scope.doRefresh = function () {
        // index = 1;
        var url = "http://c.m.163.com/recommend/getSubDocPic?tid=T1348647909107&from=toutiao&offset=" + index + "&size=10&fn=1&prog=LMA1&passport=&devId=eW7qcXmjWleAjCxp25EgTBBywawDoVwZiZ9SMikG4cGiOa69wsn%2FdeHaaNGRMr2hIIGNeE0nI41SFrBIaL1THA%3D%3D&lat=DJEPdRawaRYCJZwF3SQobA%3D%3D&lon=7J7OmyytD8SqP0pSV1cJJA%3D%3D";
        HttpFactory.getData(url).then(function (result) {
            $scope.items = result.T1348647909107;
            // $scope.isShowInfinite = true;
            $scope.$broadcast('scroll.refreshComplete');

        });
    };
    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };
//     //详情
    $scope.detail = function (index) {

        var wh = $scope.items[index].docid;
        $state.go('newsDate',{data:wh});
        // console.log(wh)
        $ionicViewSwitcher.nextDirection("forward");
        // console.log(123313212)
    };
    $scope.dragOpenSlide = function () {
        //滑动content的时候能滑动页面
        $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(true);
    };
    $scope.slideChanged = function (index) {
        // console.log(index);
        //滑动页面完毕关闭底层mainSlideBox的滑动
        // $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
        //     console.log(1213123)
        // $scope.news = {
        //     newsArray : '',
        //     newsListArray:[]
        //     // goToNewsSummary:goToNewsSummary
        // };
// 调试滚动请求
    //     switch (index){
    //         case 0:console.log(11111111111);
    //          break;
    //         case 1:
    //             console.log(22222);
    //             break;
    //
    //         default:console.log(66666666);
    //             break;
    //     }
    };
    // 下一页


}]);
