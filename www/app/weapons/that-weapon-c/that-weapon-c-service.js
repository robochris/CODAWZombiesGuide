(function () {
    'use strict';

    window.agApp.service('thatWeaponCService', Service);

    function Service() {
        var service = {
            GetThatWeaponL: GetThatWeaponL
        };

        return service;

        function GetThatWeaponL(WeaponId,mapId) {
            if (WeaponId == 1) {
                return [
                    {
                        weapontId: 1,
                        displayName: "AK-12",
                },
                    {
                        weapontId: 2,
                        displayName: "Bal-27",
                },
                    {
                        weapontId: 3,
                        displayName: "IMR",
                },
                    {
                        weapontId: 4,
                        displayName: "HBRa3",
                },
                    {
                        weapontId: 5,
                        displayName: "ARX-160",
                },
                    {
                        weapontId: 6,
                        displayName: "MK14",
                },
                    {
                        weapontId: 7,
                        displayName: "AE4",
                },
            ]
            }
            if (WeaponId == 2) {
                return [
                    {
                        weapontId: 8,
                        displayName: "ASM1",
                },
                    {
                        weapontId: 9,
                        displayName: "MP11",
                },
                    {
                        weapontId: 10,
                        displayName: "SN6",
                },
                    {
                        weapontId: 11,
                        displayName: "SAC3",
                },
                    {
                        weapontId: 12,
                        displayName: "AMR9",
                },
            ]
            }
            if (WeaponId == 3) {
                return [
                    {
                        weapontId: 13,
                        displayName: "Bulldog",
                },
                    {
                        weapontId: 14,
                        displayName: "S-12",
                },
                    {
                        weapontId: 15,
                        displayName: "TAC-19",
                },
                    {
                        weapontId: 16,
                        displayName: "CEL-3 Cauterizer",
                },
            ]
            }
            if (WeaponId == 4) {
                return [
                    {
                        weapontId: 17,
                        displayName: "Lynx",
                }
            ]
            }
            if (WeaponId == 5) {
                var weapons = [
                    {
                        weapontId: 18,
                        displayName: "EM1",
                    },
                    {
                        weapontId: 19,
                        displayName: "Ameli",
                    },
                    {
                        weapontId: 20,
                        displayName: "Pytack",
                    }
                ];
                if (mapId == 3) {
                    weapons.push({
                        weapontId: 45,
                        displayName: "Magnetron",
                    });
                }
                return weapons;
            }
            if (WeaponId == 6) {
                return [
                    {
                        weapontId: 21,
                        displayName: "Atlas 45",
                },
                    {
                        weapontId: 22,
                        displayName: "RW1",
                },
                    {
                        weapontId: 23,
                        displayName: "PDW",
                },
            ]
            }
            if (WeaponId == 7) {
                return [
                    {
                        weapontId: 24,
                        displayName: "MAHEM",
                }
            ]
            }
            if (WeaponId == 8) {
                return [
                    {
                        weapontId: 25,
                        displayName: "Crossbow",
                },
                    {
                        weapontId: 26,
                        displayName: "Ripped Turret",
                },

            ]
            }
            if (WeaponId == 9) {
                return [
                    {
                        weapontId: 27,
                        displayName: "Target Enhancer",
                },
                    {
                        weapontId: 28,
                        displayName: "Thermal Sight",
                },
                    {
                        weapontId: 29,
                        displayName: "Red Dot Sight",
                },
                    {
                        weapontId: 30,
                        displayName: "Auto Focus Sight",
                },
                    {
                        weapontId: 31,
                        displayName: "Hybrid Sight",
                },
                    {
                        weapontId: 32,
                        displayName: "Laser Sight",
                },
                    {
                        weapontId: 33,
                        displayName: "Extended Mags",
                },
                    {
                        weapontId: 34,
                        displayName: "Rapid Fire",
                },
                    {
                        weapontId: 35,
                        displayName: "Stock",
                },
                    {
                        weapontId: 36,
                        displayName: "Quickdraw Grip",
                },

            ]
            }
            if (WeaponId == 10) {
                return [
                    {
                        weapontId: 37,
                        displayName: "Frag Grenades",
                },
                    {
                        weapontId: 38,
                        displayName: "Contact Grendades",
                },
                    {
                        weapontId: 39,
                        displayName: "Nano Swarm",
                },
                    {
                        weapontId: 40,
                        displayName: "Distraction Drone",
                },
                    {
                        weapontId: 41,
                        displayName: "Explosive Drone",
                },
            ]
            }
            if (WeaponId == 11) {
                return [
                    {
                        weapontId: 42,
                        displayName: "Boost Slam",
                },
                    {
                        weapontId: 43,
                        displayName: "Exo Melee",
                },
                    {
                        weapontId: 44,
                        displayName: "Knife",
                },
            ]
            }
            // riot weapons
            if (WeaponId == 12) {
                return [
                    {
                        weapontId: 21,
                        displayName: "Atlas 45",
                },
                    {
                        weapontId: 15,
                        displayName: "TAC-19",
                },
                    {
                        weapontId: 20,
                        displayName: "Pytack",
                },
                    {
                        weapontId: 4,
                        displayName: "HBRa3",
                },
                    {
                        weapontId: 10,
                        displayName: "SN6",
                },
                    {
                        weapontId: 8,
                        displayName: "ASM1",
                },
                    {
                       weapontId: 18,
                        displayName: "EM1",
                },
            ]
            }
        }
    }
})();