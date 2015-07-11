(function () {
        'use strict';

        window.agApp.service('songsService', Service);

        function Service() {
            var service = {
                GetSongs: GetSongs
            };

            return service;

            function GetSongs() {
                return {
                    SongId: 1,
                    displayName: "Ride of the Valkyries",
                

                SongId: 2,
                    displayName: "Toccata and Fugue in D minor",
                    
                    SongId: 3,
                    displayName: "Song"
            };




        }
    }

})();