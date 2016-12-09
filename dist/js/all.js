/**
 * Created by Administrator on 2016/11/30.
 */
angular.module('myApp',['ionic','myApp.Factory','myApp.slideBox','myApp.newsC','myApp.loginC','myApp.direct-seedingC','myApp.searchC','myApp.topic','myApp.mainC','myApp.newsDate']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
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

/**
 * Created by Administrator on 2016/12/6.
 */
angular.module('myApp.newsDate',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('newsDate',{
        url:'/newsDate',
        templateUrl:'newsDate.html',
        controller:'newsDateC',
        params:{'data':null}
    })
}]).controller('newsDateC',['$scope','$stateParams','HttpFactory',function ($scope,$stateParams,HttpFactory) {
    $scope.newsData = {
            detail:'',
            body:''
        };
        var docid = $stateParams.data;
        console.log(docid);
        var url = 'http://c.m.163.com/nc/article/'+docid+'/full.html';
            HttpFactory.getData(url).then(function (result) {
                $scope.newsData.detail = result[docid];
                console.log($scope.newsData.detail);
                var newsObj = $scope.newsData.detail;
                if (newsObj.img && newsObj.img.length){
                    for (var i = 0;i< newsObj.img.length;i++){
                        var imgWidth = newsObj.img[i].pixel.split('*')[0];
                        if (imgWidth > document.body.offsetWidth){
                            imgWidth = document.body.offsetWidth;
                        }
                        var imgStyle = 'width:' + imgWidth + 'px';
                        var imgStr = "<img" + " style='" + imgStyle + "'" + " src=" + newsObj.img[i].src + ">";
                        newsObj.body = newsObj.body.replace(newsObj.img[i].ref,imgStr);
                        console.log(newsObj.body);
                    }
                };
            });

}]);
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
/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.slideBox',[]).directive('mgSlideBox',[function () {
    return {
        restrict: "E",
        scope: {sourceArray: '='},
        templateUrl: 'slideBox.html',
        controller: ['$scope', '$state', '$ionicSlideBoxDelegate', '$element', function ($scope, $state, $ionicSlideBoxDelegate, $element) {
            $scope.goToDetailView = function (index) {
                console.log('进入详情页' + index);
            };
            var lastSpan = $element[0].lastChild;
            $scope.$watch('sourceArray', function (newVal, oldVal) {
                if (newVal && newVal.length) {
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();
                    $scope.ishowSlideBox = true;
                    lastSpan.innerText = ($scope.sourceArray[0]).title;
                    $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                    $scope.drag = function (event) {
                      $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                        // console.log('拖拽轮播图')
                        event.stopPropagation();
                    };

                    $scope.slideHasChanged = function (index) {
                        lastSpan.innerText = $scope.sourceArray[index].title;
                    }
                }
            });
            $scope.imgsrc = 'http://cms-bucket.nosdn.127.net/ef7bc579fd1640848da7313a9906549720161205111721.jpeg';
        }],
        replace: true
    };
}]);
/**
 * Created by Administrator on 2016/12/3.
 */
angular.module('myApp.Factory',['ionic']).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,type) {
            if (url){
                var promise = $q.defer();
                url = 'http://localhost:3000/?myUrl=' + encodeURIComponent(url);
                type = type ? type:"GET";
                $http({
                    url:url,
                    method:type,
                    timeout:20000
                }).then(function (result) {
                    result = result.data;
                    // console.log(result)
                    // result = result[Object.keys(result)[0]];
                    // console.log(result)
                    promise.resolve(result);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    }
}]);