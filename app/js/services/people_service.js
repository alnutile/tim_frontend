var people_service = angular.module('people_service', ['ngResource']);

people_service.factory('PeopleService', ['$resource',
        function($resource){
            return $resource('/api/v1/people/:pid/:mattersController/:mid',
                {
                    pid: "@id",
                    mattersController: '@mattersController'
                },
                {
                    query: {method:'GET', params:{}, isArray:true},
                    update: {method: 'PUT'},
                    putMatter:{
                        method: 'PUT',
                        params: {
                            mattersController: 'matter'
                        }
                    },
                    postMatter: {
                        method: 'POST',
                        params: {
                            pid: '@id',
                            mattersController: 'matter',
                            mid: ':mid'
                        }
                    }
                }
            );
        }]);