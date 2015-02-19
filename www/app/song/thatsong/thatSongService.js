(function () {
    'use strict';

    window.agApp.service('thatSongService', Service);

    function Service() {
        var service = {
            GetThatSong: GetThatSong
        };

        return service;

        function GetThatSong(SongId) {
            if (SongId == 1) {
                return [
                    {
                        Id: 1,
                        displayName: "song",
                }
            ]
            }
        }
    }
})();