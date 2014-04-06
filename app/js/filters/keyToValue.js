var keyToValue = angular.module('keyToValue', []);
keyToValue.filter("caseType", ['$rootScope', function($rootScope) {
        return function(value, scope) {
            var output = value;
            if(!angular.isUndefined(value)) {
                angular.forEach(scope.matters_fields.case_types, function(v,i){
                    if(v.key == value) {
                        output = v.value;
                    }
                })
            }
            return output;
        };
}]).filter("people", ['$rootScope', function($rootScope) {
        return function(value, scope) {
            var output = value;
            if(!angular.isUndefined(value)) {
                angular.forEach(scope.people, function(v,i){
                    if(v.id == value) {
                        output = v.firstname + " " + v.lastname;
                    }
                })
            }
            return output;
        };
}]).filter("location", ['$rootScope', function($rootScope) {
        return function(value, scope) {
            var output = value;
            if(!angular.isUndefined(value)) {
                angular.forEach(scope.locations, function(v,i){
                    if(v.id == value) {
                        output = v.name;
                    }
                })
            }
            return output;
        };
    }]).filter("events", ['$rootScope', function($rootScope) {
        return function(value, scope) {
            var output = value;
            if(!angular.isUndefined(value)) {
                angular.forEach(scope.events, function(v,i){
                    if(v.id == value) {
                        output = v.name;
                    }
                })
            }
            return output;
        };
    }]);