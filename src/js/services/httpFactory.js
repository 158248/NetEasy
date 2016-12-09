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