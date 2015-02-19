(function () {
    'use strict';

    window.agApp.service('songsService', Service);

    function Service() {
        var service = {
            GetSongs: GetSongs
        };

        return service;

        function GetSongs() {
            return [
                {
                    SongId: 1,
                    displayName: "Ride of the Valkyries",
                },
                

            ]
        }
    }

})();