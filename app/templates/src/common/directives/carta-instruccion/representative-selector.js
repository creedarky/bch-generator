(function () {
    angular.module('WebBancoChile.selectorApoderados', [
        'ui.select'
    ]);

    angular.module('WebBancoChile.selectorApoderados')
        .directive('representativeSelector', representativeSelector);

    representativeSelector.$inject = ['$timeout'];
    function representativeSelector($timeout) {
        return {
            restrict: 'E',
            scope: {
                source: '=',
                target: '=ngModel',
                ngChange: '&',
                isArray: '@',
                hideLabel: '@'
            },
            require: '?ngModel',
            templateUrl: 'directives/carta-instruccion/representative-selector.tpl.html',
            link: function (scope, elements, attr) {
                attr.isArray = scope.$eval(attr.isArray);
                scope.selected = scope.target;
                scope.addRepresentative = function (representative) {
                    if (attr.isArray) {
                        addToArray(representative);
                    } else {
                        scope.target = representative;
                    }
                    ngChange();
                };
                scope.removeRepresentative = function (representative) {
                    if (attr.isArray) {
                        removeFromArray(representative);
                    } else {
                        scope.target = null;
                    }
                    ngChange();
                };
                var removeFromArray = function (representative) {
                    _.pull(scope.target, representative);
                    scope.source.push(representative);
                };

                var addToArray = function (representative) {
                    _.pull(scope.source, representative);
                    scope.target = angular.isDefined(scope.target) ? scope.target : [];
                    scope.target.push(representative);
                };

                var ngChange = function () {
                    $timeout(scope.ngChange, 0);
                };
            }
        };
    }
    angular.module('WebBancoChile.selectorApoderados').run(["$templateCache", function($templateCache) {
        $templateCache.put("directives/carta-instruccion/representative-selector.tpl.html",
            "<section ng-class=\"{'col-md-12 col-lg-12 select-modal':!isArray,'col-md-4 col-lg-4':isArray}\">\n" +
            "    <label ng-hide=\"hideLabel\" >Seleccione Apoderado</label>\n" +
            "    <ui-select ng-model=\"selected\" ng-required=\"true\" on-select=\"addRepresentative($item)\">\n" +
            "        <ui-select-match placeholder=\"Seleccione...\">\n" +
            "            <span ng-if=\"!isArray && target != null\">{{$select.selected.nombre}}</span>\n" +
            "            <span ng-if=\"isArray || target == null\">Seleccionar...</span>\n" +
            "        </ui-select-match>\n" +
            "        <ui-select-choices repeat=\"representative in source | orderBy:'nombre' | filter:{nombre:$select.search}\">\n" +
            "            <b>{{representative.nombre}}</b> {{representative.rut | rut}}\n" +
            "        </ui-select-choices>\n" +
            "    </ui-select>\n" +
            "    <p class=\"alert-validation-drop\" ng-show=\"target == null || target.length == 0\">Debe seleccionar al menos un apoderado</p>\n" +
            "</section>\n" +
            "\n" +
            "<ul class=\"apoderados-select  col-md-8 col-lg-8\" ng-if=\"isArray\">\n" +
            "    <li class=\"head-list\">\n" +
            "        <label >Apoderados Seleccionados</label>\n" +
            "        <label class=\"pull-right\">Vias de Notificaci&oacute;n</label>\n" +
            "    </li>\n" +
            "\n" +
            "    <li ng-repeat=\"representative in target\">\n" +
            "        \n" +
            "        <img src=\"assets/images/perfil.jpg\" class=\"responsive img-circle\"/>\n" +
            "        {{representative.nombre}} {{representative.rut | rut}}\n" +
            "        <span class=\"icon-cross cancel\" ng-click=\"removeRepresentative(representative)\"></span>\n" +
            "        <span class=\"icon-desktop\"></span>\n" +
            "        <span class=\"icon-mobile\"></span>\n" +
            "    </li>\n" +
            "</ul>\n" +
            "\n" +
            "");
    }]);

})();