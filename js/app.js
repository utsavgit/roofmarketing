var myApp = angular.module('myApp', ['ngRoute','ngMaterial','ngMessages']);

    myApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.
<<<<<<< HEAD
      when('/travel_local/:x', {
          templateUrl: 'views/travel_local.html',
          controller: 'travel_localCtrl'
=======
      when('/travel_local', {
          templateUrl: 'views/travel_local.html',
          controller: 'RegistrationController'
>>>>>>> 8d75325bd87414560d0453afc9a6270ae3c53b50
      });
      
      // when('/travel_local', {
      //     templateUrl: 'views/travel_local.html',
      //     controller: 'travel_localCtrl'
      // }).
      // when('/travel_outstation', {
      //     templateUrl: 'views/travel_outstation.html',
      //     controller: 'travel_outstationCtrl'
      // }).
      // when('/appointment', {
      //     templateUrl: 'views/appointment.html',
      //     controller: 'appointmentCtrl'
      // }).
      // when('/email', {
      //     templateUrl: 'views/email.html',
      //     controller: 'emailCtrl'
      // }).
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
     }
     ]);

    myApp.controller('to_doCtrl', function($scope,$location) {

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
        availableOptions: [
          {id: '1', name: 'Appointment'},
          {id: '2', name: 'Travel_local'},
          {id: '3', name: 'Travel_outstation'},
          {id: '4', name: 'Phone_calls'},
          {id: '5', name: 'Email'},
          {id: '6', name: 'Online_research'},
          {id: '7', name: 'Leave'},
          {id: '8', name: 'Data_entry'},
          {id: '9', name: 'Meeting'},
          {id: '10', name: 'Training'},
          {id: '11', name: 'Planning'},
          {id: '12', name: 'Break'},
          {id: '13', name: 'Others'}
        ],
         };

         $scope.activitySelect=function(x){
            console.log(x);
            if(x==2)
<<<<<<< HEAD
                $location.url("travel_local"+x);
=======
                $location.url("travel_local");
>>>>>>> 8d75325bd87414560d0453afc9a6270ae3c53b50


         };
}
);
<<<<<<< HEAD

     myApp.controller('travel_localCtrl', ['$scope', function($scope) {
         $scope.data = {
      group1 : 'Car',
      group2 : '2',
      group3 : 'avatar-1'
    };

     
    }
    ]);
=======
>>>>>>> 8d75325bd87414560d0453afc9a6270ae3c53b50
