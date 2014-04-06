var events_service = angular.module('events_service', ['ngResource']);

events_service.factory('EventsService', ['$resource',
        function($resource){
            return $resource('/api/v1/events/:lid', {}, {
                query: {method:'GET', params:{}, isArray:true}
            });
        }]);