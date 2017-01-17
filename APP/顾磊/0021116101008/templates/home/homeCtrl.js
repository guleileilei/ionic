/**
 * Created by 顾 磊 on 2016/12/21.
 */
angular.module("myapp")
    .controller("homeCtrl", function ($scope) {
        $scope.home =
        {
            count: 30,
            Percentage: "98%",
            time: 5, ranking: 200
        };

        $scope.home1 =
        {
            count: 8765,
            Percentage: "63%",
            time: 5, ranking: 20
        };


    });