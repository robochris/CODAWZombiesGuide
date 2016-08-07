(function () {
    'use strict';

    window.agApp = angular.module('agApp', ['ui.router', 'ngMaterial', 'headroom'])
        .config(Config)
        .run(Run);


    function Config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        console.log('config');

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('pink');

        // redirect to home
        $urlRouterProvider.otherwise("/map-list");

        $stateProvider.state('achievements', {
            url: "/achievements",
            templateUrl: "app/achievements/achievements.html",
            parent: 'map-menu'
        });
        $stateProvider.state('achievement', {
            url: "/achievement/{AchievementId}",
            templateUrl: "app/achievements/that-achievement/that-achievement.html",
            parent: 'map-menu'
        });
        $stateProvider.state('characters', {
            url: "/characters",
            templateUrl: "app/character/characters.html",
            parent: 'map-menu'
        });
        $stateProvider.state('character', {
            url: "/character/{CharacterId}",
            templateUrl: "app/character/that-character/that-character.html",
            parent: 'map-menu'
        });
        $stateProvider.state('drops', {
            url: "/drops",
            templateUrl: "app/drops/drops.html",
            parent: 'map-menu'
        });
        $stateProvider.state('drop', {
            url: "/drop/{DropId}",
            templateUrl: "app/drops/that-drop/that-drop.html",
            parent: 'map-menu'
        });
        $stateProvider.state('eastereggs', {
            url: "/eastereggs/{EasterEggId}",
            templateUrl: "app/easter-eggs/easter-eggs.html",
            parent: 'map-menu'
        });
        $stateProvider.state('exoupgrades', {
            url: "/exo-upgrades",
            templateUrl: "app/exo-upgrades/exo-upgrade.html",
            parent: 'map-menu'
        });
        $stateProvider.state('exoupgrade', {
            url: "/exo-upgrade/{ExoupgradeId}",
            templateUrl: "app/exo-upgrades/that-exo-upgrade/that-exo-upgrade.html",
            parent: 'map-menu'
        });
        $stateProvider.state('features', {
            url: "/features",
            templateUrl: "app/features/features.html",
            parent: 'map-menu'
        });
        $stateProvider.state('feature', {
            url: "/feature/{FeatureId}",
            templateUrl: "app/features/that-feature/that-feature.html",
            parent: 'map-menu'
        });
        $stateProvider.state('trap', {
            url: "/trap/{TrapId}",
            templateUrl: "app/features/that-feature/feature/feature.html",
            parent: 'map-menu'
        });
        $stateProvider.state('map', {
            url: "/map",
            templateUrl: "app/map/map.html",
            parent: 'map-menu'
        });
        $stateProvider.state('map-list', {
            url: "/map-list",
            templateUrl: "app/map-list/map-list.html"
        });
        $stateProvider.state('map-menu', {
            url: "/map-menu/{mapId}",
            templateUrl: "app/map-menu/map-menu.html"
        });
        $stateProvider.state('oz', {
            url: "/oz",
            templateUrl: "app/oz-room/oz-room.html",
            parent: 'map-menu'
        });
        $stateProvider.state('songs', {
            url: "/songs/{SongId}",
            templateUrl: "app/song/song.html",
            parent: 'map-menu'
        });
        $stateProvider.state('storys', {
            url: "/story/{StoryId}",
            templateUrl: "app/story/story.html",
            parent: 'map-menu'
        });
        $stateProvider.state('strategy', {
            url: "/strategy/{StrategyId}",
            templateUrl: "app/strategy/strategy.html",
            parent: 'map-menu'
        });
        $stateProvider.state('tip', {
            url: "/tip/{tipId}",
            templateUrl: "app/tips/tips.html",
            parent: 'map-menu'
        });
        $stateProvider.state('weapon-category', {
            url: "/weapon-category",
            templateUrl: "app/weapons/weapons.html",
            parent: 'map-menu'
        });
        $stateProvider.state('weapons', {
            url: "/weapons/{WeaponId}",
            templateUrl: "app/weapons/that-weapon/that-weapon.html",
            parent: 'map-menu'
        });
        $stateProvider.state('weapon', {
            url: "/weapon/{weapontId}",
            templateUrl: "app/weapons/that-weapon/weapon/weapon.html",
            parent: 'map-menu'
        });
        $stateProvider.state('zombies', {
            url: "/zombies",
            templateUrl: "app/zombies/zombies.html",
            parent: 'map-menu'
        });
        $stateProvider.state('zombie', {
            url: "/zombie/{ZombieId}",
            templateUrl: "app/zombies/that-zombie/that-zombie.html",
            parent: 'map-menu'
        });
    }

    function Run() {
        console.log('run');
    }


})();