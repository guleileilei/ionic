/**
 * Created by 顾 磊 on 2016/12/21.
 */
angular.module("myapp", ["ionic"]);
angular.module("myapp")
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");
        $stateProvider
            .state("tour", {
                url: "/tour",

                templateUrl: "templates/tour/tour.html"
            })
            .state("tabs", {
                url: "/tabs",
                abstract: true,
                templateUrl: "templates/tabs/tabs.html"
            })
            .state("tabs.home", {
                url: "/home",
                views: {"tab-home": {templateUrl: "templates/home/home.html", controller: "homeCtrl"}}
            })
            .state("tabs.setup", {
                url: "/setup",
                views: {"tab-setup": {templateUrl: "templates/setup/setup.html", controller: "setupCtrl"}}
            })

            .state("tabs.activity", {
                url: "activity",
                views: {"tab-home": {templateUrl: "templates/activity/activity.html", controller: "activityCtrl"}}
            })
            .state("tabs.data", {
                views: {"tab-home": {templateUrl: "templates/data/data.html", controller: "dataCtrl"}}
            })
            .state("tabs.grade", {
                url: "grade",
                views: {"tab-home": {templateUrl: "templates/grade/grade.html", controller: "gradeCtrl"}}
            })


            .state("tabs.weather", {
                url: "/weather",
                views: {"tab-home": {templateUrl: "templates/weather/weather.html", controller: "weatherCtrl"}}
            })
            .state("tabs.dekaron", {
                url: "dekaron",
                views: {"tab-home": {templateUrl: "templates/dekaron/dekaron.html", controller: "dekaronCtrl"}}
            })
            .state("tabs.ranking", {
                url: "/ranking",
                views: {"tab-home": {templateUrl: "templates/ranking/ranking.html", controller: "rankingCtrl"}}
            })

            .state("tabs.music", {
            url: "/music",
            views: {"tab-music": {templateUrl: "templates/music/music.html", controller: "musicCtrl"}}
        });

        $urlRouterProvider.otherwise("tour");
    });