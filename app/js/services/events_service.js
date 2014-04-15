var events_service = angular.module('events_service', ['ngResource']);

events_service.factory('EventsService', ['$resource',
        function($resource){
            return $resource('/api/v1/events/:eid',
                {
                    eid: "@eid",
                    mattersController: '@mattersController'
                },
                {
                    query: {method:'GET', params:{}, isArray:true},
                    update: {method: 'PUT'},
                    postMatter: {
                        method: 'POST',
                        params: {
                            eid: '@eid',
                            mid: ':mid',
                            mattersController: 'matter'
                        }
                    },
                    deleteEvent: {method: 'DELETE'},
                    putMatter: {
                        method: 'PUT',
                        params: {
                            eid: '@eid',
                            mid: ':mid',
                            mattersController: 'matter'
                        }
                    }
                }
            );
        }]);