var app = angular.module('app', []);

app.controller('MainController', function($scope, $http) {

    $http.get('https://graph.facebook.com/442382955902604?fields=albums.limit(99999999){photos,name,description}')
    .success(function(data) {
        $scope.albums = [];
        $scope.portadas = [];
        angular.forEach(data.albums.data, function(album, key) {
            if (album.name != "Cover Photos" && album.name != "Profile Pictures") {
                switch (album.name) {
                    case "Abeja Silvestre":
                        $scope.portadas['Abeja Silvestre'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Enjambre":
                        $scope.portadas['Enjambre'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Colmena Silvestre":
                        $scope.portadas['Colmena Silvestre'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Colmena Productora":
                        $scope.portadas['Colmena Productora'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Como SI Actuar":
                        $scope.portadas['Como SI Actuar'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Como NO Actuar":
                        $scope.portadas['Como NO Actuar'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Maltratos":
                        $scope.portadas['Maltratos'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Insectos Relacionados":
                        $scope.portadas['Insectos Relacionados'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Que producen":
                        $scope.portadas['Que producen'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Abejas Recuperadas":
                        $scope.portadas['Abejas Recuperadas'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Preguntas Frecuentes":
                        $scope.portadas['Preguntas Frecuentes'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Que producen":
                        $scope.portadas['Que producen'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Habitantes de la Colmena":
                        $scope.portadas['Habitantes de la Colmena'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Lo que no vemos de una abeja":
                        $scope.portadas['Lo que no vemos de una abeja'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Actividades de los ultimos años":
                        $scope.portadas['Actividades de los ultimos años'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                    case "Videos recomendables para conocer sobre la abeja":
                        $scope.portadas['Videos recomendables para conocer sobre la abeja'] = album.photos.data[0].images[album.photos.data[0].images.length - 1].source;
                        if (album.photos.paging.next !== 'undefined') {
                            $http.get(album.photos.paging.next)
                            .success(function(data2) {
                                album.photos.data = album.photos.data.concat(data2.data);
                            });
                        }
                    break;
                }
                $scope.albums.push(album);
            }
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