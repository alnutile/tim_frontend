var reportsServices = angular.module('matters_services', ['ngResource']);

reportsServices.factory('MattersService', ['$resource',
        function($resource){
            return $resource('/api/v1/matters/:mid', {}, {
                query: {method:'GET', params:{}, isArray:true},
                update: {method:'PUT', isArray:false},
                remove: {method:'DELETE'},
                get:   {method:'GET', params:{mid:'', mid:''}, isArray:true}
            });
        }]).
        factory('MatterFields', ['$resource',
            function($resource){
                return $resource('/api/v1/matters_fields', {}, {
                    query: {method:'GET', params:{}, isArray:false}
                });
            }]);