var reportsServices = angular.module('reportsServices', ['ngResource']);

reportsServices.factory('ReportsServices', ['$resource',
    function($resource){
        return $resource('/behat_editor_services_v2/sites/:sid/reports/:rid', {}, {
            query: {method:'GET', params:{sid:'', rid:'', meta: true}, isArray:true},
            get:   {method:'GET', params:{sid:'', rid:''}, isArray:true} //got object error if not defining get here
        });
    }]).
    factory('ReportsDash', ['$resource',
        function($resource){
            return $resource('/behat_editor_services_v2/reports/:rid', {}, {
                query: {method:'GET', params:{rid:''}, isArray:false}
            });
        }]).
    factory('ReportsTestsService', ['$resource',
    function($resource){
        return $resource('/behat_editor_services_v2/sites/:sid/tests/:tname/reports/:rid', {}, {
            query: {method:'GET', params:{sid:'', tname:'', rid:''}, isArray:true},
            get:   {method:'GET', params:{sid:'', rid:''}, isArray:true} //got object error if not defining get here
        });
    }]).
    factory('ReportsDashboard', ['$resource',
        function($resource){
            return $resource('/behat_editor_services_v2/sites/reports', {}, {
                query: {method:'GET', params:{ }, isArray:false}
            });
    }]).
    factory('ReportSiteNumbers', ['$resource',
        function($resource){
            return $resource('/behat_editor_services_v2/sites/:sid/reports_numbers', {}, {
                query: {method:'GET', params:{ sid: '' }, isArray:false},
                get: {method:'GET', params:{ sid: '' }, isArray:false}
            });
        }]);