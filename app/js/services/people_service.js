var people_service = angular.module('people_service', ['ngResource']);

people_service.factory('PeopleService', ['$resource',
        function($resource){
            return $resource('/api/v1/people/:pid', {}, {
                query: {method:'GET', params:{}, isArray:true}
            });
        }]);