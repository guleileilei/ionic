/**
 * Created by 顾 磊 on 2016/12/25.
 */
angular.module("myapp")
    .controller("rankingCtrl",function($scope){
        $scope.items=[
              {name:"Joshson",addres:"上海",desc:"NO.1", imgsrc:"images/touxiang1.png"},
              {name:"mai",addres:"上海",desc:"NO.2", imgsrc:"images/t2.png"},
              {name:"sid",addres:"上海",desc:"NO.3", imgsrc:"images/t3.png"},
              {name:"Joshson",addres:"上海",desc:"NO.4", imgsrc:"images/tiao1.png"},
              {name:"Joshson",addres:"上海",desc:"NO.5", imgsrc:"images/tiao2.png"},
              {name:"Joshson",addres:"上海",desc:"NO.6", imgsrc:"images/lv1@2x.png"},
              {name:"Joshson",addres:"上海",desc:"NO.7", imgsrc:"images/t1.png"},
              {name:"Joshson",addres:"上海",desc:"NO.8", imgsrc:"images/t5.jpg"},
              {name:"Joshson",addres:"上海",desc:"NO.9", imgsrc:"images/t6.jpg"}
            ]

    });