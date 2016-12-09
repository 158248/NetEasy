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