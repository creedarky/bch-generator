/*
 * ng-currency
 * http://alaguirre.com/

 * Version: 0.7.5 - 2014-07-15
 * License: MIT
 */

angular.module('ng-currency', ['WebBancoChile.cartaInstruccionFilters'])
    .directive('ngCurrency', function ($filter, $locale) {
        return {
            require: 'ngModel',
            scope: {
                min: '=min',
                max: '=max',
                currencyType: '=currencyType',
                ngRequired: '=ngRequired',
                fractionSize: '=fractionSize'
            },
            link: function (scope, element, attrs, ngModel) {

                function decimalRex(dChar) {
                    return new RegExp("\\d|\\" + dChar, 'g');
                }

                function clearRex(dChar) {
                    return new RegExp("((\\" + dChar + ")|([0-9]{1,}\\" + dChar + "?))&?[0-9]{0,2}", 'g');
                }

                function decimalSepRex(dChar) {
                    return new RegExp("\\" + dChar, "g");
                }

                function clearValue(value) {
                    value = String(value);
                    var dSeparator = $locale.NUMBER_FORMATS.DECIMAL_SEP;
                    var clear = null;

                    if (value.match(decimalSepRex(dSeparator))) {
                        clear = value.match(decimalRex(dSeparator))
                            .join("").match(clearRex(dSeparator));
                        clear = clear ? clear[0].replace(dSeparator, ".") : null;
                    }else {
                        clear = value.match(/\d/g);
                        clear = clear ? clear.join("") : null;
                    }

                    return clear;
                }

                ngModel.$parsers.push(function (viewValue) {
                    cVal = clearValue(viewValue);
                    if(scope.fractionSize === 0) {
                        cVal = cVal.split(".")[0];
                    }
                    return parseFloat(cVal);
                });

                element.on("blur", function () {
                    element.val($filter('formatCurrency')(ngModel.$modelValue,scope.currencyType,scope.fractionSize));
                });

                element.on("focus", function () {
                    element.val(ngModel.$modelValue);
                });

                ngModel.$formatters.unshift(function (value) {
                    return $filter('formatCurrency')(value,scope.currencyType);
                });

                scope.$watch('currencyType',function(){
                    element.val($filter('formatCurrency')(ngModel.$modelValue,scope.currencyType));
                });


                scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function (newValue, oldValue) {
                    runValidations(newValue);
                });

                function runValidations(cVal) {
                    if (!scope.ngRequired && isNaN(cVal)) {
                        return;
                    }
                    if (scope.min) {
                        var min = parseFloat(scope.min);
                        ngModel.$setValidity('min', cVal >= min);
                    }
                    if (scope.max) {
                        var max = parseFloat(scope.max);
                        ngModel.$setValidity('max', cVal <= max);
                    }
                }
            }
        };
    });

