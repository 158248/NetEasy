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