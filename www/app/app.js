(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider) {
        console.log('config');

        //
        // For any unmatched url, redirect to home
        $urlRouterProvider.otherwise("/map-list");
        //
        // Now set up the states
        $stateProvider.state('Maps', {
            url: "/map-list",
            templateUrl: "app/Map-list/map-list.html"
        });
        $stateProvider.state('menus', {
            url: "/menu-list",
            templateUrl: "app/menu-list/menu-list.html"
        });

        $stateProvider.state('map', {
            url: "/map",
            templateUrl: "app/map/map.html"
        });
    }

    function Run() {
        console.log('run');
    }


})();