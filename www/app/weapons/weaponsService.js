(function () {
    'use strict';

    window.agApp.service('weaponsService', Service);

    function Service() {
        var service = {
            GetWeapons: GetWeapons
        };

        return service;

        function GetWeapons(mapId) {
            if (mapId == 2) {
                return [
                    {
                        WeaponId: 1,
                        displayName: "Assault Rifles",
                },
                    {
                        WeaponId: 2,
                        displayName: "Submachine Guns",
                },
                    {
                        WeaponId: 3,
                        displayName: "Shotguns",
                },
                    {
                        WeaponId: 4,
                        displayName: "Sniper Rifles",
                },
                    {
                        WeaponId: 5,
                        displayName: "Heavy Weapons",
                },
                    {
                        WeaponId: 6,
                        displayName: "Pistols",
                },
                    {
                        WeaponId: 7,
                        displayName: "Launchers",
                },
                    {
                        WeaponId: 8,
                        displayName: "Specials",
                },
                    {
                        WeaponId: 9,
                        displayName: "Attachments",
                },
                    {
                        WeaponId: 10,
                        displayName: "Exo Launcher",
                },
                    {
                        WeaponId: 11,
                        displayName: "Miscellaneous",
                },


            ]
            } else if (mapId == 1) {
                return [
                    {
                        WeaponId: 12,
                        displayName: "Atlas 45",
                },
                    {
                        WeaponId: 13,
                        displayName: "Tac-19",
                },
                    {
                        WeaponId: 14,
                        displayName: "Pytaek",
                },
                    {
                        WeaponId: 15,
                        displayName: "HNRa3",
                },
                    {
                        WeaponId: 16,
                        displayName: "SN6",
                },
                    {
                        WeaponId: 17,
                        displayName: "ASM1",
                },
                    {
                        WeaponId: 18,
                        displayName: "EM1",
                },

            ]
            }
        }
    }

})();