var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/appointment', {
        templateUrl: 'views/appointment.html',
        controller: 'appointmentCtrl'
    })
    .when('/travel_local', {
        templateUrl: 'views/travel_local.html',
        controller: 'travel_localCtrl'
    })
    .when('/travel_outstation', {
        templateUrl: 'views/travel_outstation.html',
        controller: 'travel_outstationCtrl'
    })
    .when('/online_research', {
        templateUrl: 'views/online_research.html',
        controller: 'online_researchCtrl'
    })
    .when('/email', {
        templateUrl: 'views/email.html',
        controller: 'emailCtrl'
    })
    .when('/phone_calls', {
        templateUrl: 'views/phone_calls.html',
        controller: 'phone_callsCtrl'
    });
    // when('/meeting', {
    //     templateUrl: 'views/meeting.html',
    //     controller: 'meetingCtrl'
    // }).
    // when('/break', {
    //     templateUrl: 'views/break.html',
    //     controller: 'breakCtrl'
    // }).
    // when('/planning', {
    //     templateUrl: 'views/planning.html',
    //     controller: 'planningCtrl'
    // }). 
    // otherwise({
    //     redirectTo: '/first'
    // });
}]);

myApp.controller('to_doCtrl', function($scope, $location, $timeout) {

    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate()
    );
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate()
    );
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
    console.log($scope.myDate);

    $scope.data = {
        repeatSelect: null,
        availableOptions: [{
            id: '1',
            name: 'Appointment'
        }, {
            id: '2',
            name: 'Travel_local'
        }, {
            id: '3',
            name: 'Travel_outstation'
        }, {
            id: '4',
            name: 'Phone_calls'
        }, {
            id: '5',
            name: 'Email'
        }, {
            id: '6',
            name: 'Online_research'
        }, {
            id: '7',
            name: 'Leave'
        }, {
            id: '8',
            name: 'Data_entry'
        }, {
            id: '9',
            name: 'Meeting'
        }, {
            id: '10',
            name: 'Training'
        }, {
            id: '11',
            name: 'Planning'
        }, {
            id: '12',
            name: 'Break'
        }, {
            id: '13',
            name: 'Others'
        }],
    };



    $scope.activitySelect = function(x) {
        console.log(x);
        if (x == 1)
            $location.url("appointment");
        if (x == 2)
            $location.url("travel_local");
        else if (x == 3)
            $location.url("travel_outstation");
        else if (x == 4)
            $location.url("phone_calls");
        else if (x == 5)
            $location.url("email");
        else if (x == 6)
            $location.url("online_research");

    };
});