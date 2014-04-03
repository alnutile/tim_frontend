var sitesController = angular.module('matters_ctrl', []);

sitesController.controller('MattersCTRL', ['$scope', '$http', '$location', '$route', '$routeParams', 'MattersService',
    function($scope, $http, $location, $route, $routeParams, MattersService){
        $scope.matter_viewing = {};
        MattersService.query(function(data){
            $scope.matters = data;
            $scope.getActive(data)
        });

        $scope.nav = { name: "nav", url: "templates/shared/nav.html" }

        $scope.action = "Matters"

        $scope.activeMatter = function(matter) {
            $scope.matter_viewing = matter;
        }

        $scope.getActive = function(data) {
            console.log($routeParams.mid);
            if(!$routeParams.mid) {
                $scope.matter_viewing = data[0];
                return;
            }
            var active = $routeParams.mid;
            angular.forEach(data, function(v, i){
               if(v.id == active) {
                   $scope.matter_viewing = v;
                   return;
               }
            });
        }

    }]);
