 myApp.controller('to_doCtrl', function($scope,$location,$timeout, $q, $filter, $firebaseArray, $firebaseObject) {

      $scope.userid;
      $scope.date = new Date();

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
     //angularfire method of retrieval
     $scope.getActivities = function() {
        console.log("hello");
        var dates = $filter('date')($scope.date, 'dd-MM-yy');
        console.log(dates);
        console.log($scope.userid);
        var ref = firebase.database().ref('/activity/' + $scope.userid + '/' + dates);
        $scope.todos = $firebaseArray(ref);
      };

    // $scope.todos=getActivities();
    console.log( $scope.todos);
    
    $scope.delete=function(x){
      console.log("deleting");
      var dates = $filter('date')($scope.date, 'dd-MM-yy');
      var updates = {};
        updates['/activity/' + $scope.userid + '/' + dates + '/' + x] = null;
        return firebase.database().ref().update(updates);
     };

    $scope.edit=function(x){
      var dates = $filter('date')($scope.date, 'dd-MM-yy');
      $location.url("travel_local").search({date:dates, userid:$scope.userid,activityid:x});
    };


         $scope.activitySelect=function(x){
            console.log(x);
            var dates = $filter('date')($scope.date, 'dd-MM-yy');
            console.log(dates);
            if(x==1)
                $location.url("appointment"); 
            if(x==2)
                $location.url("travel_local").search({date:dates, userid:$scope.userid});
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