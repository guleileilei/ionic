/**
 * Created by 顾 磊 on 2016/12/25.
 */
angular.module("myapp")
    .controller("dekaronCtrl",function($scope,$http, $ionicScrollDelegate){
        $scope.items=[
            {title:"挑战活动亲近大自然",desc:"距离结束还有3天",imgsrc:"images/t1.png"},
            {title:"挑战活动感受大海",desc:"距离结束还有4天",imgsrc:"images/t2.png"},
            {title:"挑战活动自行车爬坡",desc:"距离结束还有5天",imgsrc:"images/t3.png"}

        ];
        // 实现下拉刷新
        $scope.doRefresh = function () {
            // 向服务器端请求新数据，替换现有的数据
            $http.get("data.json")
                .success(function(data){
                    // 使用请求回来的新数据替换掉原来的数据
                    $scope.items = data;
                })
                .finally(function(){
                    // 通知框架，下拉刷新已结束，隐藏下拉刷新图标
                    $scope.$broadcast("scroll.refreshComplete");
                });
        };
        $scope.top = function(){
            $ionicScrollDelegate.scrollTop(true);   // 使用动画
        };
    });