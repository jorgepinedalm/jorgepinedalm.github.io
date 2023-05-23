var app = angular.module("editorialServices", []);

app.factory("editorialServi", ["$http", "$q", function ($http, $q) {
    console.log("editorialServi");
    return {

        getListado: function () {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('data.json').success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },
        getObrasFiltro: function (obj) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.post('https://editorial.unimagdalena.edu.co/Editorial/FiltrarCatalogo', obj).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        filtrarCategorias: function (tipo) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.post('https://editorial.unimagdalena.edu.co/Editorial/FiltrarCatalogoCategoria', { tipo: tipo }).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        getObra: function (id) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('https://editorial.unimagdalena.edu.co/Editorial/getObraPublico/' + id).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        GetDistribuidores: function () {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('https://editorial.unimagdalena.edu.co/Editorial/GetDistribuidores').success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },
        

        getDataPerfilUserCliente: function (id) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('/Home/getDataCliente/' + id).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        cambiarPassword: function (data) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.post('/Usuarios/cambiarPassword/', data).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        GuardarDescarga: function (data) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.post('/Editorial/guardarDescarga', data).success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

        getDataUbicacion: function () {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get('https://ipinfo.io?token=ac0aed50ae3667').success(function (data) {
                defered.resolve(data);
            }).error(function (err) {
                defered.reject(err);
            })
            return promise;
        },

    }
}])