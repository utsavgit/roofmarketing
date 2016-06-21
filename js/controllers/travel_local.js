myApp.controller('travel_localCtrl', function($scope, $routeParams, $q) {
  
   $scope.dats = {
     
      availableModes:[
      	{mode:"car"},
      	{mode:"bike"},
      	{mode:"metro"},
      	{mode:"bus"}
      ]
    };
    console.log( $routeParams.date);
    console.log( $routeParams.userid);

    $scope.repeatSelect;
    
    if($routeParams.activityid) {

      console.log($routeParams);

        function getActivities() {
          var defer = $q.defer();
          firebase.database().ref('/activity/'+$routeParams.userid+'/'+$routeParams.date+'/' + $routeParams.activityid).on('value', function (snapshot) {
             if(!snapshot.val()){
                defer.reject('err no data');
             }else{
                defer.resolve(snapshot.val());
                //return snapshot.val();
             }
          });
        return defer.promise;
        };


        getActivities().then(function(snap){
              $scope.data = snap;
                 console.log($scope.data);
          }, function(err){
               //do something with the error
               console.log(err);
        });

    }


  $scope.eventplan = function(data) {
    console.log(data);
    console.log($routeParams.date);
   
    if(!$routeParams.activityid) {
        var newPostKey = firebase.database().ref('/activity/'+$routeParams.userid).child($routeParams.date).push().key;
      }
      else var newPostKey = $routeParams.activityid;
      
        var updates = {};
        updates['/activity/' + $routeParams.userid  + '/' + $routeParams.date + '/' + newPostKey + '/type'] = "localTravel";
        updates['/activity/' + $routeParams.userid  + '/' + $routeParams.date + '/' + newPostKey + '/planning'] = data.planning;
        
        return firebase.database().ref().update(updates);
    
  };

}); // Controller