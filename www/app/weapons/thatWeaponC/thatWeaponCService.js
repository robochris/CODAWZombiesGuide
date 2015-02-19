(function () {
    'use strict';

    window.agApp.service('thatWeaponCService', Service);

    function Service() {
        var service = {
            GetThatWeaponL: GetThatWeaponL
        };

        return service;

        function GetThatWeaponL(WeaponId) {
            if (WeaponId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
            if (WeaponId == 2) {
                return [
                    {
                        Id: 1,
                        displayName: "son",
                }
            ]
            }
            if (WeaponId == 3) {
                return [
                    {
                        Id: 1,
                        displayName: "so",
                }
            ]
            }
            if (WeaponId == 4) {
                return [
                    {
                        Id: 1,
                        displayName: "s",
                }
            ]
            }
            if (WeaponId == 5) {
                return [
                    {
                        Id: 1,
                        displayName: "w",
                }
            ]
            }
            if (WeaponId == 6) {
                return [
                    {
                        Id: 1,
                        displayName: "we",
                }
            ]
            }
            if (WeaponId == 7) {
                return [
                    {
                        Id: 1,
                        displayName: "wea",
                }
            ]
            }
            if (WeaponId == 8) {
                return [
                    {
                        Id: 1,
                        displayName: "weap",
                }
            ]
            }
            if (WeaponId == 9) {
                return [
                    {
                        Id: 1,
                        displayName: "weapo",
                }
            ]
            }
            if (WeaponId == 10) {
                return [
                    {
                        Id: 1,
                        displayName: "weapon",
                }
            ]
            }
            if (WeaponId == 11) {
                return [
                    {
                        Id: 1,
                        displayName: "weapons",
                }
            ]
            }
        }
    }
})();