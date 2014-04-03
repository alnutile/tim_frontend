var reportsServices = angular.module('matters_services', ['ngResource']);

reportsServices.factory('MattersService', ['$resource',
    function($resource){
        return $resource('/api/v1/matters/:mid', {}, {
            query: {method:'GET', params:{}, isArray:true},
            get:   {method:'GET', params:{mid:'', mid:''}, isArray:true}
        });
    }]);