var app = angular.module('app', []);

app.controller('MainController', function($scope, $http) {

    $http.get('https://graph.facebook.com/442382955902604?fields=albums.limit(99999999){photos,name,description}')
    .success(function(data) {
        $scope.albums = [];
        angular.forEach(data.albums.data, function(album, key) {
            if (album.name != "Cover Photos" && album.name != "Profile Pictures") {
                $scope.albums.push(album);
            };
        });
    });

});

app.filter('toCamelCase', function() {
    return function(s) {
        // remove all characters that should not be in a variable name
        // as well underscores an numbers from the beginning of the string
        s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
        // uppercase letters preceeded by a hyphen or a space
        s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function(a,b,c) {
            return c.toUpperCase();
        });
        // uppercase letters following numbers
        s = s.replace(/([0-9]+)([a-zA-Z])/g, function(a,b,c) {
            return b + c.toUpperCase();
        });
        return s;
    };
});