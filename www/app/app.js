(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router', 'ngMaterial'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider) {
        console.log('config');

        //
        // For any unmatched url, redirect to home
        $urlRouterProvider.otherwise("/map-list");
        
        //
        // Now set up the states
        
        $stateProvider.state('map-list', {
            url: "/map-list",
            templateUrl: "app/map-list/map-list.html"
        });
        
        $stateProvider.state('map-menu', {
            url: "/map-menu/{mapId}",
            templateUrl: "app/map-menu/map-menu.html"
        });

        $stateProvider.state('map', {
            url: "/map",
            templateUrl: "app/map/map.html",
            parent: 'map-menu'
        });

        $stateProvider.state('zombies', {
            url: "/zombies",
            templateUrl: "app/zombies/zombies.html",
            parent: 'map-menu'
        });
        $stateProvider.state('weapons', {
            url: "/weapons",
            templateUrl: "app/weapons/weapons.html",
            parent: 'map-menu'
        });
        $stateProvider.state('exoupgrades', {
            url: "/exo-upgrades",
            templateUrl: "app/exo-upgrades/exoUpgrade.html",
            parent: 'map-menu'
        });
        $stateProvider.state('characters', {
            url: "/characters",
            templateUrl: "app/character/characters.html",
            parent: 'map-menu'
        });
        $stateProvider.state('drops', {
            url: "/drops",
            templateUrl: "app/drops/drops.html",
            parent: 'map-menu'
        });
        $stateProvider.state('features', {
            url: "/features",
            templateUrl: "app/features/features.html",
            parent: 'map-menu'
        });
        $stateProvider.state('song', {
            url: "/song",
            templateUrl: "app/song/song.html",
            parent: 'map-menu'
        });
        $stateProvider.state('achievements', {
            url: "/achievements",
            templateUrl: "app/achievements/achievements.html",
            parent: 'map-menu'
        });
        $stateProvider.state('storys', {
            url: "/story",
            templateUrl: "app/story/story.html",
            parent: 'map-menu'
        });
        $stateProvider.state('character', {
        url: "/character/{CharacterId}",
            templateUrl: "app/character/thatCharacter/thatCharacter.html",
            parent:'map-menu'
        });
        $stateProvider.state('achievement', {
            url: "/achievement/{AchievementId}",
            templateUrl: "app/achievements/thatAchievement/thatAchievement.html",
            parent: 'map-menu'
        });
        $stateProvider.state('drop', {
            url: "/drop/{DropId}",
            templateUrl: "app/drops/thatDrop/thatDrop.html",
            parent: 'map-menu'
        });
        $stateProvider.state('exoupgrade', {
            url: "/exo-upgrade/{ExoupgradeId}",
            templateUrl: "app/exo-upgrades/thatexoupgrade/thatexoupgrade.html",
            parent: 'map-menu'
        });
    }

    function Run() {
        console.log('run');
    }


})();