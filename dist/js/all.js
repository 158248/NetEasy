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
}]).controller('direct-seedingController',['$scope',function ($scope) {
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
}]).controller('topicController',['$scope',function ($scope) {
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
angular.module('myApp.searchC',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.search',{
        url:'/search',
        views:{
            'tabs-search':{
                templateUrl:'search.html'
            }
        }
    });
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
                    $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();
                    lastSpan.innerText = ($scope.sourceArray[0]).title;
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
                    result = result[Object.keys(result)[0]];
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