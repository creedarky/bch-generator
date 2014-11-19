(function(){
    angular.module('WebBancoChile.cartaInstruccionFilters')
        .filter('formatCurrency', formatCurrency)
        .filter('transaction',transaction);

    function formatCurrency($filter,$locale) {
        var numberFilter = $filter('number');
        var formats = $locale.NUMBER_FORMATS;
        var pattern = formats.PATTERNS[1];
        formats.DEFAULT_PRECISION = angular.isUndefined(formats.DEFAULT_PRECISION) ? 2 : formats.DEFAULT_PRECISION;
        var processAmount = function (amount, currencySymbol,fractionSize) {

            if (isNaN(parseInt(amount, 10))) {
                return '';
            }
            if (angular.isUndefined(currencySymbol)) {
                currencySymbol = formats.CURRENCY_SYM;
            }
            var isNegative = amount < 0;
            var parts = [];
            amount = amount.toString().replace(",", ".");
            amount = Math.abs(amount);

            fractionSize = angular.isDefined(fractionSize) ? fractionSize : amount % 1 !== 0 ? 2 : 0;
            var number = numberFilter(amount, fractionSize);
            parts.push(isNegative ? pattern.negPre : pattern.posPre);
            parts.push(currencySymbol);
            parts.push(number);
            parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
            return parts.join('').replace(/\u00A4/g, '');
        };

        return function (amount, currencySymbol,fractionSize) {
            return processAmount(amount,currencySymbol,fractionSize);
        };
    }
    function transaction() {
        return function (input, length) {
            if(angular.isUndefined(input)) {
                return '';
            }
            length = angular.isUndefined(length) ? 4 : length;
            var result = input.toString();
            while(result.length <= length) {
                result = "0".concat(result);
            }
            return result;
        };
    }
})();

