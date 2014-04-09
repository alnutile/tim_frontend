var sitesController = angular.module('matters_ctrl', []);

sitesController.controller('MattersCTRL', ['$scope', '$http', '$location', '$route', '$routeParams', 'MattersService', 'Noty', '$sce', 'MatterFields', 'PeopleService', 'LocationService', 'EventsService', '$modal',
    function($scope, $http, $location, $route, $routeParams, MattersService, Noty, $sce, MatterFields, PeopleService, LocationService, EventsService, $modal){
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
            $scope.edit_event_mode[id] = 1;
            if(id != 0) {
                Noty("<i class='glyphicon glyphicon-user'></i> You can edit the event", 'warning');
            } else {
                $scope.edit_event_mode[id] = null;
                Noty("<i class='glyphicon glyphicon-user'></i> Event Saved", 'warning');
            }
        };

        $scope.addEvent = function() {
            var modalInstance  = $modal.open({
                templateUrl: 'templates/events/new.html',
                controller: 'ModalEventAdd',
                resolve: {
                    locations: function() {
                        return $scope.locations;
                    },
                    matters_fields: function() {
                        return $scope.matters_fields;
                    },
                    matter_viewing: function() {
                        return $scope.matter_viewing;
                    }

                }
            });
            modalInstance.result.then(function(event){
                Noty("<i class='glyphicon glyphicon-user'></i> You will see the  event below", 'warning');
            });
        };

        $scope.updatePerson = function(person) {
            $scope.active_person = person;
            $scope.original = angular.copy(person);
            var modalInstance  = $modal.open({
                templateUrl: 'templates/people/edit.html',
                controller: 'ModalPersonUpdate',
                resolve: {
                    edit_person: function() {
                        return $scope.active_person;
                    }
                }
            });
            modalInstance.result.then(function(person){
                console.log(person);
                Noty("<i class='glyphicon glyphicon-user'></i> Person modified", 'warning');
            }, function(original){
                Noty("<i class='glyphicon glyphicon-user'></i> Your update and changes where canceled", 'warning');
            });

        }

        $scope.updateEvent = function(event) {
            $scope.current_event = event;
            var modalInstance  = $modal.open({
                templateUrl: 'templates/events/edit.html',
                controller: 'ModalEventUpdate',
                resolve: {
                    locations: function() {
                        return $scope.locations;
                    },
                    matters_fields: function() {
                        return $scope.matters_fields;
                    },
                    matter_viewing: function() {
                        return $scope.matter_viewing;
                    },
                    event: function() {
                        return $scope.current_event;
                    }
                }
            });
            modalInstance.result.then(function(event){
                console.log(event);
                Noty("<i class='glyphicon glyphicon-user'></i> You will see the  event below", 'warning');
            }, function(original){
                angular.forEach($scope.matter_viewing.events, function(v, i){
                    //@TODO Ideally here I would reset the original
                });
                Noty("<i class='glyphicon glyphicon-user'></i> Your update and changes where canceled", 'warning');
            });
        };
    }]).controller('ModalEventAdd', ['$scope', '$modalInstance', 'matters_fields', 'locations', 'EventsService', 'Noty', 'matter_viewing', function($scope, $modalInstance, matters_fields, locations, EventsService, Noty, matter_viewing){
        //Start Calendar Widget
        $scope.newEvent = {};
        $scope.matter_viewing = matter_viewing;
        $scope.format = 'MM/dd/yyyy';
        $scope.locations = locations;
        $scope.matters_fields = matters_fields;

        $scope.today = function() {
            $scope.dt = new Date();
        };

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
        $scope.submitEvent = function() {
            var eventCreate = new EventsService($scope.newEvent);
            //@TODO might be the first fuction is pass/fail and I need to look at the status messsage
            var response = eventCreate.$save(function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event Added", 'warning');
                $scope.matter_viewing.events.push($scope.newEvent);
                $scope.newEvent = null;
                $modalInstance.close();
            }, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event could not be added", 'error');
            });
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]).controller('ModalEventUpdate', ['$scope', '$modalInstance', 'matters_fields', 'locations', 'EventsService', 'Noty', 'matter_viewing', 'event', function($scope, $modalInstance, matters_fields, locations, EventsService, Noty, matter_viewing, event){
        //Start Calendar Widget
        $scope.newEvent = {};
        $scope.matter_viewing = matter_viewing;
        $scope.format = 'MM/dd/yyyy';
        $scope.locations = locations;
        $scope.matters_fields = matters_fields;
        $scope.event = event;
        $scope.original = {};
        angular.copy(event, $scope.original);


        $scope.today = function() {
            $scope.dt = new Date();
        };

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

        $scope.cancel = function () {
            $modalInstance.dismiss($scope.original);
        };

        $scope.updateEvent = function() {
            console.log($scope.event);
            //@TODO might be the first fuction is pass/fail and I need to look at the status messsage
            var response = EventsService.update({eid: $scope.event.event_id}, $scope.event, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event Updated", 'warning');
                $modalInstance.close();
            }, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Event could not be updated", 'error');
            });
        };
    }]).controller('ModalPersonUpdate', ['$scope', '$modalInstance', 'Noty', 'edit_person', 'PeopleService', function($scope, $modalInstance, Noty, edit_person, PeopleService){
        $scope.edit_person = edit_person;
        $scope.original = angular.copy(edit_person);
        $scope.cancel = function () {
            $modalInstance.dismiss($scope.original);
        };

        $scope.updateEvent = function() {
            var response = PeopleService.update({pid: $scope.edit_person.id}, $scope.edit_person, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Person Updated", 'warning');
                $modalInstance.close();
            }, function(data){
                Noty("<i class='glyphicon glyphicon-user'></i> Person could not be updated", 'error');
            });
        };
    }]);
