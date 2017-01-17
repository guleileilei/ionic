/**
 * Created by hxsd on 2016/12/21.
 */
angular.module("myapp")
    .controller("weatherCtrl",function($scope,$http,$ionicLoading,$state){
        var url="http://wthrcdn.etouch.cn/weather_mini?city=上海";
        $ionicLoading.show();
        $http.get(url)
            .success(function(data){
                $ionicLoading.hide();
               $scope.weather=data;
            })
            .error(function(){
               $ionicLoading.show({
                  template:"暂时无法获取数据",
                   duration:3000
               });
                $state.go("home")
            });
    });