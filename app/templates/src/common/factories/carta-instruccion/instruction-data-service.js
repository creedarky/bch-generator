
angular.module('WebBancoChile.cartaInstruccionFactories')
    .factory('instructionDataService_', function() {
        return {
            instruction: null,
            get: function () {
                return this.instruction;
            },
            set: function (instruction) {
                this.instruction = instruction;
            }
        };
    });
