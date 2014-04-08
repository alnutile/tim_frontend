var sitesController = angular.module('matters_ctrl', []);

sitesController.controller('MattersCTRL', ['$scope', '$http', '$location', '$route', '$routeParams', 'MattersService', 'Noty', '$sce', 'MatterFields', 'PeopleService', 'LocationService', 'EventsService',
    function($scope, $http, $location, $route, $routeParams, MattersService, Noty, $sce, MatterFields, PeopleService, LocationService, EventsService){
        $scope.matter_viewing = {};
        $scope.edit_person = {};
        $scope.edit_created = 0;
        $scope.edit_event_mode = [];
        $scope.matters_fields = {};
        $scope.newEvent = {};
        $scope.eventFormShow = 0;
        //Start Calendar Widget
        $scope.format = 'MM/dd/yyyy';

        $scope.today = function() {
            $scope.dt = new Date();
        };

        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yyyy'",
            'starting-day': 1
        };
        //End Calendar

        MattersService.query(function(data){
            $scope.matters = data;
            $scope.getActive(data)
        });

        $scope.people = PeopleService.query();
        $scope.locations = LocationService.query();
        $scope.events = EventsService.query();

        $scope.edit_mode = 0;

        MatterFields.query(
            function(data) {
                $scope.matters_fields = data;
                $scope.roles = data.roles;
            }
        );

        $scope.editMode = function() {
            if($scope.edit_mode === 0) {
                $scope.edit_mode = 1;
                Noty("<i class='glyphicon glyphicon-pencil'></i> You can now in edit mode", 'success');
            } else {
                $scope.edit_mode = 0;
                //@TODO send save back to the server
                Noty("<i class='glyphicon glyphicon-pencil'></i> The data was saved", 'warning');
            }
        };

        $scope.editModeSave = function() {
            $scope.edit_mode = 0;
            //@TODO send save back to the server
            Noty("<i class='glyphicon glyphicon-pencil'></i> The data was saved", 'warning');
        };

        $scope.active_person_is_active = 1; //1 to disable the button


        $scope.nav = { name: "nav", url: "templates/shared/nav.html" }

        $scope.action = "Matters"

        $scope.addPerson  = function() {
            $scope.add_person = {};
            Noty("<i class='glyphicon glyphicon-user'></i> Add a new Person", 'warning');
        }

        $scope.savePerson  = function() {
            Noty("<i class='glyphicon glyphicon-user'></i> New person added click edit to continue", 'warning');
            //@TODO get the new ID of the person to make sure there is a full model to add
            $scope.add_person.id = $scope.matter_viewing.people.witness.length + 1;
            console.log($scope.add_person);
            //@TODO make a method to push it into the correct place eg witness
            //  taking the ID of the role and finding the related role name
            $scope.matter_viewing.people.witness.push($scope.add_person);
            $scope.people.push($scope.add_person);
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

        //Add Event
        $scope.setEditEventMode = function(id) {
            console.log(id);
            $scope.edit_event_mode[id] = 1;
            if(id != 0) {
                Noty("<i class='glyphicon glyphicon-user'></i> You can edit the event", 'warning');
            } else {
                $scope.edit_event_mode[id] = null;
                Noty("<i class='glyphicon glyphicon-user'></i> Event Saved", 'warning');
            }
        }

        $scope.updateEvent = function(id) {
                $scope.edit_event_mode[id] = null;
                Noty("<i class='glyphicon glyphicon-user'></i> Event Saved", 'warning');
        }

        $scope.addEvent = function() {
            $scope.eventFormShow = 1;
            Noty("<i class='glyphicon glyphicon-user'></i> Adding Event", 'warning');

        }

        $scope.submitEvent = function() {
            var eventCreate = new EventsService($scope.newEvent);
            //@TODO might be the first fuction is pass/fail and I need to look at the status messsage
            var response = eventCreate.$save(function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event Added", 'warning');
                $scope.matter_viewing.events.push($scope.newEvent);
                $scope.newEvent = null;
            }, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event could not be added", 'error');
            });

        }

    }]);
