 myApp.controller('to_doCtrl', function($scope,$location,$timeout) {

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

         $scope.todos = [
      {
       
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
       
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
       
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
       
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
       
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];

    $scope.delete=funtion(){


    };
    $scope.edit=funtion(x){
    //x is the activity to be deleted

    };


         $scope.activitySelect=function(x){
            console.log(x);
            if(x==1)
                $location.url("appointment"); 
            if(x==2)
                $location.url("travel_local");
            else if(x==3)
                $location.url("travel_outstation");
            else if(x==4)
                $location.url("phone_calls");
            else if(x==5)
                $location.url("email");
            else if(x==6)
                $location.url("online_research");
              
         };
}
);
