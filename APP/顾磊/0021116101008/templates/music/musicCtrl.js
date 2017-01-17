/**
 * Created by 顾 磊 on 2016/12/25.
 */
angular.module("myapp")
    .controller("musicCtrl",function($scope){
        $scope.myMusics=[
            {Serial:"#1", radio:"radios/1.mp3",musicName:"Brother Louie"},
            {Serial:"#2", radio:"radios/1001.mp3",musicName:"1001夜"},
            {Serial:"#3", radio:"radios/loveyou.mp3",musicName:"喜欢你"},
            {Serial:"#4", radio:"radios/timedisplay.mp3",musicName:"时间都去哪了"}
        ]

    });