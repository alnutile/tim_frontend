var location_service = angular.module('location_service', ['ngResource']);

location_service.factory('LocationService', ['$resource',
        function($resource){
            return $resource('/api/v1/locations/:lid', {}, {
                query: {method:'GET', params:{}, isArray:true}
            });
        }]);