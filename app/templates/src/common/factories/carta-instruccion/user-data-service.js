angular.module('WebBancoChile.cartaInstruccionFactories')
    .factory('userDataService_', function($injector,URL_API,rutBancoChile,$q) {
        var ROL_APODERADO = 2;

        var userDataService_ = {
            user: null,
            rut : null,
            getRut: function() {
                if(userDataService_.rut == null) {
                    userDataService_.rut = angular.copy(rutBancoChile);
                }
                return this.rut;
            },get: function() {
                if(this.user == null) {
                    return userDataService_.getUser();
                }
                return $q.when(this.user);
            },
            set: function(user) {
                this.user = user;
            },getUser:function() {
                var $http = $injector.get('$http');
                return $http.get(URL_API + '/cartas-instruccion/perfil').then(resultUser);

            },login: function(rut,password) {
                this.rut = rut;
                return this.getUser();
                /*
                switch(rut.toLowerCase()) {
                    case '6650278-3':
                        this.user =
                        break;
                    case '10696934-5':
                        this.user = {nombre:'Fernando Varas', rut:rut, mail:'fvaras@trassa.cl',empresa:"Trassa Salud", rutEmpresa:'77463460-6',rol:'apoderado',idRol:2};
                        break;
                    case '6992739-4':
                        this.user = {nombre:'Mario Fernandez', rut:rut, mail:'mfernandez@ccu.cl',empresa:"Compa\u00f1ias Cerveceras unidas", rutEmpresa:'99554560-8',rol:'inscriptor',idRol:1};
                        break;
                    case '11833619-4':
                        this.user = {nombre:'Julia Matthews', rut:rut, mail:'jmatthews@ccu.cl',empresa:"Compa\u00f1ias Cerveceras unidas", rutEmpresa:'99554560-8',rol:'apoderado',idRol:2};
                        break;
                    case '12830094-5':
                        this.user= {nombre:'Victor Isla', rut:rut, mail:'visla@bancochile.cl',empresa:"Banco de Chile", rutEmpresa:'97004000-5',rol:'transactioncontrol',idRol:3};
                        break;
                    case '13495415-9':
                        this.user= {nombre:'Gabriel Pulgar', rut:rut, mail:'gpulgar@bancochile.cl',empresa:"Banco de Chile", rutEmpresa:'97004000-5',rol:'transactioncontrol',idRol:7};
                        break;
                    case '12488585-k':
                        this.user={nombre:'Veronica Feres', rut:rut, mail:'vferes@bancochile.cl',empresa:"Banco de Chile", rutEmpresa:'97004000-5',rol:'operaciones',idRol:4}; 
                        break;
                    case '14142987-6':
                        this.user={nombre:'Marcelo Castro', rut:rut, mail:'mcastro@bancochile.cl',empresa:"Banco de Chile", rutEmpresa:'97004000-5',rol:'operaciones',idRol:4};
                        break;
                    default:
                        this.user = null;
                        break;
                }
                */

            },isRepresentative : function(user) {
                return user.idRol === ROL_APODERADO;
            }

        };
        return userDataService_;
        function resultUser(result) {
            var data = result.data;
            userDataService_.user = {
                nombre: data.nombre, rut: data.rut, mail: data.email, empresa: data.empresa.nombre,
                rutEmpresa: data.empresa.rut, rol: data.roles[0].descripcion, idRol: data.roles[0].id
            };
            userDataService_.rut = data.rut;
            return userDataService_.get();
        }
    });
