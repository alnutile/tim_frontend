var sitesController = angular.module('matters_ctrl', []);

sitesController.controller('MattersCTRL', ['$scope', '$http', '$location', '$route', '$routeParams', 'MattersService', 'Noty', '$sce',
    function($scope, $http, $location, $route, $routeParams, MattersService, Noty, $sce){
        $scope.matter_viewing = {};
        $scope.edit_person = {};
        $scope.roles = [
            {
                id: 1,
                label: "Witness"
            },
            {
                id: 2,
                label: "Lawyer"
            },
            {
                id: 3,
                label: "Victim"
            }
        ];
        $scope.active_person_is_active = 1; //1 to disable the button
        MattersService.query(function(data){
            $scope.matters = data;
            $scope.getActive(data)
        });

        $scope.nav = { name: "nav", url: "templates/shared/nav.html" }

        $scope.action = "Matters"

        $scope.addPerson  = function() {
            $scope.add_person = {};
            Noty("<i class='glyphicon glyphicon-user'></i> Add a new Person", 'warning');
        }

        $scope.savePerson  = function() {
            Noty("<i class='glyphicon glyphicon-user'></i> New person added click edit to continue", 'warning');
            //@TODO get the new ID of the person to make sure there is a full model to add
            console.log($scope.matter_viewing.people);
            $scope.add_person.id = $scope.matter_viewing.people.witness.length + 1;
            console.log($scope.add_person);
            $scope.matter_viewing.people.witness.push($scope.add_person);
            $scope.edit_person = $scope.add_person;
            $scope.add_person = null;
        }

        $scope.activeMatter = function(matter) {
            $location.path("/dashboard/matters/" + matter.id);
            $scope.matter_viewing = matter;
            Noty("<i class='glyphicon glyphicon-th'></i> Loading matter " + matter.name, 'success');
        }

        $scope.updatePerson = function(matter) {
            Noty("<i class='glyphicon glyphicon-user'></i> Updated " + matter.name, 'information');
        }

        $scope.activePerson = function(person) {
            $scope.active_person = person;
            $scope.active_person_is_active = 0; //0 to enable the button
        };

        $scope.editPerson = function(person) {
            $scope.edit_person = person;
            Noty("<i class='glyphicon glyphicon-pencil'></i> Edit Person " + person.firstname, 'success');

        };

        $scope.getActive = function(data) {
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
